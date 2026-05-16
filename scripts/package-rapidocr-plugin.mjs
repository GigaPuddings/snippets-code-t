import { cp, mkdir, rm, stat } from 'node:fs/promises'
import { existsSync } from 'node:fs'
import { resolve, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = resolve(fileURLToPath(new URL('..', import.meta.url)))
const SOURCE_DIR = resolve(ROOT, 'src-tauri/resources/rapidocr')
const MANIFEST_PATH = resolve(ROOT, 'docs/examples/screenshot-rapidocr-resource/plugin.json')
const TARGET_DIR = resolve(ROOT, 'dist-plugin-packages/screenshot-rapidocr')

async function main() {
  const exePath = join(SOURCE_DIR, 'RapidOCR-json.exe')
  if (!existsSync(exePath)) {
    throw new Error('未找到 RapidOCR-json.exe，请先运行 pnpm rapidocr:install')
  }

  const sourceStats = await stat(SOURCE_DIR)
  if (!sourceStats.isDirectory()) {
    throw new Error(`RapidOCR 资源目录无效: ${SOURCE_DIR}`)
  }

  await rm(TARGET_DIR, { recursive: true, force: true })
  await mkdir(join(TARGET_DIR, 'resources'), { recursive: true })
  await cp(MANIFEST_PATH, join(TARGET_DIR, 'plugin.json'))
  await cp(SOURCE_DIR, join(TARGET_DIR, 'resources/rapidocr'), {
    recursive: true,
    force: true
  })

  console.log(`[RapidOCR] 插件资源包目录已生成: ${TARGET_DIR}`)
  console.log('[RapidOCR] 可在应用插件设置中选择该目录安装，或自行压缩为 zip 后安装。')
}

main().catch((error) => {
  console.error(`[RapidOCR] ${error.message}`)
  process.exit(1)
})
