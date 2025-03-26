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
defineOptions({
  name: 'Config'
});
</script>

<style scoped lang="scss">
.config {
  @apply relative z-50 bg-content h-full flex justify-start;
}
</style>
