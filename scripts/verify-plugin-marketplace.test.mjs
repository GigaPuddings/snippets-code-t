import { afterEach, describe, expect, it } from 'vitest';
import { mkdtemp, mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import { spawnSync } from 'node:child_process';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

const fixtures = [];
afterEach(async () => {
  await Promise.all(
    fixtures.splice(0).map((path) => rm(path, { recursive: true, force: true }))
  );
});

async function verify(manifestFields, marketplaceFields) {
  const root = await mkdtemp(join(tmpdir(), 'snippets-plugin-deps-'));
  fixtures.push(root);
  await mkdir(join(root, 'scripts'), { recursive: true });
  await mkdir(join(root, 'plugin-registry/packages/screenshot'), {
    recursive: true
  });
  await mkdir(join(root, 'plugin-registry/marketplace'), { recursive: true });
  for (const file of [
    'verify-plugin-marketplace.mjs',
    'plugin-release-config.mjs'
  ]) {
    await writeFile(
      join(root, 'scripts', file),
      await readFile(new URL(file, import.meta.url))
    );
  }
  await writeFile(
    join(root, 'plugin-registry/packages/screenshot/plugin.json'),
    JSON.stringify({
      schemaVersion: 1,
      kind: 'local',
      id: 'screenshot',
      version: '1.0.0',
      name: { i18nKey: 'name' },
      description: { i18nKey: 'description' },
      ...manifestFields
    })
  );
  await writeFile(
    join(root, 'plugin-registry/marketplace/marketplace.json'),
    JSON.stringify({
      schemaVersion: 1,
      plugins: [
        {
          id: 'screenshot',
          version: '1.0.0',
          sizeBytes: 1,
          sha256: 'a'.repeat(64),
          packageUrl:
            'https://github.com/GigaPuddings/snippets-code-plugin-screenshot/archive/refs/tags/1.0.0.zip',
          ...marketplaceFields
        },
        { id: 'optional' }
      ]
    })
  );
  return spawnSync(
    process.execPath,
    [join(root, 'scripts/verify-plugin-marketplace.mjs'), '--local'],
    { encoding: 'utf8', timeout: 10000 }
  );
}

describe('marketplace dependency contracts', () => {
  it('accepts old manifests and additive optional dependency declarations', async () => {
    expect((await verify({}, {})).status).toBe(0);
    expect(
      (
        await verify(
          { optionalDependencies: ['optional'] },
          { optionalDependencies: ['optional'] }
        )
      ).status
    ).toBe(0);
  });

  it('rejects a required dependency accidentally reclassified only in the marketplace', async () => {
    const result = await verify(
      { dependencies: ['optional'] },
      { optionalDependencies: ['optional'] }
    );
    expect(result.status).toBe(1);
    expect(result.stderr).toContain('dependencies 与 plugin.json 不一致');
  });

  it('rejects optional metadata that diverges from the package being installed', async () => {
    const result = await verify({ optionalDependencies: ['optional'] }, {});
    expect(result.status).toBe(1);
    expect(result.stderr).toContain(
      'optionalDependencies 与 plugin.json 不一致'
    );
  });
});
