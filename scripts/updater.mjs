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
    const msiFile = path.join(basePath, 'msi', `效率工具_${tauriConfig.version}_x64_zh-CN.msi`)
    const sigFile = `${msiFile}.sig`

    if (!fs.existsSync(msiFile)) {
      throw new Error(`MSI file not found at ${msiFile}`)
    }

    if (!fs.existsSync(sigFile)) {
      throw new Error(`Signature file not found at ${sigFile}`)
    }

    // 上传 MSI 文件
    const msiAsset = await octokit.repos.uploadReleaseAsset({
      owner,
      repo,
      release_id: release.id,
      name: path.basename(msiFile),
      data: fs.readFileSync(msiFile)
    })

    // 创建 latest.json
    const latestJson = {
      version: tauriConfig.version,
      notes: release.body || 'See the assets to download and install this version.',
      pub_date: new Date().toISOString(),
      platforms: {
        'windows-x86_64': {
          url: msiAsset.data.browser_download_url,
          signature: fs.readFileSync(sigFile, 'utf8')
        }
      }
    }

    // 写入并上传 latest.json
    fs.writeFileSync('latest.json', JSON.stringify(latestJson, null, 2))
    await octokit.repos.uploadReleaseAsset({
      owner,
      repo,
      release_id: release.id,
      name: 'latest.json',
      data: fs.readFileSync('latest.json')
    })

    console.log('Successfully uploaded all assets')
  } catch (error) {
    console.error('Error:', error)
    process.exit(1)
  }
}

main()
