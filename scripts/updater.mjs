import { createRequire } from 'module'
import { Octokit } from '@octokit/rest'
import fs from 'fs'

const require = createRequire(import.meta.url)
const tauriConfig = require('../src-tauri/tauri.conf.json')

// 从环境变量获取 GitHub token
const token = process.env.GITHUB_TOKEN
const octokit = new Octokit({ auth: token })

// GitHub 仓库信息
const [owner, repo] = process.env.GITHUB_REPOSITORY.split('/')
const tag = process.env.GITHUB_REF_NAME

async function main() {
  try {
    // 获取最新的 release
    const release = await octokit.repos.getReleaseByTag({
      owner,
      repo,
      tag,
    })

    // 找到 Windows 安装包资源
    const windowsAsset = release.data.assets.find(asset => 
      asset.name.endsWith('.msi')
    )

    if (!windowsAsset) {
      throw new Error('No Windows installer found in release assets')
    }

    // 创建 latest.json
    const latestJson = {
      version: tauriConfig.version,
      notes: release.data.body || 'See the assets to download and install this version.',
      pub_date: new Date().toISOString(),
      platforms: {
        'windows-x86_64': {
          signature: '',  // Tauri 会自动处理签名
          url: windowsAsset.browser_download_url
        }
      }
    }

    // 写入 latest.json
    fs.writeFileSync('latest.json', JSON.stringify(latestJson, null, 2))

    // 上传 latest.json 到 release
    await octokit.repos.uploadReleaseAsset({
      owner,
      repo,
      release_id: release.data.id,
      name: 'latest.json',
      data: fs.readFileSync('latest.json')
    })

    console.log('Successfully uploaded latest.json')
  } catch (error) {
    console.error('Error:', error)
    process.exit(1)
  }
}

main()
