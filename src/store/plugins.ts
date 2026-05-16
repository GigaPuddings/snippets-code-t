import { defineStore } from 'pinia';
import { listen, type UnlistenFn } from '@tauri-apps/api/event';
import {
  getInstalledPluginManifests,
  getLocalPluginResourcePath,
  getPluginStates,
  getRapidOcrResourceStatus,
  installLocalPluginPackage,
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
import { clearRuntimePluginRegistrations, ensureLocalPluginFrontendEntries } from '@/plugins/runtime';
import type { RegisteredPlugin } from '@/plugins/protocol';
import type { PluginId, PluginStateMap } from '@/plugins/types';
import { logger } from '@/utils/logger';

interface PluginStateChangedPayload {
  pluginId: string;
  enabled: boolean;
}

const normalizePluginStates = (
  plugins: RegisteredPlugin[],
  states?: Partial<Record<string, boolean>>
): PluginStateMap => {
  const normalized = plugins.reduce((pluginStates, plugin) => {
    pluginStates[plugin.id] = plugin.enabledByDefault;
    return pluginStates;
  }, { ...DEFAULT_PLUGIN_STATES } as PluginStateMap);

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
    isEnabled: (state) => (id: PluginId | string): boolean => (
      state.installedPlugins.some((plugin) => plugin.id === id)
        ? state.enabled[id] ?? true
        : (isPluginId(id) ? state.enabled[id] ?? DEFAULT_PLUGIN_STATES[id] : false)
    )
  },
  actions: {
    async initialize(): Promise<void> {
      if (this.initialized) {
        await this.refreshInstalledPlugins();
        await this.ensureStateListener();
        return;
      }

      try {
        const localManifests = await getInstalledPluginManifests();
        this.installedPlugins = loadPluginRegistry(localManifests);
        const backendStates = await getPluginStates();
        this.enabled = normalizePluginStates(this.installedPlugins, {
          ...this.enabled,
          ...backendStates
        });
        await this.refreshPluginResourceStatus();
        await this.loadEnabledPluginEntries();
      } catch (error) {
        logger.warn('[PluginStore] 加载插件状态失败，使用默认状态', error);
        this.installedPlugins = INSTALLED_PLUGINS;
        this.enabled = normalizePluginStates(this.installedPlugins, this.enabled);
      } finally {
        this.initialized = true;
        await this.ensureStateListener();
      }
    },

    async refreshInstalledPlugins(): Promise<void> {
      const previousLocalIds = this.installedPlugins
        .filter((plugin) => plugin.source === 'local')
        .map((plugin) => String(plugin.id));
      const localManifests = await getInstalledPluginManifests();
      const nextInstalledPlugins = loadPluginRegistry(localManifests);
      const nextLocalIds = new Set(
        nextInstalledPlugins
          .filter((plugin) => plugin.source === 'local')
          .map((plugin) => String(plugin.id))
      );

      previousLocalIds
        .filter((pluginId) => !nextLocalIds.has(pluginId))
        .forEach((pluginId) => clearRuntimePluginRegistrations(pluginId));

      this.installedPlugins = nextInstalledPlugins;
      this.enabled = normalizePluginStates(this.installedPlugins, this.enabled);
      await this.refreshPluginResourceStatus();
      await this.loadEnabledPluginEntries();
    },

    async installFromPath(sourcePath: string, overwrite = false): Promise<void> {
      const pluginPackage = await installLocalPluginPackage(sourcePath, overwrite);
      clearRuntimePluginRegistrations(String(pluginPackage.manifest.id));
      await this.refreshInstalledPlugins();
    },

    async uninstall(pluginId: PluginId | string): Promise<void> {
      await uninstallLocalPluginPackage(pluginId);
      clearRuntimePluginRegistrations(String(pluginId));
      await this.refreshInstalledPlugins();
    },

    async ensureStateListener(): Promise<void> {
      if (this.stateUnlisten) return;

      try {
        this.stateUnlisten = await listen<PluginStateChangedPayload>(
          'plugin-state-changed',
          (event) => {
            const { pluginId, enabled } = event.payload;
            if (this.installedPlugins.some((plugin) => plugin.id === pluginId) || isPluginId(pluginId)) {
              this.enabled[pluginId] = enabled;
            }
          }
        );
      } catch (error) {
        logger.warn('[PluginStore] 监听插件状态变化失败', error);
      }
    },

    async setEnabled(pluginId: PluginId | string, enabled: boolean): Promise<void> {
      this.enabled[pluginId] = enabled;

      try {
        await setPluginEnabled(pluginId, enabled);
        if (enabled) {
          await this.loadEnabledPluginEntries();
        }
      } catch (error) {
        logger.error('[PluginStore] 保存插件状态失败', { pluginId, enabled, error });
        throw error;
      }
    },

    async loadEnabledPluginEntries(): Promise<void> {
      await ensureLocalPluginFrontendEntries(
        this.installedPlugins,
        (pluginId) => this.isEnabled(pluginId)
      );
      this.runtimeRevision += 1;
    },

    async refreshPluginResourceStatus(): Promise<void> {
      const nextStatus: Record<string, PluginResourceStatus | undefined> = {};

      if (this.installedPlugins.some((plugin) => plugin.id === 'screenshot')) {
        try {
          const status = await getRapidOcrResourceStatus();
          nextStatus[status.pluginId] = status;
        } catch (error) {
          logger.warn('[PluginStore] 获取截图插件资源状态失败', error);
        }
      }

      if (this.installedPlugins.some((plugin) => plugin.id === 'translation')) {
        const runtimeEntry = 'resources/transformers/transformers.min.js';
        const packageIds = ['translation-offline-runtime', 'translation'];
        let runtimePath: string | null = null;
        let source: string | undefined;

        for (const packageId of packageIds) {
          runtimePath = await getLocalPluginResourcePath(packageId, runtimeEntry);
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
          searchedPaths: packageIds.map((packageId) => `plugins/${packageId}/${runtimeEntry}`)
        };
      }

      this.resourceStatusByPluginId = nextStatus;
    }
  },
  persist: {
    pick: ['enabled']
  }
});
