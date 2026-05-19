import { k as w } from "./_plugin-vue_export-helper-Kpx6kpKo.js";
import { E } from "./dropdown-item-CZh5_ggl.js";
import { I as L, c as n, C as V, d as N, k as j, f as W, p as D, a as i, b as c, e as a, o, u as e, s as r, n as z, v as B, q as G } from "./runtime-entry-CxfepRbR.js";
import { u as O, e as I, i as M, f as x } from "./useGitStatus-jV6pLKjh.js";
import { L as Z } from "./Loading-BYxVokp4.js";
const f = L("branch", !0, function(t) {
  return n("svg", {
    width: t.size,
    height: t.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [n("path", {
    d: "M40 28C42.2091 28 44 26.2091 44 24C44 21.7909 42.2091 20 40 20C37.7909 20 36 21.7909 36 24C36 26.2091 37.7909 28 40 28Z",
    fill: t.colors[1],
    stroke: t.colors[0],
    "stroke-width": t.strokeWidth,
    "stroke-linejoin": t.strokeLinejoin
  }, null), n("path", {
    d: "M9 12C11.2091 12 13 10.2091 13 8C13 5.79086 11.2091 4 9 4C6.79086 4 5 5.79086 5 8C5 10.2091 6.79086 12 9 12Z",
    fill: t.colors[1],
    stroke: t.colors[0],
    "stroke-width": t.strokeWidth,
    "stroke-linejoin": t.strokeLinejoin
  }, null), n("path", {
    d: "M9 44C11.2091 44 13 42.2091 13 40C13 37.7909 11.2091 36 9 36C6.79086 36 5 37.7909 5 40C5 42.2091 6.79086 44 9 44Z",
    fill: t.colors[1],
    stroke: t.colors[0],
    "stroke-width": t.strokeWidth,
    "stroke-linejoin": t.strokeLinejoin
  }, null), n("path", {
    d: "M9 12V36V24.0083H36",
    stroke: t.colors[0],
    "stroke-width": t.strokeWidth,
    "stroke-linecap": t.strokeLinecap,
    "stroke-linejoin": t.strokeLinejoin
  }, null)]);
});
/*!
  * vue-router v4.5.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */
var _;
(function(t) {
  t.pop = "pop", t.push = "push";
})(_ || (_ = {}));
var g;
(function(t) {
  t.back = "back", t.forward = "forward", t.unknown = "";
})(g || (g = {}));
Symbol(process.env.NODE_ENV !== "production" ? "navigation failure" : "");
var v;
(function(t) {
  t[t.aborted = 4] = "aborted", t[t.cancelled = 8] = "cancelled", t[t.duplicated = 16] = "duplicated";
})(v || (v = {}));
Symbol(process.env.NODE_ENV !== "production" ? "router view location matched" : "");
Symbol(process.env.NODE_ENV !== "production" ? "router view depth" : "");
const $ = Symbol(process.env.NODE_ENV !== "production" ? "router" : "");
Symbol(process.env.NODE_ENV !== "production" ? "route location" : "");
Symbol(process.env.NODE_ENV !== "production" ? "router view location" : "");
function q() {
  return V($);
}
const H = ["title"], K = {
  key: 2,
  class: "git-badge"
}, R = {
  key: 3,
  class: "git-time"
}, U = { class: "ml-2" }, A = {
  key: 0,
  class: "git-badge ml-1"
}, J = /* @__PURE__ */ N({
  __name: "TitlebarGitStatus",
  props: {
    variant: { default: "inline" }
  },
  setup(t) {
    const p = q(), {
      syncState: s,
      pendingFilesCount: l,
      formattedLastSyncTime: d,
      refreshStatus: u,
      refreshSettings: C,
      stateDescription: b,
      gitSettings: y
    } = O(), k = j(() => !!y.value?.enabled && s.value !== "error"), h = () => {
      p.push("/config/category/settings?tab=gitSync");
    };
    return W(async () => {
      I(), M(u), await C(), await u();
    }), D(() => {
      x();
    }), (m, P) => {
      const S = E;
      return k.value && m.variant === "inline" ? (o(), i("div", {
        key: 0,
        class: z(["git-status-indicator", `git-status-${e(s)}`]),
        title: e(b),
        onClick: h
      }, [
        e(s) === "syncing" ? (o(), c(e(Z), {
          key: 0,
          class: "icon git-sync-icon",
          theme: "outline",
          size: "16",
          strokeWidth: 3
        })) : (o(), c(e(f), {
          key: 1,
          class: "icon",
          theme: "outline",
          size: "16",
          strokeWidth: 3
        })),
        e(s) === "has_changes" ? (o(), i(
          "span",
          K,
          r(e(l)),
          1
          /* TEXT */
        )) : a("v-if", !0),
        e(d) && e(s) !== "syncing" ? (o(), i(
          "span",
          R,
          r(e(d)),
          1
          /* TEXT */
        )) : a("v-if", !0)
      ], 10, H)) : k.value ? (o(), c(S, {
        key: 1,
        onClick: h
      }, {
        default: B(() => [
          n(e(f), {
            theme: "outline",
            size: "16",
            strokeWidth: 3,
            class: "align-middle"
          }),
          G(
            "span",
            U,
            r(m.$t("titlebar.gitSync")),
            1
            /* TEXT */
          ),
          e(s) === "has_changes" ? (o(), i(
            "span",
            A,
            r(e(l)),
            1
            /* TEXT */
          )) : a("v-if", !0)
        ]),
        _: 1
        /* STABLE */
      })) : a("v-if", !0);
    };
  }
}), tt = /* @__PURE__ */ w(J, [["__scopeId", "data-v-1d1e7036"]]);
export {
  tt as default
};
