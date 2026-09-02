import { beforeEach, describe, expect, it, vi } from 'vitest';
import { getLocalPluginResourcePath } from '@/api/plugins';
import {
  getOfflineRuntimeCandidates,
  getRuntimeBaseUrl,
  getRuntimeWasmPaths
} from './offlineTranslator';

vi.mock('@/api/plugins', () => ({
  getLocalPluginResourcePath: vi.fn()
}));

const getLocalPluginResourcePathMock = vi.mocked(getLocalPluginResourcePath);

beforeEach(() => {
  getLocalPluginResourcePathMock.mockReset();
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
