<template>
  <main :class="[
    !hasTabbar
      ? 'w-screen h-screen rounded-lg border-[1.5px] border-panel'
      : ''
  ]">
    <Titlebar v-if="!hasTabbar" />
    <div :class="[`relative w-full overflow-hidden ${hasTabbar ? 'h-screen' : 'h-[calc(100vh-41px)] bg-panel p-[1px] rounded-b-lg pb-0.5'}`]">
      <router-view>
        <template #default="{ Component, route }">
          <keep-alive v-if="route.meta.keepAlive">
            <component :is="Component" />
          </keep-alive>
          <component v-else :is="Component" />
        </template>
      </router-view>
    </div>
  </main>
</template>
<script setup lang="ts">
import { useLayoutStore } from '@/store';

defineOptions({
  name: 'AppMain'
});

const route = useRoute();
const layoutStore = useLayoutStore();

// 需要显示标签栏的路由页面
const hasTabbar = computed(() =>
  ['Search', 'Notification', 'Update', 'Translate', 'DarkMode', 'Setup'].includes(
    route.name as string
  )
);

// 窗口尺寸变化时更新 layoutStore，用于左侧面板自动折叠
const updateWindowWidth = () => layoutStore.setWindowWidth(window.innerWidth);

onMounted(() => {
  updateWindowWidth();
  window.addEventListener('resize', updateWindowWidth);
});

onUnmounted(() => {
  window.removeEventListener('resize', updateWindowWidth);
});
</script>
