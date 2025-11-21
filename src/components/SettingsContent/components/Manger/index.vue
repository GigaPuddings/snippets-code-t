<template>
  <main class="summarize-container">
    <section class="summarize-section transparent-input">
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

    <section class="summarize-section transparent-input">
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

    <section class="summarize-section transparent-input">
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
// 数据库已迁移到Rust后端，不再需要前端管理连接
import { useConfigurationStore } from '@/store';
import { invoke } from '@tauri-apps/api/core';
import modal from '@/utils/modal';
import { CustomButton } from '@/components/UI';
import { h } from 'vue';
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
    modal.msg('请选择备份文件名格式', 'warning');
    return;
  }

  backupLoading.value = true;
  try {
    await invoke('backup_database', { format: store.dbBackup });
    modal.msg('数据备份成功');
  } catch (error: any) {
    if (error !== 'Backup cancelled') {
      modal.msg(`备份失败: ${error}`, 'error');
    }
  } finally {
    backupLoading.value = false;
  }
};
// 恢复数据
const restoreData = async () => {
  restoreLoading.value = true;
  await ElMessageBox({
    title: '警告',
    showCancelButton: false,
    showConfirmButton: false,
    closeOnClickModal: false,
    closeOnPressEscape: false,
    message: () => {
      return h('div', [
        h('div', '恢复数据将会替换当前数据库，并且需要重启应用。是否继续？'),
        h('div', { class: 'message-footer' }, [
          h(
            CustomButton,
            {
              type: 'default',
              size: '',
              onClick: () => {
                ElMessageBox.close();
                restoreLoading.value = false;
              }
            },
            { default: () => '取消' }
          ),
          h(
            CustomButton,
            {
              type: 'primary',
              onClick: async () => {
                ElMessageBox.close();
                try {
                  // Rust后端会自动管理数据库连接
                  await invoke('restore_database');
                  modal.msg('数据恢复成功，应用即将重启');
                } catch (error) {
                  console.log('恢复数据失败', error);
                } finally {
                  restoreLoading.value = false;
                }
              }
            },
            { default: () => '确定' }
          )
        ])
      ]);
    }
  }).catch(() => {
    restoreLoading.value = false;
  });
};

// 选择数据库路径
const selectCustomPath = async () => {
  pathLoading.value = true;

  await ElMessageBox({
    title: '警告',
    showCancelButton: false,
    showConfirmButton: false,
    closeOnClickModal: false,
    closeOnPressEscape: false,
    message: () => {
      return h('div', [
        h('div', '修改数据库存储位置将会迁移现有数据并重启应用，是否继续？'),
        h('div', { class: 'message-footer' }, [
          h(
            CustomButton,
            {
              type: 'default',
              size: '',
              onClick: () => {
                ElMessageBox.close();
                pathLoading.value = false;
              }
            },
            { default: () => '取消' }
          ),
          h(
            CustomButton,
            {
              type: 'primary',
              size: '',
              onClick: async () => {
                ElMessageBox.close();
                try {
                  // Rust后端会自动管理数据库连接
                  const newPath = await invoke('set_custom_db_path');
                  store.dbPath = newPath as string; // 更新前端路径
                  modal.msg('数据库路径修改成功，应用将重启以应用更改');
                } catch (error) {
                  console.log('修改数据库路径失败', error);
                } finally {
                  pathLoading.value = false;
                }
              }
            },
            { default: () => '确定' }
          )
        ])
      ]);
    }
  }).catch(() => {
    pathLoading.value = false;
  });
};
</script>

<style scoped lang="scss">
.message-footer {
  @apply flex justify-end gap-2 mt-4;
}
</style>
