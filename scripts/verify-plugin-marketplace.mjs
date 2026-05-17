import { readFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = resolve(fileURLToPath(new URL('..', import.meta.url)));
const MARKETPLACE_PATH = resolve(ROOT, 'docs/plugin-marketplace/marketplace.json');

const isObject = (value) => typeof value === 'object' && value !== null && !Array.isArray(value);

async function readJson(path) {
  return JSON.parse(await readFile(path, 'utf8'));
}

function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

async function verifyInstallablePackage(item) {
  assert(typeof item.packageUrl === 'string' && item.packageUrl.length > 0, `${item.id}: packageUrl 无效`);
  assert(typeof item.packageSubdir === 'string' && item.packageSubdir.length > 0, `${item.id}: packageSubdir 无效`);
  assert(!item.packageSubdir.includes('..'), `${item.id}: packageSubdir 不允许包含 ..`);

  const packageDir = resolve(ROOT, item.packageSubdir);
  const manifestPath = join(packageDir, 'plugin.json');
  assert(existsSync(manifestPath), `${item.id}: packageSubdir 缺少 plugin.json (${item.packageSubdir})`);

  const manifest = await readJson(manifestPath);
  assert(manifest.schemaVersion === 1, `${item.id}: plugin.json schemaVersion 必须为 1`);
  assert(manifest.kind === 'local', `${item.id}: plugin.json kind 必须为 local`);
  assert(manifest.id === item.id, `${item.id}: marketplace id 与 plugin.json id 不一致 (${manifest.id})`);
  assert(isObject(manifest.name) && typeof manifest.name.i18nKey === 'string', `${item.id}: name.i18nKey 无效`);
  assert(isObject(manifest.description) && typeof manifest.description.i18nKey === 'string', `${item.id}: description.i18nKey 无效`);
}

async function main() {
  const marketplace = await readJson(MARKETPLACE_PATH);
  assert(marketplace.schemaVersion === 1, 'marketplace schemaVersion 必须为 1');
  assert(Array.isArray(marketplace.plugins), 'marketplace.plugins 必须是数组');

  const ids = new Set();
  let installableCount = 0;
  for (const item of marketplace.plugins) {
    assert(isObject(item), 'marketplace plugin item 必须是对象');
    assert(typeof item.id === 'string' && item.id.length > 0, 'marketplace plugin item 缺少 id');
    assert(!ids.has(item.id), `插件 ID 重复: ${item.id}`);
    ids.add(item.id);

    if (item.packageUrl || item.packageSubdir) {
      installableCount += 1;
      await verifyInstallablePackage(item);
    }
  }

  console.log(`[Plugins] 插件市场校验通过: ${marketplace.plugins.length} entries, ${installableCount} installable packages`);
}

main().catch((error) => {
  console.error(`[Plugins] ${error.message}`);
  process.exit(1);
});
