<template>
  <div class="settings-panel">
    <!-- 固定标题 -->
    <div class="panel-header">
      <h3 class="panel-title">{{ $t('dataManager.title') }}</h3>
    </div>
    
    <!-- 可滚动内容 -->
    <main class="panel-content">
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

    <!-- Markdown 迁移：数据库 → 文件 -->
    <section class="summarize-section transparent-input">
      <div class="summarize-label">
        <div class="summarize-label-title">{{ $t('dataManager.migration') }}</div>
        <div class="summarize-label-desc">{{ $t('dataManager.migrationDesc') }}</div>
      </div>
      <div class="summarize-input-wrapper flex flex-wrap gap-2">
        <CustomButton
          type="primary"
          size="small"
          @click="showMigrationDialog = true"
          :loading="migrating"
        >
          {{ $t('dataManager.migrationBtn') }}
        </CustomButton>
        <CustomButton
          type="default"
          size="small"
          @click="startMigrationFromFile"
          :loading="migrating"
        >
          {{ $t('dataManager.migrationFromFileBtn') }}
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

  <!-- 迁移确认对话框 -->
  <ConfirmDialog
    v-model="showMigrationDialog"
    :title="$t('dataManager.migrationConfirm')"
    :confirm-text="$t('common.confirm')"
    :cancel-text="$t('common.cancel')"
    type="info"
    @confirm="startMigration"
    @cancel="migrating = false"
  >
    <div class="migration-confirm-content">
      <p>{{ $t('dataManager.migrationInfo') }}</p>
      <ul class="migration-list">
        <li>{{ $t('dataManager.migrationStep1') }}</li>
        <li>{{ $t('dataManager.migrationStep2') }}</li>
        <li>{{ $t('dataManager.migrationStep3') }}</li>
        <li>{{ $t('dataManager.migrationStep4') }}</li>
        <li>{{ $t('dataManager.migrationStep5') }}</li>
      </ul>
      <p class="migration-warning">{{ $t('dataManager.migrationWarning') }}</p>
    </div>
  </ConfirmDialog>

  <!-- 迁移进度对话框 -->
  <el-dialog
    v-model="showProgressDialog"
    :title="$t('dataManager.migrating')"
    width="500px"
    :close-on-click-modal="false"
    :close-on-press-escape="false"
    :show-close="false"
  >
    <div class="migration-progress">
      <div class="progress-step">{{ progressStep }}</div>
      <el-progress 
        :percentage="progressPercentage" 
        :status="progressStatus"
      />
      <div class="progress-detail">
        {{ progressCurrent }} / {{ progressTotal }}
      </div>
    </div>
  </el-dialog>

  <!-- 迁移结果对话框 -->
  <el-dialog
    v-model="showResultDialog"
    :title="$t('dataManager.migrationComplete')"
    width="600px"
    :align-center="true"
    :append-to-body="true"
  >
    <div class="migration-result">
      <div class="result-summary">
        <div class="result-item">
          <span class="label">{{ $t('dataManager.totalCategories') }}:</span>
          <span class="value">{{ migrationResult.totalCategories }}</span>
        </div>
        <div class="result-item">
          <span class="label">{{ $t('dataManager.totalFragments') }}:</span>
          <span class="value">{{ migrationResult.totalFragments }}</span>
        </div>
        <div class="result-item success">
          <span class="label">{{ $t('dataManager.createdFolders') }}:</span>
          <span class="value">{{ migrationResult.createdFolders }}</span>
        </div>
        <div class="result-item success">
          <span class="label">{{ $t('dataManager.createdFiles') }}:</span>
          <span class="value">{{ migrationResult.createdFiles }}</span>
        </div>
        <div v-if="migrationResult.failedFiles.length > 0" class="result-item error">
          <span class="label">{{ $t('dataManager.failedFiles') }}:</span>
          <span class="value">{{ migrationResult.failedFiles.length }}</span>
        </div>
      </div>
      
      <div class="result-path">
        <span class="label">{{ $t('dataManager.outputPath') }}:</span>
        <span class="value">{{ migrationResult.outputPath }}</span>
      </div>
      
      <div v-if="migrationResult.failedFiles.length > 0" class="failed-files">
        <h4>{{ $t('dataManager.failedFilesList') }}:</h4>
        <ul>
          <li v-for="(file, index) in migrationResult.failedFiles" :key="index">
            {{ file }}
          </li>
        </ul>
      </div>
      
      <div class="next-steps">
        <h4>{{ $t('dataManager.nextSteps') }}:</h4>
        <ul>
          <li>{{ $t('dataManager.nextStep1') }}</li>
          <li>{{ $t('dataManager.nextStep2') }}</li>
          <li>{{ $t('dataManager.nextStep3') }}</li>
          <li>{{ $t('dataManager.nextStep4') }}</li>
        </ul>
      </div>
    </div>
    
    <template #footer>
      <CustomButton type="primary" @click="showResultDialog = false">
        {{ $t('common.close') }}
      </CustomButton>
    </template>
  </el-dialog>
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

