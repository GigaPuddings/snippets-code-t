import { createWriteStream, existsSync, mkdirSync, rmSync, statSync } from 'node:fs'
import { readdir, rename, rm } from 'node:fs/promises'
import { basename, join, resolve } from 'node:path'
import { pipeline } from 'node:stream/promises'
import { spawn } from 'node:child_process'
import { fileURLToPath } from 'node:url'

const FFMPEG_RELEASE_API =
  'https://api.github.com/repos/BtbN/FFmpeg-Builds/releases/latest'
const FFMPEG_ASSET_NAME = 'ffmpeg-master-latest-win64-gpl-shared.zip'
const ROOT = resolve(fileURLToPath(new URL('..', import.meta.url)))
const FFMPEG_DIR = resolve(ROOT, 'src-tauri/resources/ffmpeg')
const ARCHIVE_PATH = join(FFMPEG_DIR, FFMPEG_ASSET_NAME)
const EXE_PATH = join(FFMPEG_DIR, 'ffmpeg.exe')
const MAX_GITHUB_FILE_BYTES = 100 * 1024 * 1024

async function main() {
  if (process.platform !== 'win32') {
    throw new Error('当前 FFmpeg 安装脚本仅准备 Windows 录屏资源。')
  }

  mkdirSync(FFMPEG_DIR, { recursive: true })

  if (existsSync(EXE_PATH)) {
    const exeSize = statSync(EXE_PATH).size
    if (exeSize <= MAX_GITHUB_FILE_BYTES) {
      try {
        await run(EXE_PATH, ['-hide_banner', '-version'], { quiet: true })
        console.log(`[FFmpeg] 已存在: ${EXE_PATH}`)
        return
      } catch {
        console.log('[FFmpeg] 检测到现有 FFmpeg 无法运行，重新安装。')
      }
    } else {
      console.log('[FFmpeg] 检测到超过 GitHub 单文件限制的静态 FFmpeg，改用 shared 构建重新安装。')
    }
    await cleanupInstalledFiles(FFMPEG_DIR)
  }

  const assetUrl = await getReleaseAssetUrl()
  console.log(`[FFmpeg] 下载 ${FFMPEG_ASSET_NAME}`)
  console.log(`[FFmpeg] ${assetUrl}`)
  await downloadFile(assetUrl, ARCHIVE_PATH)

  console.log('[FFmpeg] 解压资源')
  await extractArchive(ARCHIVE_PATH, FFMPEG_DIR)

  const extractedExe = await findFile(FFMPEG_DIR, 'ffmpeg.exe')
  if (!extractedExe) {
    throw new Error('解压后未找到 ffmpeg.exe')
  }

  await cleanupUnneededFiles(FFMPEG_DIR)
  await run(EXE_PATH, ['-hide_banner', '-version'], { quiet: true })
  console.log(`[FFmpeg] 安装完成: ${EXE_PATH}`)
}

async function getReleaseAssetUrl() {
  const response = await fetch(FFMPEG_RELEASE_API, {
    headers: {
      'User-Agent': 'snippets-code-build'
    }
  })

  if (!response.ok) {
    throw new Error(`获取 FFmpeg release 失败: ${response.status} ${response.statusText}`)
  }

  const release = await response.json()
  const asset = release.assets?.find((item) => item.name === FFMPEG_ASSET_NAME)
  if (!asset?.browser_download_url) {
    throw new Error(`未找到 release asset: ${FFMPEG_ASSET_NAME}`)
  }

  return asset.browser_download_url
}

