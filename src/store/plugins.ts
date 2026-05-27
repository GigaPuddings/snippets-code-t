import { defineStore } from 'pinia';
import { listen, type UnlistenFn } from '@tauri-apps/api/event';
import {
  getInstalledPluginManifests,
  getLocalPluginResourcePath,
  getPluginStates,
  getRapidOcrResourceStatus,
  getScreenRecorderFfmpegStatus,
  installLocalPluginPackage,
  installPluginPackageFromUrl,
  type PluginMarketplaceItem,
  type PluginResourceStatus,
  setPluginEnabled,
  uninstallLocalPluginPackage
} from '@/api/plugins';
import {
  DEFAULT_PLUGIN_STATES,
  INSTALLED_PLUGINS,
  isPluginId
} from '@/plugins/registry';
import { loadPluginRegistry } from '@/plugins/loader';
import {
  clearRuntimePluginRegistrations,
  ensureLocalPluginFrontendEntries
} from '@/plugins/runtime';
import type { RegisteredPlugin } from '@/plugins/protocol';
import type { PluginId, PluginStateMap } from '@/plugins/types';
import { logger } from '@/utils/logger';

interface PluginStateChangedPayload {
  pluginId: string;
  enabled: boolean;
}

interface ReconcileInstalledPluginsOptions {
  refreshResourceStatus?: boolean;
  loadRuntimeEntries?: boolean;
}

let pluginInitializePromise: Promise<void> | null = null;
let pluginRuntimeEntriesPromise: Promise<void> | null = null;
let pluginResourceStatusPromise: Promise<void> | null = null;

const schedulePluginBackgroundWork = (
  task: () => void,
  delayMs: number
): void => {
  globalThis.setTimeout(task, delayMs);
};

const versionParts = (version: string): number[] =>
  version
    .replace(/^v/i, '')
    .split('.')
    .map((part) => Number.parseInt(part, 10))
    .map((part) => (Number.isFinite(part) ? part : 0));

const compareVersions = (left: string, right: string): number => {
  const leftParts = versionParts(left);
  const rightParts = versionParts(right);
  const length = Math.max(leftParts.length, rightParts.length);
  for (let index = 0; index < length; index += 1) {
    const diff = (leftParts[index] ?? 0) - (rightParts[index] ?? 0);
    if (diff !== 0) return diff;
  }
  return 0;
};

const getMarketplaceDependencies = (item: PluginMarketplaceItem): string[] =>
  Array.isArray(item.dependencies)
    ? item.dependencies.filter(
        (dependencyId) =>
          typeof dependencyId === 'string' && Boolean(dependencyId.trim())
      )
    : [];

const pluginRuntimeSignature = (plugin: RegisteredPlugin): string =>
  JSON.stringify({
    id: plugin.id,
    source: plugin.source,
    packagePath: plugin.packagePath,
    installedAt: plugin.installedAt,
    version: plugin.manifest.version,
    entry: plugin.manifest.entry,
    capabilities: plugin.manifest.capabilities,
    dependencies: plugin.manifest.dependencies,
    resourceFor: plugin.resourceFor
  });

const hasPluginRuntimeChanged = (
  previous: RegisteredPlugin,
  next: RegisteredPlugin
): boolean => pluginRuntimeSignature(previous) !== pluginRuntimeSignature(next);

const normalizePluginStates = (
  plugins: RegisteredPlugin[],
  states?: Partial<Record<string, boolean>>
): PluginStateMap => {
  const normalized = plugins.reduce(
    (pluginStates, plugin) => {
      pluginStates[plugin.id] = plugin.enabledByDefault;
      return pluginStates;
    },
    { ...DEFAULT_PLUGIN_STATES } as PluginStateMap
  );

  if (!states) {
    return normalized;
  }

  for (const plugin of plugins) {
    const value = states[plugin.id];
    if (typeof value === 'boolean') {
      normalized[plugin.id] = value;
    }
  }

  return normalized;
};

