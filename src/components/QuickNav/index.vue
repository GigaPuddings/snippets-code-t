<template>
  <main class="overflow-hidden border-b border-panel">
    <div class="px-1 mt-2 opacity-90 mb-1 text-content text-xs select-none">
      快捷操作
    </div>
    <router-link
      to="/config/category/contentList"
      class="link"
      active-class="active"
      replace
    >
      <div class="flex items-center gap-1 text-sm">
        <AllApplication theme="outline" size="18" :strokeWidth="3" />
        <div class="truncate ml-1 text-panel select-none">所有片段</div>
      </div>
    </router-link>
    <router-link
      to="/config/category/contentList/0"
      class="link"
      active-class="active"
      replace
    >
      <div class="flex items-center gap-1 text-sm">
        <FolderOne theme="outline" size="17" :strokeWidth="3" />
        <div class="truncate ml-1 text-panel select-none">未分类</div>
      </div>
    </router-link>
  </main>
</template>

<script setup lang="ts">
import { AllApplication, FolderOne } from '@icon-park/vue-next';

defineOptions({
  name: 'QuickNav'
});
</script>

<style lang="scss" scoped>
@mixin commonLink {
  @apply rounded-md block my-1 text-xs px-3 py-1 truncate cursor-pointer hover:bg-panel dark:hover:bg-hover dark:text-panel;
}

.link {
  @include commonLink();
}

.active {
  @include commonLink();

  @apply bg-active dark:bg-active dark:hover:bg-hover hover:bg-active;
}
</style>
