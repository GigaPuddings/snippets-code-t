import { I as ne, c as o, d as dt, r as u, k as $, f as vt, p as gt, a as m, o as s, e as w, ac as p, B as de, q as n, u as c, s as v, b as B, y as J, F as ae, h as ve, v as R, ao as mt, n as ge } from "./runtime-entry-BlsNyzIU.js";
import { W as ht, L as me } from "./window-dvQAtw4D.js";
import { e as ft, f as L, l as h, a8 as X, m as b, I as pt, O as wt, t as yt, k as kt } from "./_plugin-vue_export-helper-Dr9QzqbK.js";
import { C as O } from "./index-9MJPpRxq.js";
import { P as Ie, a as bt, c as zt } from "./text-OzgzPSRl.js";
import { P as _t, R as Ct } from "./Redo-DhlLzEv4.js";
import { R as Lt } from "./Refresh-DNLnkWYC.js";
import { S as Te } from "./Save-B1N6L4dG.js";
import { T as he } from "./TextRecognition-CZPLpnt9.js";
import { C as Re } from "./Close-BZm-FqX6.js";
import { L as Oe } from "./Loading-wJVInPln.js";
import { C as fe } from "./Copy-BkXIxeLu.js";
import { D as De } from "./Down-BOnpDh12.js";
import { C as Ee } from "./Check-CtfmqGJw.js";
const xt = ne("minus", !1, function(l) {
  return o("svg", {
    width: l.size,
    height: l.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [o("path", {
    d: "M10.5 24L38.5 24",
    stroke: l.colors[0],
    "stroke-width": l.strokeWidth,
    "stroke-linecap": l.strokeLinecap,
    "stroke-linejoin": l.strokeLinejoin
  }, null)]);
}), St = ne("more", !1, function(l) {
  return o("svg", {
    width: l.size,
    height: l.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [o("circle", {
    cx: "12",
    cy: "24",
    r: "3",
    fill: l.colors[0]
  }, null), o("circle", {
    cx: "24",
    cy: "24",
    r: "3",
    fill: l.colors[0]
  }, null), o("circle", {
    cx: "36",
    cy: "24",
    r: "3",
    fill: l.colors[0]
  }, null)]);
}), Ne = ne("pin", !0, function(l) {
  return o("svg", {
    width: l.size,
    height: l.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [o("g", {
    "clip-path": "url(#" + l.id + "1c742167)"
  }, [o("path", {
    d: "M10.6963 17.5042C13.3347 14.8657 16.4701 14.9387 19.8781 16.8076L32.62 9.74509L31.8989 4.78683L43.2126 16.1005L38.2656 15.3907L31.1918 28.1214C32.9752 31.7589 33.1337 34.6647 30.4953 37.3032C30.4953 37.3032 26.235 33.0429 22.7171 29.525L6.44305 41.5564L18.4382 25.2461C14.9202 21.7281 10.6963 17.5042 10.6963 17.5042Z",
    fill: l.colors[1],
    stroke: l.colors[0],
    "stroke-width": l.strokeWidth,
    "stroke-linejoin": l.strokeLinejoin
  }, null)]), o("defs", null, [o("clipPath", {
    id: l.id + "1c742167"
  }, [o("rect", {
    width: "48",
    height: "48",
    fill: l.colors[2]
  }, null)])])]);
}), Mt = ne("square", !1, function(l) {
  return o("svg", {
    width: l.size,
    height: l.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [o("path", {
    d: "M39 6H9C7.34315 6 6 7.34315 6 9V39C6 40.6569 7.34315 42 9 42H39C40.6569 42 42 40.6569 42 39V9C42 7.34315 40.6569 6 39 6Z",
    fill: l.colors[1],
    stroke: l.colors[0],
    "stroke-width": l.strokeWidth
  }, null)]);
}), Pt = ["src"], $t = { class: "ocr-header" }, Wt = {
  class: "ocr-window-title",
  "data-tauri-drag-region": ""
}, It = { "data-tauri-drag-region": "" }, Tt = { class: "ocr-window-controls" }, Rt = ["title"], Ot = ["title"], Dt = ["title"], Et = ["title"], Nt = {
  class: "ocr-source-thumb",
  "data-tauri-drag-region": ""
}, At = ["src"], Ft = {
  class: "ocr-source-meta",
  "data-tauri-drag-region": ""
}, Bt = {
  class: "ocr-source-name",
  "data-tauri-drag-region": ""
}, Ht = {
  class: "ocr-source-status",
  "data-tauri-drag-region": ""
}, jt = { "data-tauri-drag-region": "" }, Kt = { "data-tauri-drag-region": "" }, Ut = {
  key: 0,
  class: "ocr-status-check",
  "data-tauri-drag-region": ""
}, Vt = ["title"], Zt = { class: "ocr-reading-surface" }, qt = {
  key: 0,
  class: "ocr-original-image"
}, Yt = ["src"], Gt = {
  key: 0,
  class: "ocr-state"
}, Jt = {
  key: 1,
  class: "ocr-state error"
}, Xt = {
  key: 2,
  class: "ocr-state muted"
}, Qt = {
  key: 3,
  class: "ocr-text-content"
}, ea = { class: "ocr-action-bar" }, ta = { class: "translate-btn-group relative" }, aa = {
  key: 0,
  class: "translate-menu"
}, na = ["onClick"], ia = { class: "engine-label" }, oa = { class: "ocr-engine-btn-group relative" }, la = {
  key: 0,
  class: "ocr-engine-menu"
}, sa = ["onClick"], ra = { class: "engine-label" }, ca = { class: "ocr-engine-btn-group relative" }, ua = {
  key: 2,
  class: "zoom-info"
}, da = /* @__PURE__ */ dt({
  __name: "index",
  setup(l) {
    const { t: r } = ft(), pe = u(), i = u(null), x = u(""), k = u(""), y = u("pin"), d = u(""), S = u(!1), W = u(""), we = u(""), M = u(0), V = u(0), D = u({ width: 0, height: 0 }), H = u(!1), j = u(!1), E = u(!1), K = u("bing"), N = u(!1), I = u("auto"), Ae = $(() => [
      { value: "google", label: "Google", short: "G" },
      { value: "bing", label: r("translate.bingTranslate"), short: "B" },
      {
        value: "offline",
        label: r("translate.offlineTranslate"),
        short: "离"
      }
    ]), ye = $(() => [
      { value: "auto", label: r("pin.ocrLanguageAuto") },
      { value: "zh", label: r("pin.ocrLanguageZh") },
      { value: "zh-tw", label: r("pin.ocrLanguageZhTw") },
      { value: "en", label: r("pin.ocrLanguageEn") },
      { value: "ja", label: r("pin.ocrLanguageJa") },
      { value: "ko", label: r("pin.ocrLanguageKo") }
    ]), Fe = (e) => {
      const t = typeof e == "string" ? e.trim().toLowerCase() : "";
      return t === "auto" || t === "zh" || t === "zh-tw" || t === "en" || t === "ja" || t === "ko" ? t : "auto";
    }, Be = $(() => ye.value.find((e) => e.value === I.value)?.label || r("pin.ocrLanguageAuto")), Q = u(1), ee = u(!1), U = u(!1);
    let Z = null;
    const q = u(!1), ie = u({ x: 0, y: 0 }), A = u(!0), oe = u({ width: 0, height: 0 });
    let le = null, Y = 0;
    const ke = u(""), He = $(() => ({
      width: "100%",
      height: y.value === "ocr" ? "auto" : "100%",
      flex: y.value === "ocr" ? "1 1 auto" : void 0,
      minHeight: y.value === "ocr" ? "120px" : void 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden"
    })), je = $(() => ({
      width: "100%",
      height: "100%",
      objectFit: "contain"
    })), Ke = $(() => M.value > 0 && V.value > 0 ? `${M.value} × ${V.value}` : r("pin.screenshotPreview")), Ue = $(() => S.value ? r("pin.recognizing") : W.value ? r("pin.recognizeFailed") : d.value.trim() ? r("pin.recognizeSuccess") : r("pin.noTextRecognized")), Ve = $(() => d.value.split(/\n{2,}/).map((e) => e.trim()).filter(Boolean)), Ze = () => {
      const e = /* @__PURE__ */ new Date(), t = (a) => a.toString().padStart(2, "0");
      return `${r("pin.screenshotPrefix")} ${e.getFullYear()}-${t(e.getMonth() + 1)}-${t(e.getDate())} ${t(e.getHours())}.${t(e.getMinutes())}.${t(e.getSeconds())}.png`;
    }, qe = $(() => {
      const e = Math.min(
        oe.value.width,
        oe.value.height
      );
      let t = 1;
      return e < 300 && (t = Math.max(0.4, e / 300)), {
        left: `${ie.value.x}px`,
        top: `${ie.value.y}px`,
        transform: `scale(${t})`,
        transformOrigin: "top left"
      };
    }), Ye = (e) => {
      x.value = e, M.value = 0, V.value = 0, D.value = { width: 0, height: 0 }, y.value === "ocr" && (we.value = Ze()), k.value && (URL.revokeObjectURL(k.value), k.value = "");
      try {
        const t = e.split(",")[1] || e, a = e.match(/data:([^;]+);/), g = a ? a[1] : "image/png", f = atob(t), P = new Uint8Array(f.length);
        for (let C = 0; C < f.length; C++)
          P[C] = f.charCodeAt(C);
        const _ = new Blob([P], { type: g });
        k.value = URL.createObjectURL(_);
      } catch (t) {
        h.error("[PIN窗口] 转换 Blob URL 失败", t), k.value = e;
      }
    }, be = (e) => {
      if (!e?.imageData) {
        h.error("[PIN窗口] 收到的事件数据格式不正确", e);
        return;
      }
      const t = e.mode === "ocr" ? "ocr" : "pin", a = `${t}:${e.imageData.length}`;
      a !== ke.value && (ke.value = a, y.value = t, Ye(e.imageData), z(), y.value === "ocr" ? (d.value = e.text || "", W.value = "", e.text || se()) : (Y++, S.value = !1, W.value = "", d.value = ""));
    }, se = async () => {
      if (!x.value) return;
      const e = ++Y;
      S.value = !0, W.value = "";
      const t = Date.now();
      X.log("[Pin OCR] recognize start", {
        requestId: e,
        imageDataLength: x.value.length,
        imageWidth: M.value,
        imageHeight: V.value,
        language: I.value
      });
      try {
        X.log("[Pin OCR] invoking RapidOCR backend", {
          requestId: e,
          language: I.value
        });
        const a = await L("recognize_text_from_image", {
          imageData: x.value,
          engine: "rapidocr",
          language: I.value
        }), g = Ge(a);
        if (X.log("[Pin OCR] backend OCR success", {
          requestId: e,
          resultEngine: a?.engine,
          resultLanguage: a?.language,
          confidence: a?.confidence,
          blocks: Array.isArray(a?.blocks) ? a.blocks.length : 0,
          textLength: g.trim().length
        }), e !== Y) return;
        d.value = g.trim(), X.log("[Pin OCR] recognize success", {
          requestId: e,
          durationMs: Date.now() - t,
          textLength: d.value.length,
          textPreview: d.value.slice(0, 300)
        });
      } catch (a) {
        if (e !== Y) return;
        h.error("[PIN窗口] OCR 识别失败", a), X.log("[Pin OCR] recognize failed", {
          requestId: e,
          durationMs: Date.now() - t,
          error: Je(a)
        }), W.value = r("pin.recognizeFailed"), d.value = "", b.error(r("pin.recognizeFailed"));
      } finally {
        e === Y && (S.value = !1);
      }
    }, Ge = (e) => typeof e == "string" ? e : e?.text ? e.text : e?.full_text ? e.full_text : Array.isArray(e?.blocks) ? e.blocks.map((t) => t?.text).filter(Boolean).join(`
`) : "", Je = (e) => e instanceof Error ? `${e.name}: ${e.message}
${e.stack || ""}`.trim() : typeof e == "string" ? e : JSON.stringify(e) || String(e), ze = async () => {
      const e = d.value.trim();
      if (e)
        try {
          await navigator.clipboard.writeText(e), b.success(r("pin.copySuccess"));
        } catch (t) {
          h.error("[PIN窗口] 复制识别文本失败", t), b.error(r("pin.copyFailed"));
        } finally {
          z();
        }
    }, Xe = async () => {
      const e = d.value.trim();
      if (e)
        try {
          await L("save_text_to_file", { text: e }), b.success(r("pin.saveSuccess"));
        } catch (t) {
          t !== "SAVE_CANCELLED" && (h.error("[PIN窗口] 保存文本失败", t), b.error(r("pin.saveFailed")));
        }
    }, Qe = () => {
      E.value = !E.value, N.value = !1;
    }, et = (e) => {
      K.value = e, E.value = !1, L("set_translation_engine", { engine: e }).catch((t) => {
        h.error("[PIN窗口] 保存翻译引擎设置失败", t);
      });
    }, _e = () => {
      N.value = !N.value, E.value = !1;
    }, tt = (e) => {
      I.value = e, N.value = !1, L("set_ocr_language", { language: e }).catch((t) => {
        h.error("[PIN窗口] 保存 OCR 语言设置失败", t);
      }), x.value && se();
    }, at = async () => {
      if (z(), E.value = !1, N.value = !1, !d.value.trim() || j.value) return;
      const e = bt(d.value);
      if (!zt(e)) {
        b.warning(r("pin.unsupportedTranslateLanguage"));
        return;
      }
      j.value = !0;
      try {
        let t = "";
        if (K.value === "offline") {
          if ((await pt()).isCached)
            await wt();
          else
            throw new Error("离线翻译模型未下载，请在设置-翻译配置中下载模型");
          if (!await L(
            "get_offline_model_activated"
          ))
            throw new Error("离线翻译模型未激活，请在设置-翻译配置中激活模型");
          t = await yt(d.value);
        } else
          t = await L("translate_text", {
            text: d.value,
            from: "auto",
            to: "zh",
            engine: K.value
          });
        t && (d.value = t, b.success(r("pin.translateSuccess")));
      } catch (t) {
        h.error("[PIN窗口] 翻译失败", t);
        const a = t instanceof Error ? t.message : String(t);
        a !== "翻译已取消" && b.error(a || r("pin.translateFailed"));
      } finally {
        j.value = !1;
      }
    }, nt = () => {
      H.value = !H.value;
    }, it = (e) => {
      te(e);
    }, ot = async () => {
      if (!i.value) return;
      const e = i.value;
      typeof e.minimize == "function" && await e.minimize();
    }, lt = async () => {
      if (!i.value) return;
      const e = i.value;
      (typeof e.isMaximized == "function" ? await e.isMaximized() : !1) && typeof e.unmaximize == "function" ? await e.unmaximize() : typeof e.maximize == "function" && await e.maximize();
    }, Ce = async (e) => {
      const t = e.target;
      if (M.value = t.naturalWidth, V.value = t.naturalHeight, i.value && D.value.width === 0)
        try {
          const a = await i.value.innerSize(), g = await i.value.scaleFactor(), f = a.toLogical(g);
          D.value = {
            width: f.width,
            height: f.height
          };
        } catch (a) {
          h.error("[PIN窗口] 获取窗口初始尺寸失败", a);
        }
    }, Le = async (e) => {
      if (e.ctrlKey && (e.preventDefault(), e.stopPropagation(), !U.value && i.value)) {
        U.value = !0;
        try {
          const a = (await i.value.innerSize()).toLogical(
            await i.value.scaleFactor()
          ), g = e.deltaY > 0 ? 0.95 : 1.05, f = a.width, P = a.height, _ = Math.round(f * g), C = Math.round(P * g), G = 50, T = 3e3;
          if (_ >= G && _ <= T && C >= G && C <= T) {
            if (await i.value.setSize(new me(_, C)), M.value > 0) {
              const F = Math.round(
                _ / M.value * 100
              );
              Q.value = F / 100;
            }
            ee.value = !0, re();
          }
        } catch (t) {
          h.error("[PIN窗口] 窗口缩放失败", t);
        } finally {
          setTimeout(() => {
            U.value = !1;
          }, 100);
        }
      }
    }, st = (e) => {
      y.value === "ocr" && e.ctrlKey && Le(e);
    }, re = () => {
      ee.value = !0, Z && clearTimeout(Z), Z = setTimeout(() => {
        ee.value = !1;
      }, 1e3);
    }, te = (e) => {
      e.preventDefault(), e.stopPropagation(), q.value = !1, setTimeout(() => {
        const t = window.innerWidth, a = window.innerHeight;
        oe.value = { width: t, height: a };
        const g = Math.min(t, a);
        let f = 1;
        g < 300 && (f = Math.max(0.4, g / 300));
        const P = y.value === "ocr" ? 176 : 150, _ = y.value === "ocr" && d.value.trim() ? 222 : 180, C = P * f, G = _ * f;
        let T = e.clientX, F = e.clientY;
        T + C > t && (T = t - C - 5), F + G > a && (F = a - G - 5), T = Math.max(5, T), F = Math.max(5, F), ie.value = { x: T, y: F }, q.value = !0;
      }, 10);
    }, z = () => {
      q.value = !1, E.value = !1, N.value = !1;
    }, xe = async () => {
      i.value && (A.value = !A.value, await i.value.setAlwaysOnTop(A.value), z());
    }, Se = async (e) => {
      if (i.value && !U.value) {
        U.value = !0;
        try {
          const a = (await i.value.innerSize()).toLogical(
            await i.value.scaleFactor()
          ), g = Math.round(a.width * e), f = Math.round(a.height * e), P = 50, _ = 3e3;
          g >= P && g <= _ && f >= P && f <= _ && (await i.value.setSize(new me(g, f)), M.value > 0 && (Q.value = g / M.value), re());
        } catch (t) {
          h.error("[PIN窗口] 键盘缩放失败", t);
        } finally {
          setTimeout(() => {
            U.value = !1;
          }, 100);
        }
      }
    }, Me = async () => {
      if (i.value && D.value.width > 0 && D.value.height > 0)
        try {
          await i.value.setSize(
            new me(
              D.value.width,
              D.value.height
            )
          ), Q.value = 1, re();
        } catch (e) {
          h.error("[PIN窗口] 重置缩放失败", e);
        }
      z();
    }, rt = async () => {
      try {
        const e = x.value;
        z(), i.value && await i.value.hide(), await L("copy_image_to_clipboard", { imageData: e }), b.success(r("pin.copySuccess")), i.value && await i.value.close();
      } catch (e) {
        h.error("[PIN窗口] 复制图片失败", e), b.error(r("pin.copyFailed")), i.value && await i.value.close();
      }
    }, ct = async () => {
      const e = x.value;
      z(), i.value && await i.value.hide();
      try {
        await L("save_pin_image", { imageData: e }), b.success(r("pin.saveSuccess")), i.value && await i.value.close();
      } catch (t) {
        t === "SAVE_CANCELLED" ? (h.info("[PIN窗口] 用户取消保存，恢复窗口显示"), i.value && await i.value.show()) : (h.error("[PIN窗口] 保存图片失败", t), b.error(r("pin.saveFailed")), i.value && await i.value.close());
      }
    }, ce = async () => {
      i.value && await i.value.close();
    }, Pe = (e) => {
      e.preventDefault();
    }, ue = async (e) => {
      if (e.button === 0 && i.value) {
        const t = e.target;
        if (t.hasAttribute("data-tauri-drag-region") || t.closest("[data-tauri-drag-region]")) {
          if (t.closest("button") || t.closest(".ocr-view-original"))
            return;
          try {
            await i.value.startDragging();
          } catch (a) {
            h.error("[PIN窗口] 拖拽窗口失败", a);
          }
        }
      }
    }, $e = (e) => {
      const t = e.target;
      !t.closest(".context-menu") && !t.closest(".ocr-engine-btn-group") && z();
    }, We = (e) => {
      if (e.altKey && e.code === "Space") {
        e.preventDefault(), e.stopPropagation();
        return;
      }
      e.key === "Escape" ? q.value ? z() : ce() : (e.ctrlKey || e.metaKey) && (e.key === "0" ? (e.preventDefault(), Me()) : e.key === "=" || e.key === "+" ? (e.preventDefault(), Se(1.05)) : e.key === "-" && (e.preventDefault(), Se(0.95)));
    }, ut = async () => {
      if (i.value)
        try {
          const e = await L(
            "get_pin_window_data",
            { label: i.value.label }
          );
          e && be(e);
        } catch (e) {
          h.error("[PIN窗口] 主动获取窗口数据失败", e);
        }
    };
    return vt(async () => {
      if (pe.value) {
        try {
          const [e, t] = await Promise.all([
            L("get_translation_engine"),
            L("get_ocr_language")
          ]);
          (e === "google" || e === "bing" || e === "offline") && (K.value = e), I.value = Fe(t);
        } catch (e) {
          h.error("[PIN窗口] 读取默认 OCR/翻译设置失败", e);
        }
        try {
          i.value = ht.getCurrent();
          try {
            le = await i.value.listen(
              "pin-window-data",
              (e) => {
                be(e.payload);
              }
            ), await ut();
          } catch (e) {
            h.error("[PIN窗口] 设置事件监听失败", e);
          }
        } catch (e) {
          if (h.error("[PIN窗口] 初始化错误", e), i.value)
            try {
              await i.value.show();
            } catch (t) {
              h.error("[PIN窗口] 显示窗口失败", t);
            }
        }
        document.addEventListener("click", $e), document.addEventListener("keydown", We, !0), document.addEventListener("contextmenu", Pe, !0), window.addEventListener("blur", z), document.body && (document.body.oncontextmenu = (e) => (e.preventDefault(), !1));
      }
    }), gt(() => {
      k.value && URL.revokeObjectURL(k.value), le && le(), document.removeEventListener("click", $e), document.removeEventListener("keydown", We, !0), document.removeEventListener("contextmenu", Pe, !0), window.removeEventListener("blur", z), document.body && (document.body.oncontextmenu = null), Z && clearTimeout(Z);
    }), (e, t) => (s(), m(
      "div",
      {
        class: ge(["pin-container", { "ocr-mode": y.value === "ocr" }]),
        ref_key: "containerRef",
        ref: pe,
        onContextmenu: p(te, ["prevent"]),
        onWheelCapture: st
      },
      [
        w(" 图片容器 "),
        k.value && y.value === "pin" ? (s(), m(
          "div",
          {
            key: 0,
            class: "image-wrapper",
            style: de(He.value),
            onWheelCapture: Le,
            onContextmenu: p(te, ["prevent"]),
            "data-tauri-drag-region": "",
            onMousedown: ue
          },
          [
            n("img", {
              src: k.value,
              alt: "贴图",
              style: de(je.value),
              onLoad: Ce,
              draggable: "false",
              "data-tauri-drag-region": ""
            }, null, 44, Pt)
          ],
          36
          /* STYLE, NEED_HYDRATION */
        )) : w("v-if", !0),
        y.value === "ocr" ? (s(), m(
          "section",
          {
            key: 1,
            class: "ocr-shell",
            onContextmenu: p(te, ["prevent"])
          },
          [
            n("header", $t, [
              n(
                "div",
                {
                  class: "ocr-titlebar",
                  "data-tauri-drag-region": "",
                  onMousedown: ue
                },
                [
                  n("div", Wt, [
                    o(c(he), {
                      theme: "outline",
                      size: "18"
                    }),
                    n(
                      "span",
                      It,
                      v(e.$t("pin.ocrResult")),
                      1
                      /* TEXT */
                    )
                  ]),
                  n("div", Tt, [
                    n("button", {
                      class: "ocr-window-btn",
                      title: A.value ? e.$t("pin.togglePin") : e.$t("pin.pinWindow"),
                      onClick: p(xe, ["stop"])
                    }, [
                      (s(), B(J(A.value ? c(Ie) : c(Ne)), {
                        size: "18",
                        theme: "outline"
                      }))
                    ], 8, Rt),
                    t[0] || (t[0] = n(
                      "span",
                      { class: "ocr-window-divider" },
                      null,
                      -1
                      /* HOISTED */
                    )),
                    n("button", {
                      class: "ocr-window-btn",
                      title: e.$t("pin.minimize"),
                      onClick: p(ot, ["stop"])
                    }, [
                      o(c(xt), {
                        size: "18",
                        theme: "outline"
                      })
                    ], 8, Ot),
                    n("button", {
                      class: "ocr-window-btn",
                      title: e.$t("pin.maximize"),
                      onClick: p(lt, ["stop"])
                    }, [
                      o(c(Mt), {
                        size: "14",
                        theme: "outline",
                        strokeWidth: 5
                      })
                    ], 8, Dt),
                    n("button", {
                      class: "ocr-window-btn",
                      title: e.$t("pin.close"),
                      onClick: p(ce, ["stop"])
                    }, [
                      o(c(Re), {
                        size: "14",
                        theme: "outline",
                        strokeWidth: 6
                      })
                    ], 8, Et)
                  ])
                ],
                32
                /* NEED_HYDRATION */
              ),
              n(
                "div",
                {
                  class: "ocr-source-card",
                  "data-tauri-drag-region": "",
                  onMousedown: ue
                },
                [
                  n("div", Nt, [
                    k.value ? (s(), m("img", {
                      key: 0,
                      src: k.value,
                      alt: "OCR preview",
                      onLoad: Ce,
                      draggable: "false"
                    }, null, 40, At)) : w("v-if", !0)
                  ]),
                  n("div", Ft, [
                    n(
                      "div",
                      Bt,
                      v(we.value),
                      1
                      /* TEXT */
                    ),
                    n("div", Ht, [
                      n(
                        "span",
                        jt,
                        v(Ke.value),
                        1
                        /* TEXT */
                      ),
                      t[1] || (t[1] = n(
                        "span",
                        {
                          class: "ocr-status-separator",
                          "data-tauri-drag-region": ""
                        },
                        null,
                        -1
                        /* HOISTED */
                      )),
                      n(
                        "span",
                        Kt,
                        v(Ue.value),
                        1
                        /* TEXT */
                      ),
                      !S.value && !W.value && d.value.trim() ? (s(), m("span", Ut, " ✓ ")) : w("v-if", !0)
                    ])
                  ]),
                  n("button", {
                    class: "ocr-view-original",
                    title: H.value ? e.$t("pin.viewResult") : e.$t("pin.viewOriginal"),
                    onClick: p(nt, ["stop"])
                  }, [
                    (s(), B(J(H.value ? c(he) : c(_t)), {
                      size: "24",
                      theme: "outline",
                      strokeWidth: 2.6
                    })),
                    n(
                      "span",
                      null,
                      v(H.value ? e.$t("pin.viewResult") : e.$t("pin.viewOriginal")),
                      1
                      /* TEXT */
                    )
                  ], 8, Vt)
                ],
                32
                /* NEED_HYDRATION */
              )
            ]),
            n("main", Zt, [
              H.value ? (s(), m("div", qt, [
                n("img", {
                  src: k.value || x.value,
                  alt: "original"
                }, null, 8, Yt)
              ])) : (s(), m(
                ae,
                { key: 1 },
                [
                  S.value ? (s(), m("div", Gt, [
                    o(c(Oe), {
                      class: "ocr-loading-icon",
                      size: "20",
                      theme: "outline",
                      strokeWidth: 3
                    }),
                    n(
                      "span",
                      null,
                      v(e.$t("pin.recognizing")),
                      1
                      /* TEXT */
                    )
                  ])) : W.value ? (s(), m(
                    "div",
                    Jt,
                    v(W.value),
                    1
                    /* TEXT */
                  )) : d.value.trim() ? (s(), m("div", Qt, [
                    (s(!0), m(
                      ae,
                      null,
                      ve(Ve.value, (a, g) => (s(), m(
                        "p",
                        { key: g },
                        v(a),
                        1
                        /* TEXT */
                      ))),
                      128
                      /* KEYED_FRAGMENT */
                    ))
                  ])) : (s(), m(
                    "div",
                    Xt,
                    v(e.$t("pin.noTextRecognized")),
                    1
                    /* TEXT */
                  ))
                ],
                64
                /* STABLE_FRAGMENT */
              ))
            ]),
            n("footer", ea, [
              o(O, {
                class: "ocr-action-btn",
                type: "text",
                title: e.$t("pin.copyText"),
                disabled: !d.value.trim(),
                onClick: p(ze, ["stop"])
              }, {
                default: R(() => [
                  o(c(fe), {
                    size: "22",
                    theme: "outline",
                    strokeWidth: 2.7
                  }),
                  n(
                    "span",
                    null,
                    v(e.$t("pin.copyText")),
                    1
                    /* TEXT */
                  )
                ]),
                _: 1
                /* STABLE */
              }, 8, ["title", "disabled"]),
              n("div", ta, [
                o(O, {
                  class: "ocr-action-btn translate-main",
                  type: "text",
                  title: e.$t("pin.translate"),
                  disabled: !d.value.trim() || j.value,
                  onClick: p(at, ["stop"])
                }, {
                  default: R(() => [
                    j.value ? (s(), B(c(Oe), {
                      key: 1,
                      class: "ocr-loading-icon",
                      size: "22",
                      theme: "outline",
                      strokeWidth: 2.7
                    })) : (s(), B(c(mt), {
                      key: 0,
                      size: "22",
                      theme: "outline",
                      strokeWidth: 2.7
                    })),
                    n(
                      "span",
                      null,
                      v(e.$t("pin.translate")),
                      1
                      /* TEXT */
                    )
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["title", "disabled"]),
                o(O, {
                  class: "ocr-action-btn translate-arrow",
                  type: "text",
                  disabled: !d.value.trim() || j.value,
                  onClick: p(Qe, ["stop"])
                }, {
                  default: R(() => [
                    o(c(De), {
                      size: "17",
                      theme: "outline",
                      strokeWidth: 2.8
                    })
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["disabled"]),
                w(" 翻译引擎菜单 "),
                E.value ? (s(), m("div", aa, [
                  (s(!0), m(
                    ae,
                    null,
                    ve(Ae.value, (a) => (s(), m("div", {
                      key: a.value,
                      class: ge(["menu-item", { active: K.value === a.value }]),
                      onClick: (g) => et(a.value)
                    }, [
                      n(
                        "span",
                        ia,
                        v(a.label),
                        1
                        /* TEXT */
                      ),
                      K.value === a.value ? (s(), B(J(c(Ee)), {
                        key: 0,
                        class: "menu-item-icon",
                        size: "16"
                      })) : w("v-if", !0)
                    ], 10, na))),
                    128
                    /* KEYED_FRAGMENT */
                  ))
                ])) : w("v-if", !0)
              ]),
              n("div", oa, [
                o(O, {
                  class: "ocr-action-btn ocr-engine-main",
                  type: "text",
                  title: e.$t("pin.ocrLanguage"),
                  disabled: S.value,
                  onClick: p(_e, ["stop"])
                }, {
                  default: R(() => [
                    o(c(he), {
                      size: "22",
                      theme: "outline",
                      strokeWidth: 2.7
                    }),
                    n(
                      "span",
                      null,
                      v(Be.value),
                      1
                      /* TEXT */
                    )
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["title", "disabled"]),
                o(O, {
                  class: "ocr-action-btn ocr-engine-arrow",
                  type: "text",
                  disabled: S.value,
                  onClick: p(_e, ["stop"])
                }, {
                  default: R(() => [
                    o(c(De), {
                      size: "14",
                      theme: "outline",
                      strokeWidth: 3
                    })
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["disabled"]),
                N.value ? (s(), m("div", la, [
                  (s(!0), m(
                    ae,
                    null,
                    ve(ye.value, (a) => (s(), m("div", {
                      key: a.value,
                      class: ge(["menu-item", { active: I.value === a.value }]),
                      onClick: (g) => tt(a.value)
                    }, [
                      n(
                        "span",
                        ra,
                        v(a.label),
                        1
                        /* TEXT */
                      ),
                      I.value === a.value ? (s(), B(J(c(Ee)), {
                        key: 0,
                        class: "menu-item-icon",
                        size: "16"
                      })) : w("v-if", !0)
                    ], 10, sa))),
                    128
                    /* KEYED_FRAGMENT */
                  ))
                ])) : w("v-if", !0)
              ]),
              n("div", ca, [
                o(O, {
                  class: "ocr-action-btn ocr-engine-main",
                  type: "text",
                  title: e.$t("pin.recognizeAgain"),
                  disabled: S.value || !x.value,
                  onClick: p(se, ["stop"])
                }, {
                  default: R(() => [
                    o(c(Lt), {
                      size: "22",
                      theme: "outline",
                      strokeWidth: 2.7
                    }),
                    n(
                      "span",
                      null,
                      v(e.$t("pin.recognizeAgain")),
                      1
                      /* TEXT */
                    )
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["title", "disabled"])
              ]),
              o(O, {
                class: "ocr-action-btn",
                type: "text",
                title: e.$t("pin.saveAsText"),
                disabled: !d.value.trim(),
                onClick: p(Xe, ["stop"])
              }, {
                default: R(() => [
                  o(c(Te), {
                    size: "22",
                    theme: "outline",
                    strokeWidth: 2.7
                  }),
                  n(
                    "span",
                    null,
                    v(e.$t("pin.saveAsText")),
                    1
                    /* TEXT */
                  )
                ]),
                _: 1
                /* STABLE */
              }, 8, ["title", "disabled"]),
              t[2] || (t[2] = n(
                "span",
                { class: "ocr-action-divider" },
                null,
                -1
                /* HOISTED */
              )),
              o(O, {
                class: "ocr-action-btn more",
                type: "text",
                title: e.$t("pin.more"),
                onClick: p(it, ["stop"])
              }, {
                default: R(() => [
                  o(c(St), {
                    size: "22",
                    theme: "outline",
                    strokeWidth: 2.8
                  })
                ]),
                _: 1
                /* STABLE */
              }, 8, ["title"])
            ])
          ],
          32
          /* NEED_HYDRATION */
        )) : w("v-if", !0),
        ee.value ? (s(), m(
          "div",
          ua,
          v(Math.round(Q.value * 100)) + "% ",
          1
          /* TEXT */
        )) : w("v-if", !0),
        w(" 右键菜单 "),
        q.value ? (s(), m(
          "div",
          {
            key: 3,
            class: "context-menu",
            style: de(qe.value)
          },
          [
            n("div", {
              class: "menu-item",
              onClick: xe
            }, [
              (s(), B(J(A.value ? c(Ne) : c(Ie)), {
                class: "menu-item-icon",
                size: "18",
                strokeWidth: 3
              })),
              n(
                "span",
                null,
                v(A.value ? e.$t("pin.togglePin") : e.$t("pin.pinWindow")),
                1
                /* TEXT */
              )
            ]),
            n("div", {
              class: "menu-item",
              onClick: Me
            }, [
              o(c(Ct), {
                class: "menu-item-icon",
                size: "18",
                theme: "outline",
                strokeWidth: 3
              }),
              n(
                "span",
                null,
                v(e.$t("pin.resetZoom")),
                1
                /* TEXT */
              )
            ]),
            n("div", {
              class: "menu-item",
              onClick: rt
            }, [
              o(c(fe), {
                class: "menu-item-icon",
                size: "18",
                theme: "outline",
                strokeWidth: 3
              }),
              n(
                "span",
                null,
                v(e.$t("pin.copyImage")),
                1
                /* TEXT */
              )
            ]),
            n("div", {
              class: "menu-item",
              onClick: ct
            }, [
              o(c(Te), {
                class: "menu-item-icon",
                size: "18",
                theme: "outline",
                strokeWidth: 3
              }),
              n(
                "span",
                null,
                v(e.$t("pin.saveImage")),
                1
                /* TEXT */
              )
            ]),
            y.value === "ocr" && d.value.trim() ? (s(), m("div", {
              key: 0,
              class: "menu-item",
              onClick: ze
            }, [
              o(c(fe), {
                class: "menu-item-icon",
                size: "18",
                theme: "outline",
                strokeWidth: 3
              }),
              n(
                "span",
                null,
                v(e.$t("pin.copyText")),
                1
                /* TEXT */
              )
            ])) : w("v-if", !0),
            t[3] || (t[3] = n(
              "div",
              { class: "menu-divider" },
              null,
              -1
              /* HOISTED */
            )),
            n("div", {
              class: "menu-item danger",
              onClick: ce
            }, [
              o(c(Re), {
                class: "menu-item-icon",
                size: "18",
                theme: "outline",
                strokeWidth: 3
              }),
              n(
                "span",
                null,
                v(e.$t("pin.closePin")),
                1
                /* TEXT */
              )
            ])
          ],
          4
          /* STYLE */
        )) : w("v-if", !0)
      ],
      34
      /* CLASS, NEED_HYDRATION */
    ));
  }
}), xa = /* @__PURE__ */ kt(da, [["__scopeId", "data-v-b1a359dc"]]);
export {
  xa as default
};
