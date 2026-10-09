import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { getLocalPluginResourcePath } from '@/api/plugins';
import {
  getOfflineRuntimeCandidates,
  getRuntimeBaseUrl,
  getRuntimeWasmPaths
} from './offlineTranslator';

vi.mock('@/api/plugins', () => ({
  getLocalPluginResourcePath: vi.fn()
}));
vi.mock('@/utils/logger', () => ({
  logger: { info: vi.fn(), warn: vi.fn(), error: vi.fn() }
}));
vi.mock('@tauri-apps/api/core', () => ({
  convertFileSrc: () =>
    'data:text/javascript,' +
    encodeURIComponent(
      'export const env = {}; export const pipeline = (...args) => globalThis.offlineTranslatorTestPipeline(...args);'
    )
}));

const getLocalPluginResourcePathMock = vi.mocked(getLocalPluginResourcePath);

beforeEach(() => {
  getLocalPluginResourcePathMock.mockReset();
});
afterEach(() => {
  vi.useRealTimers();
  vi.unstubAllGlobals();
});

describe('offlineTranslator runtime URL helpers', () => {
  it('keeps encoded Windows asset URLs in the transformers directory', () => {
    const runtimeUrl =
      'http://asset.localhost/D%3A%5CProgram%20Files%5Csnippets-code%5Cplugins%5Ctranslation-offline-runtime%5Cresources%5Ctransformers%5Ctransformers.min.js';

    expect(getRuntimeBaseUrl(runtimeUrl)).toBe(
      'http://asset.localhost/D%3A%5CProgram%20Files%5Csnippets-code%5Cplugins%5Ctranslation-offline-runtime%5Cresources%5Ctransformers%5C'
    );
    expect(getRuntimeWasmPaths(runtimeUrl)['ort-wasm.wasm']).toBe(
      'http://asset.localhost/D%3A%5CProgram%20Files%5Csnippets-code%5Cplugins%5Ctranslation-offline-runtime%5Cresources%5Ctransformers%5Cort-wasm.wasm'
    );
  });

  it('handles normal URL paths with query strings', () => {
    const runtimeUrl =
      'http://asset.localhost/plugins/runtime/transformers.min.js?v=1';

    expect(getRuntimeBaseUrl(runtimeUrl)).toBe(
      'http://asset.localhost/plugins/runtime/'
    );
  });

  it('accepts a runtime candidate only when the entry and every WASM file exist', async () => {
    getLocalPluginResourcePathMock.mockImplementation(
      async (pluginId, relativePath) => {
        if (pluginId !== 'translation-offline-runtime') return null;
        if (relativePath.endsWith('ort-wasm.wasm')) return null;
        return `D:\\plugins\\${pluginId}\\${relativePath}`;
      }
    );

    expect(await getOfflineRuntimeCandidates()).toEqual([]);

    getLocalPluginResourcePathMock.mockImplementation(
      async (pluginId, relativePath) => {
        if (pluginId !== 'translation-offline-runtime') return null;
        return `D:\\plugins\\${pluginId}\\${relativePath}`;
      }
    );

    expect(await getOfflineRuntimeCandidates()).toEqual([
      {
        pluginId: 'translation-offline-runtime',
        runtimePath:
          'D:\\plugins\\translation-offline-runtime\\resources/transformers/transformers.min.js'
      }
    ]);
  });
});

const MODEL_PREFIX =
  'https://huggingface.co/Xenova/opus-mt-en-zh/resolve/main/';
const REQUIRED_FILES = [
  'config.json',
  'tokenizer.json',
  'tokenizer_config.json',
  'onnx/encoder_model_quantized.onnx',
  'onnx/decoder_model_merged_quantized.onnx'
];

function mockCache(files: string[]): Map<string, Response> {
  const entries = new Map(
    files.map((file) => [
      file.startsWith('https://') ? file : `${MODEL_PREFIX}${file}`,
      new Response('test model', { headers: { 'content-length': '10' } })
    ])
  );
  const cache = {
    match: vi.fn(async (url: string) => entries.get(url)),
    keys: vi.fn(async () => [...entries.keys()].map((url) => new Request(url))),
    delete: vi.fn(async (request: Request) => entries.delete(request.url))
  };
  vi.stubGlobal('caches', {
    keys: vi.fn(async () => ['transformers-cache']),
    open: vi.fn(async () => cache)
  });
  return entries;
}

