<template>
  <div class="settings-panel">
    <h3 class="panel-title">{{ $t('dataManager.title') }}</h3>
    <main class="summarize-container">
    <section class="summarize-section transparent-input">
      <div class="summarize-label">
        <div class="summarize-label-title">{{ $t('dataManager.snippetDir') }}</div>
        <div class="summarize-label-desc">{{ $t('dataManager.snippetDirDesc') }}</div>
      </div>
      <div class="summarize-input-wrapper">
        <el-input
          class="summarize-input !w-80"
          v-model="store.dbPath"
          readonly
        />
        <CustomButton
          type="primary"
          size="small"
          @click="selectCustomPath"
          :loading="pathLoading"
        >
          {{ $t('dataManager.changePath') }}
        </CustomButton>
      </div>
    </section>

    <section class="summarize-section transparent-input">
      <div class="summarize-label">
        <div class="summarize-label-title">{{ $t('dataManager.backup') }}</div>
        <div class="summarize-label-desc">{{ $t('dataManager.backupDesc') }}</div>
      </div>
      <div class="summarize-input-wrapper">
        <el-select
          class="summarize-input !w-36"
          v-model="store.dbBackup"
          :placeholder="$t('dataManager.selectFormat')"
        >
          <el-option
            v-for="item in dictDBBackup"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
        <CustomButton
          type="primary"
          size="small"
          @click="startBackup"
          :loading="backupLoading"
        >
          {{ $t('dataManager.backupBtn') }}
        </CustomButton>
      </div>
    </section>

    <section class="summarize-section transparent-input">
      <div class="summarize-label">
        <div class="summarize-label-title">{{ $t('dataManager.restore') }}</div>
        <div class="summarize-label-desc">{{ $t('dataManager.restoreDesc') }}</div>
      </div>
      <div class="summarize-input-wrapper">
        <CustomButton
          type="primary"
          size="small"
          @click="showRestoreDialog = true"
          :loading="restoreLoading"
        >
          {{ $t('dataManager.restoreBtn') }}
        </CustomButton>
      </div>
    </section>
  </main>

  <!-- 恢复数据确认对话框 -->
  <ConfirmDialog
    v-model="showRestoreDialog"
    :title="$t('dataManager.warning')"
    :confirm-text="$t('common.confirm')"
    :cancel-text="$t('common.cancel')"
    type="warning"
    @confirm="handleRestoreConfirm"
    @cancel="restoreLoading = false"
  >
    <div>{{ $t('dataManager.restoreWarning') }}</div>
  </ConfirmDialog>

  <!-- 更改路径确认对话框 -->
  <ConfirmDialog
    v-model="showPathDialog"
    :title="$t('dataManager.warning')"
    :confirm-text="$t('common.confirm')"
    :cancel-text="$t('common.cancel')"
    type="warning"
    @confirm="handlePathConfirm"
    @cancel="pathLoading = false"
  >
    <div>{{ $t('dataManager.pathWarning') }}</div>
  </ConfirmDialog>
  </div>
</template>

<script setup lang="ts">
import { useConfigurationStore } from '@/store';
import { useI18n } from 'vue-i18n';
import { invoke } from '@tauri-apps/api/core';
import modal from '@/utils/modal';
import { CustomButton, ConfirmDialog } from '@/components/UI';

defineOptions({
  name: 'Manger'
});

const { t } = useI18n();
const store = useConfigurationStore();
const backupLoading = ref(false);
const restoreLoading = ref(false);
const pathLoading = ref(false);
const showRestoreDialog = ref(false);
const showPathDialog = ref(false);

const dictDBBackup = computed(() => [
  { value: 'A', label: t('dataManager.backupFormat.date') },
  { value: 'B', label: t('dataManager.backupFormat.time') },
  { value: 'C', label: t('dataManager.backupFormat.datetime') }
]);

// 备份数据
const startBackup = async () => {
  if (!store.dbBackup) {
    modal.msg(t('dataManager.selectFormat'), 'warning');
    return;
  }

  backupLoading.value = true;
  try {
    await invoke('backup_database', { format: store.dbBackup });
    modal.msg(t('dataManager.backupSuccess'));
  } catch (error: any) {
    if (error !== 'Backup cancelled') {
      modal.msg(`${t('dataManager.backupFailed')}: ${error}`, 'error');
    }
  } finally {
    backupLoading.value = false;
  }
};
// 恢复数据
const handleRestoreConfirm = async () => {
  restoreLoading.value = true;
  try {
    await invoke('restore_database');
    modal.msg(t('dataManager.restoreSuccess'));
    showRestoreDialog.value = false;
  } catch (error) {
    console.error('Restore failed:', error);
    modal.msg(`${t('dataManager.restoreFailed')}: ${error}`, 'error');
  } finally {
    restoreLoading.value = false;
  }
};

// 选择数据库路径
const selectCustomPath = () => {
  pathLoading.value = true;
  showPathDialog.value = true;
};

const handlePathConfirm = async () => {
  try {
    const newPath = await invoke('set_custom_db_path');
    store.dbPath = newPath as string;
    modal.msg(t('dataManager.pathSuccess'));
    showPathDialog.value = false;
  } catch (error) {
    console.error('Path change failed:', error);
    modal.msg(`${t('dataManager.pathFailed')}: ${error}`, 'error');
  } finally {
    pathLoading.value = false;
  }
};
</script>

<style scoped lang="scss">
.settings-panel {
  @apply flex flex-col;
}

.panel-title {
  @apply text-base font-bold mb-4 pb-2 border-b border-panel;
}
</style>
