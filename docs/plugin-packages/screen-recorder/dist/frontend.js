import * as Yn from "vue";
import { inject as Ge, ref as H, shallowRef as po, computed as F, watch as We, onMounted as sn, onUnmounted as vr, defineComponent as ue, h as Vs, createVNode as J, Text as ho, Fragment as Oe, getCurrentInstance as St, unref as C, readonly as mo, getCurrentScope as go, onScopeDispose as _o, nextTick as nt, isRef as vo, warn as yo, provide as bo, createElementBlock as X, openBlock as j, mergeProps as wo, renderSlot as Lt, createElementVNode as k, normalizeClass as le, Transition as yr, withCtx as st, withDirectives as at, normalizeStyle as kt, createTextVNode as Co, toDisplayString as Q, vShow as Cn, shallowReactive as Eo, createBlock as xe, createCommentVNode as Re, resolveDynamicComponent as Gs, withModifiers as qt, isVNode as Zt, render as En, renderList as So, vModelSelect as Xn } from "vue";
const Rf = (e) => {
  e.registerRoute({
    target: "window",
    path: "/screen-recorder",
    name: "ScreenRecorder",
    component: () => Promise.resolve().then(() => Of)
  });
};
/*!
  * shared v11.2.2
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
function Lo(e, t) {
  typeof console < "u" && (console.warn("[intlify] " + e), t && console.warn(t.stack));
}
const Yr = typeof window < "u", ut = (e, t = !1) => t ? Symbol.for(e) : Symbol(e), ko = (e, t, n) => To({ l: e, k: t, s: n }), To = (e) => JSON.stringify(e).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027"), ce = (e) => typeof e == "number" && isFinite(e), No = (e) => br(e) === "[object Date]", Sn = (e) => br(e) === "[object RegExp]", Rn = (e) => V(e) && Object.keys(e).length === 0, fe = Object.assign, Io = Object.create, q = (e = null) => Io(e);
let Xr;
const gn = () => Xr || (Xr = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : q());
function qr(e) {
  return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/\//g, "&#x2F;").replace(/=/g, "&#x3D;");
}
function Jr(e) {
  return e.replace(/&(?![a-zA-Z0-9#]{2,6};)/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function Oo(e) {
  return e = e.replace(/(\w+)\s*=\s*"([^"]*)"/g, (r, s, a) => `${s}="${Jr(a)}"`), e = e.replace(/(\w+)\s*=\s*'([^']*)'/g, (r, s, a) => `${s}='${Jr(a)}'`), /\s*on\w+\s*=\s*["']?[^"'>]+["']?/gi.test(e) && (e = e.replace(/(\s+)(on)(\w+\s*=)/gi, "$1&#111;n$3")), [
    // In href, src, action, formaction attributes
    /(\s+(?:href|src|action|formaction)\s*=\s*["']?)\s*javascript:/gi,
    // In style attributes within url()
    /(style\s*=\s*["'][^"']*url\s*\(\s*)javascript:/gi
  ].forEach((r) => {
    e = e.replace(r, "$1javascript&#58;");
  }), e;
}
const Po = Object.prototype.hasOwnProperty;
function Se(e, t) {
  return Po.call(e, t);
}
const oe = Array.isArray, te = (e) => typeof e == "function", M = (e) => typeof e == "string", ae = (e) => typeof e == "boolean", G = (e) => e !== null && typeof e == "object", Ro = (e) => G(e) && te(e.then) && te(e.catch), Ks = Object.prototype.toString, br = (e) => Ks.call(e), V = (e) => br(e) === "[object Object]", Ao = (e) => e == null ? "" : oe(e) || V(e) && e.toString === Ks ? JSON.stringify(e, null, 2) : String(e);
function wr(e, t = "") {
  return e.reduce((n, r, s) => s === 0 ? n + r : n + t + r, "");
}
const cn = (e) => !G(e) || oe(e);
function _n(e, t) {
  if (cn(e) || cn(t))
    throw new Error("Invalid value");
  const n = [{ src: e, des: t }];
  for (; n.length; ) {
    const { src: r, des: s } = n.pop();
    Object.keys(r).forEach((a) => {
      a !== "__proto__" && (G(r[a]) && !G(s[a]) && (s[a] = Array.isArray(r[a]) ? [] : q()), cn(s[a]) || cn(r[a]) ? s[a] = r[a] : n.push({ src: r[a], des: s[a] }));
    });
  }
}
/*!
  * message-compiler v11.2.2
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
function Mo(e, t, n) {
  return { line: e, column: t, offset: n };
}
function ar(e, t, n) {
  return { start: e, end: t };
}
const Y = {
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
}, Do = 17;
function An(e, t, n = {}) {
  const { domain: r, messages: s, args: a } = n, o = e, c = new SyntaxError(String(o));
  return c.code = e, t && (c.location = t), c.domain = r, c;
}
function xo(e) {
  throw e;
}
const Ne = " ", Fo = "\r", he = `
`, $o = "\u2028", Wo = "\u2029";
function Uo(e) {
  const t = e;
  let n = 0, r = 1, s = 1, a = 0;
  const o = (y) => t[y] === Fo && t[y + 1] === he, c = (y) => t[y] === he, u = (y) => t[y] === Wo, h = (y) => t[y] === $o, g = (y) => o(y) || c(y) || u(y) || h(y), L = () => n, S = () => r, R = () => s, D = () => a, b = (y) => o(y) || u(y) || h(y) ? he : t[y], N = () => b(n), f = () => b(n + a);
  function E() {
    return a = 0, g(n) && (r++, s = 0), o(n) && n++, n++, s++, t[n];
  }
  function v() {
    return o(n + a) && a++, a++, t[n + a];
  }
  function _() {
    n = 0, r = 1, s = 1, a = 0;
  }
  function O(y = 0) {
    a = y;
  }
  function P() {
    const y = n + a;
    for (; y !== n; )
      E();
    a = 0;
  }
  return {
    index: L,
    line: S,
    column: R,
    peekOffset: D,
    charAt: b,
    currentChar: N,
    currentPeek: f,
    next: E,
    peek: v,
    reset: _,
    resetPeek: O,
    skipToPeek: P
  };
}
const De = void 0, zo = ".", Zr = "'", jo = "tokenizer";
function Ho(e, t = {}) {
  const n = t.location !== !1, r = Uo(e), s = () => r.index(), a = () => Mo(r.line(), r.column(), r.index()), o = a(), c = s(), u = {
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
  }, h = () => u, { onError: g } = t;
  function L(i, l, w, ...A) {
    const B = h();
    if (l.column += w, l.offset += w, g) {
      const z = n ? ar(B.startLoc, l) : null, m = An(i, z, {
        domain: jo,
        args: A
      });
      g(m);
    }
  }
  function S(i, l, w) {
    i.endLoc = a(), i.currentType = l;
    const A = { type: l };
    return n && (A.loc = ar(i.startLoc, i.endLoc)), w != null && (A.value = w), A;
  }
  const R = (i) => S(
    i,
    13
    /* TokenTypes.EOF */
  );
  function D(i, l) {
    return i.currentChar() === l ? (i.next(), l) : (L(Y.EXPECTED_TOKEN, a(), 0, l), "");
  }
  function b(i) {
    let l = "";
    for (; i.currentPeek() === Ne || i.currentPeek() === he; )
      l += i.currentPeek(), i.peek();
    return l;
  }
  function N(i) {
    const l = b(i);
    return i.skipToPeek(), l;
  }
  function f(i) {
    if (i === De)
      return !1;
    const l = i.charCodeAt(0);
    return l >= 97 && l <= 122 || // a-z
    l >= 65 && l <= 90 || // A-Z
    l === 95;
  }
  function E(i) {
    if (i === De)
      return !1;
    const l = i.charCodeAt(0);
    return l >= 48 && l <= 57;
  }
  function v(i, l) {
    const { currentType: w } = l;
    if (w !== 2)
      return !1;
    b(i);
    const A = f(i.currentPeek());
    return i.resetPeek(), A;
  }
  function _(i, l) {
    const { currentType: w } = l;
    if (w !== 2)
      return !1;
    b(i);
    const A = i.currentPeek() === "-" ? i.peek() : i.currentPeek(), B = E(A);
    return i.resetPeek(), B;
  }
  function O(i, l) {
    const { currentType: w } = l;
    if (w !== 2)
      return !1;
    b(i);
    const A = i.currentPeek() === Zr;
    return i.resetPeek(), A;
  }
  function P(i, l) {
    const { currentType: w } = l;
    if (w !== 7)
      return !1;
    b(i);
    const A = i.currentPeek() === ".";
    return i.resetPeek(), A;
  }
  function y(i, l) {
    const { currentType: w } = l;
    if (w !== 8)
      return !1;
    b(i);
    const A = f(i.currentPeek());
    return i.resetPeek(), A;
  }
  function x(i, l) {
    const { currentType: w } = l;
    if (!(w === 7 || w === 11))
      return !1;
    b(i);
    const A = i.currentPeek() === ":";
    return i.resetPeek(), A;
  }
  function W(i, l) {
    const { currentType: w } = l;
    if (w !== 9)
      return !1;
    const A = () => {
      const z = i.currentPeek();
      return z === "{" ? f(i.peek()) : z === "@" || z === "|" || z === ":" || z === "." || z === Ne || !z ? !1 : z === he ? (i.peek(), A()) : Z(i, !1);
    }, B = A();
    return i.resetPeek(), B;
  }
  function ne(i) {
    b(i);
    const l = i.currentPeek() === "|";
    return i.resetPeek(), l;
  }
  function Z(i, l = !0) {
    const w = (B = !1, z = "") => {
      const m = i.currentPeek();
      return m === "{" || m === "@" || !m ? B : m === "|" ? !(z === Ne || z === he) : m === Ne ? (i.peek(), w(!0, Ne)) : m === he ? (i.peek(), w(!0, he)) : !0;
    }, A = w();
    return l && i.resetPeek(), A;
  }
  function re(i, l) {
    const w = i.currentChar();
    return w === De ? De : l(w) ? (i.next(), w) : null;
  }
  function Mt(i) {
    const l = i.charCodeAt(0);
    return l >= 97 && l <= 122 || // a-z
    l >= 65 && l <= 90 || // A-Z
    l >= 48 && l <= 57 || // 0-9
    l === 95 || // _
    l === 36;
  }
  function Dt(i) {
    return re(i, Mt);
  }
  function xt(i) {
    const l = i.charCodeAt(0);
    return l >= 97 && l <= 122 || // a-z
    l >= 65 && l <= 90 || // A-Z
    l >= 48 && l <= 57 || // 0-9
    l === 95 || // _
    l === 36 || // $
    l === 45;
  }
  function Ft(i) {
    return re(i, xt);
  }
  function $t(i) {
    const l = i.charCodeAt(0);
    return l >= 48 && l <= 57;
  }
  function Wt(i) {
    return re(i, $t);
  }
  function ye(i) {
    const l = i.charCodeAt(0);
    return l >= 48 && l <= 57 || // 0-9
    l >= 65 && l <= 70 || // A-F
    l >= 97 && l <= 102;
  }
  function pt(i) {
    return re(i, ye);
  }
  function ht(i) {
    let l = "", w = "";
    for (; l = Wt(i); )
      w += l;
    return w;
  }
  function mt(i) {
    let l = "";
    for (; ; ) {
      const w = i.currentChar();
      if (w === "{" || w === "}" || w === "@" || w === "|" || !w)
        break;
      if (w === Ne || w === he)
        if (Z(i))
          l += w, i.next();
        else {
          if (ne(i))
            break;
          l += w, i.next();
        }
      else
        l += w, i.next();
    }
    return l;
  }
  function me(i) {
    N(i);
    let l = "", w = "";
    for (; l = Ft(i); )
      w += l;
    const A = i.currentChar();
    if (A && A !== "}" && A !== De && A !== Ne && A !== he && A !== "　") {
      const B = qe(i);
      return L(Y.INVALID_TOKEN_IN_PLACEHOLDER, a(), 0, w + B), w + B;
    }
    return i.currentChar() === De && L(Y.UNTERMINATED_CLOSING_BRACE, a(), 0), w;
  }
  function Me(i) {
    N(i);
    let l = "";
    return i.currentChar() === "-" ? (i.next(), l += `-${ht(i)}`) : l += ht(i), i.currentChar() === De && L(Y.UNTERMINATED_CLOSING_BRACE, a(), 0), l;
  }
  function Xe(i) {
    return i !== Zr && i !== he;
  }
  function Ut(i) {
    N(i), D(i, "'");
    let l = "", w = "";
    for (; l = re(i, Xe); )
      l === "\\" ? w += zt(i) : w += l;
    const A = i.currentChar();
    return A === he || A === De ? (L(Y.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, a(), 0), A === he && (i.next(), D(i, "'")), w) : (D(i, "'"), w);
  }
  function zt(i) {
    const l = i.currentChar();
    switch (l) {
      case "\\":
      case "'":
        return i.next(), `\\${l}`;
      case "u":
        return gt(i, l, 4);
      case "U":
        return gt(i, l, 6);
      default:
        return L(Y.UNKNOWN_ESCAPE_SEQUENCE, a(), 0, l), "";
    }
  }
  function gt(i, l, w) {
    D(i, l);
    let A = "";
    for (let B = 0; B < w; B++) {
      const z = pt(i);
      if (!z) {
        L(Y.INVALID_UNICODE_ESCAPE_SEQUENCE, a(), 0, `\\${l}${A}${i.currentChar()}`);
        break;
      }
      A += z;
    }
    return `\\${l}${A}`;
  }
  function _t(i) {
    return i !== "{" && i !== "}" && i !== Ne && i !== he;
  }
  function qe(i) {
    N(i);
    let l = "", w = "";
    for (; l = re(i, _t); )
      w += l;
    return w;
  }
  function vt(i) {
    let l = "", w = "";
    for (; l = Dt(i); )
      w += l;
    return w;
  }
  function yt(i) {
    const l = (w) => {
      const A = i.currentChar();
      return A === "{" || A === "@" || A === "|" || A === "(" || A === ")" || !A || A === Ne ? w : (w += A, i.next(), l(w));
    };
    return l("");
  }
  function ze(i) {
    N(i);
    const l = D(
      i,
      "|"
      /* TokenChars.Pipe */
    );
    return N(i), l;
  }
  function ke(i, l) {
    let w = null;
    switch (i.currentChar()) {
      case "{":
        return l.braceNest >= 1 && L(Y.NOT_ALLOW_NEST_PLACEHOLDER, a(), 0), i.next(), w = S(
          l,
          2,
          "{"
          /* TokenChars.BraceLeft */
        ), N(i), l.braceNest++, w;
      case "}":
        return l.braceNest > 0 && l.currentType === 2 && L(Y.EMPTY_PLACEHOLDER, a(), 0), i.next(), w = S(
          l,
          3,
          "}"
          /* TokenChars.BraceRight */
        ), l.braceNest--, l.braceNest > 0 && N(i), l.inLinked && l.braceNest === 0 && (l.inLinked = !1), w;
      case "@":
        return l.braceNest > 0 && L(Y.UNTERMINATED_CLOSING_BRACE, a(), 0), w = Te(i, l) || R(l), l.braceNest = 0, w;
      default: {
        let B = !0, z = !0, m = !0;
        if (ne(i))
          return l.braceNest > 0 && L(Y.UNTERMINATED_CLOSING_BRACE, a(), 0), w = S(l, 1, ze(i)), l.braceNest = 0, l.inLinked = !1, w;
        if (l.braceNest > 0 && (l.currentType === 4 || l.currentType === 5 || l.currentType === 6))
          return L(Y.UNTERMINATED_CLOSING_BRACE, a(), 0), l.braceNest = 0, Je(i, l);
        if (B = v(i, l))
          return w = S(l, 4, me(i)), N(i), w;
        if (z = _(i, l))
          return w = S(l, 5, Me(i)), N(i), w;
        if (m = O(i, l))
          return w = S(l, 6, Ut(i)), N(i), w;
        if (!B && !z && !m)
          return w = S(l, 12, qe(i)), L(Y.INVALID_TOKEN_IN_PLACEHOLDER, a(), 0, w.value), N(i), w;
        break;
      }
    }
    return w;
  }
  function Te(i, l) {
    const { currentType: w } = l;
    let A = null;
    const B = i.currentChar();
    switch ((w === 7 || w === 8 || w === 11 || w === 9) && (B === he || B === Ne) && L(Y.INVALID_LINKED_FORMAT, a(), 0), B) {
      case "@":
        return i.next(), A = S(
          l,
          7,
          "@"
          /* TokenChars.LinkedAlias */
        ), l.inLinked = !0, A;
      case ".":
        return N(i), i.next(), S(
          l,
          8,
          "."
          /* TokenChars.LinkedDot */
        );
      case ":":
        return N(i), i.next(), S(
          l,
          9,
          ":"
          /* TokenChars.LinkedDelimiter */
        );
      default:
        return ne(i) ? (A = S(l, 1, ze(i)), l.braceNest = 0, l.inLinked = !1, A) : P(i, l) || x(i, l) ? (N(i), Te(i, l)) : y(i, l) ? (N(i), S(l, 11, vt(i))) : W(i, l) ? (N(i), B === "{" ? ke(i, l) || A : S(l, 10, yt(i))) : (w === 7 && L(Y.INVALID_LINKED_FORMAT, a(), 0), l.braceNest = 0, l.inLinked = !1, Je(i, l));
    }
  }
  function Je(i, l) {
    let w = {
      type: 13
      /* TokenTypes.EOF */
    };
    if (l.braceNest > 0)
      return ke(i, l) || R(l);
    if (l.inLinked)
      return Te(i, l) || R(l);
    switch (i.currentChar()) {
      case "{":
        return ke(i, l) || R(l);
      case "}":
        return L(Y.UNBALANCED_CLOSING_BRACE, a(), 0), i.next(), S(
          l,
          3,
          "}"
          /* TokenChars.BraceRight */
        );
      case "@":
        return Te(i, l) || R(l);
      default: {
        if (ne(i))
          return w = S(l, 1, ze(i)), l.braceNest = 0, l.inLinked = !1, w;
        if (Z(i))
          return S(l, 0, mt(i));
        break;
      }
    }
    return w;
  }
  function bt() {
    const { currentType: i, offset: l, startLoc: w, endLoc: A } = u;
    return u.lastType = i, u.lastOffset = l, u.lastStartLoc = w, u.lastEndLoc = A, u.offset = s(), u.startLoc = a(), r.currentChar() === De ? S(
      u,
      13
      /* TokenTypes.EOF */
    ) : Je(r, u);
  }
  return {
    nextToken: bt,
    currentOffset: s,
    currentPosition: a,
    context: h
  };
}
const Bo = "parser", Vo = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;
function Go(e, t, n) {
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
function Ko(e = {}) {
  const t = e.location !== !1, { onError: n } = e;
  function r(f, E, v, _, ...O) {
    const P = f.currentPosition();
    if (P.offset += _, P.column += _, n) {
      const y = t ? ar(v, P) : null, x = An(E, y, {
        domain: Bo,
        args: O
      });
      n(x);
    }
  }
  function s(f, E, v) {
    const _ = { type: f };
    return t && (_.start = E, _.end = E, _.loc = { start: v, end: v }), _;
  }
  function a(f, E, v, _) {
    t && (f.end = E, f.loc && (f.loc.end = v));
  }
  function o(f, E) {
    const v = f.context(), _ = s(3, v.offset, v.startLoc);
    return _.value = E, a(_, f.currentOffset(), f.currentPosition()), _;
  }
  function c(f, E) {
    const v = f.context(), { lastOffset: _, lastStartLoc: O } = v, P = s(5, _, O);
    return P.index = parseInt(E, 10), f.nextToken(), a(P, f.currentOffset(), f.currentPosition()), P;
  }
  function u(f, E) {
    const v = f.context(), { lastOffset: _, lastStartLoc: O } = v, P = s(4, _, O);
    return P.key = E, f.nextToken(), a(P, f.currentOffset(), f.currentPosition()), P;
  }
  function h(f, E) {
    const v = f.context(), { lastOffset: _, lastStartLoc: O } = v, P = s(9, _, O);
    return P.value = E.replace(Vo, Go), f.nextToken(), a(P, f.currentOffset(), f.currentPosition()), P;
  }
  function g(f) {
    const E = f.nextToken(), v = f.context(), { lastOffset: _, lastStartLoc: O } = v, P = s(8, _, O);
    return E.type !== 11 ? (r(f, Y.UNEXPECTED_EMPTY_LINKED_MODIFIER, v.lastStartLoc, 0), P.value = "", a(P, _, O), {
      nextConsumeToken: E,
      node: P
    }) : (E.value == null && r(f, Y.UNEXPECTED_LEXICAL_ANALYSIS, v.lastStartLoc, 0, Ie(E)), P.value = E.value || "", a(P, f.currentOffset(), f.currentPosition()), {
      node: P
    });
  }
  function L(f, E) {
    const v = f.context(), _ = s(7, v.offset, v.startLoc);
    return _.value = E, a(_, f.currentOffset(), f.currentPosition()), _;
  }
  function S(f) {
    const E = f.context(), v = s(6, E.offset, E.startLoc);
    let _ = f.nextToken();
    if (_.type === 8) {
      const O = g(f);
      v.modifier = O.node, _ = O.nextConsumeToken || f.nextToken();
    }
    switch (_.type !== 9 && r(f, Y.UNEXPECTED_LEXICAL_ANALYSIS, E.lastStartLoc, 0, Ie(_)), _ = f.nextToken(), _.type === 2 && (_ = f.nextToken()), _.type) {
      case 10:
        _.value == null && r(f, Y.UNEXPECTED_LEXICAL_ANALYSIS, E.lastStartLoc, 0, Ie(_)), v.key = L(f, _.value || "");
        break;
      case 4:
        _.value == null && r(f, Y.UNEXPECTED_LEXICAL_ANALYSIS, E.lastStartLoc, 0, Ie(_)), v.key = u(f, _.value || "");
        break;
      case 5:
        _.value == null && r(f, Y.UNEXPECTED_LEXICAL_ANALYSIS, E.lastStartLoc, 0, Ie(_)), v.key = c(f, _.value || "");
        break;
      case 6:
        _.value == null && r(f, Y.UNEXPECTED_LEXICAL_ANALYSIS, E.lastStartLoc, 0, Ie(_)), v.key = h(f, _.value || "");
        break;
      default: {
        r(f, Y.UNEXPECTED_EMPTY_LINKED_KEY, E.lastStartLoc, 0);
        const O = f.context(), P = s(7, O.offset, O.startLoc);
        return P.value = "", a(P, O.offset, O.startLoc), v.key = P, a(v, O.offset, O.startLoc), {
          nextConsumeToken: _,
          node: v
        };
      }
    }
    return a(v, f.currentOffset(), f.currentPosition()), {
      node: v
    };
  }
  function R(f) {
    const E = f.context(), v = E.currentType === 1 ? f.currentOffset() : E.offset, _ = E.currentType === 1 ? E.endLoc : E.startLoc, O = s(2, v, _);
    O.items = [];
    let P = null;
    do {
      const W = P || f.nextToken();
      switch (P = null, W.type) {
        case 0:
          W.value == null && r(f, Y.UNEXPECTED_LEXICAL_ANALYSIS, E.lastStartLoc, 0, Ie(W)), O.items.push(o(f, W.value || ""));
          break;
        case 5:
          W.value == null && r(f, Y.UNEXPECTED_LEXICAL_ANALYSIS, E.lastStartLoc, 0, Ie(W)), O.items.push(c(f, W.value || ""));
          break;
        case 4:
          W.value == null && r(f, Y.UNEXPECTED_LEXICAL_ANALYSIS, E.lastStartLoc, 0, Ie(W)), O.items.push(u(f, W.value || ""));
          break;
        case 6:
          W.value == null && r(f, Y.UNEXPECTED_LEXICAL_ANALYSIS, E.lastStartLoc, 0, Ie(W)), O.items.push(h(f, W.value || ""));
          break;
        case 7: {
          const ne = S(f);
          O.items.push(ne.node), P = ne.nextConsumeToken || null;
          break;
        }
      }
    } while (E.currentType !== 13 && E.currentType !== 1);
    const y = E.currentType === 1 ? E.lastOffset : f.currentOffset(), x = E.currentType === 1 ? E.lastEndLoc : f.currentPosition();
    return a(O, y, x), O;
  }
  function D(f, E, v, _) {
    const O = f.context();
    let P = _.items.length === 0;
    const y = s(1, E, v);
    y.cases = [], y.cases.push(_);
    do {
      const x = R(f);
      P || (P = x.items.length === 0), y.cases.push(x);
    } while (O.currentType !== 13);
    return P && r(f, Y.MUST_HAVE_MESSAGES_IN_PLURAL, v, 0), a(y, f.currentOffset(), f.currentPosition()), y;
  }
  function b(f) {
    const E = f.context(), { offset: v, startLoc: _ } = E, O = R(f);
    return E.currentType === 13 ? O : D(f, v, _, O);
  }
  function N(f) {
    const E = Ho(f, fe({}, e)), v = E.context(), _ = s(0, v.offset, v.startLoc);
    return t && _.loc && (_.loc.source = f), _.body = b(E), e.onCacheKey && (_.cacheKey = e.onCacheKey(f)), v.currentType !== 13 && r(E, Y.UNEXPECTED_LEXICAL_ANALYSIS, v.lastStartLoc, 0, f[v.offset] || ""), a(_, E.currentOffset(), E.currentPosition()), _;
  }
  return { parse: N };
}
function Ie(e) {
  if (e.type === 13)
    return "EOF";
  const t = (e.value || "").replace(/\r?\n/gu, "\\n");
  return t.length > 10 ? t.slice(0, 9) + "…" : t;
}
function Yo(e, t = {}) {
  const n = {
    ast: e,
    helpers: /* @__PURE__ */ new Set()
  };
  return { context: () => n, helper: (a) => (n.helpers.add(a), a) };
}
function Qr(e, t) {
  for (let n = 0; n < e.length; n++)
    Cr(e[n], t);
}
function Cr(e, t) {
  switch (e.type) {
    case 1:
      Qr(e.cases, t), t.helper(
        "plural"
        /* HelperNameMap.PLURAL */
      );
      break;
    case 2:
      Qr(e.items, t);
      break;
    case 6: {
      Cr(e.key, t), t.helper(
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
function Xo(e, t = {}) {
  const n = Yo(e);
  n.helper(
    "normalize"
    /* HelperNameMap.NORMALIZE */
  ), e.body && Cr(e.body, n);
  const r = n.context();
  e.helpers = Array.from(r.helpers);
}
function qo(e) {
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
      const r = e.items[n];
      if (!(r.type === 3 || r.type === 9) || r.value == null)
        break;
      t.push(r.value);
    }
    if (t.length === e.items.length) {
      e.static = wr(t);
      for (let n = 0; n < e.items.length; n++) {
        const r = e.items[n];
        (r.type === 3 || r.type === 9) && delete r.value;
      }
    }
  }
}
function Et(e) {
  switch (e.t = e.type, e.type) {
    case 0: {
      const t = e;
      Et(t.body), t.b = t.body, delete t.body;
      break;
    }
    case 1: {
      const t = e, n = t.cases;
      for (let r = 0; r < n.length; r++)
        Et(n[r]);
      t.c = n, delete t.cases;
      break;
    }
    case 2: {
      const t = e, n = t.items;
      for (let r = 0; r < n.length; r++)
        Et(n[r]);
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
      Et(t.key), t.k = t.key, delete t.key, t.modifier && (Et(t.modifier), t.m = t.modifier, delete t.modifier);
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
function Jo(e, t) {
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
    const f = N ? r : "";
    u(s ? f + "  ".repeat(b) : f);
  }
  function g(b = !0) {
    const N = ++o.indentLevel;
    b && h(N);
  }
  function L(b = !0) {
    const N = --o.indentLevel;
    b && h(N);
  }
  function S() {
    h(o.indentLevel);
  }
  return {
    context: c,
    push: u,
    indent: g,
    deindent: L,
    newline: S,
    helper: (b) => `_${b}`,
    needIndent: () => o.needIndent
  };
}
function Zo(e, t) {
  const { helper: n } = e;
  e.push(`${n(
    "linked"
    /* HelperNameMap.LINKED */
  )}(`), Tt(e, t.key), t.modifier ? (e.push(", "), Tt(e, t.modifier), e.push(", _type")) : e.push(", undefined, _type"), e.push(")");
}
function Qo(e, t) {
  const { helper: n, needIndent: r } = e;
  e.push(`${n(
    "normalize"
    /* HelperNameMap.NORMALIZE */
  )}([`), e.indent(r());
  const s = t.items.length;
  for (let a = 0; a < s && (Tt(e, t.items[a]), a !== s - 1); a++)
    e.push(", ");
  e.deindent(r()), e.push("])");
}
function ei(e, t) {
  const { helper: n, needIndent: r } = e;
  if (t.cases.length > 1) {
    e.push(`${n(
      "plural"
      /* HelperNameMap.PLURAL */
    )}([`), e.indent(r());
    const s = t.cases.length;
    for (let a = 0; a < s && (Tt(e, t.cases[a]), a !== s - 1); a++)
      e.push(", ");
    e.deindent(r()), e.push("])");
  }
}
function ti(e, t) {
  t.body ? Tt(e, t.body) : e.push("null");
}
function Tt(e, t) {
  const { helper: n } = e;
  switch (t.type) {
    case 0:
      ti(e, t);
      break;
    case 1:
      ei(e, t);
      break;
    case 2:
      Qo(e, t);
      break;
    case 6:
      Zo(e, t);
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
const ni = (e, t = {}) => {
  const n = M(t.mode) ? t.mode : "normal", r = M(t.filename) ? t.filename : "message.intl";
  t.sourceMap;
  const s = t.breakLineCode != null ? t.breakLineCode : n === "arrow" ? ";" : `
`, a = t.needIndent ? t.needIndent : n !== "arrow", o = e.helpers || [], c = Jo(e, {
    filename: r,
    breakLineCode: s,
    needIndent: a
  });
  c.push(n === "normal" ? "function __msg__ (ctx) {" : "(ctx) => {"), c.indent(a), o.length > 0 && (c.push(`const { ${wr(o.map((g) => `${g}: _${g}`), ", ")} } = ctx`), c.newline()), c.push("return "), Tt(c, e), c.deindent(a), c.push("}"), delete e.helpers;
  const { code: u, map: h } = c.context();
  return {
    ast: e,
    code: u,
    map: h ? h.toJSON() : void 0
    // eslint-disable-line @typescript-eslint/no-explicit-any
  };
};
function ri(e, t = {}) {
  const n = fe({}, t), r = !!n.jit, s = !!n.minify, a = n.optimize == null ? !0 : n.optimize, c = Ko(n).parse(e);
  return r ? (a && qo(c), s && Et(c), { ast: c, code: "" }) : (Xo(c, n), ni(c, n));
}
/*!
  * core-base v11.2.2
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
function si() {
  typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (gn().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1);
}
function Ae(e) {
  return G(e) && Er(e) === 0 && (Se(e, "b") || Se(e, "body"));
}
const Ys = ["b", "body"];
function ai(e) {
  return Ke(e, Ys);
}
const Xs = ["c", "cases"];
function oi(e) {
  return Ke(e, Xs, []);
}
const qs = ["s", "static"];
function ii(e) {
  return Ke(e, qs);
}
const Js = ["i", "items"];
function li(e) {
  return Ke(e, Js, []);
}
const Zs = ["t", "type"];
function Er(e) {
  return Ke(e, Zs);
}
const Qs = ["v", "value"];
function un(e, t) {
  const n = Ke(e, Qs);
  if (n != null)
    return n;
  throw Qt(t);
}
const ea = ["m", "modifier"];
function ci(e) {
  return Ke(e, ea);
}
const ta = ["k", "key"];
function ui(e) {
  const t = Ke(e, ta);
  if (t)
    return t;
  throw Qt(
    6
    /* NodeTypes.Linked */
  );
}
function Ke(e, t, n) {
  for (let r = 0; r < t.length; r++) {
    const s = t[r];
    if (Se(e, s) && e[s] != null)
      return e[s];
  }
  return n;
}
const na = [
  ...Ys,
  ...Xs,
  ...qs,
  ...Js,
  ...ta,
  ...ea,
  ...Qs,
  ...Zs
];
function Qt(e) {
  return new Error(`unhandled node type: ${e}`);
}
function qn(e) {
  return (n) => di(n, e);
}
function di(e, t) {
  const n = ai(t);
  if (n == null)
    throw Qt(
      0
      /* NodeTypes.Resource */
    );
  if (Er(n) === 1) {
    const a = oi(n);
    return e.plural(a.reduce((o, c) => [
      ...o,
      ts(e, c)
    ], []));
  } else
    return ts(e, n);
}
function ts(e, t) {
  const n = ii(t);
  if (n != null)
    return e.type === "text" ? n : e.normalize([n]);
  {
    const r = li(t).reduce((s, a) => [...s, or(e, a)], []);
    return e.normalize(r);
  }
}
function or(e, t) {
  const n = Er(t);
  switch (n) {
    case 3:
      return un(t, n);
    case 9:
      return un(t, n);
    case 4: {
      const r = t;
      if (Se(r, "k") && r.k)
        return e.interpolate(e.named(r.k));
      if (Se(r, "key") && r.key)
        return e.interpolate(e.named(r.key));
      throw Qt(n);
    }
    case 5: {
      const r = t;
      if (Se(r, "i") && ce(r.i))
        return e.interpolate(e.list(r.i));
      if (Se(r, "index") && ce(r.index))
        return e.interpolate(e.list(r.index));
      throw Qt(n);
    }
    case 6: {
      const r = t, s = ci(r), a = ui(r);
      return e.linked(or(e, a), s ? or(e, s) : void 0, e.type);
    }
    case 7:
      return un(t, n);
    case 8:
      return un(t, n);
    default:
      throw new Error(`unhandled node on format message part: ${n}`);
  }
}
const fi = (e) => e;
let dn = q();
function pi(e, t = {}) {
  let n = !1;
  const r = t.onError || xo;
  return t.onError = (s) => {
    n = !0, r(s);
  }, { ...ri(e, t), detectError: n };
}
// @__NO_SIDE_EFFECTS__
function hi(e, t) {
  if (!__INTLIFY_DROP_MESSAGE_COMPILER__ && M(e)) {
    ae(t.warnHtmlMessage) && t.warnHtmlMessage;
    const r = (t.onCacheKey || fi)(e), s = dn[r];
    if (s)
      return s;
    const { ast: a, detectError: o } = pi(e, {
      ...t,
      location: !1,
      jit: !0
    }), c = qn(a);
    return o ? c : dn[r] = c;
  } else {
    const n = e.cacheKey;
    if (n) {
      const r = dn[n];
      return r || (dn[n] = qn(e));
    } else
      return qn(e);
  }
}
const Fe = {
  INVALID_ARGUMENT: Do,
  // 17
  INVALID_DATE_ARGUMENT: 18,
  INVALID_ISO_DATE_ARGUMENT: 19,
  NOT_SUPPORT_LOCALE_PROMISE_VALUE: 21,
  NOT_SUPPORT_LOCALE_ASYNC_FUNCTION: 22,
  NOT_SUPPORT_LOCALE_TYPE: 23
}, mi = 24;
function $e(e) {
  return An(e, null, void 0);
}
function Sr(e, t) {
  return t.locale != null ? ns(t.locale) : ns(e.locale);
}
let Jn;
function ns(e) {
  if (M(e))
    return e;
  if (te(e)) {
    if (e.resolvedOnce && Jn != null)
      return Jn;
    if (e.constructor.name === "Function") {
      const t = e();
      if (Ro(t))
        throw $e(Fe.NOT_SUPPORT_LOCALE_PROMISE_VALUE);
      return Jn = t;
    } else
      throw $e(Fe.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION);
  } else
    throw $e(Fe.NOT_SUPPORT_LOCALE_TYPE);
}
function gi(e, t, n) {
  return [.../* @__PURE__ */ new Set([
    n,
    ...oe(t) ? t : G(t) ? Object.keys(t) : M(t) ? [t] : [n]
  ])];
}
function ra(e, t, n) {
  const r = M(n) ? n : Ln, s = e;
  s.__localeChainCache || (s.__localeChainCache = /* @__PURE__ */ new Map());
  let a = s.__localeChainCache.get(r);
  if (!a) {
    a = [];
    let o = [n];
    for (; oe(o); )
      o = rs(a, o, t);
    const c = oe(t) || !V(t) ? t : t.default ? t.default : null;
    o = M(c) ? [c] : c, oe(o) && rs(a, o, !1), s.__localeChainCache.set(r, a);
  }
  return a;
}
function rs(e, t, n) {
  let r = !0;
  for (let s = 0; s < t.length && ae(r); s++) {
    const a = t[s];
    M(a) && (r = _i(e, t[s], n));
  }
  return r;
}
function _i(e, t, n) {
  let r;
  const s = t.split("-");
  do {
    const a = s.join("-");
    r = vi(e, a, n), s.splice(-1, 1);
  } while (s.length && r === !0);
  return r;
}
function vi(e, t, n) {
  let r = !1;
  if (!e.includes(t) && (r = !0, t)) {
    r = t[t.length - 1] !== "!";
    const s = t.replace(/!/g, "");
    e.push(s), (oe(n) || V(n)) && n[s] && (r = n[s]);
  }
  return r;
}
const Ye = [];
Ye[
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
Ye[
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
Ye[
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
Ye[
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
Ye[
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
Ye[
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
Ye[
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
const yi = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
function bi(e) {
  return yi.test(e);
}
function wi(e) {
  const t = e.charCodeAt(0), n = e.charCodeAt(e.length - 1);
  return t === n && (t === 34 || t === 39) ? e.slice(1, -1) : e;
}
function Ci(e) {
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
function Ei(e) {
  const t = e.trim();
  return e.charAt(0) === "0" && isNaN(parseInt(e)) ? !1 : bi(t) ? wi(t) : "*" + t;
}
function Si(e) {
  const t = [];
  let n = -1, r = 0, s = 0, a, o, c, u, h, g, L;
  const S = [];
  S[
    0
    /* Actions.APPEND */
  ] = () => {
    o === void 0 ? o = c : o += c;
  }, S[
    1
    /* Actions.PUSH */
  ] = () => {
    o !== void 0 && (t.push(o), o = void 0);
  }, S[
    2
    /* Actions.INC_SUB_PATH_DEPTH */
  ] = () => {
    S[
      0
      /* Actions.APPEND */
    ](), s++;
  }, S[
    3
    /* Actions.PUSH_SUB_PATH */
  ] = () => {
    if (s > 0)
      s--, r = 4, S[
        0
        /* Actions.APPEND */
      ]();
    else {
      if (s = 0, o === void 0 || (o = Ei(o), o === !1))
        return !1;
      S[
        1
        /* Actions.PUSH */
      ]();
    }
  };
  function R() {
    const D = e[n + 1];
    if (r === 5 && D === "'" || r === 6 && D === '"')
      return n++, c = "\\" + D, S[
        0
        /* Actions.APPEND */
      ](), !0;
  }
  for (; r !== null; )
    if (n++, a = e[n], !(a === "\\" && R())) {
      if (u = Ci(a), L = Ye[r], h = L[u] || L.l || 8, h === 8 || (r = h[0], h[1] !== void 0 && (g = S[h[1]], g && (c = a, g() === !1))))
        return;
      if (r === 7)
        return t;
    }
}
const ss = /* @__PURE__ */ new Map();
function Li(e, t) {
  return G(e) ? e[t] : null;
}
function ki(e, t) {
  if (!G(e))
    return null;
  let n = ss.get(t);
  if (n || (n = Si(t), n && ss.set(t, n)), !n)
    return null;
  const r = n.length;
  let s = e, a = 0;
  for (; a < r; ) {
    const o = n[a];
    if (na.includes(o) && Ae(s))
      return null;
    const c = s[o];
    if (c === void 0 || te(s))
      return null;
    s = c, a++;
  }
  return s;
}
const Ti = "11.2.2", Mn = -1, Ln = "en-US", as = "", os = (e) => `${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;
function Ni() {
  return {
    upper: (e, t) => t === "text" && M(e) ? e.toUpperCase() : t === "vnode" && G(e) && "__v_isVNode" in e ? e.children.toUpperCase() : e,
    lower: (e, t) => t === "text" && M(e) ? e.toLowerCase() : t === "vnode" && G(e) && "__v_isVNode" in e ? e.children.toLowerCase() : e,
    capitalize: (e, t) => t === "text" && M(e) ? os(e) : t === "vnode" && G(e) && "__v_isVNode" in e ? os(e.children) : e
  };
}
let sa;
function Ii(e) {
  sa = e;
}
let aa;
function Oi(e) {
  aa = e;
}
let oa;
function Pi(e) {
  oa = e;
}
let ia = null;
const is = (e) => {
  ia = e;
}, Ri = () => ia;
let ls = 0;
function Ai(e = {}) {
  const t = te(e.onWarn) ? e.onWarn : Lo, n = M(e.version) ? e.version : Ti, r = M(e.locale) || te(e.locale) ? e.locale : Ln, s = te(r) ? Ln : r, a = oe(e.fallbackLocale) || V(e.fallbackLocale) || M(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : s, o = V(e.messages) ? e.messages : Zn(s), c = V(e.datetimeFormats) ? e.datetimeFormats : Zn(s), u = V(e.numberFormats) ? e.numberFormats : Zn(s), h = fe(q(), e.modifiers, Ni()), g = e.pluralRules || q(), L = te(e.missing) ? e.missing : null, S = ae(e.missingWarn) || Sn(e.missingWarn) ? e.missingWarn : !0, R = ae(e.fallbackWarn) || Sn(e.fallbackWarn) ? e.fallbackWarn : !0, D = !!e.fallbackFormat, b = !!e.unresolving, N = te(e.postTranslation) ? e.postTranslation : null, f = V(e.processor) ? e.processor : null, E = ae(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, v = !!e.escapeParameter, _ = te(e.messageCompiler) ? e.messageCompiler : sa, O = te(e.messageResolver) ? e.messageResolver : aa || Li, P = te(e.localeFallbacker) ? e.localeFallbacker : oa || gi, y = G(e.fallbackContext) ? e.fallbackContext : void 0, x = e, W = G(x.__datetimeFormatters) ? x.__datetimeFormatters : /* @__PURE__ */ new Map(), ne = G(x.__numberFormatters) ? x.__numberFormatters : /* @__PURE__ */ new Map(), Z = G(x.__meta) ? x.__meta : {};
  ls++;
  const re = {
    version: n,
    cid: ls,
    locale: r,
    fallbackLocale: a,
    messages: o,
    modifiers: h,
    pluralRules: g,
    missing: L,
    missingWarn: S,
    fallbackWarn: R,
    fallbackFormat: D,
    unresolving: b,
    postTranslation: N,
    processor: f,
    warnHtmlMessage: E,
    escapeParameter: v,
    messageCompiler: _,
    messageResolver: O,
    localeFallbacker: P,
    fallbackContext: y,
    onWarn: t,
    __meta: Z
  };
  return re.datetimeFormats = c, re.numberFormats = u, re.__datetimeFormatters = W, re.__numberFormatters = ne, re;
}
const Zn = (e) => ({ [e]: q() });
function Lr(e, t, n, r, s) {
  const { missing: a, onWarn: o } = e;
  if (a !== null) {
    const c = a(e, n, t, s);
    return M(c) ? c : t;
  } else
    return t;
}
function Vt(e, t, n) {
  const r = e;
  r.__localeChainCache = /* @__PURE__ */ new Map(), e.localeFallbacker(e, n, t);
}
function Mi(e, t) {
  return e === t ? !1 : e.split("-")[0] === t.split("-")[0];
}
function Di(e, t) {
  const n = t.indexOf(e);
  if (n === -1)
    return !1;
  for (let r = n + 1; r < t.length; r++)
    if (Mi(e, t[r]))
      return !0;
  return !1;
}
function cs(e, ...t) {
  const { datetimeFormats: n, unresolving: r, fallbackLocale: s, onWarn: a, localeFallbacker: o } = e, { __datetimeFormatters: c } = e, [u, h, g, L] = ir(...t), S = ae(g.missingWarn) ? g.missingWarn : e.missingWarn;
  ae(g.fallbackWarn) ? g.fallbackWarn : e.fallbackWarn;
  const R = !!g.part, D = Sr(e, g), b = o(
    e,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    s,
    D
  );
  if (!M(u) || u === "")
    return new Intl.DateTimeFormat(D, L).format(h);
  let N = {}, f, E = null;
  const v = "datetime format";
  for (let P = 0; P < b.length && (f = b[P], N = n[f] || {}, E = N[u], !V(E)); P++)
    Lr(e, u, f, S, v);
  if (!V(E) || !M(f))
    return r ? Mn : u;
  let _ = `${f}__${u}`;
  Rn(L) || (_ = `${_}__${JSON.stringify(L)}`);
  let O = c.get(_);
  return O || (O = new Intl.DateTimeFormat(f, fe({}, E, L)), c.set(_, O)), R ? O.formatToParts(h) : O.format(h);
}
const la = [
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
function ir(...e) {
  const [t, n, r, s] = e, a = q();
  let o = q(), c;
  if (M(t)) {
    const u = t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
    if (!u)
      throw $e(Fe.INVALID_ISO_DATE_ARGUMENT);
    const h = u[3] ? u[3].trim().startsWith("T") ? `${u[1].trim()}${u[3].trim()}` : `${u[1].trim()}T${u[3].trim()}` : u[1].trim();
    c = new Date(h);
    try {
      c.toISOString();
    } catch {
      throw $e(Fe.INVALID_ISO_DATE_ARGUMENT);
    }
  } else if (No(t)) {
    if (isNaN(t.getTime()))
      throw $e(Fe.INVALID_DATE_ARGUMENT);
    c = t;
  } else if (ce(t))
    c = t;
  else
    throw $e(Fe.INVALID_ARGUMENT);
  return M(n) ? a.key = n : V(n) && Object.keys(n).forEach((u) => {
    la.includes(u) ? o[u] = n[u] : a[u] = n[u];
  }), M(r) ? a.locale = r : V(r) && (o = r), V(s) && (o = s), [a.key || "", c, a, o];
}
function us(e, t, n) {
  const r = e;
  for (const s in n) {
    const a = `${t}__${s}`;
    r.__datetimeFormatters.has(a) && r.__datetimeFormatters.delete(a);
  }
}
function ds(e, ...t) {
  const { numberFormats: n, unresolving: r, fallbackLocale: s, onWarn: a, localeFallbacker: o } = e, { __numberFormatters: c } = e, [u, h, g, L] = lr(...t), S = ae(g.missingWarn) ? g.missingWarn : e.missingWarn;
  ae(g.fallbackWarn) ? g.fallbackWarn : e.fallbackWarn;
  const R = !!g.part, D = Sr(e, g), b = o(
    e,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    s,
    D
  );
  if (!M(u) || u === "")
    return new Intl.NumberFormat(D, L).format(h);
  let N = {}, f, E = null;
  const v = "number format";
  for (let P = 0; P < b.length && (f = b[P], N = n[f] || {}, E = N[u], !V(E)); P++)
    Lr(e, u, f, S, v);
  if (!V(E) || !M(f))
    return r ? Mn : u;
  let _ = `${f}__${u}`;
  Rn(L) || (_ = `${_}__${JSON.stringify(L)}`);
  let O = c.get(_);
  return O || (O = new Intl.NumberFormat(f, fe({}, E, L)), c.set(_, O)), R ? O.formatToParts(h) : O.format(h);
}
const ca = [
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
function lr(...e) {
  const [t, n, r, s] = e, a = q();
  let o = q();
  if (!ce(t))
    throw $e(Fe.INVALID_ARGUMENT);
  const c = t;
  return M(n) ? a.key = n : V(n) && Object.keys(n).forEach((u) => {
    ca.includes(u) ? o[u] = n[u] : a[u] = n[u];
  }), M(r) ? a.locale = r : V(r) && (o = r), V(s) && (o = s), [a.key || "", c, a, o];
}
function fs(e, t, n) {
  const r = e;
  for (const s in n) {
    const a = `${t}__${s}`;
    r.__numberFormatters.has(a) && r.__numberFormatters.delete(a);
  }
}
const xi = (e) => e, Fi = (e) => "", $i = "text", Wi = (e) => e.length === 0 ? "" : wr(e), Ui = Ao;
function ps(e, t) {
  return e = Math.abs(e), t === 2 ? e ? e > 1 ? 1 : 0 : 1 : e ? Math.min(e, 2) : 0;
}
function zi(e) {
  const t = ce(e.pluralIndex) ? e.pluralIndex : -1;
  return e.named && (ce(e.named.count) || ce(e.named.n)) ? ce(e.named.count) ? e.named.count : ce(e.named.n) ? e.named.n : t : t;
}
function ji(e, t) {
  t.count || (t.count = e), t.n || (t.n = e);
}
function Hi(e = {}) {
  const t = e.locale, n = zi(e), r = G(e.pluralRules) && M(t) && te(e.pluralRules[t]) ? e.pluralRules[t] : ps, s = G(e.pluralRules) && M(t) && te(e.pluralRules[t]) ? ps : void 0, a = (f) => f[r(n, f.length, s)], o = e.list || [], c = (f) => o[f], u = e.named || q();
  ce(e.pluralIndex) && ji(n, u);
  const h = (f) => u[f];
  function g(f, E) {
    const v = te(e.messages) ? e.messages(f, !!E) : G(e.messages) ? e.messages[f] : !1;
    return v || (e.parent ? e.parent.message(f) : Fi);
  }
  const L = (f) => e.modifiers ? e.modifiers[f] : xi, S = V(e.processor) && te(e.processor.normalize) ? e.processor.normalize : Wi, R = V(e.processor) && te(e.processor.interpolate) ? e.processor.interpolate : Ui, D = V(e.processor) && M(e.processor.type) ? e.processor.type : $i, N = {
    list: c,
    named: h,
    plural: a,
    linked: (f, ...E) => {
      const [v, _] = E;
      let O = "text", P = "";
      E.length === 1 ? G(v) ? (P = v.modifier || P, O = v.type || O) : M(v) && (P = v || P) : E.length === 2 && (M(v) && (P = v || P), M(_) && (O = _ || O));
      const y = g(f, !0)(N), x = (
        // The message in vnode resolved with linked are returned as an array by processor.nomalize
        O === "vnode" && oe(y) && P ? y[0] : y
      );
      return P ? L(P)(x, O) : x;
    },
    message: g,
    type: D,
    interpolate: R,
    normalize: S,
    values: fe(q(), o, u)
  };
  return N;
}
const hs = () => "", Ue = (e) => te(e);
function ms(e, ...t) {
  const { fallbackFormat: n, postTranslation: r, unresolving: s, messageCompiler: a, fallbackLocale: o, messages: c } = e, [u, h] = cr(...t), g = ae(h.missingWarn) ? h.missingWarn : e.missingWarn, L = ae(h.fallbackWarn) ? h.fallbackWarn : e.fallbackWarn, S = ae(h.escapeParameter) ? h.escapeParameter : e.escapeParameter, R = !!h.resolvedMessage, D = M(h.default) || ae(h.default) ? ae(h.default) ? a ? u : () => u : h.default : n ? a ? u : () => u : null, b = n || D != null && (M(D) || te(D)), N = Sr(e, h);
  S && Bi(h);
  let [f, E, v] = R ? [
    u,
    N,
    c[N] || q()
  ] : ua(e, u, N, o, L, g), _ = f, O = u;
  if (!R && !(M(_) || Ae(_) || Ue(_)) && b && (_ = D, O = _), !R && (!(M(_) || Ae(_) || Ue(_)) || !M(E)))
    return s ? Mn : u;
  let P = !1;
  const y = () => {
    P = !0;
  }, x = Ue(_) ? _ : da(e, u, E, _, O, y);
  if (P)
    return _;
  const W = Ki(e, E, v, h), ne = Hi(W), Z = Vi(e, x, ne);
  let re = r ? r(Z, u) : Z;
  return S && M(re) && (re = Oo(re)), re;
}
function Bi(e) {
  oe(e.list) ? e.list = e.list.map((t) => M(t) ? qr(t) : t) : G(e.named) && Object.keys(e.named).forEach((t) => {
    M(e.named[t]) && (e.named[t] = qr(e.named[t]));
  });
}
function ua(e, t, n, r, s, a) {
  const { messages: o, onWarn: c, messageResolver: u, localeFallbacker: h } = e, g = h(e, r, n);
  let L = q(), S, R = null;
  const D = "translate";
  for (let b = 0; b < g.length && (S = g[b], L = o[S] || q(), (R = u(L, t)) === null && (R = L[t]), !(M(R) || Ae(R) || Ue(R))); b++)
    if (!Di(S, g)) {
      const N = Lr(
        e,
        // eslint-disable-line @typescript-eslint/no-explicit-any
        t,
        S,
        a,
        D
      );
      N !== t && (R = N);
    }
  return [R, S, L];
}
function da(e, t, n, r, s, a) {
  const { messageCompiler: o, warnHtmlMessage: c } = e;
  if (Ue(r)) {
    const h = r;
    return h.locale = h.locale || n, h.key = h.key || t, h;
  }
  if (o == null) {
    const h = () => r;
    return h.locale = n, h.key = t, h;
  }
  const u = o(r, Gi(e, n, s, r, c, a));
  return u.locale = n, u.key = t, u.source = r, u;
}
function Vi(e, t, n) {
  return t(n);
}
function cr(...e) {
  const [t, n, r] = e, s = q();
  if (!M(t) && !ce(t) && !Ue(t) && !Ae(t))
    throw $e(Fe.INVALID_ARGUMENT);
  const a = ce(t) ? String(t) : (Ue(t), t);
  return ce(n) ? s.plural = n : M(n) ? s.default = n : V(n) && !Rn(n) ? s.named = n : oe(n) && (s.list = n), ce(r) ? s.plural = r : M(r) ? s.default = r : V(r) && fe(s, r), [a, s];
}
function Gi(e, t, n, r, s, a) {
  return {
    locale: t,
    key: n,
    warnHtmlMessage: s,
    onError: (o) => {
      throw a && a(o), o;
    },
    onCacheKey: (o) => ko(t, n, o)
  };
}
function Ki(e, t, n, r) {
  const { modifiers: s, pluralRules: a, messageResolver: o, fallbackLocale: c, fallbackWarn: u, missingWarn: h, fallbackContext: g } = e, S = {
    locale: t,
    modifiers: s,
    pluralRules: a,
    messages: (R, D) => {
      let b = o(n, R);
      if (b == null && (g || D)) {
        const [, , N] = ua(
          g || e,
          // NOTE: if has fallbackContext, fallback to root, else if use linked, fallback to local context
          R,
          t,
          c,
          u,
          h
        );
        b = o(N, R);
      }
      if (M(b) || Ae(b)) {
        let N = !1;
        const E = da(e, R, t, b, R, () => {
          N = !0;
        });
        return N ? hs : E;
      } else return Ue(b) ? b : hs;
    }
  };
  return e.processor && (S.processor = e.processor), r.list && (S.list = r.list), r.named && (S.named = r.named), ce(r.plural) && (S.pluralIndex = r.plural), S;
}
si();
/*!
  * vue-i18n v11.2.2
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
const Yi = "11.2.2";
function Xi() {
  typeof __VUE_I18N_FULL_INSTALL__ != "boolean" && (gn().__VUE_I18N_FULL_INSTALL__ = !0), typeof __VUE_I18N_LEGACY_API__ != "boolean" && (gn().__VUE_I18N_LEGACY_API__ = !0), typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (gn().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1);
}
const Nt = {
  // composer module errors
  UNEXPECTED_RETURN_TYPE: mi,
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
function en(e, ...t) {
  return An(e, null, void 0);
}
const ur = /* @__PURE__ */ ut("__translateVNode"), dr = /* @__PURE__ */ ut("__datetimeParts"), fr = /* @__PURE__ */ ut("__numberParts"), qi = ut("__setPluralRules"), fa = /* @__PURE__ */ ut("__injectWithOption"), pr = /* @__PURE__ */ ut("__dispose");
function tn(e) {
  if (!G(e) || Ae(e))
    return e;
  for (const t in e)
    if (Se(e, t))
      if (!t.includes("."))
        G(e[t]) && tn(e[t]);
      else {
        const n = t.split("."), r = n.length - 1;
        let s = e, a = !1;
        for (let o = 0; o < r; o++) {
          if (n[o] === "__proto__")
            throw new Error(`unsafe key: ${n[o]}`);
          if (n[o] in s || (s[n[o]] = q()), !G(s[n[o]])) {
            a = !0;
            break;
          }
          s = s[n[o]];
        }
        if (a || (Ae(s) ? na.includes(n[r]) || delete e[t] : (s[n[r]] = e[t], delete e[t])), !Ae(s)) {
          const o = s[n[r]];
          G(o) && tn(o);
        }
      }
  return e;
}
function pa(e, t) {
  const { messages: n, __i18n: r, messageResolver: s, flatJson: a } = t, o = V(n) ? n : oe(r) ? q() : { [e]: q() };
  if (oe(r) && r.forEach((c) => {
    if ("locale" in c && "resource" in c) {
      const { locale: u, resource: h } = c;
      u ? (o[u] = o[u] || q(), _n(h, o[u])) : _n(h, o);
    } else
      M(c) && _n(JSON.parse(c), o);
  }), s == null && a)
    for (const c in o)
      Se(o, c) && tn(o[c]);
  return o;
}
function Ji(e) {
  return e.type;
}
function Zi(e, t, n) {
  let r = G(t.messages) ? t.messages : q();
  "__i18nGlobal" in n && (r = pa(e.locale.value, {
    messages: r,
    __i18n: n.__i18nGlobal
  }));
  const s = Object.keys(r);
  s.length && s.forEach((a) => {
    e.mergeLocaleMessage(a, r[a]);
  });
  {
    if (G(t.datetimeFormats)) {
      const a = Object.keys(t.datetimeFormats);
      a.length && a.forEach((o) => {
        e.mergeDateTimeFormat(o, t.datetimeFormats[o]);
      });
    }
    if (G(t.numberFormats)) {
      const a = Object.keys(t.numberFormats);
      a.length && a.forEach((o) => {
        e.mergeNumberFormat(o, t.numberFormats[o]);
      });
    }
  }
}
function gs(e) {
  return J(ho, null, e, 0);
}
function ha() {
  return "currentInstance" in Yn ? Yn["currentInstance"] : Yn.getCurrentInstance();
}
const _s = () => [], Qi = () => !1;
let vs = 0;
function ys(e) {
  return (t, n, r, s) => e(n, r, ha() || void 0, s);
}
function el(e = {}) {
  const { __root: t, __injectWithOption: n } = e, r = t === void 0, s = e.flatJson, a = Yr ? H : po;
  let o = ae(e.inheritLocale) ? e.inheritLocale : !0;
  const c = a(
    // prettier-ignore
    t && o ? t.locale.value : M(e.locale) ? e.locale : Ln
  ), u = a(
    // prettier-ignore
    t && o ? t.fallbackLocale.value : M(e.fallbackLocale) || oe(e.fallbackLocale) || V(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : c.value
  ), h = a(pa(c.value, e)), g = a(V(e.datetimeFormats) ? e.datetimeFormats : { [c.value]: {} }), L = a(V(e.numberFormats) ? e.numberFormats : { [c.value]: {} });
  let S = t ? t.missingWarn : ae(e.missingWarn) || Sn(e.missingWarn) ? e.missingWarn : !0, R = t ? t.fallbackWarn : ae(e.fallbackWarn) || Sn(e.fallbackWarn) ? e.fallbackWarn : !0, D = t ? t.fallbackRoot : ae(e.fallbackRoot) ? e.fallbackRoot : !0, b = !!e.fallbackFormat, N = te(e.missing) ? e.missing : null, f = te(e.missing) ? ys(e.missing) : null, E = te(e.postTranslation) ? e.postTranslation : null, v = t ? t.warnHtmlMessage : ae(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, _ = !!e.escapeParameter;
  const O = t ? t.modifiers : V(e.modifiers) ? e.modifiers : {};
  let P = e.pluralRules || t && t.pluralRules, y;
  y = (() => {
    r && is(null);
    const m = {
      version: Yi,
      locale: c.value,
      fallbackLocale: u.value,
      messages: h.value,
      modifiers: O,
      pluralRules: P,
      missing: f === null ? void 0 : f,
      missingWarn: S,
      fallbackWarn: R,
      fallbackFormat: b,
      unresolving: !0,
      postTranslation: E === null ? void 0 : E,
      warnHtmlMessage: v,
      escapeParameter: _,
      messageResolver: e.messageResolver,
      messageCompiler: e.messageCompiler,
      __meta: { framework: "vue" }
    };
    m.datetimeFormats = g.value, m.numberFormats = L.value, m.__datetimeFormatters = V(y) ? y.__datetimeFormatters : void 0, m.__numberFormatters = V(y) ? y.__numberFormatters : void 0;
    const T = Ai(m);
    return r && is(T), T;
  })(), Vt(y, c.value, u.value);
  function W() {
    return [
      c.value,
      u.value,
      h.value,
      g.value,
      L.value
    ];
  }
  const ne = F({
    get: () => c.value,
    set: (m) => {
      y.locale = m, c.value = m;
    }
  }), Z = F({
    get: () => u.value,
    set: (m) => {
      y.fallbackLocale = m, u.value = m, Vt(y, c.value, m);
    }
  }), re = F(() => h.value), Mt = /* @__PURE__ */ F(() => g.value), Dt = /* @__PURE__ */ F(() => L.value);
  function xt() {
    return te(E) ? E : null;
  }
  function Ft(m) {
    E = m, y.postTranslation = m;
  }
  function $t() {
    return N;
  }
  function Wt(m) {
    m !== null && (f = ys(m)), N = m, y.missing = f;
  }
  const ye = (m, T, K, ee, ie, wt) => {
    W();
    let we;
    try {
      r || (y.fallbackContext = t ? Ri() : void 0), we = m(y);
    } finally {
      r || (y.fallbackContext = void 0);
    }
    if (K !== "translate exists" && // for not `te` (e.g `t`)
    ce(we) && we === Mn || K === "translate exists" && !we) {
      const [an, jt] = T();
      return t && D ? ee(t) : ie(an);
    } else {
      if (wt(we))
        return we;
      throw en(Nt.UNEXPECTED_RETURN_TYPE);
    }
  };
  function pt(...m) {
    return ye((T) => Reflect.apply(ms, null, [T, ...m]), () => cr(...m), "translate", (T) => Reflect.apply(T.t, T, [...m]), (T) => T, (T) => M(T));
  }
  function ht(...m) {
    const [T, K, ee] = m;
    if (ee && !G(ee))
      throw en(Nt.INVALID_ARGUMENT);
    return pt(T, K, fe({ resolvedMessage: !0 }, ee || {}));
  }
  function mt(...m) {
    return ye((T) => Reflect.apply(cs, null, [T, ...m]), () => ir(...m), "datetime format", (T) => Reflect.apply(T.d, T, [...m]), () => as, (T) => M(T) || oe(T));
  }
  function me(...m) {
    return ye((T) => Reflect.apply(ds, null, [T, ...m]), () => lr(...m), "number format", (T) => Reflect.apply(T.n, T, [...m]), () => as, (T) => M(T) || oe(T));
  }
  function Me(m) {
    return m.map((T) => M(T) || ce(T) || ae(T) ? gs(String(T)) : T);
  }
  const Ut = {
    normalize: Me,
    interpolate: (m) => m,
    type: "vnode"
  };
  function zt(...m) {
    return ye((T) => {
      let K;
      const ee = T;
      try {
        ee.processor = Ut, K = Reflect.apply(ms, null, [ee, ...m]);
      } finally {
        ee.processor = null;
      }
      return K;
    }, () => cr(...m), "translate", (T) => T[ur](...m), (T) => [gs(T)], (T) => oe(T));
  }
  function gt(...m) {
    return ye((T) => Reflect.apply(ds, null, [T, ...m]), () => lr(...m), "number format", (T) => T[fr](...m), _s, (T) => M(T) || oe(T));
  }
  function _t(...m) {
    return ye((T) => Reflect.apply(cs, null, [T, ...m]), () => ir(...m), "datetime format", (T) => T[dr](...m), _s, (T) => M(T) || oe(T));
  }
  function qe(m) {
    P = m, y.pluralRules = P;
  }
  function vt(m, T) {
    return ye(() => {
      if (!m)
        return !1;
      const K = M(T) ? T : c.value, ee = ke(K), ie = y.messageResolver(ee, m);
      return Ae(ie) || Ue(ie) || M(ie);
    }, () => [m], "translate exists", (K) => Reflect.apply(K.te, K, [m, T]), Qi, (K) => ae(K));
  }
  function yt(m) {
    let T = null;
    const K = ra(y, u.value, c.value);
    for (let ee = 0; ee < K.length; ee++) {
      const ie = h.value[K[ee]] || {}, wt = y.messageResolver(ie, m);
      if (wt != null) {
        T = wt;
        break;
      }
    }
    return T;
  }
  function ze(m) {
    const T = yt(m);
    return T ?? (t ? t.tm(m) || {} : {});
  }
  function ke(m) {
    return h.value[m] || {};
  }
  function Te(m, T) {
    if (s) {
      const K = { [m]: T };
      for (const ee in K)
        Se(K, ee) && tn(K[ee]);
      T = K[m];
    }
    h.value[m] = T, y.messages = h.value;
  }
  function Je(m, T) {
    h.value[m] = h.value[m] || {};
    const K = { [m]: T };
    if (s)
      for (const ee in K)
        Se(K, ee) && tn(K[ee]);
    T = K[m], _n(T, h.value[m]), y.messages = h.value;
  }
  function bt(m) {
    return g.value[m] || {};
  }
  function i(m, T) {
    g.value[m] = T, y.datetimeFormats = g.value, us(y, m, T);
  }
  function l(m, T) {
    g.value[m] = fe(g.value[m] || {}, T), y.datetimeFormats = g.value, us(y, m, T);
  }
  function w(m) {
    return L.value[m] || {};
  }
  function A(m, T) {
    L.value[m] = T, y.numberFormats = L.value, fs(y, m, T);
  }
  function B(m, T) {
    L.value[m] = fe(L.value[m] || {}, T), y.numberFormats = L.value, fs(y, m, T);
  }
  vs++, t && Yr && (We(t.locale, (m) => {
    o && (c.value = m, y.locale = m, Vt(y, c.value, u.value));
  }), We(t.fallbackLocale, (m) => {
    o && (u.value = m, y.fallbackLocale = m, Vt(y, c.value, u.value));
  }));
  const z = {
    id: vs,
    locale: ne,
    fallbackLocale: Z,
    get inheritLocale() {
      return o;
    },
    set inheritLocale(m) {
      o = m, m && t && (c.value = t.locale.value, u.value = t.fallbackLocale.value, Vt(y, c.value, u.value));
    },
    get availableLocales() {
      return Object.keys(h.value).sort();
    },
    messages: re,
    get modifiers() {
      return O;
    },
    get pluralRules() {
      return P || {};
    },
    get isGlobal() {
      return r;
    },
    get missingWarn() {
      return S;
    },
    set missingWarn(m) {
      S = m, y.missingWarn = S;
    },
    get fallbackWarn() {
      return R;
    },
    set fallbackWarn(m) {
      R = m, y.fallbackWarn = R;
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
      b = m, y.fallbackFormat = b;
    },
    get warnHtmlMessage() {
      return v;
    },
    set warnHtmlMessage(m) {
      v = m, y.warnHtmlMessage = m;
    },
    get escapeParameter() {
      return _;
    },
    set escapeParameter(m) {
      _ = m, y.escapeParameter = m;
    },
    t: pt,
    getLocaleMessage: ke,
    setLocaleMessage: Te,
    mergeLocaleMessage: Je,
    getPostTranslationHandler: xt,
    setPostTranslationHandler: Ft,
    getMissingHandler: $t,
    setMissingHandler: Wt,
    [qi]: qe
  };
  return z.datetimeFormats = Mt, z.numberFormats = Dt, z.rt = ht, z.te = vt, z.tm = ze, z.d = mt, z.n = me, z.getDateTimeFormat = bt, z.setDateTimeFormat = i, z.mergeDateTimeFormat = l, z.getNumberFormat = w, z.setNumberFormat = A, z.mergeNumberFormat = B, z[fa] = n, z[ur] = zt, z[dr] = _t, z[fr] = gt, z;
}
const kr = {
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
function tl({ slots: e }, t) {
  return t.length === 1 && t[0] === "default" ? (e.default ? e.default() : []).reduce((r, s) => [
    ...r,
    // prettier-ignore
    ...s.type === Oe ? s.children : [s]
  ], []) : t.reduce((n, r) => {
    const s = e[r];
    return s && (n[r] = s()), n;
  }, q());
}
function ma() {
  return Oe;
}
fe({
  keypath: {
    type: String,
    required: !0
  },
  plural: {
    type: [Number, String],
    validator: (e) => ce(e) || !isNaN(e)
  }
}, kr);
function nl(e) {
  return oe(e) && !M(e[0]);
}
function ga(e, t, n, r) {
  const { slots: s, attrs: a } = t;
  return () => {
    const o = { part: !0 };
    let c = q();
    e.locale && (o.locale = e.locale), M(e.format) ? o.key = e.format : G(e.format) && (M(e.format.key) && (o.key = e.format.key), c = Object.keys(e.format).reduce((S, R) => n.includes(R) ? fe(q(), S, { [R]: e.format[R] }) : S, q()));
    const u = r(e.value, o, c);
    let h = [o.key];
    oe(u) ? h = u.map((S, R) => {
      const D = s[S.type], b = D ? D({ [S.type]: S.value, index: R, parts: u }) : [S.value];
      return nl(b) && (b[0].key = `${S.type}-${R}`), b;
    }) : M(u) && (h = [u]);
    const g = fe(q(), a), L = M(e.tag) || G(e.tag) ? e.tag : ma();
    return Vs(L, g, h);
  };
}
fe({
  value: {
    type: Number,
    required: !0
  },
  format: {
    type: [String, Object]
  }
}, kr);
const rl = /* @__PURE__ */ ut("global-vue-i18n");
function Dn(e = {}) {
  const t = ha();
  if (t == null)
    throw en(Nt.MUST_BE_CALL_SETUP_TOP);
  if (!t.isCE && t.appContext.app != null && !t.appContext.app.__VUE_I18N_SYMBOL__)
    throw en(Nt.NOT_INSTALLED);
  const n = sl(t), r = ol(n), s = Ji(t), a = al(e, s);
  if (a === "global")
    return Zi(r, e, s), r;
  if (a === "parent") {
    let u = il(n, t, e.__useComponent);
    return u == null && (u = r), u;
  }
  const o = n;
  let c = o.__getInstance(t);
  if (c == null) {
    const u = fe({}, e);
    "__i18n" in s && (u.__i18n = s.__i18n), r && (u.__root = r), c = el(u), o.__composerExtend && (c[pr] = o.__composerExtend(c)), cl(o, t, c), o.__setInstance(t, c);
  }
  return c;
}
function sl(e) {
  const t = Ge(e.isCE ? rl : e.appContext.app.__VUE_I18N_SYMBOL__);
  if (!t)
    throw en(e.isCE ? Nt.NOT_INSTALLED_WITH_PROVIDE : Nt.UNEXPECTED_ERROR);
  return t;
}
function al(e, t) {
  return Rn(e) ? "__i18n" in t ? "local" : "global" : e.useScope ? e.useScope : "local";
}
function ol(e) {
  return e.mode === "composition" ? e.global : e.global.__composer;
}
function il(e, t, n = !1) {
  let r = null;
  const s = t.root;
  let a = ll(t, n);
  for (; a != null; ) {
    const o = e;
    if (e.mode === "composition")
      r = o.__getInstance(a);
    else if (__VUE_I18N_LEGACY_API__) {
      const c = o.__getInstance(a);
      c != null && (r = c.__composer, n && r && !r[fa] && (r = null));
    }
    if (r != null || s === a)
      break;
    a = a.parent;
  }
  return r;
}
function ll(e, t = !1) {
  return e == null ? null : t && e.vnode.ctx || e.parent;
}
function cl(e, t, n) {
  sn(() => {
  }, t), vr(() => {
    const r = n;
    e.__deleteInstance(t);
    const s = r[pr];
    s && (s(), delete r[pr]);
  }, t);
}
fe({
  value: {
    type: [Number, Date],
    required: !0
  },
  format: {
    type: [String, Object]
  }
}, kr);
Xi();
Ii(hi);
Oi(ki);
Pi(ra);
function ul(e, t, n, r) {
  if (typeof t == "function" ? e !== t || !0 : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return n === "m" ? r : n === "a" ? r.call(e) : r ? r.value : t.get(e);
}
function dl(e, t, n, r, s) {
  if (typeof t == "function" ? e !== t || !0 : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return t.set(e, n), n;
}
var vn;
const be = "__TAURI_TO_IPC_KEY__";
function fl(e, t = !1) {
  return window.__TAURI_INTERNALS__.transformCallback(e, t);
}
async function I(e, t = {}, n) {
  return window.__TAURI_INTERNALS__.invoke(e, t, n);
}
class pl {
  get rid() {
    return ul(this, vn, "f");
  }
  constructor(t) {
    vn.set(this, void 0), dl(this, vn, t);
  }
  /**
   * Destroys and cleans up this resource from memory.
   * **You should not call any method on this object anymore and should drop any reference to it.**
   */
  async close() {
    return I("plugin:resources|close", {
      rid: this.rid
    });
  }
}
vn = /* @__PURE__ */ new WeakMap();
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
  [be]() {
    return {
      width: this.width,
      height: this.height
    };
  }
  toJSON() {
    return this[be]();
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
  [be]() {
    return {
      width: this.width,
      height: this.height
    };
  }
  toJSON() {
    return this[be]();
  }
}
class Ct {
  constructor(t) {
    this.size = t;
  }
  toLogical(t) {
    return this.size instanceof rt ? this.size : this.size.toLogical(t);
  }
  toPhysical(t) {
    return this.size instanceof ot ? this.size : this.size.toPhysical(t);
  }
  [be]() {
    return {
      [`${this.size.type}`]: {
        width: this.size.width,
        height: this.size.height
      }
    };
  }
  toJSON() {
    return this[be]();
  }
}
class _a {
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
    return new Pe(this.x * t, this.y * t);
  }
  [be]() {
    return {
      x: this.x,
      y: this.y
    };
  }
  toJSON() {
    return this[be]();
  }
}
class Pe {
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
    return new _a(this.x / t, this.y / t);
  }
  [be]() {
    return {
      x: this.x,
      y: this.y
    };
  }
  toJSON() {
    return this[be]();
  }
}
class fn {
  constructor(t) {
    this.position = t;
  }
  toLogical(t) {
    return this.position instanceof _a ? this.position : this.position.toLogical(t);
  }
  toPhysical(t) {
    return this.position instanceof Pe ? this.position : this.position.toPhysical(t);
  }
  [be]() {
    return {
      [`${this.position.type}`]: {
        x: this.position.x,
        y: this.position.y
      }
    };
  }
  toJSON() {
    return this[be]();
  }
}
var ge;
(function(e) {
  e.WINDOW_RESIZED = "tauri://resize", e.WINDOW_MOVED = "tauri://move", e.WINDOW_CLOSE_REQUESTED = "tauri://close-requested", e.WINDOW_DESTROYED = "tauri://destroyed", e.WINDOW_FOCUS = "tauri://focus", e.WINDOW_BLUR = "tauri://blur", e.WINDOW_SCALE_FACTOR_CHANGED = "tauri://scale-change", e.WINDOW_THEME_CHANGED = "tauri://theme-changed", e.WINDOW_CREATED = "tauri://window-created", e.WEBVIEW_CREATED = "tauri://webview-created", e.DRAG_ENTER = "tauri://drag-enter", e.DRAG_OVER = "tauri://drag-over", e.DRAG_DROP = "tauri://drag-drop", e.DRAG_LEAVE = "tauri://drag-leave";
})(ge || (ge = {}));
async function va(e, t) {
  await I("plugin:event|unlisten", {
    event: e,
    eventId: t
  });
}
async function kn(e, t, n) {
  var r;
  const s = typeof n?.target == "string" ? { kind: "AnyLabel", label: n.target } : (r = n?.target) !== null && r !== void 0 ? r : { kind: "Any" };
  return I("plugin:event|listen", {
    event: e,
    target: s,
    handler: fl(t)
  }).then((a) => async () => va(e, a));
}
async function hl(e, t, n) {
  return kn(e, (r) => {
    va(e, r.id), t(r);
  }, n);
}
async function ml(e, t) {
  await I("plugin:event|emit", {
    event: e,
    payload: t
  });
}
async function gl(e, t, n) {
  await I("plugin:event|emit_to", {
    target: typeof e == "string" ? { kind: "AnyLabel", label: e } : e,
    event: t,
    payload: n
  });
}
class Jt extends pl {
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
    return I("plugin:image|new", {
      rgba: Tn(t),
      width: n,
      height: r
    }).then((s) => new Jt(s));
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
    return I("plugin:image|from_bytes", {
      bytes: Tn(t)
    }).then((n) => new Jt(n));
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
    return I("plugin:image|from_path", { path: t }).then((n) => new Jt(n));
  }
  /** Returns the RGBA data for this image, in row-major order from top to bottom.  */
  async rgba() {
    return I("plugin:image|rgba", {
      rid: this.rid
    }).then((t) => new Uint8Array(t));
  }
  /** Returns the size of this image.  */
  async size() {
    return I("plugin:image|size", { rid: this.rid });
  }
}
function Tn(e) {
  return e == null ? null : typeof e == "string" ? e : e instanceof Jt ? e.rid : e;
}
var hr;
(function(e) {
  e[e.Critical = 1] = "Critical", e[e.Informational = 2] = "Informational";
})(hr || (hr = {}));
class _l {
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
var bs;
(function(e) {
  e.None = "none", e.Normal = "normal", e.Indeterminate = "indeterminate", e.Paused = "paused", e.Error = "error";
})(bs || (bs = {}));
function ya() {
  return new ba(window.__TAURI_INTERNALS__.metadata.currentWindow.label, {
    // @ts-expect-error `skip` is not defined in the public API but it is handled by the constructor
    skip: !0
  });
}
async function Qn() {
  return I("plugin:window|get_all_windows").then((e) => e.map((t) => new ba(t, {
    // @ts-expect-error `skip` is not defined in the public API but it is handled by the constructor
    skip: !0
  })));
}
const er = ["tauri://created", "tauri://error"];
class ba {
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
    this.label = t, this.listeners = /* @__PURE__ */ Object.create(null), n?.skip || I("plugin:window|create", {
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
    return (n = (await Qn()).find((r) => r.label === t)) !== null && n !== void 0 ? n : null;
  }
  /**
   * Get an instance of `Window` for the current window.
   */
  static getCurrent() {
    return ya();
  }
  /**
   * Gets a list of instances of `Window` for all available windows.
   */
  static async getAll() {
    return Qn();
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
    for (const t of await Qn())
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
    } : kn(t, n, {
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
    } : hl(t, n, {
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
    if (er.includes(t)) {
      for (const r of this.listeners[t] || [])
        r({
          event: t,
          id: -1,
          payload: n
        });
      return;
    }
    return ml(t, n);
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
    if (er.includes(n)) {
      for (const s of this.listeners[n] || [])
        s({
          event: n,
          id: -1,
          payload: r
        });
      return;
    }
    return gl(t, n, r);
  }
  /** @ignore */
  _handleTauriEvent(t, n) {
    return er.includes(t) ? (t in this.listeners ? this.listeners[t].push(n) : this.listeners[t] = [n], !0) : !1;
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
    return I("plugin:window|scale_factor", {
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
    return I("plugin:window|inner_position", {
      label: this.label
    }).then((t) => new Pe(t));
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
    return I("plugin:window|outer_position", {
      label: this.label
    }).then((t) => new Pe(t));
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
    return I("plugin:window|inner_size", {
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
    return I("plugin:window|outer_size", {
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
    return I("plugin:window|is_fullscreen", {
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
    return I("plugin:window|is_minimized", {
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
    return I("plugin:window|is_maximized", {
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
    return I("plugin:window|is_focused", {
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
    return I("plugin:window|is_decorated", {
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
    return I("plugin:window|is_resizable", {
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
    return I("plugin:window|is_maximizable", {
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
    return I("plugin:window|is_minimizable", {
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
    return I("plugin:window|is_closable", {
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
    return I("plugin:window|is_visible", {
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
    return I("plugin:window|title", {
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
    return I("plugin:window|theme", {
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
    return I("plugin:window|is_always_on_top", {
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
    return I("plugin:window|center", {
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
    return t && (t === hr.Critical ? n = { type: "Critical" } : n = { type: "Informational" }), I("plugin:window|request_user_attention", {
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
    return I("plugin:window|set_resizable", {
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
    return I("plugin:window|set_enabled", {
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
    return I("plugin:window|is_enabled", {
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
    return I("plugin:window|set_maximizable", {
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
    return I("plugin:window|set_minimizable", {
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
    return I("plugin:window|set_closable", {
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
    return I("plugin:window|set_title", {
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
    return I("plugin:window|maximize", {
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
    return I("plugin:window|unmaximize", {
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
    return I("plugin:window|toggle_maximize", {
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
    return I("plugin:window|minimize", {
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
    return I("plugin:window|unminimize", {
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
    return I("plugin:window|show", {
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
    return I("plugin:window|hide", {
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
    return I("plugin:window|close", {
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
    return I("plugin:window|destroy", {
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
    return I("plugin:window|set_decorations", {
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
    return I("plugin:window|set_shadow", {
      label: this.label,
      value: t
    });
  }
  /**
   * Set window effects.
   */
  async setEffects(t) {
    return I("plugin:window|set_effects", {
      label: this.label,
      value: t
    });
  }
  /**
   * Clear any applied effects if possible.
   */
  async clearEffects() {
    return I("plugin:window|set_effects", {
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
    return I("plugin:window|set_always_on_top", {
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
    return I("plugin:window|set_always_on_bottom", {
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
    return I("plugin:window|set_content_protected", {
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
    return I("plugin:window|set_size", {
      label: this.label,
      value: t instanceof Ct ? t : new Ct(t)
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
    return I("plugin:window|set_min_size", {
      label: this.label,
      value: t instanceof Ct ? t : t ? new Ct(t) : null
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
    return I("plugin:window|set_max_size", {
      label: this.label,
      value: t instanceof Ct ? t : t ? new Ct(t) : null
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
    return I("plugin:window|set_size_constraints", {
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
    return I("plugin:window|set_position", {
      label: this.label,
      value: t instanceof fn ? t : new fn(t)
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
    return I("plugin:window|set_fullscreen", {
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
    return I("plugin:window|set_focus", {
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
    return I("plugin:window|set_icon", {
      label: this.label,
      value: Tn(t)
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
    return I("plugin:window|set_skip_taskbar", {
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
    return I("plugin:window|set_cursor_grab", {
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
    return I("plugin:window|set_cursor_visible", {
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
    return I("plugin:window|set_cursor_icon", {
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
    return I("plugin:window|set_background_color", { color: t });
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
    return I("plugin:window|set_cursor_position", {
      label: this.label,
      value: t instanceof fn ? t : new fn(t)
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
    return I("plugin:window|set_ignore_cursor_events", {
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
    return I("plugin:window|start_dragging", {
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
    return I("plugin:window|start_resize_dragging", {
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
    return I("plugin:window|set_badge_count", {
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
    return I("plugin:window|set_badge_label", {
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
    return I("plugin:window|set_overlay_icon", {
      label: this.label,
      value: t ? Tn(t) : void 0
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
    return I("plugin:window|set_progress_bar", {
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
    return I("plugin:window|set_visible_on_all_workspaces", {
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
    return I("plugin:window|set_title_bar_style", {
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
    return I("plugin:window|set_theme", {
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
    return this.listen(ge.WINDOW_RESIZED, (n) => {
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
    return this.listen(ge.WINDOW_MOVED, (n) => {
      n.payload = new Pe(n.payload), t(n);
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
    return this.listen(ge.WINDOW_CLOSE_REQUESTED, async (n) => {
      const r = new _l(n);
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
    const n = await this.listen(ge.DRAG_ENTER, (o) => {
      t({
        ...o,
        payload: {
          type: "enter",
          paths: o.payload.paths,
          position: new Pe(o.payload.position)
        }
      });
    }), r = await this.listen(ge.DRAG_OVER, (o) => {
      t({
        ...o,
        payload: {
          type: "over",
          position: new Pe(o.payload.position)
        }
      });
    }), s = await this.listen(ge.DRAG_DROP, (o) => {
      t({
        ...o,
        payload: {
          type: "drop",
          paths: o.payload.paths,
          position: new Pe(o.payload.position)
        }
      });
    }), a = await this.listen(ge.DRAG_LEAVE, (o) => {
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
    const n = await this.listen(ge.WINDOW_FOCUS, (s) => {
      t({ ...s, payload: !0 });
    }), r = await this.listen(ge.WINDOW_BLUR, (s) => {
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
    return this.listen(ge.WINDOW_SCALE_FACTOR_CHANGED, t);
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
    return this.listen(ge.WINDOW_THEME_CHANGED, t);
  }
}
var ws;
(function(e) {
  e.Disabled = "disabled", e.Throttle = "throttle", e.Suspend = "suspend";
})(ws || (ws = {}));
var Cs;
(function(e) {
  e.AppearanceBased = "appearanceBased", e.Light = "light", e.Dark = "dark", e.MediumLight = "mediumLight", e.UltraDark = "ultraDark", e.Titlebar = "titlebar", e.Selection = "selection", e.Menu = "menu", e.Popover = "popover", e.Sidebar = "sidebar", e.HeaderView = "headerView", e.Sheet = "sheet", e.WindowBackground = "windowBackground", e.HudWindow = "hudWindow", e.FullScreenUI = "fullScreenUI", e.Tooltip = "tooltip", e.ContentBackground = "contentBackground", e.UnderWindowBackground = "underWindowBackground", e.UnderPageBackground = "underPageBackground", e.Mica = "mica", e.Blur = "blur", e.Acrylic = "acrylic", e.Tabbed = "tabbed", e.TabbedDark = "tabbedDark", e.TabbedLight = "tabbedLight";
})(Cs || (Cs = {}));
var Es;
(function(e) {
  e.FollowsWindowActiveState = "followsWindowActiveState", e.Active = "active", e.Inactive = "inactive";
})(Es || (Es = {}));
function vl(e) {
  return e === null ? null : {
    name: e.name,
    scaleFactor: e.scaleFactor,
    position: new Pe(e.position),
    size: new ot(e.size)
  };
}
async function yl(e, t) {
  return I("plugin:window|monitor_from_point", {
    x: e,
    y: t
  }).then(vl);
}
var bl = {
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
function wl() {
  return "icon-" + ((1 + Math.random()) * 4294967296 | 0).toString(16).substring(1);
}
function Cl(e, t, n) {
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
var El = Symbol("icon-context");
function xn(e, t, n) {
  var r = {
    name: "icon-" + e,
    props: ["size", "strokeWidth", "strokeLinecap", "strokeLinejoin", "theme", "fill", "spin"],
    setup: function(a) {
      var o = wl(), c = Ge(El, bl);
      return function() {
        var u = a.size, h = a.strokeWidth, g = a.strokeLinecap, L = a.strokeLinejoin, S = a.theme, R = a.fill, D = a.spin, b = Cl(o, {
          size: u,
          strokeWidth: h,
          strokeLinecap: g,
          strokeLinejoin: L,
          theme: S,
          fill: R
        }, c), N = [c.prefix + "-icon"];
        return N.push(c.prefix + "-icon-" + e), t && c.rtl && N.push(c.prefix + "-icon-rtl"), D && N.push(c.prefix + "-icon-spin"), J("span", {
          class: N.join(" ")
        }, [n(b)]);
      };
    }
  };
  return r;
}
const Sl = xn("close-small", !1, function(e) {
  return J("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [J("path", {
    d: "M14 14L34 34",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), J("path", {
    d: "M14 34L34 14",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Ll = xn("minus", !1, function(e) {
  return J("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [J("path", {
    d: "M10.5 24L38.5 24",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), kl = xn("mouse", !0, function(e) {
  return J("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [J("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M24 16H12V32C12 38.6274 17.3726 44 24 44C30.6274 44 36 38.6274 36 32V16H24Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), J("path", {
    d: "M36 16C36 9.37258 30.6274 4 24 4V16H36Z",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), J("path", {
    d: "M24 4C17.3726 4 12 9.37258 12 16H24V4Z",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Tl = xn("radar", !1, function(e) {
  return J("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [J("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), J("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M24 34C29.5228 34 34 29.5228 34 24C34 18.4772 29.5228 14 24 14C18.4772 14 14 18.4772 14 24C14 29.5228 18.4772 34 24 34Z",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), J("path", {
    d: "M24 4V44",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), J("path", {
    d: "M4 24.0002L18 24.0086",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap
  }, null), J("path", {
    d: "M4 24.0083L44 24.0083",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), wa = Symbol(), yn = "el", Nl = "is-", et = (e, t, n, r, s) => {
  let a = `${e}-${t}`;
  return n && (a += `-${n}`), r && (a += `__${r}`), s && (a += `--${s}`), a;
}, Ca = Symbol("namespaceContextKey"), Il = (e) => {
  const t = e || (St() ? Ge(Ca, H(yn)) : H(yn));
  return F(() => C(t) || yn);
}, Tr = (e, t) => {
  const n = Il(t);
  return {
    namespace: n,
    b: (b = "") => et(n.value, e, b, "", ""),
    e: (b) => b ? et(n.value, e, "", b, "") : "",
    m: (b) => b ? et(n.value, e, "", "", b) : "",
    be: (b, N) => b && N ? et(n.value, e, b, N, "") : "",
    em: (b, N) => b && N ? et(n.value, e, "", b, N) : "",
    bm: (b, N) => b && N ? et(n.value, e, b, "", N) : "",
    bem: (b, N, f) => b && N && f ? et(n.value, e, b, N, f) : "",
    is: (b, ...N) => {
      const f = N.length >= 1 ? N[0] : !0;
      return b && f ? `${Nl}${b}` : "";
    },
    cssVar: (b) => {
      const N = {};
      for (const f in b)
        b[f] && (N[`--${n.value}-${f}`] = b[f]);
      return N;
    },
    cssVarName: (b) => `--${n.value}-${b}`,
    cssVarBlock: (b) => {
      const N = {};
      for (const f in b)
        b[f] && (N[`--${n.value}-${e}-${f}`] = b[f]);
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
const Ol = Object.prototype.hasOwnProperty, Ss = (e, t) => Ol.call(e, t), nn = (e) => typeof e == "function", it = (e) => typeof e == "string", Ea = (e) => e !== null && typeof e == "object";
var Pl = typeof global == "object" && global && global.Object === Object && global, Rl = typeof self == "object" && self && self.Object === Object && self, Nr = Pl || Rl || Function("return this")(), It = Nr.Symbol, Sa = Object.prototype, Al = Sa.hasOwnProperty, Ml = Sa.toString, Gt = It ? It.toStringTag : void 0;
function Dl(e) {
  var t = Al.call(e, Gt), n = e[Gt];
  try {
    e[Gt] = void 0;
    var r = !0;
  } catch {
  }
  var s = Ml.call(e);
  return r && (t ? e[Gt] = n : delete e[Gt]), s;
}
var xl = Object.prototype, Fl = xl.toString;
function $l(e) {
  return Fl.call(e);
}
var Wl = "[object Null]", Ul = "[object Undefined]", Ls = It ? It.toStringTag : void 0;
function La(e) {
  return e == null ? e === void 0 ? Ul : Wl : Ls && Ls in Object(e) ? Dl(e) : $l(e);
}
function zl(e) {
  return e != null && typeof e == "object";
}
var jl = "[object Symbol]";
function Ir(e) {
  return typeof e == "symbol" || zl(e) && La(e) == jl;
}
function Hl(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, s = Array(r); ++n < r; )
    s[n] = t(e[n], n, e);
  return s;
}
var Or = Array.isArray, ks = It ? It.prototype : void 0, Ts = ks ? ks.toString : void 0;
function ka(e) {
  if (typeof e == "string")
    return e;
  if (Or(e))
    return Hl(e, ka) + "";
  if (Ir(e))
    return Ts ? Ts.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function Ta(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var Bl = "[object AsyncFunction]", Vl = "[object Function]", Gl = "[object GeneratorFunction]", Kl = "[object Proxy]";
function Yl(e) {
  if (!Ta(e))
    return !1;
  var t = La(e);
  return t == Vl || t == Gl || t == Bl || t == Kl;
}
var tr = Nr["__core-js_shared__"], Ns = function() {
  var e = /[^.]+$/.exec(tr && tr.keys && tr.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function Xl(e) {
  return !!Ns && Ns in e;
}
var ql = Function.prototype, Jl = ql.toString;
function Zl(e) {
  if (e != null) {
    try {
      return Jl.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var Ql = /[\\^$.*+?()[\]{}|]/g, ec = /^\[object .+?Constructor\]$/, tc = Function.prototype, nc = Object.prototype, rc = tc.toString, sc = nc.hasOwnProperty, ac = RegExp(
  "^" + rc.call(sc).replace(Ql, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function oc(e) {
  if (!Ta(e) || Xl(e))
    return !1;
  var t = Yl(e) ? ac : ec;
  return t.test(Zl(e));
}
function ic(e, t) {
  return e?.[t];
}
function Na(e, t) {
  var n = ic(e, t);
  return oc(n) ? n : void 0;
}
function lc(e, t) {
  return e === t || e !== e && t !== t;
}
var cc = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, uc = /^\w*$/;
function dc(e, t) {
  if (Or(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || Ir(e) ? !0 : uc.test(e) || !cc.test(e) || t != null && e in Object(t);
}
var rn = Na(Object, "create");
function fc() {
  this.__data__ = rn ? rn(null) : {}, this.size = 0;
}
function pc(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var hc = "__lodash_hash_undefined__", mc = Object.prototype, gc = mc.hasOwnProperty;
function _c(e) {
  var t = this.__data__;
  if (rn) {
    var n = t[e];
    return n === hc ? void 0 : n;
  }
  return gc.call(t, e) ? t[e] : void 0;
}
var vc = Object.prototype, yc = vc.hasOwnProperty;
function bc(e) {
  var t = this.__data__;
  return rn ? t[e] !== void 0 : yc.call(t, e);
}
var wc = "__lodash_hash_undefined__";
function Cc(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = rn && t === void 0 ? wc : t, this;
}
function lt(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
lt.prototype.clear = fc;
lt.prototype.delete = pc;
lt.prototype.get = _c;
lt.prototype.has = bc;
lt.prototype.set = Cc;
function Ec() {
  this.__data__ = [], this.size = 0;
}
function Fn(e, t) {
  for (var n = e.length; n--; )
    if (lc(e[n][0], t))
      return n;
  return -1;
}
var Sc = Array.prototype, Lc = Sc.splice;
function kc(e) {
  var t = this.__data__, n = Fn(t, e);
  if (n < 0)
    return !1;
  var r = t.length - 1;
  return n == r ? t.pop() : Lc.call(t, n, 1), --this.size, !0;
}
function Tc(e) {
  var t = this.__data__, n = Fn(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function Nc(e) {
  return Fn(this.__data__, e) > -1;
}
function Ic(e, t) {
  var n = this.__data__, r = Fn(n, e);
  return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this;
}
function Rt(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
Rt.prototype.clear = Ec;
Rt.prototype.delete = kc;
Rt.prototype.get = Tc;
Rt.prototype.has = Nc;
Rt.prototype.set = Ic;
var Oc = Na(Nr, "Map");
function Pc() {
  this.size = 0, this.__data__ = {
    hash: new lt(),
    map: new (Oc || Rt)(),
    string: new lt()
  };
}
function Rc(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function $n(e, t) {
  var n = e.__data__;
  return Rc(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function Ac(e) {
  var t = $n(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function Mc(e) {
  return $n(this, e).get(e);
}
function Dc(e) {
  return $n(this, e).has(e);
}
function xc(e, t) {
  var n = $n(this, e), r = n.size;
  return n.set(e, t), this.size += n.size == r ? 0 : 1, this;
}
function dt(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
dt.prototype.clear = Pc;
dt.prototype.delete = Ac;
dt.prototype.get = Mc;
dt.prototype.has = Dc;
dt.prototype.set = xc;
var Fc = "Expected a function";
function Pr(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(Fc);
  var n = function() {
    var r = arguments, s = t ? t.apply(this, r) : r[0], a = n.cache;
    if (a.has(s))
      return a.get(s);
    var o = e.apply(this, r);
    return n.cache = a.set(s, o) || a, o;
  };
  return n.cache = new (Pr.Cache || dt)(), n;
}
Pr.Cache = dt;
var $c = 500;
function Wc(e) {
  var t = Pr(e, function(r) {
    return n.size === $c && n.clear(), r;
  }), n = t.cache;
  return t;
}
var Uc = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, zc = /\\(\\)?/g, jc = Wc(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(Uc, function(n, r, s, a) {
    t.push(s ? a.replace(zc, "$1") : r || n);
  }), t;
});
function Hc(e) {
  return e == null ? "" : ka(e);
}
function Bc(e, t) {
  return Or(e) ? e : dc(e, t) ? [e] : jc(Hc(e));
}
function Vc(e) {
  if (typeof e == "string" || Ir(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function Gc(e, t) {
  t = Bc(t, e);
  for (var n = 0, r = t.length; e != null && n < r; )
    e = e[Vc(t[n++])];
  return n && n == r ? e : void 0;
}
function Kc(e, t, n) {
  var r = e == null ? void 0 : Gc(e, t);
  return r === void 0 ? n : r;
}
function Yc(e) {
  for (var t = -1, n = e == null ? 0 : e.length, r = {}; ++t < n; ) {
    var s = e[t];
    r[s[0]] = s[1];
  }
  return r;
}
const Ia = (e) => e === void 0, Is = (e) => typeof e == "boolean", ct = (e) => typeof e == "number", mr = (e) => typeof Element > "u" ? !1 : e instanceof Element, Xc = (e) => it(e) ? !Number.isNaN(Number(e)) : !1;
var Os;
const ft = typeof window < "u", qc = (e) => typeof e == "string", Jc = () => {
};
ft && ((Os = window?.navigator) != null && Os.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function Rr(e) {
  return typeof e == "function" ? e() : C(e);
}
function Zc(e) {
  return e;
}
function Ar(e) {
  return go() ? (_o(e), !0) : !1;
}
function Qc(e, t = !0) {
  St() ? sn(e) : t ? e() : nt(e);
}
function Oa(e, t, n = {}) {
  const {
    immediate: r = !0
  } = n, s = H(!1);
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
    }, Rr(t));
  }
  return r && (s.value = !0, ft && u()), Ar(c), {
    isPending: mo(s),
    start: u,
    stop: c
  };
}
function Pa(e) {
  var t;
  const n = Rr(e);
  return (t = n?.$el) != null ? t : n;
}
const Ra = ft ? window : void 0;
function Aa(...e) {
  let t, n, r, s;
  if (qc(e[0]) || Array.isArray(e[0]) ? ([n, r, s] = e, t = Ra) : [t, n, r, s] = e, !t)
    return Jc;
  Array.isArray(n) || (n = [n]), Array.isArray(r) || (r = [r]);
  const a = [], o = () => {
    a.forEach((g) => g()), a.length = 0;
  }, c = (g, L, S, R) => (g.addEventListener(L, S, R), () => g.removeEventListener(L, S, R)), u = We(() => [Pa(t), Rr(s)], ([g, L]) => {
    o(), g && a.push(...n.flatMap((S) => r.map((R) => c(g, S, R, L))));
  }, { immediate: !0, flush: "post" }), h = () => {
    u(), o();
  };
  return Ar(h), h;
}
function eu(e, t = !1) {
  const n = H(), r = () => n.value = !!e();
  return r(), Qc(r, t), n;
}
const Ps = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Rs = "__vueuse_ssr_handlers__";
Ps[Rs] = Ps[Rs] || {};
var As = Object.getOwnPropertySymbols, tu = Object.prototype.hasOwnProperty, nu = Object.prototype.propertyIsEnumerable, ru = (e, t) => {
  var n = {};
  for (var r in e)
    tu.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && As)
    for (var r of As(e))
      t.indexOf(r) < 0 && nu.call(e, r) && (n[r] = e[r]);
  return n;
};
function su(e, t, n = {}) {
  const r = n, { window: s = Ra } = r, a = ru(r, ["window"]);
  let o;
  const c = eu(() => s && "ResizeObserver" in s), u = () => {
    o && (o.disconnect(), o = void 0);
  }, h = We(() => Pa(e), (L) => {
    u(), c.value && s && L && (o = new ResizeObserver(t), o.observe(L, a));
  }, { immediate: !0, flush: "post" }), g = () => {
    u(), h();
  };
  return Ar(g), {
    isSupported: c,
    stop: g
  };
}
var Ms;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(Ms || (Ms = {}));
var au = Object.defineProperty, Ds = Object.getOwnPropertySymbols, ou = Object.prototype.hasOwnProperty, iu = Object.prototype.propertyIsEnumerable, xs = (e, t, n) => t in e ? au(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, lu = (e, t) => {
  for (var n in t || (t = {}))
    ou.call(t, n) && xs(e, n, t[n]);
  if (Ds)
    for (var n of Ds(t))
      iu.call(t, n) && xs(e, n, t[n]);
  return e;
};
const cu = {
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
lu({
  linear: Zc
}, cu);
const Fs = {
  current: 0
}, $s = H(0), Ma = 2e3, Ws = Symbol("elZIndexContextKey"), Da = Symbol("zIndexContextKey"), uu = (e) => {
  const t = St() ? Ge(Ws, Fs) : Fs, n = e || (St() ? Ge(Da, void 0) : void 0), r = F(() => {
    const o = C(n);
    return ct(o) ? o : Ma;
  }), s = F(() => r.value + $s.value), a = () => (t.current++, $s.value = t.current, s.value);
  return !ft && Ge(Ws), {
    initialZIndex: r,
    currentZIndex: s,
    nextZIndex: a
  };
};
var du = {
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
const fu = (e) => (t, n) => pu(t, n, C(e)), pu = (e, t, n) => Kc(n, e, e).replace(/\{(\w+)\}/g, (r, s) => {
  var a;
  return `${(a = t?.[s]) != null ? a : `{${s}}`}`;
}), hu = (e) => {
  const t = F(() => C(e).name), n = vo(e) ? e : H(e);
  return {
    lang: t,
    locale: n,
    t: fu(e)
  };
}, xa = Symbol("localeContextKey"), mu = (e) => {
  const t = e || Ge(xa, H());
  return hu(F(() => t.value || du));
}, Fa = "__epPropKey", _e = (e) => e, gu = (e) => Ea(e) && !!e[Fa], $a = (e, t) => {
  if (!Ea(e) || gu(e))
    return e;
  const { values: n, required: r, default: s, type: a, validator: o } = e, u = {
    type: a,
    required: !!r,
    validator: n || o ? (h) => {
      let g = !1, L = [];
      if (n && (L = Array.from(n), Ss(e, "default") && L.push(s), g || (g = L.includes(h))), o && (g || (g = o(h))), !g && L.length > 0) {
        const S = [...new Set(L)].map((R) => JSON.stringify(R)).join(", ");
        yo(`Invalid prop: validation failed${t ? ` for prop "${t}"` : ""}. Expected one of [${S}], got value ${JSON.stringify(h)}.`);
      }
      return g;
    } : void 0,
    [Fa]: !0
  };
  return Ss(e, "default") && (u.default = s), u;
}, At = (e) => Yc(Object.entries(e).map(([t, n]) => [
  t,
  $a(n, t)
])), _u = ["", "default", "small", "large"], vu = $a({
  type: String,
  values: _u,
  required: !1
}), yu = Symbol("size"), bu = Symbol("emptyValuesContextKey"), wu = At({
  emptyValues: Array,
  valueOnClear: {
    type: [String, Number, Boolean, Function],
    default: void 0,
    validator: (e) => nn(e) ? !e() : !e
  }
}), Us = (e) => Object.keys(e), Nn = H();
function Wa(e, t = void 0) {
  return St() ? Ge(wa, Nn) : Nn;
}
function Ua(e, t) {
  const n = Wa(), r = Tr(e, F(() => {
    var c;
    return ((c = n.value) == null ? void 0 : c.namespace) || yn;
  })), s = mu(F(() => {
    var c;
    return (c = n.value) == null ? void 0 : c.locale;
  })), a = uu(F(() => {
    var c;
    return ((c = n.value) == null ? void 0 : c.zIndex) || Ma;
  })), o = F(() => {
    var c;
    return C(t) || ((c = n.value) == null ? void 0 : c.size) || "";
  });
  return za(F(() => C(n) || {})), {
    ns: r,
    locale: s,
    zIndex: a,
    size: o
  };
}
const za = (e, t, n = !1) => {
  var r;
  const s = !!St(), a = s ? Wa() : void 0, o = (r = void 0) != null ? r : s ? bo : void 0;
  if (!o)
    return;
  const c = F(() => {
    const u = C(e);
    return a?.value ? Cu(a.value, u) : u;
  });
  return o(wa, c), o(xa, F(() => c.value.locale)), o(Ca, F(() => c.value.namespace)), o(Da, F(() => c.value.zIndex)), o(yu, {
    size: F(() => c.value.size || "")
  }), o(bu, F(() => ({
    emptyValues: c.value.emptyValues,
    valueOnClear: c.value.valueOnClear
  }))), (n || !Nn.value) && (Nn.value = c.value), c;
}, Cu = (e, t) => {
  const n = [.../* @__PURE__ */ new Set([...Us(e), ...Us(t)])], r = {};
  for (const s of n)
    r[s] = t[s] !== void 0 ? t[s] : e[s];
  return r;
};
var Wn = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, s] of t)
    n[r] = s;
  return n;
};
function gr(e, t = "px") {
  if (!e)
    return "";
  if (ct(e) || Xc(e))
    return `${e}${t}`;
  if (it(e))
    return e;
}
const ja = (e, t) => (e.install = (n) => {
  for (const r of [e, ...Object.values({})])
    n.component(r.name, r);
}, e), Ha = (e, t) => (e.install = (n) => {
  e._context = n._context, n.config.globalProperties[t] = e;
}, e), Eu = At({
  size: {
    type: _e([Number, String])
  },
  color: {
    type: String
  }
}), Su = ue({
  name: "ElIcon",
  inheritAttrs: !1
}), Lu = /* @__PURE__ */ ue({
  ...Su,
  props: Eu,
  setup(e) {
    const t = e, n = Tr("icon"), r = F(() => {
      const { size: s, color: a } = t;
      return !s && !a ? {} : {
        fontSize: Ia(s) ? void 0 : gr(s),
        "--color": a
      };
    });
    return (s, a) => (j(), X("i", wo({
      class: C(n).b(),
      style: C(r)
    }, s.$attrs), [
      Lt(s.$slots, "default")
    ], 16));
  }
});
var ku = /* @__PURE__ */ Wn(Lu, [["__file", "icon.vue"]]);
const In = ja(ku);
/*! Element Plus Icons Vue v2.3.1 */
var Tu = /* @__PURE__ */ ue({
  name: "CircleCloseFilled",
  __name: "circle-close-filled",
  setup(e) {
    return (t, n) => (j(), X("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      k("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 393.664L407.936 353.6a38.4 38.4 0 1 0-54.336 54.336L457.664 512 353.6 616.064a38.4 38.4 0 1 0 54.336 54.336L512 566.336 616.064 670.4a38.4 38.4 0 1 0 54.336-54.336L566.336 512 670.4 407.936a38.4 38.4 0 1 0-54.336-54.336z"
      })
    ]));
  }
}), Nu = Tu, Iu = /* @__PURE__ */ ue({
  name: "Close",
  __name: "close",
  setup(e) {
    return (t, n) => (j(), X("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      k("path", {
        fill: "currentColor",
        d: "M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
      })
    ]));
  }
}), Ba = Iu, Ou = /* @__PURE__ */ ue({
  name: "InfoFilled",
  __name: "info-filled",
  setup(e) {
    return (t, n) => (j(), X("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      k("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896.064A448 448 0 0 1 512 64m67.2 275.072c33.28 0 60.288-23.104 60.288-57.344s-27.072-57.344-60.288-57.344c-33.28 0-60.16 23.104-60.16 57.344s26.88 57.344 60.16 57.344M590.912 699.2c0-6.848 2.368-24.64 1.024-34.752l-52.608 60.544c-10.88 11.456-24.512 19.392-30.912 17.28a12.992 12.992 0 0 1-8.256-14.72l87.68-276.992c7.168-35.136-12.544-67.2-54.336-71.296-44.096 0-108.992 44.736-148.48 101.504 0 6.784-1.28 23.68.064 33.792l52.544-60.608c10.88-11.328 23.552-19.328 29.952-17.152a12.8 12.8 0 0 1 7.808 16.128L388.48 728.576c-10.048 32.256 8.96 63.872 55.04 71.04 67.84 0 107.904-43.648 147.456-100.416z"
      })
    ]));
  }
}), Pu = Ou, Ru = /* @__PURE__ */ ue({
  name: "SuccessFilled",
  __name: "success-filled",
  setup(e) {
    return (t, n) => (j(), X("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      k("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336z"
      })
    ]));
  }
}), Au = Ru, Mu = /* @__PURE__ */ ue({
  name: "WarningFilled",
  __name: "warning-filled",
  setup(e) {
    return (t, n) => (j(), X("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      k("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 192a58.432 58.432 0 0 0-58.24 63.744l23.36 256.384a35.072 35.072 0 0 0 69.76 0l23.296-256.384A58.432 58.432 0 0 0 512 256m0 512a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4"
      })
    ]));
  }
}), Du = Mu;
const Va = _e([
  String,
  Object,
  Function
]), xu = {
  Close: Ba
}, Fu = {
  Close: Ba
}, On = {
  success: Au,
  warning: Du,
  error: Nu,
  info: Pu
}, $u = (e) => e, bn = {
  esc: "Escape",
  delete: "Delete",
  backspace: "Backspace"
}, Wu = At({
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
    type: _e([String, Object, Array])
  },
  offset: {
    type: _e(Array),
    default: [0, 0]
  },
  badgeClass: {
    type: String
  }
}), Uu = ue({
  name: "ElBadge"
}), zu = /* @__PURE__ */ ue({
  ...Uu,
  props: Wu,
  setup(e, { expose: t }) {
    const n = e, r = Tr("badge"), s = F(() => n.isDot ? "" : ct(n.value) && ct(n.max) ? n.max < n.value ? `${n.max}+` : `${n.value}` : `${n.value}`), a = F(() => {
      var o, c, u, h, g;
      return [
        {
          backgroundColor: n.color,
          marginRight: gr(-((c = (o = n.offset) == null ? void 0 : o[0]) != null ? c : 0)),
          marginTop: gr((h = (u = n.offset) == null ? void 0 : u[1]) != null ? h : 0)
        },
        (g = n.badgeStyle) != null ? g : {}
      ];
    });
    return t({
      content: s
    }), (o, c) => (j(), X("div", {
      class: le(C(r).b())
    }, [
      Lt(o.$slots, "default"),
      J(yr, {
        name: `${C(r).namespace.value}-zoom-in-center`,
        persisted: ""
      }, {
        default: st(() => [
          at(k("sup", {
            class: le([
              C(r).e("content"),
              C(r).em("content", o.type),
              C(r).is("fixed", !!o.$slots.default),
              C(r).is("dot", o.isDot),
              C(r).is("hide-zero", !o.showZero && n.value === 0),
              o.badgeClass
            ]),
            style: kt(C(a))
          }, [
            Lt(o.$slots, "content", { value: C(s) }, () => [
              Co(Q(C(s)), 1)
            ])
          ], 6), [
            [Cn, !o.hidden && (C(s) || o.isDot || o.$slots.content)]
          ])
        ]),
        _: 3
      }, 8, ["name"])
    ], 2));
  }
});
var ju = /* @__PURE__ */ Wn(zu, [["__file", "badge.vue"]]);
const Hu = ja(ju), Bu = At({
  a11y: {
    type: Boolean,
    default: !0
  },
  locale: {
    type: _e(Object)
  },
  size: vu,
  button: {
    type: _e(Object)
  },
  experimentalFeatures: {
    type: _e(Object)
  },
  keyboardNavigation: {
    type: Boolean,
    default: !0
  },
  message: {
    type: _e(Object)
  },
  zIndex: Number,
  namespace: {
    type: String,
    default: "el"
  },
  ...wu
}), Ee = {};
ue({
  name: "ElConfigProvider",
  props: Bu,
  setup(e, { slots: t }) {
    We(() => e.message, (r) => {
      Object.assign(Ee, r ?? {});
    }, { immediate: !0, deep: !0 });
    const n = za(e);
    return () => Lt(t, "default", { config: n?.value });
  }
});
const Ga = ["success", "info", "warning", "error"], pe = $u({
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
}), Vu = At({
  customClass: {
    type: String,
    default: pe.customClass
  },
  center: {
    type: Boolean,
    default: pe.center
  },
  dangerouslyUseHTMLString: {
    type: Boolean,
    default: pe.dangerouslyUseHTMLString
  },
  duration: {
    type: Number,
    default: pe.duration
  },
  icon: {
    type: Va,
    default: pe.icon
  },
  id: {
    type: String,
    default: pe.id
  },
  message: {
    type: _e([
      String,
      Object,
      Function
    ]),
    default: pe.message
  },
  onClose: {
    type: _e(Function),
    default: pe.onClose
  },
  showClose: {
    type: Boolean,
    default: pe.showClose
  },
  type: {
    type: String,
    values: Ga,
    default: pe.type
  },
  plain: {
    type: Boolean,
    default: pe.plain
  },
  offset: {
    type: Number,
    default: pe.offset
  },
  zIndex: {
    type: Number,
    default: pe.zIndex
  },
  grouping: {
    type: Boolean,
    default: pe.grouping
  },
  repeatNum: {
    type: Number,
    default: pe.repeatNum
  }
}), Gu = {
  destroy: () => !0
}, Le = Eo([]), Ku = (e) => {
  const t = Le.findIndex((s) => s.id === e), n = Le[t];
  let r;
  return t > 0 && (r = Le[t - 1]), { current: n, prev: r };
}, Yu = (e) => {
  const { prev: t } = Ku(e);
  return t ? t.vm.exposed.bottom.value : 0;
}, Xu = (e, t) => Le.findIndex((r) => r.id === e) > 0 ? 16 : t, qu = ue({
  name: "ElMessage"
}), Ju = /* @__PURE__ */ ue({
  ...qu,
  props: Vu,
  emits: Gu,
  setup(e, { expose: t }) {
    const n = e, { Close: r } = Fu, { ns: s, zIndex: a } = Ua("message"), { currentZIndex: o, nextZIndex: c } = a, u = H(), h = H(!1), g = H(0);
    let L;
    const S = F(() => n.type ? n.type === "error" ? "danger" : n.type : "info"), R = F(() => {
      const y = n.type;
      return { [s.bm("icon", y)]: y && On[y] };
    }), D = F(() => n.icon || On[n.type] || ""), b = F(() => Yu(n.id)), N = F(() => Xu(n.id, n.offset) + b.value), f = F(() => g.value + N.value), E = F(() => ({
      top: `${N.value}px`,
      zIndex: o.value
    }));
    function v() {
      n.duration !== 0 && ({ stop: L } = Oa(() => {
        O();
      }, n.duration));
    }
    function _() {
      L?.();
    }
    function O() {
      h.value = !1;
    }
    function P({ code: y }) {
      y === bn.esc && O();
    }
    return sn(() => {
      v(), c(), h.value = !0;
    }), We(() => n.repeatNum, () => {
      _(), v();
    }), Aa(document, "keydown", P), su(u, () => {
      g.value = u.value.getBoundingClientRect().height;
    }), t({
      visible: h,
      bottom: f,
      close: O
    }), (y, x) => (j(), xe(yr, {
      name: C(s).b("fade"),
      onBeforeLeave: y.onClose,
      onAfterLeave: (W) => y.$emit("destroy"),
      persisted: ""
    }, {
      default: st(() => [
        at(k("div", {
          id: y.id,
          ref_key: "messageRef",
          ref: u,
          class: le([
            C(s).b(),
            { [C(s).m(y.type)]: y.type },
            C(s).is("center", y.center),
            C(s).is("closable", y.showClose),
            C(s).is("plain", y.plain),
            y.customClass
          ]),
          style: kt(C(E)),
          role: "alert",
          onMouseenter: _,
          onMouseleave: v
        }, [
          y.repeatNum > 1 ? (j(), xe(C(Hu), {
            key: 0,
            value: y.repeatNum,
            type: C(S),
            class: le(C(s).e("badge"))
          }, null, 8, ["value", "type", "class"])) : Re("v-if", !0),
          C(D) ? (j(), xe(C(In), {
            key: 1,
            class: le([C(s).e("icon"), C(R)])
          }, {
            default: st(() => [
              (j(), xe(Gs(C(D))))
            ]),
            _: 1
          }, 8, ["class"])) : Re("v-if", !0),
          Lt(y.$slots, "default", {}, () => [
            y.dangerouslyUseHTMLString ? (j(), X(Oe, { key: 1 }, [
              Re(" Caution here, message could've been compromised, never use user's input as message "),
              k("p", {
                class: le(C(s).e("content")),
                innerHTML: y.message
              }, null, 10, ["innerHTML"])
            ], 2112)) : (j(), X("p", {
              key: 0,
              class: le(C(s).e("content"))
            }, Q(y.message), 3))
          ]),
          y.showClose ? (j(), xe(C(In), {
            key: 2,
            class: le(C(s).e("closeBtn")),
            onClick: qt(O, ["stop"])
          }, {
            default: st(() => [
              J(C(r))
            ]),
            _: 1
          }, 8, ["class", "onClick"])) : Re("v-if", !0)
        ], 46, ["id"]), [
          [Cn, h.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave", "onAfterLeave"]));
  }
});
var Zu = /* @__PURE__ */ Wn(Ju, [["__file", "message.vue"]]);
let Qu = 1;
const Ka = (e) => {
  const t = !e || it(e) || Zt(e) || nn(e) ? { message: e } : e, n = {
    ...pe,
    ...t
  };
  if (!n.appendTo)
    n.appendTo = document.body;
  else if (it(n.appendTo)) {
    let r = document.querySelector(n.appendTo);
    mr(r) || (r = document.body), n.appendTo = r;
  }
  return Is(Ee.grouping) && !n.grouping && (n.grouping = Ee.grouping), ct(Ee.duration) && n.duration === 3e3 && (n.duration = Ee.duration), ct(Ee.offset) && n.offset === 16 && (n.offset = Ee.offset), Is(Ee.showClose) && !n.showClose && (n.showClose = Ee.showClose), n;
}, ed = (e) => {
  const t = Le.indexOf(e);
  if (t === -1)
    return;
  Le.splice(t, 1);
  const { handler: n } = e;
  n.close();
}, td = ({ appendTo: e, ...t }, n) => {
  const r = `message_${Qu++}`, s = t.onClose, a = document.createElement("div"), o = {
    ...t,
    id: r,
    onClose: () => {
      s?.(), ed(g);
    },
    onDestroy: () => {
      En(null, a);
    }
  }, c = J(Zu, o, nn(o.message) || Zt(o.message) ? {
    default: nn(o.message) ? o.message : () => o.message
  } : null);
  c.appContext = n || Ot._context, En(c, a), e.appendChild(a.firstElementChild);
  const u = c.component, g = {
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
  return g;
}, Ot = (e = {}, t) => {
  if (!ft)
    return { close: () => {
    } };
  const n = Ka(e);
  if (n.grouping && Le.length) {
    const s = Le.find(({ vnode: a }) => {
      var o;
      return ((o = a.props) == null ? void 0 : o.message) === n.message;
    });
    if (s)
      return s.props.repeatNum += 1, s.props.type = n.type, s.handler;
  }
  if (ct(Ee.max) && Le.length >= Ee.max)
    return { close: () => {
    } };
  const r = td(n, t);
  return Le.push(r), r.handler;
};
Ga.forEach((e) => {
  Ot[e] = (t = {}, n) => {
    const r = Ka(t);
    return Ot({ ...r, type: e }, n);
  };
});
function nd(e) {
  for (const t of Le)
    (!e || e === t.props.type) && t.handler.close();
}
Ot.closeAll = nd;
Ot._context = null;
const rd = Ha(Ot, "$message"), Ya = [
  "success",
  "info",
  "warning",
  "error"
], sd = At({
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
    type: Va
  },
  id: {
    type: String,
    default: ""
  },
  message: {
    type: _e([
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
    type: _e(Function),
    default: () => {
    }
  },
  onClose: {
    type: _e(Function),
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
    values: [...Ya, ""],
    default: ""
  },
  zIndex: Number
}), ad = {
  destroy: () => !0
}, od = ue({
  name: "ElNotification"
}), id = /* @__PURE__ */ ue({
  ...od,
  props: sd,
  emits: ad,
  setup(e, { expose: t }) {
    const n = e, { ns: r, zIndex: s } = Ua("notification"), { nextZIndex: a, currentZIndex: o } = s, { Close: c } = xu, u = H(!1);
    let h;
    const g = F(() => {
      const v = n.type;
      return v && On[n.type] ? r.m(v) : "";
    }), L = F(() => n.type && On[n.type] || n.icon), S = F(() => n.position.endsWith("right") ? "right" : "left"), R = F(() => n.position.startsWith("top") ? "top" : "bottom"), D = F(() => {
      var v;
      return {
        [R.value]: `${n.offset}px`,
        zIndex: (v = n.zIndex) != null ? v : o.value
      };
    });
    function b() {
      n.duration > 0 && ({ stop: h } = Oa(() => {
        u.value && f();
      }, n.duration));
    }
    function N() {
      h?.();
    }
    function f() {
      u.value = !1;
    }
    function E({ code: v }) {
      v === bn.delete || v === bn.backspace ? N() : v === bn.esc ? u.value && f() : b();
    }
    return sn(() => {
      b(), a(), u.value = !0;
    }), Aa(document, "keydown", E), t({
      visible: u,
      close: f
    }), (v, _) => (j(), xe(yr, {
      name: C(r).b("fade"),
      onBeforeLeave: v.onClose,
      onAfterLeave: (O) => v.$emit("destroy"),
      persisted: ""
    }, {
      default: st(() => [
        at(k("div", {
          id: v.id,
          class: le([C(r).b(), v.customClass, C(S)]),
          style: kt(C(D)),
          role: "alert",
          onMouseenter: N,
          onMouseleave: b,
          onClick: v.onClick
        }, [
          C(L) ? (j(), xe(C(In), {
            key: 0,
            class: le([C(r).e("icon"), C(g)])
          }, {
            default: st(() => [
              (j(), xe(Gs(C(L))))
            ]),
            _: 1
          }, 8, ["class"])) : Re("v-if", !0),
          k("div", {
            class: le(C(r).e("group"))
          }, [
            k("h2", {
              class: le(C(r).e("title")),
              textContent: Q(v.title)
            }, null, 10, ["textContent"]),
            at(k("div", {
              class: le(C(r).e("content")),
              style: kt(v.title ? void 0 : { margin: 0 })
            }, [
              Lt(v.$slots, "default", {}, () => [
                v.dangerouslyUseHTMLString ? (j(), X(Oe, { key: 1 }, [
                  Re(" Caution here, message could've been compromised, never use user's input as message "),
                  k("p", { innerHTML: v.message }, null, 8, ["innerHTML"])
                ], 2112)) : (j(), X("p", { key: 0 }, Q(v.message), 1))
              ])
            ], 6), [
              [Cn, v.message]
            ]),
            v.showClose ? (j(), xe(C(In), {
              key: 0,
              class: le(C(r).e("closeBtn")),
              onClick: qt(f, ["stop"])
            }, {
              default: st(() => [
                J(C(c))
              ]),
              _: 1
            }, 8, ["class", "onClick"])) : Re("v-if", !0)
          ], 2)
        ], 46, ["id", "onClick"]), [
          [Cn, u.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave", "onAfterLeave"]));
  }
});
var ld = /* @__PURE__ */ Wn(id, [["__file", "notification.vue"]]);
const Pn = {
  "top-left": [],
  "top-right": [],
  "bottom-left": [],
  "bottom-right": []
}, _r = 16;
let cd = 1;
const Pt = function(e = {}, t) {
  if (!ft)
    return { close: () => {
    } };
  (it(e) || Zt(e)) && (e = { message: e });
  const n = e.position || "top-right";
  let r = e.offset || 0;
  Pn[n].forEach(({ vm: g }) => {
    var L;
    r += (((L = g.el) == null ? void 0 : L.offsetHeight) || 0) + _r;
  }), r += _r;
  const s = `notification_${cd++}`, a = e.onClose, o = {
    ...e,
    offset: r,
    id: s,
    onClose: () => {
      ud(s, n, a);
    }
  };
  let c = document.body;
  mr(e.appendTo) ? c = e.appendTo : it(e.appendTo) && (c = document.querySelector(e.appendTo)), mr(c) || (c = document.body);
  const u = document.createElement("div"), h = J(ld, o, nn(o.message) ? o.message : Zt(o.message) ? () => o.message : null);
  return h.appContext = Ia(t) ? Pt._context : t, h.props.onDestroy = () => {
    En(null, u);
  }, En(h, u), Pn[n].push({ vm: h }), c.appendChild(u.firstElementChild), {
    close: () => {
      h.component.exposed.visible.value = !1;
    }
  };
};
Ya.forEach((e) => {
  Pt[e] = (t = {}, n) => ((it(t) || Zt(t)) && (t = {
    message: t
  }), Pt({ ...t, type: e }, n));
});
function ud(e, t, n) {
  const r = Pn[t], s = r.findIndex(({ vm: h }) => {
    var g;
    return ((g = h.component) == null ? void 0 : g.props.id) === e;
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
      const { el: g, component: L } = r[h].vm, S = Number.parseInt(g.style[c], 10) - o - _r;
      L.props.offset = S;
    }
}
function dd() {
  for (const e of Object.values(Pn))
    e.forEach(({ vm: t }) => {
      t.component.exposed.visible.value = !1;
    });
}
Pt.closeAll = dd;
Pt._context = null;
const fd = Ha(Pt, "$notify"), nr = {
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
    r === "center" ? rd({
      message: t,
      type: n,
      duration: s,
      showClose: a,
      grouping: !0,
      customClass: `app-toast app-toast--${n}`
    }) : fd({
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
}, pd = "snippets-code:developer-mode", Xa = "snippets-code:frontend-diagnostics", hd = 240, Kt = "[REDACTED]", wn = (e) => e.replace(
  /("(?:[^"]*(?:token|password|secret|authorization)[^"]*)"\s*:\s*)("(?:\\.|[^"])*"|[^,\r\n}\]]+)/gi,
  `$1"${Kt}"`
).replace(/\bBearer\s+[A-Za-z0-9._~+/=-]+/gi, `Bearer ${Kt}`).replace(
  /\b(?:gh[pousr]_[A-Za-z0-9_]{12,}|github_pat_[A-Za-z0-9_]{12,})\b/g,
  Kt
).replace(/(https?:\/\/)[^/\s@]+@/gi, `$1${Kt}@`).replace(
  /([?&][^=&\s]*(?:token|password|secret|authorization)[^=&\s]*=)[^&\s]+/gi,
  `$1${Kt}`
), qa = (e) => {
  if (e === void 0) return;
  if (typeof e == "string") return wn(e);
  const t = /* @__PURE__ */ new WeakSet();
  try {
    return wn(
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
    return wn(String(e));
  }
}, md = () => {
  try {
    return globalThis.__TAURI_INTERNALS__?.metadata?.currentWindow?.label ?? "webview";
  } catch {
    return "webview";
  }
}, gd = () => {
  if (typeof localStorage > "u") return [];
  try {
    const e = JSON.parse(localStorage.getItem(Xa) || "[]");
    return Array.isArray(e) ? e : [];
  } catch {
    return [];
  }
}, Mr = () => {
  if (typeof localStorage > "u") return !1;
  try {
    return localStorage.getItem(pd) === "true";
  } catch {
    return !1;
  }
}, _d = (e, t, n) => {
  if (!Mr() || typeof localStorage > "u") return;
  const r = gd();
  r.push({
    timestamp: (/* @__PURE__ */ new Date()).toISOString(),
    level: e,
    windowLabel: md(),
    message: wn(t),
    data: qa(n)
  });
  try {
    localStorage.setItem(
      Xa,
      JSON.stringify(r.slice(-hd))
    );
  } catch {
  }
}, vd = () => Mr(), yd = (e) => e === "error" || Mr(), pn = (e, t, n) => {
  _d(e, t, n), yd(e) && I("frontend_log", {
    level: e,
    message: t,
    data: n === void 0 ? null : qa(n)
  }).catch(() => {
  });
}, Yt = {
  info: (e, t, ...n) => {
    pn("info", e, t);
  },
  error: (e, t) => {
    pn("error", e, t);
  },
  warn: (e, t) => {
    pn("warn", e, t);
  },
  debug: (e, t) => {
    vd() && pn("debug", e, t);
  }
}, bd = "[screen-recorder]", ve = async (e, t) => {
  const n = performance.now();
  try {
    return await I(e, t);
  } catch (r) {
    throw console.error(`${bd} invoke:error ${e}`, {
      elapsedMs: Math.round(performance.now() - n),
      error: r
    }), r;
  }
}, wd = () => ve("screen_recorder_get_ffmpeg_status"), tt = (e) => ve("screen_recorder_set_capture_excluded", { excluded: e }), hn = (e) => ve("screen_recorder_set_passthrough_region", { region: e }), mn = (e) => ve("screen_recorder_set_overlay_window_region", { region: e }), Cd = () => ve("screen_recorder_pick_target_window"), Ed = () => ve("screen_recorder_close_window"), Sd = (e, t) => ve("screen_recorder_start_recording", {
  region: e,
  fps: t.fps,
  quality: t.quality,
  audio: t.audio && t.format === "mp4",
  showCursor: t.showCursor
}), Ld = () => ve("screen_recorder_pause_recording"), kd = (e, t) => ve("screen_recorder_resume_recording", {
  region: e,
  fps: t.fps,
  quality: t.quality,
  audio: t.audio && t.format === "mp4",
  showCursor: t.showCursor
}), Td = () => ve("screen_recorder_stop_recording"), Nd = () => ve("screen_recorder_cancel_recording"), Id = () => ve("screen_recorder_cancel_export"), Od = (e, t) => ve("screen_recorder_export_recording", {
  format: e.format,
  fps: e.fps,
  quality: e.quality,
  savePath: e.savePath,
  durationMs: t
}), zs = () => ({
  format: "mp4",
  fps: 30,
  quality: "standard",
  savePath: "",
  audio: !0,
  showCursor: !0
});
function Pd() {
  const e = H("selecting"), t = H(zs()), n = H(null), r = H(null), s = H(""), a = H(null), o = H(0), c = H(0), u = H(null), h = () => {
    c.value = e.value === "recording" && a.value !== null ? o.value + Date.now() - a.value : o.value;
  }, g = () => {
    u.value !== null && (window.clearInterval(u.value), u.value = null);
  }, L = () => {
    g(), h(), u.value = window.setInterval(() => {
      h();
    }, 250);
  }, S = async () => (n.value = await wd(), n.value), R = async (O) => {
    s.value = "", r.value = null;
    const P = n.value ?? await S();
    if (!P.available)
      throw new Error(P.message || "FFmpeg unavailable");
    await Sd(O, t.value), e.value = "recording", o.value = 0, c.value = 0, a.value = Date.now(), L();
  }, D = async () => {
    e.value === "recording" && (h(), o.value = c.value, a.value = null, g(), await Ld(), e.value = "paused");
  }, b = async (O) => {
    e.value === "paused" && (await kd(O, t.value), e.value = "recording", a.value = Date.now(), L());
  }, N = async () => {
    e.value !== "recording" && e.value !== "paused" || (h(), o.value = c.value, a.value = null, g(), await Td(), e.value = "exporting");
  }, f = async () => {
    e.value = "exporting";
    try {
      return r.value = await Od(
        t.value,
        Math.round(c.value)
      ), e.value = "completed", r.value;
    } catch (O) {
      throw e.value = "ready", r.value = null, O;
    }
  }, E = async () => {
    await Id(), e.value = "ready", r.value = null;
  }, v = async () => {
    g(), await Nd(), e.value = "selecting", a.value = null, o.value = 0, c.value = 0, r.value = null;
  }, _ = () => {
    e.value = "selecting", a.value = null, o.value = 0, c.value = 0, r.value = null, s.value = "", t.value = zs();
  };
  return vr(() => {
    g();
  }), {
    status: e,
    settings: t,
    ffmpegStatus: n,
    result: r,
    errorMessage: s,
    elapsedMs: c,
    refreshFfmpegStatus: S,
    begin: R,
    pause: D,
    resume: b,
    stop: N,
    exportFile: f,
    cancelExport: E,
    cancel: v,
    reset: _
  };
}
const Rd = { class: "screen-recorder" }, Ad = ["onMousedown"], Md = { class: "window-title" }, Dd = { class: "capture-viewport" }, xd = { class: "capture-frame" }, Fd = {
  key: 0,
  class: "time"
}, $d = {
  key: 1,
  class: "save-status"
}, Wd = {
  key: 2,
  class: "save-status"
}, Ud = {
  key: 3,
  class: "save-status"
}, zd = ["title"], jd = { class: "button-label" }, Hd = ["title"], Bd = { class: "button-label" }, Vd = ["disabled", "title"], Gd = { class: "record-label" }, Kd = { class: "control-group control-group--tools" }, Yd = { class: "tool-pill" }, Xd = ["title", "aria-pressed", "disabled"], qd = ["title", "aria-label", "aria-pressed", "disabled"], Jd = { class: "select-field" }, Zd = ["disabled"], Qd = ["disabled"], ef = ["disabled"], tf = { value: "high" }, nf = { value: "standard" }, rf = { value: "small" }, sf = { class: "dimension-group optional-size" }, af = { class: "dimension" }, of = ["value"], lf = { class: "dimension" }, cf = ["value"], uf = { class: "control-group control-group--actions" }, df = { class: "time" }, ff = ["title"], pf = { class: "button-label" }, hf = ["title"], mf = { class: "button-label" }, gf = ["title"], _f = { class: "export-progress__meta" }, vf = { class: "export-progress__track" }, yf = ["title"], bf = ["disabled", "title"], wf = { class: "record-label" }, Cf = {
  key: 0,
  class: "warning"
}, Be = "[screen-recorder]", Ve = 80, rr = 400, Xt = 240, sr = 260, js = 140, Ef = 3, Hs = 2, Bs = 0, Sf = 15, Lf = 10, kf = 2, Tf = /* @__PURE__ */ ue({
  __name: "index",
  setup(e) {
    const t = {
      start: "R",
      pause: "P",
      stop: "S"
    }, { t: n } = Dn(), r = ya(), s = H(null), a = H(null), o = H(null), c = H(null), u = H({ width: 0, height: 0 }), h = H(!1), g = H(!1), L = H(!1), S = H(0), R = H(!1), D = H(null);
    let b = null, N = null, f = null, E = null, v = null, _ = null, O = null, P = null;
    const y = [
      { className: "n", direction: "North" },
      { className: "ne", direction: "NorthEast" },
      { className: "e", direction: "East" },
      { className: "se", direction: "SouthEast" },
      { className: "s", direction: "South" },
      { className: "sw", direction: "SouthWest" },
      { className: "w", direction: "West" },
      { className: "nw", direction: "NorthWest" }
    ], {
      status: x,
      settings: W,
      ffmpegStatus: ne,
      result: Z,
      elapsedMs: re,
      refreshFfmpegStatus: Mt,
      begin: Dt,
      pause: xt,
      resume: Ft,
      stop: $t,
      exportFile: Wt,
      cancelExport: ye,
      cancel: pt,
      reset: ht
    } = Pd(), mt = H(!1), me = F(
      () => x.value === "recording" || x.value === "paused" || x.value === "exporting"
    ), Me = F(
      () => W.value.audio && W.value.format === "mp4"
    ), Xe = F(
      () => Me.value && x.value === "recording"
    ), Ut = F(() => {
      const d = Xe.value && !R.value ? S.value : 0, p = ($, U) => Math.max(0.18, Math.min(1, $ + d * U)).toFixed(3);
      return {
        "--bar-1": p(0.28, 0.64),
        "--bar-2": p(0.42, 0.78),
        "--bar-3": p(0.34, 0.94),
        "--bar-4": p(0.22, 0.72)
      };
    }), zt = F(() => {
      if (W.value.format === "gif")
        return "GIF 不支持音频";
      if (R.value && W.value.audio)
        return "音频已开启；实时音量动画不可用不影响导出系统声音";
      if (Z.value?.audioDevice)
        return `已录制音频：${Z.value.audioDevice}`;
      if (Z.value && !Z.value.hasAudio)
        return "未检测到可用音频设备，导出视频无声音";
      if (ne.value?.available && !ne.value.systemAudioAvailable) {
        const d = ne.value.audioDevices?.join("、") || "无";
        return W.value.audio ? `未发现系统声音/立体声混音设备；不会自动录制麦克风。当前可用音频设备：${d}` : "录制音频已关闭";
      }
      return W.value.audio ? "录制音频已开启。系统声音将通过 WASAPI Loopback 捕获" : "录制音频已关闭";
    }), gt = F(
      () => W.value.showCursor ? String(n("screenRecorder.showCursorOn")) : String(n("screenRecorder.showCursorOff"))
    ), _t = F(
      () => `${n("screenRecorder.start")} (${t.start})`
    ), qe = F(
      () => `${n("screenRecorder.pause")} (${t.pause})`
    ), vt = F(
      () => `${n("screenRecorder.resume")} (${t.pause})`
    ), yt = F(
      () => `${n("screenRecorder.stop")} (${t.stop})`
    ), ze = F(
      () => g.value && L.value
    ), ke = F(() => {
      const d = D.value?.progress ?? 0.03;
      return Math.max(1, Math.min(100, Math.round(d * 100)));
    }), Te = F(() => {
      const d = D.value;
      return d ? d.totalFrames && d.stage === "frames" ? `${d.message}` : d.message || "正在导出..." : "正在导出...";
    }), Je = F(() => {
      const d = D.value;
      return d?.totalFrames ? `${Te.value} (${d.currentFrame}/${d.totalFrames})` : Te.value;
    }), bt = F(() => {
      const d = Math.floor(re.value / 1e3), p = Math.floor(d / 60).toString().padStart(2, "0"), $ = (d % 60).toString().padStart(2, "0");
      return `${p}:${$}`;
    }), i = (d) => d instanceof Error ? d.message : String(d), l = async (d) => {
      try {
        await d();
      } catch (p) {
        console.error(`${Be} action failed`, p), Yt.error(`${Be} action failed`, p), mt.value || nr.msg(i(p), "error");
      }
    }, w = (d) => Math.max(2, Math.floor(Math.round(d) / 2) * 2), A = (d) => Math.max(1, Math.round(d)), B = (d, p) => Math.abs(d - p) <= kf, z = (d, p) => d === p ? !0 : !d || !p ? !1 : B(d.x, p.x) && B(d.y, p.y) && B(d.width, p.width) && B(d.height, p.height), m = async (d) => {
      z(P, d) || (P = d ? { ...d } : null, await hn(d).catch(() => {
      }));
    }, T = async () => {
      const d = s.value;
      if (!d)
        throw new Error("录制视口尚未准备好");
      const p = d.getBoundingClientRect(), $ = await r.scaleFactor(), U = await r.innerPosition(), se = A(p.width * $), de = A(p.height * $);
      if (se < Ve || de < Ve)
        throw new Error("录制区域太小，请放大录制窗口");
      return {
        x: p.left,
        y: p.top,
        width: se / $,
        height: de / $,
        screenX: Math.round(U.x + p.left * $),
        screenY: Math.round(U.y + p.top * $),
        physicalWidth: se,
        physicalHeight: de,
        scale: $
      };
    }, K = async () => {
      const d = await T(), p = w(d.physicalWidth), $ = w(d.physicalHeight);
      return {
        ...d,
        width: p / d.scale,
        height: $ / d.scale,
        physicalWidth: p,
        physicalHeight: $
      };
    }, ee = async () => {
      try {
        const d = await T();
        if ((!B(
          u.value.width,
          d.physicalWidth
        ) || !B(
          u.value.height,
          d.physicalHeight
        )) && (u.value = {
          width: d.physicalWidth,
          height: d.physicalHeight
        }), g.value) {
          const p = a.value?.getBoundingClientRect().height ?? 0, $ = c.value?.getBoundingClientRect().height ?? 0, U = o.value?.getBoundingClientRect().height ?? 0, se = p + $;
          await m({
            x: Math.round(d.x * d.scale),
            y: Math.round((d.y + se) * d.scale),
            width: d.physicalWidth,
            height: Math.max(
              1,
              d.physicalHeight - Math.round((se + U) * d.scale)
            )
          });
          return;
        }
        await m({
          x: Math.round(d.x * d.scale),
          y: Math.round(d.y * d.scale),
          width: d.physicalWidth,
          height: d.physicalHeight
        });
      } catch {
        (u.value.width !== 0 || u.value.height !== 0) && (u.value = { width: 0, height: 0 }), await m(null);
      }
    }, ie = async () => _ || (_ = ee().finally(() => {
      if (_ = null, O) {
        const d = O;
        O = null, m(d);
      }
    }), _), wt = () => {
      v === null && (v = requestAnimationFrame(() => {
        v = null, ie();
      }));
    }, we = () => {
      h.value || wt();
    }, an = () => {
      O = null, P = null;
    }, jt = async () => {
      an(), await hn(null).catch(() => {
      }), await mn(null).catch(() => {
      });
    }, Dr = () => {
      h.value = !1, g.value = !1, L.value = !1;
    }, xr = () => {
      window.setTimeout(() => {
        ie();
      }, 120);
    }, Ht = () => new Promise((d) => {
      requestAnimationFrame(() => requestAnimationFrame(() => d()));
    }), Ja = async () => {
      document.documentElement.classList.add("screen-recorder-repaint"), await Ht(), document.documentElement.classList.remove("screen-recorder-repaint"), await Ht();
    }, Za = async () => {
      await r.setIgnoreCursorEvents(!0).catch(() => {
      }), await Ht(), await r.setIgnoreCursorEvents(!1).catch(() => {
      }), await ie();
    }, Fr = async () => {
      const [d, p] = await Promise.all([
        r.outerPosition(),
        r.outerSize()
      ]);
      return {
        x: d.x,
        y: d.y,
        width: p.width,
        height: p.height
      };
    }, Un = async () => {
      if (!g.value) {
        await mn(null).catch(() => {
        });
        return;
      }
      const d = await Fr(), p = await r.scaleFactor(), $ = a.value?.getBoundingClientRect().height ?? 0, U = c.value?.getBoundingClientRect().height ?? 0, se = o.value?.getBoundingClientRect().height ?? 0;
      await mn({
        width: d.width,
        height: d.height,
        topHeight: Math.round(($ + U) * p),
        bottomHeight: Math.round(se * p)
      }).catch(() => {
      });
    }, $r = (d, p) => {
      const $ = Math.min(d.width, p.width), U = Math.min(d.height, p.height), se = p.x + p.width - $, de = p.y + p.height - U;
      return {
        x: Math.min(Math.max(d.x, p.x), se),
        y: Math.min(Math.max(d.y, p.y), de),
        width: $,
        height: U
      };
    }, Qa = (d, p, $) => {
      if (!p) return !1;
      const U = Math.max(8, Math.round(8 * $)), se = p.x + p.width, de = p.y + p.height, je = d.screenX + d.physicalWidth, Ze = d.screenY + d.physicalHeight;
      return d.screenX <= p.x + U && d.screenY <= p.y + U && je >= se - U && Ze >= de - U;
    }, eo = (d, p, $) => {
      if (!p) return !1;
      const U = Math.max(8, Math.round(8 * $));
      return d.screenX <= p.x + U || d.screenY <= p.y + U || d.screenX + d.physicalWidth >= p.x + p.width - U || d.screenY + d.physicalHeight >= p.y + p.height - U;
    }, to = (d, p, $) => {
      if (!p) return !1;
      const U = Math.max(8, Math.round(8 * $));
      return d.screenY + d.physicalHeight >= p.y + p.height - U;
    }, no = (d, p, $) => {
      if (!$) return d;
      const U = Math.round(Sf * p), se = Math.round(Lf * p);
      return {
        ...d,
        physicalWidth: Math.max(Ve, d.physicalWidth - U),
        physicalHeight: Math.max(
          Ve,
          d.physicalHeight - se
        )
      };
    }, Wr = async (d) => {
      await r.setSize(
        new ot(Math.round(d.width), Math.round(d.height))
      ), await r.setPosition(
        new Pe(Math.round(d.x), Math.round(d.y))
      ), await Ht();
    }, Ur = async () => {
      const [d, p] = await Promise.all([
        T(),
        Fr()
      ]);
      return { actualRegion: d, currentFrame: p };
    }, ro = async (d, p, $) => {
      const { actualRegion: U, currentFrame: se } = await Ur(), de = U.screenX - se.x, je = U.screenY - se.y, Ze = Math.max(
        0,
        se.width - U.physicalWidth
      ), Ce = Math.max(
        0,
        se.height - U.physicalHeight
      );
      return {
        x: d.screenX - de,
        y: d.screenY - je,
        width: Math.max(p, d.physicalWidth + Ze),
        height: Math.max($, d.physicalHeight + Ce)
      };
    }, zr = async () => {
      f?.(), f = null, S.value = 0;
    }, on = async () => {
      if (!(!Me.value || f))
        try {
          f = await kn(
            "screen_recorder_audio_level",
            (d) => {
              if (!Xe.value) {
                S.value = 0;
                return;
              }
              const p = Math.max(
                0,
                Math.min(1, Number(d.payload?.level ?? 0))
              );
              S.value = S.value * 0.38 + p * 0.62;
            }
          ), R.value = !1;
        } catch (d) {
          console.error(`${Be} audio meter failed`, d), Yt.warn(`${Be} audio meter failed`, d), R.value = !0;
        }
    }, zn = () => {
      r.setFocus().catch(() => {
      });
    }, so = async (d) => {
      d.button !== 0 || me.value || (Dr(), await r.setMinSize(new rt(rr, Xt)).catch(() => {
      }), await jt(), await r.startDragging().catch((p) => {
        nr.msg(i(p), "error");
      }), xr());
    }, ao = async (d) => {
      me.value || (Dr(), await r.setMinSize(new rt(rr, Xt)).catch(() => {
      }), await jt(), await r.startResizeDragging(d).catch((p) => {
        nr.msg(i(p), "error");
      }), xr());
    }, jn = () => l(async () => {
      D.value = null, await on(), await tt(!0).catch(() => {
      }), await ie(), await Dt(await K());
    }), Hn = () => l(async () => {
      await xt();
    }), Bn = () => l(async () => {
      await Ft(await K());
    }), Vn = () => l(async () => {
      D.value = {
        stage: "encode",
        message: W.value.format === "gif" ? "准备生成 GIF 帧" : "准备导出 MP4",
        progress: 0.01,
        currentFrame: 0
      }, await $t(), S.value = 0, await tt(!1).catch(() => {
      }), await Wt(), await ie();
    }), jr = () => l(async () => {
      await ye(), D.value = null, await tt(!1).catch(() => {
      }), await ie();
    }), Gn = () => {
      const d = { ...W.value };
      jt(), ht(), W.value = d, x.value = "ready", Z.value = null, D.value = null, tt(!1).catch(() => {
      }), nt(ie), on();
    }, Kn = (d) => {
      if (x.value !== "exporting") {
        if (d === "start") {
          x.value === "ready" ? jn() : x.value === "completed" && Gn();
          return;
        }
        if (d === "pause") {
          x.value === "recording" ? Hn() : x.value === "paused" && Bn();
          return;
        }
        d === "stop" && (x.value === "recording" || x.value === "paused") && Vn();
      }
    }, oo = async (d) => {
      const p = await yl(d.screenX, d.screenY), $ = p?.scaleFactor || await r.scaleFactor(), U = p ? {
        x: p.position.x,
        y: p.position.y,
        width: p.size.width,
        height: p.size.height
      } : null, se = Qa(
        d,
        U,
        $
      ), de = eo(
        d,
        U,
        $
      );
      L.value = to(
        d,
        U,
        $
      ), h.value = !0, g.value = de, await nt(), await Ht(), await r.setMinSize(
        de ? new rt(sr, js) : new rt(sr, Xt)
      ).catch(() => {
      });
      const je = Math.round(sr * $), Ze = Math.round(
        (de ? js : Xt) * $
      ), Ce = no(d, $, !se), Gr = de && U ? {
        x: Math.max(U.x, Ce.screenX),
        y: Math.max(U.y, Ce.screenY),
        width: Math.max(
          je,
          Math.min(Ce.physicalWidth, U.width)
        ),
        height: Math.max(
          Ze,
          Math.min(Ce.physicalHeight, U.height)
        )
      } : await ro(
        Ce,
        je,
        Ze
      );
      try {
        if (await Wr(
          U && de ? $r(Gr, U) : Gr
        ), await nt(), await Un(), de)
          return;
        const ln = async () => {
          const { actualRegion: Qe, currentFrame: Bt } = await Ur(), He = {
            x: Ce.screenX - Qe.screenX,
            y: Ce.screenY - Qe.screenY,
            width: Ce.physicalWidth - Qe.physicalWidth,
            height: Ce.physicalHeight - Qe.physicalHeight
          };
          if (Math.abs(He.x) <= Bs && Math.abs(He.y) <= Bs && Math.abs(He.width) <= Hs && Math.abs(He.height) <= Hs)
            return !0;
          const Kr = {
            x: Bt.x + He.x,
            y: Bt.y + He.y,
            width: Math.max(je, Bt.width + He.width),
            height: Math.max(
              Ze,
              Bt.height + He.height
            )
          };
          return await Wr(
            U && de ? $r(Kr, U) : Kr
          ), !1;
        };
        for (let Qe = 0; Qe < Ef && !await ln(); Qe += 1)
          ;
      } catch (ln) {
        console.error(`${Be} snap correction failed`, ln), Yt.warn(`${Be} snap correction failed`, ln);
      } finally {
        await Za(), await ie(), await Un(), await Ja(), await r.setFocus().catch(() => {
        });
      }
    }, io = () => l(async () => {
      await jt();
      const d = await Cd();
      await oo(d);
    }), lo = () => {
      me.value || W.value.format === "gif" || (W.value.audio = !W.value.audio);
    }, co = () => {
      me.value || (W.value.showCursor = !W.value.showCursor);
    }, uo = async () => {
      await r.minimize();
    }, Hr = async () => {
      mt.value = !0;
      try {
        x.value === "exporting" ? await ye().catch(() => {
        }) : await pt(), await hn(null).catch(() => {
        }), await tt(!1).catch(() => {
        });
      } catch {
      }
      await Ed();
    }, Br = async () => {
      Z.value && (await ie(), await I("open_file_with_default_app", { filePath: Z.value.path }));
    }, fo = async () => {
      Z.value && (await ie(), await I("show_file_in_folder", { filePath: Z.value.path }));
    }, Vr = (d) => {
      if (d.repeat || d.ctrlKey || d.metaKey || d.altKey) return;
      const p = d.key.toLowerCase();
      if (p === "r") {
        d.preventDefault(), d.stopPropagation(), Kn("start");
        return;
      }
      if (p === "p") {
        d.preventDefault(), d.stopPropagation(), Kn("pause");
        return;
      }
      if (p === "s") {
        d.preventDefault(), d.stopPropagation(), Kn("stop");
        return;
      }
      d.key === "Escape" && (d.preventDefault(), Hr());
    };
    return sn(async () => {
      Yt.info(`${Be} frontend mounted`), x.value = "ready", await r.setMinSize(new rt(rr, Xt)).catch(() => {
      }), await tt(!1).catch(() => {
      }), await Mt().catch(() => {
      }), await nt(), await ie(), await on(), await nt(), E = await kn(
        "screen_recorder_export_progress",
        (d) => {
          D.value = d.payload;
        }
      ).catch(() => null), await r.emit("screen_recorder_ready"), Yt.info(`${Be} frontend ready emitted`), s.value && (b = new ResizeObserver(() => {
        we();
      }), b.observe(s.value)), N = await r.onMoved(() => {
        we();
      }).catch(() => null), window.addEventListener(
        "resize",
        we
      ), window.addEventListener("keydown", Vr);
    }), We(Me, (d) => {
      d ? on() : zr();
    }), We(x, (d) => {
      d !== "recording" && (S.value = 0), d !== "exporting" && (D.value = null);
    }), We(ze, async () => {
      await nt(), await ie(), await Un();
    }), vr(() => {
      b?.disconnect(), N?.(), E?.(), window.removeEventListener(
        "resize",
        we
      ), window.removeEventListener("keydown", Vr), an(), hn(null).catch(() => {
      }), mn(null).catch(() => {
      }), tt(!1).catch(() => {
      }), zr();
    }), (d, p) => (j(), X("div", Rd, [
      k(
        "div",
        {
          class: le(["recorder-shell", {
            recording: C(x) === "recording",
            paused: C(x) === "paused",
            "snap-aligned": h.value,
            "snap-fullscreen": g.value
          }])
        },
        [
          (j(), X(
            Oe,
            null,
            So(y, ($) => k("span", {
              key: $.className,
              class: le(["resize-zone", $.className]),
              onMousedown: qt((U) => ao($.direction), ["prevent"])
            }, null, 42, Ad)),
            64
            /* STABLE_FRAGMENT */
          )),
          k(
            "header",
            {
              ref_key: "titleBarRef",
              ref: a,
              class: "title-bar",
              onMouseenter: zn,
              onMousedown: so
            },
            [
              k(
                "span",
                Md,
                Q(d.$t("screenRecorder.title") || "区域录制"),
                1
                /* TEXT */
              ),
              k(
                "div",
                {
                  class: "window-actions",
                  onMousedown: p[0] || (p[0] = qt(() => {
                  }, ["stop"]))
                },
                [
                  k("button", {
                    class: "title-button title-button--window",
                    title: "最小化",
                    onClick: uo
                  }, [
                    J(C(Ll), {
                      class: "title-icon",
                      theme: "outline",
                      size: "20",
                      strokeWidth: 3,
                      strokeLinecap: "butt"
                    })
                  ]),
                  k("button", {
                    class: "title-button title-button--close",
                    title: "关闭",
                    onClick: Hr
                  }, [
                    J(C(Sl), {
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
          k("main", Dd, [
            p[10] || (p[10] = k(
              "span",
              { class: "viewport-mask top" },
              null,
              -1
              /* HOISTED */
            )),
            p[11] || (p[11] = k(
              "span",
              { class: "viewport-mask right" },
              null,
              -1
              /* HOISTED */
            )),
            p[12] || (p[12] = k(
              "span",
              { class: "viewport-mask bottom" },
              null,
              -1
              /* HOISTED */
            )),
            p[13] || (p[13] = k(
              "span",
              { class: "viewport-mask left" },
              null,
              -1
              /* HOISTED */
            )),
            k("div", xd, [
              k(
                "div",
                {
                  ref_key: "captureHoleRef",
                  ref: s,
                  class: "capture-hole"
                },
                null,
                512
                /* NEED_PATCH */
              ),
              p[6] || (p[6] = k(
                "span",
                { class: "viewport-border top" },
                null,
                -1
                /* HOISTED */
              )),
              p[7] || (p[7] = k(
                "span",
                { class: "viewport-border right" },
                null,
                -1
                /* HOISTED */
              )),
              p[8] || (p[8] = k(
                "span",
                { class: "viewport-border bottom" },
                null,
                -1
                /* HOISTED */
              )),
              p[9] || (p[9] = k(
                "span",
                { class: "viewport-border left" },
                null,
                -1
                /* HOISTED */
              ))
            ])
          ]),
          ze.value ? (j(), X(
            "div",
            {
              key: 0,
              ref_key: "topControlStripRef",
              ref: c,
              class: "top-control-strip",
              onMouseenter: zn
            },
            [
              C(x) === "recording" || C(x) === "paused" ? (j(), X(
                "span",
                Fd,
                Q(bt.value),
                1
                /* TEXT */
              )) : C(x) === "exporting" ? (j(), X(
                "span",
                $d,
                Q(ke.value) + "% ",
                1
                /* TEXT */
              )) : C(x) === "completed" ? (j(), X(
                "span",
                Wd,
                Q(C(Z)?.hasAudio ? "已保存·有声" : "已保存·无声"),
                1
                /* TEXT */
              )) : (j(), X(
                "span",
                Ud,
                Q(u.value.width) + "×" + Q(u.value.height),
                1
                /* TEXT */
              )),
              C(x) === "recording" || C(x) === "paused" ? (j(), X(
                Oe,
                { key: 4 },
                [
                  k("button", {
                    class: "control-button",
                    title: C(x) === "paused" ? vt.value : qe.value,
                    onClick: p[1] || (p[1] = ($) => C(x) === "paused" ? Bn() : Hn())
                  }, [
                    k(
                      "span",
                      jd,
                      Q(C(x) === "paused" ? d.$t("screenRecorder.resume") : d.$t("screenRecorder.pause")),
                      1
                      /* TEXT */
                    )
                  ], 8, zd),
                  k("button", {
                    class: "control-button danger",
                    title: yt.value,
                    onClick: Vn
                  }, [
                    k(
                      "span",
                      Bd,
                      Q(d.$t("screenRecorder.stop")),
                      1
                      /* TEXT */
                    )
                  ], 8, Hd)
                ],
                64
                /* STABLE_FRAGMENT */
              )) : C(x) === "exporting" ? (j(), X("button", {
                key: 5,
                class: "control-button danger",
                title: "取消导出",
                onClick: jr
              }, p[14] || (p[14] = [
                k(
                  "span",
                  { class: "button-label" },
                  "取消",
                  -1
                  /* HOISTED */
                )
              ]))) : C(x) === "completed" && C(Z) ? (j(), X(
                Oe,
                { key: 6 },
                [
                  k("button", {
                    class: "control-button",
                    title: "打开文件",
                    onClick: Br
                  }, p[15] || (p[15] = [
                    k(
                      "span",
                      { class: "button-label" },
                      "打开",
                      -1
                      /* HOISTED */
                    )
                  ])),
                  k("button", {
                    class: "control-button",
                    title: "重新录制",
                    onClick: Gn
                  }, p[16] || (p[16] = [
                    k(
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
              )) : (j(), X("button", {
                key: 7,
                class: "record-button",
                disabled: C(ne)?.available === !1 || u.value.width < Ve || u.value.height < Ve,
                title: _t.value,
                onClick: jn
              }, [
                p[17] || (p[17] = k(
                  "span",
                  { class: "record-dot" },
                  null,
                  -1
                  /* HOISTED */
                )),
                k(
                  "span",
                  Gd,
                  Q(d.$t("screenRecorder.start")),
                  1
                  /* TEXT */
                )
              ], 8, Vd))
            ],
            544
            /* NEED_HYDRATION, NEED_PATCH */
          )) : Re("v-if", !0),
          k(
            "footer",
            {
              ref_key: "controlStripRef",
              ref: o,
              class: "control-strip",
              onMouseenter: zn
            },
            [
              k("div", Kd, [
                k("div", Yd, [
                  C(x) === "ready" || C(x) === "completed" ? (j(), X(
                    "button",
                    {
                      key: 0,
                      class: "icon-control snap-control",
                      title: "拖到目标窗口并松开以对齐",
                      "aria-label": "对齐目标窗口",
                      onMousedown: qt(io, ["prevent"])
                    },
                    [
                      J(C(Tl), {
                        theme: "outline",
                        size: "18",
                        strokeWidth: 3,
                        strokeLinecap: "butt"
                      })
                    ],
                    32
                    /* NEED_HYDRATION */
                  )) : Re("v-if", !0),
                  k("button", {
                    class: le(["audio-meter", {
                      active: Xe.value && S.value > 0.03,
                      "audio-on": Me.value,
                      metering: Xe.value && !R.value,
                      muted: !Me.value || R.value
                    }]),
                    title: zt.value,
                    "aria-label": "系统声音录制状态",
                    "aria-pressed": C(W).audio && C(W).format === "mp4",
                    disabled: me.value || C(W).format === "gif",
                    onClick: lo
                  }, [
                    k(
                      "span",
                      {
                        class: "audio-bars",
                        style: kt(Ut.value)
                      },
                      p[18] || (p[18] = [
                        k(
                          "i",
                          null,
                          null,
                          -1
                          /* HOISTED */
                        ),
                        k(
                          "i",
                          null,
                          null,
                          -1
                          /* HOISTED */
                        ),
                        k(
                          "i",
                          null,
                          null,
                          -1
                          /* HOISTED */
                        ),
                        k(
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
                  ], 10, Xd),
                  k("button", {
                    class: le(["icon-control cursor-control", { active: C(W).showCursor }]),
                    title: gt.value,
                    "aria-label": d.$t("screenRecorder.showCursor"),
                    "aria-pressed": C(W).showCursor,
                    disabled: me.value,
                    onClick: co
                  }, [
                    J(C(kl), {
                      theme: "outline",
                      size: "17",
                      strokeWidth: 3,
                      strokeLinecap: "butt"
                    })
                  ], 10, qd)
                ]),
                k("label", Jd, [
                  at(k("select", {
                    "onUpdate:modelValue": p[2] || (p[2] = ($) => C(W).fps = $),
                    disabled: me.value
                  }, p[19] || (p[19] = [
                    k(
                      "option",
                      { value: 15 },
                      "15",
                      -1
                      /* HOISTED */
                    ),
                    k(
                      "option",
                      { value: 24 },
                      "24",
                      -1
                      /* HOISTED */
                    ),
                    k(
                      "option",
                      { value: 30 },
                      "30",
                      -1
                      /* HOISTED */
                    ),
                    k(
                      "option",
                      { value: 60 },
                      "60",
                      -1
                      /* HOISTED */
                    )
                  ]), 8, Zd), [
                    [Xn, C(W).fps]
                  ]),
                  p[20] || (p[20] = k(
                    "span",
                    { class: "unit" },
                    "fps",
                    -1
                    /* HOISTED */
                  ))
                ]),
                at(k("select", {
                  "onUpdate:modelValue": p[3] || (p[3] = ($) => C(W).format = $),
                  class: "format-select optional-format",
                  disabled: me.value
                }, p[21] || (p[21] = [
                  k(
                    "option",
                    { value: "mp4" },
                    "MP4",
                    -1
                    /* HOISTED */
                  ),
                  k(
                    "option",
                    { value: "gif" },
                    "GIF",
                    -1
                    /* HOISTED */
                  )
                ]), 8, Qd), [
                  [Xn, C(W).format]
                ]),
                at(k("select", {
                  "onUpdate:modelValue": p[4] || (p[4] = ($) => C(W).quality = $),
                  class: "quality-select optional-quality",
                  disabled: me.value
                }, [
                  k(
                    "option",
                    tf,
                    Q(d.$t("screenRecorder.qualityHigh")),
                    1
                    /* TEXT */
                  ),
                  k(
                    "option",
                    nf,
                    Q(d.$t("screenRecorder.qualityStandard")),
                    1
                    /* TEXT */
                  ),
                  k(
                    "option",
                    rf,
                    Q(d.$t("screenRecorder.qualitySmall")),
                    1
                    /* TEXT */
                  )
                ], 8, ef), [
                  [Xn, C(W).quality]
                ]),
                k("div", sf, [
                  k("label", af, [
                    k("input", {
                      value: u.value.width,
                      readonly: ""
                    }, null, 8, of)
                  ]),
                  p[22] || (p[22] = k(
                    "span",
                    { class: "multiply" },
                    "×",
                    -1
                    /* HOISTED */
                  )),
                  k("label", lf, [
                    k("input", {
                      value: u.value.height,
                      readonly: ""
                    }, null, 8, cf)
                  ]),
                  p[23] || (p[23] = k(
                    "span",
                    { class: "unit" },
                    "px",
                    -1
                    /* HOISTED */
                  ))
                ])
              ]),
              k("div", uf, [
                C(x) === "recording" || C(x) === "paused" ? (j(), X(
                  Oe,
                  { key: 0 },
                  [
                    k(
                      "span",
                      df,
                      Q(bt.value),
                      1
                      /* TEXT */
                    ),
                    k("button", {
                      class: "control-button",
                      title: C(x) === "paused" ? vt.value : qe.value,
                      onClick: p[5] || (p[5] = ($) => C(x) === "paused" ? Bn() : Hn())
                    }, [
                      k(
                        "span",
                        pf,
                        Q(C(x) === "paused" ? d.$t("screenRecorder.resume") : d.$t("screenRecorder.pause")),
                        1
                        /* TEXT */
                      )
                    ], 8, ff),
                    k("button", {
                      class: "control-button danger",
                      title: yt.value,
                      onClick: Vn
                    }, [
                      k(
                        "span",
                        mf,
                        Q(d.$t("screenRecorder.stop")),
                        1
                        /* TEXT */
                      )
                    ], 8, hf)
                  ],
                  64
                  /* STABLE_FRAGMENT */
                )) : C(x) === "exporting" ? (j(), X(
                  Oe,
                  { key: 1 },
                  [
                    k("div", {
                      class: "export-progress",
                      title: Je.value
                    }, [
                      k("div", _f, [
                        k(
                          "span",
                          null,
                          Q(Te.value),
                          1
                          /* TEXT */
                        ),
                        k(
                          "strong",
                          null,
                          Q(ke.value) + "%",
                          1
                          /* TEXT */
                        )
                      ]),
                      k("div", vf, [
                        k(
                          "span",
                          {
                            style: kt({ width: `${ke.value}%` })
                          },
                          null,
                          4
                          /* STYLE */
                        )
                      ])
                    ], 8, gf),
                    k("button", {
                      class: "control-button danger",
                      title: "取消导出",
                      onClick: jr
                    }, p[24] || (p[24] = [
                      k(
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
                )) : C(x) === "completed" && C(Z) ? (j(), X(
                  Oe,
                  { key: 2 },
                  [
                    k("span", {
                      class: "save-status optional-save-status",
                      title: C(Z).path
                    }, Q(C(Z).hasAudio ? "已保存·有声" : "已保存·无声"), 9, yf),
                    k("button", {
                      class: "control-button",
                      title: "打开文件",
                      onClick: Br
                    }, p[25] || (p[25] = [
                      k(
                        "span",
                        { class: "button-label" },
                        "打开",
                        -1
                        /* HOISTED */
                      )
                    ])),
                    k("button", {
                      class: "control-button",
                      title: "打开所在文件夹",
                      onClick: fo
                    }, p[26] || (p[26] = [
                      k(
                        "span",
                        { class: "button-label" },
                        "文件夹",
                        -1
                        /* HOISTED */
                      )
                    ])),
                    k("button", {
                      class: "control-button",
                      title: "重新录制",
                      onClick: Gn
                    }, p[27] || (p[27] = [
                      k(
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
                )) : (j(), X("button", {
                  key: 3,
                  class: "record-button",
                  disabled: C(ne)?.available === !1 || u.value.width < Ve || u.value.height < Ve,
                  title: _t.value,
                  onClick: jn
                }, [
                  p[28] || (p[28] = k(
                    "span",
                    { class: "record-dot" },
                    null,
                    -1
                    /* HOISTED */
                  )),
                  k(
                    "span",
                    wf,
                    Q(d.$t("screenRecorder.start")),
                    1
                    /* TEXT */
                  )
                ], 8, bf))
              ])
            ],
            544
            /* NEED_HYDRATION, NEED_PATCH */
          )
        ],
        2
        /* CLASS */
      ),
      C(ne) && !C(ne).available ? (j(), X(
        "p",
        Cf,
        Q(C(ne).message || d.$t("screenRecorder.ffmpegMissing")),
        1
        /* TEXT */
      )) : Re("v-if", !0)
    ]));
  }
}), Nf = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, s] of t)
    n[r] = s;
  return n;
}, If = /* @__PURE__ */ Nf(Tf, [["__scopeId", "data-v-1f74983b"]]), Of = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: If
}, Symbol.toStringTag, { value: "Module" }));
export {
  Rf as activate
};
