import { describe, expect, it } from 'vitest';
import {
  loadLocalPluginPackages,
  normalizePluginPackageManifest
} from './loader';

const validStorage = {
  schemaVersion: 1,
  indexSchemaVersion: 2,
  extractorVersion: 3
};

const createManifest = (
  overrides: Record<string, unknown> = {}
): Record<string, unknown> => ({
  schemaVersion: 1,
  id: 'desktop-files',
  version: '1.0.0',
  kind: 'local',
  name: {
    i18nKey: 'plugins.desktopFiles.name',
    fallback: 'Desktop Files'
  },
  description: {
    i18nKey: 'plugins.desktopFiles.description',
    fallback: 'Desktop file search'
  },
  category: 'search',
  enabledByDefault: true,
  ...overrides
});

describe('plugin manifest storage loader', () => {
  it('keeps a valid storage contract from plugin manifests', () => {
    const manifest = normalizePluginPackageManifest(
      createManifest({
        storage: validStorage
      })
    );

    expect(manifest?.storage).toEqual(validStorage);
  });

  it('keeps manifests valid when storage is missing', () => {
    const manifest = normalizePluginPackageManifest(createManifest());

    expect(manifest).not.toBeNull();
    expect(manifest?.storage).toBeUndefined();
  });
});

describe('plugin manifest storage validation', () => {
  it('rejects invalid storage schemaVersion values', () => {
    const manifest = normalizePluginPackageManifest(
      createManifest({
        storage: {
          schemaVersion: -1,
          indexSchemaVersion: 1,
          extractorVersion: 1
        }
      })
    );

    expect(manifest).toBeNull();
  });

  it('rejects invalid storage indexSchemaVersion values', () => {
    const manifest = normalizePluginPackageManifest(
      createManifest({
        storage: {
          schemaVersion: 1,
          indexSchemaVersion: 1.5,
          extractorVersion: 1
        }
      })
    );

    expect(manifest).toBeNull();
  });

  it('rejects invalid storage extractorVersion values', () => {
    const manifest = normalizePluginPackageManifest(
      createManifest({
        storage: {
          schemaVersion: 1,
          indexSchemaVersion: 1,
          extractorVersion: '1'
        }
      })
    );

    expect(manifest).toBeNull();
  });
});

describe('local plugin package storage loading', () => {
  const packageStorage = {
    schemaVersion: 4,
    indexSchemaVersion: 5,
    extractorVersion: 6
  };

  it('does not lose storage fields when loading local plugin packages', () => {
    const packages = loadLocalPluginPackages([
      {
        manifest: createManifest({ storage: packageStorage }),
        packagePath: 'C:/plugins/desktop-files',
        installedAt: '2026-09-02T00:00:00Z'
      }
    ]);

    expect(packages).toHaveLength(1);
    expect(packages[0].manifest.storage).toEqual(packageStorage);
  });
});
