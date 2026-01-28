<template>
  <main class="quick-nav-container">
    <div class="quick-nav-title">{{ $t('nav.quickActions') }}</div>
    <router-link
      to="/config/category/contentList"
      class="link"
      :class="{ active: isAllSnippetsActive }"
      replace
    >
      <div class="quick-nav-item">
        <AllApplication
          class="quick-nav-item-icon"
          theme="outline"
          size="18"
          :strokeWidth="3"
        />
        <div class="quick-nav-item-title">{{ $t('nav.allSnippets') }}</div>
      </div>
    </router-link>
    <router-link
      to="/config/category/contentList/0"
      class="link"
      :class="{ active: isUncategorizedActive }"
      replace
    >
      <div class="quick-nav-item">
        <FolderOne
          class="quick-nav-item-icon"
          theme="outline"
          size="17"
          :strokeWidth="3"
        />
        <div class="quick-nav-item-title">{{ $t('nav.uncategorized') }}</div>
      </div>
    </router-link>
  </main>
</template>

<script setup lang="ts">
import { AllApplication, FolderOne } from '@icon-park/vue-next';
import { computed } from 'vue';
import { useRoute } from 'vue-router';

defineOptions({
  name: 'QuickNav'
});

const route = useRoute();

// 判断"所有片段"是否激活
const isAllSnippetsActive = computed(() => {
  return !route.params.cid;
});

// 判断"未分类"是否激活
const isUncategorizedActive = computed(() => {
  // cid 为 "0" 表示未分类
  return route.params.cid === '0';
});
</script>

<style lang="scss" scoped>
@mixin commonLink {
  @apply rounded-md block my-1 text-xs px-3 py-1 truncate cursor-pointer hover:bg-panel dark:hover:bg-hover dark:text-panel;
}

.quick-nav-container {
  @apply overflow-hidden border-b border-panel;

  .quick-nav-title {
    @apply px-1 mt-2 opacity-90 mb-1 text-content text-xs select-none;
  }

  .quick-nav-item {
    @apply flex items-center gap-1 text-sm;

    .quick-nav-item-icon {
      @apply text-panel;
    }

    .quick-nav-item-title {
      @apply truncate ml-1 text-panel select-none;
    }
  }
}

.link {
  @include commonLink();
}

.active {
  @include commonLink();

  @apply bg-active dark:bg-active dark:hover:bg-hover hover:bg-active;

  .quick-nav-item-icon {
    @apply select-none !text-active;
  }

  .quick-nav-item-title {
    @apply select-none !text-active;
  }
}
</style>
