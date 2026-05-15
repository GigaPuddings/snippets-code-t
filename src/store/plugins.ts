import { defineStore } from 'pinia';
import { listen, type UnlistenFn } from '@tauri-apps/api/event';
import { getPluginStates, setPluginEnabled } from '@/api/plugins';
import {
  BUILTIN_PLUGINS,
  DEFAULT_PLUGIN_STATES,
  isPluginId
} from '@/plugins/registry';
import type { PluginId, PluginStateMap } from '@/plugins/types';
import { logger } from '@/utils/logger';

interface PluginStateChangedPayload {
  pluginId: string;
  enabled: boolean;
}

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
  state: (): { enabled: PluginStateMap; initialized: boolean; stateUnlisten: UnlistenFn | null } => ({
    enabled: { ...DEFAULT_PLUGIN_STATES },
    initialized: false,
    stateUnlisten: null
  }),
  getters: {
    isEnabled: (state) => (id: PluginId | string): boolean => (
      isPluginId(id) ? state.enabled[id] ?? DEFAULT_PLUGIN_STATES[id] : true
    )
  },
  actions: {
    async initialize(): Promise<void> {
      if (this.initialized) {
        await this.ensureStateListener();
        return;
      }

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
            if (isPluginId(pluginId)) {
              this.enabled[pluginId] = enabled;
            }
          }
        );
      } catch (error) {
        logger.warn('[PluginStore] 监听插件状态变化失败', error);
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
