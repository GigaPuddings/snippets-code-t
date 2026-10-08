import { createPinia, setActivePinia } from 'pinia';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import type {
  PluginPackageManifest,
  RegisteredPlugin
} from '@/plugins/protocol';
import type { PluginMarketplaceItem } from '@/api/plugins';

const mocks = vi.hoisted(() => ({
  clearRuntimePluginRegistrations: vi.fn(),
  ensureLocalPluginFrontendEntry: vi.fn(),
  ensureLocalPluginFrontendEntries: vi.fn(),
  getInstalledPluginManifests: vi.fn(),
  getPluginInstallTasks: vi.fn(),
  getPluginStates: vi.fn(),
  uninstallLocalPluginPackage: vi.fn()
}));

vi.mock('@/api/plugins', () => ({
  buildMirrorUrl: vi.fn(),
  getInstalledPluginManifests: mocks.getInstalledPluginManifests,
  getPluginInstallTasks: mocks.getPluginInstallTasks,
  getLocalPluginResourcePath: vi.fn(),
  getPluginStates: mocks.getPluginStates,
  getRapidOcrResourceStatus: vi.fn(),
  getScreenRecorderFfmpegStatus: vi.fn(),
  installLocalPluginPackage: vi.fn(),
  installPluginPackageFromUrl: vi.fn(),
  setPluginEnabled: vi.fn(),
  uninstallLocalPluginPackage: mocks.uninstallLocalPluginPackage
}));

vi.mock('@/api/localAi', () => ({
  getLocalAiRuntimeStatus: vi.fn()
}));

