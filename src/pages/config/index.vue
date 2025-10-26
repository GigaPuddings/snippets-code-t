<template>
  <div class="config">
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </router-view>
  </div>
</template>

<script setup lang="ts">
import { getCurrentWindow } from '@tauri-apps/api/window';
import { nextTick, onMounted, onUnmounted } from 'vue';
import { useRouter } from 'vue-router';

defineOptions({
  name: 'Config'
});

const router = useRouter();

// 监听导航到设置页面的事件
let unlisten: (() => void) | null = null;

// 通知后端前端已准备完成
onMounted(async () => {
  nextTick(() => {
    getCurrentWindow().emit('config_ready');
  });

  // 监听导航到设置页面的事件
  const currentWindow = getCurrentWindow();
  unlisten = await currentWindow.listen('navigate-to-settings', () => {
    // 导航到设置页面
    router.push('/config/category/settings');
  });
});

// 清理事件监听器
onUnmounted(() => {
  if (unlisten) {
    unlisten();
  }
});
</script>

<style scoped lang="scss">
.config {
  @apply relative z-50 bg-content h-full flex justify-start;
}
</style>
