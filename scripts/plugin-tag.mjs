import { existsSync } from 'node:fs';
import { execFileSync, execSync } from 'node:child_process';
import { readFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import readline from 'node:readline';
import { MARKETPLACE_PATH, pluginRepositories, ROOT } from './plugin-release-config.mjs';

const packageJson = JSON.parse(await readFile(resolve(ROOT, 'package.json'), 'utf8'));
const REMOTE_MARKETPLACE_URL =
  'https://raw.githubusercontent.com/GigaPuddings/snippets-code-t/main/plugin-registry/marketplace/marketplace.json';
const REMOTE_MARKETPLACE_API_URL =
  'https://api.github.com/repos/GigaPuddings/snippets-code-t/contents/plugin-registry/marketplace/marketplace.json?ref=main';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const args = process.argv.slice(2).filter((arg) => arg !== '--');

function readOption(name) {
  const prefix = `${name}=`;
  const inlineValue = args.find((arg) => arg.startsWith(prefix));
  if (inlineValue) return inlineValue.slice(prefix.length);

  const index = args.indexOf(name);
  if (index === -1) return null;
  const value = args[index + 1];
  if (!value || value.startsWith('--')) {
    throw new Error(`${name} 需要提供参数值`);
  }
  return value;
}

function readListOption(name) {
  const value = readOption(name);
  return value
    ? value.split(/[,\s]+/).map((item) => item.trim()).filter(Boolean)
    : [];
}

const options = {
  pushMain: !args.includes('--no-push-main'),
  allowDirty: args.includes('--allow-dirty'),
  checkUpdates: args.includes('--check-updates'),
  yes: args.includes('--yes') || args.includes('-y'),
  forceTag: args.includes('--force-tag'),
  commitCurrent: args.includes('--commit-current'),
  only: readListOption('--only'),
  version: readOption('--version'),
  minAppVersion: readOption('--min-app-version')
};

const question = (query) => new Promise((resolveQuestion, rejectQuestion) => {
  const cleanup = () => rl.off('close', onClose);
  const onClose = () => {
    cleanup();
    rejectQuestion(new Error('未收到输入，插件发布已取消'));
  };

  rl.once('close', onClose);
  try {
    rl.question(query, (answer) => {
      cleanup();
      resolveQuestion(answer);
    });
  } catch {
    cleanup();
    rejectQuestion(new Error('未收到输入，插件发布已取消'));
  }
});

function formatPluginOption(row) {
  const kind = row.plugin.kind === 'resource' ? 'resource' : 'feature';
  const marker = row.needsUpdate ? '*' : ' ';
  const reason = row.updateReasons.length ? ` ${row.updateReasons.join(', ')}` : '';
  return `${marker} ${row.plugin.id.padEnd(28)} ${row.version.padEnd(10)} ${kind.padEnd(8)} ${row.name}${reason}`;
}

function clearSelect(lines) {
  readline.moveCursor(process.stdout, 0, -lines);
  readline.clearScreenDown(process.stdout);
}

async function selectPlugins(rows) {
  if (options.only.length > 0) {
    const selectedRows = options.only.map((id) => rows.find((row) => row.plugin.id === id));
    const missingIds = options.only.filter((_id, index) => !selectedRows[index]);
    if (missingIds.length > 0) {
      throw new Error(`未知插件 ID: ${missingIds.join(', ')}`);
    }
    return [...new Map(selectedRows.map((row) => [row.plugin.id, row])).values()];
  }

  if (!process.stdin.isTTY || !process.stdout.isTTY) {
    return choosePluginsByText(rows);
  }

  readline.emitKeypressEvents(process.stdin);
  if (process.stdin.isTTY) process.stdin.setRawMode(true);

  let index = 0;
  const selected = new Set();
  let renderedLines = 0;

  const render = () => {
    if (renderedLines > 0) clearSelect(renderedLines);
    console.log('\n请选择要更新的插件，使用 ↑/↓ 切换，Space 多选，a 全选/取消，Enter 确认，Esc 取消:');
    console.log('* 表示检测到相关本地文件有改动\n');
    for (const [optionIndex, row] of rows.entries()) {
      const marker = optionIndex === index ? '>' : ' ';
      const checked = selected.has(optionIndex) ? '[x]' : '[ ]';
      console.log(`${marker} ${checked} ${formatPluginOption(row)}`);
    }
    renderedLines = rows.length + 4;
  };

  render();

  return await new Promise((resolveSelect, rejectSelect) => {
    const cleanup = () => {
      process.stdin.off('keypress', onKeypress);
      if (process.stdin.isTTY) process.stdin.setRawMode(false);
    };
    const onKeypress = (_value, key) => {
      if (key.name === 'up') {
        index = (index - 1 + rows.length) % rows.length;
        render();
      } else if (key.name === 'down') {
        index = (index + 1) % rows.length;
        render();
      } else if (key.name === 'space') {
        if (selected.has(index)) {
          selected.delete(index);
        } else {
          selected.add(index);
        }
        render();
      } else if (key.name === 'a') {
        if (selected.size === rows.length) {
          selected.clear();
        } else {
          rows.forEach((_row, optionIndex) => selected.add(optionIndex));
        }
        render();
      } else if (key.name === 'return') {
        cleanup();
        const selectedIndexes = selected.size ? Array.from(selected) : [index];
        const selectedRows = selectedIndexes
          .sort((left, right) => left - right)
          .map((selectedIndex) => rows[selectedIndex]);
        console.log(`\n已选择: ${selectedRows.map((row) => row.plugin.id).join(', ')}`);
        resolveSelect(selectedRows);
      } else if (key.name === 'escape' || (key.ctrl && key.name === 'c')) {
        cleanup();
        rejectSelect(new Error('操作已取消'));
      }
    };

    process.stdin.on('keypress', onKeypress);
  });
}

function run(command, args, options = {}) {
  try {
    return execFileSync(command, args, {
      cwd: options.cwd ?? ROOT,
      encoding: 'utf8',
      shell: process.platform === 'win32' && command === 'pnpm',
      stdio: options.inherit ? 'inherit' : 'pipe'
    })?.trim();
  } catch (error) {
    throw new Error(`执行命令失败: ${command} ${args.join(' ')}\n${error.message}`);
  }
}

const wait = (ms) => new Promise((resolveWait) => setTimeout(resolveWait, ms));

async function readJson(path) {
  return JSON.parse(await readFile(path, 'utf8'));
}

function assertVersion(version) {
  if (!/^\d+\.\d+\.\d+$/.test(version)) {
    throw new Error('版本号格式错误，请使用 x.y.z 格式');
  }
}

function getPluginDisplayName(item) {
  return item?.name?.fallback ?? item?.name?.i18nKey ?? null;
}

const normalizeRepoPath = (path) => path.replaceAll('\\', '/');

const pathStartsWith = (path, dir) => {
  const normalizedPath = normalizeRepoPath(path);
  const normalizedDir = normalizeRepoPath(dir).replace(/\/+$/g, '');
  return normalizedPath === normalizedDir || normalizedPath.startsWith(`${normalizedDir}/`);
};

function pluginRelevantDirs(plugin) {
  return [
    plugin.sourceDir,
    plugin.resourceSourceDir,
    plugin.kind === 'feature' ? `src/plugins/${plugin.id}` : null
  ].filter(Boolean);
}

function pluginChangedPaths(plugin, changedPaths) {
  const dirs = pluginRelevantDirs(plugin);
  return changedPaths.filter((path) => dirs.some((dir) => pathStartsWith(path, dir)));
}

function versionNeedsSync(marketplaceItem, manifest) {
  return Boolean(
    marketplaceItem?.version &&
    manifest?.version &&
    marketplaceItem.version !== manifest.version
  );
}

async function getMarketplaceItemsById() {
  const marketplace = await readJson(MARKETPLACE_PATH);
  return new Map((marketplace.plugins ?? []).map((item) => [item.id, item]));
}

async function getSourceManifest(plugin) {
  const manifestPath = plugin.resourceSourceDir && existsSync(resolve(ROOT, plugin.resourceSourceDir, 'plugin.json'))
    ? resolve(ROOT, plugin.resourceSourceDir, 'plugin.json')
    : resolve(ROOT, plugin.sourceDir, 'plugin.json');
  if (!existsSync(manifestPath)) return null;
  return await readJson(manifestPath);
}

async function listPlugins(changedPaths = []) {
  const marketplaceItemsById = await getMarketplaceItemsById();
  const rows = [];

  for (const plugin of pluginRepositories) {
    const marketplaceItem = marketplaceItemsById.get(plugin.id);
    const manifest = await getSourceManifest(plugin);
    const changed = pluginChangedPaths(plugin, changedPaths);
    const updateReasons = [
      ...(changed.length ? [`changed:${changed.length}`] : []),
      ...(versionNeedsSync(marketplaceItem, manifest)
        ? [`version:${marketplaceItem.version}->${manifest.version}`]
        : [])
    ];
    rows.push({
      plugin,
      marketplaceItem,
      manifest,
      name: getPluginDisplayName(marketplaceItem) ?? getPluginDisplayName(manifest) ?? plugin.id,
      version: marketplaceItem?.version ?? manifest?.version ?? 'unknown',
      changedPaths: changed,
      updateReasons,
      needsUpdate: updateReasons.length > 0
    });
  }

  return rows;
}

function printPluginList(rows) {
  console.log('\n可发布插件列表:');
  for (const [index, row] of rows.entries()) {
    console.log(`${String(index + 1).padStart(2, ' ')}. ${formatPluginOption(row)}`);
  }
}

async function choosePluginsByText(rows) {
  printPluginList(rows);
  const answer = (await question('\n请选择要更新的插件序号或 ID（多个用空格或逗号分隔，changed 选择有改动项）: ')).trim();
  const values = answer === 'changed'
    ? rows.filter((row) => row.needsUpdate).map((row) => row.plugin.id)
    : answer.split(/[,\s]+/).filter(Boolean);

  const selectedRows = values.map((value) => {
    const index = Number(value);
    return Number.isInteger(index) && index >= 1 && index <= rows.length
      ? rows[index - 1]
      : rows.find((item) => item.plugin.id === value);
  });

  if (selectedRows.some((row) => !row)) {
    throw new Error(`未知插件选择: ${answer}`);
  }
  if (!selectedRows.length) {
    throw new Error('未选择插件');
  }

  return [...new Map(selectedRows.map((row) => [row.plugin.id, row])).values()];
}

async function confirmRelease(rows, versionsByPluginId) {
  console.log('\n即将发布插件:');
  for (const row of rows) {
    console.log(
      `- ${row.plugin.id}: ${row.version} -> ${versionsByPluginId.get(row.plugin.id)} `
      + `(min app ${versionsByPluginId.get(`${row.plugin.id}:minAppVersion`)}, `
      + `GigaPuddings/${row.plugin.repo})`
    );
  }
  console.log(`主仓库同步: ${options.pushMain ? `${options.commitCurrent ? 'git add -A' : 'git add 插件相关文件'} && git commit && git push origin main` : '已禁用'}`);

  if (options.yes) {
    console.log('\n已按 --yes 跳过确认');
    return;
  }

  const confirm = (await question('\n确认继续发布？(Y/n): ')).trim().toLowerCase();
  if (confirm === 'n') {
    console.log('操作已取消');
    process.exit(0);
  }
}

async function askVersion(row) {
  console.log(`\n当前插件: ${row.plugin.id}`);
  console.log(`当前版本: ${row.version}`);
  if (options.version) {
    assertVersion(options.version);
    console.log(`新的插件版本号: ${options.version}`);
    return options.version;
  }
  const version = (await question('请输入新的插件版本号 (例如: 2.0.4): ')).trim();
  assertVersion(version);
  return version;
}

async function askMinAppVersion(row) {
  const currentMinAppVersion =
    row.manifest?.minAppVersion ??
    row.marketplaceItem?.minAppVersion ??
    packageJson.version;
  console.log(`当前最低应用版本: ${currentMinAppVersion}`);
  console.log(`当前主应用版本: ${packageJson.version}`);
  if (options.minAppVersion) {
    assertVersion(options.minAppVersion);
    console.log(`插件最低应用版本: ${options.minAppVersion}`);
    return options.minAppVersion;
  }
  const answer = (
    await question(
      '请输入插件最低应用版本 (直接回车保持当前；依赖本次主应用改动时通常填当前主应用版本): '
    )
  ).trim();
  const minAppVersion = answer || currentMinAppVersion;
  assertVersion(minAppVersion);
  return minAppVersion;
}

async function askVersions(rows) {
  const versionsByPluginId = new Map();
  for (const row of rows) {
    versionsByPluginId.set(row.plugin.id, await askVersion(row));
    versionsByPluginId.set(
      `${row.plugin.id}:minAppVersion`,
      await askMinAppVersion(row)
    );
  }
  return versionsByPluginId;
}

function gitOutput(args) {
  return execFileSync('git', args, {
    cwd: ROOT,
    encoding: 'utf8',
    stdio: 'pipe'
  }).trim();
}

function hasMainRepoChanges() {
  return gitOutput(['status', '--short']).length > 0;
}

function gitLines(args) {
  const output = gitOutput(args);
  return output ? output.split(/\r?\n/).filter(Boolean) : [];
}

function listMainRepoChanges() {
  return [...new Set([
    ...gitLines(['diff', '--name-only']),
    ...gitLines(['diff', '--cached', '--name-only']),
    ...gitLines(['ls-files', '--others', '--exclude-standard'])
  ])];
}

function assertMainRepoClean() {
  const changes = listMainRepoChanges();
  if (changes.length > 0) {
    if (options.allowDirty || options.commitCurrent) {
      const mode = options.commitCurrent ? '--commit-current' : '--allow-dirty';
      console.log(`\n已按 ${mode} 继续处理现有改动:\n${changes.join('\n')}`);
      return;
    }
    throw new Error(
      `插件发布前工作区必须干净，请先提交或处理以下文件:\n${changes.join('\n')}\n`
      + '如果这是上一次发布中断后留下的文件，请使用 pnpm plugins:tag -- --allow-dirty 恢复发布。'
    );
  }
}

async function confirmOverwritePluginTag(plugin, version) {
  const output = run('git', ['ls-remote', '--tags', `git@github.com:GigaPuddings/${plugin.repo}.git`, `refs/tags/${version}`]);
  if (!output) return false;

  if (options.forceTag) {
    console.log(`\n插件仓库标签 ${version} 已存在，已按 --force-tag 覆盖`);
    return true;
  }

  if (options.yes) {
    throw new Error(
      `插件仓库标签 ${plugin.id} ${version} 已存在。请递增插件版本重新发布，`
      + '或显式添加 --force-tag 覆盖标签。'
    );
  }

  const overwrite = (await question(`\n插件仓库标签 ${version} 已存在，是否覆盖？(y/N): `)).trim().toLowerCase();
  if (overwrite !== 'y') {
    console.log('操作已取消');
    process.exit(0);
  }
  return true;
}

async function confirmOverwritePluginTags(rows, versionsByPluginId) {
  const forceTagsByPluginId = new Map();
  for (const row of rows) {
    forceTagsByPluginId.set(
      row.plugin.id,
      await confirmOverwritePluginTag(row.plugin, versionsByPluginId.get(row.plugin.id))
    );
  }
  return forceTagsByPluginId;
}

async function assertDependencyTagsAvailable(row, selectedPluginIds = new Set()) {
  const dependencies = row.marketplaceItem?.dependencies ?? [];
  if (dependencies.length === 0) return;

  const marketplaceItemsById = await getMarketplaceItemsById();
  for (const dependencyId of dependencies) {
    if (selectedPluginIds.has(dependencyId)) continue;

    const dependency = marketplaceItemsById.get(dependencyId);
    const dependencyPlugin = pluginRepositories.find((plugin) => plugin.id === dependencyId);
    if (!dependencyPlugin || !dependency?.version) continue;

    const output = run('git', [
      'ls-remote',
      '--tags',
      `git@github.com:GigaPuddings/${dependencyPlugin.repo}.git`,
      `refs/tags/${dependency.version}`
    ]);
    if (!output) {
      throw new Error(
        `${row.plugin.id}: 依赖 ${dependencyId} 的远程标签 ${dependency.version} 不存在，`
        + `请先运行 pnpm plugins:tag 发布 ${dependencyId} ${dependency.version}`
      );
    }
  }
}

async function assertSelectedDependencyTagsAvailable(rows) {
  const selectedPluginIds = new Set(rows.map((row) => row.plugin.id));
  for (const row of rows) {
    await assertDependencyTagsAvailable(row, selectedPluginIds);
  }
}

function syncArgsFor(plugin, version, forceTag) {
  const args = [
    'scripts/sync-plugin-repositories.mjs',
    '--only',
    plugin.id,
    '--version',
    version,
    '--pin-marketplace-tags'
  ];

  if (forceTag) args.push('--force-tag');
  if (plugin.requiresExplicitResource) args.push(plugin.includeFlagName);
  return args;
}

function runBuildSteps(plugin, version) {
  if (plugin.packageCommand) {
    const [command, ...args] = plugin.packageCommand.split(' ');
    console.log(`\n正在生成 ${plugin.id} 资源包...`);
    const versionArgs = command === 'pnpm'
      ? ['--', '--version', version]
      : ['--version', version];
    run(command, [...args, ...versionArgs], { inherit: true });
    return;
  }

  if (plugin.kind === 'feature') {
    console.log(`\n正在构建 ${plugin.id} 插件运行时...`);
    run('pnpm', ['plugins:build-official', plugin.id], { inherit: true });
  }
}

function commitAndPushMainRepo(rows, versionsByPluginId) {
  if (!options.pushMain) {
    console.log('\n已按 --no-push-main 跳过主仓库提交和推送');
    return;
  }

  if (!hasMainRepoChanges()) {
    console.log('\n主仓库没有待提交的变更');
    return;
  }

  console.log('\n当前主仓库变更:');
  console.log(gitOutput(['status', '--short']));

  console.log('\n正在提交主仓库变更...');
  if (options.commitCurrent) {
    run('git', ['add', '-A'], { inherit: true });
  } else {
    const pluginPaths = rows.flatMap((row) => pluginRelevantDirs(row.plugin));
    run('git', ['add', '-A', '--', 'plugin-registry/marketplace/marketplace.json', ...pluginPaths], { inherit: true });
    const unstagedChanges = [
      ...gitLines(['diff', '--name-only']),
      ...gitLines(['ls-files', '--others', '--exclude-standard'])
    ];
    if (unstagedChanges.length > 0) {
      throw new Error(
        `插件发布产生了未纳入当前插件包的文件，请检查后重试:\n${unstagedChanges.join('\n')}\n`
        + '如果这些文件也属于本次发布，请使用 --commit-current 让发布命令统一提交。'
      );
    }
  }

  try {
    execSync('git diff --cached --quiet', { cwd: ROOT, stdio: 'ignore' });
    console.log('没有待提交的变更');
  } catch {
    const releaseLabel = rows
      .map((row) => `${row.plugin.id} ${versionsByPluginId.get(row.plugin.id)}`)
      .join(', ');
    run('git', ['commit', '-m', `release(plugin): ${releaseLabel}`, '--no-verify'], { inherit: true });
  }

  console.log('正在推送到 origin main...');
  run('git', ['push', 'origin', 'main'], { inherit: true });
}

async function readRemoteMarketplaceRawJson(attempt) {
  const url = `${REMOTE_MARKETPLACE_URL}?release_check=${Date.now()}-${attempt}`;
  const response = await fetch(url, {
    headers: {
      accept: 'application/vnd.github.raw+json',
      'cache-control': 'no-cache',
      'user-agent': 'snippets-code-plugin-release'
    },
    signal: AbortSignal.timeout(15000)
  });
  if (!response.ok) {
    throw new Error(`raw HTTP ${response.status}`);
  }
  return await response.json();
}

async function readRemoteMarketplaceApiJson(attempt) {
  const response = await fetch(`${REMOTE_MARKETPLACE_API_URL}&release_check=${Date.now()}-${attempt}`, {
    headers: {
      accept: 'application/vnd.github+json',
      'cache-control': 'no-cache',
      'user-agent': 'snippets-code-plugin-release',
      'x-github-api-version': '2022-11-28'
    },
    signal: AbortSignal.timeout(15000)
  });
  if (!response.ok) {
    throw new Error(`api HTTP ${response.status}`);
  }
  const payload = await response.json();
  if (typeof payload.content !== 'string') {
    throw new Error('api response missing content');
  }
  const jsonText = Buffer.from(payload.content.replace(/\s/g, ''), 'base64').toString('utf8');
  return JSON.parse(jsonText);
}

async function readRemoteMarketplaceCandidates(attempt) {
  const readers = [
    ['api', readRemoteMarketplaceApiJson],
    ['raw', readRemoteMarketplaceRawJson]
  ];
  const candidates = [];
  const errors = [];

  for (const [source, reader] of readers) {
    try {
      candidates.push({ source, marketplace: await reader(attempt) });
    } catch (error) {
      errors.push(`${source}: ${error?.message ?? error}`);
    }
  }

  if (!candidates.length) {
    throw new Error(errors.join('; '));
  }
  return candidates;
}

function remoteMarketplaceMismatch(marketplace, rows, versionsByPluginId) {
  const itemsById = new Map((marketplace.plugins ?? []).map((item) => [item.id, item]));

  for (const row of rows) {
    const item = itemsById.get(row.plugin.id);
    const version = versionsByPluginId.get(row.plugin.id);
    const minAppVersion = versionsByPluginId.get(`${row.plugin.id}:minAppVersion`);
    if (!item) {
      return `远程 marketplace 缺少插件 ${row.plugin.id}`;
    }
    if (item.version !== version) {
      return `远程 marketplace 仍是旧版本: ${row.plugin.id} ${item.version}，期望 ${version}`;
    }
    if (item.minAppVersion !== minAppVersion) {
      return `远程 marketplace 最低应用版本不一致: ${row.plugin.id} ${item.minAppVersion}，期望 ${minAppVersion}`;
    }
    if (item.compatibleAppVersion !== `>=${minAppVersion}`) {
      return `远程 marketplace 兼容版本不一致: ${row.plugin.id} ${item.compatibleAppVersion}，期望 >=${minAppVersion}`;
    }
    if (!item.packageUrl?.includes(`/archive/refs/tags/${version}.zip`)) {
      return `${row.plugin.id}: 远程 packageUrl 未固定到标签 ${version}`;
    }
  }

  return null;
}

async function verifyRemoteMarketplacePublished(rows, versionsByPluginId) {
  if (!options.pushMain) return;

  console.log('\n正在校验远程 marketplace 已刷新到最新版本...');

  let lastError = null;
  let lastMismatch = null;
  for (let attempt = 1; attempt <= 12; attempt += 1) {
    try {
      const candidates = await readRemoteMarketplaceCandidates(attempt);
      for (const candidate of candidates) {
        const mismatch = remoteMarketplaceMismatch(
          candidate.marketplace,
          rows,
          versionsByPluginId
        );
        if (!mismatch) {
          if (attempt > 1 || candidate.source !== 'raw') {
            console.log(`[Plugins] 远程 marketplace 校验通过: ${candidate.source}`);
          }
          return;
        }
        lastMismatch = mismatch;
      }
    } catch (error) {
      lastError = error;
    }

    await wait(Math.min(attempt * 1500, 6000));
  }

  throw new Error(
    `远程 marketplace 刷新校验失败: ${lastMismatch ?? lastError?.message ?? lastError}`
  );
}

async function main() {
  try {
    console.log('🚀 snippets-code 插件发布工具');
    const changedPaths = listMainRepoChanges();
    const rows = await listPlugins(changedPaths);

    if (options.checkUpdates) {
      printPluginList(rows);
      const changedRows = rows.filter((row) => row.needsUpdate);
      if (!changedRows.length) {
        console.log('\n未检测到需要更新的插件');
        return;
      }
      console.log('\n检测到需要更新的插件:');
      for (const row of changedRows) {
        console.log(`- ${row.plugin.id}: ${row.updateReasons.join(', ')}`);
        for (const path of row.changedPaths.slice(0, 8)) {
          console.log(`  ${path}`);
        }
        if (row.changedPaths.length > 8) {
          console.log(`  ... 还有 ${row.changedPaths.length - 8} 个文件`);
        }
      }
      return;
    }

    assertMainRepoClean();
    const selectedRows = await selectPlugins(rows);
    const versionsByPluginId = await askVersions(selectedRows);
    await confirmRelease(selectedRows, versionsByPluginId);
    await assertSelectedDependencyTagsAvailable(selectedRows);
    const forceTagsByPluginId = await confirmOverwritePluginTags(selectedRows, versionsByPluginId);

    for (const row of selectedRows) {
      const version = versionsByPluginId.get(row.plugin.id);
      runBuildSteps(row.plugin, version);

      console.log(`\n正在同步 ${row.plugin.id} 插件仓库、标签和 marketplace...`);
      run(
        'node',
        [
          ...syncArgsFor(row.plugin, version, forceTagsByPluginId.get(row.plugin.id)),
          '--min-app-version',
          versionsByPluginId.get(`${row.plugin.id}:minAppVersion`)
        ],
        { inherit: true }
      );
    }

    console.log('\n正在生成本地插件包索引...');
    run('pnpm', ['plugins:package'], { inherit: true });

    console.log('\n正在校验插件市场...');
    run(
      'pnpm',
      [
        'plugins:verify-marketplace',
        '--',
        '--strict-compatibility',
        '--only',
        selectedRows.map((row) => row.plugin.id).join(',')
      ],
      { inherit: true }
    );

    commitAndPushMainRepo(selectedRows, versionsByPluginId);
    await verifyRemoteMarketplacePublished(selectedRows, versionsByPluginId);

    console.log(
      `\n✨ 插件发布完成: ${
        selectedRows
          .map((row) => `${row.plugin.id} ${versionsByPluginId.get(row.plugin.id)}`)
          .join(', ')
      }`
    );
  } catch (error) {
    console.error('❌ 错误:', error.message);
    process.exit(1);
  } finally {
    rl.close();
  }
}

main();
