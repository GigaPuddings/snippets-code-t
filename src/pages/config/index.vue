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
let unlistenFragment: (() => void) | null = null;
let unlistenCheckNav: (() => void) | null = null;

// 检查是否有待处理的导航
const checkPendingNavigation = () => {
  const pendingNav = localStorage.getItem('pendingNavigation');
  
  if (pendingNav) {
    try {
      const { fragmentId, categoryId, timestamp } = JSON.parse(pendingNav);
      
      // 检查时间戳，只处理 5 秒内的导航请求
      if (Date.now() - timestamp < 5000) {
        // 清除标记
        localStorage.removeItem('pendingNavigation');
        // 导航到对应的片段 - 修正路由路径
        const targetPath = `/config/category/contentList/${categoryId}/content/${fragmentId}`;
        router.push(targetPath);
      } else {
        // 过期的导航请求，清除
        localStorage.removeItem('pendingNavigation');
      }
    } catch (err) {
      console.error('Failed to parse pending navigation:', err);
      localStorage.removeItem('pendingNavigation');
    }
  }
};

// 通知后端前端已准备完成
onMounted(async () => {
  nextTick(() => {
    getCurrentWindow().emit('config_ready');
    // 检查是否有待处理的导航
    checkPendingNavigation();
  });

  // 监听导航到设置页面的事件
  const currentWindow = getCurrentWindow();
  
  unlisten = await currentWindow.listen('navigate-to-settings', () => {
    // 导航到设置页面
    router.push('/config/category/settings');
  });
  
  // 监听导航到片段详情的事件
  unlistenFragment = await currentWindow.listen('navigate-to-fragment', (event: any) => {
    const { fragmentId, categoryId } = event.payload;
    // 导航到对应的分类和片段 - 修正路由路径
    router.push(`/config/category/contentList/${categoryId}/content/${fragmentId}`);
  });
  
  // 监听窗口显示事件，每次显示时检查待处理的导航
  await currentWindow.onFocusChanged(({ payload: focused }) => {
    if (focused) {
      checkPendingNavigation();
    }
  });
  
  // 监听自定义的导航检查事件（从预览窗口或搜索窗口触发）
  unlistenCheckNav = await currentWindow.listen('check-pending-navigation', () => {
    checkPendingNavigation();
  });
});

// 清理事件监听器
onUnmounted(() => {
  if (unlisten) {
    unlisten();
  }
  if (unlistenFragment) {
    unlistenFragment();
  }
  if (unlistenCheckNav) {
    unlistenCheckNav();
  }
});
</script>

<style scoped lang="scss">
.config {
  @apply relative z-50 bg-content h-full flex justify-start;
}
</style>
