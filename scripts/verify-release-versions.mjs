import { readFile } from 'fs/promises';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');

async function readJson(path) {
  return JSON.parse(await readFile(path, 'utf8'));
}

async function readText(path) {
  return await readFile(path, 'utf8');
}

function matchVersion(label, content, pattern) {
  const match = content.match(pattern);
  if (!match) {
    throw new Error(`${label}: 未找到版本号`);
  }
  return match[1];
}

function assertSameVersion(versions) {
  const [expectedLabel, expectedVersion] = versions[0];
  const mismatched = versions.filter(([, version]) => version !== expectedVersion);
  if (mismatched.length === 0) return;

  const details = versions
    .map(([label, version]) => `- ${label}: ${version}`)
    .join('\n');
  throw new Error(
    `发布版本不一致，期望以 ${expectedLabel} (${expectedVersion}) 为准:\n${details}`
  );
}

async function main() {
  const packageJson = await readJson(resolve(ROOT, 'package.json'));
  const tauriConfig = await readJson(resolve(ROOT, 'src-tauri/tauri.conf.json'));
  const cargoToml = await readText(resolve(ROOT, 'src-tauri/Cargo.toml'));
  const cargoLock = await readText(resolve(ROOT, 'src-tauri/Cargo.lock'));

  const versions = [
    ['package.json', packageJson.version],
    ['src-tauri/tauri.conf.json', tauriConfig.version],
    [
      'src-tauri/Cargo.toml',
      matchVersion(
        'src-tauri/Cargo.toml',
        cargoToml,
        /^\[package\][\s\S]*?^version\s*=\s*"([^"]+)"/m
      )
    ],
    [
      'src-tauri/Cargo.lock',
      matchVersion(
        'src-tauri/Cargo.lock',
        cargoLock,
        /^\[\[package\]\]\s*^name\s*=\s*"snippets-code"\s*^version\s*=\s*"([^"]+)"/m
      )
    ]
  ];

  assertSameVersion(versions);
  console.log(`[Release] 版本一致: ${packageJson.version}`);
}

main().catch((error) => {
  console.error(error.message);
  process.exit(1);
});
