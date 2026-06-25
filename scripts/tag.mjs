import { createRequire } from 'module';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';
import readline from 'readline';

const require = createRequire(import.meta.url);
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const RELEASE_NOTES_PATH = path.resolve(__dirname, '../RELEASE_NOTES.md');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const question = (query) =>
  new Promise((resolve) => rl.question(query, resolve));

const execCommand = (command) => {
  try {
    return execSync(command, { stdio: 'inherit' });
  } catch (error) {
    throw new Error(`执行命令失败: ${command}\n${error.message}`);
  }
};

function gitLines(command) {
  return execSync(command, { encoding: 'utf8' })
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean);
}

function getCurrentBranch() {
  const branch = execSync('git rev-parse --abbrev-ref HEAD', {
    encoding: 'utf8'
  }).trim();
  if (!branch || branch === 'HEAD') {
    throw new Error('发布前请切换到一个本地分支，当前处于 detached HEAD 状态');
  }
  return branch;
}

function assertReleaseWorkspaceClean() {
  const allowedChanges = new Set(['RELEASE_NOTES.md']);
  const changedFiles = new Set([
    ...gitLines('git diff --name-only'),
    ...gitLines('git diff --cached --name-only'),
    ...gitLines('git ls-files --others --exclude-standard')
  ]);
  const unexpectedChanges = [...changedFiles].filter(
    (file) => !allowedChanges.has(file)
  );
  if (unexpectedChanges.length > 0) {
    throw new Error(
      `主应用发布前工作区必须干净，请先提交或处理以下文件:\n${unexpectedChanges.join('\n')}`
    );
  }
}

async function checkTagExists(version) {
  try {
    execSync(`git rev-parse v${version}`, { stdio: 'ignore' });
    return true;
  } catch {
    return false;
  }
}

async function hasChanges(files) {
  try {
    execSync(`git diff --quiet HEAD ${files.join(' ')}`);
    return false;
  } catch {
    return true;
  }
}

