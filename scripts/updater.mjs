import { createRequire } from 'module'
import { Octokit } from '@octokit/rest'
import fs from 'fs'
import path from 'path'
import { execSync } from 'child_process'

const require = createRequire(import.meta.url)
const tauriConfig = require('../src-tauri/tauri.conf.json')

// 从环境变量获取 GitHub token
const token = process.env.GITHUB_TOKEN
const octokit = new Octokit({ auth: token })

// GitHub 仓库信息
const [owner, repo] = process.env.GITHUB_REPOSITORY.split('/')
const tag = process.env.GITHUB_REF_NAME

// 生成发布日期
function getFormattedDate() {
  const date = new Date()
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  return `${year}-${month}-${day}`
}

// 从git提交生成发布说明
function generateReleaseNotes() {
  try {
    // 获取前一个标签
    const previousTag = execSync('git describe --tags --abbrev=0 HEAD^', { encoding: 'utf-8' }).trim()
    console.log(`上一个标签: ${previousTag}`)
    
    // 获取当前标签和上一个标签之间的提交
    const commitLog = execSync(`git log ${previousTag}..HEAD --pretty=format:"%s"`, { encoding: 'utf-8' })
    
    // 分类提交
    const feats = []
    const fixes = []
    const others = []
    
    commitLog.split('\n').forEach(commit => {
      if (commit.startsWith('feat')) {
        feats.push(commit.replace(/^feat(\([^)]+\))?:\s*/, '• '))
      } else if (commit.startsWith('fix')) {
        fixes.push(commit.replace(/^fix(\([^)]+\))?:\s*/, '• '))
      } else if (commit) {
        others.push(commit)
      }
    })
    
    // 生成发布说明
    let notes = `${tauriConfig.version} (${getFormattedDate()})\n\n`
    
    if (feats.length > 0) {
      notes += `New feature:\n\n${feats.join('\n')}\n\n`
    }
    
    if (fixes.length > 0) {
      notes += `Bugs fixed:\n\n${fixes.join('\n')}\n\n`
    }
    
    if (others.length > 0 && process.env.INCLUDE_OTHER_COMMITS) {
      notes += `Other:\n\n${others.join('\n')}\n\n`
    }
    
    return notes.trim()
  } catch (error) {
    console.warn('无法生成发布说明:', error.message)
    return `${tauriConfig.version} (${getFormattedDate()})\n\n本次更新暂无详细说明`
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

    // 获取完整的 release 信息
    const { data: fullRelease } = await octokit.repos.getRelease({
      owner,
      repo,
      release_id: release.id
    })

    // 构建文件路径
    const basePath = path.resolve('./src-tauri/target/release/bundle')
    const setupFile = path.join(basePath, 'nsis', `snippets-code_${tauriConfig.version}_x64-setup_windows.exe`)
    const sigFile = `${setupFile}.sig`

    // 获取已上传的文件
    const setupAsset = release.assets.find(asset => 
      asset.name === `snippets-code_${tauriConfig.version}_x64-setup_windows.exe`
    )

    if (!setupAsset) {
      throw new Error('Setup file not found in release assets')
    }

    // 读取签名文件
    const signature = fs.readFileSync(sigFile, 'utf8')

    // 生成发布说明
    const releaseNotes = fullRelease.body || generateReleaseNotes()

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

