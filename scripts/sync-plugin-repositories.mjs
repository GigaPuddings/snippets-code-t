import { cp, mkdir, readFile, readdir, rm, stat, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { basename, isAbsolute, join, relative, resolve } from 'node:path';
import { MARKETPLACE_PATH, OWNER, pluginRepositories, ROOT } from './plugin-release-config.mjs';

const TMP_ROOT = resolve(ROOT, '_tmp/plugin-repo-sync');
const CLONE_RETRY_DELAYS_MS = [0, 1000, 2500];

function parseArgs() {
  const args = process.argv.slice(2);
  const options = {
    dryRun: false,
    forceTag: false,
    includeFfmpegResource: false,
    includeLocalAiAgentReachRuntime: false,
    includeLocalAiLlamaRuntime: false,
    includeRapidOcrResource: false,
    pinMarketplaceTags: false,
    minAppVersion: null,
    only: null,
    version: null
  };

  for (let index = 0; index < args.length; index += 1) {
    const arg = args[index];
    if (arg === '--dry-run') {
      options.dryRun = true;
    } else if (arg === '--force-tag') {
      options.forceTag = true;
    } else if (arg === '--include-ffmpeg-resource') {
      options.includeFfmpegResource = true;
    } else if (arg === '--include-local-ai-agent-reach-runtime') {
      options.includeLocalAiAgentReachRuntime = true;
    } else if (arg === '--include-local-ai-llama-runtime') {
      options.includeLocalAiLlamaRuntime = true;
    } else if (arg === '--include-rapidocr-resource') {
      options.includeRapidOcrResource = true;
    } else if (arg === '--pin-marketplace-tags') {
      options.pinMarketplaceTags = true;
    } else if (arg === '--only') {
      options.only = args[++index]?.split(',').map((item) => item.trim()).filter(Boolean) ?? [];
    } else if (arg.startsWith('--only=')) {
      options.only = arg.slice('--only='.length).split(',').map((item) => item.trim()).filter(Boolean);
    } else if (arg === '--version') {
      options.version = args[++index];
    } else if (arg.startsWith('--version=')) {
      options.version = arg.slice('--version='.length);
    } else if (arg === '--min-app-version') {
      options.minAppVersion = args[++index];
    } else if (arg.startsWith('--min-app-version=')) {
      options.minAppVersion = arg.slice('--min-app-version='.length);
    } else {
      throw new Error(`未知参数: ${arg}`);
    }
  }

  return options;
}

function run(command, args, options = {}) {
  if (options.dryRun) {
    console.log(`[Plugins] dry-run: ${command} ${args.join(' ')}`);
    return '';
  }

  return execFileSync(command, args, {
    cwd: options.cwd ?? ROOT,
    encoding: 'utf8',
    stdio: options.inherit ? 'inherit' : 'pipe'
  });
}

async function readJson(path) {
  return JSON.parse(await readFile(path, 'utf8'));
}

async function writeJson(path, data) {
  await writeFile(path, `${JSON.stringify(data, null, 2)}\n`, 'utf8');
}

function assertVersion(version) {
  if (!/^\d+\.\d+\.\d+$/.test(version)) {
    throw new Error(`版本号格式错误: ${version}`);
  }
}

function tagArchiveUrl(repo, version) {
  return `https://github.com/${OWNER}/${repo}/archive/refs/tags/${version}.zip`;
}

function releaseUrl(repo, version) {
  return `https://github.com/${OWNER}/${repo}/releases/tag/${version}`;
}

function mainArchiveUrl(repo) {
  return `https://github.com/${OWNER}/${repo}/archive/refs/heads/main.zip`;
}

async function directoryExists(path) {
  try {
    return (await stat(path)).isDirectory();
  } catch {
    return false;
  }
}

function wait(milliseconds) {
  if (milliseconds <= 0) return;
  Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, milliseconds);
}

function assertTemporaryRepositoryPath(path) {
  const resolvedPath = resolve(path);
  const relativePath = relative(TMP_ROOT, resolvedPath);
  if (!relativePath || relativePath.startsWith('..') || isAbsolute(relativePath)) {
    throw new Error(`拒绝操作临时仓库目录之外的路径: ${resolvedPath}`);
  }
  return resolvedPath;
}

async function removeTemporaryRepository(path) {
  await rm(assertTemporaryRepositoryPath(path), { recursive: true, force: true });
}

