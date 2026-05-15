import { createWriteStream, existsSync, mkdirSync, rmSync } from 'node:fs'
import { readdir, rename, rm } from 'node:fs/promises'
import { basename, join, resolve } from 'node:path'
import { pipeline } from 'node:stream/promises'
import { spawn } from 'node:child_process'
import { fileURLToPath } from 'node:url'

const RAPIDOCR_RELEASE_API =
  'https://api.github.com/repos/hiroi-sora/RapidOCR-json/releases/latest'
const RAPIDOCR_ASSET_NAME = 'RapidOCR-json_v0.2.0.7z'
const ROOT = resolve(fileURLToPath(new URL('..', import.meta.url)))
const RAPIDOCR_DIR = resolve(ROOT, 'src-tauri/resources/rapidocr')
const ARCHIVE_PATH = join(RAPIDOCR_DIR, RAPIDOCR_ASSET_NAME)
const EXE_PATH = join(RAPIDOCR_DIR, 'RapidOCR-json.exe')

async function main() {
  mkdirSync(RAPIDOCR_DIR, { recursive: true })

  if (existsSync(EXE_PATH)) {
    console.log(`[RapidOCR] 已存在: ${EXE_PATH}`)
    return
  }

  const assetUrl = await getReleaseAssetUrl()
  console.log(`[RapidOCR] 下载 ${RAPIDOCR_ASSET_NAME}`)
  console.log(`[RapidOCR] ${assetUrl}`)
  await downloadFile(assetUrl, ARCHIVE_PATH)

  console.log('[RapidOCR] 解压资源')
  await extractArchive(ARCHIVE_PATH, RAPIDOCR_DIR)

  const extractedExe = await findFile(RAPIDOCR_DIR, 'RapidOCR-json.exe')
  if (!extractedExe) {
    throw new Error('解压后未找到 RapidOCR-json.exe')
  }

  if (resolve(extractedExe) !== resolve(EXE_PATH)) {
    await rename(extractedExe, EXE_PATH)
  }

  console.log(`[RapidOCR] 安装完成: ${EXE_PATH}`)
}

async function getReleaseAssetUrl() {
  const response = await fetch(RAPIDOCR_RELEASE_API, {
    headers: {
      'User-Agent': 'snippets-code-build'
    }
  })

  if (!response.ok) {
    throw new Error(`获取 RapidOCR release 失败: ${response.status} ${response.statusText}`)
  }

  const release = await response.json()
  const asset = release.assets?.find((item) => item.name === RAPIDOCR_ASSET_NAME)
  if (!asset?.browser_download_url) {
    throw new Error(`未找到 release asset: ${RAPIDOCR_ASSET_NAME}`)
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
          console.log(`[RapidOCR] 下载进度 ${percent}%`)
        }
      } else if (downloaded - lastPrinted >= 5 * 1024 * 1024) {
        lastPrinted = downloaded
        console.log(`[RapidOCR] 已下载 ${(downloaded / 1024 / 1024).toFixed(1)} MB`)
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
  const sevenZip = await findSevenZip()
  if (!sevenZip) {
    throw new Error(
      '未找到 7z。请安装 7-Zip，或手动解压 RapidOCR-json_v0.2.0.7z 到 src-tauri/resources/rapidocr'
    )
  }

  const tempDir = join(targetDir, '_extract')
  if (existsSync(tempDir)) {
    rmSync(tempDir, { recursive: true, force: true })
  }
  mkdirSync(tempDir, { recursive: true })

  await run(sevenZip, ['x', archivePath, `-o${tempDir}`, '-y'])
  await flattenExtractedDirectory(tempDir, targetDir)
  rmSync(tempDir, { recursive: true, force: true })
}

async function findSevenZip() {
  const candidates =
    process.platform === 'win32'
      ? [
          '7z',
          '7z.exe',
          'C:\\Program Files\\7-Zip\\7z.exe',
          'C:\\Program Files (x86)\\7-Zip\\7z.exe'
        ]
      : ['7z', '7zz', '7za']

  for (const candidate of candidates) {
    try {
      await run(candidate, ['--help'], { quiet: true })
      return candidate
    } catch {
      // try next
    }
  }

  return null
}

async function flattenExtractedDirectory(tempDir, targetDir) {
  const exe = await findFile(tempDir, 'RapidOCR-json.exe')
  if (!exe) {
    throw new Error('解压目录中未找到 RapidOCR-json.exe')
  }

  const sourceRoot = resolve(exe, '..')
  const entries = await readdir(sourceRoot)
  for (const entry of entries) {
    const source = join(sourceRoot, entry)
    const target = join(targetDir, entry)
    if (existsSync(target)) {
      rmSync(target, { recursive: true, force: true })
    }
    await rename(source, target)
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
  console.error(`[RapidOCR] ${error.message}`)
  process.exit(1)
})
