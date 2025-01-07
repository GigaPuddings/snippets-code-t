<template>
  <section class="summarize-section">
    <div class="summarize-label">设置主题：</div>
    <div class="summarize-input-wrapper">
      <el-select v-model="store.theme" placeholder="" @change="changeTheme">
        <el-option
          v-for="item in dictTheme"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
          <div class="flex items-center gap-2">
            <component :is="item.icon" />
            <div class="ml-2">{{ item.label }}</div>
          </div>
        </el-option>
      </el-select>
    </div>
  </section>

  <section class="summarize-section">
    <div class="summarize-label">开机自动启动：</div>
    <div class="summarize-input-wrapper">
      <el-switch
        size="large"
        v-model="store.autoStart"
        active-color="#4b94f8"
        inactive-color="#13ce66"
        inline-prompt
        active-text="关闭"
        inactive-text="开启"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import { SunOne, Moon, Computer } from '@icon-park/vue-next';
import { useConfigurationStore } from '@/store';

defineOptions({
  name: 'General'
});

const store = useConfigurationStore();

const dictTheme = [
  { value: 'light', label: '浅色', icon: SunOne },
  { value: 'dark', label: '深色', icon: Moon },
  { value: 'auto', label: '自动', icon: Computer }
];

const changeTheme = (value: 'light' | 'dark' | 'auto') => {
  store.theme = value;
};
</script>

<style scoped lang="scss"></style>
