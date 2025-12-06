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
            <component :is="Component" :key="route.path" />
          </keep-alive>
          <component v-else :is="Component" :key="route.path" />
        </template>
      </router-view>
    </div>
  </main>
</template>
<script setup lang="ts">
defineOptions({
  name: 'AppMain'
});

const route = useRoute();
// 需要显示标签栏的路由页面
const hasTabbar = computed(() =>
  ['Search', 'Notification', 'Update', 'Translate', 'DarkMode', 'Setup'].includes(
    route.name as string
  )
);
</script>
