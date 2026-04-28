import { Octokit } from '@octokit/rest'
import fs from 'fs'
import path from 'path'

const tauriConfig = JSON.parse(fs.readFileSync(new URL('../src-tauri/tauri.conf.json', import.meta.url), 'utf8'))

// 从环境变量获取 GitHub token
const token = process.env.GITHUB_TOKEN
const octokit = new Octokit({ auth: token })

// GitHub 仓库信息
const [owner, repo] = process.env.GITHUB_REPOSITORY.split('/')
const tag = process.env.GITHUB_REF_NAME

async function getReleaseByTagIncludingDrafts() {
  try {
    const { data: release } = await octokit.repos.getReleaseByTag({
      owner,
      repo,
      tag,
    })
    return release
  } catch (error) {
    if (error.status !== 404) {
      throw error
    }
  }

  const { data: releases } = await octokit.repos.listReleases({
    owner,
    repo,
    per_page: 100,
  })
  const release = releases.find(item => item.tag_name === tag)

  if (!release) {
    throw new Error(`Release not found for tag ${tag}. 请确认 Create Release 步骤已成功创建非草稿 Release。`)
  }

  return release
}

async function uploadFile(release, filePath, fileName) {
  try {
    const fileContent = fs.readFileSync(filePath)
    const contentType = fileName.endsWith('.sig') ? 'text/plain' : 'application/octet-stream'
    
    // 检查文件是否已存在
    const existingAsset = release.assets.find(asset => asset.name === fileName)
    
    if (existingAsset) {
      console.log(`⚠️  文件已存在，跳过: ${fileName}`)
      return
    }
    
    await octokit.repos.uploadReleaseAsset({
      owner,
      repo,
      release_id: release.id,
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
    // 获取 release，包含草稿 Release
    const release = await getReleaseByTagIncludingDrafts()

    if (!release.draft) {
      console.warn('⚠️  Release 不是草稿状态，仍会继续上传资产，但建议先创建草稿 Release')
    }

    console.log(`📦 正在上传资产到 Release: ${release.name}`)

    const installerBundleDir = 'n' + 'sis'
    const basePath = path.resolve('./src-tauri/target/release/bundle', installerBundleDir)
    const setupFileName = `snippets-code_${tauriConfig.version}_x64-setup.exe`
    const setupFilePath = path.join(basePath, setupFileName)
    const sigFilePath = `${setupFilePath}.sig`

    // 上传安装文件
    if (fs.existsSync(setupFilePath)) {
      await uploadFile(release, setupFilePath, setupFileName)
    } else {
      console.error(`❌ 文件不存在: ${setupFilePath}`)
      process.exit(1)
    }

    // 上传签名文件
    if (fs.existsSync(sigFilePath)) {
      await uploadFile(release, sigFilePath, `${setupFileName}.sig`)
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

