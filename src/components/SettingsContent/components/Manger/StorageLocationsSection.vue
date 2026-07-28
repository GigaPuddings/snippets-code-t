<template>
  <section class="rounded-lg border border-panel bg-panel px-4 pb-2">
    <div class="border-b border-panel py-3">
      <h4 class="text-sm font-semibold text-panel">
        {{ t('dataManager.locationsTitle') }}
      </h4>
      <p class="mt-1 text-xs leading-5 text-content">
        {{ t('dataManager.locationsDesc') }}
      </p>
    </div>

    <LocationRow
      :title="t('dataManager.workspaceDir')"
      :description="t('dataManager.workspaceDirDesc')"
      :path="workspaceRoot"
      :placeholder="t('dataManager.workspaceNotSet')"
      :action-label="t('dataManager.changeWorkspace')"
      :loading="workspaceLoading"
      @action="emit('selectWorkspace')"
      @open="emit('openDirectory', workspaceRoot)"
    />
    <LocationRow
      :title="t('dataManager.snippetDir')"
      :description="t('dataManager.snippetDirDesc')"
      :path="dataRoot"
      :action-label="t('dataManager.changePath')"
      :loading="pathLoading"
      @action="emit('selectDataRoot')"
      @open="emit('openDirectory', dataRoot)"
    />
    <LocationRow
      :title="t('dataManager.pluginDir')"
      :description="t('dataManager.pluginDirDesc')"
      :path="pluginDir"
      @open="emit('openDirectory', pluginDir)"
    />
    <LocationRow
      :title="t('dataManager.logDir')"
      :description="t('dataManager.logDirDesc')"
      :path="logDir"
      @open="emit('openDirectory', logDir)"
    />
  </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import LocationRow from './components/LocationRow.vue';

defineProps<{
  workspaceRoot: string;
  dataRoot: string;
  pluginDir: string;
  logDir: string;
  workspaceLoading: boolean;
  pathLoading: boolean;
}>();

const emit = defineEmits<{
  selectWorkspace: [];
  selectDataRoot: [];
  openDirectory: [path: string];
}>();

const { t } = useI18n();
</script>
