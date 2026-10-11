import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { readFile } from 'node:fs/promises';
import { test } from 'vitest';
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
