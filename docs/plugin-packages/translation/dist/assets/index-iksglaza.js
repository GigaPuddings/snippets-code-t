import { i as L, T as X, b as Ce, U as Z, V as le, W as _e, X as $e, Y as Ne, _ as ze, Z as Ie, u as Ge, $ as Te, a as ne, a0 as de, a1 as Ee, a2 as Pe, a3 as Fe, a4 as xe, v as fe, a5 as De, a6 as Le, a7 as Ae, w as Be, k as Se, e as Me, l as D, m as z } from "./_plugin-vue_export-helper-B5jgtIu6.js";
import { I as ke, c as w, d as J, r as U, G as Oe, k as x, w as ge, f as we, a5 as Ue, a as v, o as d, a1 as ye, e as g, u as e, ag as ie, n as B, g as ae, v as H, b as A, an as We, ac as oe, A as je, q as a, s as r, a3 as He, F as O, h as Ve, a9 as Ke, R, x as Re } from "./runtime-entry-BvVGrpa1.js";
import { C as pe } from "./index-BmPFpJt-.js";
import { u as Ze, g as Ye, s as he, a as ve, b as qe, c as Xe, d as Je } from "./useGitStatus-D6X4K1Cg.js";
import { L as Qe } from "./Loading-Ca1xHVrS.js";
import { E as et, i as tt } from "./index-DtCMfwS2.js";
import { v as be } from "./index-fE_jcCFP.js";
import { C as st } from "./CloseSmall-D0v3r6Oy.js";
const nt = ke("attention", !0, function(i) {
  return w("svg", {
    width: i.size,
    height: i.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [w("path", {
    d: "M24 44C29.5228 44 34.5228 41.7614 38.1421 38.1421C41.7614 34.5228 44 29.5228 44 24C44 18.4772 41.7614 13.4772 38.1421 9.85786C34.5228 6.23858 29.5228 4 24 4C18.4772 4 13.4772 6.23858 9.85786 9.85786C6.23858 13.4772 4 18.4772 4 24C4 29.5228 6.23858 34.5228 9.85786 38.1421C13.4772 41.7614 18.4772 44 24 44Z",
    fill: i.colors[1],
    stroke: i.colors[0],
    "stroke-width": i.strokeWidth,
    "stroke-linejoin": i.strokeLinejoin
  }, null), w("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M24 37C25.3807 37 26.5 35.8807 26.5 34.5C26.5 33.1193 25.3807 32 24 32C22.6193 32 21.5 33.1193 21.5 34.5C21.5 35.8807 22.6193 37 24 37Z",
    fill: i.colors[2]
  }, null), w("path", {
    d: "M24 12V28",
    stroke: i.colors[2],
    "stroke-width": i.strokeWidth,
    "stroke-linecap": i.strokeLinecap,
    "stroke-linejoin": i.strokeLinejoin
  }, null)]);
}), it = ke("check-one", !0, function(i) {
  return w("svg", {
    width: i.size,
    height: i.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [w("path", {
    d: "M24 44C29.5228 44 34.5228 41.7614 38.1421 38.1421C41.7614 34.5228 44 29.5228 44 24C44 18.4772 41.7614 13.4772 38.1421 9.85786C34.5228 6.23858 29.5228 4 24 4C18.4772 4 13.4772 6.23858 9.85786 9.85786C6.23858 13.4772 4 18.4772 4 24C4 29.5228 6.23858 34.5228 9.85786 38.1421C13.4772 41.7614 18.4772 44 24 44Z",
    fill: i.colors[1],
    stroke: i.colors[0],
    "stroke-width": i.strokeWidth,
    "stroke-linejoin": i.strokeLinejoin
  }, null), w("path", {
    d: "M16 24L22 30L34 18",
    stroke: i.colors[2],
    "stroke-width": i.strokeWidth,
    "stroke-linecap": i.strokeLinecap,
    "stroke-linejoin": i.strokeLinejoin
  }, null)]);
}), at = Ce({
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
  size: Ne,
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
    validator: (i) => i === null || L(i) || ["min", "max"].includes(i),
    default: null
  },
  name: String,
  placeholder: String,
  precision: {
    type: Number,
    validator: (i) => i >= 0 && i === Number.parseInt(`${i}`, 10)
  },
  validateEvent: {
    type: Boolean,
    default: !0
  },
  ...$e(["ariaLabel"])
}), lt = {
  [_e]: (i, n) => n !== i,
  blur: (i) => i instanceof FocusEvent,
  focus: (i) => i instanceof FocusEvent,
  [le]: (i) => L(i) || X(i),
  [Z]: (i) => L(i) || X(i)
}, ot = J({
  name: "ElInputNumber"
}), rt = /* @__PURE__ */ J({
  ...ot,
  props: at,
  emits: lt,
  setup(i, { expose: n, emit: u }) {
    const o = i, { t: G } = Ie(), f = Ge("input-number"), $ = U(), y = Oe({
      currentValue: o.modelValue,
      userInput: null
    }), { formItem: T } = Te(), W = x(() => L(o.modelValue) && o.modelValue <= o.min), h = x(() => L(o.modelValue) && o.modelValue >= o.max), C = x(() => {
      const t = P(o.step);
      return ne(o.precision) ? Math.max(P(o.modelValue), t) : (t > o.precision && de("InputNumber", "precision should not be less than the decimal places of step"), o.precision);
    }), E = x(() => o.controls && o.controlsPosition === "right"), b = Ee(), _ = Pe(), V = x(() => {
      if (y.userInput !== null)
        return y.userInput;
      let t = y.currentValue;
      if (X(t))
        return "";
      if (L(t)) {
        if (Number.isNaN(t))
          return "";
        ne(o.precision) || (t = t.toFixed(o.precision));
      }
      return t;
    }), I = (t, l) => {
      if (ne(l) && (l = C.value), l === 0)
        return Math.round(t);
      let c = String(t);
      const S = c.indexOf(".");
      if (S === -1 || !c.replace(".", "").split("")[S + l])
        return t;
      const te = c.length;
      return c.charAt(te - 1) === "5" && (c = `${c.slice(0, Math.max(0, te - 1))}6`), Number.parseFloat(Number(c).toFixed(l));
    }, P = (t) => {
      if (X(t))
        return 0;
      const l = t.toString(), c = l.indexOf(".");
      let S = 0;
      return c !== -1 && (S = l.length - c - 1), S;
    }, j = (t, l = 1) => L(t) ? I(t + o.step * l) : y.currentValue, M = () => {
      if (o.readonly || _.value || h.value)
        return;
      const t = Number(V.value) || 0, l = j(t);
      K(l), u(le, y.currentValue), p();
    }, Y = () => {
      if (o.readonly || _.value || W.value)
        return;
      const t = Number(V.value) || 0, l = j(t, -1);
      K(l), u(le, y.currentValue), p();
    }, Q = (t, l) => {
      const { max: c, min: S, step: k, precision: F, stepStrictly: te, valueOnClear: se } = o;
      c < S && Ae("InputNumber", "min should not be greater than max.");
      let N = Number(t);
      if (X(t) || Number.isNaN(N))
        return null;
      if (t === "") {
        if (se === null)
          return null;
        N = je(se) ? { min: S, max: c }[se] : se;
      }
      return te && (N = I(Math.round(N / k) * k, F), N !== t && l && u(Z, N)), ne(F) || (N = I(N, F)), (N > c || N < S) && (N = N > c ? c : S, l && u(Z, N)), N;
    }, K = (t, l = !0) => {
      var c;
      const S = y.currentValue, k = Q(t);
      if (!l) {
        u(Z, k);
        return;
      }
      S === k && t || (y.userInput = null, u(Z, k), S !== k && u(_e, k, S), o.validateEvent && ((c = T?.validate) == null || c.call(T, "change").catch((F) => de(F))), y.currentValue = k);
    }, re = (t) => {
      y.userInput = t;
      const l = t === "" ? null : Number(t);
      u(le, l), K(l, !1);
    }, ue = (t) => {
      const l = t !== "" ? Number(t) : "";
      (L(l) && !Number.isNaN(l) || t === "") && K(l), p(), y.userInput = null;
    }, ce = () => {
      var t, l;
      (l = (t = $.value) == null ? void 0 : t.focus) == null || l.call(t);
    }, s = () => {
      var t, l;
      (l = (t = $.value) == null ? void 0 : t.blur) == null || l.call(t);
    }, m = (t) => {
      u("focus", t);
    }, q = (t) => {
      var l, c;
      y.userInput = null, tt() && y.currentValue === null && ((l = $.value) != null && l.input) && ($.value.input.value = ""), u("blur", t), o.validateEvent && ((c = T?.validate) == null || c.call(T, "blur").catch((S) => de(S)));
    }, p = () => {
      y.currentValue !== o.modelValue && (y.currentValue = o.modelValue);
    }, ee = (t) => {
      document.activeElement === t.target && t.preventDefault();
    };
    return ge(() => o.modelValue, (t, l) => {
      const c = Q(t, !0);
      y.userInput === null && c !== l && (y.currentValue = c);
    }, { immediate: !0 }), we(() => {
      var t;
      const { min: l, max: c, modelValue: S } = o, k = (t = $.value) == null ? void 0 : t.input;
      if (k.setAttribute("role", "spinbutton"), Number.isFinite(c) ? k.setAttribute("aria-valuemax", String(c)) : k.removeAttribute("aria-valuemax"), Number.isFinite(l) ? k.setAttribute("aria-valuemin", String(l)) : k.removeAttribute("aria-valuemin"), k.setAttribute("aria-valuenow", y.currentValue || y.currentValue === 0 ? String(y.currentValue) : ""), k.setAttribute("aria-disabled", String(_.value)), !L(S) && S != null) {
        let F = Number(S);
        Number.isNaN(F) && (F = null), u(Z, F);
      }
      k.addEventListener("wheel", ee, { passive: !1 });
    }), Ue(() => {
      var t, l;
      const c = (t = $.value) == null ? void 0 : t.input;
      c?.setAttribute("aria-valuenow", `${(l = y.currentValue) != null ? l : ""}`);
    }), n({
      focus: ce,
      blur: s
    }), (t, l) => (d(), v("div", {
      class: B([
        e(f).b(),
        e(f).m(e(b)),
        e(f).is("disabled", e(_)),
        e(f).is("without-controls", !t.controls),
        e(f).is("controls-right", e(E))
      ]),
      onDragstart: oe(() => {
      }, ["prevent"])
    }, [
      t.controls ? ye((d(), v("span", {
        key: 0,
        role: "button",
        "aria-label": e(G)("el.inputNumber.decrease"),
        class: B([e(f).e("decrease"), e(f).is("disabled", e(W))]),
        onKeydown: ie(Y, ["enter"])
      }, [
        ae(t.$slots, "decrease-icon", {}, () => [
          w(e(fe), null, {
            default: H(() => [
              e(E) ? (d(), A(e(Fe), { key: 0 })) : (d(), A(e(xe), { key: 1 }))
            ]),
            _: 1
          })
        ])
      ], 42, ["aria-label", "onKeydown"])), [
        [e(be), Y]
      ]) : g("v-if", !0),
      t.controls ? ye((d(), v("span", {
        key: 1,
        role: "button",
        "aria-label": e(G)("el.inputNumber.increase"),
        class: B([e(f).e("increase"), e(f).is("disabled", e(h))]),
        onKeydown: ie(M, ["enter"])
      }, [
        ae(t.$slots, "increase-icon", {}, () => [
          w(e(fe), null, {
            default: H(() => [
              e(E) ? (d(), A(e(De), { key: 0 })) : (d(), A(e(Le), { key: 1 }))
            ]),
            _: 1
          })
        ])
      ], 42, ["aria-label", "onKeydown"])), [
        [e(be), M]
      ]) : g("v-if", !0),
      w(e(et), {
        id: t.id,
        ref_key: "input",
        ref: $,
        type: "number",
        step: t.step,
        "model-value": e(V),
        placeholder: t.placeholder,
        readonly: t.readonly,
        disabled: e(_),
        size: e(b),
        max: t.max,
        min: t.min,
        name: t.name,
        "aria-label": t.ariaLabel,
        "validate-event": !1,
        onKeydown: [
          ie(oe(M, ["prevent"]), ["up"]),
          ie(oe(Y, ["prevent"]), ["down"])
        ],
        onBlur: q,
        onFocus: m,
        onInput: re,
        onChange: ue
      }, We({
        _: 2
      }, [
        t.$slots.prefix ? {
          name: "prefix",
          fn: H(() => [
            ae(t.$slots, "prefix")
          ])
        } : void 0,
        t.$slots.suffix ? {
          name: "suffix",
          fn: H(() => [
            ae(t.$slots, "suffix")
          ])
        } : void 0
      ]), 1032, ["id", "step", "model-value", "placeholder", "readonly", "disabled", "size", "max", "min", "name", "aria-label", "onKeydown"])
    ], 42, ["onDragstart"]));
  }
});
var ut = /* @__PURE__ */ ze(rt, [["__file", "input-number.vue"]]);
const ct = Be(ut), dt = /* @__PURE__ */ J({
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
  setup(i, { emit: n }) {
    const u = i, o = n, G = () => {
      if (u.disabled) return;
      const f = !u.modelValue;
      o("update:modelValue", f), o("change", f);
    };
    return (f, $) => (d(), v(
      "div",
      {
        class: B(["custom-switch", {
          "custom-switch--active": i.modelValue,
          "custom-switch--disabled": i.disabled
        }]),
        onClick: G
      },
      [
        i.activeText || i.inactiveText ? (d(), v(
          "span",
          {
            key: 0,
            class: B(["custom-switch__text", { "custom-switch__text--active": i.modelValue }])
          },
          r(i.modelValue ? i.activeText : i.inactiveText),
          3
          /* TEXT, CLASS */
        )) : g("v-if", !0),
        $[0] || ($[0] = a(
          "div",
          { class: "custom-switch__core" },
          [
            a("div", { class: "custom-switch__handle" })
          ],
          -1
          /* HOISTED */
        ))
      ],
      2
      /* CLASS */
    ));
  }
}), me = /* @__PURE__ */ Se(dt, [["__scopeId", "data-v-09573d1e"]]), mt = { class: "confirm-header" }, gt = { class: "header-title" }, ft = { class: "confirm-body" }, yt = { class: "message-text" }, pt = {
  key: 0,
  class: "hint-list"
}, ht = { class: "confirm-footer" }, vt = /* @__PURE__ */ J({
  __name: "ConfirmChoiceDialog",
  props: {
    modelValue: { type: Boolean, default: !1 },
    title: { default: "" },
    message: { default: "" },
    primaryText: { default: "确定" },
    secondaryText: { default: "取消" },
    type: { default: "info" }
  },
  emits: ["update:modelValue", "primary", "secondary", "close"],
  setup(i, { expose: n, emit: u }) {
    const o = i, G = u, f = U(o.modelValue), $ = x(() => {
      switch (o.type) {
        case "warning":
          return "⚠";
        case "danger":
          return "!";
        default:
          return "?";
      }
    }), y = x(() => `icon-${o.type}`), T = x(() => {
      const b = o.message || "", _ = b.split(`
`).filter(Boolean), V = [];
      for (const I of _) {
        const P = I.trim();
        if (/^[•·\-]\s*/.test(P)) break;
        P && V.push(I);
      }
      return V.join(`
`) || _[0] || b;
    }), W = x(() => {
      const _ = (o.message || "").split(`
`).filter(Boolean), V = [];
      for (const I of _) {
        const j = I.trim().match(/^[•·\-]\s*(.+)$/);
        j && V.push(j[1].trim());
      }
      return V;
    });
    ge(
      () => o.modelValue,
      (b) => {
        f.value = b;
      }
    ), ge(f, (b) => {
      G("update:modelValue", b);
    });
    function h() {
      f.value = !1, G("primary");
    }
    function C() {
      f.value = !1, G("secondary");
    }
    function E() {
      f.value = !1, G("close");
    }
    return n({
      open: () => {
        f.value = !0;
      },
      close: () => {
        f.value = !1;
      }
    }), (b, _) => (d(), A(Ke, { to: "body" }, [
      w(He, { name: "confirm-fade" }, {
        default: H(() => [
          e(f) ? (d(), v("div", {
            key: 0,
            class: "confirm-overlay",
            onClick: oe(E, ["self"])
          }, [
            a(
              "div",
              {
                class: B(["confirm-dialog", [`type-${b.type}`]])
              },
              [
                g(" 顶栏 "),
                a("div", mt, [
                  a("div", gt, [
                    a(
                      "span",
                      {
                        class: B(["header-icon", e(y)])
                      },
                      r(e($)),
                      3
                      /* TEXT, CLASS */
                    ),
                    a(
                      "span",
                      null,
                      r(b.title),
                      1
                      /* TEXT */
                    )
                  ]),
                  a("button", {
                    class: "header-close",
                    onClick: E,
                    title: "×"
                  }, _[0] || (_[0] = [
                    a(
                      "span",
                      null,
                      "×",
                      -1
                      /* HOISTED */
                    )
                  ]))
                ]),
                g(" 内容区 "),
                a("div", ft, [
                  a(
                    "div",
                    yt,
                    r(e(T)),
                    1
                    /* TEXT */
                  ),
                  e(W).length ? (d(), v("div", pt, [
                    (d(!0), v(
                      O,
                      null,
                      Ve(e(W), (V, I) => (d(), v("div", {
                        key: I,
                        class: "hint-item"
                      }, [
                        _[1] || (_[1] = a(
                          "span",
                          { class: "hint-dot" },
                          null,
                          -1
                          /* HOISTED */
                        )),
                        a(
                          "span",
                          null,
                          r(V),
                          1
                          /* TEXT */
                        )
                      ]))),
                      128
                      /* KEYED_FRAGMENT */
                    ))
                  ])) : g("v-if", !0)
                ]),
                g(" 底栏 "),
                a("div", ht, [
                  b.secondaryText ? (d(), v(
                    "button",
                    {
                      key: 0,
                      class: "footer-btn secondary",
                      onClick: C
                    },
                    r(b.secondaryText),
                    1
                    /* TEXT */
                  )) : g("v-if", !0),
                  a(
                    "button",
                    {
                      class: B(["footer-btn primary", { danger: b.type === "danger" }]),
                      onClick: h
                    },
                    r(b.primaryText),
                    3
                    /* TEXT, CLASS */
                  )
                ])
              ],
              2
              /* CLASS */
            )
          ])) : g("v-if", !0)
        ]),
        _: 1
        /* STABLE */
      })
    ]));
  }
}), bt = /* @__PURE__ */ Se(vt, [["__scopeId", "data-v-e42cf928"]]);
function _t(i) {
  const n = String(i).toLowerCase();
  return n.includes("network") || n.includes("connection") || n.includes("tcp") || n.includes("无法连接") || n.includes("连接失败") || n.includes("网络") ? {
    type: "network",
    title: "网络连接失败",
    message: "无法连接到远程仓库，请检查网络连接",
    suggestions: [
      "检查网络连接是否正常",
      "确认是否需要代理才能访问 GitHub",
      "尝试使用 SSH 方式连接",
      "检查防火墙是否阻止了 Git 连接"
    ]
  } : n.includes("authentication") || n.includes("auth") || n.includes("token") || n.includes("credential") || n.includes("认证") || n.includes("权限") || n.includes("token") || n.includes("密码") || n.includes("身份验证") ? {
    type: "auth",
    title: "认证失败",
    message: "Git 认证失败，请检查 Token 是否正确",
    suggestions: [
      "确认 GitHub Personal Access Token 是否有效",
      "检查 Token 是否具有 repo 权限",
      "确认 Token 是否已过期",
      "尝试重新生成 Token 并更新设置"
    ]
  } : n.includes("conflict") || n.includes("冲突") || n.includes("merge") ? {
    type: "conflict",
    title: "合并冲突",
    message: "本地与远程存在冲突，需要手动解决",
    suggestions: [
      '点击"手动合并"逐个解决冲突',
      '或选择"强制拉取"以远程为准',
      '或选择"强制推送"以本地为准'
    ]
  } : n.includes("not found") || n.includes("repository") || n.includes("不存在") || n.includes("仓库") || n.includes("404") ? {
    type: "not_found",
    title: "仓库不存在",
    message: "远程仓库不存在或已被删除",
    suggestions: [
      "确认远程仓库 URL 是否正确",
      "检查仓库是否已被删除或重命名",
      "可以在 GitHub 上确认仓库是否存在",
      "如需重新创建仓库，请重新配置"
    ]
  } : n.includes("permission") || n.includes("access denied") || n.includes("访问被拒绝") || n.includes("权限不足") ? {
    type: "permission",
    title: "权限不足",
    message: "没有足够的权限访问或推送到此仓库",
    suggestions: [
      "确认 Token 具有仓库的写入权限",
      "检查是否被邀请加入仓库",
      "确认仓库是否是私有仓库"
    ]
  } : n.includes("git is not installed") || n.includes("git not found") || n.includes("git 未安装") || n.includes("找不到 git") ? {
    type: "git_not_installed",
    title: "Git 未安装",
    message: "系统未安装 Git，请先安装 Git",
    suggestions: [
      "下载并安装 Git: https://git-scm.com",
      "安装完成后重启应用程序",
      "确认 git 命令可以在终端中运行"
    ]
  } : n.includes("not a git repository") || n.includes("不是 git 仓库") || n.includes("不是有效的仓库") ? {
    type: "not_a_repo",
    title: "不是 Git 仓库",
    message: "当前目录不是 Git 仓库",
    suggestions: [
      "需要先初始化 Git 仓库",
      "或重新配置指向已有的 Git 仓库"
    ]
  } : n.includes("no remote") || n.includes("没有远程") || n.includes("未配置远程") ? {
    type: "no_remote",
    title: "未配置远程仓库",
    message: "未配置远程仓库地址",
    suggestions: [
      "在设置中配置远程仓库 URL",
      "确认 GitHub 仓库已创建",
      "使用 HTTPS 或 SSH 方式添加远程仓库"
    ]
  } : {
    type: "unknown",
    title: "未知错误",
    message: "发生了未知错误，请查看详细日志",
    suggestions: [
      "尝试重启应用程序",
      "检查 Git 设置是否正确",
      "查看控制台日志获取更多信息",
      "如问题持续，请提交问题反馈"
    ]
  };
}
function St(i) {
  switch (i) {
    case "network":
      return "🌐";
    case "auth":
      return "🔐";
    case "conflict":
      return "⚔️";
    case "not_found":
      return "🔍";
    case "permission":
      return "🚫";
    case "git_not_installed":
      return "📦";
    case "not_a_repo":
      return "📁";
    case "no_remote":
      return "☁️";
    default:
      return "❓";
  }
}
const kt = { class: "settings-panel" }, wt = { class: "panel-header" }, Vt = { class: "panel-title" }, Ct = { class: "panel-content" }, $t = { class: "sync-status-panel__left" }, Nt = { class: "sync-status-icon" }, zt = { class: "sync-status-info" }, It = { class: "sync-status-label" }, Gt = { class: "sync-status-detail" }, Tt = {
  key: 1,
  class: "pending-count"
}, Et = { class: "sync-status-panel__right" }, Pt = { class: "sync-pending-files-header" }, Ft = { class: "sync-pending-files-list" }, xt = { class: "file-name" }, Dt = { class: "settings-section-title" }, Lt = { class: "summarize-section" }, At = { class: "summarize-label" }, Bt = { class: "summarize-label-title" }, Mt = { class: "summarize-label-desc" }, Ot = { class: "summarize-input-wrapper" }, Ut = { class: "summarize-section" }, Wt = { class: "summarize-label" }, jt = { class: "summarize-label-title" }, Ht = { class: "summarize-label-desc" }, Kt = { class: "summarize-input-wrapper" }, Rt = { class: "summarize-section" }, Zt = { class: "summarize-label" }, Yt = { class: "summarize-label-title" }, qt = { class: "summarize-label-desc" }, Xt = { class: "summarize-input-wrapper" }, Jt = {
  key: 0,
  class: "summarize-section transparent-input"
}, Qt = { class: "summarize-label" }, es = { class: "summarize-label-title" }, ts = { class: "summarize-label-desc" }, ss = { class: "summarize-input-wrapper" }, ns = { class: "ml-2 text-sm text-panel" }, is = { class: "settings-section-title" }, as = { class: "summarize-section" }, ls = { class: "summarize-label" }, os = { class: "summarize-label-title" }, rs = { class: "summarize-label-desc" }, us = { class: "summarize-input-wrapper flex gap-2" }, vs = /* @__PURE__ */ J({
  name: "GitSync",
  __name: "index",
  setup(i) {
    const { t: n } = Me(), {
      syncState: u,
      pendingFilesCount: o,
      formattedLastSyncTime: G,
      gitStatus: f,
      refreshStatus: $,
      refreshSettings: y
    } = Ze(), T = x(() => f.value?.changed_files ? f.value.changed_files : []), W = (s) => {
      switch (s) {
        case "syncing":
          return n("settings.gitSync.status.syncing") || "同步中";
        case "synced":
          return n("settings.gitSync.status.synced") || "已同步";
        case "has_changes":
          return n("settings.gitSync.status.hasChanges") || "有待同步";
        case "error":
          return n("settings.gitSync.status.error") || "同步出错";
        case "idle":
          return n("settings.gitSync.status.idle") || "空闲";
        case "disabled":
          return n("settings.gitSync.status.ready") || "就绪";
        default:
          return n("settings.gitSync.status.ready") || "就绪";
      }
    }, h = U({
      enabled: !1,
      user_name: "",
      user_email: "",
      token: "",
      remote_url: "",
      pull_on_start: !0,
      auto_sync: !1,
      auto_sync_delay: 1
    }), C = U(!1), E = U(!1), b = U(!1), _ = U(!1), V = U({
      title: "",
      message: "",
      primaryText: "",
      secondaryText: "",
      type: "info"
    }), I = (s) => {
      const m = _t(s), q = St(m.type), p = String(s).replace(/^Error:\s*/, "");
      let ee = `${q} ${m.title}

${m.message}`;
      p && !m.message.includes(p) && (ee += `

详情: ${p.slice(0, 100)}${p.length > 100 ? "..." : ""}`), z.msg(ee, "error", "top-right"), console.group(`🔧 Git 错误解决建议 - ${m.title}`), console.log(p), console.log("建议步骤:"), m.suggestions.forEach((t, l) => {
        console.log(`${l + 1}. ${t}`);
      }), console.groupEnd();
    }, P = (s) => {
      _.value = !1;
    }, j = async () => {
      try {
        D.info("[GitSync] 开始加载 Git 设置");
        const s = await Ye();
        h.value = s, D.info("[GitSync] Git 设置加载成功", s);
      } catch (s) {
        D.error("[GitSync] 加载 Git 设置失败", s), z.msg(n("settings.gitSync.loadFailed"), "error", "top-right");
      }
    }, M = async () => {
      try {
        await Je(h.value);
      } catch (s) {
        throw D.error("[GitSync] 保存 Git 设置失败", s), s;
      }
    }, Y = async (s) => {
      C.value = !0;
      try {
        await M(), z.msg(n(s ? "settings.gitSync.enabledSuccess" : "settings.gitSync.disabledSuccess"), "success", "bottom-right");
      } catch {
        z.msg(n("settings.gitSync.saveFailed"), "error", "top-right"), h.value.enabled = !s;
      } finally {
        C.value = !1;
      }
    }, Q = async (s) => {
      C.value = !0;
      try {
        await M(), z.msg(n(s ? "settings.gitSync.pullOnStartEnabled" : "settings.gitSync.pullOnStartDisabled"), "success", "bottom-right");
      } catch {
        z.msg(n("settings.gitSync.saveFailed"), "error", "top-right"), h.value.pull_on_start = !s;
      } finally {
        C.value = !1;
      }
    }, K = async (s) => {
      C.value = !0;
      try {
        await M(), s ? await he() : await ve(), z.msg(n(s ? "settings.gitSync.autoSyncEnabled" : "settings.gitSync.autoSyncDisabled"), "success", "bottom-right");
      } catch {
        z.msg(n("settings.gitSync.saveFailed"), "error", "top-right"), h.value.auto_sync = !s;
      } finally {
        C.value = !1;
      }
    }, re = async () => {
      C.value = !0;
      try {
        await M(), h.value.auto_sync && (await ve(), await he());
      } catch {
        z.msg(n("settings.gitSync.saveFailed"), "error", "top-right");
      } finally {
        C.value = !1;
      }
    }, ue = async () => {
      D.info("[GitSync] 手动 Pull 开始"), E.value = !0;
      try {
        const s = await qe();
        s.success ? s.has_conflicts ? D.info("[GitSync] Pull 检测到冲突，由全局对话框处理") : s.files_updated === 0 ? z.msg(n("settings.gitSync.alreadyUpToDate"), "success", "bottom-right") : z.msg(n("settings.gitSync.pullSuccess", { count: s.files_updated }), "success", "bottom-right") : z.msg(n("settings.gitSync.pullFailed"), "error", "top-right");
      } catch (s) {
        D.error("[GitSync] 手动 Pull 失败", s), I(s);
      } finally {
        E.value = !1;
      }
    }, ce = async () => {
      D.info("[GitSync] 手动 Push 开始"), b.value = !0;
      try {
        const s = await Xe("Manual sync");
        s.success ? z.msg(n("settings.gitSync.pushSuccess", { count: s.files_pushed }), "success", "bottom-right") : z.msg(n("settings.gitSync.pushFailed"), "error", "top-right");
      } catch (s) {
        D.error("[GitSync] 手动 Push 失败", s), I(s);
      } finally {
        b.value = !1;
      }
    };
    return we(async () => {
      await j(), await y(), await $();
    }), (s, m) => {
      const q = ct;
      return d(), v("div", kt, [
        g(" 固定标题 "),
        a("div", wt, [
          a(
            "h3",
            Vt,
            r(s.$t("settings.gitSync.title")),
            1
            /* TEXT */
          )
        ]),
        g(" 可滚动内容 "),
        a("main", Ct, [
          g(" 当前同步状态：同面板内左右分栏 "),
          e(h).enabled ? (d(), v(
            "div",
            {
              key: 0,
              class: B(["sync-status-panel", `sync-status-panel--${e(u)}`])
            },
            [
              g(" 左侧：状态摘要 "),
              a("div", $t, [
                a("div", Nt, [
                  e(u) === "syncing" ? (d(), A(e(Qe), {
                    key: 0,
                    class: "git-sync-icon",
                    theme: "outline",
                    size: "24",
                    strokeWidth: 3
                  })) : e(u) === "synced" || e(u) === "idle" || e(u) === "disabled" ? (d(), A(e(it), {
                    key: 1,
                    theme: "outline",
                    size: "24",
                    strokeWidth: 3
                  })) : e(u) === "has_changes" ? (d(), A(e(nt), {
                    key: 2,
                    theme: "outline",
                    size: "24",
                    strokeWidth: 3
                  })) : e(u) === "error" ? (d(), A(e(st), {
                    key: 3,
                    theme: "outline",
                    size: "24",
                    strokeWidth: 3
                  })) : g("v-if", !0)
                ]),
                a("div", zt, [
                  a(
                    "div",
                    It,
                    r(W(e(u))),
                    1
                    /* TEXT */
                  ),
                  a("div", Gt, [
                    e(u) === "syncing" ? (d(), v(
                      O,
                      { key: 0 },
                      [
                        R(
                          r(s.$t("settings.gitSync.status.syncing")),
                          1
                          /* TEXT */
                        )
                      ],
                      64
                      /* STABLE_FRAGMENT */
                    )) : e(u) === "has_changes" ? (d(), v(
                      "span",
                      Tt,
                      r(e(o)) + " " + r(s.$t("settings.gitSync.status.pendingFiles")),
                      1
                      /* TEXT */
                    )) : e(u) === "synced" || e(u) === "idle" ? (d(), v(
                      O,
                      { key: 2 },
                      [
                        R(
                          r(e(G) ? `${s.$t("settings.gitSync.status.lastSync")}: ${e(G)}` : s.$t("settings.gitSync.status.waitingSync")),
                          1
                          /* TEXT */
                        )
                      ],
                      64
                      /* STABLE_FRAGMENT */
                    )) : e(u) === "error" ? (d(), v(
                      O,
                      { key: 3 },
                      [
                        R(
                          r(s.$t("settings.gitSync.status.error")),
                          1
                          /* TEXT */
                        )
                      ],
                      64
                      /* STABLE_FRAGMENT */
                    )) : e(u) === "disabled" ? (d(), v(
                      O,
                      { key: 4 },
                      [
                        R(
                          r(s.$t("settings.gitSync.status.checking")),
                          1
                          /* TEXT */
                        )
                      ],
                      64
                      /* STABLE_FRAGMENT */
                    )) : g("v-if", !0)
                  ])
                ])
              ]),
              g(" 右侧：待同步文件列表（仅在有变更时显示） "),
              e(u) === "has_changes" && e(o) > 0 ? (d(), v(
                O,
                { key: 0 },
                [
                  m[8] || (m[8] = a(
                    "div",
                    { class: "sync-status-panel__divider" },
                    null,
                    -1
                    /* HOISTED */
                  )),
                  a("div", Et, [
                    a(
                      "div",
                      Pt,
                      r(s.$t("settings.gitSync.status.pendingFilesTitle")) + " (" + r(e(o)) + ") ",
                      1
                      /* TEXT */
                    ),
                    a("div", Ft, [
                      (d(!0), v(
                        O,
                        null,
                        Ve(e(T), (p) => (d(), v("div", {
                          key: p,
                          class: "sync-pending-file-item"
                        }, [
                          a(
                            "span",
                            xt,
                            r(p),
                            1
                            /* TEXT */
                          )
                        ]))),
                        128
                        /* KEYED_FRAGMENT */
                      ))
                    ])
                  ])
                ],
                64
                /* STABLE_FRAGMENT */
              )) : g("v-if", !0)
            ],
            2
            /* CLASS */
          )) : g("v-if", !0),
          g(" 第一部分：Git 配置 "),
          a(
            "div",
            Dt,
            r(s.$t("settings.gitSync.status.section.config")),
            1
            /* TEXT */
          ),
          g(" 启用 Git 同步 "),
          a("section", Lt, [
            a("div", At, [
              a(
                "div",
                Bt,
                r(s.$t("settings.gitSync.enabled")),
                1
                /* TEXT */
              ),
              a(
                "div",
                Mt,
                r(s.$t("settings.gitSync.enabledDesc")),
                1
                /* TEXT */
              )
            ]),
            a("div", Ot, [
              w(e(me), {
                modelValue: e(h).enabled,
                "onUpdate:modelValue": m[0] || (m[0] = (p) => e(h).enabled = p),
                "active-text": s.$t("common.on"),
                "inactive-text": s.$t("common.off"),
                disabled: e(C),
                onChange: Y
              }, null, 8, ["modelValue", "active-text", "inactive-text", "disabled"])
            ])
          ]),
          g(" 同步选项（Git 必要配置在个人中心填写，此处仅保留开关与同步操作） "),
          e(h).enabled ? (d(), v(
            O,
            { key: 1 },
            [
              g(" 启动时自动拉取 "),
              a("section", Ut, [
                a("div", Wt, [
                  a(
                    "div",
                    jt,
                    r(s.$t("settings.gitSync.pullOnStart")),
                    1
                    /* TEXT */
                  ),
                  a(
                    "div",
                    Ht,
                    r(s.$t("settings.gitSync.pullOnStartDesc")),
                    1
                    /* TEXT */
                  )
                ]),
                a("div", Kt, [
                  w(e(me), {
                    modelValue: e(h).pull_on_start,
                    "onUpdate:modelValue": m[1] || (m[1] = (p) => e(h).pull_on_start = p),
                    "active-text": s.$t("common.on"),
                    "inactive-text": s.$t("common.off"),
                    disabled: e(C),
                    onChange: Q
                  }, null, 8, ["modelValue", "active-text", "inactive-text", "disabled"])
                ])
              ]),
              g(" 自动同步 "),
              a("section", Rt, [
                a("div", Zt, [
                  a(
                    "div",
                    Yt,
                    r(s.$t("settings.gitSync.autoSync")),
                    1
                    /* TEXT */
                  ),
                  a(
                    "div",
                    qt,
                    r(s.$t("settings.gitSync.autoSyncDesc")),
                    1
                    /* TEXT */
                  )
                ]),
                a("div", Xt, [
                  w(e(me), {
                    modelValue: e(h).auto_sync,
                    "onUpdate:modelValue": m[2] || (m[2] = (p) => e(h).auto_sync = p),
                    "active-text": s.$t("common.on"),
                    "inactive-text": s.$t("common.off"),
                    disabled: e(C),
                    onChange: K
                  }, null, 8, ["modelValue", "active-text", "inactive-text", "disabled"])
                ])
              ]),
              g(" 自动同步延迟（仅在启用自动同步时显示） "),
              e(h).auto_sync ? (d(), v("section", Jt, [
                a("div", Qt, [
                  a(
                    "div",
                    es,
                    r(s.$t("settings.gitSync.autoSyncDelay")),
                    1
                    /* TEXT */
                  ),
                  a(
                    "div",
                    ts,
                    r(s.$t("settings.gitSync.autoSyncDelayDesc")),
                    1
                    /* TEXT */
                  )
                ]),
                a("div", ss, [
                  w(q, {
                    modelValue: e(h).auto_sync_delay,
                    "onUpdate:modelValue": m[3] || (m[3] = (p) => e(h).auto_sync_delay = p),
                    min: 1,
                    max: 60,
                    disabled: e(C),
                    onChange: re,
                    class: "!w-32"
                  }, null, 8, ["modelValue", "disabled"]),
                  a(
                    "span",
                    ns,
                    r(s.$t("settings.gitSync.minutes")),
                    1
                    /* TEXT */
                  )
                ])
              ])) : g("v-if", !0),
              g(" 第二部分：同步操作 "),
              a(
                "div",
                is,
                r(s.$t("settings.gitSync.status.section.sync") || "同步操作"),
                1
                /* TEXT */
              ),
              g(" 手动同步按钮 "),
              a("section", as, [
                a("div", ls, [
                  a(
                    "div",
                    os,
                    r(s.$t("settings.gitSync.manualSync")),
                    1
                    /* TEXT */
                  ),
                  a(
                    "div",
                    rs,
                    r(s.$t("settings.gitSync.manualSyncDesc")),
                    1
                    /* TEXT */
                  )
                ]),
                a("div", us, [
                  w(e(pe), {
                    type: "primary",
                    size: "small",
                    loading: e(E),
                    onClick: ue
                  }, {
                    default: H(() => [
                      R(
                        r(s.$t("settings.gitSync.pull")),
                        1
                        /* TEXT */
                      )
                    ]),
                    _: 1
                    /* STABLE */
                  }, 8, ["loading"]),
                  w(e(pe), {
                    type: "primary",
                    size: "small",
                    loading: e(b),
                    onClick: ce
                  }, {
                    default: H(() => [
                      R(
                        r(s.$t("settings.gitSync.push")),
                        1
                        /* TEXT */
                      )
                    ]),
                    _: 1
                    /* STABLE */
                  }, 8, ["loading"])
                ])
              ])
            ],
            64
            /* STABLE_FRAGMENT */
          )) : g("v-if", !0)
        ]),
        g(" 自定义确认框 "),
        w(bt, {
          modelValue: e(_),
          "onUpdate:modelValue": m[4] || (m[4] = (p) => Re(_) ? _.value = p : null),
          title: e(V).title,
          message: e(V).message,
          "primary-text": e(V).primaryText,
          "secondary-text": e(V).secondaryText,
          type: e(V).type,
          onPrimary: m[5] || (m[5] = (p) => P()),
          onSecondary: m[6] || (m[6] = (p) => P()),
          onClose: m[7] || (m[7] = (p) => P())
        }, null, 8, ["modelValue", "title", "message", "primary-text", "secondary-text", "type"])
      ]);
    };
  }
});
export {
  vs as default
};
