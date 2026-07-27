import { describe, expect, it, vi } from 'vitest';
import type { RegisteredPlugin } from './protocol';

vi.mock('@tauri-apps/api/core', () => ({
  convertFileSrc: (path: string): string =>
    `asset://${path.replace(/\\/g, '/')}`,
  invoke: vi.fn()
}));

import { rewritePluginStylesheetUrls } from './runtime';

const plugin = {
  id: 'style-test',
  source: 'local',
  packagePath: 'C:\\Plugins\\style-test'
} as RegisteredPlugin;

describe('plugin runtime stylesheet assets', () => {
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
});