describe('offlineTranslator model cache', () => {
  it('requires both ONNX files and tokenizer/config files for this exact model', async () => {
    const { getModelCacheInfo } = await import('./offlineTranslator');
    const entries = mockCache(['onnx/encoder_model_quantized.onnx']);
    expect((await getModelCacheInfo()).isCached).toBe(false);
    REQUIRED_FILES.forEach((file) => {
      entries.set(`${MODEL_PREFIX}${file}`, new Response('model'));
    });
    expect(await getModelCacheInfo()).toMatchObject({
      isCached: true,
      cacheType: 'cache-storage',
      estimatedSize: '~120MB'
    });
    entries.set(
      `${MODEL_PREFIX}tokenizer.json`,
      new Response(null, {
        headers: { 'content-length': '0' }
      })
    );
    expect((await getModelCacheInfo()).isCached).toBe(false);
  });

  it('does not accept unrelated models, old revisions or an IndexedDB name', async () => {
    const { getModelCacheInfo } = await import('./offlineTranslator');
    mockCache(
      REQUIRED_FILES.map(
        (file) => MODEL_PREFIX.replace('/main/', '/old/') + file
      )
    );
    vi.stubGlobal('indexedDB', {
      databases: vi.fn(async () => [{ name: 'onnx-transformers' }])
    });
    expect((await getModelCacheInfo()).isCached).toBe(false);
    mockCache(['https://huggingface.co/Xenova/other/resolve/main/model.onnx']);
    expect((await getModelCacheInfo()).isCached).toBe(false);
    vi.stubGlobal('caches', undefined);
    expect((await getModelCacheInfo()).isCached).toBe(false);
  });

  it('handles inaccessible browser storage without reporting a ready model', async () => {
    const { getModelCacheInfo } = await import('./offlineTranslator');
    vi.stubGlobal('caches', {
      keys: vi.fn().mockRejectedValue(new Error('blocked'))
    });
    expect((await getModelCacheInfo()).isCached).toBe(false);
  });

  it('deletes this translation model only and leaves other models/databases intact', async () => {
    const { clearModelCache } = await import('./offlineTranslator');
    const otherModel =
      'https://huggingface.co/Xenova/other/resolve/main/model.onnx';
    const entries = mockCache([...REQUIRED_FILES, otherModel]);
    const deleteDatabase = vi.fn();
    vi.stubGlobal('indexedDB', { deleteDatabase });
    await clearModelCache();
    expect([...entries.keys()]).toEqual([otherModel]);
    expect(deleteDatabase).not.toHaveBeenCalled();
  });
});

describe('offlineTranslator initialization lifecycle', () => {
  beforeEach(() => {
    vi.resetModules();
    getLocalPluginResourcePathMock.mockImplementation(
      async (_pluginId, path) => path
    );
  });

  it('uses the v2 quantized API and cache-only activation without remote model access', async () => {
    const pipeline = vi.fn().mockResolvedValue(vi.fn());
    vi.stubGlobal('offlineTranslatorTestPipeline', pipeline);
    const { warmupOfflineTranslator, disposeOfflineTranslator } = await import(
      './offlineTranslator'
    );
    await warmupOfflineTranslator({ localFilesOnly: true });
    expect(pipeline).toHaveBeenCalledWith(
      'translation',
      'Xenova/opus-mt-en-zh',
      expect.objectContaining({
        quantized: true,
        local_files_only: true
      })
    );
    const runtimeUrl =
      'data:text/javascript,' +
      encodeURIComponent(
        'export const env = {}; export const pipeline = (...args) => globalThis.offlineTranslatorTestPipeline(...args);'
      );
    const { env } = await import(/* @vite-ignore */ runtimeUrl);
    expect(env.allowLocalModels).toBe(true);
    expect(env.allowRemoteModels).toBe(false);
    await disposeOfflineTranslator();
  });

  it('reuses a timed-out pipeline instead of starting a duplicate download on retry', async () => {
    vi.useFakeTimers();
    let finish!: (translator: () => Promise<unknown>) => void;
    const pipeline = vi.fn(
      () =>
        new Promise((resolve) => {
          finish = resolve;
        })
    );
    vi.stubGlobal('offlineTranslatorTestPipeline', pipeline);
    const api = await import('./offlineTranslator');
    const first = api.warmupOfflineTranslator();
    const firstResult = expect(first).rejects.toThrow('仍在进行');
    await vi.waitFor(() => expect(pipeline).toHaveBeenCalledTimes(1));
    await vi.advanceTimersByTimeAsync(300000);
    await firstResult;
    expect(api.isOfflineTranslatorInitializing()).toBe(true);
    const retry = api.warmupOfflineTranslator();
    finish(async () => []);
    await retry;
    expect(pipeline).toHaveBeenCalledTimes(1);
    expect(api.isOfflineTranslatorReady()).toBe(true);
    expect(api.isOfflineTranslatorInitializing()).toBe(false);
    expect(vi.getTimerCount()).toBe(0);
    await api.disposeOfflineTranslator();
  });

  it('allows retry after a real failure and disposes a late result after cancellation', async () => {
    const pipeline = vi.fn().mockRejectedValueOnce(new Error('network error'));
    vi.stubGlobal('offlineTranslatorTestPipeline', pipeline);
    const api = await import('./offlineTranslator');
    await expect(api.warmupOfflineTranslator()).rejects.toThrow(
      'network error'
    );
    expect(api.isOfflineTranslatorInitializing()).toBe(false);
    let finish!: (translator: unknown) => void;
    pipeline.mockImplementationOnce(
      () =>
        new Promise((resolve) => {
          finish = resolve;
        })
    );
    const second = api.warmupOfflineTranslator();
    await vi.waitFor(() => expect(pipeline).toHaveBeenCalledTimes(2));
    await api.disposeOfflineTranslator();
    const translator = Object.assign(vi.fn(), {
      dispose: vi.fn().mockResolvedValue(undefined)
    });
    finish(translator);
    await expect(second).rejects.toThrow('模型加载已取消');
    expect(translator.dispose).toHaveBeenCalledTimes(1);
    expect(api.isOfflineTranslatorReady()).toBe(false);
  });
});
