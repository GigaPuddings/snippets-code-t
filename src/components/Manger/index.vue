<template>
  <section class="summarize-section">
    <div class="summarize-label">数据库目录：</div>
    <div class="summarize-input-wrapper">
      <el-input class="summarize-input" readonly v-model="store.dbPath" />
      <el-button
        type="primary"
        class="summarize-button"
        @click="() => openDBPath()"
      >
        打开
      </el-button>
    </div>
  </section>

  <section class="summarize-section">
    <div class="summarize-label">数据备份：</div>
    <div class="summarize-input-wrapper">
      <el-select v-model="store.dbBackup" placeholder="">
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
        @click="() => startBackup()"
      >
        开始备份
      </el-button>
      <el-button
        type="primary"
        class="summarize-button"
        @click="() => restoreData()"
      >
        恢复数据
      </el-button>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useConfigurationStore } from '@/store';

defineOptions({
  name: 'Manger'
});

const store = useConfigurationStore();
const dictDBBackup = [
  { value: 'A', label: '年-月-日' },
  { value: 'B', label: '时-分-秒' },
  { value: 'C', label: '年-月-日-时-分-秒' }
];

const openDBPath = () => {
  invoke('open_db_path');
};

const startBackup = () => {
  invoke('start_backup');
};

const restoreData = () => {
  invoke('restore_data');
};
</script>

<style scoped lang="scss"></style>
