import { Octokit } from '@octokit/rest'
import fs from 'fs'
import path from 'path'

import tauriConfig from '../src-tauri/tauri.conf.json' assert { type: 'json' }

// 从环境变量获取 GitHub token
const token = process.env.GITHUB_TOKEN
const octokit = new Octokit({ auth: token })

// GitHub 仓库信息
const [owner, repo] = process.env.GITHUB_REPOSITORY.split('/')
const tag = process.env.GITHUB_REF_NAME

async function uploadFile(releaseId, filePath, fileName) {
  try {
    const fileContent = fs.readFileSync(filePath)
    const contentType = fileName.endsWith('.sig') ? 'text/plain' : 'application/octet-stream'
    
    // 检查文件是否已存在
    const { data: release } = await octokit.repos.getReleaseByTag({
      owner,
      repo,
      tag,
    })
    
    const existingAsset = release.assets.find(asset => asset.name === fileName)
    
    if (existingAsset) {
      console.log(`⚠️  文件已存在，跳过: ${fileName}`)
      return
    }
    
    await octokit.repos.uploadReleaseAsset({
      owner,
      repo,
      release_id: releaseId,
      name: fileName,
      data: fileContent,
      headers: {
        'content-type': contentType,
        'content-length': fileContent.length
      }
    })
    
    console.log(`✅ 已上传: ${fileName}`)
  } catch (error) {
    console.error(`❌ 上传失败 ${fileName}:`, error.message)
    throw error
  }
}

async function main() {
  try {
    // 获取 release
    const { data: release } = await octokit.repos.getReleaseByTag({
      owner,
      repo,
      tag,
    })

    if (!release.draft) {
      console.warn('⚠️  Release 不是草稿状态，仍会继续上传资产，但建议先创建草稿 Release')
    }

    console.log(`📦 正在上传资产到 Release: ${release.name}`)

    // 构建文件路径 - 本地构建的文件本来就不带 _windows 后缀
    const basePath = path.resolve('./src-tauri/target/release/bundle/nsis')
    const setupFileName = `snippets-code_${tauriConfig.version}_x64-setup.exe`
    const setupFilePath = path.join(basePath, setupFileName)
    const sigFilePath = `${setupFilePath}.sig`

    // 上传安装文件
    if (fs.existsSync(setupFilePath)) {
      await uploadFile(release.id, setupFilePath, setupFileName)
    } else {
      console.error(`❌ 文件不存在: ${setupFilePath}`)
      process.exit(1)
    }

    // 上传签名文件
    if (fs.existsSync(sigFilePath)) {
      await uploadFile(release.id, sigFilePath, `${setupFileName}.sig`)
    } else {
      console.warn(`⚠️  签名文件不存在: ${sigFilePath}`)
    }

    console.log('✨ 所有文件上传完成')
  } catch (error) {
    console.error('❌ 错误:', error)
    process.exit(1)
  }
}

main()

