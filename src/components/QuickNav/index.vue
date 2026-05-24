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
  position: relative;
  border: 1px solid transparent;
}

.quick-nav-container {
  @apply border-b border-panel flex-shrink-0;
  padding-bottom: 6px;
  overflow: visible;

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

  background-color: var(--search-result-active);
  border-color: var(--search-result-active-border);

  .quick-nav-item-icon {
    @apply select-none;
    color: var(--search-result-accent);
  }

  .quick-nav-item-title {
    @apply select-none;
    color: var(--categories-text-color);
    font-weight: 600;
  }

  &::before {
    position: absolute;
    top: 7px;
    bottom: 7px;
    left: 0;
    width: 3px;
    pointer-events: none;
    content: '';
    background: var(--search-result-accent);
    border-radius: 0 999px 999px 0;
  }
}
</style>
