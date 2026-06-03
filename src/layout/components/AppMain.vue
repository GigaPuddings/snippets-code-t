<template>
  <main :class="[
    !hasTabbar
      ? 'w-screen h-screen rounded-lg border-[1.5px] border-panel'
      : ''
  ]">
    <Titlebar v-if="!hasTabbar" />
    <div :class="[`relative w-full overflow-hidden ${hasTabbar ? 'h-screen' : 'h-[calc(100vh-42px)] bg-panel p-[1px] rounded-b-lg pb-0.5'}`]">
      <router-view v-slot="{ Component, route: slotRoute }">
        <template v-if="Component">
          <keep-alive v-if="shouldKeepAliveLayoutChild(slotRoute)">
            <component :is="Component" :key="getLayoutChildKey(slotRoute)" />
          </keep-alive>
          <component
            v-else
            :is="Component"
            :key="getLayoutChildKey(slotRoute)"
          />
        </template>
      </router-view>
    </div>
  </main>
</template>
<script setup lang="ts">
import { useLayoutStore } from '@/store';
import type { RouteLocationNormalizedLoaded } from 'vue-router';

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

const getLayoutChildRecord = (currentRoute: RouteLocationNormalizedLoaded) =>
  currentRoute.matched[1] ?? currentRoute.matched[0] ?? null;

const shouldKeepAliveLayoutChild = (currentRoute: RouteLocationNormalizedLoaded) =>
  Boolean(getLayoutChildRecord(currentRoute)?.meta.keepAlive);

const getLayoutChildKey = (currentRoute: RouteLocationNormalizedLoaded) => {
  const record = getLayoutChildRecord(currentRoute);
  return String(record?.name ?? record?.path ?? currentRoute.fullPath);
};

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
