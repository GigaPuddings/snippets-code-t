/**
 * 格式化发布说明脚本
 * 读取 RELEASE_NOTES.md 并转换为单行格式
 * 
 * 用法：
 *   node scripts/format-release-notes.mjs          # 输出到控制台
 *   node scripts/format-release-notes.mjs --copy   # 复制到剪贴板
 *   node scripts/format-release-notes.mjs --env    # 输出为环境变量格式
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { exec } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 读取 RELEASE_NOTES.md
const notesPath = path.join(__dirname, '..', 'RELEASE_NOTES.md');

if (!fs.existsSync(notesPath)) {
  console.error('错误: RELEASE_NOTES.md 文件不存在');
  console.error('请在项目根目录创建 RELEASE_NOTES.md 文件并填写更新内容');
  process.exit(1);
}

const content = fs.readFileSync(notesPath, 'utf-8').trim();

// 转换为单行格式（保留 \n 作为字面字符串）
const singleLine = content
  .split('\n')
  .map(line => line.trimEnd())
  .filter((line, index, arr) => {
    // 移除连续的空行，只保留一个
    if (line === '' && arr[index - 1] === '') return false;
    return true;
  })
  .join('\\n');

// 处理命令行参数
const args = process.argv.slice(2);

if (args.includes('--copy')) {
  // 复制到剪贴板 (Windows)
  const proc = exec('clip', (err) => {
    if (err) {
      console.error('复制到剪贴板失败:', err.message);
      process.exit(1);
    }
    console.log('✅ 已复制到剪贴板！');
    console.log('\n预览:');
    console.log(singleLine.substring(0, 100) + '...');
  });
  proc.stdin.write(singleLine);
  proc.stdin.end();
} else if (args.includes('--env')) {
  // 输出为 GitHub Actions 环境变量格式
  console.log(`RELEASE_BODY=${singleLine}`);
} else if (args.includes('--json')) {
  // 输出为 JSON 格式（用于 API 调用）
  console.log(JSON.stringify({ body: content }));
} else if (args.includes('--raw')) {
  // 输出原始多行内容
  console.log(content);
} else {
  // 默认输出单行格式
  console.log(singleLine);
}
