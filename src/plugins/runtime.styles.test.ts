import { afterEach, describe, expect, it, vi } from 'vitest';
import type { RegisteredPlugin } from './protocol';

vi.mock('@tauri-apps/api/core', () => ({
  convertFileSrc: (path: string): string =>
    `asset://${path.replace(/\\/g, '/')}`,
  invoke: vi.fn()
}));

import {
  clearRuntimePluginRegistrations,
  ensurePluginStyles,
  rewritePluginStylesheetUrls
} from './runtime';

const plugin = {
  id: 'style-test',
  source: 'local',
  packagePath: 'C:\\Plugins\\style-test',
  installedAt: '2026-07-27T08:00:00Z',
  manifest: {
    version: '1.0.0',
    entry: {
      styles: ['dist/assets/runtime.css']
    }
  }
} as RegisteredPlugin;

describe('plugin runtime stylesheet assets', () => {
  afterEach(() => {
    clearRuntimePluginRegistrations(String(plugin.id));
    vi.unstubAllGlobals();
  });

  it('rewrites relative CSS assets against the stylesheet location', () => {
    const source = [
      '.icon { background: url("../images/icon.png?dark=1"); }',
      '.inline { background: url(data:image/png;base64,abc); }',
      '.remote { background: url(https://example.com/icon.png); }'
    ].join('\n');

    const result = rewritePluginStylesheetUrls(
      plugin,
      'dist/assets/runtime.css',
      source
    );

    expect(result).toContain(
      'url("asset://C:/Plugins/style-test/dist/images/icon.png?dark=1")'
    );
    expect(result).toContain('url(data:image/png;base64,abc)');
    expect(result).toContain('url(https://example.com/icon.png)');
  });

  it('rejects relative assets that escape the plugin package', () => {
    expect(() =>
      rewritePluginStylesheetUrls(
        plugin,
        'dist/runtime.css',
        '.bad { background: url("../../../outside.png"); }'
      )
    ).toThrow('插件资源路径越界');
  });

  it('reloads a stylesheet when its tracked DOM element was removed', async () => {
    const styleElements: Array<{
      dataset: Record<string, string>;
      isConnected: boolean;
      remove: () => void;
      textContent: string;
    }> = [];
    vi.stubGlobal('document', {
      createElement: () => {
        const element = {
          dataset: {},
          isConnected: false,
          remove() {
            element.isConnected = false;
          },
          textContent: ''
        };
        return element;
      },
      head: {
        appendChild: (element: (typeof styleElements)[number]) => {
          element.isConnected = true;
          styleElements.push(element);
        }
      }
    });
    const fetchMock = vi.fn().mockResolvedValue({
      ok: true,
      status: 200,
      statusText: 'OK',
      text: async () => '.settings-panel { display: flex; }'
    });
    vi.stubGlobal('fetch', fetchMock);

    await ensurePluginStyles(plugin);
    styleElements[0].remove();
    await ensurePluginStyles(plugin);

    expect(fetchMock).toHaveBeenCalledTimes(2);
    expect(styleElements).toHaveLength(2);
    expect(styleElements[1].isConnected).toBe(true);
  });
});
