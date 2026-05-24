import { i as T, l as t, g as M } from "./_plugin-vue_export-helper-BYXe8loQ.js";
async function E(e, n) {
  return await T("get_local_plugin_resource_path", {
    pluginId: e,
    relativePath: n
  });
}
const p = "resources/transformers/transformers.min.js", y = ["translation-offline-runtime", "translation"], O = "https://huggingface.co/", b = "{model}/resolve/{revision}/", P = "/__snippets_code_disabled_transformers_local_models__/", R = [
  "ort-wasm-simd-threaded.wasm",
  "ort-wasm-simd.wasm",
  "ort-wasm-threaded.wasm",
  "ort-wasm.wasm"
];
let d = null;
const x = (e) => {
  const n = e.search(/[?#]/), a = n >= 0 ? e.slice(0, n) : e;
  return a.slice(0, a.lastIndexOf("/") + 1);
}, S = (e) => {
  const n = x(e);
  return Object.fromEntries(
    R.map((a) => [a, `${n}${a}`])
  );
}, w = (e, n) => {
  var a, o;
  e.useBrowserCache = !0, e.allowRemoteModels = !0, e.remoteHost = O, e.remotePathTemplate = b, e.allowLocalModels = !1, e.localModelPath = P, n && (e.backends ?? (e.backends = {}), (a = e.backends).onnx ?? (a.onnx = {}), (o = e.backends.onnx).wasm ?? (o.wasm = {}), e.backends.onnx.wasm.wasmPaths = S(n), e.backends.onnx.wasm.numThreads = 1);
};
async function B() {
  return d || (d = (async () => {
    for (const e of y) {
      const n = await E(e, p);
      if (!n) continue;
      const a = M(n), o = await import(
        /* @vite-ignore */
        a
      );
      return w(o.env, a), t.info(`[离线翻译] 已从插件资源加载 Transformers runtime: ${e}`, {
        wasmPaths: o.env.backends?.onnx?.wasm?.wasmPaths,
        numThreads: o.env.backends?.onnx?.wasm?.numThreads,
        remoteHost: o.env.remoteHost,
        remotePathTemplate: o.env.remotePathTemplate,
        allowLocalModels: o.env.allowLocalModels,
        localModelPath: o.env.localModelPath
      }), o;
    }
    throw new Error("离线翻译运行时未安装，请先安装 translation-offline-runtime 插件资源包");
  })().catch((e) => {
    throw d = null, e;
  }), d);
}
let c = null, m = !1, f = null, l = null, h = null;
const C = "Xenova/opus-mt-en-zh", k = [
  { name: "tokenizer_config.json", size: "~1KB" },
  { name: "config.json", size: "~1KB" },
  { name: "tokenizer.json", size: "~2MB" },
  { name: "generation_config.json", size: "~1KB" },
  { name: "onnx/encoder_model_quantized.onnx", size: "~75MB" },
  { name: "onnx/decoder_model_merged_quantized.onnx", size: "~220MB" }
], A = 3e5;
function N(e) {
  h = e;
}
function D() {
  return k;
}
function z(e, n, a) {
  return Promise.race([
    e,
    new Promise(
      (o, s) => setTimeout(() => s(new Error(a)), n)
    )
  ]);
}
async function g() {
  return c || f || (m = !0, t.info("[离线翻译] 正在加载翻译模型..."), f = (async () => {
    try {
      const { pipeline: e, env: n } = await B();
      w(n);
      let a = "";
      const o = e("translation", C, {
        dtype: "q8",
        device: "wasm",
        revision: "main",
        local_files_only: !1,
        progress_callback: (r) => {
          r.status === "done" && r.file && r.file !== a && (a = r.file, t.info(`[离线翻译] 已加载: ${r.file}`)), h && h({
            status: r.status,
            progress: r.progress,
            file: r.file
          });
        }
      });
      return c = await z(
        o,
        A,
        "模型加载超时，请检查网络连接后重试"
      ), t.info("[离线翻译] 翻译模型加载完成"), m = !1, c;
    } catch (e) {
      throw m = !1, f = null, t.error("[离线翻译] 模型加载失败:", e), e;
    }
  })(), f);
}
async function $(e) {
  if (!e?.trim()) return e;
  l = new AbortController();
  const n = l.signal;
  try {
    const a = await g();
    if (n.aborted)
      throw new Error("翻译已取消");
    const o = e.split(`
`), s = [];
    for (const r of o) {
      if (n.aborted)
        throw new Error("翻译已取消");
      const i = r.trim();
      if (!i) {
        s.push("");
        continue;
      }
      const u = await a(i);
      if (n.aborted)
        throw new Error("翻译已取消");
      if (Array.isArray(u) && u.length > 0) {
        const _ = u[0].translation_text || i;
        s.push(_);
      } else
        s.push(i);
    }
    return s.join(`
`);
  } catch (a) {
    throw a instanceof Error && a.message === "翻译已取消" ? (t.info("[离线翻译] 翻译已取消"), a) : a instanceof Error && a.message.includes("离线翻译运行时未安装") ? (t.warn("[离线翻译] 运行时资源未安装"), a) : (t.error("[离线翻译] 翻译失败:", a), new Error("离线翻译失败，请检查模型是否正确加载"));
  } finally {
    l = null;
  }
}
function F() {
  l && (l.abort(), l = null, t.info("[离线翻译] 已发送取消信号"));
}
function j() {
  return l !== null;
}
async function H() {
  await g();
}
function U() {
  return c !== null;
}
function K() {
  return m;
}
async function I() {
  try {
    if ("caches" in window) {
      const n = await caches.keys();
      t.info(`[离线翻译] Cache Storage 列表: ${JSON.stringify(n)}`);
      for (const a of n)
        if (a.includes("transformers") || a.includes("huggingface")) {
          const s = await (await caches.open(a)).keys();
          if (t.info(`[离线翻译] Cache "${a}" 包含 ${s.length} 个文件`), s.some(
            (i) => i.url.includes("opus-mt-en-zh") || i.url.includes("Xenova")
          )) {
            const i = s.some((u) => u.url.includes(".onnx"));
            if (t.info(`[离线翻译] 找到模型缓存，包含 ONNX: ${i}`), i)
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
    t.info(`[离线翻译] IndexedDB 列表: ${JSON.stringify(e.map((n) => n.name))}`);
    for (const n of e)
      if (n.name && (n.name.includes("transformers") || n.name.includes("huggingface") || n.name.includes("onnx") || n.name.includes("localforage")))
        return t.info(`[离线翻译] 找到 IndexedDB 缓存: ${n.name}`), {
          isCached: !0,
          cacheType: "indexeddb",
          cacheName: n.name,
          estimatedSize: "~300MB"
        };
    return t.info("[离线翻译] 未找到模型缓存"), { isCached: !1, cacheType: "none" };
  } catch (e) {
    return t.warn("[离线翻译] 检查缓存失败:", e), { isCached: !1, cacheType: "none" };
  }
}
async function q() {
  return (await I()).isCached;
}
function v() {
  return c !== null;
}
async function X() {
  if (c)
    try {
      await c.dispose?.();
    } catch {
    }
  c = null, f = null, m = !1, t.info("[离线翻译] 翻译器已释放");
}
async function J() {
  try {
    const e = await indexedDB.databases();
    for (const n of e)
      n.name && (n.name.includes("transformers") || n.name.includes("onnx")) && (indexedDB.deleteDatabase(n.name), t.info(`[离线翻译] 已删除 IndexedDB: ${n.name}`));
    if ("caches" in window) {
      const n = await caches.keys();
      for (const a of n)
        (a.includes("transformers") || a.includes("onnx")) && (await caches.delete(a), t.info(`[离线翻译] 已删除 Cache: ${a}`));
    }
    t.info("[离线翻译] 模型缓存已清除");
  } catch (e) {
    throw t.error("[离线翻译] 清除缓存失败:", e), e;
  }
}
export {
  v as canUseOfflineTranslation,
  F as cancelOfflineTranslation,
  J as clearModelCache,
  X as disposeOfflineTranslator,
  I as getModelCacheInfo,
  D as getModelFiles,
  q as isModelCached,
  K as isOfflineTranslatorInitializing,
  U as isOfflineTranslatorReady,
  j as isTranslationInProgress,
  N as setProgressCallback,
  $ as translateOffline,
  H as warmupOfflineTranslator
};
