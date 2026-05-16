<template>
  <div class="settings-panel">
    <div class="panel-header">
      <h3 class="panel-title">{{ t('plugins.title') }}</h3>
    </div>

    <main class="panel-content">
      <section class="plugins-intro">
        <div class="plugins-intro-title">{{ t('plugins.builtinTitle') }}</div>
        <div class="plugins-intro-desc">{{ t('plugins.builtinDesc') }}</div>
      </section>

      <section
        v-for="plugin in plugins"
        :key="plugin.id"
        class="plugin-row"
      >
        <div class="plugin-main">
          <div class="plugin-title-row">
            <span class="plugin-name">{{ t(plugin.nameKey) }}</span>
            <span class="plugin-category">{{ t(`plugins.categories.${plugin.category}`) }}</span>
          </div>
          <div class="plugin-description">{{ t(plugin.descriptionKey) }}</div>
          <div v-if="plugin.resourceHintKey" class="plugin-resource">
            {{ t(plugin.resourceHintKey) }}
          </div>
        </div>
        <CustomSwitch
          :model-value="pluginStore.isEnabled(plugin.id)"
          :active-text="t('common.on')"
          :inactive-text="t('common.off')"
          @change="(enabled) => handleToggle(plugin.id, Boolean(enabled))"
        />
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { unregister } from '@tauri-apps/plugin-global-shortcut';
import { getPluginById } from '@/plugins/registry';
import type { RegisteredPlugin } from '@/plugins/protocol';
import { getHotkeyValue } from '@/plugins/hotkeys';
import type { PluginId } from '@/plugins/types';
import { useConfigurationStore, usePluginStore } from '@/store';
import { CustomSwitch } from '@/components/UI';
import modal from '@/utils/modal';

defineOptions({
  name: 'PluginsSettings'
});

const { t } = useI18n();
const pluginStore = usePluginStore();
const configurationStore = useConfigurationStore();
const plugins = computed(() => pluginStore.plugins);

onMounted(() => {
  pluginStore.initialize();
});

const handleToggle = async (pluginId: PluginId | string, enabled: boolean) => {
  try {
    await pluginStore.setEnabled(pluginId, enabled);
    if (!enabled) {
      await unregisterPluginHotkeys(pluginId);
    }
    modal.msg(enabled ? t('plugins.enabled') : t('plugins.disabled'));
  } catch (error) {
    modal.msg(`${t('plugins.saveFailed')}: ${error}`, 'error');
  }
};

const unregisterPluginHotkeys = async (pluginId: PluginId | string): Promise<void> => {
  const plugin = getPluginById(pluginId as PluginId)
    ?? pluginStore.plugins.find((item: RegisteredPlugin) => item.id === pluginId);
  if (!plugin?.hotkeys?.length) return;

  await Promise.all(
    plugin.hotkeys
      .map((hotkeyName) => getHotkeyValue(configurationStore, hotkeyName))
      .filter(Boolean)
      .map((shortcut) => unregister(shortcut).catch(() => undefined))
  );
};
</script>

<style scoped lang="scss">
.plugins-intro {
  @apply mb-4 pb-4 border-b border-panel;
}

.plugins-intro-title {
  @apply text-panel font-medium text-sm mb-1;
}

.plugins-intro-desc {
  @apply text-panel-text-secondary text-xs leading-5;
}

.plugin-row {
  @apply flex items-center justify-between gap-4 py-3 border-b border-panel last:border-b-0;
}

.plugin-main {
  @apply min-w-0 flex-1;
}

.plugin-title-row {
  @apply flex items-center gap-2 mb-1;
}

.plugin-name {
  @apply text-panel font-medium text-sm;
}

.plugin-category {
  @apply text-xs text-panel-text-secondary bg-hover rounded px-1.5 py-0.5;
}

.plugin-description {
  @apply text-panel-text-secondary text-xs leading-5;
}

.plugin-resource {
  @apply mt-1 text-xs text-amber-600 dark:text-amber-400 leading-5;
}
</style>
