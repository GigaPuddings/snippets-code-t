import { createRequire } from 'module'
import { Octokit } from '@octokit/rest'

const require = createRequire(import.meta.url)
const tauriConfig = require('../src-tauri/tauri.conf.json')

// 从环境变量获取 GitHub token
const token = process.env.GITHUB_TOKEN
if (!token) {
  console.error('❌ 错误: 请设置 GITHUB_TOKEN 环境变量')
  console.log('使用方法: GITHUB_TOKEN=your_token node scripts/cleanup-old-assets.mjs v1.2.1')
  process.exit(1)
}

const octokit = new Octokit({ auth: token })

// GitHub 仓库信息
const owner = 'GigaPuddings'
const repo = 'snippets-code-t'
const tag = process.argv[2] || `v${tauriConfig.version}`

async function deleteAsset(releaseId, fileName) {
  try {
    const { data: release } = await octokit.repos.getReleaseByTag({
      owner,
      repo,
      tag,
    })
    
    const existingAsset = release.assets.find(asset => asset.name === fileName)
    
    if (existingAsset) {
      await octokit.repos.deleteReleaseAsset({
        owner,
        repo,
        asset_id: existingAsset.id
      })
      console.log(`✅ 已删除: ${fileName}`)
      return true
    } else {
      console.log(`⚠️  文件不存在: ${fileName}`)
      return false
    }
  } catch (error) {
    console.error(`❌ 删除失败 ${fileName}:`, error.message)
    return false
  }
}

async function main() {
  try {
    console.log(`🧹 正在清理 Release: ${tag}`)
    
    // 获取 release
    const { data: release } = await octokit.repos.getReleaseByTag({
      owner,
      repo,
      tag,
    })
    
    console.log(`📦 Release 名称: ${release.name}`)
    console.log(`📝 当前文件列表:`)
    release.assets.forEach(asset => {
      console.log(`   - ${asset.name}`)
    })
    console.log()
    
    // 删除带 _windows 后缀的文件
    const oldSetupFileName = `snippets-code_${tauriConfig.version}_x64-setup_windows.exe`
    const oldSigFileName = `${oldSetupFileName}.sig`
    
    await deleteAsset(release.id, oldSetupFileName)
    await deleteAsset(release.id, oldSigFileName)
    
    console.log()
    console.log('✨ 清理完成！')
    
    // 显示剩余文件
    const { data: updatedRelease } = await octokit.repos.getReleaseByTag({
      owner,
      repo,
      tag,
    })
    
    console.log(`📝 剩余文件列表:`)
    updatedRelease.assets.forEach(asset => {
      console.log(`   - ${asset.name}`)
    })
    
  } catch (error) {
    console.error('❌ 错误:', error.message)
    process.exit(1)
  }
}

main()

