import { existsSync } from 'node:fs';
import { execFileSync, execSync } from 'node:child_process';
import { readFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import readline from 'node:readline';
import { MARKETPLACE_PATH, pluginRepositories, ROOT } from './plugin-release-config.mjs';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const args = process.argv.slice(2).filter((arg) => arg !== '--');
const options = {
  pushMain: !args.includes('--no-push-main')
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
  return `${row.plugin.id.padEnd(28)} ${row.version.padEnd(10)} ${kind.padEnd(8)} ${row.name}`;
}

function clearSelect(lines) {
  readline.moveCursor(process.stdout, 0, -lines);
  readline.clearScreenDown(process.stdout);
}

async function selectPlugin(rows) {
  if (!process.stdin.isTTY || !process.stdout.isTTY) {
    return choosePluginByText(rows);
  }

  readline.emitKeypressEvents(process.stdin);
  if (process.stdin.isTTY) process.stdin.setRawMode(true);

  let index = 0;
  let renderedLines = 0;

  const render = () => {
    if (renderedLines > 0) clearSelect(renderedLines);
    console.log('\n请选择要更新的插件，使用 ↑/↓ 切换，Enter 确认，Esc 取消:\n');
    for (const [optionIndex, row] of rows.entries()) {
      const marker = optionIndex === index ? '>' : ' ';
      console.log(`${marker} ${formatPluginOption(row)}`);
    }
    renderedLines = rows.length + 3;
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
      } else if (key.name === 'return') {
        cleanup();
        console.log(`\n已选择: ${rows[index].plugin.id}`);
        resolveSelect(rows[index]);
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

async function getMarketplaceItemsById() {
  const marketplace = await readJson(MARKETPLACE_PATH);
  return new Map((marketplace.plugins ?? []).map((item) => [item.id, item]));
}

async function getSourceManifest(plugin) {
  const manifestPath = resolve(ROOT, plugin.sourceDir, 'plugin.json');
  if (!existsSync(manifestPath)) return null;
  return await readJson(manifestPath);
}

async function listPlugins() {
  const marketplaceItemsById = await getMarketplaceItemsById();
  const rows = [];

  for (const plugin of pluginRepositories) {
    const marketplaceItem = marketplaceItemsById.get(plugin.id);
    const manifest = await getSourceManifest(plugin);
    rows.push({
      plugin,
      marketplaceItem,
      manifest,
      name: getPluginDisplayName(marketplaceItem) ?? getPluginDisplayName(manifest) ?? plugin.id,
      version: marketplaceItem?.version ?? manifest?.version ?? 'unknown'
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

async function choosePluginByText(rows) {
  printPluginList(rows);
  const answer = (await question('\n请选择要更新的插件序号或 ID: ')).trim();
  const index = Number(answer);
  const row = Number.isInteger(index) && index >= 1 && index <= rows.length
    ? rows[index - 1]
    : rows.find((item) => item.plugin.id === answer);

  if (!row) {
    throw new Error(`未知插件选择: ${answer}`);
  }

  return row;
}

async function confirmRelease(row, version) {
  console.log('\n即将发布插件:');
  console.log(`插件 ID: ${row.plugin.id}`);
  console.log(`当前版本: ${row.version}`);
  console.log(`新版本: ${version}`);
  console.log(`仓库: GigaPuddings/${row.plugin.repo}`);
  console.log(`主仓库同步: ${options.pushMain ? 'git add -A && git commit && git push origin main' : '已禁用'}`);

  const confirm = (await question('\n确认继续发布？(Y/n): ')).trim().toLowerCase();
  if (confirm === 'n') {
    console.log('操作已取消');
    process.exit(0);
  }
}

async function askVersion(row) {
  console.log(`\n当前插件: ${row.plugin.id}`);
  console.log(`当前版本: ${row.version}`);
  const version = (await question('请输入新的插件版本号 (例如: 2.0.4): ')).trim();
  assertVersion(version);
  return version;
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

async function confirmOverwritePluginTag(plugin, version) {
  const output = run('git', ['ls-remote', '--tags', `git@github.com:GigaPuddings/${plugin.repo}.git`, `refs/tags/${version}`]);
  if (!output) return false;

  const overwrite = (await question(`\n插件仓库标签 ${version} 已存在，是否覆盖？(y/N): `)).trim().toLowerCase();
  if (overwrite !== 'y') {
    console.log('操作已取消');
    process.exit(0);
  }
  return true;
}

async function assertDependencyTagsAvailable(row) {
  const dependencies = row.marketplaceItem?.dependencies ?? [];
  if (dependencies.length === 0) return;

  const marketplaceItemsById = await getMarketplaceItemsById();
  for (const dependencyId of dependencies) {
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

function commitAndPushMainRepo(plugin, version) {
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
  run('git', ['add', '-A'], { inherit: true });
  try {
    execSync('git diff --cached --quiet', { cwd: ROOT, stdio: 'ignore' });
    console.log('没有待提交的变更');
  } catch {
    run('git', ['commit', '-m', `release(plugin): ${plugin.id} ${version}`, '--no-verify'], { inherit: true });
  }

  console.log('正在推送到 origin main...');
  run('git', ['push', 'origin', 'main'], { inherit: true });
}

async function main() {
  try {
    console.log('🚀 snippets-code 插件发布工具');
    const rows = await listPlugins();
    const row = await selectPlugin(rows);
    const version = await askVersion(row);
    await confirmRelease(row, version);
    await assertDependencyTagsAvailable(row);
    const forceTag = await confirmOverwritePluginTag(row.plugin, version);

    runBuildSteps(row.plugin, version);

    console.log('\n正在同步插件仓库、标签和 marketplace...');
    run('node', syncArgsFor(row.plugin, version, forceTag), { inherit: true });

    console.log('\n正在生成本地插件包索引...');
    run('pnpm', ['plugins:package'], { inherit: true });

    console.log('\n正在校验插件市场...');
    run('pnpm', ['plugins:verify-marketplace'], { inherit: true });

    commitAndPushMainRepo(row.plugin, version);

    console.log(`\n✨ 插件发布完成: ${row.plugin.id} ${version}`);
  } catch (error) {
    console.error('❌ 错误:', error.message);
    process.exit(1);
  } finally {
    rl.close();
  }
}

main();