export const usePluginStore = defineStore('plugins', {
  state: (): {
    enabled: PluginStateMap;
    installedPlugins: RegisteredPlugin[];
    initialized: boolean;
    resourceStatusByPluginId: Record<string, PluginResourceStatus | undefined>;
    runtimeRevision: number;
    stateUnlisten: UnlistenFn | null;
  } => ({
    enabled: { ...DEFAULT_PLUGIN_STATES },
    installedPlugins: INSTALLED_PLUGINS,
    initialized: false,
    resourceStatusByPluginId: {},
    runtimeRevision: 0,
    stateUnlisten: null
  }),
  getters: {
    plugins: (state): RegisteredPlugin[] => state.installedPlugins,
    visiblePlugins: (state): RegisteredPlugin[] =>
      state.installedPlugins.filter((plugin) => !plugin.resourceFor),
    resourcesForPlugin:
      (state) =>
      (pluginId: PluginId | string): RegisteredPlugin[] =>
        state.installedPlugins.filter(
          (plugin) => plugin.resourceFor === pluginId
        ),
    isInstalled:
      (state) =>
      (id: PluginId | string): boolean =>
        state.installedPlugins.some((plugin) => plugin.id === id),
    isEnabled:
      (state) =>
      (id: PluginId | string): boolean =>
        state.installedPlugins.some((plugin) => plugin.id === id)
          ? (state.enabled[id] ?? true)
          : false
  },
  actions: {
    async initialize(): Promise<void> {
      if (this.initialized) {
        await this.ensureStateListener();
        return;
      }

      if (pluginInitializePromise) {
        await pluginInitializePromise;
        return;
      }

      pluginInitializePromise = (async () => {
        try {
          logger.info('[PluginStore] initialize start');
          await this.reconcileInstalledPlugins('initialize', [], {
            loadRuntimeEntries: false,
            refreshResourceStatus: false
          });
          logger.info('[PluginStore] initialize complete', {
            plugins: this.installedPlugins.map((plugin) => ({
              id: plugin.id,
              source: plugin.source,
              enabled: this.isEnabled(plugin.id),
              packagePath: plugin.packagePath
            }))
          });
        } catch (error) {
          logger.warn('[PluginStore] 加载插件状态失败，使用默认状态', error);
          this.installedPlugins = INSTALLED_PLUGINS;
          this.enabled = normalizePluginStates(
            this.installedPlugins,
            this.enabled
          );
        } finally {
          this.initialized = true;
          await this.ensureStateListener();
        }

        schedulePluginBackgroundWork(
          () => this.loadEnabledPluginEntriesInBackground(),
          600
        );
        schedulePluginBackgroundWork(
          () => this.refreshPluginResourceStatusInBackground(),
          1200
        );
      })();

      try {
        await pluginInitializePromise;
      } finally {
        pluginInitializePromise = null;
      }
    },

    async refreshInstalledPlugins(): Promise<void> {
      await this.reconcileInstalledPlugins('manual-refresh');
    },

    async reconcileInstalledPlugins(
      reason: string,
      resetPluginIds: Iterable<string> = [],
      options: ReconcileInstalledPluginsOptions = {}
    ): Promise<void> {
      const {
        refreshResourceStatus = true,
        loadRuntimeEntries = true
      } = options;
      logger.info('[PluginStore] reconcile installed plugins start', {
        reason
      });
      const previousPlugins = this.installedPlugins;
      const previousById = new Map(
        previousPlugins.map((plugin) => [String(plugin.id), plugin])
      );
      const localManifests = await getInstalledPluginManifests();
      const nextInstalledPlugins = loadPluginRegistry(localManifests);
      const nextById = new Map(
        nextInstalledPlugins.map((plugin) => [String(plugin.id), plugin])
      );
      const runtimeResetPluginIds = new Set(resetPluginIds);

      for (const previousPlugin of previousPlugins) {
        if (previousPlugin.source !== 'local') continue;
        const pluginId = String(previousPlugin.id);
        const nextPlugin = nextById.get(pluginId);
        if (
          !nextPlugin ||
          hasPluginRuntimeChanged(previousPlugin, nextPlugin)
        ) {
          runtimeResetPluginIds.add(pluginId);
        }
      }

      this.installedPlugins = nextInstalledPlugins;
      const backendStates = await getPluginStates();
      const preservedStates = Object.fromEntries(
        Object.entries(this.enabled).filter(
          ([pluginId]) => previousById.has(pluginId) && nextById.has(pluginId)
        )
      );
      this.enabled = normalizePluginStates(this.installedPlugins, {
        ...preservedStates,
        ...backendStates
      });
      this.installedPlugins
        .filter(
          (plugin) => plugin.source === 'local' && !this.isEnabled(plugin.id)
        )
        .forEach((plugin) => runtimeResetPluginIds.add(String(plugin.id)));
      runtimeResetPluginIds.forEach((pluginId) =>
        clearRuntimePluginRegistrations(pluginId)
      );
      if (refreshResourceStatus) {
        await this.refreshPluginResourceStatus();
      }
      if (loadRuntimeEntries) {
        await this.loadEnabledPluginEntries();
      }
      logger.info('[PluginStore] reconcile installed plugins complete', {
        reason,
        resetPluginIds: Array.from(runtimeResetPluginIds),
        plugins: this.installedPlugins.map((plugin) => ({
          id: plugin.id,
          source: plugin.source,
          enabled: this.isEnabled(plugin.id),
          hotkeys: plugin.hotkeys,
          packagePath: plugin.packagePath
        }))
      });
    },

    async installFromPath(
      sourcePath: string,
      overwrite = false
    ): Promise<void> {
      logger.info('[PluginStore] install from path start', {
        sourcePath,
        overwrite
      });
      const pluginPackage = await installLocalPluginPackage(
        sourcePath,
        overwrite
      );
      logger.info('[PluginStore] install from path complete', {
        pluginId: pluginPackage.manifest.id,
        packagePath: pluginPackage.packagePath
      });
      await this.reconcileInstalledPlugins('install-path', [
        String(pluginPackage.manifest.id)
      ]);
    },

    async installFromUrl(
      packageUrl: string,
      overwrite = false,
      packageSubdir?: string,
      expectedSizeBytes?: number
    ): Promise<void> {
      logger.info('[PluginStore] install from url start', {
        packageUrl,
        overwrite,
        packageSubdir,
        expectedSizeBytes
      });
      const pluginPackage = await installPluginPackageFromUrl(
        packageUrl,
        overwrite,
        packageSubdir,
        expectedSizeBytes
      );
      logger.info('[PluginStore] install from url complete', {
        pluginId: pluginPackage.manifest.id,
        packagePath: pluginPackage.packagePath,
        packageUrl
      });
      await this.reconcileInstalledPlugins('install-url', [
        String(pluginPackage.manifest.id)
      ]);
    },

    async uninstall(pluginId: PluginId | string): Promise<void> {
      logger.info('[PluginStore] uninstall start', { pluginId });
      await uninstallLocalPluginPackage(pluginId);
      await this.reconcileInstalledPlugins('uninstall', [String(pluginId)]);
      logger.info('[PluginStore] uninstall complete', { pluginId });
    },

    async ensureStateListener(): Promise<void> {
      if (this.stateUnlisten) return;

      try {
        this.stateUnlisten = await listen<PluginStateChangedPayload>(
          'plugin-state-changed',
          async (event) => {
            const { pluginId, enabled } = event.payload;
            if (
              this.installedPlugins.some((plugin) => plugin.id === pluginId) ||
              isPluginId(pluginId)
            ) {
              this.enabled[pluginId] = enabled;
            }
            await this.reconcileInstalledPlugins(
              'backend-state-event',
              enabled ? [] : [pluginId]
            );
          }
        );
      } catch (error) {
        logger.warn('[PluginStore] 监听插件状态变化失败', error);
      }
    },

    async setEnabled(
      pluginId: PluginId | string,
      enabled: boolean
    ): Promise<void> {
      const previousEnabled = this.enabled[pluginId];
      this.enabled[pluginId] = enabled;

      try {
        logger.info('[PluginStore] set enabled start', { pluginId, enabled });
        if (!enabled) {
          clearRuntimePluginRegistrations(String(pluginId));
          this.runtimeRevision += 1;
        }
        await setPluginEnabled(pluginId, enabled);
        await this.reconcileInstalledPlugins(
          'set-enabled',
          enabled ? [] : [String(pluginId)]
        );
        logger.info('[PluginStore] set enabled complete', {
          pluginId,
          enabled
        });
      } catch (error) {
        if (typeof previousEnabled === 'boolean') {
          this.enabled[pluginId] = previousEnabled;
        } else {
          delete this.enabled[pluginId];
        }
        if (previousEnabled) {
          await this.loadEnabledPluginEntries();
        }
        logger.error('[PluginStore] 保存插件状态失败', {
          pluginId,
          enabled,
          error
        });
        throw error;
      }
    },

    async loadEnabledPluginEntries(): Promise<void> {
      if (pluginRuntimeEntriesPromise) {
        await pluginRuntimeEntriesPromise;
        return;
      }

      pluginRuntimeEntriesPromise = (async () => {
      await ensureLocalPluginFrontendEntries(
        this.installedPlugins,
        (pluginId) => this.isEnabled(pluginId)
      );
      this.runtimeRevision += 1;
      })();

      try {
        await pluginRuntimeEntriesPromise;
      } finally {
        pluginRuntimeEntriesPromise = null;
      }
    },

    loadEnabledPluginEntriesInBackground(): void {
      void this.loadEnabledPluginEntries().catch((error) => {
        logger.warn('[PluginStore] 后台加载插件前端入口失败', error);
      });
    },

    shouldInstallMarketplaceItem(item: PluginMarketplaceItem): boolean {
      const installedPlugin = this.installedPlugins.find(
        (plugin) => plugin.id === item.id
      );
      return (
        !installedPlugin ||
        (installedPlugin.source === 'local' &&
          compareVersions(item.version, installedPlugin.manifest.version) > 0)
      );
    },

    async installMarketplaceItemWithDependencies(
      item: PluginMarketplaceItem,
      marketplaceItems: PluginMarketplaceItem[],
      options: {
        isCompatible?: (item: PluginMarketplaceItem) => boolean;
        onInstallingPackage?: (item: PluginMarketplaceItem) => void;
        formatCircularDependencyError?: (item: PluginMarketplaceItem) => string;
        formatMissingDependencyError?: (dependencyId: string) => string;
        formatIncompatibleDependencyError?: (
          item: PluginMarketplaceItem
        ) => string;
      } = {},
      visited = new Set<string>()
    ): Promise<void> {
      if (visited.has(item.id)) {
        throw new Error(
          options.formatCircularDependencyError?.(item) ??
            `Circular plugin dependency: ${item.id}`
        );
      }
      visited.add(item.id);

      try {
        for (const dependencyId of getMarketplaceDependencies(item)) {
          const dependency = marketplaceItems.find(
            (candidate) => candidate.id === dependencyId
          );
          if (!dependency) {
            throw new Error(
              options.formatMissingDependencyError?.(dependencyId) ??
                `Missing plugin dependency: ${dependencyId}`
            );
          }
          if (options.isCompatible && !options.isCompatible(dependency)) {
            const label =
              dependency.name?.fallback ||
              dependency.name?.i18nKey ||
              dependency.id;
            throw new Error(
              options.formatIncompatibleDependencyError?.(dependency) ??
                `Incompatible plugin dependency: ${label}`
            );
          }
          if (this.shouldInstallMarketplaceItem(dependency)) {
            await this.installMarketplaceItemWithDependencies(
              dependency,
              marketplaceItems,
              options,
              visited
            );
          }
        }

        if (item.packageUrl && this.shouldInstallMarketplaceItem(item)) {
          options.onInstallingPackage?.(item);
          logger.info('[PluginStore] marketplace lifecycle install package', {
            pluginId: item.id,
            packageUrl: item.packageUrl,
            packageSubdir: item.packageSubdir,
            dependencies: getMarketplaceDependencies(item)
          });
          await this.installFromUrl(
            item.packageUrl,
            true,
            item.packageSubdir,
            item.sizeBytes
          );
        }
      } finally {
        visited.delete(item.id);
      }
    },

    async refreshPluginResourceStatus(): Promise<void> {
      if (pluginResourceStatusPromise) {
        await pluginResourceStatusPromise;
        return;
      }

      pluginResourceStatusPromise = (async () => {
      const nextStatus: Record<string, PluginResourceStatus | undefined> = {};

      const hasPluginOrResourceFor = (pluginId: string): boolean =>
        this.installedPlugins.some(
          (plugin) => plugin.id === pluginId || plugin.resourceFor === pluginId
        );

      if (hasPluginOrResourceFor('screenshot')) {
        try {
          const status = await getRapidOcrResourceStatus();
          nextStatus[status.pluginId] = status;
        } catch (error) {
          logger.warn('[PluginStore] 获取截图插件资源状态失败', error);
        }
      }

      if (hasPluginOrResourceFor('translation')) {
        const runtimeEntry = 'resources/transformers/transformers.min.js';
        const packageIds = ['translation-offline-runtime', 'translation'];
        let runtimePath: string | null = null;
        let source: string | undefined;

        for (const packageId of packageIds) {
          runtimePath = await getLocalPluginResourcePath(
            packageId,
            runtimeEntry
          );
          if (runtimePath) {
            source = `plugin:${packageId}:${runtimeEntry}`;
            break;
          }
        }

        nextStatus.translation = {
          pluginId: 'translation',
          resourceId: 'offline-transformers-runtime',
          available: Boolean(runtimePath),
          source,
          path: runtimePath ?? undefined,
          searchedPaths: packageIds.map(
            (packageId) => `plugins/${packageId}/${runtimeEntry}`
          )
        };
      }

      if (
        hasPluginOrResourceFor('screen-recorder') &&
        this.isEnabled('screen-recorder')
      ) {
        try {
          const status = await getScreenRecorderFfmpegStatus();
          nextStatus['screen-recorder'] = {
            pluginId: 'screen-recorder',
            resourceId: 'ffmpeg',
            available: status.available,
            source: status.source,
            path: status.path,
            searchedPaths: status.searchedPaths
          };
        } catch (error) {
          logger.warn('[PluginStore] 获取录屏 FFmpeg 资源状态失败', error);
        }
      }

      this.resourceStatusByPluginId = nextStatus;
      })();

      try {
        await pluginResourceStatusPromise;
      } finally {
        pluginResourceStatusPromise = null;
      }
    },

    refreshPluginResourceStatusInBackground(): void {
      void this.refreshPluginResourceStatus().catch((error) => {
        logger.warn('[PluginStore] 后台刷新插件资源状态失败', error);
      });
    }
  },
  persist: {
    pick: ['enabled']
  }
});
