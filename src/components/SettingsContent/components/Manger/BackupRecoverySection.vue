<template>
  <section class="settings-card bg-panel pb-2">
    <div class="border-b border-panel py-3">
      <h4 class="text-sm font-semibold text-panel">
        {{ t('dataManager.backupTitle') }}
      </h4>
      <p class="mt-1 text-xs leading-5 text-content">
        {{ t('dataManager.backupDesc') }}
      </p>
      <p class="mt-1 text-xs leading-5 text-content">
        {{ t('dataManager.backupHint') }}
      </p>
    </div>
    <div class="flex flex-wrap items-center gap-3 py-3">
      <CustomButton
        type="primary"
        size="small"
        :loading="busy"
        :disabled="busy || !workspaceSet"
        @click="emit('export')"
      >
        {{ t('dataManager.exportBackup') }}
      </CustomButton>
      <CustomButton size="small" :disabled="busy" @click="emit('restore')">
        {{ t('dataManager.restoreBackup') }}
      </CustomButton>
    </div>
    <p v-if="!workspaceSet" class="pb-2 text-xs text-content">
      {{ t('dataManager.workspaceNotSet') }}
    </p>
    <LocationRow
      v-if="backupLocation"
      :title="t('dataManager.backupDirectory')"
      :description="t('dataManager.backupDirectoryDesc')"
      :path="backupLocation.root"
      @open="emit('open', backupLocation.root)"
    />
    <template v-if="restoredLocation">
      <LocationRow
        :title="t('dataManager.recoveryDirectory')"
        :description="t('dataManager.recoveryDesc')"
        :path="restoredLocation.root"
        @open="emit('open', restoredLocation.root)"
      />
      <LocationRow
        :title="t('dataManager.recoveryFiles')"
        :description="t('dataManager.recoveryFilesDesc')"
        :path="restoredLocation.recovery"
        @open="emit('open', restoredLocation.recovery)"
      />
      <div class="flex justify-end py-3">
        <CustomButton
          type="primary"
          size="small"
          :disabled="busy"
          @click="emit('activate')"
        >
          {{ t('dataManager.activateRecovery') }}
        </CustomButton>
      </div>
    </template>
  </section>
</template>
<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { CustomButton } from '@/components/UI';
import type { BackupLocation } from '@/api/backup';
import LocationRow from './components/LocationRow.vue';
defineProps<{
  workspaceSet: boolean;
  busy: boolean;
  backupLocation: BackupLocation | null;
  restoredLocation: BackupLocation | null;
}>();
const emit = defineEmits<{
  export: [];
  restore: [];
  activate: [];
  open: [path: string];
}>();
const { t } = useI18n();
</script>
