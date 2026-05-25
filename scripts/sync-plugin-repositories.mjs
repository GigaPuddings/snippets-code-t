import { cp, mkdir, readFile, readdir, rm, stat, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { basename, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = resolve(fileURLToPath(new URL('..', import.meta.url)));
const TMP_ROOT = resolve(ROOT, '_tmp/plugin-repo-sync');
const MARKETPLACE_PATH = resolve(ROOT, 'docs/plugin-marketplace/marketplace.json');
const OWNER = 'GigaPuddings';

const pluginRepositories = [
  {
    id: 'screenshot',
    repo: 'snippets-code-plugin-screenshot',
    sourceDir: 'docs/plugin-packages/screenshot',
    kind: 'feature'
  },
  {
    id: 'translation',
    repo: 'snippets-code-plugin-translation',
    sourceDir: 'docs/plugin-packages/translation',
    kind: 'feature'
  },
  {
    id: 'todo',
    repo: 'snippets-code-plugin-todo',
    sourceDir: 'docs/plugin-packages/todo',
    kind: 'feature'
  },
  {
    id: 'system-theme',
    repo: 'snippets-code-plugin-system-theme',
    sourceDir: 'docs/plugin-packages/system-theme',
    kind: 'feature'
  },
  {
    id: 'local-launcher',
    repo: 'snippets-code-plugin-local-launcher',
    sourceDir: 'docs/plugin-packages/local-launcher',
    kind: 'feature'
  },
  {
    id: 'desktop-files',
    repo: 'snippets-code-plugin-desktop-files',
    sourceDir: 'docs/plugin-packages/desktop-files',
    kind: 'feature'
  },
  {
    id: 'search-engines',
    repo: 'snippets-code-plugin-search-engines',
    sourceDir: 'docs/plugin-packages/search-engines',
    kind: 'feature'
  },
  {
    id: 'quick-tools',
    repo: 'snippets-code-plugin-quick-tools',
    sourceDir: 'docs/plugin-packages/quick-tools',
    kind: 'feature'
  },
  {
    id: 'screen-recorder',
    repo: 'snippets-code-plugin-screen-recorder',
    sourceDir: 'docs/plugin-packages/screen-recorder',
    kind: 'feature'
  },
  {
    id: 'screen-recorder-ffmpeg',
    repo: 'snippets-code-plugin-screen-recorder-ffmpeg',
    sourceDir: 'docs/examples/screen-recorder-ffmpeg-resource',
    resourceSourceDir: 'dist-plugin-packages/screen-recorder-ffmpeg',
    kind: 'resource',
    requiresExplicitResource: true,
    includeFlag: 'includeFfmpegResource',
    includeFlagName: '--include-ffmpeg-resource'
  },
  {
    id: 'git-sync',
    repo: 'snippets-code-plugin-git-sync',
    sourceDir: 'docs/plugin-packages/git-sync',
    kind: 'feature'
  },
  {
    id: 'screenshot-rapidocr',
    repo: 'snippets-code-plugin-screenshot-rapidocr',
    sourceDir: 'docs/examples/screenshot-rapidocr-resource',
    resourceSourceDir: 'dist-plugin-packages/screenshot-rapidocr',
    kind: 'resource',
    requiresExplicitResource: true,
    includeFlag: 'includeRapidOcrResource',
    includeFlagName: '--include-rapidocr-resource'
  },
  {
    id: 'translation-offline-runtime',
    repo: 'snippets-code-plugin-translation-offline-runtime',
    sourceDir: 'docs/examples/translation-offline-runtime',
    kind: 'resource'
  }
];

function parseArgs() {
  const args = process.argv.slice(2);
  const options = {
    dryRun: false,
    forceTag: false,
    includeFfmpegResource: false,
    includeRapidOcrResource: false,
    pinMarketplaceTags: false,
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
  const minAppVersion = manifest.minAppVersion ?? version;
  manifest.version = version;
  manifest.minAppVersion = minAppVersion;
  manifest.repository = `https://github.com/${OWNER}/${plugin.repo}`;
  manifest.releaseUrl = releaseUrl(plugin.repo, version);
  if (plugin.kind === 'feature') {
    manifest.compatibleAppVersion = `>=${minAppVersion}`;
  }
  if (!options.dryRun) {
    await writeJson(manifestPath, manifest);
  }
}

async function updateMarketplace(selectedPlugins, version, options) {
  const marketplace = await readJson(MARKETPLACE_PATH);
  const byId = new Map(selectedPlugins.map((plugin) => [plugin.id, plugin]));
  let changed = false;

  marketplace.updatedAt = new Date().toISOString().slice(0, 10);
  for (const item of marketplace.plugins ?? []) {
    const plugin = byId.get(item.id);
    if (!plugin) continue;
    const sourceManifest = await readJson(resolve(ROOT, plugin.sourceDir, 'plugin.json'));
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
  await rm(targetDir, { recursive: true, force: true });
  await mkdir(TMP_ROOT, { recursive: true });
  run('gh', ['repo', 'clone', `${OWNER}/${plugin.repo}`, targetDir, '--', '--depth', '1'], {
    inherit: true,
    dryRun: options.dryRun
  });
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

  await updateManifestVersion(plugin, version, sourceDir, options);

  const repoDir = join(TMP_ROOT, plugin.repo);
  console.log(`[Plugins] 同步 ${plugin.id} -> ${OWNER}/${plugin.repo}`);
  await cloneRepository(plugin, repoDir, options);

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
  const packageJson = await readJson(resolve(ROOT, 'package.json'));
  const version = options.version ?? packageJson.version;
  assertVersion(version);

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

  await updateMarketplace(selectedPlugins, version, options);

  for (const plugin of selectedPlugins) {
    await syncRepository(plugin, version, options);
  }

  console.log(`[Plugins] 插件仓库同步完成: ${selectedPlugins.length} packages, version=${version}`);
}

main().catch((error) => {
  console.error(`[Plugins] ${error.message}`);
  process.exit(1);
});
