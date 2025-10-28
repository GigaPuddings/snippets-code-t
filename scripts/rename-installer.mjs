import { createRequire } from 'module'
import fs from 'fs'
import path from 'path'

const require = createRequire(import.meta.url)
const tauriConfig = require('../src-tauri/tauri.conf.json')

// 构建文件路径
const basePath = path.resolve('./src-tauri/target/release/bundle/nsis')
const oldFileName = `snippets-code_${tauriConfig.version}_x64-setup_windows.exe`
const newFileName = `snippets-code_${tauriConfig.version}_x64-setup.exe`

const oldFilePath = path.join(basePath, oldFileName)
const newFilePath = path.join(basePath, newFileName)

const oldSigPath = `${oldFilePath}.sig`
const newSigPath = `${newFilePath}.sig`

try {
  // 检查旧文件是否存在
  if (fs.existsSync(oldFilePath)) {
    // 重命名安装文件
    fs.renameSync(oldFilePath, newFilePath)
    console.log(`✅ 已重命名: ${oldFileName} -> ${newFileName}`)
    
    // 重命名签名文件
    if (fs.existsSync(oldSigPath)) {
      fs.renameSync(oldSigPath, newSigPath)
      console.log(`✅ 已重命名: ${oldFileName}.sig -> ${newFileName}.sig`)
    }
    
    // 同时重命名 MSI 文件（如果存在）
    const msiBasePath = path.resolve('./src-tauri/target/release/bundle/msi')
    const oldMsiName = `snippets-code_${tauriConfig.version}_x64_zh-CN.msi`
    const newMsiName = `snippets-code_${tauriConfig.version}_x64.msi`
    const oldMsiPath = path.join(msiBasePath, oldMsiName)
    const newMsiPath = path.join(msiBasePath, newMsiName)
    
    if (fs.existsSync(oldMsiPath)) {
      fs.renameSync(oldMsiPath, newMsiPath)
      console.log(`✅ 已重命名: ${oldMsiName} -> ${newMsiName}`)
      
      if (fs.existsSync(`${oldMsiPath}.sig`)) {
        fs.renameSync(`${oldMsiPath}.sig`, `${newMsiPath}.sig`)
        console.log(`✅ 已重命名: ${oldMsiName}.sig -> ${newMsiName}.sig`)
      }
    }
  } else {
    console.log(`⚠️ 文件不存在: ${oldFilePath}`)
    console.log('可能已经是正确的文件名，或构建尚未完成')
  }
} catch (error) {
  console.error('❌ 重命名失败:', error)
  process.exit(1)
}

