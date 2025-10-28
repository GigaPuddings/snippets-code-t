import { createRequire } from 'module';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';
import readline from 'readline';

const require = createRequire(import.meta.url);
const __dirname = path.dirname(fileURLToPath(import.meta.url));

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

const execCommandOutput = (command) => {
  try {
    return execSync(command, { encoding: 'utf-8' }).trim();
  } catch (error) {
    throw new Error(`执行命令失败: ${command}\n${error.message}`);
  }
};

async function getReleaseNotes() {
  console.log('\n📝 请输入发布说明（支持多行，输入空行结束）:');
  console.log('提示：可以使用以下格式：');
  console.log('  新增功能：');
  console.log('  - 功能1');
  console.log('  - 功能2');
  console.log('  修复问题：');
  console.log('  - 修复1');
  console.log('  - 修复2\n');
  
  const lines = [];
  let emptyLineCount = 0;
  
  return new Promise((resolve) => {
    const inputRl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
      prompt: '> '
    });
    
    inputRl.prompt();
    
    inputRl.on('line', (line) => {
      if (line.trim() === '') {
        emptyLineCount++;
        if (emptyLineCount >= 2) {
          inputRl.close();
          resolve(lines.join('\n'));
          return;
        }
      } else {
        emptyLineCount = 0;
      }
      lines.push(line);
      inputRl.prompt();
    });
  });
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

async function updateVersion() {
  try {
    // 获取用户输入的版本号
    const version = await question('请输入新的版本号 (例如: 0.0.1): ');
    if (!version.match(/^\d+\.\d+\.\d+$/)) {
      throw new Error('版本号格式错误，请使用 x.y.z 格式');
    }

    // 检查标签是否存在
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
      'src-tauri/tauri.conf.json'
    ];

    // 更新 package.json
    console.log('正在更新 package.json...');
    const packagePath = path.resolve(__dirname, '../package.json');
    const packageJson = require(packagePath);
    packageJson.version = version;
    await fs.writeFile(packagePath, JSON.stringify(packageJson, null, 2) + '\n');

    // 更新 tauri.conf.json
    console.log('正在更新 tauri.conf.json...');
    const tauriConfigPath = path.resolve(__dirname, '../src-tauri/tauri.conf.json');
    const tauriConfig = require(tauriConfigPath);
    tauriConfig.version = version;
    await fs.writeFile(tauriConfigPath, JSON.stringify(tauriConfig, null, 2) + '\n');

    // Git 操作
    console.log('正在提交更改...');
    
    // 检查文件是否有实际更改
    if (await hasChanges(filesToUpdate)) {
      execCommand(`git add ${filesToUpdate.join(' ')}`);
      execCommand(`git commit -m "chore: bump version to ${version}" --no-verify`);
    } else {
      console.log('文件没有变化，跳过提交步骤');
    }

    // 询问是否添加发布说明
    const addNotes = await question('\n是否添加发布说明？(Y/n): ');
    let releaseNotes = '';
    
    if (addNotes.toLowerCase() !== 'n') {
      releaseNotes = await getReleaseNotes();
      
      if (releaseNotes.trim()) {
        console.log('\n✅ 发布说明预览：');
        console.log('─'.repeat(50));
        console.log(releaseNotes);
        console.log('─'.repeat(50));
        
        const confirm = await question('\n确认使用此发布说明？(Y/n): ');
        if (confirm.toLowerCase() === 'n') {
          console.log('已取消发布说明，将使用默认说明');
          releaseNotes = '';
        }
      }
    }

    console.log('\n正在创建标签...');
    
    // 创建带注释的标签
    if (releaseNotes.trim()) {
      // 保存发布说明到临时文件
      const tempNotesFile = path.resolve(__dirname, '../.release-notes.tmp');
      await fs.writeFile(tempNotesFile, releaseNotes);
      execCommand(`git tag -a v${version} -F "${tempNotesFile}"`);
      await fs.unlink(tempNotesFile);
    } else {
      // 创建简单标签
      execCommand(`git tag v${version}`);
    }
    
    console.log('正在推送到远程仓库...');
    execCommand(`git push origin v${version}`);
    execCommand('git push');

    console.log(`✨ 成功更新版本号到 ${version} 并推送到远程仓库`);
  } catch (error) {
    console.error('❌ 错误:', error.message);
    process.exit(1);
  } finally {
    rl.close();
  }
}

updateVersion(); 
