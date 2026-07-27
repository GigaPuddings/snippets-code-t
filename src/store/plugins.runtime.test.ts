import { createPinia, setActivePinia } from 'pinia';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import type {
  PluginPackageManifest,
  RegisteredPlugin
} from '@/plugins/protocol';

const mocks = vi.hoisted(() => ({
  clearRuntimePluginRegistrations: vi.fn(),
  ensureLocalPluginFrontendEntries: vi.fn(),
  getInstalledPluginManifests: vi.fn(),
  getPluginStates: vi.fn()
}));

vi.mock('@/api/plugins', () => ({
  buildMirrorUrl: vi.fn(),
  getInstalledPluginManifests: mocks.getInstalledPluginManifests,
  getLocalPluginResourcePath: vi.fn(),
  getPluginStates: mocks.getPluginStates,
  getRapidOcrResourceStatus: vi.fn(),
  getScreenRecorderFfmpegStatus: vi.fn(),
  installLocalPluginPackage: vi.fn(),
  installPluginPackageFromUrl: vi.fn(),
  setPluginEnabled: vi.fn(),
  uninstallLocalPluginPackage: vi.fn()
}));

vi.mock('@/api/localAi', () => ({
  getLocalAiRuntimeStatus: vi.fn()
}));

vi.mock('@/plugins/runtime', () => ({
  clearRuntimePluginRegistrations: mocks.clearRuntimePluginRegistrations,
  ensureLocalPluginFrontendEntries: mocks.ensureLocalPluginFrontendEntries
}));

vi.mock('@/utils/logger', () => ({
  logger: {
    debug: vi.fn(),
    error: vi.fn(),
    info: vi.fn(),
    warn: vi.fn()
  }
}));

import { usePluginStore } from './plugins';

const createManifest = (version: string): PluginPackageManifest => ({
  schemaVersion: 1,
  id: 'git-sync',
  version,
  kind: 'local',
  name: {
    i18nKey: 'plugins.gitSync.name',
    fallback: 'Git Sync'
  },
  description: {
    i18nKey: 'plugins.gitSync.description',
    fallback: 'Git Sync'
  },
  category: 'sync',
  enabledByDefault: true,
  capabilities: {
    settingsTabs: ['gitSync']
  },
  entry: {
    frontend: 'dist/frontend.js',
    styles: ['dist/assets/runtime.css']
  }
});

const createPlugin = (
  version: string,
  installedAt: string
): RegisteredPlugin => ({
  id: 'git-sync',
  source: 'local',
  packagePath: 'C:\\Plugins\\git-sync',
  installedAt,
  manifest: createManifest(version),
  nameKey: 'plugins.gitSync.name',
  descriptionKey: 'plugins.gitSync.description',
  category: 'sync',
  enabledByDefault: true,
  settingsTabs: ['gitSync']
});

describe('plugin runtime reconciliation', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
    vi.clearAllMocks();
  });

  it('waits for an active frontend load before clearing and reloading a plugin', async () => {
    const events: string[] = [];
    let finishInitialLoad!: () => void;
    const initialLoad = new Promise<void>((resolve) => {
      finishInitialLoad = resolve;
    });

    mocks.ensureLocalPluginFrontendEntries
      .mockImplementationOnce(async () => {
        events.push('initial-load-start');
        await initialLoad;
        events.push('initial-load-end');
      })
      .mockImplementationOnce(async () => {
        events.push('reload');
      });
    mocks.clearRuntimePluginRegistrations.mockImplementation(() => {
      events.push('clear');
    });
    mocks.getInstalledPluginManifests.mockResolvedValue([
      {
        manifest: createManifest('2.0.24'),
        packagePath: 'C:\\Plugins\\git-sync',
        installedAt: '2026-07-27T08:00:01Z'
      }
    ]);
    mocks.getPluginStates.mockResolvedValue({
      'git-sync': true
    });

    const store = usePluginStore();
    store.installedPlugins = [createPlugin('2.0.23', '2026-07-27T08:00:00Z')];
    store.enabled['git-sync'] = true;

    const loadPromise = store.loadEnabledPluginEntries();
    const reconcilePromise = store.reconcileInstalledPlugins(
      'concurrent-runtime-refresh',
      ['git-sync'],
      { refreshResourceStatus: false }
    );

    await Promise.resolve();
    expect(events).toEqual(['initial-load-start']);

    finishInitialLoad();
    await Promise.all([loadPromise, reconcilePromise]);

    expect(events).toEqual([
      'initial-load-start',
      'initial-load-end',
      'clear',
      'reload'
    ]);
    expect(mocks.clearRuntimePluginRegistrations).toHaveBeenCalledWith(
      'git-sync',
      { preserveStyles: true }
    );
  });
});
