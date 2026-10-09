import assert from 'node:assert/strict';
import { test } from 'vitest';
import { createRequire } from 'node:module';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { dirname, join } from 'node:path';
import { build, createServer } from 'vite';
import { createSSRApp, h } from 'vue';
import { renderToString } from 'vue/server-renderer';
import { createIconPlugins, createIconResolver } from './icon-config.mjs';

const require = createRequire(import.meta.url);
const vueUrl = pathToFileURL(
  join(dirname(require.resolve('vue/package.json')), 'index.mjs')
).href;

async function bundleIcons(source) {
  const result = await build({
    configFile: false,
    logLevel: 'silent',
    plugins: [
      {
        name: 'icon-test-entry',
        resolveId(id) {
          if (id.endsWith('virtual:icon-test')) return '\0icon-test';
        },
        load(id) {
          if (id === '\0icon-test') return source;
        }
      },
      ...createIconPlugins()
    ],
    build: {
      write: false,
      minify: false,
      lib: { entry: 'virtual:icon-test', formats: ['es'] },
      rollupOptions: {
        external: ['vue'],
        output: { paths: { vue: vueUrl } }
      }
    }
  });
  const output = (Array.isArray(result) ? result : [result]).flatMap(
    (bundle) => bundle.output
  );
  return output.find((file) => file.type === 'chunk').code;
}

// These integration tests compile real Vite modules, including cold file I/O.
test('builds local Vue SVG components without a runtime loader', async () => {
  const code = await bundleIcons(`
    export { default as Star } from '~icons/lucide/star';
    export { default as Github } from '~icons/simple-icons/github';
  `);
  assert.doesNotMatch(
    code,
    /api\.iconify|fetch\(|XMLHttpRequest|@iconify-json/
  );
  assert.ok(
    Buffer.byteLength(code) < 15_000,
    'only selected icons should be bundled'
  );
  const compiled = await import(
    `data:text/javascript;base64,${Buffer.from(code).toString('base64')}`
  );
  const star = await renderToString(
    createSSRApp({
      render: () =>
        h(compiled.Star, { width: 18, height: 18, class: 'app-icon--filled' })
    })
  );
  assert.match(star, /<svg/);
  assert.match(star, /viewBox="0 0 24 24"/);
  assert.match(star, /width="18"/);
  assert.match(star, /height="18"/);
  assert.match(star, /app-icon--lucide/);
  assert.match(star, /app-icon--filled/);
  assert.match(star, /aria-hidden="true"/);
  assert.match(star, /currentColor/);
  const brand = await renderToString(
    createSSRApp({ render: () => h(compiled.Github) })
  );
  assert.match(brand, /app-icon--simple-icons/);
}, 30_000);

test('rejects other UI collections and missing icons at build time', async () => {
  await assert.rejects(
    bundleIcons("export { default } from '~icons/mdi/account';"),
    /Unsupported icon collection: mdi/
  );
  await assert.rejects(
    bundleIcons("export { default } from '~icons/lucide/not-a-real-app-icon';"),
    /not-a-real-app-icon/
  );
}, 30_000);

test('automatic Vue component resolution uses the same collection rules', () => {
  const resolver = createIconResolver();
  assert.equal(resolver('ILucideStar'), '~icons/lucide/star');
  assert.equal(resolver('ISimpleIconsGithub'), '~icons/simple-icons/github');
  assert.equal(resolver('IAppProductMark'), '~icons/app/product-mark');
  assert.equal(resolver('IMdiAccount'), undefined);
});

test('workspace icons are served as JavaScript by the development server', async () => {
  const root = fileURLToPath(new URL('../', import.meta.url));
  const server = await createServer({
    root,
    configFile: join(root, 'vite.config.ts'),
    logLevel: 'silent',
    server: { host: '127.0.0.1', port: 0, strictPort: false, hmr: false },
    optimizeDeps: { noDiscovery: true, include: [] }
  });
  try {
    await server.listen();
    const address = server.httpServer.address();
    const origin = `http://127.0.0.1:${address.port}`;
    for (const path of [
      '/src/components/ContentItem/index.vue',
      '/src/pages/config/components/category/index.vue',
      '/src/pages/config/components/category/components/contentList/index.vue'
    ]) {
      const response = await fetch(`${origin}${path}`);
      assert.equal(response.status, 200, path);
      assert.match(response.headers.get('content-type'), /javascript/, path);
      const source = await response.text();
      const imports = [...source.matchAll(/from\s+["']([^"']+)["']/g)]
        .map((match) => match[1])
        .filter((specifier) => specifier.includes('/@id/~icons/'));
      for (const specifier of imports) {
        const icon = await fetch(`${origin}${specifier}`);
        assert.equal(icon.status, 200, specifier);
        assert.match(
          icon.headers.get('content-type'),
          /javascript/,
          `${specifier} must not fall back to index.html`
        );
        assert.doesNotMatch(await icon.text(), /<!doctype html>/i, specifier);
      }
    }
  } finally {
    await server.close();
  }
}, 60_000);
