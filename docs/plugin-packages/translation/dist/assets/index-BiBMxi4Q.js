import { f as v, e as z, j as y, E as S, m as f, k as F } from "./_plugin-vue_export-helper-Dr9QzqbK.js";
import { d as E, r as h, k as V, f as C, a as N, o as T, e as c, q as e, s as n, c as m, u as i, v as k } from "./runtime-entry-BlsNyzIU.js";
import { E as I } from "./index-DTbyEtY1.js";
async function P() {
  try {
    return await v("get_attachment_config");
  } catch (d) {
    throw new Error(`获取附件配置失败: ${d}`);
  }
}
async function U(d) {
  try {
    await v("update_attachment_config", { config: d });
  } catch (o) {
    throw new Error(`更新附件配置失败: ${o}`);
  }
}
const B = { class: "settings-panel" }, A = { class: "panel-header" }, D = { class: "panel-title" }, H = { class: "panel-content" }, O = { class: "summarize-section transparent-input" }, j = { class: "summarize-label" }, q = { class: "summarize-label-title" }, L = { class: "summarize-label-desc" }, M = { class: "summarize-input-wrapper" }, x = { class: "summarize-section transparent-input" }, G = { class: "summarize-label" }, J = { class: "summarize-label-title" }, K = { class: "summarize-label-desc" }, Q = { class: "summarize-input-wrapper" }, R = { class: "summarize-section transparent-input" }, W = { class: "summarize-label" }, X = { class: "summarize-label-title" }, Y = { class: "summarize-label-desc" }, Z = { class: "summarize-input-wrapper" }, ee = { class: "preview-box" }, te = /* @__PURE__ */ E({
  name: "AttachmentSettings",
  __name: "index",
  setup(d) {
    const { t: o } = z(), s = h({
      pathTemplate: "assets/${noteFileName}/",
      filenameFormat: "snippets-code"
    }), _ = h(!1), r = h(!1), b = V(() => {
      const t = o("settings.attachment.exampleNoteName") || "示例笔记", a = w(s.value.filenameFormat);
      return s.value.pathTemplate.replace("${noteFileName}", t) + a;
    });
    function w(t) {
      const a = /* @__PURE__ */ new Date(), p = a.toISOString().slice(0, 10).replace(/-/g, ""), l = a.toTimeString().slice(0, 8).replace(/:/g, "");
      switch (t) {
        case "snippets-code":
          return `Pasted image ${p}${l}.png`;
        case "simple":
          return `image-${p}-${l}.png`;
        case "uuid":
          return `${crypto.randomUUID()}.png`;
        default:
          return "image.png";
      }
    }
    async function g() {
      if (!r.value) {
        r.value = !0;
        try {
          await U(s.value), f.msg(o("settings.attachment.configSaved"));
        } catch (t) {
          console.error("保存配置失败:", t), f.msg(o("settings.attachment.configSaveFailed"), "error");
        } finally {
          r.value = !1;
        }
      }
    }
    return C(async () => {
      _.value = !0;
      try {
        s.value = await P();
      } catch (t) {
        console.error("加载配置失败:", t);
      } finally {
        _.value = !1;
      }
    }), (t, a) => {
      const p = I, l = y, $ = S;
      return T(), N("div", B, [
        c(" 固定标题 "),
        e("div", A, [
          e(
            "h3",
            D,
            n(t.$t("settings.attachment.title")),
            1
            /* TEXT */
          )
        ]),
        c(" 可滚动内容 "),
        e("main", H, [
          c(" 附件路径模板 "),
          e("section", O, [
            e("div", j, [
              e(
                "div",
                q,
                n(t.$t("settings.attachment.pathTemplate")),
                1
                /* TEXT */
              ),
              e(
                "div",
                L,
                n(t.$t("settings.attachment.pathTemplateHint")),
                1
                /* TEXT */
              )
            ]),
            e("div", M, [
              m(p, {
                class: "summarize-input",
                modelValue: i(s).pathTemplate,
                "onUpdate:modelValue": a[0] || (a[0] = (u) => i(s).pathTemplate = u),
                placeholder: t.$t("settings.attachment.pathTemplatePlaceholder"),
                disabled: i(r),
                onBlur: g
              }, null, 8, ["modelValue", "placeholder", "disabled"])
            ])
          ]),
          c(" 文件名生成格式 "),
          e("section", x, [
            e("div", G, [
              e(
                "div",
                J,
                n(t.$t("settings.attachment.filenameFormat")),
                1
                /* TEXT */
              ),
              e(
                "div",
                K,
                n(t.$t("settings.attachment.filenameFormatHint")),
                1
                /* TEXT */
              )
            ]),
            e("div", Q, [
              m($, {
                class: "summarize-input !w-64",
                modelValue: i(s).filenameFormat,
                "onUpdate:modelValue": a[1] || (a[1] = (u) => i(s).filenameFormat = u),
                disabled: i(r),
                onChange: g
              }, {
                default: k(() => [
                  m(l, {
                    label: t.$t("settings.attachment.formatObsidian"),
                    value: "obsidian"
                  }, null, 8, ["label"]),
                  m(l, {
                    label: t.$t("settings.attachment.formatSimple"),
                    value: "simple"
                  }, null, 8, ["label"]),
                  m(l, {
                    label: t.$t("settings.attachment.formatUuid"),
                    value: "uuid"
                  }, null, 8, ["label"])
                ]),
                _: 1
                /* STABLE */
              }, 8, ["modelValue", "disabled"])
            ])
          ]),
          c(" 路径预览 "),
          e("section", R, [
            e("div", W, [
              e(
                "div",
                X,
                n(t.$t("settings.attachment.pathPreview")),
                1
                /* TEXT */
              ),
              e(
                "div",
                Y,
                n(t.$t("settings.attachment.pathPreviewHint")),
                1
                /* TEXT */
              )
            ]),
            e("div", Z, [
              e("div", ee, [
                e(
                  "code",
                  null,
                  n(i(b)),
                  1
                  /* TEXT */
                )
              ])
            ])
          ])
        ])
      ]);
    };
  }
}), ie = /* @__PURE__ */ F(te, [["__scopeId", "data-v-513a4421"]]);
export {
  ie as default
};
