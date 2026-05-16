<template>
  <div class="settings-panel">
    <div class="panel-header plugins-header">
      <h3 class="panel-title">{{ t('plugins.title') }}</h3>
      <div class="plugins-actions">
        <CustomButton size="small" :loading="installing" @click="handleInstall">
          <FolderOpen theme="outline" size="14" class="button-icon" />
          {{ t('plugins.installLocal') }}
        </CustomButton>
        <CustomButton size="small" plain @click="handleRefresh">
          <Refresh theme="outline" size="14" class="button-icon" />
          {{ t('plugins.refresh') }}
        </CustomButton>
      </div>
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
            <span class="plugin-name">{{ pluginText(plugin.manifest.name) }}</span>
            <span class="plugin-category">{{ t(`plugins.categories.${plugin.category}`) }}</span>
            <span
              class="plugin-source"
              :class="`plugin-source--${plugin.source}`"
            >
              {{ t(`plugins.sources.${plugin.source}`) }}
            </span>
          </div>
          <div class="plugin-description">{{ pluginText(plugin.manifest.description) }}</div>
          <div v-if="plugin.resourceHintKey" class="plugin-resource">
            {{ t(plugin.resourceHintKey) }}
          </div>
          <div v-if="plugin.packagePath" class="plugin-path">{{ plugin.packagePath }}</div>
        </div>
        <div class="plugin-controls">
          <CustomButton
            v-if="plugin.source === 'local'"
            type="danger"
            size="small"
            plain
            :loading="removingPluginId === plugin.id"
            @click="handleUninstall(plugin.id)"
          >
            <Delete theme="outline" size="14" />
          </CustomButton>
          <CustomSwitch
            :model-value="pluginStore.isEnabled(plugin.id)"
            :active-text="t('common.on')"
            :inactive-text="t('common.off')"
            @change="(enabled) => handleToggle(plugin.id, Boolean(enabled))"
          />
        </div>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { open } from '@tauri-apps/plugin-dialog';
import { unregister } from '@tauri-apps/plugin-global-shortcut';
import { Delete, FolderOpen, Refresh } from '@icon-park/vue-next';
import { getPluginById } from '@/plugins/registry';
import type { PluginI18nText, RegisteredPlugin } from '@/plugins/protocol';
import { getHotkeyValue } from '@/plugins/hotkeys';
import type { PluginId } from '@/plugins/types';
import { useConfigurationStore, usePluginStore } from '@/store';
import { CustomButton, CustomSwitch } from '@/components/UI';
import modal from '@/utils/modal';

defineOptions({
  name: 'PluginsSettings'
});

const { t } = useI18n();
const pluginStore = usePluginStore();
const configurationStore = useConfigurationStore();
const plugins = computed(() => pluginStore.plugins);
const installing = ref(false);
const removingPluginId = ref<string | null>(null);

onMounted(() => {
  pluginStore.initialize();
});

const pluginText = (text: PluginI18nText): string => {
  const translated = t(text.i18nKey);
  return translated === text.i18nKey ? text.fallback : translated;
};

const handleRefresh = async () => {
  try {
    await pluginStore.refreshInstalledPlugins();
    modal.msg(t('plugins.refreshed'));
  } catch (error) {
    modal.msg(`${t('plugins.refreshFailed')}: ${error}`, 'error');
  }
};

const handleInstall = async () => {
  const selected = await open({
    directory: true,
    multiple: false,
    title: t('plugins.selectPluginDirectory')
  });
  if (!selected || Array.isArray(selected)) return;

  installing.value = true;
  try {
    await pluginStore.installFromPath(selected);
    modal.msg(t('plugins.installSuccess'));
  } catch (error) {
    modal.msg(`${t('plugins.installFailed')}: ${error}`, 'error');
  } finally {
    installing.value = false;
  }
};

const handleUninstall = async (pluginId: PluginId | string) => {
  removingPluginId.value = String(pluginId);
  try {
    await pluginStore.uninstall(pluginId);
    modal.msg(t('plugins.uninstallSuccess'));
  } catch (error) {
    modal.msg(`${t('plugins.uninstallFailed')}: ${error}`, 'error');
  } finally {
    removingPluginId.value = null;
  }
};

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

.plugins-header {
  @apply flex items-center justify-between gap-3;
}

.plugins-actions {
  @apply flex items-center gap-2;
}

.button-icon {
  @apply mr-1;
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

.plugin-source {
  @apply text-xs rounded px-1.5 py-0.5;

  &--builtin {
    @apply text-blue-600 bg-blue-50 dark:text-blue-300 dark:bg-blue-950;
  }

  &--local {
    @apply text-green-600 bg-green-50 dark:text-green-300 dark:bg-green-950;
  }
}

.plugin-description {
  @apply text-panel-text-secondary text-xs leading-5;
}

.plugin-resource {
  @apply mt-1 text-xs text-amber-600 dark:text-amber-400 leading-5;
}

.plugin-path {
  @apply mt-1 text-xs text-panel-text-secondary truncate;
}

.plugin-controls {
  @apply flex items-center gap-2 shrink-0;
}
</style>
