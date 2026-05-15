import { defineStore } from 'pinia';
import { getPluginStates, setPluginEnabled } from '@/api/plugins';
import {
  BUILTIN_PLUGINS,
  DEFAULT_PLUGIN_STATES,
  isPluginId
} from '@/plugins/registry';
import type { PluginId, PluginStateMap } from '@/plugins/types';
import { logger } from '@/utils/logger';

const normalizePluginStates = (states?: Partial<Record<string, boolean>>): PluginStateMap => {
  const normalized = { ...DEFAULT_PLUGIN_STATES };

  if (!states) {
    return normalized;
  }

  for (const plugin of BUILTIN_PLUGINS) {
    const value = states[plugin.id];
    if (typeof value === 'boolean') {
      normalized[plugin.id] = value;
    }
  }

  return normalized;
};

export const usePluginStore = defineStore('plugins', {
  state: (): { enabled: PluginStateMap; initialized: boolean } => ({
    enabled: { ...DEFAULT_PLUGIN_STATES },
    initialized: false
  }),
  getters: {
    isEnabled: (state) => (id: PluginId | string): boolean => (
      isPluginId(id) ? state.enabled[id] ?? DEFAULT_PLUGIN_STATES[id] : true
    )
  },
  actions: {
    async initialize(): Promise<void> {
      if (this.initialized) return;

      try {
        const backendStates = await getPluginStates();
        this.enabled = normalizePluginStates({
          ...this.enabled,
          ...backendStates
        });
      } catch (error) {
        logger.warn('[PluginStore] 加载插件状态失败，使用默认状态', error);
        this.enabled = normalizePluginStates(this.enabled);
      } finally {
        this.initialized = true;
      }
    },

    async setEnabled(pluginId: PluginId, enabled: boolean): Promise<void> {
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
