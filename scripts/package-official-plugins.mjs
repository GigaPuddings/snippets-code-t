import { cp, mkdir, readdir, rm, stat, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { basename, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = resolve(fileURLToPath(new URL('..', import.meta.url)));
const OFFICIAL_SOURCE_DIR = resolve(ROOT, 'docs/plugin-packages');
const EXAMPLE_SOURCE_DIR = resolve(ROOT, 'docs/examples');
const TARGET_ROOT = resolve(ROOT, 'dist-plugin-packages');
const TARGET_OFFICIAL_DIR = join(TARGET_ROOT, 'official');
const TARGET_EXAMPLES_DIR = join(TARGET_ROOT, 'examples');

const hasPluginManifest = (directory) => existsSync(join(directory, 'plugin.json'));

async function copyPluginDirectories(sourceRoot, targetRoot) {
  if (!existsSync(sourceRoot)) return [];

  const copied = [];
  const entries = await readdir(sourceRoot, { withFileTypes: true });
  for (const entry of entries) {
    if (!entry.isDirectory()) continue;

    const sourceDir = join(sourceRoot, entry.name);
    if (!hasPluginManifest(sourceDir)) continue;

    const targetDir = join(targetRoot, entry.name);
    await mkdir(targetDir, { recursive: true });
    await cp(sourceDir, targetDir, {
      recursive: true,
      force: true
    });
    copied.push(targetDir);
  }

  return copied;
}

async function main() {
  const sourceStats = await stat(OFFICIAL_SOURCE_DIR);
  if (!sourceStats.isDirectory()) {
    throw new Error(`官方插件包目录无效: ${OFFICIAL_SOURCE_DIR}`);
  }

  await rm(TARGET_OFFICIAL_DIR, { recursive: true, force: true });
  await rm(TARGET_EXAMPLES_DIR, { recursive: true, force: true });
  await mkdir(TARGET_OFFICIAL_DIR, { recursive: true });
  await mkdir(TARGET_EXAMPLES_DIR, { recursive: true });

  const officialPackages = await copyPluginDirectories(OFFICIAL_SOURCE_DIR, TARGET_OFFICIAL_DIR);
  const examplePackages = await copyPluginDirectories(EXAMPLE_SOURCE_DIR, TARGET_EXAMPLES_DIR);

  const summary = {
    generatedAt: new Date().toISOString(),
    officialPackages: officialPackages.map((item) => basename(item)),
    examplePackages: examplePackages.map((item) => basename(item))
  };

  await writeFile(
    join(TARGET_ROOT, 'official-packages.json'),
    `${JSON.stringify(summary, null, 2)}\n`,
    'utf8'
  );

  console.log(`[Plugins] 官方插件包已生成: ${TARGET_OFFICIAL_DIR}`);
  console.log(`[Plugins] 示例/资源模板包已生成: ${TARGET_EXAMPLES_DIR}`);
  console.log(`[Plugins] 官方插件数量: ${officialPackages.length}`);
  console.log(`[Plugins] 示例/资源模板数量: ${examplePackages.length}`);
}

main().catch((error) => {
  console.error(`[Plugins] ${error.message}`);
  process.exit(1);
});
