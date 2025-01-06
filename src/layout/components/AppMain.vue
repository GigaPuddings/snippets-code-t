<template>
  <main class="w-full h-screen rounded-md overflow-hidden">
    <Titlebar v-if="!hasHome">{{ title }}</Titlebar>
      <div :class="[`w-full ${hasHome ? 'h-screen' : 'h-[calc(100vh-40px)]'}`]">
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
import { getName } from '@tauri-apps/api/app'

defineOptions({
  name: 'AppMain'
})
const route = useRoute();
const title = ref('')
const hasHome = computed(() => {
  return route.name === 'Search';
});
onMounted(async () => {
  // 获取应用名称
  const appName = await getName()
  title.value = appName
})
</script>
