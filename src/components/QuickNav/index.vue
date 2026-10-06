<template>
  <main class="quick-nav-container">
    <div class="ui-section-heading px-3 mb-1">{{ $t('nav.quickAccess') }}</div>
    <router-link
      to="/config/category/contentList"
      class="ui-menu-item mb-ui-row-gap h-ui-row px-3 truncate"
      :class="{ active: activeView === 'all' }"
      :aria-current="activeView === 'all' ? 'page' : undefined"
      replace
      @click="$emit('open', 'all')"
    >
      <div class="quick-nav-item">
        <AllApplication class="quick-nav-item-icon" theme="outline" size="16" />
        <div class="quick-nav-item-title">{{ $t('nav.allSnippets') }}</div>
      </div>
    </router-link>
    <router-link
      to="/config/category/contentList/0"
      class="ui-menu-item mb-ui-row-gap h-ui-row px-3 truncate"
      :class="{ active: activeView === 'uncategorized' }"
      :aria-current="activeView === 'uncategorized' ? 'page' : undefined"
      replace
      @click="$emit('open', 'uncategorized')"
    >
      <div class="quick-nav-item">
        <FileCodeOne class="quick-nav-item-icon" theme="outline" size="16" />
        <div class="quick-nav-item-title">{{ $t('nav.uncategorized') }}</div>
      </div>
    </router-link>
    <router-link
      to="/config/category/contentList?view=favorites"
      class="ui-menu-item mb-ui-row-gap h-ui-row px-3 truncate"
      :class="{ active: activeView === 'favorites' }"
      :aria-current="activeView === 'favorites' ? 'page' : undefined"
      replace
      @click="$emit('open', 'favorites')"
    >
      <div class="quick-nav-item">
        <Star class="quick-nav-item-icon" theme="outline" size="16" />
        <div class="quick-nav-item-title">{{ $t('nav.favorites') }}</div>
        <span
          v-if="
            activeView === 'favorites' && favoriteCount && favoriteCount > 0
          "
          class="ml-auto flex h-[18px] min-w-[18px] shrink-0 items-center justify-center rounded-full bg-[var(--workspace-nav-bg)] px-1 text-ui-caption tabular-nums text-[var(--workspace-nav-text)]"
          :aria-label="$t('nav.favoriteCount', { count: favoriteCount })"
        >
          {{ favoriteCount }}
        </span>
      </div>
    </router-link>
    <router-link
      to="/config/category/contentList?view=trash"
      class="ui-menu-item mb-ui-row-gap h-ui-row px-3 truncate"
      :class="{ active: activeView === 'trash' }"
      :aria-current="activeView === 'trash' ? 'page' : undefined"
      replace
      @click="$emit('open', 'trash')"
    >
      <div class="quick-nav-item">
        <DeleteFour class="quick-nav-item-icon" theme="outline" size="16" />
        <div class="quick-nav-item-title">{{ $t('nav.recentlyDeleted') }}</div>
      </div>
    </router-link>
  </main>
</template>

<script setup lang="ts">
import {
  AllApplication,
  FileCodeOne,
  Star,
  DeleteFour
} from '@icon-park/vue-next';
defineOptions({
  name: 'QuickNav'
});

type QuickView = 'folders' | 'all' | 'uncategorized' | 'favorites' | 'trash';
defineProps<{ activeView: QuickView; favoriteCount?: number | null }>();
defineEmits<{ (e: 'open', view: QuickView): void }>();
</script>

<style lang="scss" scoped>
.quick-nav-container {
  @apply flex-shrink-0 px-2;

  overflow: visible;

  .quick-nav-item {
    @apply flex w-full min-w-0 items-center gap-2 text-ui;

    .quick-nav-item-icon {
      color: var(--workspace-nav-text);
    }

    .quick-nav-item-title {
      @apply truncate select-none;
    }
  }
}

.active {
  .quick-nav-item-icon {
    @apply select-none;

    color: var(--search-result-accent);
  }

  .quick-nav-item-title {
    font-weight: 400;
    color: var(--categories-text-color);
  }
}
</style>
