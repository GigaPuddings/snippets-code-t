import { createRequire } from 'module'
import { Octokit } from '@octokit/rest'
import fs from 'fs/promises'
import path from 'path'

const require = createRequire(import.meta.url)
const tauriConfig = require('../src-tauri/tauri.conf.json')

// 从环境变量获取 GitHub token
const token = process.env.GITHUB_TOKEN
const octokit = new Octokit({ auth: token })

// GitHub 仓库信息
const [owner, repo] = process.env.GITHUB_REPOSITORY.split('/')

async function main() {
  try {
    // 获取固定 updater tag 的 release
    const { data: release } = await octokit.rest.repos.getReleaseByTag({
      owner,
      repo,
      tag: 'updater', // 使用固定的 updater tag
    })

    // 构建文件路径
    const basePath = path.resolve('./src-tauri/target/release/bundle')
    const setupFile = path.join(basePath, 'nsis', `snippets-code_${tauriConfig.version}_x64-setup.exe`)
    const sigFile = `${setupFile}.sig`

    // 读取签名文件
    const signature = await fs.readFile(sigFile, 'utf8')

    // 获取安装包下载URL
    const setupAsset = release.assets.find(asset => 
      asset.name === path.basename(setupFile)
    )

    if (!setupAsset) {
      throw new Error('Setup file not found in release assets')
    }

    // 创建 latest.json 内容
    const latestJson = {
      version: tauriConfig.version,
      notes: release.body || '',
      pub_date: release.published_at || new Date().toISOString(),
      platforms: {
        'windows-x86_64': {
          signature: signature.trim(),
          url: setupAsset.browser_download_url
        }
      }
    }

    // 删除已存在的 latest.json
    const deletePromises = release.assets
      .filter(asset => asset.name === 'latest.json')
      .map(asset => 
        octokit.rest.repos.deleteReleaseAsset({
          owner,
          repo,
          asset_id: asset.id
        })
      )

    await Promise.all(deletePromises)

    // 上传新的 latest.json
    await octokit.rest.repos.uploadReleaseAsset({
      owner,
      repo,
      release_id: release.id,
      name: 'latest.json',
      data: JSON.stringify(latestJson, null, 2)
    })

    console.log('Successfully updated latest.json:', latestJson)
  } catch (error) {
    console.error('Error:', error)
    process.exit(1)
  }
}

main()

