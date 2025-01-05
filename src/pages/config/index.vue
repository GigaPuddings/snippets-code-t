<template>
  <div class="config">
    <div class="config-nav">
      <router-link
        to="/config/category/contentList"
        class="config-nav-item mb-4"
      >
        <book-open
          class="config-nav-item-icon"
          theme="outline"
          size="20"
          :strokeWidth="3"
        />
        <div class="config-nav-item-text">片段</div>
      </router-link>
      <router-link to="/config/summarize" class="config-nav-item">
        <setting-one
          class="config-nav-item-icon"
          theme="outline"
          size="20"
          :strokeWidth="3"
        />
        <div class="config-nav-item-text">配置</div>
      </router-link>
    </div>
    <router-view />
  </div>
</template>
<script setup lang="ts">
import { BookOpen, SettingOne } from '@icon-park/vue-next';
onMounted(() => {
  console.log('Config mounted');
});
</script>

<style scoped lang="scss">
.config {
  @apply bg-white flex justify-start;

  .config-nav {
    @apply w-16 flex flex-col p-2;

    .config-nav-item {
      @apply flex flex-col py-1 px-2 text-sm rounded-md bg-blue-600;

      .config-nav-item-icon {
        @apply m-auto;
      }
      .config-nav-item-text {
        @apply text-center;
      }
    }
  }
}
</style>
