<template>
  <main class="summarize-container">
    <section class="summarize-section">
      <div class="summarize-label">
        <div class="summarize-label-title">片段目录：</div>
        <div class="summarize-label-desc">设置片段存储位置</div>
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
          修改路径
        </CustomButton>
      </div>
    </section>

    <section class="summarize-section">
      <div class="summarize-label">
        <div class="summarize-label-title">片段数据备份：</div>
        <div class="summarize-label-desc">设置片段数据备份位置</div>
      </div>
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
        <CustomButton
          type="primary"
          size="small"
          @click="startBackup"
          :loading="backupLoading"
        >
          数据备份
        </CustomButton>
      </div>
    </section>

    <section class="summarize-section">
      <div class="summarize-label">
        <div class="summarize-label-title">数据恢复：</div>
        <div class="summarize-label-desc">恢复片段数据</div>
      </div>
      <div class="summarize-input-wrapper">
        <CustomButton
          type="primary"
          size="small"
          @click="restoreData"
          :loading="restoreLoading"
        >
          数据恢复
        </CustomButton>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { getDb } from '@/database';
import { useConfigurationStore } from '@/store';
import { invoke } from '@tauri-apps/api/core';
import CustomButton from '@/components/UI/CustomButton.vue';

defineOptions({
  name: 'Manger'
});

const store = useConfigurationStore();
const backupLoading = ref(false);
const restoreLoading = ref(false);
const pathLoading = ref(false);

const dictDBBackup = [
  { value: 'A', label: '年月日' },
  { value: 'B', label: '时分秒' },
  { value: 'C', label: '年月日时分秒' }
];

// 备份数据
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
// 恢复数据
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
    // 关闭数据库
    await getDb().then((db) => {
      console.log('关闭数据库', db);
      db.close();
    });
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

// 选择数据库路径
const selectCustomPath = async () => {
  try {
    pathLoading.value = true;

    await ElMessageBox.confirm(
      '修改数据库存储位置将会迁移现有数据并重启应用，是否继续？',
      '警告',
      {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }
    );
    // 关闭数据库
    await getDb().then((db) => {
      console.log('关闭数据库', db);
      db.close();
    });
    const newPath = await invoke('set_custom_db_path');
    store.dbPath = newPath as string; // 更新前端路径
    ElMessage.success('数据库路径修改成功，应用将重启以应用更改');
  } catch (error: any) {
    if (error !== 'cancel') {
      ElMessage.error(`修改失败: ${error}`);
    }
  } finally {
    pathLoading.value = false;
  }
};
</script>
