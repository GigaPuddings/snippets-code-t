import { afterAll, describe, expect, it, vi } from 'vitest';
import type { RegisteredPlugin } from './protocol';

vi.mock('@tauri-apps/api/core', () => ({
  convertFileSrc: (path: string): string =>
    `asset://${path.replace(/\\/g, '/')}`,
  invoke: vi.fn()
}));

import { rewritePluginModuleSource } from './runtime';

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
