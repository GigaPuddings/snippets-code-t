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
    // 获取 release 信息
    const { data: release } = await octokit.rest.repos.getReleaseByTag({
      owner,
      repo,
      tag: process.env.GITHUB_REF_NAME,
    })

    // 构建文件路径
    const basePath = path.resolve('./src-tauri/target/release/bundle')
    const setupFile = path.join(basePath, 'nsis', `snippets-code_${tauriConfig.version}_x64-setup.exe`)
    const sigFile = `${setupFile}.sig`

    // 读取签名文件
    const signature = await fs.readFile(sigFile, 'utf8')

    // 创建 latest.json 内容
    const latestJson = {
      version: tauriConfig.version,
      notes: release.body || '',
      pub_date: release.published_at || new Date().toISOString(),
      platforms: {
        'windows-x86_64': {
          signature: signature.trim(),
          url: `https://github.com/${owner}/${repo}/releases/download/${tauriConfig.version}/snippets-code_${tauriConfig.version}_x64-setup.exe`
        }
      }
    }

    try {
      // 获取 updater 分支的引用
      const { data: ref } = await octokit.rest.git.getRef({
        owner,
        repo,
        ref: 'heads/updater',
      })

      // 获取当前的文件（如果存在）
      const { data: currentFile } = await octokit.rest.repos.getContent({
        owner,
        repo,
        path: 'latest.json',
        ref: 'updater',
      })

      // 更新文件
      await octokit.rest.repos.createOrUpdateFileContents({
        owner,
        repo,
        path: 'latest.json',
        message: `Update latest.json for version ${tauriConfig.version}`,
        content: Buffer.from(JSON.stringify(latestJson, null, 2)).toString('base64'),
        sha: currentFile.sha,
        branch: 'updater',
      })
    } catch (error) {
      if (error.status === 404) {
        // 如果分支不存在，创建新分支
        const { data: mainBranch } = await octokit.rest.repos.getBranch({
          owner,
          repo,
          branch: 'main',
        })

        await octokit.rest.git.createRef({
          owner,
          repo,
          ref: 'refs/heads/updater',
          sha: mainBranch.commit.sha,
        })

        // 创建文件
        await octokit.rest.repos.createOrUpdateFileContents({
          owner,
          repo,
          path: 'latest.json',
          message: `Create latest.json for version ${tauriConfig.version}`,
          content: Buffer.from(JSON.stringify(latestJson, null, 2)).toString('base64'),
          branch: 'updater',
        })
      } else {
        throw error
      }
    }

    console.log('Successfully updated latest.json:', latestJson)
  } catch (error) {
    console.error('Error:', error)
    process.exit(1)
  }
}

main()

