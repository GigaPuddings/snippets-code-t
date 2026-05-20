import { d as k, r as T, k as d, w as u, b as c, o as f, v as a, q as m, g as _, R as s, s as n, e as D, c as N, u as r, x as b } from "./runtime-entry-DtonpMUQ.js";
import { C as x } from "./CommonDialog-Cm6GvLRI.js";
import { C as p } from "./index-B8KhMUii.js";
import { k as R } from "./_plugin-vue_export-helper-CKv_N83a.js";
const S = { class: "confirm-content" }, j = { class: "confirm-footer" }, q = /* @__PURE__ */ k({
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
  setup(g, { expose: C, emit: h }) {
    const t = g, l = h, o = T(t.modelValue), w = d(() => {
      const e = ["confirm-dialog"];
      return t.type === "warning" ? e.push("warning-dialog") : t.type === "danger" && e.push("delete-dialog"), e.join(" ");
    }), y = d(() => t.type === "danger" ? "danger" : t.type === "warning" ? "warning" : "primary");
    u(
      () => t.modelValue,
      (e) => {
        o.value = e;
      }
    ), u(o, (e) => {
      l("update:modelValue", e);
    });
    const B = () => {
      l("confirm");
    }, V = () => {
      o.value = !1, l("cancel");
    };
    return C({
      open: () => {
        o.value = !0;
      },
      close: () => {
        o.value = !1;
      }
    }), (e, i) => (f(), c(x, {
      modelValue: r(o),
      "onUpdate:modelValue": i[0] || (i[0] = (v) => b(o) ? o.value = v : null),
      title: e.title,
      width: e.width,
      center: e.center,
      "show-close": e.showClose,
      "custom-class": r(w)
    }, {
      footer: a(() => [
        m("div", j, [
          e.showCancelButton ? (f(), c(p, {
            key: 0,
            type: "default",
            onClick: V
          }, {
            default: a(() => [
              s(
                n(e.cancelText),
                1
                /* TEXT */
              )
            ]),
            _: 1
            /* STABLE */
          })) : D("v-if", !0),
          N(p, {
            type: r(y),
            loading: e.loading,
            onClick: B
          }, {
            default: a(() => [
              s(
                n(e.confirmText),
                1
                /* TEXT */
              )
            ]),
            _: 1
            /* STABLE */
          }, 8, ["type", "loading"])
        ])
      ]),
      default: a(() => [
        m("div", S, [
          _(e.$slots, "default", {}, () => [
            s(
              n(e.message),
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
}), A = /* @__PURE__ */ R(q, [["__scopeId", "data-v-a7cd89fa"]]);
export {
  A as C
};