vi.mock('@/plugins/runtime', () => ({
  clearRuntimePluginRegistrations: mocks.clearRuntimePluginRegistrations,
  ensureLocalPluginFrontendEntry: mocks.ensureLocalPluginFrontendEntry,
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

const createMarketplaceItem = (
  id: string,
  version = '1.0.0',
  dependencies: string[] = []
): PluginMarketplaceItem => ({
  ...createManifest(version),
  id,
  dependencies,
  packageUrl: `https://example.com/${id}-${version}.zip`
});

const createInstalledMarketplacePlugin = (
  item: PluginMarketplaceItem
): RegisteredPlugin => ({
  ...createPlugin(item.version, '2026-10-07T08:00:00Z'),
  id: item.id,
  packagePath: `C:\\Plugins\\${item.id}`,
  manifest: {
    ...createManifest(item.version),
    id: item.id,
    dependencies: item.dependencies
  }
});

describe('plugin runtime reconciliation', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
    vi.clearAllMocks();
    mocks.getInstalledPluginManifests.mockResolvedValue([]);
    mocks.getPluginInstallTasks.mockResolvedValue([]);
    mocks.getPluginStates.mockResolvedValue({});
    mocks.uninstallLocalPluginPackage.mockResolvedValue(undefined);
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

  it('loads only the requested plugin runtime for a cold window route', async () => {
    const store = usePluginStore();
    const plugin = createPlugin('2.0.24', '2026-07-27T08:00:00Z');
    store.installedPlugins = [plugin];
    store.enabled['git-sync'] = true;

    await store.loadEnabledPluginEntry('git-sync');

    expect(mocks.ensureLocalPluginFrontendEntry).toHaveBeenCalledWith(
      plugin,
      expect.any(Function)
    );
    expect(mocks.ensureLocalPluginFrontendEntries).not.toHaveBeenCalled();
    expect(store.runtimeRevision).toBe(1);
  });

  it('keeps concurrent package progress isolated by package URL', () => {
    const store = usePluginStore();
    store.setInstallProgress({
      packageUrl: 'https://example.com/local-launcher.zip',
      pluginId: 'local-launcher',
      phase: 'extracting',
      downloadedBytes: 109_000,
      totalBytes: 109_000,
      progress: 100,
      updatedAt: 20
    });
    store.setInstallProgress({
      packageUrl: 'https://example.com/desktop-files.zip',
      pluginId: 'desktop-files',
      phase: 'downloading',
      downloadedBytes: 50,
      totalBytes: 100,
      progress: 50,
      updatedAt: 21
    });

    expect(
      store.installProgressByPackageUrl[
        'https://example.com/local-launcher.zip'
      ].phase
    ).toBe('extracting');
    expect(
      store.installProgressByPackageUrl['https://example.com/desktop-files.zip']
        .phase
    ).toBe('downloading');
    expect(
      store.isPackageInstalling('https://example.com/local-launcher.zip')
    ).toBe(true);

    store.setInstallProgress({
      packageUrl: 'https://example.com/local-launcher.zip',
      pluginId: 'local-launcher',
      phase: 'installed',
      downloadedBytes: 109_000,
      totalBytes: 109_000,
      progress: 100,
      updatedAt: 22
    });

    expect(
      store.isPackageInstalling('https://example.com/local-launcher.zip')
    ).toBe(false);
    expect(
      store.isPackageInstalling('https://example.com/desktop-files.zip')
    ).toBe(true);
  });

  it('does not let an older restored snapshot replace a newer event', () => {
    const store = usePluginStore();
    store.setInstallProgress({
      packageUrl: 'https://example.com/plugin.zip',
      pluginId: 'plugin',
      phase: 'installing',
      downloadedBytes: 100,
      totalBytes: 100,
      progress: 100,
      updatedAt: 30
    });
    store.setInstallProgress({
      packageUrl: 'https://example.com/plugin.zip',
      pluginId: 'plugin',
      phase: 'queued',
      downloadedBytes: 0,
      updatedAt: 10
    });

    expect(
      store.installProgressByPackageUrl['https://example.com/plugin.zip'].phase
    ).toBe('installing');
  });

  it('removes an uninstalled plugin immediately on a cross-window event', () => {
    const store = usePluginStore();
    store.installedPlugins = [createPlugin('2.0.24', '2026-07-27T08:00:00Z')];
    store.enabled['git-sync'] = true;

    store.applyPluginStateChanged({
      pluginId: 'git-sync',
      enabled: false,
      installed: false
    });

    expect(store.isInstalled('git-sync')).toBe(false);
    expect(store.isEnabled('git-sync')).toBe(false);
    expect(store.enabled['git-sync']).toBeUndefined();
  });

  it('forwards the delete-data choice when uninstalling a plugin', async () => {
    const store = usePluginStore();

    await store.uninstall('git-sync', true);

    expect(mocks.uninstallLocalPluginPackage).toHaveBeenCalledWith(
      'git-sync',
      true
    );
  });

  it('applies a disabled state immediately on a cross-window event', () => {
    const store = usePluginStore();
    store.installedPlugins = [createPlugin('2.0.24', '2026-07-27T08:00:00Z')];
    store.enabled['git-sync'] = true;

    store.applyPluginStateChanged({
      pluginId: 'git-sync',
      enabled: false,
      installed: true
    });

    expect(store.isInstalled('git-sync')).toBe(true);
    expect(store.isEnabled('git-sync')).toBe(false);
  });

  it('updates only the selected plugin when its installed dependency has an update', async () => {
    const store = usePluginStore();
    const installedScreenshot = createMarketplaceItem('screenshot', '2.0.63', [
      'local-ai'
    ]);
    const screenshotUpdate = createMarketplaceItem('screenshot', '2.0.64', [
      'local-ai'
    ]);
    const installedAi = createMarketplaceItem('local-ai', '2.1.2');
    const aiUpdate = createMarketplaceItem('local-ai', '2.1.3');
    store.installedPlugins = [installedScreenshot, installedAi].map(
      createInstalledMarketplacePlugin
    );
    const install = vi.spyOn(store, 'installFromUrl').mockResolvedValue();

    await store.installMarketplaceItemWithDependencies(screenshotUpdate, [
      screenshotUpdate,
      aiUpdate
    ]);

    expect(install.mock.calls.map((call) => call[6])).toEqual(['screenshot']);
    expect(store.isInstalled('local-ai')).toBe(true);
  });

  it('does not redownload an installed screenshot dependency just to get its latest version', async () => {
    const store = usePluginStore();
    const screenshot = createMarketplaceItem('screenshot', '2.0.63', [
      'local-ai'
    ]);
    const ai = createMarketplaceItem('local-ai', '2.1.2');
    store.installedPlugins = [screenshot, ai].map(
      createInstalledMarketplacePlugin
    );
    const install = vi.spyOn(store, 'installFromUrl').mockResolvedValue();

    await store.installMarketplaceItemWithDependencies(screenshot, [
      screenshot,
      createMarketplaceItem('local-ai', '2.1.3')
    ]);

    expect(install).not.toHaveBeenCalled();
  });

  it('keeps screenshot dependencies installed when their marketplace versions are newer', () => {
    const store = usePluginStore();
    const screenshot = createMarketplaceItem('screenshot', '2.0.63', [
      'screenshot-rapidocr',
      'translation',
      'local-ai'
    ]);
    const dependencies = [
      createMarketplaceItem('screenshot-rapidocr', '2.0.6'),
      createMarketplaceItem('translation', '2.0.21'),
      createMarketplaceItem('local-ai', '2.1.2')
    ];
    store.installedPlugins = [screenshot, ...dependencies].map(
      createInstalledMarketplacePlugin
    );

    for (const dependency of dependencies) {
      expect(
        store.shouldInstallMarketplaceItem({ ...dependency, version: '3.0.0' })
      ).toBe(true);
    }
    expect(store.hasMissingMarketplaceDependencies(screenshot)).toBe(false);
  });

  it('installs a genuinely missing dependency without reinstalling its parent', async () => {
    const store = usePluginStore();
    const screenshot = createMarketplaceItem('screenshot', '2.0.63', [
      'screenshot-rapidocr'
    ]);
    const resource = createMarketplaceItem('screenshot-rapidocr', '2.0.6');
    store.installedPlugins = [createInstalledMarketplacePlugin(screenshot)];
    const install = vi
      .spyOn(store, 'installFromUrl')
      .mockImplementation(async () => {
        store.installedPlugins.push(createInstalledMarketplacePlugin(resource));
      });
    expect(store.hasMissingMarketplaceDependencies(screenshot)).toBe(true);

    await store.installMarketplaceItemWithDependencies(screenshot, [
      screenshot,
      resource
    ]);

    expect(install.mock.calls.map((call) => call[6])).toEqual([
      'screenshot-rapidocr'
    ]);
    expect(store.hasMissingMarketplaceDependencies(screenshot)).toBe(false);
  });

  it('repairs missing nested resources using the installed dependency manifest', async () => {
    const store = usePluginStore();
    const screenshot = createMarketplaceItem('screenshot', '2.0.63', [
      'local-ai'
    ]);
    const installedAi = createMarketplaceItem('local-ai', '2.1.2', [
      'local-ai-llama-runtime'
    ]);
    const futureAi = createMarketplaceItem('local-ai', '2.1.3', [
      'future-runtime'
    ]);
    const runtime = createMarketplaceItem('local-ai-llama-runtime');
    store.installedPlugins = [screenshot, installedAi].map(
      createInstalledMarketplacePlugin
    );
    const install = vi
      .spyOn(store, 'installFromUrl')
      .mockImplementation(async () => {
        store.installedPlugins.push(createInstalledMarketplacePlugin(runtime));
      });
    expect(store.hasMissingMarketplaceDependencies(screenshot)).toBe(true);

    await store.installMarketplaceItemWithDependencies(screenshot, [
      screenshot,
      futureAi,
      runtime
    ]);

    expect(install.mock.calls.map((call) => call[6])).toEqual([
      'local-ai-llama-runtime'
    ]);
    expect(store.hasMissingMarketplaceDependencies(screenshot)).toBe(false);
    expect(
      store.plugins.find((plugin) => plugin.id === 'local-ai')?.manifest.version
    ).toBe('2.1.2');
  });

  it('does not require marketplace metadata for an already installed dependency', async () => {
    const store = usePluginStore();
    const screenshot = createMarketplaceItem('screenshot', '2.0.63', [
      'local-ai'
    ]);
    const ai = createMarketplaceItem('local-ai', '2.1.2');
    store.installedPlugins = [screenshot, ai].map(
      createInstalledMarketplacePlugin
    );
    const install = vi.spyOn(store, 'installFromUrl').mockResolvedValue();

    await store.installMarketplaceItemWithDependencies(screenshot, [
      screenshot
    ]);

    expect(store.hasMissingMarketplaceDependencies(screenshot)).toBe(false);
    expect(install).not.toHaveBeenCalled();
  });

  it('rejects an unavailable missing dependency before downloading anything', async () => {
    const store = usePluginStore();
    const screenshot = createMarketplaceItem('screenshot', '2.0.63', [
      'local-ai'
    ]);
    const install = vi.spyOn(store, 'installFromUrl').mockResolvedValue();

    await expect(
      store.installMarketplaceItemWithDependencies(screenshot, [screenshot])
    ).rejects.toThrow('Missing plugin dependency: local-ai');
    expect(install).not.toHaveBeenCalled();
  });

  it('rejects cycles between missing packages and still allows a subsequent install', async () => {
    const store = usePluginStore();
    const screenshot = createMarketplaceItem('screenshot', '2.0.63', [
      'local-ai'
    ]);
    const ai = createMarketplaceItem('local-ai', '2.1.2', ['screenshot']);
    const install = vi.spyOn(store, 'installFromUrl').mockResolvedValue();

    await expect(
      store.installMarketplaceItemWithDependencies(screenshot, [screenshot, ai])
    ).rejects.toThrow('Circular plugin dependency: screenshot');
    expect(install).not.toHaveBeenCalled();

    await store.installMarketplaceItemWithDependencies(
      { ...screenshot, dependencies: [] },
      [screenshot]
    );
    expect(install).toHaveBeenCalledTimes(1);
  });
});
