import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { readFile } from 'node:fs/promises';
import { test } from 'vitest';
import vm from 'node:vm';
import '../plugin-registry/packages/local-launcher/browser-extension/policy.js';

const removeConfirmedBookmark =
  globalThis.SnippetsBookmarkBridge.removeConfirmedBookmark;
const command = {
  operation: 'remove_bookmark',
  node_id: 'node-42',
  expected_url: 'https://example.com/Path',
  expected_title: '',
  expires_at: 15000
};

function browser(
  node = { id: 'node-42', url: command.expected_url, title: '' }
) {
  const removed = [];
  return {
    removed,
    bookmarks: {
      get: async () => (node ? [node] : []),
      remove: async (id) => {
        removed.push(id);
      }
    }
  };
}

test('only the confirmed bookmark is removed, including an empty original title', async () => {
  const api = browser();
  await removeConfirmedBookmark(api, command, () => 1000);
  assert.deepEqual(api.removed, ['node-42']);
});

test('folders, changed URLs/titles, missing nodes and invalid/expired requests never delete', async () => {
  for (const node of [
    null,
    { id: 'node-42', title: '' },
    { id: 'node-42', url: 'https://example.com/path', title: '' },
    { id: 'node-42', url: command.expected_url, title: 'Edited' },
    { id: 'other-node', url: command.expected_url, title: '' }
  ]) {
    const api = browser(node);
    await assert.rejects(removeConfirmedBookmark(api, command, () => 1000));
    assert.deepEqual(api.removed, []);
  }
  for (const override of [
    { expires_at: 999 },
    { expires_at: 99999 },
    { node_id: '' },
    { operation: 'remove_tree' }
  ]) {
    const api = browser();
    await assert.rejects(
      removeConfirmedBookmark(api, { ...command, ...override }, () => 1000)
    );
    assert.deepEqual(api.removed, []);
  }
});

test('expiry during lookup and lookup/permission failures are reported, not treated as success', async () => {
  const api = browser();
  let current = 1000;
  api.bookmarks.get = async () => {
    current = 16000;
    return [{ id: 'node-42', url: command.expected_url, title: '' }];
  };
  await assert.rejects(removeConfirmedBookmark(api, command, () => current));
  assert.deepEqual(api.removed, []);
  api.bookmarks.get = async () => {
    throw new Error('Permission denied');
  };
  await assert.rejects(
    removeConfirmedBookmark(api, command, () => 1000),
    /Unable to verify/
  );
  const denied = browser();
  denied.bookmarks.remove = async () => {
    throw new Error('Write denied');
  };
  await assert.rejects(
    removeConfirmedBookmark(denied, command, () => 1000),
    /Write denied/
  );
});

test('Chromium extension public key matches the exact native host allowlisted identity', async () => {
  const manifest = JSON.parse(
    await readFile(
      new URL(
        '../plugin-registry/packages/local-launcher/browser-extension/chromium/manifest.json',
        import.meta.url
      )
    )
  );
  const id = createHash('sha256')
    .update(Buffer.from(manifest.key, 'base64'))
    .digest('hex')
    .slice(0, 32)
    .replace(/[0-9a-f]/g, (digit) =>
      String.fromCharCode(97 + parseInt(digit, 16))
    );
  const host = await readFile(
    new URL('../src-tauri/src/bookmark_bridge.rs', import.meta.url),
    'utf8'
  );
  assert.ok(host.includes(`const CHROME_ID: &str = "${id}";`), id);
  assert.deepEqual(
    manifest.permissions.sort(),
    ['bookmarks', 'nativeMessaging', 'storage'].sort()
  );
  assert.equal(manifest.host_permissions, undefined);
});

test('extension reports connecting, host errors and recovery for a ShuangHe profile', async () => {
  let responseListener;
  let messageListener;
  let posted;
  const timers = [];
  const api = {
    storage: {
      local: {
        get: async () => ({
          enabled: true,
          browserName: 'ShuangHe',
          profileLabel: 'Work',
          clientId: 'test-client'
        }),
        set: async () => {}
      }
    },
    runtime: {
      id: 'bridge',
      connectNative: () => ({
        onDisconnect: { addListener: () => {} },
        onMessage: {
          addListener: (listener) => {
            responseListener = listener;
          }
        },
        postMessage: (message) => {
          posted = message;
        },
        disconnect: () => {}
      }),
      onMessage: {
        addListener: (listener) => {
          messageListener = listener;
        }
      },
      onStartup: { addListener: () => {} },
      onInstalled: { addListener: () => {} }
    }
  };
  const context = vm.createContext({
    chrome: api,
    crypto: { randomUUID: () => 'test-client' },
    SnippetsBookmarkBridge: globalThis.SnippetsBookmarkBridge,
    setTimeout: (callback) => {
      timers.push(callback);
      return timers.length;
    },
    clearTimeout: () => {}
  });
  vm.runInContext(
    await readFile(
      new URL(
        '../plugin-registry/packages/local-launcher/browser-extension/background.js',
        import.meta.url
      ),
      'utf8'
    ),
    context
  );
  // Wait for storage reads and the native-port handshake setup.
  await new Promise((resolve) => setImmediate(resolve));
  const status = () => {
    let value;
    messageListener({ action: 'status' }, { id: 'bridge' }, (response) => {
      value = response.status;
    });
    return value;
  };
  assert.equal(status(), 'Connecting');
  assert.equal(posted.client.browser, 'ShuangHe');
  await responseListener({
    error: '请先打开 Snippets Code 的浏览器连接设置',
    commands: []
  });
  assert.match(status(), /Snippets Code/);
  timers.pop()();
  assert.equal(posted.results.length, 0);
  await responseListener({ commands: [] });
  assert.equal(status(), 'Connected');
});

test('popup refreshes asynchronous connection status and stops polling when closed', async () => {
  let bridgeStatus = 'Connecting';
  let tick;
  let onClose;
  let cleared;
  const elements = new Map();
  const element = (id) => {
    if (!elements.has(id))
      elements.set(id, {
        textContent: '',
        value: '',
        addEventListener: () => {}
      });
    return elements.get(id);
  };
  const context = vm.createContext({
    chrome: {
      storage: { local: { get: async () => ({}), set: async () => {} } },
      runtime: { sendMessage: async () => ({ status: bridgeStatus }) }
    },
    navigator: { userAgent: 'Edg/' },
    document: { getElementById: element },
    window: {
      addEventListener: (_, callback) => {
        onClose = callback;
      }
    },
    setInterval: (callback) => {
      tick = callback;
      return 42;
    },
    clearInterval: (id) => {
      cleared = id;
    }
  });
  vm.runInContext(
    await readFile(
      new URL(
        '../plugin-registry/packages/local-launcher/browser-extension/popup.js',
        import.meta.url
      ),
      'utf8'
    ),
    context
  );
  await new Promise((resolve) => setImmediate(resolve));
  assert.equal(element('status').textContent, '正在连接…');
  bridgeStatus = 'Connected';
  await tick();
  assert.equal(element('status').textContent, '已连接');
  assert.match(element('hint').textContent, /绑定/);
  bridgeStatus = 'Specified native messaging host not found.';
  await tick();
  assert.match(element('status').textContent, /host not found/);
  assert.match(element('hint').textContent, /重新准备连接/);
  onClose();
  assert.equal(cleared, 42);
});
