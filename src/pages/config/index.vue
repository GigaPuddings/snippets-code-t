<template>
  <div class="config">
    <div class="config-nav">
      <router-link
        v-for="(tab, index) in tabs"
        :key="index"
        :to="tab.path"
        :class="[
          'config-nav-item mb-4',
          { 'config-nav-item-active': $route.path.startsWith(tab.path) }
        ]"
      >
        <component
          :is="tab.icon"
          class="config-nav-item-icon"
          theme="outline"
          size="20"
          :strokeWidth="3"
        />
        <div class="config-nav-item-text">{{ tab.title }}</div>
      </router-link>
    </div>
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
import { BookOpen, SettingOne } from '@icon-park/vue-next';

const tabs = [
  {
    icon: BookOpen,
    title: '片段',
    path: '/config/category/contentList'
  },
  {
    icon: SettingOne,
    title: '配置',
    path: '/config/summarize'
  }
];
</script>

<style scoped lang="scss">
.config {
  @apply bg-content h-full w-full flex justify-start;

  .config-nav {
    @apply w-16 flex flex-col px-2 pb-2;

    .config-nav-item.config-nav-item-active {
      @apply bg-hover text-white;
    }

    .config-nav-item {
      @apply bg-panel flex flex-col py-1 px-2 text-sm rounded-md;

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
