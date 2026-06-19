import { chmod, cp, mkdir, readFile, rm, stat, writeFile } from 'node:fs/promises'
import { existsSync } from 'node:fs'
import { execFileSync } from 'node:child_process'
import { join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = resolve(fileURLToPath(new URL('..', import.meta.url)))
const MANIFEST_PATH = resolve(ROOT, 'docs/plugin-packages/local-ai-agent-reach-runtime/plugin.json')
const TARGET_DIR = resolve(ROOT, 'dist-plugin-packages/local-ai-agent-reach-runtime')
const RUNTIME_DIR = join(TARGET_DIR, 'resources/agent-reach')
const AGENT_REACH_PACKAGE_URL = 'https://github.com/Panniantong/agent-reach/archive/main.zip'
const MCPORTER_PACKAGE = 'mcporter@0.9.0'
const MAX_GITHUB_FILE_BYTES = 100 * 1024 * 1024

function readOption(name) {
  const args = process.argv.slice(2)
  const index = args.indexOf(name)
  if (index >= 0) return args[index + 1]
  return args.find((arg) => arg.startsWith(`${name}=`))?.slice(name.length + 1)
}

function hasFlag(name) {
  return process.argv.slice(2).includes(name)
}

function assertVersion(version) {
  if (!/^\d+\.\d+\.\d+$/.test(version)) {
    throw new Error('版本号格式错误，请使用 x.y.z 格式')
  }
}

function run(command, args, options = {}) {
  console.log(`[Agent-Reach] ${command} ${args.join(' ')}`)
  return execFileSync(command, args, {
    cwd: options.cwd ?? ROOT,
    encoding: 'utf8',
    shell: process.platform === 'win32' && !/[\\/]/.test(command),
    stdio: options.inherit ? 'inherit' : 'pipe'
  })
}

function commandExists(command, args = ['--version']) {
  try {
    run(command, args)
    return true
  } catch {
    return false
  }
}

function pythonCandidates() {
  if (process.platform === 'win32') {
    return [
      ['py', ['-3']],
      ['python', []],
      ['python3', []]
    ]
  }
  return [
    ['python3', []],
    ['python', []]
  ]
}

function venvBinDir(venvDir) {
  return process.platform === 'win32' ? join(venvDir, 'Scripts') : join(venvDir, 'bin')
}

function pythonPath(venvDir) {
  return join(venvBinDir(venvDir), process.platform === 'win32' ? 'python.exe' : 'python')
}

async function createVenv(venvDir) {
  let lastError = null
  for (const [command, baseArgs] of pythonCandidates()) {
    try {
      run(command, [...baseArgs, '-m', 'venv', venvDir], { inherit: true })
      return
    } catch (error) {
      lastError = error
    }
  }
  throw new Error(`未找到可用 Python 3，无法构建 Agent-Reach runtime: ${lastError?.message ?? ''}`)
}

async function installAgentReach(venvDir, packageUrl) {
  const py = pythonPath(venvDir)
  run(py, ['-m', 'pip', 'install', '--upgrade', 'pip'], { inherit: true })
  run(py, ['-m', 'pip', 'install', '--upgrade', packageUrl], { inherit: true })
  run(py, ['-c', 'from agent_reach.cli import main; print("agent-reach runtime import ok")'], {
    inherit: true
  })
}

async function installMcporter(runtimeDir, mcporterPackage, skipMcporter) {
  if (skipMcporter) {
    console.warn('[Agent-Reach] 已跳过 mcporter，本资源包只能使用系统 PATH 中的 mcporter')
    return false
  }
  const nodeDir = join(runtimeDir, 'node')
  await mkdir(nodeDir, { recursive: true })
  if (commandExists('npm')) {
    run('npm', ['install', '--prefix', nodeDir, mcporterPackage], { inherit: true })
  } else if (commandExists('pnpm')) {
    run('pnpm', ['add', mcporterPackage, '--dir', nodeDir], { inherit: true })
  } else {
    throw new Error('未找到 npm 或 pnpm，无法把 mcporter 打进 Agent-Reach runtime 资源包')
  }
  const mcporterBin = join(nodeDir, 'node_modules/.bin', process.platform === 'win32' ? 'mcporter.cmd' : 'mcporter')
  if (!existsSync(mcporterBin)) {
    throw new Error(`mcporter 安装完成但未找到启动入口: ${mcporterBin}`)
  }
  return true
}

async function copyNodeRuntime(runtimeDir) {
  const nodeRuntimeDir = join(runtimeDir, 'node-runtime')
  await mkdir(nodeRuntimeDir, { recursive: true })
  const targetName = process.platform === 'win32' ? 'node.exe' : 'node'
  const targetPath = join(nodeRuntimeDir, targetName)
  await cp(process.execPath, targetPath, { force: true })
  if (process.platform !== 'win32') {
    await chmod(targetPath, 0o755)
  }
  return `node-runtime/${targetName}`
}

async function assertNoHugeFiles(directory) {
  const entries = await import('node:fs/promises').then(({ readdir }) => readdir(directory, { withFileTypes: true }))
  for (const entry of entries) {
    const entryPath = join(directory, entry.name)
    if (entry.isDirectory()) {
      await assertNoHugeFiles(entryPath)
    } else if (entry.isFile()) {
      const fileStats = await stat(entryPath)
      if (fileStats.size > MAX_GITHUB_FILE_BYTES) {
        throw new Error(`单文件超过 GitHub 100 MB 限制: ${entryPath}`)
      }
    }
  }
}

async function writeLaunchers(runtimeDir, hasMcporter) {
  const binDir = join(runtimeDir, 'bin')
  await mkdir(binDir, { recursive: true })
  const agentReachCmd = `@echo off\r\nsetlocal\r\nset "ROOT=%~dp0.."\r\nset "PY=%ROOT%\\venv\\Scripts\\python.exe"\r\nif not exist "%PY%" set "PY=%ROOT%\\venv\\bin\\python"\r\n"%PY%" -c "from agent_reach.cli import main; main()" %*\r\n`
  const agentReachSh = `#!/usr/bin/env sh
ROOT="$(CDPATH= cd -- "$(dirname -- "$0")/.." && pwd)"
PY="$ROOT/venv/bin/python"
if [ ! -x "$PY" ]; then
  PY="$ROOT/venv/Scripts/python.exe"
fi
exec "$PY" -c "from agent_reach.cli import main; main()" "$@"
`
  await writeFile(join(binDir, 'agent-reach.cmd'), agentReachCmd, 'utf8')
  await writeFile(join(binDir, 'agent-reach'), agentReachSh, 'utf8')
  await chmod(join(binDir, 'agent-reach'), 0o755)

  if (hasMcporter) {
    const mcporterCmd = `@echo off\r\nsetlocal\r\nset "ROOT=%~dp0.."\r\nset "PATH=%ROOT%\\node-runtime;%PATH%"\r\ncall "%ROOT%\\node\\node_modules\\.bin\\mcporter.cmd" %*\r\n`
    const mcporterSh = `#!/usr/bin/env sh
ROOT="$(CDPATH= cd -- "$(dirname -- "$0")/.." && pwd)"
PATH="$ROOT/node-runtime:$PATH"
exec "$ROOT/node/node_modules/.bin/mcporter" "$@"
`
    await writeFile(join(binDir, 'mcporter.cmd'), mcporterCmd, 'utf8')
    await writeFile(join(binDir, 'mcporter'), mcporterSh, 'utf8')
    await chmod(join(binDir, 'mcporter'), 0o755)
  }
}

async function main() {
  const packageJson = JSON.parse(await readFile(resolve(ROOT, 'package.json'), 'utf8'))
  const version = readOption('--version') ?? packageJson.version
  const packageUrl = readOption('--agent-reach-package') ?? AGENT_REACH_PACKAGE_URL
  const mcporterPackage = readOption('--mcporter-package') ?? MCPORTER_PACKAGE
  const skipMcporter = hasFlag('--skip-mcporter')
  assertVersion(version)

  await rm(TARGET_DIR, { recursive: true, force: true })
  await mkdir(RUNTIME_DIR, { recursive: true })

  const manifest = JSON.parse(await readFile(MANIFEST_PATH, 'utf8'))
  manifest.version = version
  manifest.minAppVersion = manifest.minAppVersion ?? packageJson.version
  manifest.compatibleAppVersion = `>=${manifest.minAppVersion}`
  manifest.repository = 'https://github.com/GigaPuddings/snippets-code-plugin-local-ai-agent-reach-runtime'
  manifest.releaseUrl = `https://github.com/GigaPuddings/snippets-code-plugin-local-ai-agent-reach-runtime/releases/tag/${version}`
  await writeFile(join(TARGET_DIR, 'plugin.json'), `${JSON.stringify(manifest, null, 2)}\n`, 'utf8')

  const venvDir = join(RUNTIME_DIR, 'venv')
  await createVenv(venvDir)
  await installAgentReach(venvDir, packageUrl)
  const hasMcporter = await installMcporter(RUNTIME_DIR, mcporterPackage, skipMcporter)
  const nodeRuntime = hasMcporter ? await copyNodeRuntime(RUNTIME_DIR) : null
  await writeLaunchers(RUNTIME_DIR, hasMcporter)

  await cp(resolve(ROOT, 'docs/plugin-packages/local-ai-agent-reach-runtime/resources/agent-reach/README.md'), join(RUNTIME_DIR, 'README.md'), {
    force: true
  })
  await writeFile(
    join(RUNTIME_DIR, 'runtime.json'),
    `${JSON.stringify(
      {
        agentReachPackage: packageUrl,
        builtAt: new Date().toISOString(),
        entry: process.platform === 'win32' ? 'bin/agent-reach.cmd' : 'bin/agent-reach',
        mcporterPackage,
        mcporter: hasMcporter ? (process.platform === 'win32' ? 'bin/mcporter.cmd' : 'bin/mcporter') : null,
        nodeRuntime
      },
      null,
      2
    )}\n`,
    'utf8'
  )

  await writeFile(
    join(TARGET_DIR, 'README.md'),
    `# Local AI Agent-Reach Runtime

Local Agent-Reach resource package for Snippets Code.

- Plugin ID: \`local-ai-agent-reach-runtime\`
- Version: \`${version}\`
- Agent-Reach package: \`${packageUrl}\`
- mcporter package: \`${hasMcporter ? mcporterPackage : 'system mcporter fallback'}\`
- Node runtime: \`${nodeRuntime ?? 'system node fallback'}\`
- Runtime path: \`resources/agent-reach\`
- Entrypoint: \`${process.platform === 'win32' ? 'resources/agent-reach/bin/agent-reach.cmd' : 'resources/agent-reach/bin/agent-reach'}\`
- Search backend: \`${hasMcporter ? 'bundled mcporter npm package' : 'system mcporter fallback'}\`

Run \`pnpm agent-reach:release\` to synchronize this built resource package to
the official plugin repository and create the matching tag.
`,
    'utf8'
  )

  await assertNoHugeFiles(TARGET_DIR)
  console.log(`[Agent-Reach] 插件资源包目录已生成: ${TARGET_DIR}`)
  console.log('[Agent-Reach] 可在应用插件设置中选择该目录安装，或运行 pnpm agent-reach:release 同步到插件仓库。')
}

main().catch((error) => {
  console.error(`[Agent-Reach] ${error.message}`)
  process.exit(1)
})