function errorMessage(error) {
  return error instanceof Error ? error.message : String(error);
}

async function runCloneStrategy(label, command, args, targetDir) {
  for (const [index, delay] of CLONE_RETRY_DELAYS_MS.entries()) {
    if (delay > 0) {
      console.log(`[Plugins] ${label} 克隆重试前等待 ${delay}ms`);
      wait(delay);
    }

    await removeTemporaryRepository(targetDir);
    try {
      run(command, args, { inherit: true });
      return true;
    } catch (error) {
      console.warn(
        `[Plugins] ${label} 克隆失败 (${index + 1}/${CLONE_RETRY_DELAYS_MS.length}): ${errorMessage(error)}`
      );
    }
  }
  return false;
}

function isCleanGitRepository(path) {
  if (!existsSync(join(path, '.git'))) return false;
  try {
    return gitOutput(path, ['status', '--porcelain']).length === 0;
  } catch {
    return false;
  }
}

function updateCachedRepository(repoDir) {
  run('git', ['fetch', '--depth', '1', 'origin', 'main'], { cwd: repoDir, inherit: true });
  run('git', ['checkout', 'main'], { cwd: repoDir, inherit: true });
  run('git', ['reset', '--hard', 'origin/main'], { cwd: repoDir, inherit: true });
}

async function directorySize(path) {
  let total = 0;
  const entries = await readdir(path, { withFileTypes: true });
  for (const entry of entries) {
    const entryPath = join(path, entry.name);
    if (entry.isDirectory()) {
      total += await directorySize(entryPath);
    } else if (entry.isFile()) {
      total += (await stat(entryPath)).size;
    }
  }
  return total;
}

async function clearDirectoryExceptGit(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  for (const entry of entries) {
    if (entry.name === '.git') continue;
    await rm(join(directory, entry.name), { recursive: true, force: true });
  }
}

async function copyDirectoryContents(sourceDir, targetDir) {
  const entries = await readdir(sourceDir, { withFileTypes: true });
  for (const entry of entries) {
    await cp(join(sourceDir, entry.name), join(targetDir, entry.name), {
      recursive: true,
      force: true
    });
  }
}

async function updateManifestVersion(plugin, version, sourceDir, options) {
  const manifestPath = join(sourceDir, 'plugin.json');
  const manifest = await readJson(manifestPath);
  const minAppVersion = options.minAppVersion ?? manifest.minAppVersion ?? version;
  assertVersion(minAppVersion);
  manifest.version = version;
  manifest.minAppVersion = minAppVersion;
  manifest.repository = `https://github.com/${OWNER}/${plugin.repo}`;
  manifest.releaseUrl = releaseUrl(plugin.repo, version);
  manifest.compatibleAppVersion = `>=${minAppVersion}`;
  if (!options.dryRun) {
    await writeJson(manifestPath, manifest);
  }
}

async function updateMarketplace(selectedPlugins, pluginVersions, options) {
  const marketplace = await readJson(MARKETPLACE_PATH);
  const byId = new Map(selectedPlugins.map((plugin) => [plugin.id, plugin]));
  let changed = false;

  marketplace.updatedAt = new Date().toISOString().slice(0, 10);
  for (const item of marketplace.plugins ?? []) {
    const plugin = byId.get(item.id);
    if (!plugin) continue;
    const version = pluginVersions.get(plugin.id);
    const sourceDir = await resolveSourceDir(plugin, options);
    const sourceManifest = await readJson(join(sourceDir, 'plugin.json'));
    const minAppVersion = sourceManifest.minAppVersion ?? item.minAppVersion ?? version;

    item.version = version;
    item.minAppVersion = minAppVersion;
    item.compatibleAppVersion = `>=${minAppVersion}`;
    item.repository = `https://github.com/${OWNER}/${plugin.repo}`;
    item.releaseUrl = releaseUrl(plugin.repo, version);
    item.packageUrl = options.pinMarketplaceTags
      ? tagArchiveUrl(plugin.repo, version)
      : mainArchiveUrl(plugin.repo);
    delete item.packageSubdir;
    if (plugin.resourceSourceDir && options[plugin.includeFlag]) {
      const resourceDir = resolve(ROOT, plugin.resourceSourceDir);
      if (await directoryExists(resourceDir)) {
        item.sizeBytes = await directorySize(resourceDir);
      }
    }

    if (plugin.kind === 'resource' && item.status === 'planned') {
      item.status = 'available';
    }

    changed = true;
  }

  if (changed && !options.dryRun) {
    await writeJson(MARKETPLACE_PATH, marketplace);
  }
}

