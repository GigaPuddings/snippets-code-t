import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';
import readline from 'readline';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const RELEASE_NOTES_PATH = path.resolve(__dirname, '../RELEASE_NOTES.md');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const question = (query) => new Promise((resolve) => rl.question(query, resolve));

const execCommand = (command) => {
  try {
    return execSync(command, { stdio: 'inherit' });
  } catch (error) {
    throw new Error(`执行命令失败: ${command}\n${error.message}`);
  }
};

function validateCommitMessage(message) {
  try {
    execSync('pnpm exec commitlint', {
      input: `${message}\n`,
      stdio: ['pipe', 'inherit', 'inherit']
    });
  } catch {
    throw new Error(
      `提交信息不符合规范: "${message}"\n请检查 commitlint 配置，或调整发布提交前缀（例如 chore(release)）。`
    );
  }
}

async function readJson(jsonPath) {
  const content = await fs.readFile(jsonPath, 'utf-8');
  return JSON.parse(content);
}

async function writeJson(jsonPath, data) {
  await fs.writeFile(jsonPath, JSON.stringify(data, null, 2) + '\n');
}

async function checkTagExists(version) {
  try {
    execSync(`git rev-parse v${version}`, { stdio: 'ignore' });
    return true;
  } catch {
    return false;
  }
}

function compareVersions(a, b) {
  const pa = a.split('.').map(Number);
  const pb = b.split('.').map(Number);

  for (let i = 0; i < 3; i += 1) {
    if (pa[i] > pb[i]) return 1;
    if (pa[i] < pb[i]) return -1;
  }
  return 0;
}

function getLatestRemoteTagVersion() {
  try {
    const output = execSync('git ls-remote --tags --refs origin "v*"', { encoding: 'utf-8' }).trim();
    if (!output) return null;

    const versions = output
      .split('\n')
      .map((line) => line.split('\t')[1])
      .filter(Boolean)
      .map((ref) => ref.replace('refs/tags/v', ''))
      .filter((v) => /^\d+\.\d+\.\d+$/.test(v));

    if (versions.length === 0) return null;

    versions.sort(compareVersions);
    return versions[versions.length - 1];
  } catch {
    return null;
  }
}

function getChangedFiles() {
  const output = execSync('git status --porcelain', { encoding: 'utf-8' }).trim();
  if (!output) {
    return [];
  }

  return output
    .split('\n')
    .map((line) => line.slice(3).trim())
    .map((filePath) => {
      if (filePath.includes(' -> ')) {
        return filePath.split(' -> ')[1].trim();
      }
      return filePath;
    });
}

function assertCleanWorkingTree() {
  const changedFiles = getChangedFiles();
  if (changedFiles.length > 0) {
    throw new Error(
      `发布前工作区必须保持干净，请先提交或清理以下文件：\n${changedFiles.map((file) => `- ${file}`).join('\n')}`
    );
  }
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
    
    // 1. 检查更新说明
    await checkReleaseNotes();
    
    // 2. 显示当前版本并获取用户输入的新版本号
    const packagePath = path.resolve(__dirname, '../package.json');
    const tauriConfigPath = path.resolve(__dirname, '../src-tauri/tauri.conf.json');

    const currentPackageJson = await readJson(packagePath);
    const currentTauriConfig = await readJson(tauriConfigPath);

    const currentPackageVersion = currentPackageJson.version;
    const currentTauriVersion = currentTauriConfig.version;
    const latestRemoteVersion = getLatestRemoteTagVersion();

    console.log(`\n当前 package.json 版本: ${currentPackageVersion}`);
    console.log(`当前 tauri.conf.json 版本: ${currentTauriVersion}`);
    console.log(`远程最新标签版本: ${latestRemoteVersion ? `v${latestRemoteVersion}` : '未找到'}`);

    if (currentPackageVersion !== currentTauriVersion) {
      throw new Error(
        `版本文件不一致，请先同步后再发布。package.json=${currentPackageVersion}, tauri.conf.json=${currentTauriVersion}`
      );
    }

    const version = await question('\n请输入新的版本号 (例如: 1.2.5): ');
    if (!version.match(/^\d+\.\d+\.\d+$/)) {
      throw new Error('版本号格式错误，请使用 x.y.z 格式');
    }

    if (latestRemoteVersion && compareVersions(version, latestRemoteVersion) <= 0) {
      throw new Error(`新版本号必须大于远程最新版本 v${latestRemoteVersion}`);
    }

    // 3. 检查标签是否存在
    const tagExists = await checkTagExists(version);
    if (tagExists) {
      throw new Error(`标签 v${version} 已存在，请先删除远程和本地旧标签后再发布。`);
    }

    const filesToUpdate = [
      'package.json',
      'src-tauri/tauri.conf.json',
      'RELEASE_NOTES.md'
    ];

    // 4. 确认工作区是干净的，避免发布内容不一致
    assertCleanWorkingTree();

    // 更新 package.json
    console.log('正在更新 package.json...');
    const packageJson = await readJson(packagePath);
    packageJson.version = version;
    await writeJson(packagePath, packageJson);

    // 更新 tauri.conf.json
    console.log('正在更新 tauri.conf.json...');
    const tauriConfig = await readJson(tauriConfigPath);
    tauriConfig.version = version;
    await writeJson(tauriConfigPath, tauriConfig);

    // Git 操作
    console.log('\n正在提交更改...');

    const releaseCommitMessage = `chore(release): v${version}`;

    // 仅添加发布相关文件，避免误提交无关改动
    execCommand(`git add ${filesToUpdate.join(' ')}`);

    // 检查是否有待提交的更改
    const hasStagedChanges = (() => {
      try {
        execSync('git diff --cached --quiet');
        return false;
      } catch (error) {
        return error.status === 1;
      }
    })();

    if (hasStagedChanges) {
      validateCommitMessage(releaseCommitMessage);
      execCommand(`git commit -m "${releaseCommitMessage}"`);
    } else if (currentPackageVersion === version && currentTauriVersion === version) {
      console.log('发布文件已是目标版本，跳过版本提交，直接创建标签...');
    } else {
      throw new Error('发布文件未产生任何改动，无法继续生成版本提交。');
    }

    console.log('\n正在创建标签...');
    // 创建规范的带注释标签，便于追溯发布信息
    const tagMessage = `release: v${version}`;
    execCommand(`git tag -a v${version} -m "${tagMessage}"`);

    console.log('正在推送到远程仓库...');
    execCommand('git push origin HEAD');
    execCommand(`git push origin v${version}`);

    console.log(`\n✨ 发布成功！版本 v${version} 已推送到远程仓库`);
    console.log(`\n📦 GitHub Actions 正在构建中...`);
    console.log(`🔗 查看进度: https://github.com/GigaPuddings/snippets-code-t/actions`);
  } catch (error) {
    console.error('❌ 错误:', error.message);
    process.exit(1);
  } finally {
    rl.close();
  }
}

updateVersion(); 
