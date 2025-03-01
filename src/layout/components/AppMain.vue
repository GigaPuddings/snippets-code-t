<template>
  <main
    :class="[
      `${!hasHome ? 'w-[calc(100vw-1px)] h-screen p-1 rounded-md bg-content border border-neutral-300 dark:border-neutral-900 overflow-hidden' : ''}`
    ]"
  >
    <div class="rounded-md overflow-hidden">
      <Titlebar v-if="!hasHome" />
      <div :class="[`w-full ${hasHome ? 'h-screen' : 'h-[calc(100vh-50px)]'}`]">
        <router-view>
          <template #default="{ Component, route }">
            <keep-alive v-if="route.meta.keepAlive">
              <component :is="Component" :key="route.path" />
            </keep-alive>
            <component v-else :is="Component" :key="route.path" />
          </template>
        </router-view>
      </div>
    </div>
  </main>
</template>
<script setup lang="ts">
defineOptions({
  name: 'AppMain'
});

const route = useRoute();
const hasHome = computed(() => route.name === 'Search');
</script>
