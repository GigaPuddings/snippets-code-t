<template>
  <section class="summarize-section">
    <div class="summarize-label">设置主题：</div>
    <div class="summarize-input-wrapper">
      <el-select
        class="summarize-input"
        v-model="store.theme"
        placeholder="请选择主题"
        @change="changeTheme"
      >
        <el-option
          v-for="item in dictTheme"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
          <div class="flex items-center gap-2">
            <component
              :is="item.icon"
              :theme="item.value === store.theme ? 'filled' : 'outline'"
              :fill="item.value === store.theme ? '#4b94f8' : '#666'"
            />
            <div :class="{ 'text-primary': item.value === store.theme }">
              {{ item.label }}
            </div>
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
        inline-prompt
        active-text="开启"
        inactive-text="关闭"
        @change="handleAutoStartChange"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import { SunOne, Moon, Computer } from '@icon-park/vue-next';
import { enable, isEnabled, disable } from '@tauri-apps/plugin-autostart';
import { useConfigurationStore } from '@/store';
import { onMounted } from 'vue';
import { initTheme } from '@/utils/theme';

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
  initTheme();
};

const watchAutoStart = async () => {
  try {
    const enabled = await isEnabled();
    store.autoStart = enabled;
  } catch (error) {
    console.error('获取自启动状态失败:', error);
  }
};

const handleAutoStartChange = async (value: string | number | boolean) => {
  try {
    if (Boolean(value)) {
      await enable();
      ElMessage.success('自启动已开启');
    } else {
      await disable();
      ElMessage.success('自启动已关闭');
    }
    store.autoStart = Boolean(value);
  } catch (error) {
    console.error('设置自启动状态失败:', error);
    store.autoStart = !Boolean(value);
  }
};

onMounted(() => {
  watchAutoStart();
});
</script>

<style scoped lang="scss">
.text-primary {
  color: #4b94f8;
}
</style>
