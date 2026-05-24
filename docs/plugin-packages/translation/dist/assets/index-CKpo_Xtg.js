import { b as re, d as ze, _ as ce, u as ue, p as Le, i as Se, a as Ve, w as Ee, c as Ue, e as $e, f as ee, l as Z, E as Me, g as je, h as $, t as Be, j as Ze, m as Ne, k as Ie } from "./_plugin-vue_export-helper-BykmhDAa.js";
import "./tooltip-l0sNRNKZ.js";
import { I as de, c as i, d as P, a as p, o as u, b as C, e as z, u as n, n as I, i as te, r as w, f as fe, w as Pe, t as We, g as ae, F as M, h as N, m as le, j as De, k as ne, l as se, p as Oe, q as c, s as G, v as x, x as H, y as Ae } from "./runtime-entry-yPFnsQUl.js";
import { g as Ge } from "./window-93h2EbbU.js";
import { d as Q, p as Re, P as Fe } from "./text-B6h9g8j8.js";
import { E as He } from "./index-CXiGhJMN.js";
import { C as Qe } from "./CloseSmall-BzhtyOZ6.js";
import { D as qe } from "./Delete-CVV7kWhu.js";
import { U as Ye } from "./Up-C_eUarUT.js";
import { D as Je } from "./Down-DN1-2Df-.js";
import { C as Ke } from "./Copy-BroIQ2HK.js";
const oe = de("switch", !0, function(t) {
  return i("svg", {
    width: t.size,
    height: t.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [i("path", {
    d: "M42 19H5.99998",
    stroke: t.colors[0],
    "stroke-width": t.strokeWidth,
    "stroke-linecap": t.strokeLinecap,
    "stroke-linejoin": t.strokeLinejoin
  }, null), i("path", {
    d: "M30 7L42 19",
    stroke: t.colors[0],
    "stroke-width": t.strokeWidth,
    "stroke-linecap": t.strokeLinecap,
    "stroke-linejoin": t.strokeLinejoin
  }, null), i("path", {
    d: "M6.79897 29H42.799",
    stroke: t.colors[0],
    "stroke-width": t.strokeWidth,
    "stroke-linecap": t.strokeLinecap,
    "stroke-linejoin": t.strokeLinejoin
  }, null), i("path", {
    d: "M6.79895 29L18.799 41",
    stroke: t.colors[0],
    "stroke-width": t.strokeWidth,
    "stroke-linecap": t.strokeLinecap,
    "stroke-linejoin": t.strokeLinejoin
  }, null)]);
}), ie = de("volume-up", !0, function(t) {
  return i("svg", {
    width: t.size,
    height: t.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [i("path", {
    d: "M24 6V42C17 42 11.7985 32.8391 11.7985 32.8391H6C4.89543 32.8391 4 31.9437 4 30.8391V17.0108C4 15.9062 4.89543 15.0108 6 15.0108H11.7985C11.7985 15.0108 17 6 24 6Z",
    fill: t.colors[1],
    stroke: t.colors[0],
    "stroke-width": t.strokeWidth,
    "stroke-linejoin": t.strokeLinejoin
  }, null), i("path", {
    d: "M32 24H44",
    stroke: t.colors[0],
    "stroke-width": t.strokeWidth,
    "stroke-linecap": t.strokeLinecap,
    "stroke-linejoin": t.strokeLinejoin
  }, null), i("path", {
    d: "M38 18V30",
    stroke: t.colors[0],
    "stroke-width": t.strokeWidth,
    "stroke-linecap": t.strokeLinecap,
    "stroke-linejoin": t.strokeLinejoin
  }, null)]);
}), Xe = re({
  animated: {
    type: Boolean,
    default: !1
  },
  count: {
    type: Number,
    default: 1
  },
  rows: {
    type: Number,
    default: 3
  },
  loading: {
    type: Boolean,
    default: !0
  },
  throttle: {
    type: ze([Number, Object])
  }
}), et = re({
  variant: {
    type: String,
    values: [
      "circle",
      "rect",
      "h1",
      "h3",
      "text",
      "caption",
      "p",
      "image",
      "button"
    ],
    default: "text"
  }
}), tt = P({
  name: "ElSkeletonItem"
}), at = /* @__PURE__ */ P({
  ...tt,
  props: et,
  setup(t) {
    const a = ue("skeleton");
    return (m, h) => (u(), p("div", {
      class: I([n(a).e("item"), n(a).e(m.variant)])
    }, [
      m.variant === "image" ? (u(), C(n(Le), { key: 0 })) : z("v-if", !0)
    ], 2));
  }
});
var R = /* @__PURE__ */ ce(at, [["__file", "skeleton-item.vue"]]);
const lt = (t, a = 0) => {
  if (a === 0)
    return t;
  const m = te(a) && !!a.initVal, h = w(m);
  let r = null;
  const o = (v) => {
    if (Ve(v)) {
      h.value = t.value;
      return;
    }
    r && clearTimeout(r), r = setTimeout(() => {
      h.value = t.value;
    }, v);
  }, f = (v) => {
    v === "leading" ? Se(a) ? o(a) : o(a.leading) : te(a) ? o(a.trailing) : h.value = !1;
  };
  return fe(() => f("leading")), Pe(() => t.value, (v) => {
    f(v ? "leading" : "trailing");
  }), h;
}, nt = P({
  name: "ElSkeleton"
}), st = /* @__PURE__ */ P({
  ...nt,
  props: Xe,
  setup(t, { expose: a }) {
    const m = t, h = ue("skeleton"), r = lt(We(m, "loading"), m.throttle);
    return a({
      uiLoading: r
    }), (o, f) => n(r) ? (u(), p("div", le({
      key: 0,
      class: [n(h).b(), n(h).is("animated", o.animated)]
    }, o.$attrs), [
      (u(!0), p(M, null, N(o.count, (v) => (u(), p(M, { key: v }, [
        n(r) ? ae(o.$slots, "template", { key: v }, () => [
          i(R, {
            class: I(n(h).is("first")),
            variant: "p"
          }, null, 8, ["class"]),
          (u(!0), p(M, null, N(o.rows, (T) => (u(), C(R, {
            key: T,
            class: I([
              n(h).e("paragraph"),
              n(h).is("last", T === o.rows && o.rows > 1)
            ]),
            variant: "p"
          }, null, 8, ["class"]))), 128))
        ]) : z("v-if", !0)
      ], 64))), 128))
    ], 16)) : ae(o.$slots, "default", De(le({ key: 1 }, o.$attrs)));
  }
});
var ot = /* @__PURE__ */ ce(st, [["__file", "skeleton.vue"]]);
const it = Ee(ot, {
  SkeletonItem: R
});
Ue(R);
const rt = "data:image/svg+xml,%3c?xml%20version='1.0'%20standalone='no'?%3e%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3csvg%20t='1680942651462'%20class='icon'%20viewBox='0%200%201024%201024'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20p-id='3789'%20data-darkreader-inline-fill=''%20xmlns:xlink='http://www.w3.org/1999/xlink'%20width='200'%20height='200'%3e%3cpath%20d='M214.101333%20512c0-32.512%205.546667-63.701333%2015.36-92.928L57.173333%20290.218667A491.861333%20491.861333%200%200%200%204.693333%20512c0%2079.701333%2018.858667%20154.88%2052.394667%20221.610667l172.202667-129.066667A290.56%20290.56%200%200%201%20214.101333%20512'%20fill='%23FBBC05'%20p-id='3790'%20data-darkreader-inline-fill=''%20style='--darkreader-inline-fill:%20%23967002;'%3e%3c/path%3e%3cpath%20d='M516.693333%20216.192c72.106667%200%20137.258667%2025.002667%20188.458667%2065.962667L854.101333%20136.533333C763.349333%2059.178667%20646.997333%2011.392%20516.693333%2011.392c-202.325333%200-376.234667%20113.28-459.52%20278.826667l172.373334%20128.853333c39.68-118.016%20152.832-202.88%20287.146666-202.88'%20fill='%23EA4335'%20p-id='3791'%20data-darkreader-inline-fill=''%20style='--darkreader-inline-fill:%20%23a71d11;'%3e%3c/path%3e%3cpath%20d='M516.693333%20807.808c-134.357333%200-247.509333-84.864-287.232-202.88l-172.288%20128.853333c83.242667%20165.546667%20257.152%20278.826667%20459.52%20278.826667%20124.842667%200%20244.053333-43.392%20333.568-124.757333l-163.584-123.818667c-46.122667%2028.458667-104.234667%2043.776-170.026666%2043.776'%20fill='%2334A853'%20p-id='3792'%20data-darkreader-inline-fill=''%20style='--darkreader-inline-fill:%20%232a8642;'%3e%3c/path%3e%3cpath%20d='M1005.397333%20512c0-29.568-4.693333-61.44-11.648-91.008H516.650667V614.4h274.602666c-13.696%2065.962667-51.072%20116.650667-104.533333%20149.632l163.541333%20123.818667c93.994667-85.418667%20155.136-212.650667%20155.136-375.850667'%20fill='%234285F4'%20p-id='3793'%20data-darkreader-inline-fill=''%20style='--darkreader-inline-fill:%20%230943a2;'%3e%3c/path%3e%3c/svg%3e", ct = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2048%2048'%20width='240px'%20height='240px'%3e%3clinearGradient%20id='ZkmZ8eVihrQTUnr9TZpNla'%20x1='11.905'%20x2='17.941'%20y1='1.952'%20y2='40.401'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%233dbffc'/%3e%3cstop%20offset='1'%20stop-color='%23183efb'/%3e%3c/linearGradient%3e%3cpath%20fill='url(%23ZkmZ8eVihrQTUnr9TZpNla)'%20d='M17.572,37.076L20,35.619V10.603c0-1.632-0.796-3.161-2.133-4.096L12.36,2.652%20C11.366,1.956,10,2.667,10,3.881V32.5c0,0.22,0.02,0.555,0.033,0.772C10.369,36.867,14.382,38.99,17.572,37.076z'/%3e%3clinearGradient%20id='ZkmZ8eVihrQTUnr9TZpNlb'%20x1='14.342'%20x2='34.121'%20y1='41.478'%20y2='25.575'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%2333bef0'/%3e%3cstop%20offset='.159'%20stop-color='%2332b9f0'/%3e%3cstop%20offset='.341'%20stop-color='%232facf2'/%3e%3cstop%20offset='.533'%20stop-color='%232a95f4'/%3e%3cstop%20offset='.733'%20stop-color='%232475f6'/%3e%3cstop%20offset='.936'%20stop-color='%231b4cfa'/%3e%3cstop%20offset='1'%20stop-color='%23183efb'/%3e%3c/linearGradient%3e%3cpath%20fill='url(%23ZkmZ8eVihrQTUnr9TZpNlb)'%20d='M32.682,27.904L20,35.5v0l-2.428,1.457c-3.191,1.915-7.203-0.209-7.54-3.804%20C10.372,38.922,15.145,43.5,21,43.5c1.963,0,3.888-0.536,5.568-1.551l6.834-4.126c0.817-0.493,1.522-1.075,2.15-1.707%20C37.906,33.415,36.739,28.669,32.682,27.904z'/%3e%3clinearGradient%20id='ZkmZ8eVihrQTUnr9TZpNlc'%20x1='24.223'%20x2='45.699'%20y1='17.113'%20y2='38.588'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%233dbffd'/%3e%3cstop%20offset='1'%20stop-color='%231de9b6'/%3e%3c/linearGradient%3e%3cpath%20fill='url(%23ZkmZ8eVihrQTUnr9TZpNlc)'%20d='M33.636,19.568l-7.607-3.803c-1.234-0.617-2.576,0.618-2.064,1.899l1.755,5.886%20c0.499,1.248,1.479,2.242,2.719,2.758L32.5,28c4.057,0.766,5.352,5.251,3.052,8.117C40.399,31.24,40.088,22.794,33.636,19.568z'/%3e%3c/svg%3e", ut = { class: "translate-window" }, dt = {
  class: "header",
  "data-tauri-drag-region": ""
}, ft = { class: "left-buttons" }, vt = {
  class: "bg-penal text-base",
  "data-tauri-drag-region": ""
}, gt = { class: "right-buttons" }, pt = { class: "translate-container transparent-input" }, ht = { class: "language-selector" }, mt = { class: "source-area" }, kt = { class: "source-actions" }, _t = { class: "source-material" }, wt = { class: "translation-results" }, bt = ["onClick"], Tt = { class: "result-title" }, yt = ["src"], xt = ["src"], Ct = {
  key: 2,
  class: "offline-icon"
}, zt = { class: "result-controls" }, Lt = {
  key: 0,
  class: "result-body"
}, St = {
  key: 1,
  class: "result-text"
}, Vt = {
  key: 2,
  class: "result-empty"
}, Et = { class: "result-actions" }, Ut = ["onClick"], $t = ["onClick"], Mt = ["onClick"], jt = /* @__PURE__ */ P({
  __name: "index",
  setup(t) {
    const { t: a } = $e(), m = Ge(), h = w(!1), r = w(""), o = w("auto"), f = w("zh"), v = w(!1), T = w(!1), j = w(), W = w(!1), L = w([
      {
        engine: "bing",
        name: "",
        text: "",
        loading: !1,
        expanded: !0
      },
      {
        engine: "google",
        name: "",
        text: "",
        loading: !1,
        expanded: !0
      },
      {
        engine: "offline",
        name: "",
        text: "",
        loading: !1,
        expanded: !0
      }
    ]), q = ne(() => L.value.filter((e) => e.engine === "offline" ? W.value : !0)), ve = (e) => e === "bing" ? a("translate.bingTranslate") : e === "google" ? a("translate.googleTranslate") : e === "offline" ? a("translate.offlineTranslate") : e, Y = ne(() => [
      { value: "auto", label: a("translate.languages.auto") },
      { value: "zh", label: a("translate.languages.zh") },
      { value: "zh_tw", label: a("translate.languages.zh_tw") },
      { value: "en", label: a("translate.languages.en") },
      { value: "ja", label: a("translate.languages.ja") },
      { value: "ko", label: a("translate.languages.ko") },
      { value: "fr", label: a("translate.languages.fr") },
      { value: "de", label: a("translate.languages.de") },
      { value: "ru", label: a("translate.languages.ru") },
      { value: "es", label: a("translate.languages.es") },
      { value: "pt_pt", label: a("translate.languages.pt_pt") },
      { value: "pt_br", label: a("translate.languages.pt_br") },
      { value: "vi", label: a("translate.languages.vi") },
      { value: "id", label: a("translate.languages.id") },
      { value: "th", label: a("translate.languages.th") },
      { value: "ar", label: a("translate.languages.ar") }
    ]);
    let b = null, S = null, B = null;
    const V = w({
      forChinese: "en",
      forEnglish: "zh"
    }), J = async () => {
      if (v.value) return;
      const e = await $("tauri://blur", () => {
        b && clearTimeout(b), b = setTimeout(async () => {
          v.value || (D(), await m.hide());
        }, 100);
      }), l = await $("tauri://focus", () => {
        b && clearTimeout(b), A();
      }), g = await $("tauri://show", () => {
        A();
      }), k = await $("tauri://move", () => {
        b && clearTimeout(b);
      }), _ = await $("selection-text", (y) => {
        y.payload && y.payload.text && ye(y.payload.text);
      }), d = await $("reset-state", () => {
        D();
      });
      S = () => {
        e(), l(), k(), _(), d(), g();
      };
    }, ge = async () => {
      v.value = !v.value, await m.setAlwaysOnTop(v.value), v.value ? S && (S(), S = null) : J();
    }, D = () => {
      r.value = "", T.value = !1, L.value.forEach((e) => {
        e.text = "", e.loading = !1;
      });
    }, pe = async () => {
      D(), await m.close();
    }, he = () => {
      o.value !== "auto" && ([o.value, f.value] = [
        f.value,
        o.value
      ], E());
    }, me = () => {
      r.value = "", L.value.forEach((e) => {
        e.text = "";
      }), T.value = !1;
    }, ke = async (e) => {
      e && (await navigator.clipboard.writeText(e), Ne.success(a("translate.copiedToClipboard")));
    }, K = (e, l) => {
      if (!e) return;
      const g = new SpeechSynthesisUtterance(e), k = l === "zh" ? "zh-CN" : l === "zh_tw" ? "zh-TW" : l === "en" ? "en-US" : l;
      g.lang = k, window.speechSynthesis.speak(g);
    }, O = () => {
      if (o.value !== "auto") return;
      const e = Q(r.value);
      e === "zh" ? f.value = V.value.forChinese : e === "en" && (f.value = V.value.forEnglish);
    }, _e = () => {
      const e = Q(r.value);
      e === "zh" ? V.value.forChinese = f.value : e === "en" && (V.value.forEnglish = f.value), E();
    }, we = async (e) => {
      const l = L.value.find((_) => _.engine === e);
      if (!l || e === "offline" && !W.value)
        return;
      l.loading = !0, l.text = "";
      const g = Re(r.value);
      let k = f.value;
      e === "bing" && k === "auto" && (k = "en");
      try {
        let _;
        if (e === "offline") {
          const { canUseOfflineTranslation: d, isModelCached: y, warmupOfflineTranslator: s } = await import("./_plugin-vue_export-helper-BykmhDAa.js").then((U) => U.bz);
          if (!d())
            if (await y())
              Z.info("[翻译窗口] 离线翻译懒加载：开始加载模型..."), await s(), Z.info("[翻译窗口] 离线翻译懒加载：模型加载完成");
            else
              throw new Error("离线翻译模型未下载，请在设置中下载模型");
          _ = await Be(g);
        } else
          _ = await ee("translate_text", {
            text: g,
            from: o.value,
            to: k,
            engine: e
          });
        l.text = _;
      } catch (_) {
        Z.error(`[翻译] ${e}翻译出错`, _);
        const d = String(_);
        d.includes("429") || d.includes("Too Many Requests") ? l.text = a("translate.tooManyRequests") : d.includes("timeout") || d.includes("超时") ? l.text = a("translate.timeout") : d.includes("network") || d.includes("网络") ? l.text = a("translate.networkError") : d.includes("未下载") || d.includes("未激活") || d.includes("运行时未安装") ? l.text = d : l.text = a("translate.translateFailed");
      } finally {
        l.loading = !1;
      }
    }, E = async () => {
      if (!r.value.trim()) {
        L.value.forEach((l) => {
          l.text = "";
        });
        return;
      }
      O(), h.value = !0;
      const e = q.value.map(
        (l) => we(l.engine)
      );
      await Promise.all(e), h.value = !1;
    }, be = (e) => {
      e.expanded = !e.expanded;
    }, Te = () => {
      T.value = !!r.value, B && clearTimeout(B), r.value.trim() ? B = setTimeout(() => {
        E();
      }, 500) : L.value.forEach((e) => {
        e.text = "";
      });
    };
    let X = "", F = !1;
    const ye = (e) => {
      e && (e === X && F || (X = e, F = !0, r.value = e, T.value = !0, O(), E().finally(() => {
        setTimeout(() => {
          F = !1;
        }, 2e3);
      }), A()));
    }, xe = (e) => {
      r.value = e.text;
      const l = Q(r.value), g = o.value, k = f.value;
      g === "auto" ? (o.value = "auto", l === "zh" ? f.value = V.value.forChinese : f.value = V.value.forEnglish) : (o.value = k, f.value = g === "auto" ? l === "zh" ? "en" : "zh" : g), E();
    }, A = () => {
      const e = (l = 0) => {
        if (!(l > 5))
          if (j.value)
            j.value.focus();
          else {
            const g = 100 * (l + 1);
            setTimeout(() => e(l + 1), g);
          }
      };
      j.value && j.value.focus(), se(() => {
        e();
      });
    }, Ce = () => {
      O(), E();
    };
    return fe(async () => {
      try {
        const e = await ee("get_offline_model_activated");
        Z.info(`[翻译窗口] 离线模型后端激活状态: ${e}`), W.value = e;
      } catch (e) {
        Z.error("[翻译窗口] 获取离线模型激活状态失败:", e), W.value = !1;
      }
      await J(), r.value.trim() && O(), A(), await se(), setTimeout(() => {
        m.emit("translate_ready");
      }, 100);
    }), Oe(() => {
      S && S(), b && clearTimeout(b), B && clearTimeout(B), D();
    }), (e, l) => {
      const g = Ze, k = Me, _ = He, d = je, y = it;
      return u(), p("main", ut, [
        c("div", dt, [
          c("div", ft, [
            c(
              "div",
              {
                onClick: ge,
                class: I(["pin-button", n(v) ? "pinned" : ""])
              },
              [
                i(n(Fe), { size: 18 })
              ],
              2
              /* CLASS */
            )
          ]),
          c(
            "div",
            vt,
            G(e.$t("translate.title")),
            1
            /* TEXT */
          ),
          c("div", gt, [
            c("div", {
              onClick: pe,
              class: "material-close"
            }, [
              i(n(Qe), { size: 22 })
            ])
          ])
        ]),
        c("div", pt, [
          z(" 语言选择区域 "),
          c("div", ht, [
            i(k, {
              modelValue: n(o),
              "onUpdate:modelValue": l[0] || (l[0] = (s) => H(o) ? o.value = s : null),
              size: "small",
              onChange: Ce,
              class: "lang-select"
            }, {
              default: x(() => [
                (u(!0), p(
                  M,
                  null,
                  N(n(Y), (s) => (u(), C(g, {
                    key: s.value,
                    label: s.label,
                    value: s.value
                  }, null, 8, ["label", "value"]))),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ]),
              _: 1
              /* STABLE */
            }, 8, ["modelValue"]),
            c("div", {
              size: "small",
              onClick: he,
              class: "swap-button"
            }, [
              i(n(oe), { size: 22 })
            ]),
            i(k, {
              modelValue: n(f),
              "onUpdate:modelValue": l[1] || (l[1] = (s) => H(f) ? f.value = s : null),
              size: "small",
              onChange: _e,
              class: "lang-select"
            }, {
              default: x(() => [
                (u(!0), p(
                  M,
                  null,
                  N(n(Y), (s) => (u(), C(g, {
                    key: s.value,
                    label: s.label,
                    value: s.value
                  }, null, 8, ["label", "value"]))),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ]),
              _: 1
              /* STABLE */
            }, 8, ["modelValue"])
          ]),
          z(" 源文本输入区域 "),
          c("div", mt, [
            i(_, {
              ref_key: "sourceTextArea",
              ref: j,
              modelValue: n(r),
              "onUpdate:modelValue": l[2] || (l[2] = (s) => H(r) ? r.value = s : null),
              type: "textarea",
              rows: 2,
              placeholder: e.$t("translate.inputPlaceholder"),
              resize: "none",
              onInput: Te,
              class: "source-textarea"
            }, null, 8, ["modelValue", "placeholder"]),
            c("div", kt, [
              c("div", _t, [
                i(d, {
                  content: e.$t("translate.speakText"),
                  placement: "top",
                  "hide-after": 1e3
                }, {
                  default: x(() => [
                    c("div", {
                      onClick: l[3] || (l[3] = (s) => K(n(r), n(o))),
                      class: "action-btn"
                    }, [
                      i(n(ie), { size: 18 })
                    ])
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["content"]),
                n(T) ? (u(), C(d, {
                  key: 0,
                  content: e.$t("translate.deleteText"),
                  placement: "top",
                  "hide-after": 1e3
                }, {
                  default: x(() => [
                    c("div", {
                      onClick: me,
                      class: "action-btn"
                    }, [
                      i(n(qe), { size: 18 })
                    ])
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["content"])) : z("v-if", !0)
              ])
            ])
          ]),
          z(" 多引擎翻译结果区域 "),
          c("div", wt, [
            (u(!0), p(
              M,
              null,
              N(n(q), (s) => (u(), p(
                "div",
                {
                  key: s.engine,
                  class: I(["result-card", { "result-expanded": s.expanded }])
                },
                [
                  c("div", {
                    class: "result-header",
                    onClick: (U) => be(s)
                  }, [
                    c("div", Tt, [
                      s.engine === "google" ? (u(), p("img", {
                        key: 0,
                        src: n(rt),
                        class: "engine-icon",
                        alt: "Google"
                      }, null, 8, yt)) : s.engine === "bing" ? (u(), p("img", {
                        key: 1,
                        src: n(ct),
                        class: "engine-icon",
                        alt: "Bing"
                      }, null, 8, xt)) : (u(), p("span", Ct, "离")),
                      c(
                        "span",
                        null,
                        G(ve(s.engine)),
                        1
                        /* TEXT */
                      )
                    ]),
                    c("div", zt, [
                      (u(), C(Ae(s.expanded ? n(Ye) : n(Je)), {
                        size: 18,
                        class: "expand-icon"
                      }))
                    ])
                  ], 8, bt),
                  s.expanded ? (u(), p("div", Lt, [
                    s.loading ? (u(), C(y, {
                      key: 0,
                      rows: 3,
                      animated: ""
                    })) : s.text ? (u(), p(
                      "div",
                      St,
                      G(s.text),
                      1
                      /* TEXT */
                    )) : (u(), p(
                      "div",
                      Vt,
                      G(e.$t("translate.resultPlaceholder")),
                      1
                      /* TEXT */
                    )),
                    c("div", Et, [
                      i(d, {
                        content: e.$t("translate.speakText"),
                        placement: "top",
                        "hide-after": 1e3
                      }, {
                        default: x(() => [
                          c("div", {
                            onClick: (U) => K(s.text, n(f)),
                            class: "action-btn"
                          }, [
                            i(n(ie), { size: 18 })
                          ], 8, Ut)
                        ]),
                        _: 2
                        /* DYNAMIC */
                      }, 1032, ["content"]),
                      i(d, {
                        content: e.$t("translate.copyResult"),
                        placement: "top",
                        "hide-after": 1e3
                      }, {
                        default: x(() => [
                          c("div", {
                            onClick: (U) => ke(s.text),
                            class: "action-btn"
                          }, [
                            i(n(Ke), { size: 18 })
                          ], 8, $t)
                        ]),
                        _: 2
                        /* DYNAMIC */
                      }, 1032, ["content"]),
                      i(d, {
                        content: e.$t("translate.translateBack"),
                        placement: "top",
                        "hide-after": 1e3
                      }, {
                        default: x(() => [
                          c("div", {
                            onClick: (U) => xe(s),
                            class: "action-btn rotate-icon"
                          }, [
                            i(n(oe), { size: 18 })
                          ], 8, Mt)
                        ]),
                        _: 2
                        /* DYNAMIC */
                      }, 1032, ["content"])
                    ])
                  ])) : z("v-if", !0)
                ],
                2
                /* CLASS */
              ))),
              128
              /* KEYED_FRAGMENT */
            ))
          ])
        ])
      ]);
    };
  }
}), Ft = /* @__PURE__ */ Ie(jt, [["__scopeId", "data-v-8b737dcc"]]);
export {
  Ft as default
};
