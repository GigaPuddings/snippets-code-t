import { b as ee, d as J, _ as te, h as se, Q as ae, W as ne, t as oe, X as le, Y as ie, E as re, w as de, P as G, H as ce, J as u, A as z, Z as N, $ as P, a0 as ue, K as pe, O as C, N as fe, a1 as j, a2 as ve, a3 as me, a4 as he, a5 as q } from "./_plugin-vue_export-helper-C3e6AB_k.js";
import { d as O, a as p, H as _e, i as K, e as c, f as r, h as _, k as $, l, j as t, A as B, m as Z, z as i, p as S, q as I, v as ge, r as x, o as ye, c as be, F as Q, C as Y, J as U } from "./runtime-entry-BYS4P8M5.js";
const we = ee({
  type: {
    type: String,
    default: "line",
    values: ["line", "circle", "dashboard"]
  },
  percentage: {
    type: Number,
    default: 0,
    validator: (v) => v >= 0 && v <= 100
  },
  status: {
    type: String,
    default: "",
    values: ["", "success", "exception", "warning"]
  },
  indeterminate: Boolean,
  duration: {
    type: Number,
    default: 3
  },
  strokeWidth: {
    type: Number,
    default: 6
  },
  strokeLinecap: {
    type: J(String),
    default: "round"
  },
  textInside: Boolean,
  width: {
    type: Number,
    default: 126
  },
  showText: {
    type: Boolean,
    default: !0
  },
  color: {
    type: J([
      String,
      Array,
      Function
    ]),
    default: ""
  },
  striped: Boolean,
  stripedFlow: Boolean,
  format: {
    type: J(Function),
    default: (v) => `${v}%`
  }
}), $e = O({
  name: "ElProgress"
}), ke = /* @__PURE__ */ O({
  ...$e,
  props: we,
  setup(v) {
    const a = v, k = {
      success: "#13ce66",
      exception: "#ff4949",
      warning: "#e6a23c",
      default: "#20a0ff"
    }, n = se("progress"), g = p(() => {
      const s = {
        width: `${a.percentage}%`,
        animationDuration: `${a.duration}s`
      }, e = E(a.percentage);
      return e.includes("gradient") ? s.background = e : s.backgroundColor = e, s;
    }), m = p(() => (a.strokeWidth / a.width * 100).toFixed(1)), h = p(() => ["circle", "dashboard"].includes(a.type) ? Number.parseInt(`${50 - Number.parseFloat(m.value) / 2}`, 10) : 0), T = p(() => {
      const s = h.value, e = a.type === "dashboard";
      return `
          M 50 50
          m 0 ${e ? "" : "-"}${s}
          a ${s} ${s} 0 1 1 0 ${e ? "-" : ""}${s * 2}
          a ${s} ${s} 0 1 1 0 ${e ? "" : "-"}${s * 2}
          `;
    }), w = p(() => 2 * Math.PI * h.value), y = p(() => a.type === "dashboard" ? 0.75 : 1), M = p(() => `${-1 * w.value * (1 - y.value) / 2}px`), V = p(() => ({
      strokeDasharray: `${w.value * y.value}px, ${w.value}px`,
      strokeDashoffset: M.value
    })), A = p(() => ({
      strokeDasharray: `${w.value * y.value * (a.percentage / 100)}px, ${w.value}px`,
      strokeDashoffset: M.value,
      transition: "stroke-dasharray 0.6s ease 0s, stroke 0.6s ease, opacity ease 0.6s"
    })), W = p(() => {
      let s;
      return a.color ? s = E(a.percentage) : s = k[a.status] || k.default, s;
    }), R = p(() => a.status === "warning" ? ae : a.type === "line" ? a.status === "success" ? ne : oe : a.status === "success" ? le : ie), D = p(() => a.type === "line" ? 12 + a.strokeWidth * 0.4 : a.width * 0.111111 + 2), F = p(() => a.format(a.percentage));
    function H(s) {
      const e = 100 / s.length;
      return s.map((d, b) => K(d) ? {
        color: d,
        percentage: (b + 1) * e
      } : d).sort((d, b) => d.percentage - b.percentage);
    }
    const E = (s) => {
      var e;
      const { color: o } = a;
      if (_e(o))
        return o(s);
      if (K(o))
        return o;
      {
        const d = H(o);
        for (const b of d)
          if (b.percentage > s)
            return b.color;
        return (e = d[d.length - 1]) == null ? void 0 : e.color;
      }
    };
    return (s, e) => (r(), c("div", {
      class: $([
        l(n).b(),
        l(n).m(s.type),
        l(n).is(s.status),
        {
          [l(n).m("without-text")]: !s.showText,
          [l(n).m("text-inside")]: s.textInside
        }
      ]),
      role: "progressbar",
      "aria-valuenow": s.percentage,
      "aria-valuemin": "0",
      "aria-valuemax": "100"
    }, [
      s.type === "line" ? (r(), c("div", {
        key: 0,
        class: $(l(n).b("bar"))
      }, [
        t("div", {
          class: $(l(n).be("bar", "outer")),
          style: B({ height: `${s.strokeWidth}px` })
        }, [
          t("div", {
            class: $([
              l(n).be("bar", "inner"),
              { [l(n).bem("bar", "inner", "indeterminate")]: s.indeterminate },
              { [l(n).bem("bar", "inner", "striped")]: s.striped },
              { [l(n).bem("bar", "inner", "striped-flow")]: s.stripedFlow }
            ]),
            style: B(l(g))
          }, [
            (s.showText || s.$slots.default) && s.textInside ? (r(), c("div", {
              key: 0,
              class: $(l(n).be("bar", "innerText"))
            }, [
              Z(s.$slots, "default", { percentage: s.percentage }, () => [
                t("span", null, i(l(F)), 1)
              ])
            ], 2)) : _("v-if", !0)
          ], 6)
        ], 6)
      ], 2)) : (r(), c("div", {
        key: 1,
        class: $(l(n).b("circle")),
        style: B({ height: `${s.width}px`, width: `${s.width}px` })
      }, [
        (r(), c("svg", { viewBox: "0 0 100 100" }, [
          t("path", {
            class: $(l(n).be("circle", "track")),
            d: l(T),
            stroke: `var(${l(n).cssVarName("fill-color-light")}, #e5e9f2)`,
            "stroke-linecap": s.strokeLinecap,
            "stroke-width": l(m),
            fill: "none",
            style: B(l(V))
          }, null, 14, ["d", "stroke", "stroke-linecap", "stroke-width"]),
          t("path", {
            class: $(l(n).be("circle", "path")),
            d: l(T),
            stroke: l(W),
            fill: "none",
            opacity: s.percentage ? 1 : 0,
            "stroke-linecap": s.strokeLinecap,
            "stroke-width": l(m),
            style: B(l(A))
          }, null, 14, ["d", "stroke", "opacity", "stroke-linecap", "stroke-width"])
        ]))
      ], 6)),
      (s.showText || s.$slots.default) && !s.textInside ? (r(), c("div", {
        key: 2,
        class: $(l(n).e("text")),
        style: B({ fontSize: `${l(D)}px` })
      }, [
        Z(s.$slots, "default", { percentage: s.percentage }, () => [
          s.status ? (r(), S(l(re), { key: 1 }, {
            default: I(() => [
              (r(), S(ge(l(R))))
            ]),
            _: 1
          })) : (r(), c("span", { key: 0 }, i(l(F)), 1))
        ])
      ], 6)) : _("v-if", !0)
    ], 10, ["aria-valuenow"]));
  }
});
var ze = /* @__PURE__ */ te(ke, [["__file", "progress.vue"]]);
const Ce = de(ze), xe = ["disabled"], Se = {
  key: 0,
  class: "custom-button__loading"
}, Te = /* @__PURE__ */ O({
  name: "CustomButton",
  __name: "CustomButton",
  props: {
    type: {
      type: String,
      default: "default",
      validator: (v) => ["default", "primary", "success", "danger", "warning", "text"].includes(v)
    },
    size: {
      type: String,
      default: "",
      validator: (v) => ["", "small", "large"].includes(v)
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
  setup(v) {
    const a = v;
    return (k, n) => (r(), c("button", {
      class: $([
        "custom-button",
        `custom-button--${a.type || "default"}`,
        a.size ? `custom-button--${a.size}` : "custom-button--medium",
        { "custom-button--loading": a.loading },
        { "custom-button--circle": a.circle },
        { "custom-button--plain": a.plain }
      ]),
      disabled: v.loading || v.disabled,
      onClick: n[0] || (n[0] = (g) => k.$emit("click", g))
    }, [
      v.loading ? (r(), c("div", Se, n[1] || (n[1] = [
        t(
          "svg",
          {
            class: "custom-button__spinner",
            viewBox: "0 0 50 50"
          },
          [
            t("circle", {
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
      ]))) : _("v-if", !0),
      Z(k.$slots, "default", {}, void 0, !0)
    ], 10, xe));
  }
}), X = /* @__PURE__ */ G(Te, [["__scopeId", "data-v-9497085f"]]), Be = { class: "settings-panel" }, De = { class: "panel-header" }, Ie = { class: "panel-title" }, Me = { class: "panel-content" }, Fe = { class: "summarize-section" }, Ee = { class: "summarize-label" }, Le = { class: "summarize-label-title" }, Ne = { class: "summarize-label-desc" }, Pe = { class: "summarize-input-wrapper" }, Oe = { class: "summarize-section" }, Ve = { class: "summarize-label" }, Ae = { class: "summarize-label-title" }, We = { class: "summarize-label-desc" }, Re = { class: "summarize-input-wrapper" }, He = { class: "flex items-center gap-3" }, Je = {
  key: 0,
  class: "summarize-section"
}, Ue = { class: "summarize-label" }, Xe = { class: "summarize-label-title" }, Ze = { class: "summarize-label-desc" }, je = { class: "summarize-input-wrapper flex-col !items-start" }, qe = { class: "w-full space-y-2" }, Ke = { class: "w-5 text-center" }, Qe = {
  key: 0,
  class: "text-green-500 text-base"
}, Ye = {
  key: 1,
  class: "text-red-500 text-base"
}, Ge = {
  key: 2,
  class: "text-yellow-500 text-base"
}, et = {
  key: 3,
  class: "text-panel-text-secondary text-base"
}, tt = ["title"], st = { class: "w-16 text-right text-xs text-panel-text-secondary" }, at = { class: "w-24" }, nt = {
  key: 1,
  class: "text-green-500 text-xs"
}, ot = {
  key: 2,
  class: "text-red-500 text-xs"
}, lt = {
  key: 3,
  class: "text-panel-text-secondary text-xs"
}, it = {
  key: 1,
  class: "summarize-section !mt-2"
}, rt = { class: "summarize-label" }, dt = { class: "summarize-label-title" }, ct = { class: "summarize-label-desc" }, ut = { class: "summarize-input-wrapper" }, pt = { class: "model-info-card" }, ft = { class: "info-row" }, vt = { class: "info-item" }, mt = { class: "info-label" }, ht = { class: "info-item" }, _t = { class: "info-label" }, gt = { class: "info-value" }, yt = { class: "info-item" }, bt = { class: "info-label" }, wt = { class: "info-value" }, $t = { class: "summarize-section !mt-2" }, kt = { class: "summarize-label" }, zt = { class: "summarize-label-title" }, Ct = { class: "summarize-label-desc" }, xt = { class: "summarize-input-wrapper" }, St = { class: "usage-tips" }, Tt = { class: "tip-item" }, Bt = { class: "tip-text" }, Dt = { class: "tip-item" }, It = { class: "tip-text" }, Mt = { class: "tip-item" }, Ft = { class: "tip-text" }, Et = { class: "tip-item" }, Lt = { class: "tip-text" }, Nt = /* @__PURE__ */ O({
  name: "Translation",
  __name: "index",
  setup(v) {
    const { t: a } = ce(), k = x("bing"), n = x(!1), g = x(!1), m = x({ isCached: !1, cacheType: "none" }), h = x(!1), T = x(!1), w = x([]), y = p(() => m.value.isCached), M = p(() => [
      { value: "google", label: a("translation.google") },
      { value: "bing", label: a("translation.bing") },
      { value: "offline", label: a("translation.offline") }
    ]), V = p(() => h.value ? a("translation.modelLoading") : n.value ? a("translation.modelReady") : y.value && g.value ? a("translation.modelActivated") : y.value ? a("translation.modelCached") : a("translation.modelNotLoaded")), A = p(() => h.value ? "text-yellow-500" : n.value || y.value && g.value ? "text-green-500" : y.value ? "text-blue-500" : "text-panel-text-secondary"), W = p(() => n.value || y.value), R = () => {
      const e = he();
      w.value = e.map((o) => ({
        file: o.name,
        progress: 0,
        status: "pending",
        size: o.size
      }));
    }, D = (e, o, d) => {
      const b = w.value.find((L) => e.includes(L.file) || L.file.includes(e));
      b && (b.progress = o, b.status = d);
    }, F = async (e) => {
      try {
        await z("set_translation_engine", { engine: e }), C.msg(a("translation.engineSaved"));
      } catch (o) {
        u.info("Failed to save translation engine:", o), C.msg(a("translation.engineSaveFailed"), "error");
      }
    }, H = async () => {
      u.info("[翻译设置] 开始下载离线模型..."), h.value = !0, R(), q((e) => {
        const o = e.file || "";
        e.status === "initiate" ? D(o, 0, "downloading") : e.status === "progress" && e.progress !== void 0 ? D(o, Math.round(e.progress), "downloading") : e.status === "done" && D(o, 100, "done");
      });
      try {
        await j(), w.value.forEach((e) => {
          e.status !== "done" && (e.status = "done"), e.progress = 100;
        }), n.value = !0, g.value = !0, m.value = await N(), u.info("[翻译设置] 模型下载并加载成功，更新后端激活状态为 true"), await z("set_offline_model_activated", { activated: !0 }), C.msg(a("translation.modelLoadSuccess"));
      } catch (e) {
        u.error("[翻译设置] 模型下载失败:", e), w.value.forEach((o) => {
          (o.status === "downloading" || o.status === "pending") && (o.status = "error");
        }), n.value = !1, C.msg(e instanceof Error ? e.message : a("translation.modelLoadFailed"), "error");
      } finally {
        h.value = !1, q(null), n.value = P(), m.value = await N(), u.info(`[翻译设置] 最终状态 - 内存加载: ${n.value}, 缓存存在: ${m.value.isCached}`);
      }
    }, E = async () => {
      u.info("[翻译设置] 开始激活离线模型..."), h.value = !0;
      try {
        await j(), n.value = !0, g.value = !0, u.info("[翻译设置] 模型激活成功，更新后端激活状态为 true"), await z("set_offline_model_activated", { activated: !0 }), C.msg(a("translation.modelLoadSuccess"));
      } catch (e) {
        u.error("[翻译设置] 模型激活失败:", e), n.value = !1, C.msg(e instanceof Error ? e.message : a("translation.modelLoadFailed"), "error");
      } finally {
        h.value = !1, n.value = P(), u.info(`[翻译设置] 激活后状态 - 内存加载: ${n.value}`);
      }
    }, s = async () => {
      u.info("[翻译设置] 开始删除离线模型..."), T.value = !0;
      try {
        await ve(), await me(), n.value = !1, g.value = !1, m.value = { isCached: !1, cacheType: "none" }, u.info("[翻译设置] 模型删除成功，更新后端激活状态为 false"), await z("set_offline_model_activated", { activated: !1 }), C.msg(a("translation.modelDeleted"));
      } catch (e) {
        u.error("[翻译设置] 模型删除失败:", e), C.msg(a("translation.modelDeleteFailed"), "error");
      } finally {
        T.value = !1, n.value = P(), m.value = await N(), u.info(`[翻译设置] 删除后状态 - 内存加载: ${n.value}, 缓存存在: ${m.value.isCached}`);
      }
    };
    return ye(async () => {
      u.info("[翻译设置] 页面初始化...");
      try {
        const d = await z("get_translation_engine");
        u.info(`[翻译设置] 从后端获取翻译引擎: ${d}`), d && ["google", "bing", "offline"].includes(d) && (k.value = d);
      } catch (d) {
        u.error("[翻译设置] 获取翻译引擎失败:", d);
      }
      const e = P(), o = ue();
      m.value = await N(), u.info(`[翻译设置] 前端状态 - 内存加载: ${e}, 正在初始化: ${o}, 缓存存在: ${m.value.isCached}`), n.value = e, h.value = o;
      try {
        const d = await z("get_offline_model_activated");
        u.info(`[翻译设置] 后端激活状态: ${d}`), g.value = d, d && !m.value.isCached && (u.info("[翻译设置] 后端已激活但缓存不存在，重置后端状态"), await z("set_offline_model_activated", { activated: !1 }), g.value = !1), !d && e && (u.info("[翻译设置] 内存已加载但后端未标记，同步后端状态为 true"), await z("set_offline_model_activated", { activated: !0 }), g.value = !0);
      } catch (d) {
        u.error("[翻译设置] 处理激活状态失败:", d);
      }
    }), (e, o) => {
      const d = fe, b = pe, L = Ce;
      return r(), c("div", Be, [
        _(" 固定标题 "),
        t("div", De, [
          t(
            "h3",
            Ie,
            i(e.$t("translation.title")),
            1
            /* TEXT */
          )
        ]),
        _(" 可滚动内容 "),
        t("main", Me, [
          _(" 默认翻译引擎 "),
          t("section", Fe, [
            t("div", Ee, [
              t(
                "div",
                Le,
                i(e.$t("translation.defaultEngine")),
                1
                /* TEXT */
              ),
              t(
                "div",
                Ne,
                i(e.$t("translation.defaultEngineDesc")),
                1
                /* TEXT */
              )
            ]),
            t("div", Pe, [
              be(b, {
                class: "summarize-input !w-36",
                modelValue: k.value,
                "onUpdate:modelValue": o[0] || (o[0] = (f) => k.value = f),
                onChange: F
              }, {
                default: I(() => [
                  (r(!0), c(
                    Q,
                    null,
                    Y(M.value, (f) => (r(), S(d, {
                      key: f.value,
                      label: f.label,
                      value: f.value
                    }, null, 8, ["label", "value"]))),
                    128
                    /* KEYED_FRAGMENT */
                  ))
                ]),
                _: 1
                /* STABLE */
              }, 8, ["modelValue"])
            ])
          ]),
          _(" 离线翻译模型 "),
          t("section", Oe, [
            t("div", Ve, [
              t(
                "div",
                Ae,
                i(e.$t("translation.offlineModel")),
                1
                /* TEXT */
              ),
              t(
                "div",
                We,
                i(e.$t("translation.offlineModelDesc")),
                1
                /* TEXT */
              )
            ]),
            t("div", Re, [
              t("div", He, [
                t(
                  "span",
                  {
                    class: $(["text-sm font-medium", A.value])
                  },
                  i(V.value),
                  3
                  /* TEXT, CLASS */
                ),
                !y.value && !h.value ? (r(), S(l(X), {
                  key: 0,
                  type: "primary",
                  size: "small",
                  onClick: H
                }, {
                  default: I(() => [
                    U(
                      i(e.$t("translation.loadModel")),
                      1
                      /* TEXT */
                    )
                  ]),
                  _: 1
                  /* STABLE */
                })) : _("v-if", !0),
                y.value && !n.value && !g.value && !h.value ? (r(), S(l(X), {
                  key: 1,
                  type: "primary",
                  size: "small",
                  onClick: E
                }, {
                  default: I(() => [
                    U(
                      i(e.$t("translation.activateModel")),
                      1
                      /* TEXT */
                    )
                  ]),
                  _: 1
                  /* STABLE */
                })) : _("v-if", !0),
                y.value && !h.value ? (r(), S(l(X), {
                  key: 2,
                  type: "default",
                  size: "small",
                  onClick: s,
                  loading: T.value
                }, {
                  default: I(() => [
                    U(
                      i(e.$t("translation.deleteModel")),
                      1
                      /* TEXT */
                    )
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["loading"])) : _("v-if", !0)
              ])
            ])
          ]),
          _(" 多文件下载进度（独立区块） "),
          h.value ? (r(), c("section", Je, [
            t("div", Ue, [
              t(
                "div",
                Xe,
                i(e.$t("translation.downloadProgress")),
                1
                /* TEXT */
              ),
              t(
                "div",
                Ze,
                i(e.$t("translation.downloadProgressDesc")),
                1
                /* TEXT */
              )
            ]),
            t("div", je, [
              t("div", qe, [
                (r(!0), c(
                  Q,
                  null,
                  Y(w.value, (f) => (r(), c("div", {
                    key: f.file,
                    class: "flex items-center gap-3 py-1"
                  }, [
                    t("span", Ke, [
                      f.status === "done" ? (r(), c("span", Qe, "✓")) : f.status === "error" ? (r(), c("span", Ye, "✗")) : f.status === "downloading" ? (r(), c("span", Ge, "↓")) : (r(), c("span", et, "○"))
                    ]),
                    t("span", {
                      class: "w-64 truncate text-sm text-panel-text-secondary",
                      title: f.file
                    }, i(f.file), 9, tt),
                    t(
                      "span",
                      st,
                      i(f.size),
                      1
                      /* TEXT */
                    ),
                    t("div", at, [
                      f.status === "downloading" ? (r(), S(L, {
                        key: 0,
                        percentage: f.progress,
                        "stroke-width": 6,
                        "show-text": !0,
                        "text-inside": !1
                      }, null, 8, ["percentage"])) : f.status === "done" ? (r(), c(
                        "span",
                        nt,
                        i(e.$t("translation.completed")),
                        1
                        /* TEXT */
                      )) : f.status === "error" ? (r(), c(
                        "span",
                        ot,
                        i(e.$t("translation.failed")),
                        1
                        /* TEXT */
                      )) : (r(), c(
                        "span",
                        lt,
                        i(e.$t("translation.waiting")),
                        1
                        /* TEXT */
                      ))
                    ])
                  ]))),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ])
            ])
          ])) : _("v-if", !0),
          _(" 模型信息（仅在已缓存或已加载时显示） "),
          W.value && !h.value ? (r(), c("section", it, [
            t("div", rt, [
              t(
                "div",
                dt,
                i(e.$t("translation.modelInfo")),
                1
                /* TEXT */
              ),
              t(
                "div",
                ct,
                i(e.$t("translation.modelInfoDesc")),
                1
                /* TEXT */
              )
            ]),
            t("div", ut, [
              t("div", pt, [
                t("div", ft, [
                  t("div", vt, [
                    t(
                      "span",
                      mt,
                      i(e.$t("translation.modelName")),
                      1
                      /* TEXT */
                    ),
                    o[1] || (o[1] = t(
                      "span",
                      { class: "info-value" },
                      "Xenova/opus-mt-en-zh",
                      -1
                      /* HOISTED */
                    ))
                  ]),
                  t("div", ht, [
                    t(
                      "span",
                      _t,
                      i(e.$t("translation.modelSize")),
                      1
                      /* TEXT */
                    ),
                    t(
                      "span",
                      gt,
                      i(m.value.estimatedSize || "~300MB"),
                      1
                      /* TEXT */
                    )
                  ]),
                  t("div", yt, [
                    t(
                      "span",
                      bt,
                      i(e.$t("translation.supportLang")),
                      1
                      /* TEXT */
                    ),
                    t(
                      "span",
                      wt,
                      i(e.$t("translation.enToZh")),
                      1
                      /* TEXT */
                    )
                  ])
                ])
              ])
            ])
          ])) : _("v-if", !0),
          _(" 使用说明 "),
          t("section", $t, [
            t("div", kt, [
              t(
                "div",
                zt,
                i(e.$t("translation.usage")),
                1
                /* TEXT */
              ),
              t(
                "div",
                Ct,
                i(e.$t("translation.usageDesc")),
                1
                /* TEXT */
              )
            ]),
            t("div", xt, [
              t("div", St, [
                t("div", Tt, [
                  o[2] || (o[2] = t(
                    "span",
                    { class: "tip-icon" },
                    "•",
                    -1
                    /* HOISTED */
                  )),
                  t(
                    "span",
                    Bt,
                    i(e.$t("translation.usageTip1")),
                    1
                    /* TEXT */
                  )
                ]),
                t("div", Dt, [
                  o[3] || (o[3] = t(
                    "span",
                    { class: "tip-icon" },
                    "•",
                    -1
                    /* HOISTED */
                  )),
                  t(
                    "span",
                    It,
                    i(e.$t("translation.usageTip2")),
                    1
                    /* TEXT */
                  )
                ]),
                t("div", Mt, [
                  o[4] || (o[4] = t(
                    "span",
                    { class: "tip-icon" },
                    "•",
                    -1
                    /* HOISTED */
                  )),
                  t(
                    "span",
                    Ft,
                    i(e.$t("translation.usageTip3")),
                    1
                    /* TEXT */
                  )
                ]),
                t("div", Et, [
                  o[5] || (o[5] = t(
                    "span",
                    { class: "tip-icon" },
                    "•",
                    -1
                    /* HOISTED */
                  )),
                  t(
                    "span",
                    Lt,
                    i(e.$t("translation.usageTip4")),
                    1
                    /* TEXT */
                  )
                ])
              ])
            ])
          ])
        ])
      ]);
    };
  }
}), Vt = /* @__PURE__ */ G(Nt, [["__scopeId", "data-v-d4f245bd"]]);
export {
  Vt as default
};
