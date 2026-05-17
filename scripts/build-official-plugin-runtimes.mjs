import { mkdir, readFile, readdir, rm, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { join, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { build } from 'vite';
import vue from '@vitejs/plugin-vue';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';

const ROOT = resolve(fileURLToPath(new URL('..', import.meta.url)));
const PLUGIN_PACKAGE_ROOT = resolve(ROOT, 'docs/plugin-packages');

const officialRuntimeEntries = {
  screenshot: 'src/plugins/screenshot/runtime-entry.ts',
  translation: 'src/plugins/translation/runtime-entry.ts',
  todo: 'src/plugins/todo/runtime-entry.ts',
  'system-theme': 'src/plugins/system-theme/runtime-entry.ts',
  'local-launcher': 'src/plugins/local-launcher/runtime-entry.ts',
  'desktop-files': 'src/plugins/desktop-files/runtime-entry.ts',
  'search-engines': 'src/plugins/search-engines/runtime-entry.ts',
  'git-sync': 'src/plugins/git-sync/runtime-entry.ts'
};

async function readJson(path) {
  return JSON.parse(await readFile(path, 'utf8'));
}

async function listFiles(directory) {
  const result = [];
  const entries = await readdir(directory, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = join(directory, entry.name);
    if (entry.isDirectory()) {
      result.push(...await listFiles(fullPath));
    } else {
      result.push(fullPath);
    }
  }
  return result;
}

const toPluginPath = (pluginDir, filePath) => relative(pluginDir, filePath).replaceAll('\\', '/');

async function buildRuntime(pluginId, entryPath) {
  const pluginDir = join(PLUGIN_PACKAGE_ROOT, pluginId);
  const manifestPath = join(pluginDir, 'plugin.json');
  if (!existsSync(manifestPath)) {
    throw new Error(`${pluginId}: 缺少 ${manifestPath}`);
  }

  const distDir = join(pluginDir, 'dist');
  await rm(distDir, { recursive: true, force: true });
  await mkdir(distDir, { recursive: true });

  await build({
    configFile: false,
    root: ROOT,
    plugins: [
      vue(),
      AutoImport({
        imports: ['vue', 'pinia', 'vue-router'],
        resolvers: [ElementPlusResolver({ importStyle: 'sass' })],
        dts: false,
        vueTemplate: true
      }),
      Components({
        resolvers: [ElementPlusResolver({ importStyle: 'sass' })],
        dirs: ['src/components', 'src/**/components'],
        dts: false
      })
    ],
    resolve: {
      alias: {
        '@': resolve(ROOT, 'src'),
        '@tauri': resolve(ROOT, 'src-tauri')
      }
    },
    build: {
      outDir: distDir,
      emptyOutDir: true,
      target: 'es2020',
      cssCodeSplit: true,
      lib: {
        entry: resolve(ROOT, entryPath),
        formats: ['es'],
        fileName: () => 'frontend.js'
      },
      rollupOptions: {
        output: {
          assetFileNames: 'assets/[name]-[hash][extname]',
          chunkFileNames: 'assets/[name]-[hash].js'
        }
      }
    }
  });

  const files = await listFiles(distDir);
  const styles = files
    .filter((filePath) => filePath.endsWith('.css'))
    .map((filePath) => toPluginPath(pluginDir, filePath));

  const manifest = await readJson(manifestPath);
  manifest.entry = {
    ...(manifest.entry ?? {}),
    frontend: 'dist/frontend.js',
    ...(styles.length ? { styles } : {})
  };

  await writeFile(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`, 'utf8');

  return {
    pluginId,
    files: files.length,
    styles: styles.length
  };
}

async function main() {
  const requested = process.argv.slice(2);
  const selected = requested.length
    ? Object.fromEntries(requested.map((pluginId) => [pluginId, officialRuntimeEntries[pluginId]]))
    : officialRuntimeEntries;

  for (const [pluginId, entryPath] of Object.entries(selected)) {
    if (!entryPath) {
      throw new Error(`未知官方插件: ${pluginId}`);
    }
  }

  const results = [];
  for (const [pluginId, entryPath] of Object.entries(selected)) {
    console.log(`[Plugins] building ${pluginId}`);
    results.push(await buildRuntime(pluginId, entryPath));
  }

  console.log(`[Plugins] 官方插件运行时打包完成: ${results.length}`);
  for (const result of results) {
    console.log(`[Plugins] ${result.pluginId}: files=${result.files}, styles=${result.styles}`);
  }
}

main().catch((error) => {
  console.error(`[Plugins] ${error.message}`);
  process.exit(1);
});
