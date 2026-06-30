import { copyFile, mkdir, readFile, readdir, rm, stat, writeFile } from 'node:fs/promises'
import { existsSync } from 'node:fs'
import { join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = resolve(fileURLToPath(new URL('..', import.meta.url)))
const SOURCE_DIR = resolve(ROOT, 'src-tauri/resources/ffmpeg')
const MANIFEST_PATH = resolve(ROOT, 'plugin-registry/examples/screen-recorder-ffmpeg-resource/plugin.json')
const TARGET_DIR = resolve(ROOT, 'dist-plugin-packages/screen-recorder-ffmpeg')
const MAX_GITHUB_FILE_BYTES = 100 * 1024 * 1024

function readOption(name) {
  const args = process.argv.slice(2)
  const index = args.indexOf(name)
  if (index >= 0) return args[index + 1]
  return args.find((arg) => arg.startsWith(`${name}=`))?.slice(name.length + 1)
}

function assertVersion(version) {
  if (!/^\d+\.\d+\.\d+$/.test(version)) {
    throw new Error('版本号格式错误，请使用 x.y.z 格式')
  }
}

async function main() {
  const packageJson = JSON.parse(await readFile(resolve(ROOT, 'package.json'), 'utf8'))
  const version = readOption('--version') ?? packageJson.version
  assertVersion(version)
  const exePath = join(SOURCE_DIR, 'ffmpeg.exe')
  if (!existsSync(exePath)) {
    throw new Error('未找到 ffmpeg.exe，请将 FFmpeg 放到 src-tauri/resources/ffmpeg/ffmpeg.exe')
  }
  const exeStats = await stat(exePath)
  if (exeStats.size > MAX_GITHUB_FILE_BYTES) {
    throw new Error(
      'ffmpeg.exe 超过 GitHub 100 MB 单文件限制，请运行 pnpm ffmpeg:install 重新安装 shared 构建后再发布'
    )
  }

  const sourceStats = await stat(SOURCE_DIR)
  if (!sourceStats.isDirectory()) {
    throw new Error(`FFmpeg 资源目录无效: ${SOURCE_DIR}`)
  }

  await rm(TARGET_DIR, { recursive: true, force: true })
  await mkdir(join(TARGET_DIR, 'resources/ffmpeg'), { recursive: true })

  const manifest = JSON.parse(await readFile(MANIFEST_PATH, 'utf8'))
  manifest.version = version
  manifest.minAppVersion = manifest.minAppVersion ?? packageJson.version
  manifest.compatibleAppVersion = `>=${manifest.minAppVersion}`
  manifest.repository = 'https://github.com/GigaPuddings/snippets-code-plugin-screen-recorder-ffmpeg'
  manifest.releaseUrl = `https://github.com/GigaPuddings/snippets-code-plugin-screen-recorder-ffmpeg/releases/tag/${version}`
  await writeFile(join(TARGET_DIR, 'plugin.json'), `${JSON.stringify(manifest, null, 2)}\n`, 'utf8')

  const ffmpegTargetDir = join(TARGET_DIR, 'resources/ffmpeg')
  await copyFile(exePath, join(ffmpegTargetDir, 'ffmpeg.exe'))
  for (const entry of await readdir(SOURCE_DIR, { withFileTypes: true })) {
    if (!entry.isFile() || !entry.name.toLowerCase().endsWith('.dll')) continue
    await copyFile(join(SOURCE_DIR, entry.name), join(ffmpegTargetDir, entry.name))
  }

  await writeFile(
    join(TARGET_DIR, 'README.md'),
    `# Screen Recorder FFmpeg Resource

Local FFmpeg resource package for Snippets Code.

- Plugin ID: \`screen-recorder-ffmpeg\`
- Version: \`${version}\`
- Resource path: \`resources/ffmpeg/ffmpeg.exe\`
- Runtime: BtbN FFmpeg GPL shared build with required DLLs

Install this directory from the app plugin settings, or run \`pnpm ffmpeg:release\`
to synchronize it to the official plugin repository and create the matching tag.
`,
    'utf8'
  )

  console.log(`[FFmpeg] 插件资源包目录已生成: ${TARGET_DIR}`)
  console.log('[FFmpeg] 可在应用插件设置中选择该目录安装，或运行 pnpm ffmpeg:release 同步到插件仓库。')
}

main().catch((error) => {
  console.error(`[FFmpeg] ${error.message}`)
  process.exit(1)
})
