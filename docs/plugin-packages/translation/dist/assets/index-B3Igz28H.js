import { e as ne, f as m, m as h, h as N, g as oe, j as le, E as se, x as re, k as ie } from "./_plugin-vue_export-helper-CKv_N83a.js";
import { E as ce } from "./switch-BoxY4hb0.js";
import { E as ue } from "./empty-CEJoe-K4.js";
import "./tooltip-l0sNRNKZ.js";
import { I as P, c as n, d as de, r as f, G as me, f as he, p as fe, a as g, o as v, q as u, e as E, u as i, s as y, v as k, b as T, F as B, h as A, n as ve, x as pe } from "./runtime-entry-DtonpMUQ.js";
import "./index-B8KhMUii.js";
import { C as _e } from "./ConfirmDialog-B01wTfzx.js";
import { E as ge } from "./index-CBrV9NHe.js";
import { L as ke } from "./Loading-pBEcsFTC.js";
import { R as we, P as ye } from "./Redo-ClIJugi-.js";
const xe = P("add", !1, function(t) {
  return n("svg", {
    width: t.size,
    height: t.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [n("rect", {
    x: "6",
    y: "6",
    width: "36",
    height: "36",
    rx: "3",
    fill: t.colors[1],
    stroke: t.colors[0],
    "stroke-width": t.strokeWidth,
    "stroke-linejoin": t.strokeLinejoin
  }, null), n("path", {
    d: "M24 16V32",
    stroke: t.colors[2],
    "stroke-width": t.strokeWidth,
    "stroke-linecap": t.strokeLinecap,
    "stroke-linejoin": t.strokeLinejoin
  }, null), n("path", {
    d: "M16 24L32 24",
    stroke: t.colors[2],
    "stroke-width": t.strokeWidth,
    "stroke-linecap": t.strokeLinecap,
    "stroke-linejoin": t.strokeLinejoin
  }, null)]);
}), Ce = P("reduce", !1, function(t) {
  return n("svg", {
    width: t.size,
    height: t.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [n("rect", {
    x: "6",
    y: "6",
    width: "36",
    height: "36",
    rx: "3",
    fill: t.colors[1],
    stroke: t.colors[0],
    "stroke-width": t.strokeWidth,
    "stroke-linejoin": t.strokeLinejoin
  }, null), n("path", {
    d: "M16 24L32 24",
    stroke: t.colors[2],
    "stroke-width": t.strokeWidth,
    "stroke-linecap": t.strokeLinecap,
    "stroke-linejoin": t.strokeLinejoin
  }, null)]);
});
function Ve() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(t) {
    const d = Math.random() * 16 | 0;
    return (t === "x" ? d : d & 3 | 8).toString(16);
  });
}
const Ee = { class: "w-full h-full overflow-hidden relative" }, be = {
  key: 0,
  class: "scanning-overlay"
}, $e = { class: "scanning-content" }, Le = { class: "scanning-text" }, Ue = { class: "scanning-progress" }, Se = { class: "retrieve-container" }, je = { class: "search-config transparent-input" }, Ie = { class: "config-title" }, ze = { class: "title-text" }, We = { class: "flex gap-4" }, De = { class: "search-list" }, Te = { class: "item-left" }, Be = { class: "icon-wrapper" }, Fe = ["src", "alt", "onError"], Me = { class: "item-center" }, Re = { class: "item-right" }, Ne = /* @__PURE__ */ de({
  __name: "index",
  setup(t) {
    const { t: d } = ne(), a = f([]), x = f([]), w = f(!1), p = f(-1), C = f(null), _ = f(!1), b = f(""), $ = f(0), L = f(0);
    let U = null, S = null;
    const V = me(/* @__PURE__ */ new Map()), j = async (e) => {
      if (e.icon)
        return e.icon;
      if (e.url) {
        if (V.has(e.url))
          return V.get(e.url);
        try {
          const o = new URL(e.url).hostname, s = await m("fetch_favicon", { url: o });
          return V.set(e.url, s), e.icon = s, s;
        } catch (c) {
          return console.error("获取图标失败:", c), "";
        }
      }
      return "";
    }, F = async () => {
      for (const e of a.value)
        e.url && !e.icon && await j(e);
    }, q = async (e) => {
      e.url ? (e.icon = "", V.delete(e.url), await j(e)) : e.icon = "", I();
    }, M = () => {
      I();
    }, I = () => {
      C.value !== null && clearTimeout(C.value), C.value = window.setTimeout(() => {
        z(!1), C.value = null;
      }, 1e3);
    };
    he(async () => {
      await G(), await O();
      try {
        a.value = await m("get_search_engines"), x.value = await m("get_default_engines"), await F();
      } catch (e) {
        console.error("获取搜索引擎配置失败:", e), _.value || h.msg(d("retrieve.loadFailed"), "error");
      }
    }), fe(() => {
      U && U(), S && S();
    });
    const G = async () => {
      try {
        const e = await m("get_scan_progress_state");
        !e.completed && e.stage ? (_.value = !0, b.value = e.stage, $.value = e.current, L.value = e.total) : _.value = !1;
      } catch (e) {
        console.error("获取扫描状态失败:", e);
      }
    }, O = async () => {
      U = await N("scan-progress", (e) => {
        _.value = !0, b.value = e.payload.stage, $.value = e.payload.current, L.value = e.payload.total;
      }), S = await N("scan-complete", async () => {
        _.value = !1;
        try {
          a.value = await m("get_search_engines"), x.value = await m("get_default_engines"), await F();
        } catch (e) {
          console.error("重新加载搜索引擎配置失败:", e);
        }
      });
    }, R = async (e) => {
      try {
        return await m("update_search_engines", { engines: e }), a.value = e, await re("search-engines-updated", e), !0;
      } catch (c) {
        return console.error("更新搜索引擎配置失败:", c), h.msg(d("retrieve.updateFailed"), "error"), !1;
      }
    }, z = async (e = !0) => {
      if (a.value.filter(
        (s) => !s.name || !s.keyword || !s.url
      ).length > 0)
        return e && h.msg(d("retrieve.invalidConfig"), "warning"), !1;
      const o = await R([...a.value]);
      return o && e && h.msg(d("retrieve.configUpdated")), o;
    }, H = async () => {
      try {
        const e = await m(
          "get_default_engines"
        );
        e && e.length > 0 && (e[0].enabled = !0), await R(e) && h.msg(d("retrieve.resetSuccess"));
      } catch (e) {
        console.error("重置搜索引擎失败:", e), h.msg(d("retrieve.resetFailed"), "error");
      }
    }, J = async () => {
      const e = {
        id: Ve(),
        keyword: "",
        name: "",
        icon: "",
        url: "",
        enabled: !1
      };
      a.value.push(e), h.msg(d("retrieve.addSuccess"), "info");
    }, K = (e) => {
      p.value = e, w.value = !0;
    }, Q = async () => {
      if (p.value === -1) return;
      const e = a.value.filter((o, s) => s !== p.value);
      a.value = e, a.value.length > 0 && !a.value.some((o) => o.enabled) && (a.value[0].enabled = !0), await z(!1) && h.msg(d("retrieve.deleteSuccess"), "info"), w.value = !1, p.value = -1;
    }, X = async (e) => {
      a.value = a.value.map((o, s) => ({
        ...o,
        enabled: s === e ? o.enabled : !1
      })), await z(!1) && h.msg(d("retrieve.defaultUpdated"));
    }, Y = async (e, c) => {
      const o = x.value.find(
        (s) => s.name === c
      );
      o && (a.value[e] = {
        ...o,
        enabled: a.value[e].enabled
      }, await j(a.value[e]), I());
    }, Z = async (e) => {
      if (!e.url) {
        e.icon = "";
        return;
      }
      try {
        const o = new URL(e.url).hostname, s = await m("fetch_favicon", { url: o });
        s && s.length > 0 ? e.icon = s : e.icon = void 0;
      } catch (c) {
        console.error("获取图标失败:", c), e.icon = void 0;
      }
    };
    return (e, c) => {
      const o = oe, s = ue, W = ge, ee = ce, te = le, ae = se;
      return v(), g(
        B,
        null,
        [
          u("main", Ee, [
            E(" 加载中提示 "),
            i(_) ? (v(), g("div", be, [
              u("div", $e, [
                n(i(ke), {
                  class: "scanning-icon",
                  theme: "outline",
                  size: "48",
                  strokeWidth: 3,
                  spin: ""
                }),
                u(
                  "div",
                  Le,
                  y(i(b) || e.$t("progress.preparing")),
                  1
                  /* TEXT */
                ),
                u(
                  "div",
                  Ue,
                  y(i($)) + "/" + y(i(L)),
                  1
                  /* TEXT */
                )
              ])
            ])) : E("v-if", !0),
            u("div", Se, [
              u("div", je, [
                u("div", Ie, [
                  u(
                    "h1",
                    ze,
                    y(e.$t("retrieve.title")),
                    1
                    /* TEXT */
                  ),
                  u("div", We, [
                    n(o, {
                      content: e.$t("retrieve.resetDefault"),
                      placement: "top",
                      effect: "light"
                    }, {
                      default: k(() => [
                        n(i(we), {
                          class: "add-btn",
                          theme: "outline",
                          size: "22",
                          strokeWidth: 3,
                          onClick: H
                        })
                      ]),
                      _: 1
                      /* STABLE */
                    }, 8, ["content"]),
                    n(o, {
                      content: e.$t("retrieve.addNew"),
                      placement: "top",
                      effect: "light"
                    }, {
                      default: k(() => [
                        n(i(xe), {
                          class: "add-btn",
                          theme: "outline",
                          size: "22",
                          strokeWidth: 3,
                          onClick: J
                        })
                      ]),
                      _: 1
                      /* STABLE */
                    }, 8, ["content"])
                  ])
                ]),
                u("div", De, [
                  i(a).length === 0 ? (v(), T(s, {
                    key: 0,
                    description: e.$t("retrieve.noEngines")
                  }, null, 8, ["description"])) : E("v-if", !0),
                  (v(!0), g(
                    B,
                    null,
                    A(i(a), (l, D) => (v(), g(
                      "div",
                      {
                        key: l.id,
                        class: ve(["search-item", { "default-engine": l.enabled }])
                      },
                      [
                        u("div", Te, [
                          n(W, {
                            modelValue: l.name,
                            "onUpdate:modelValue": (r) => l.name = r,
                            class: "keyword-input",
                            placeholder: e.$t("retrieve.name"),
                            onChange: M
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"]),
                          u("div", Be, [
                            n(o, {
                              content: e.$t("retrieve.icon"),
                              placement: "top",
                              effect: "light"
                            }, {
                              default: k(() => [
                                l.icon ? (v(), g("img", {
                                  key: 1,
                                  class: "engine-icon",
                                  src: l.icon || "",
                                  alt: l.name,
                                  onError: (r) => Z(l)
                                }, null, 40, Fe)) : (v(), T(i(ye), {
                                  key: 0,
                                  class: "engine-icon",
                                  theme: "outline",
                                  size: "26",
                                  strokeWidth: 3,
                                  strokeLinejoin: "miter",
                                  strokeLinecap: "butt"
                                }))
                              ]),
                              _: 2
                              /* DYNAMIC */
                            }, 1032, ["content"])
                          ]),
                          n(W, {
                            modelValue: l.keyword,
                            "onUpdate:modelValue": (r) => l.keyword = r,
                            class: "engine-input",
                            placeholder: e.$t("retrieve.keyword"),
                            onChange: M
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])
                        ]),
                        u("div", Me, [
                          n(W, {
                            modelValue: l.url,
                            "onUpdate:modelValue": (r) => l.url = r,
                            placeholder: e.$t("retrieve.urlFormat"),
                            class: "url-input",
                            onChange: (r) => q(l)
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder", "onChange"])
                        ]),
                        u("div", Re, [
                          n(ee, {
                            modelValue: l.enabled,
                            "onUpdate:modelValue": (r) => l.enabled = r,
                            class: "enable-switch",
                            "inline-prompt": "",
                            "active-text": e.$t("retrieve.default"),
                            "inactive-text": e.$t("retrieve.off"),
                            "active-color": "#4b94f8",
                            "inactive-color": "#dddddd",
                            onChange: (r) => X(D)
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "active-text", "inactive-text", "onChange"]),
                          n(ae, {
                            class: "engine-select",
                            modelValue: l.name,
                            "onUpdate:modelValue": (r) => l.name = r,
                            placeholder: e.$t("retrieve.defaultConfig"),
                            clearable: "",
                            onChange: (r) => Y(D, l.name)
                          }, {
                            default: k(() => [
                              (v(!0), g(
                                B,
                                null,
                                A(i(x), (r) => (v(), T(te, {
                                  key: r.id,
                                  label: r.name,
                                  value: r.name
                                }, null, 8, ["label", "value"]))),
                                128
                                /* KEYED_FRAGMENT */
                              ))
                            ]),
                            _: 2
                            /* DYNAMIC */
                          }, 1032, ["modelValue", "onUpdate:modelValue", "placeholder", "onChange"]),
                          n(o, {
                            content: e.$t("retrieve.deleteEngine"),
                            placement: "top",
                            effect: "light"
                          }, {
                            default: k(() => [
                              n(i(Ce), {
                                class: "delete-icon",
                                theme: "outline",
                                size: "22",
                                strokeWidth: 3,
                                strokeLinejoin: "miter",
                                strokeLinecap: "butt",
                                onClick: (r) => K(D)
                              }, null, 8, ["onClick"])
                            ]),
                            _: 2
                            /* DYNAMIC */
                          }, 1032, ["content"])
                        ])
                      ],
                      2
                      /* CLASS */
                    ))),
                    128
                    /* KEYED_FRAGMENT */
                  ))
                ])
              ])
            ])
          ]),
          E(" 删除确认对话框 "),
          n(i(_e), {
            modelValue: i(w),
            "onUpdate:modelValue": c[0] || (c[0] = (l) => pe(w) ? w.value = l : null),
            title: e.$t("common.warning"),
            "confirm-text": e.$t("common.confirm"),
            "cancel-text": e.$t("common.cancel"),
            type: "danger",
            onConfirm: Q
          }, {
            default: k(() => [
              u(
                "div",
                null,
                y(e.$t("retrieve.deleteConfirm", { name: i(a)[i(p)]?.name || i(a)[i(p)]?.keyword || "" })),
                1
                /* TEXT */
              )
            ]),
            _: 1
            /* STABLE */
          }, 8, ["modelValue", "title", "confirm-text", "cancel-text"])
        ],
        64
        /* STABLE_FRAGMENT */
      );
    };
  }
}), Ye = /* @__PURE__ */ ie(Ne, [["__scopeId", "data-v-6f7bcd4f"]]);
export {
  Ye as default
};
