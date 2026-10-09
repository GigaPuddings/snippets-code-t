import { mkdir, readFile, readdir, rm, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { join, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { build, transformWithEsbuild } from 'vite';
import vue from '@vitejs/plugin-vue';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import { createIconPlugins, createIconResolver } from './icon-config.mjs';

const ROOT = resolve(fileURLToPath(new URL('..', import.meta.url)));
const PLUGIN_PACKAGE_ROOT = resolve(ROOT, 'plugin-registry/packages');

const officialRuntimeEntries = {
  screenshot: 'src/plugins/screenshot/runtime-entry.ts',
  translation: 'src/plugins/translation/runtime-entry.ts',
  todo: 'src/plugins/todo/runtime-entry.ts',
  'system-theme': 'src/plugins/system-theme/runtime-entry.ts',
  'local-launcher': 'src/plugins/local-launcher/runtime-entry.ts',
  'desktop-files': 'src/plugins/desktop-files/runtime-entry.ts',
  'quick-tools': 'src/plugins/quick-tools/runtime-entry.ts',
  'screen-recorder': 'src/plugins/screen-recorder/runtime-entry.ts',
  'search-engines': 'src/plugins/search-engines/runtime-entry.ts',
  'git-sync': 'src/plugins/git-sync/runtime-entry.ts',
  'wallpaper-switcher': 'src/plugins/wallpaper-switcher/runtime-entry.ts',
  'local-ai': 'src/plugins/local-ai/runtime-entry.ts'
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
      result.push(...(await listFiles(fullPath)));
    } else {
      result.push(fullPath);
    }
  }
  return result;
}

const toPluginPath = (pluginDir, filePath) =>
  relative(pluginDir, filePath).replaceAll('\\', '/');

async function buildRuntime(pluginId, entryPath, checkOnly) {
  const pluginDir = join(PLUGIN_PACKAGE_ROOT, pluginId);
  const manifestPath = join(pluginDir, 'plugin.json');
  if (!existsSync(manifestPath)) {
    throw new Error(`${pluginId}: 缺少 ${manifestPath}`);
  }

  const distDir = join(pluginDir, 'dist');
  if (!checkOnly) {
    await rm(distDir, { recursive: true, force: true });
    await mkdir(distDir, { recursive: true });
  }

  const result = await build({
    configFile: false,
    root: ROOT,
    plugins: [
      vue(),
      ...createIconPlugins(),
      AutoImport({
        imports: ['vue', 'pinia', 'vue-router'],
        resolvers: [ElementPlusResolver({ importStyle: 'sass' })],
        dts: false,
        vueTemplate: true
      }),
      Components({
        resolvers: [
          createIconResolver(),
          ElementPlusResolver({ importStyle: 'sass' })
        ],
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
    define: {
      'process.env.NODE_ENV': JSON.stringify('production'),
      __VUE_OPTIONS_API__: 'true',
      __VUE_PROD_DEVTOOLS__: 'false',
      __INTLIFY_PROD_DEVTOOLS__: 'false'
    },
    build: {
      write: !checkOnly,
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
        external: ['vue', 'pinia', 'vue-router', 'vue-i18n'],
        output: {
          inlineDynamicImports: true,
          assetFileNames: 'assets/[name]-[hash][extname]',
          chunkFileNames: 'assets/[name]-[hash].js'
        }
      }
    }
  });

  // Vite intentionally keeps whitespace in ES library output. Official plugin
  // runtimes are shipped as release assets, so compact the single entry after
  // Rollup has finished without changing its external module boundary.
  const frontendPath = join(distDir, 'frontend.js');
  const output = (Array.isArray(result) ? result : [result]).flatMap(
    (bundle) => bundle.output
  );
  const frontendSource = output.find(
    (file) => file.type === 'chunk' && file.fileName === 'frontend.js'
  )?.code;
  if (!frontendSource) throw new Error(`${pluginId}: 缺少 frontend.js 产物`);
  const minifiedFrontend = await transformWithEsbuild(
    frontendSource,
    frontendPath,
    {
      format: 'esm',
      target: 'es2020',
      minify: true,
      sourcemap: false
    }
  );
  if (checkOnly) {
    return {
      pluginId,
      files: output.length,
      styles: output.filter((file) => file.fileName.endsWith('.css')).length
    };
  }
  await writeFile(frontendPath, minifiedFrontend.code, 'utf8');
  // Carry icon attribution with independently distributed plugin bundles.
  await writeFile(
    join(distDir, 'ICON_LICENSES.txt'),
    await readFile(join(ROOT, 'public/licenses/icons.txt'), 'utf8'),
    'utf8'
  );

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

  await writeFile(
    manifestPath,
    `${JSON.stringify(manifest, null, 2)}\n`,
    'utf8'
  );

  return {
    pluginId,
    files: files.length,
    styles: styles.length
  };
}

async function main() {
  const args = process.argv.slice(2);
  const checkOnly = args.includes('--check');
  const requested = args.filter((arg) => arg !== '--check');
  const selected = requested.length
    ? Object.fromEntries(
        requested.map((pluginId) => [
          pluginId,
          officialRuntimeEntries[pluginId]
        ])
      )
    : officialRuntimeEntries;

  for (const [pluginId, entryPath] of Object.entries(selected)) {
    if (!entryPath) {
      throw new Error(`未知官方插件: ${pluginId}`);
    }
  }

  const results = [];
  for (const [pluginId, entryPath] of Object.entries(selected)) {
    console.log(`[Plugins] building ${pluginId}`);
    results.push(await buildRuntime(pluginId, entryPath, checkOnly));
  }

  console.log(
    `[Plugins] 官方插件运行时${checkOnly ? '构建检查' : '打包'}完成: ${results.length}`
  );
  for (const result of results) {
    console.log(
      `[Plugins] ${result.pluginId}: files=${result.files}, styles=${result.styles}`
    );
  }
}

main().catch((error) => {
  console.error(`[Plugins] ${error.message}`);
  process.exit(1);
});