function renderReadme(plugin, manifest, version, sourceDir) {
  const displayName = manifest.name?.fallback ?? plugin.id;
  const sourceLabel = sourceDir.startsWith(ROOT)
    ? sourceDir.slice(ROOT.length + 1).replaceAll('\\', '/')
    : sourceDir;

  return `# ${displayName}

Official installable plugin package for Snippets Code.

- Plugin ID: \`${plugin.id}\`
- Version: \`${version}\`
- Source: \`${sourceLabel}\`
- App compatibility: \`${manifest.compatibleAppVersion ?? 'managed by host plugin'}\`

Install URL:

\`\`\`text
${mainArchiveUrl(plugin.repo)}
\`\`\`

Versioned release URL:

\`\`\`text
${tagArchiveUrl(plugin.repo, version)}
\`\`\`

This repository is synchronized from the main application repository by
\`pnpm plugins:sync-repos\`. Manual edits should be made in the main source
package, then synchronized again.
`;
}

async function resolveSourceDir(plugin, options) {
  if (plugin.requiresExplicitResource && plugin.resourceSourceDir && options[plugin.includeFlag]) {
    const resourceDir = resolve(ROOT, plugin.resourceSourceDir);
    if (await directoryExists(resourceDir)) {
      return resourceDir;
    }
    throw new Error(`未找到 ${plugin.resourceSourceDir}，请先运行对应的资源打包脚本`);
  }

  return resolve(ROOT, plugin.sourceDir);
}

async function cloneRepository(plugin, targetDir, options) {
  if (options.dryRun) {
    console.log(`[Plugins] dry-run: reuse or clone ${OWNER}/${plugin.repo} -> ${targetDir}`);
    return;
  }

  await mkdir(TMP_ROOT, { recursive: true });

  if (isCleanGitRepository(targetDir)) {
    try {
      console.log(`[Plugins] 复用本地临时仓库: ${targetDir}`);
      updateCachedRepository(targetDir);
      return;
    } catch (error) {
      console.warn(`[Plugins] 临时仓库更新失败，将重新克隆: ${errorMessage(error)}`);
    }
  }

  const sshUrl = `git@github.com:${OWNER}/${plugin.repo}.git`;
  if (await runCloneStrategy('SSH', 'git', ['clone', '--depth', '1', sshUrl, targetDir], targetDir)) {
    return;
  }

  if (await runCloneStrategy(
    'GitHub CLI',
    'gh',
    ['repo', 'clone', `${OWNER}/${plugin.repo}`, targetDir, '--', '--depth', '1'],
    targetDir
  )) {
    return;
  }

  throw new Error(`${plugin.id}: SSH 与 GitHub CLI 克隆均失败，请检查网络连接后重试`);
}

async function writeVersionsIndex(repoDir, version, manifest) {
  const versionsPath = join(repoDir, 'versions.json');
  let versions = {};
  if (existsSync(versionsPath)) {
    try {
      versions = await readJson(versionsPath);
    } catch {
      versions = {};
    }
  }

  versions[version] = manifest.minAppVersion ?? version;
  await writeJson(
    versionsPath,
    Object.fromEntries(
      Object.entries(versions).sort(([left], [right]) => (
        left.localeCompare(right, undefined, { numeric: true })
      ))
    )
  );
}

async function writeRepositoryReadme(plugin, repoDir, manifest, version, sourceDir) {
  const sourceReadmePath = join(sourceDir, 'README.md');
  if (existsSync(sourceReadmePath)) {
    return;
  }

  await writeFile(join(repoDir, 'README.md'), renderReadme(plugin, manifest, version, sourceDir), 'utf8');
}

function gitOutput(cwd, args) {
  return execFileSync('git', args, {
    cwd,
    encoding: 'utf8',
    stdio: 'pipe'
  }).trim();
}

function remoteTagExists(repoDir, tag) {
  const output = gitOutput(repoDir, ['ls-remote', '--tags', 'origin', `refs/tags/${tag}`]);
  return output.length > 0;
}

