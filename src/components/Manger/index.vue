<template>
  <section class="summarize-section">
    <div class="summarize-label">数据库目录：</div>
    <div class="summarize-input-wrapper">
      <el-input class="summarize-input" readonly v-model="store.dbPath" />
    </div>
  </section>

  <section class="summarize-section">
    <div class="summarize-label">数据管理：</div>
    <div class="summarize-input-wrapper">
      <el-select
        class="summarize-input"
        v-model="store.dbBackup"
        placeholder="选择备份文件名格式"
      >
        <el-option
          v-for="item in dictDBBackup"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
      <el-button
        type="primary"
        class="summarize-button"
        @click="startBackup"
        :loading="backupLoading"
      >
        数据备份
      </el-button>
      <el-button
        type="primary"
        class="summarize-button"
        @click="restoreData"
        :loading="restoreLoading"
      >
        数据恢复
      </el-button>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useConfigurationStore } from '@/store';
import { invoke } from '@tauri-apps/api/core';

defineOptions({
  name: 'Manger'
});

const store = useConfigurationStore();
const backupLoading = ref(false);
const restoreLoading = ref(false);

const dictDBBackup = [
  { value: 'A', label: '年-月-日' },
  { value: 'B', label: '时-分-秒' },
  { value: 'C', label: '年-月-日-时-分-秒' }
];

const startBackup = async () => {
  if (!store.dbBackup) {
    ElMessage.warning('请选择备份文件名格式');
    return;
  }

  backupLoading.value = true;
  try {
    await invoke('backup_database', { format: store.dbBackup });
    ElMessage.success('数据备份成功');
  } catch (error: any) {
    if (error !== 'Backup cancelled') {
      ElMessage.error(`备份失败: ${error}`);
    }
  } finally {
    backupLoading.value = false;
  }
};

const restoreData = async () => {
  try {
    await ElMessageBox.confirm(
      '恢复数据将会替换当前数据库，并且需要重启应用。是否继续？',
      '警告',
      {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }
    );

    restoreLoading.value = true;
    await invoke('restore_database');
    ElMessage.success('数据恢复成功，应用即将重启');
  } catch (error: any) {
    if (error !== 'cancel' && error !== 'Restore cancelled') {
      ElMessage.error(`恢复失败: ${error}`);
    }
  } finally {
    restoreLoading.value = false;
  }
};
</script>