function updateCargoPackageVersion(content, version) {
  return content.replace(
    /(\[package\][\s\S]*?\nversion\s*=\s*")[^"]+(")/,
    `$1${version}$2`
  );
}

function updateCargoLockPackageVersion(content, version) {
  return content.replace(
    /(\[\[package\]\]\s*\nname\s*=\s*"snippets-code"\s*\nversion\s*=\s*")[^"]+(")/,
    `$1${version}$2`
  );
}

async function getReleaseNotes() {
  try {
    const content = await fs.readFile(RELEASE_NOTES_PATH, 'utf-8');
    return content.trim();
  } catch {
    return null;
  }
}

async function checkReleaseNotes() {
  const notes = await getReleaseNotes();
  if (!notes) {
    console.log('\n⚠️  未找到 RELEASE_NOTES.md 文件');
    const create = await question('是否创建默认模板？(Y/n): ');
    if (create.toLowerCase() !== 'n') {
      const template = `🎉 新增功能：
- 

🐛 问题修复：
- 

🔧 优化改进：
- `;
      await fs.writeFile(RELEASE_NOTES_PATH, template);
      console.log('✅ 已创建 RELEASE_NOTES.md，请编辑后重新运行');
      process.exit(0);
    }
    return null;
  }

  console.log('\n📋 更新说明预览:');
  console.log('─'.repeat(40));
  console.log(notes);
  console.log('─'.repeat(40));

  const confirm = await question('\n确认使用以上更新说明？(Y/n): ');
  if (confirm.toLowerCase() === 'n') {
    console.log('请编辑 RELEASE_NOTES.md 后重新运行');
    process.exit(0);
  }

  return notes;
}

async function updateVersion() {
  try {
    console.log('🚀 snippets-code 发布工具\n');
    assertReleaseWorkspaceClean();

    // 1. 检查更新说明
    await checkReleaseNotes();

    // 2. 获取用户输入的版本号
    const version = await question('\n请输入新的版本号 (例如: 1.2.5): ');
    if (!version.match(/^\d+\.\d+\.\d+$/)) {
      throw new Error('版本号格式错误，请使用 x.y.z 格式');
    }

    // 3. 检查标签是否存在
    const tagExists = await checkTagExists(version);
    if (tagExists) {
      const overwrite = await question('标签已存在，是否覆盖？(y/N): ');
      if (overwrite.toLowerCase() !== 'y') {
        console.log('操作已取消');
        process.exit(0);
      }
      console.log('正在删除已存在的标签...');
      execCommand(`git tag -d v${version}`);
      execCommand(`git push origin :refs/tags/v${version}`);
    }

    const filesToUpdate = [
      'package.json',
      'src-tauri/tauri.conf.json',
      'src-tauri/Cargo.toml',
      'src-tauri/Cargo.lock',
      'RELEASE_NOTES.md'
    ];

    // 更新 package.json
    console.log('正在更新 package.json...');
    const packagePath = path.resolve(__dirname, '../package.json');
    const packageJson = require(packagePath);
    packageJson.version = version;
    await fs.writeFile(
      packagePath,
      JSON.stringify(packageJson, null, 2) + '\n'
    );

    // 更新 tauri.conf.json
    console.log('正在更新 tauri.conf.json...');
    const tauriConfigPath = path.resolve(
      __dirname,
      '../src-tauri/tauri.conf.json'
    );
    const tauriConfig = require(tauriConfigPath);
    tauriConfig.version = version;
    await fs.writeFile(
      tauriConfigPath,
      JSON.stringify(tauriConfig, null, 2) + '\n'
    );

    // 更新 Cargo.toml
    console.log('正在更新 Cargo.toml...');
    const cargoTomlPath = path.resolve(__dirname, '../src-tauri/Cargo.toml');
    const cargoToml = await fs.readFile(cargoTomlPath, 'utf8');
    await fs.writeFile(
      cargoTomlPath,
      updateCargoPackageVersion(cargoToml, version)
    );

    // 更新 Cargo.lock 中主应用包版本，保持 Windows 文件版本和发布版本一致。
    console.log('正在更新 Cargo.lock...');
    const cargoLockPath = path.resolve(__dirname, '../src-tauri/Cargo.lock');
    const cargoLock = await fs.readFile(cargoLockPath, 'utf8');
    await fs.writeFile(
      cargoLockPath,
      updateCargoLockPackageVersion(cargoLock, version)
    );

    console.log('正在校验发布版本一致性...');
    execCommand('node scripts/verify-release-versions.mjs');

    // Git 操作
    console.log('\n正在提交更改...');

    // 主应用发布只提交版本与发布说明文件，避免捎带插件或开发中的改动。
    execCommand(`git add -- ${filesToUpdate.join(' ')}`);

    // 检查是否有待提交的更改
    try {
      execSync('git diff --cached --quiet');
      console.log('没有待提交的更改');
    } catch {
      execCommand(`git commit -m "release: v${version}" --no-verify`);
    }

    console.log('\n正在创建标签...');
    // 创建简单标签（不带注释）
    execCommand(`git tag v${version}`);

    const currentBranch = getCurrentBranch();
    console.log('正在推送发布提交到远程分支...');
    execCommand(`git push origin ${currentBranch}`);

    console.log('正在推送标签到远程仓库...');
    execCommand(`git push origin v${version}`);

    console.log(`\n✨ 发布成功！版本 v${version} 已推送到远程仓库`);
    console.log(`\n📦 GitHub Actions 正在构建中...`);
    console.log(
      `🔗 查看进度: https://github.com/GigaPuddings/snippets-code-t/actions`
    );
  } catch (error) {
    console.error('❌ 错误:', error.message);
    process.exit(1);
  } finally {
    rl.close();
  }
}

updateVersion();