async function downloadFile(url, targetPath) {
  const partialPath = `${targetPath}.download`
  if (existsSync(partialPath)) {
    await rm(partialPath, { force: true })
  }

  const response = await fetch(url, {
    headers: {
      'User-Agent': 'snippets-code-build'
    }
  })

  if (!response.ok || !response.body) {
    throw new Error(`下载失败: ${response.status} ${response.statusText}`)
  }

  const total = Number(response.headers.get('content-length') || 0)
  let downloaded = 0
  let lastPrinted = 0

  const progress = new TransformStream({
    transform(chunk, controller) {
      downloaded += chunk.byteLength
      if (total > 0) {
        const percent = Math.floor((downloaded / total) * 100)
        if (percent >= lastPrinted + 5 || percent === 100) {
          lastPrinted = percent
          console.log(`[FFmpeg] 下载进度 ${percent}%`)
        }
      } else if (downloaded - lastPrinted >= 10 * 1024 * 1024) {
        lastPrinted = downloaded
        console.log(`[FFmpeg] 已下载 ${(downloaded / 1024 / 1024).toFixed(1)} MB`)
      }
      controller.enqueue(chunk)
    }
  })

  await pipeline(response.body.pipeThrough(progress), createWriteStream(partialPath))

  if (existsSync(targetPath)) {
    await rm(targetPath, { force: true })
  }
  await rename(partialPath, targetPath)
}

async function extractArchive(archivePath, targetDir) {
  const tempDir = join(targetDir, '_extract')
  if (existsSync(tempDir)) {
    rmSync(tempDir, { recursive: true, force: true })
  }
  mkdirSync(tempDir, { recursive: true })

  try {
    await run('powershell', [
      '-NoProfile',
      '-ExecutionPolicy',
      'Bypass',
      '-Command',
      `Expand-Archive -LiteralPath '${archivePath.replaceAll("'", "''")}' -DestinationPath '${tempDir.replaceAll("'", "''")}' -Force`
    ])
  } catch {
    await run('tar', ['-xf', archivePath, '-C', tempDir])
  }

  await flattenExtractedDirectory(tempDir, targetDir)
  rmSync(tempDir, { recursive: true, force: true })
}

async function flattenExtractedDirectory(tempDir, targetDir) {
  const exe = await findFile(tempDir, 'ffmpeg.exe')
  if (!exe) {
    throw new Error('解压目录中未找到 ffmpeg.exe')
  }

  const sourceRoot = resolve(exe, '..')
  const entries = await readdir(sourceRoot)
  for (const entry of entries) {
    const lowerEntry = entry.toLowerCase()
    if (!['ffmpeg.exe', 'ffprobe.exe'].includes(lowerEntry) && !lowerEntry.endsWith('.dll')) {
      continue
    }
    const source = join(sourceRoot, entry)
    const target = join(targetDir, entry)
    if (existsSync(target)) {
      rmSync(target, { recursive: true, force: true })
    }
    await rename(source, target)
  }
}

async function cleanupInstalledFiles(targetDir) {
  const entries = await readdir(targetDir, { withFileTypes: true })
  for (const entry of entries) {
    if (!entry.isFile()) continue
    const lowerEntry = entry.name.toLowerCase()
    if (!['ffmpeg.exe', 'ffprobe.exe'].includes(lowerEntry) && !lowerEntry.endsWith('.dll')) {
      continue
    }
    await rm(join(targetDir, entry.name), { force: true })
  }
}

async function cleanupUnneededFiles(targetDir) {
  for (const entry of [FFMPEG_ASSET_NAME, `${FFMPEG_ASSET_NAME}.download`, '_extract']) {
    const target = join(targetDir, entry)
    if (existsSync(target)) {
      rmSync(target, { recursive: true, force: true })
    }
  }
}

async function findFile(dir, fileName) {
  const entries = await readdir(dir, { withFileTypes: true })
  for (const entry of entries) {
    const fullPath = join(dir, entry.name)
    if (entry.isFile() && entry.name.toLowerCase() === fileName.toLowerCase()) {
      return fullPath
    }
    if (entry.isDirectory()) {
      const found = await findFile(fullPath, fileName)
      if (found) return found
    }
  }
  return null
}

async function run(command, args, options = {}) {
  return new Promise((resolveRun, rejectRun) => {
    const child = spawn(command, args, {
      stdio: options.quiet ? 'ignore' : 'inherit',
      shell: process.platform === 'win32'
    })
    child.on('error', rejectRun)
    child.on('exit', (code) => {
      if (code === 0) {
        resolveRun()
      } else {
        rejectRun(new Error(`${basename(command)} ${args.join(' ')} exited with ${code}`))
      }
    })
  })
}

main().catch((error) => {
  console.error(`[FFmpeg] ${error.message}`)
  process.exit(1)
})
