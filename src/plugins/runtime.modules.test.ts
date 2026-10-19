import { afterAll, describe, expect, it, vi } from 'vitest';
import type { RegisteredPlugin } from './protocol';

vi.mock('@tauri-apps/api/core', () => ({
  convertFileSrc: (path: string): string =>
    `asset://${path.replace(/\\/g, '/')}`,
  invoke: vi.fn()
}));

import { rewritePluginModuleSource } from './runtime';
import i18n, { setLocale } from '@/i18n';

const plugin = {
  id: 'module-test',
  source: 'local',
  packagePath: 'C:\\Plugins\\module-test',
  manifest: { version: '1.0.0' }
} as RegisteredPlugin;

const createdModuleUrls: string[] = [];
const originalCreateObjectUrl = URL.createObjectURL;

URL.createObjectURL = vi.fn(() => {
  const url = `blob:shared-runtime-${createdModuleUrls.length + 1}`;
  createdModuleUrls.push(url);
  return url;
});

afterAll(() => {
  URL.createObjectURL = originalCreateObjectUrl;
});

describe('plugin runtime module imports', () => {
  it('shares the host i18n instance and named locale helpers', async () => {
    const result = rewritePluginModuleSource(
      plugin,
      'dist/frontend.js',
      'import i18n,{setLocale}from"@/i18n";'
    );
    expect(result).not.toContain('from"@/i18n"');
    const shared = (
      globalThis as typeof globalThis & {
        __SNIPPETS_CODE_PLUGIN_SHARED__: {
          appI18n: { default: typeof i18n; setLocale: typeof setLocale };
        };
      }
    ).__SNIPPETS_CODE_PLUGIN_SHARED__.appI18n;
    expect(shared.default).toBe(i18n);
    expect(shared.setLocale).toBe(setLocale);
    const originalLocale = i18n.global.locale.value;
    try {
      shared.setLocale('en-US');
      expect(shared.default.global.t('common.cancel')).toBe('Cancel');
      setLocale('zh-CN');
      expect(shared.default.global.t('common.cancel')).toBe('取消');
      const blobs = vi.mocked(URL.createObjectURL).mock.calls;
      const source = await (blobs[blobs.length - 1][0] as Blob).text();
      expect(source).toContain('export default Runtime.default;');
      expect(source).toContain(
        'export const setLocale = Runtime["setLocale"];'
      );
    } finally {
      i18n.global.locale.value = originalLocale;
    }
  });
  it('rewrites minified static imports emitted by the official plugin build', () => {
    const source =
      'import{ref as r}from"vue";import{useI18n as i}from"vue-i18n";';

    const result = rewritePluginModuleSource(
      plugin,
      'dist/frontend.js',
      source
    );

    expect(result).not.toContain('from"vue"');
    expect(result).not.toContain('from"vue-i18n"');
    expect(result).toMatch(/from"blob:shared-runtime-\d+"/);
  });

  it('rewrites minified relative static and dynamic imports', () => {
    const source =
      'export{value}from"./chunks/value.js";const lazy=import("./chunks/lazy.js");';

    const result = rewritePluginModuleSource(
      plugin,
      'dist/frontend.js',
      source
    );

    expect(result).toContain(
      'from"asset://C:/Plugins/module-test/dist/chunks/value.js"'
    );
    expect(result).toContain(
      'import("asset://C:/Plugins/module-test/dist/chunks/lazy.js")'
    );
  });

  it('keeps readable non-minified imports supported', () => {
    const result = rewritePluginModuleSource(
      plugin,
      'dist/frontend.js',
      'import { ref } from "vue";'
    );

    expect(result).not.toContain('from "vue"');
    expect(result).toMatch(/from "blob:shared-runtime-\d+"/);
  });
});
