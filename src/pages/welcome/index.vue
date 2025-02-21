<template>
  <div class="welcome-container">
    <Code theme="outline" size="26" :strokeWidth="3" />
    Welcome to use
  </div>
</template>

<script setup lang="ts">
import { Code } from '@icon-park/vue-next';
</script>

<style scoped lang="scss">
.welcome-container {
  @apply h-[calc(100vh-26px)] flex flex-col items-center justify-center text-base text-slate-600 dark:text-[#c9ccd4] opacity-80;
}
</style>
