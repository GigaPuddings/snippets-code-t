import { i as y, l as r, g as p } from "./_plugin-vue_export-helper-BMh5SYAC.js";
async function M(e, n) {
  return await y("get_local_plugin_resource_path", {
    pluginId: e,
    relativePath: n
  });
}
const T = "resources/transformers/transformers.min.js", _ = ["translation-offline-runtime", "translation"];
let d = null;
async function E() {
  return d || (d = (async () => {
    for (const e of _) {
      const n = await M(e, T);
      if (!n) continue;
      const s = await import(p(n));
      return s.env.useBrowserCache = !0, s.env.allowRemoteModels = !0, r.info(`[离线翻译] 已从插件资源加载 Transformers runtime: ${e}`), s;
    }
    throw new Error("离线翻译运行时未安装，请先安装 translation-offline-runtime 插件资源包");
  })().catch((e) => {
    throw d = null, e;
  }), d);
}
let c = null, m = !1, f = null, l = null, h = null;
const C = "Xenova/opus-mt-en-zh", O = [
  { name: "tokenizer_config.json", size: "~1KB" },
  { name: "config.json", size: "~1KB" },
  { name: "tokenizer.json", size: "~2MB" },
  { name: "generation_config.json", size: "~1KB" },
  { name: "onnx/encoder_model_quantized.onnx", size: "~75MB" },
  { name: "onnx/decoder_model_merged_quantized.onnx", size: "~220MB" }
], b = 3e5;
function N(e) {
  h = e;
}
function R() {
  return O;
}
function x(e, n, a) {
  return Promise.race([
    e,
    new Promise(
      (s, t) => setTimeout(() => t(new Error(a)), n)
    )
  ]);
}
async function w() {
  return c || f || (m = !0, r.info("[离线翻译] 正在加载翻译模型..."), f = (async () => {
    try {
      const { pipeline: e, env: n } = await E();
      n.useBrowserCache = !0, n.allowRemoteModels = !0;
      let a = "";
      const s = e("translation", C, {
        dtype: "q8",
        device: "wasm",
        revision: "main",
        progress_callback: (o) => {
          o.status === "done" && o.file && o.file !== a && (a = o.file, r.info(`[离线翻译] 已加载: ${o.file}`)), h && h({
            status: o.status,
            progress: o.progress,
            file: o.file
          });
        }
      });
      return c = await x(
        s,
        b,
        "模型加载超时，请检查网络连接后重试"
      ), r.info("[离线翻译] 翻译模型加载完成"), m = !1, c;
    } catch (e) {
      throw m = !1, f = null, r.error("[离线翻译] 模型加载失败:", e), e;
    }
  })(), f);
}
async function I(e) {
  if (!e?.trim()) return e;
  l = new AbortController();
  const n = l.signal;
  try {
    const a = await w();
    if (n.aborted)
      throw new Error("翻译已取消");
    const s = e.split(`
`), t = [];
    for (const o of s) {
      if (n.aborted)
        throw new Error("翻译已取消");
      const i = o.trim();
      if (!i) {
        t.push("");
        continue;
      }
      const u = await a(i);
      if (n.aborted)
        throw new Error("翻译已取消");
      if (Array.isArray(u) && u.length > 0) {
        const g = u[0].translation_text || i;
        t.push(g);
      } else
        t.push(i);
    }
    return t.join(`
`);
  } catch (a) {
    throw a instanceof Error && a.message === "翻译已取消" ? (r.info("[离线翻译] 翻译已取消"), a) : a instanceof Error && a.message.includes("离线翻译运行时未安装") ? (r.warn("[离线翻译] 运行时资源未安装"), a) : (r.error("[离线翻译] 翻译失败:", a), new Error("离线翻译失败，请检查模型是否正确加载"));
  } finally {
    l = null;
  }
}
function P() {
  l && (l.abort(), l = null, r.info("[离线翻译] 已发送取消信号"));
}
function S() {
  return l !== null;
}
async function D() {
  await w();
}
function k() {
  return c !== null;
}
function $() {
  return m;
}
async function z() {
  try {
    if ("caches" in window) {
      const n = await caches.keys();
      r.info(`[离线翻译] Cache Storage 列表: ${JSON.stringify(n)}`);
      for (const a of n)
        if (a.includes("transformers") || a.includes("huggingface")) {
          const t = await (await caches.open(a)).keys();
          if (r.info(`[离线翻译] Cache "${a}" 包含 ${t.length} 个文件`), t.some(
            (i) => i.url.includes("opus-mt-en-zh") || i.url.includes("Xenova")
          )) {
            const i = t.some((u) => u.url.includes(".onnx"));
            if (r.info(`[离线翻译] 找到模型缓存，包含 ONNX: ${i}`), i)
              return {
                isCached: !0,
                cacheType: "cache-storage",
                cacheName: a,
                estimatedSize: "~300MB"
              };
          }
        }
    }
    const e = await indexedDB.databases();
    r.info(`[离线翻译] IndexedDB 列表: ${JSON.stringify(e.map((n) => n.name))}`);
    for (const n of e)
      if (n.name && (n.name.includes("transformers") || n.name.includes("huggingface") || n.name.includes("onnx") || n.name.includes("localforage")))
        return r.info(`[离线翻译] 找到 IndexedDB 缓存: ${n.name}`), {
          isCached: !0,
          cacheType: "indexeddb",
          cacheName: n.name,
          estimatedSize: "~300MB"
        };
    return r.info("[离线翻译] 未找到模型缓存"), { isCached: !1, cacheType: "none" };
  } catch (e) {
    return r.warn("[离线翻译] 检查缓存失败:", e), { isCached: !1, cacheType: "none" };
  }
}
async function v() {
  return (await z()).isCached;
}
function A() {
  return c !== null;
}
async function L() {
  if (c)
    try {
      await c.dispose?.();
    } catch {
    }
  c = null, f = null, m = !1, r.info("[离线翻译] 翻译器已释放");
}
async function j() {
  try {
    const e = await indexedDB.databases();
    for (const n of e)
      n.name && (n.name.includes("transformers") || n.name.includes("onnx")) && (indexedDB.deleteDatabase(n.name), r.info(`[离线翻译] 已删除 IndexedDB: ${n.name}`));
    if ("caches" in window) {
      const n = await caches.keys();
      for (const a of n)
        (a.includes("transformers") || a.includes("onnx")) && (await caches.delete(a), r.info(`[离线翻译] 已删除 Cache: ${a}`));
    }
    r.info("[离线翻译] 模型缓存已清除");
  } catch (e) {
    throw r.error("[离线翻译] 清除缓存失败:", e), e;
  }
}
export {
  A as canUseOfflineTranslation,
  P as cancelOfflineTranslation,
  j as clearModelCache,
  L as disposeOfflineTranslator,
  z as getModelCacheInfo,
  R as getModelFiles,
  v as isModelCached,
  $ as isOfflineTranslatorInitializing,
  k as isOfflineTranslatorReady,
  S as isTranslationInProgress,
  N as setProgressCallback,
  I as translateOffline,
  D as warmupOfflineTranslator
};
