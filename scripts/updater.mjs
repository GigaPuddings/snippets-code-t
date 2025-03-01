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

async function updateLatestJson(release) {
  try {
    // 获取已上传的文件
    const setupAsset = release.assets.find(asset => 
      asset.name === `snippets-code_${tauriConfig.version}_x64-setup.exe`
    )

    if (!setupAsset) {
      throw new Error('Setup file not found in release assets')
    }

    // 读取签名文件
    const sigFile = path.join('./src-tauri/target/release/bundle/nsis', `snippets-code_${tauriConfig.version}_x64-setup.exe.sig`)
    const signature = fs.readFileSync(sigFile, 'utf8')

    // 创建新的 latest.json
    const latestJson = {
      version: tauriConfig.version,
      notes: release.body || '本次更新暂无说明',
      pub_date: release.published_at,
      platforms: {
        'windows-x86_64': {
          url: setupAsset.browser_download_url,
          signature: signature.trim()
        }
      }
    }

    // 删除旧的 latest.json
    const existingLatestJson = release.assets.find(asset => 
      asset.name === 'latest.json'
    )

    if (existingLatestJson) {
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

    return true
  } catch (error) {
    console.error('更新 latest.json 失败:', error)
    return false
  }
}

async function main() {
  try {
    // 获取最新的 release
    const { data: release } = await octokit.repos.getReleaseByTag({
      owner,
      repo,
      tag,
    })

    // 首次创建 latest.json
    await updateLatestJson(release)

    // 设置为预发布草稿
    await octokit.repos.updateRelease({
      owner,
      repo,
      release_id: release.id,
      prerelease: true,
      draft: true  // 设置为草稿状态，需要手动发布
    })

    // 监听 release 更新
    const webhook = await octokit.repos.createWebhook({
      owner,
      repo,
      name: 'web',
      events: ['release'],
      active: true,
      config: {
        url: `${process.env.GITHUB_API_URL}/repos/${owner}/${repo}/releases/${release.id}`,
        content_type: 'json'
      }
    })

    console.log('✨ 成功上传 latest.json 并设置为预发布草稿状态')
    console.log('✨ 已设置 webhook 监听 release 更新')
    console.log('请前往 GitHub Releases 页面编辑发布说明并手动发布')

  } catch (error) {
    console.error('❌ 错误:', error)
    process.exit(1)
  }
}

// 处理 release 更新事件
if (process.env.GITHUB_EVENT_NAME === 'release') {
  const event = JSON.parse(fs.readFileSync(process.env.GITHUB_EVENT_PATH, 'utf8'))
  if (event.action === 'edited' || event.action === 'published') {
    updateLatestJson(event.release)
      .then(() => console.log('✨ latest.json 已更新'))
      .catch(error => console.error('❌ 更新失败:', error))
  }
} else {
  main()
}