// 迁移相关状态
const migrating = ref(false);
const showMigrationDialog = ref(false);
const showProgressDialog = ref(false);
const showResultDialog = ref(false);

// 进度信息
const progressStep = ref('');
const progressPercentage = ref(0);
const progressStatus = ref<'success' | 'exception' | 'warning' | undefined>(undefined);
const progressCurrent = ref(0);
const progressTotal = ref(0);

// 迁移结果
const migrationResult = ref({
  totalCategories: 0,
  totalFragments: 0,
  createdFolders: 0,
  createdFiles: 0,
  failedFiles: [] as string[],
  outputPath: ''
});

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

// 开始迁移
const startMigration = async () => {
  showMigrationDialog.value = false;
  showProgressDialog.value = true;
  migrating.value = true;
  
  progressStep.value = t('dataManager.migratingData');
  progressPercentage.value = 0;
  progressStatus.value = undefined;
  
  try {
    // 调用后端迁移命令
    const result = await invoke<any>('migrate_to_markdown_command');
    
    // 更新进度
    progressPercentage.value = 100;
    progressStatus.value = 'success';
    
    // 显示结果
    migrationResult.value = {
      totalCategories: result.total_categories,
      totalFragments: result.total_fragments,
      createdFolders: result.created_folders,
      createdFiles: result.created_files,
      failedFiles: result.failed_files,
      outputPath: result.output_path
    };
    
    // 关闭进度对话框，显示结果对话框
    setTimeout(() => {
      showProgressDialog.value = false;
      showResultDialog.value = true;
    }, 500);
    
  } catch (error: any) {
    progressStatus.value = 'exception';
    modal.msg(`${t('dataManager.migrationFailed')}: ${error}`, 'error');
    showProgressDialog.value = false;
  } finally {
    migrating.value = false;
  }
};

// 从选择的数据库文件迁移
const startMigrationFromFile = async () => {
  showProgressDialog.value = true;
  migrating.value = true;
  progressStep.value = t('dataManager.migratingData');
  progressPercentage.value = 0;
  progressStatus.value = undefined;

  try {
    const result = await invoke<any>('migrate_to_markdown_from_file_command');
    progressPercentage.value = 100;
    progressStatus.value = 'success';
    migrationResult.value = {
      totalCategories: result.total_categories,
      totalFragments: result.total_fragments,
      createdFolders: result.created_folders,
      createdFiles: result.created_files,
      failedFiles: result.failed_files,
      outputPath: result.output_path
    };
    setTimeout(() => {
      showProgressDialog.value = false;
      showResultDialog.value = true;
    }, 500);
  } catch (error: any) {
    progressStatus.value = 'exception';
    modal.msg(`${error || t('dataManager.migrationFailed')}`, 'error');
    showProgressDialog.value = false;
  } finally {
    migrating.value = false;
  }
};
</script>

<style scoped lang="scss">
.migration-confirm-content {
  @apply space-y-3;
  
  .migration-list {
    @apply list-disc list-inside space-y-1 text-sm;
  }
  
  .migration-warning {
    @apply text-orange-500 font-semibold text-sm;
  }
}

.migration-progress {
  @apply text-center;
  
  .progress-step {
    @apply mb-4 text-lg;
  }
  
  .progress-detail {
    @apply mt-2 text-sm text-gray-500;
  }
}


.migration-result {
  @apply max-h-[60vh] overflow-y-auto;
  
  .result-summary {
    @apply mb-3 space-y-2;
    
    .result-item {
      @apply flex justify-between p-2 rounded;
      
      &.success {
        @apply bg-green-50 dark:bg-green-900/20;
      }
      
      &.error {
        @apply bg-red-50 dark:bg-red-900/20;
      }
      
      .label {
        @apply text-sm text-gray-600 dark:text-gray-400;
      }
      
      .value {
        @apply text-sm font-semibold;
      }
    }
  }
  
  .result-path {
    @apply mb-4 p-3 bg-gray-50 dark:bg-gray-800 rounded;
    
    .label {
      @apply text-sm text-gray-600 dark:text-gray-400 mr-2;
    }
    
    .value {
      @apply font-mono text-sm break-all;
    }
  }
  
  .failed-files {
    @apply mb-4 p-3 bg-red-50 dark:bg-red-900/20 rounded;
    
    h4 {
      @apply text-sm font-semibold mb-2;
    }
    
    ul {
      @apply list-disc list-inside space-y-1;
      
      li {
        @apply text-sm;
      }
    }
  }
  
  .next-steps {
    @apply p-3 bg-blue-50 dark:bg-blue-900/20 rounded;
    
    h4 {
      @apply text-sm font-semibold mb-2;
    }
    
    ul {
      @apply list-disc list-inside space-y-1;
      
      li {
        @apply text-sm;
      }
    }
  }
}
</style>
