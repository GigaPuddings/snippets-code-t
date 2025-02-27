import { createRequire } from 'module'
import { Octokit } from '@octokit/rest'
import fs from 'fs'
import path from 'path'

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
    const { data: release } = await octokit.repos.getReleaseByTag({
      owner,
      repo,
      tag,
    })

    // 构建文件路径
    const basePath = path.resolve('./src-tauri/target/release/bundle')
    const setupFile = path.join(basePath, 'nsis', `snippets-code_${tauriConfig.version}_x64-setup.exe`)
    const sigFile = `${setupFile}.sig`

    // 获取已上传的文件
    const setupAsset = release.assets.find(asset => 
      asset.name === `snippets-code_${tauriConfig.version}_x64-setup.exe`
    )

    if (!setupAsset) {
      throw new Error('Setup file not found in release assets')
    }

    // 读取签名文件
    const signature = fs.readFileSync(sigFile, 'utf8')

    // 创建 latest.json
    const latestJson = {
      version: tauriConfig.version,
      notes: release.body || 'See the assets to download and install this version.',
      pub_date: new Date().toISOString(),
      platforms: {
        'windows-x86_64': {
          url: setupAsset.browser_download_url,
          signature: signature.trim()
        }
      }
    }

    // 检查是否已存在 latest.json
    const existingLatestJson = release.assets.find(asset => 
      asset.name === 'latest.json'
    )

    if (existingLatestJson) {
      // 如果存在，先删除
      await octokit.repos.deleteReleaseAsset({
        owner,
        repo,
        asset_id: existingLatestJson.id
      })
    }

    // 上传新的 latest.json
    const latestJsonContent = JSON.stringify(latestJson, null, 2)
    await octokit.repos.uploadReleaseAsset({
      owner,
      repo,
      release_id: release.id,
      name: 'latest.json',
      data: latestJsonContent,
      headers: {
        'content-type': 'application/json',
        'content-length': Buffer.byteLength(latestJsonContent)
      }
    })

    console.log('Successfully uploaded latest.json')
  } catch (error) {
    console.error('Error:', error)
    process.exit(1)
  }
}

main()