function localTagExists(repoDir, tag) {
  try {
    gitOutput(repoDir, ['rev-parse', '--verify', tag]);
    return true;
  } catch {
    return false;
  }
}

function commitAndPush(plugin, repoDir, version, options) {
  run('git', ['add', '-A'], { cwd: repoDir, inherit: true, dryRun: options.dryRun });

  const status = options.dryRun ? 'dry-run' : gitOutput(repoDir, ['status', '--short']);
  if (status.length > 0) {
    run('git', ['commit', '-m', `release: sync plugin package ${version}`], {
      cwd: repoDir,
      inherit: true,
      dryRun: options.dryRun
    });
    run('git', ['push', 'origin', 'main'], {
      cwd: repoDir,
      inherit: true,
      dryRun: options.dryRun
    });
  } else {
    console.log(`[Plugins] ${plugin.id}: 仓库内容无变化`);
  }

  const tag = version;
  if (!options.dryRun && remoteTagExists(repoDir, tag) && !options.forceTag) {
    console.log(`[Plugins] ${plugin.id}: 远程标签 ${tag} 已存在，跳过`);
    return;
  }

  if (!options.dryRun && localTagExists(repoDir, tag)) {
    run('git', ['tag', '-d', tag], { cwd: repoDir, inherit: true, dryRun: options.dryRun });
  }

  run('git', ['tag', tag], { cwd: repoDir, inherit: true, dryRun: options.dryRun });
  run('git', ['push', options.forceTag ? '--force' : 'origin', ...(options.forceTag ? ['origin'] : []), tag], {
    cwd: repoDir,
    inherit: true,
    dryRun: options.dryRun
  });
}

async function syncRepository(plugin, version, options) {
  const sourceDir = await resolveSourceDir(plugin, options);
  if (!(await directoryExists(sourceDir))) {
    throw new Error(`${plugin.id}: 插件包目录不存在: ${sourceDir}`);
  }

  const repoDir = join(TMP_ROOT, plugin.repo);
  console.log(`[Plugins] 同步 ${plugin.id} -> ${OWNER}/${plugin.repo}`);
  await cloneRepository(plugin, repoDir, options);
  await updateManifestVersion(plugin, version, sourceDir, options);

  if (!options.dryRun) {
    await clearDirectoryExceptGit(repoDir);
    await copyDirectoryContents(sourceDir, repoDir);

    const manifest = await readJson(join(sourceDir, 'plugin.json'));
    await writeVersionsIndex(repoDir, version, manifest);
    await writeRepositoryReadme(plugin, repoDir, manifest, version, sourceDir);
  }

  commitAndPush(plugin, repoDir, version, options);
}

async function main() {
  const options = parseArgs();
  const selectedPlugins = options.only
    ? pluginRepositories.filter((plugin) => options.only.includes(plugin.id))
    : pluginRepositories.filter(
      (plugin) => !plugin.requiresExplicitResource || options[plugin.includeFlag]
    );

  const missing = options.only?.filter(
    (pluginId) => !pluginRepositories.some((plugin) => plugin.id === pluginId)
  ) ?? [];
  if (missing.length > 0) {
    throw new Error(`未知插件 ID: ${missing.join(', ')}`);
  }

  const unsafeResourceSync = selectedPlugins.find(
    (plugin) => plugin.requiresExplicitResource && !options[plugin.includeFlag]
  );
  if (unsafeResourceSync) {
    throw new Error(
      `${unsafeResourceSync.id}: 需要 ${unsafeResourceSync.includeFlagName}，避免用空模板覆盖完整资源仓库`
    );
  }

  const pluginVersions = new Map();
  for (const plugin of selectedPlugins) {
    const sourceDir = await resolveSourceDir(plugin, options);
    const manifest = await readJson(resolve(sourceDir, 'plugin.json'));
    const version = options.version ?? manifest.version;
    assertVersion(version);
    pluginVersions.set(plugin.id, version);
  }

  for (const plugin of selectedPlugins) {
    const version = pluginVersions.get(plugin.id);
    await syncRepository(plugin, version, options);
  }

  await updateMarketplace(selectedPlugins, pluginVersions, options);

  console.log(`[Plugins] 插件仓库同步完成: ${selectedPlugins.length} packages`);
}

main().catch((error) => {
  console.error(`[Plugins] ${error.message}`);
  process.exit(1);
});
