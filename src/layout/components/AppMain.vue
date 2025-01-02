<template>
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
</template>
<script setup lang="ts">
const route = useRoute()

const hasHome = computed(() => {
  return route.name === 'Search'
})
</script>
