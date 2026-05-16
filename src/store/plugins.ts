import { defineStore } from 'pinia';
import { listen, type UnlistenFn } from '@tauri-apps/api/event';
import { getInstalledPluginManifests, getPluginStates, setPluginEnabled } from '@/api/plugins';
import {
  DEFAULT_PLUGIN_STATES,
  INSTALLED_PLUGINS,
  isPluginId
} from '@/plugins/registry';
import { loadPluginRegistry } from '@/plugins/loader';
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
    stateUnlisten: UnlistenFn | null;
  } => ({
    enabled: { ...DEFAULT_PLUGIN_STATES },
    installedPlugins: INSTALLED_PLUGINS,
    initialized: false,
    stateUnlisten: null
  }),
  getters: {
    plugins: (state): RegisteredPlugin[] => state.installedPlugins,
    isEnabled: (state) => (id: PluginId | string): boolean => (
      state.installedPlugins.some((plugin) => plugin.id === id)
        ? state.enabled[id] ?? true
        : (isPluginId(id) ? state.enabled[id] ?? DEFAULT_PLUGIN_STATES[id] : true)
    )
  },
  actions: {
    async initialize(): Promise<void> {
      if (this.initialized) {
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
      } catch (error) {
        logger.warn('[PluginStore] 加载插件状态失败，使用默认状态', error);
        this.installedPlugins = INSTALLED_PLUGINS;
        this.enabled = normalizePluginStates(this.installedPlugins, this.enabled);
      } finally {
        this.initialized = true;
        await this.ensureStateListener();
      }
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
      } catch (error) {
        logger.error('[PluginStore] 保存插件状态失败', { pluginId, enabled, error });
        throw error;
      }
    }
  },
  persist: {
    pick: ['enabled']
  }
});
