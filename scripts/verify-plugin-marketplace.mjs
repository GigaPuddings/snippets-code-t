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

async function readRemoteJson(url) {
  let lastError;

  for (let attempt = 1; attempt <= 5; attempt += 1) {
    try {
      const response = await fetch(url, {
        headers: {
          accept: 'application/vnd.github.raw+json',
          'user-agent': 'snippets-code-plugin-marketplace-verifier'
        },
        signal: AbortSignal.timeout(15000)
      });

      assert(response.ok, `远程 plugin.json 获取失败: ${url} (HTTP ${response.status})`);
      return await response.json();
    } catch (error) {
      lastError = error;
      await new Promise((resolveTimeout) => setTimeout(resolveTimeout, attempt * 1500));
    }
  }

  throw new Error(`远程 plugin.json 获取失败: ${url} (${lastError?.message ?? lastError})`);
}

async function readRemoteJsonCandidates(urls) {
  const errors = [];

  for (const url of urls) {
    try {
      return await readRemoteJson(url);
    } catch (error) {
      errors.push(`${url} (${error.message})`);
    }
  }

  throw new Error(`远程 plugin.json 获取失败: ${errors.join('; ')}`);
}

function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

function parseGithubArchivePackageUrl(packageUrl) {
  const match = packageUrl.match(/^https:\/\/github\.com\/([^/]+)\/([^/]+)\/archive\/refs\/(heads|tags)\/(.+)\.zip$/);
  if (!match) return null;

  const [, owner, repo, , ref] = match;
  return { owner, repo, ref };
}

function githubArchivePluginJsonUrls(packageUrl) {
  const archive = parseGithubArchivePackageUrl(packageUrl);
  if (!archive) return null;

  const { owner, repo, ref } = archive;
  const encodedOwner = encodeURIComponent(owner);
  const encodedRepo = encodeURIComponent(repo);
  const encodedRef = encodeURIComponent(ref);
  return [
    `https://api.github.com/repos/${encodedOwner}/${encodedRepo}/contents/plugin.json?ref=${encodedRef}`,
    `https://raw.githubusercontent.com/${owner}/${repo}/${ref}/plugin.json`
  ];
}

async function readPackageManifest(item) {
  if (!item.packageSubdir) {
    const remotePluginJsonUrls = githubArchivePluginJsonUrls(item.packageUrl);
    assert(remotePluginJsonUrls, `${item.id}: 缺少 packageSubdir 时 packageUrl 必须指向 GitHub 分支或标签归档`);
    return {
      manifest: await readRemoteJsonCandidates(remotePluginJsonUrls)
    };
  }

  assert(typeof item.packageSubdir === 'string' && item.packageSubdir.length > 0, `${item.id}: packageSubdir 无效`);
  assert(!item.packageSubdir.includes('..'), `${item.id}: packageSubdir 不允许包含 ..`);

  const packageDir = resolve(ROOT, item.packageSubdir);
  const manifestPath = join(packageDir, 'plugin.json');
  assert(existsSync(manifestPath), `${item.id}: packageSubdir 缺少 plugin.json (${item.packageSubdir})`);
  return {
    manifest: await readJson(manifestPath),
    packageDir
  };
}

function assertSafePackagePath(item, relativePath, field) {
  assert(typeof relativePath === 'string' && relativePath.length > 0, `${item.id}: ${field} 无效`);
  assert(!relativePath.includes('://'), `${item.id}: ${field} 不允许使用 URL (${relativePath})`);
  assert(!relativePath.startsWith('/') && !/^[a-zA-Z]:[\\/]/.test(relativePath), `${item.id}: ${field} 必须是相对路径 (${relativePath})`);
  assert(!relativePath.split(/[\\/]+/).includes('..'), `${item.id}: ${field} 不允许包含 .. (${relativePath})`);
}

function verifyLocalPackageEntryFiles(item, manifest, packageDir) {
  if (!packageDir || !isObject(manifest.entry)) return;

  const entryPaths = [];
  if (manifest.entry.frontend) {
    entryPaths.push(['entry.frontend', manifest.entry.frontend]);
  }
  if (Array.isArray(manifest.entry.styles)) {
    entryPaths.push(...manifest.entry.styles.map((stylePath, index) => [`entry.styles[${index}]`, stylePath]));
  }

  for (const [field, relativePath] of entryPaths) {
    assertSafePackagePath(item, relativePath, field);
    assert(
      existsSync(join(packageDir, relativePath)),
      `${item.id}: ${field} 指向的文件不存在 (${relativePath})`
    );
  }
}

async function verifyInstallablePackage(item) {
  assert(typeof item.packageUrl === 'string' && item.packageUrl.length > 0, `${item.id}: packageUrl 无效`);
  assert(
    typeof item.sizeBytes === 'number' && Number.isFinite(item.sizeBytes) && item.sizeBytes > 0,
    `${item.id}: 可安装插件必须声明 sizeBytes`
  );

  const { manifest, packageDir } = await readPackageManifest(item);
  assert(manifest.schemaVersion === 1, `${item.id}: plugin.json schemaVersion 必须为 1`);
  assert(manifest.kind === 'local', `${item.id}: plugin.json kind 必须为 local`);
  assert(manifest.id === item.id, `${item.id}: marketplace id 与 plugin.json id 不一致 (${manifest.id})`);
  assert(isObject(manifest.name) && typeof manifest.name.i18nKey === 'string', `${item.id}: name.i18nKey 无效`);
  assert(isObject(manifest.description) && typeof manifest.description.i18nKey === 'string', `${item.id}: description.i18nKey 无效`);
  verifyLocalPackageEntryFiles(item, manifest, packageDir);
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

  for (const item of marketplace.plugins) {
    if (!Array.isArray(item.dependencies)) continue;
    for (const dependencyId of item.dependencies) {
      assert(typeof dependencyId === 'string' && dependencyId.length > 0, `${item.id}: dependency id 无效`);
      assert(ids.has(dependencyId), `${item.id}: dependency 不存在: ${dependencyId}`);
      assert(dependencyId !== item.id, `${item.id}: dependency 不能指向自身`);
    }
  }

  console.log(`[Plugins] 插件市场校验通过: ${marketplace.plugins.length} entries, ${installableCount} installable packages`);
}

main().catch((error) => {
  console.error(`[Plugins] ${error.message}`);
  process.exit(1);
});
