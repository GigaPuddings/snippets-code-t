import { cp, mkdir, readFile, rm, stat, writeFile } from 'node:fs/promises'
import { existsSync } from 'node:fs'
import { resolve, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = resolve(fileURLToPath(new URL('..', import.meta.url)))
const SOURCE_DIR = resolve(ROOT, 'src-tauri/resources/rapidocr')
const MANIFEST_PATH = resolve(ROOT, 'docs/examples/screenshot-rapidocr-resource/plugin.json')
const TARGET_DIR = resolve(ROOT, 'dist-plugin-packages/screenshot-rapidocr')

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
  const manifest = JSON.parse(await readFile(MANIFEST_PATH, 'utf8'))
  manifest.version = version
  manifest.minAppVersion = manifest.minAppVersion ?? packageJson.version
  manifest.compatibleAppVersion = `>=${manifest.minAppVersion}`
  manifest.repository = 'https://github.com/GigaPuddings/snippets-code-plugin-screenshot-rapidocr'
  manifest.releaseUrl = `https://github.com/GigaPuddings/snippets-code-plugin-screenshot-rapidocr/releases/tag/${version}`
  await writeFile(join(TARGET_DIR, 'plugin.json'), `${JSON.stringify(manifest, null, 2)}\n`, 'utf8')
  await cp(SOURCE_DIR, join(TARGET_DIR, 'resources/rapidocr'), {
    recursive: true,
    force: true
  })

  await writeFile(
    join(TARGET_DIR, 'README.md'),
    `# Screenshot RapidOCR Resource

Local RapidOCR resource package for Snippets Code.

- Plugin ID: \`screenshot-rapidocr\`
- Version: \`${version}\`
- Resource path: \`resources/rapidocr\`

Install this directory from the app plugin settings, or run \`pnpm rapidocr:release\`
to synchronize it to the official plugin repository and create the matching tag.
`,
    'utf8'
  )

  console.log(`[RapidOCR] 插件资源包目录已生成: ${TARGET_DIR}`)
  console.log('[RapidOCR] 可在应用插件设置中选择该目录安装，或运行 pnpm rapidocr:release 同步到插件仓库。')
}

main().catch((error) => {
  console.error(`[RapidOCR] ${error.message}`)
  process.exit(1)
})
