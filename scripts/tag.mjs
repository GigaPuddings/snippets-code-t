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

async function getReleaseNotes(version) {
  const tempFile = path.resolve(__dirname, '../RELEASE_NOTES_TEMP.md');
  
  // 创建模板文件
  const template = `# 发布说明 v${version}

## 🎉 新增功能
<!-- 列出新增的功能，例如：-->
<!-- - 添加了深色模式支持 -->
<!-- - 实现了自动更新功能 -->


## 🐛 问题修复
<!-- 列出修复的问题，例如：-->
<!-- - 修复了登录失败的问题 -->
<!-- - 解决了内存泄漏问题 -->


## 🔧 优化改进
<!-- 列出优化和改进，例如：-->
<!-- - 优化了启动速度 -->
<!-- - 改进了用户界面 -->


## 💥 破坏性变更
<!-- 如果有破坏性变更，请在此列出 -->


---
📝 使用说明：
1. 请在上方编辑发布说明（保留 Markdown 格式）
2. 删除不需要的章节和注释（<!-- -->）
3. 空章节会被自动移除
4. 保存并关闭文件即可
5. 如果不想添加发布说明，删除所有内容后保存
---
`;
  
  await fs.writeFile(tempFile, template, 'utf-8');
  
  // 获取编辑器
  const editor = process.env.EDITOR || process.env.VISUAL || 'notepad';
  
  console.log(`\n📝 正在打开编辑器编辑发布说明...`);
  console.log(`💡 使用编辑器: ${editor}`);
  console.log(`💡 提示: 编辑完成后保存并关闭编辑器即可\n`);
  
  try {
    execSync(`"${editor}" "${tempFile}"`, { 
      stdio: 'inherit',
      shell: true 
    });
    
    // 读取编辑后的内容
    const content = await fs.readFile(tempFile, 'utf-8');
    
    // 移除模板中的注释和说明
    const lines = content.split('\n');
    const filteredLines = [];
    let inHelpSection = false;
    
    for (const line of lines) {
      // 跳过帮助说明部分
      if (line.trim() === '---') {
        if (!inHelpSection) {
          inHelpSection = true;
          continue;
        } else {
          break; // 遇到第二个 --- 就停止
        }
      }
      
      if (inHelpSection) continue;
      
      // 移除 HTML 注释
      if (line.trim().startsWith('<!--') || line.trim().startsWith('-->')) {
        continue;
      }
      
      filteredLines.push(line);
    }
    
    // 清理连续的空行和首尾空行
    let releaseNotes = filteredLines.join('\n').trim();
    releaseNotes = releaseNotes.replace(/\n{3,}/g, '\n\n');
    
    // 删除空的章节
    releaseNotes = releaseNotes.replace(/##[^\n]+\n+(?=##|$)/g, '');
    
    // 删除临时文件
    await fs.unlink(tempFile).catch(() => {});
    
    return releaseNotes;
  } catch (error) {
    // 删除临时文件
    await fs.unlink(tempFile).catch(() => {});
    throw error;
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
    console.log('\n' + '═'.repeat(60));
    console.log('📝 发布说明 (Release Notes)');
    console.log('═'.repeat(60));
    const addNotes = await question('是否添加发布说明？(Y/n): ');
    let releaseNotes = '';
    
    if (addNotes.toLowerCase() !== 'n') {
      try {
        releaseNotes = await getReleaseNotes(version);
        
        if (releaseNotes.trim()) {
          console.log('\n' + '─'.repeat(60));
          console.log('✅ 发布说明预览：');
          console.log('─'.repeat(60));
          console.log(releaseNotes);
          console.log('─'.repeat(60));
          
          const confirm = await question('\n确认使用此发布说明？(Y/n): ');
          if (confirm.toLowerCase() === 'n') {
            console.log('❌ 已取消发布说明');
            releaseNotes = '';
          } else {
            console.log('✅ 发布说明已确认');
          }
        } else {
          console.log('⚠️  发布说明为空，将不添加发布说明');
        }
      } catch (error) {
        console.error('❌ 编辑发布说明失败:', error.message);
        console.log('将继续创建标签，但不添加发布说明');
        releaseNotes = '';
      }
    } else {
      console.log('⏭️  跳过发布说明');
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
