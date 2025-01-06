<template>
  <main class="overflow-hidden border-b dark:border-b-[#43444e]">
    <div class="px-1 mt-2 opacity-90 mb-1 text-gray-400 text-xs">快捷操作</div>
    <router-link
      to="/config/category/contentList"
      class="link"
      active-class="active"
      replace
    >
      <div class="flex items-center gap-1 text-sm">
        <AllApplication theme="outline" size="18" :strokeWidth="3" />
        <div class="truncate ml-1">所有片段</div>
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
        <div class="truncate ml-1">未分类</div>
      </div>
    </router-link>
  </main>
</template>

<script setup lang="ts">
import { AllApplication, FolderOne } from '@icon-park/vue-next';

defineOptions({
  name: 'QuickNav'
});

onMounted(() => {
  console.log('QuickNav mounted');
});
</script>

<style lang="scss" scoped>
@mixin commonLink {
  @apply rounded-md block my-1 text-xs px-3 py-1 truncate cursor-pointer hover:bg-neutral-200 dark:hover:bg-[--mantine-color-default-hover] dark:text-[--mantine-color-gray-light-color];
}

.link {
  @include commonLink();
}

.active {
  @include commonLink();
  @apply bg-neutral-200 dark:bg-[#5977cb] dark:hover:bg-[#5977cb] hover:bg-neutral-200;
}
</style>
