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

    // 获取完整的 release 信息
    const { data: fullRelease } = await octokit.repos.getRelease({
      owner,
      repo,
      release_id: release.id
    })

    // 构建文件路径 - 本地构建的文件不带 _windows 后缀
    const basePath = path.resolve('./src-tauri/target/release/bundle')
    const setupFileName = `snippets-code_${tauriConfig.version}_x64-setup.exe`
    const setupFile = path.join(basePath, 'nsis', setupFileName)
    const sigFile = `${setupFile}.sig`

    // 获取已上传的文件
    const setupAsset = release.assets.find(asset => 
      asset.name === setupFileName
    )

    if (!setupAsset) {
      throw new Error('Setup file not found in release assets')
    }

    // 读取签名文件
    const signature = fs.readFileSync(sigFile, 'utf8')

    // 使用简单的发布说明
    const releaseNotes = `Version ${tauriConfig.version}`

    // 创建 latest.json
    const latestJson = {
      version: tauriConfig.version,
      notes: releaseNotes,
      pub_date: fullRelease.published_at || new Date().toISOString(),
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

    // 更新发布说明
    if (!fullRelease.body) {
      await octokit.repos.updateRelease({
        owner,
        repo,
        release_id: release.id,
        body: releaseNotes
      })
    }

    // 设置为预发布
    await octokit.repos.updateRelease({
      owner,
      repo,
      release_id: release.id,
      prerelease: true,
      draft: true  // 设置为草稿状态，需要手动发布
    })

    console.log('✨ 成功上传 latest.json 并设置为预发布草稿状态')
    console.log('已自动生成发布说明，请前往 GitHub Releases 页面检查并手动发布')
  } catch (error) {
    console.error('❌ 错误:', error)
    process.exit(1)
  }
}

main()

