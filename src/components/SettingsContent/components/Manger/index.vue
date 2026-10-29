<template>
  <div class="settings-panel">
    <div class="panel-header">
      <h3 class="panel-title">{{ $t('dataManager.title') }}</h3>
    </div>

    <main class="panel-content flex flex-col gap-6">
      <StorageLocationsSection
        :workspace-root="workspaceRoot"
        :data-root="dataRoot"
        :plugin-dir="pluginDir"
        :log-dir="logDir"
        :workspace-loading="workspaceLoading"
        :path-loading="pathLoading"
        @select-workspace="selectWorkspaceRoot"
        @select-data-root="selectCustomPath"
        @open-directory="openDataDirectory"
      />
      <IndexMaintenanceSection
        :workspace-set="Boolean(workspaceRoot)"
        :local-index-loading="localIndexLoading"
        :markdown-index-loading="markdownIndexLoading"
        :background-index-tasks="backgroundIndexTasks"
        :background-index-busy="backgroundIndexBusy"
        @manage-local="showIndexDialog = true"
        @rebuild-markdown="handleMarkdownIndexRebuild"
      />
      <BackupRecoverySection
        :workspace-set="Boolean(workspaceRoot)"
        :busy="backupBusy"
        :backup-location="backupLocation"
        :restored-location="restoredLocation"
        @export="exportBackup"
        @restore="restoreBackup"
        @activate="showActivateDialog = true"
        @open="openDataDirectory"
      />
      <HistoryCacheSection
        :history-loading="historyLoading"
        :icon-cache-loading="iconCacheLoading"
        :background-index-busy="backgroundIndexBusy"
        :wallpaper-cache-available="wallpaperCacheAvailable"
        :wallpaper-cache-loading="wallpaperCacheLoading"
        :wallpaper-cache-opening="wallpaperCacheOpening"
        :wallpaper-cache-size-label="wallpaperCacheSizeLabel"
        @clear-history="showHistoryDialog = true"
        @clear-icon-cache="showIconCacheDialog = true"
        @clear-wallpaper-cache="showWallpaperCacheDialog = true"
        @open-wallpaper-cache="handleOpenWallpaperCache"
      />
    </main>

    <ConfirmDialog
      v-model="showActivateDialog"
      :title="$t('dataManager.activateRecovery')"
      :confirm-text="$t('dataManager.activateRecovery')"
      :cancel-text="$t('common.cancel')"
      :loading="backupBusy"
      type="warning"
      @confirm="activateRecovery"
    >
      <p>{{ $t('dataManager.activateRecoveryConfirm') }}</p>
      <p class="mt-2 break-all text-xs text-content">
        {{ restoredLocation?.root }}
      </p>
    </ConfirmDialog>

    <SelectConfirmDialog
      v-model="showIndexDialog"
      :title="$t('dataManager.localIndex')"
      :message="$t('dataManager.localIndexSelect')"
      :options="indexOptions"
      default-value="all"
      :confirm-text="$t('common.confirm')"
      :cancel-text="$t('common.cancel')"
      :loading="localIndexLoading"
      @confirm="handleIndexConfirm"
      @cancel="localIndexLoading = false"
    />

    <SelectConfirmDialog
      v-model="showHistoryDialog"
      :title="$t('dataManager.searchHistory')"
      :message="$t('dataManager.searchHistorySelect')"
      :options="historyOptions"
      default-value="all"
      :confirm-text="$t('common.confirm')"
      :cancel-text="$t('common.cancel')"
      :loading="historyLoading"
      @confirm="handleHistoryConfirm"
      @cancel="historyLoading = false"
    />

    <ConfirmDialog
      v-model="showIconCacheDialog"
      :title="$t('dataManager.iconCache')"
      :confirm-text="$t('common.confirm')"
      :cancel-text="$t('common.cancel')"
      :loading="iconCacheLoading"
      @confirm="handleIconCacheConfirm"
      @cancel="iconCacheLoading = false"
    >
      <div>{{ $t('dataManager.iconCacheConfirm') }}</div>
    </ConfirmDialog>

    <ConfirmDialog
      v-model="showWallpaperCacheDialog"
      :title="$t('dataManager.wallpaperCache')"
      :confirm-text="$t('common.confirm')"
      :cancel-text="$t('common.cancel')"
      :loading="wallpaperCacheLoading"
      @confirm="handleWallpaperCacheConfirm"
      @cancel="wallpaperCacheLoading = false"
    >
      <div>{{ $t('dataManager.wallpaperCacheConfirm') }}</div>
    </ConfirmDialog>

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
import { ConfirmDialog, SelectConfirmDialog } from '@/components/UI';
import HistoryCacheSection from './HistoryCacheSection.vue';
import IndexMaintenanceSection from './IndexMaintenanceSection.vue';
import StorageLocationsSection from './StorageLocationsSection.vue';
import BackupRecoverySection from './BackupRecoverySection.vue';
import { useDataManager } from './useDataManager';

defineOptions({
  name: 'Manger'
});

const {
  activateRecovery,
  backupBusy,
  backupLocation,
  exportBackup,
  restoreBackup,
  restoredLocation,
  showActivateDialog,
  dataRoot,
  backgroundIndexBusy,
  backgroundIndexTasks,
  handleHistoryConfirm,
  handleIconCacheConfirm,
  handleIndexConfirm,
  handleMarkdownIndexRebuild,
  handleOpenWallpaperCache,
  handlePathConfirm,
  handleWallpaperCacheConfirm,
  historyLoading,
  historyOptions,
  iconCacheLoading,
  indexOptions,
  localIndexLoading,
  logDir,
  markdownIndexLoading,
  openDataDirectory,
  pathLoading,
  pluginDir,
  selectCustomPath,
  selectWorkspaceRoot,
  showHistoryDialog,
  showIconCacheDialog,
  showIndexDialog,
  showPathDialog,
  showWallpaperCacheDialog,
  wallpaperCacheAvailable,
  wallpaperCacheLoading,
  wallpaperCacheOpening,
  wallpaperCacheSizeLabel,
  workspaceLoading,
  workspaceRoot
} = useDataManager();
</script>
