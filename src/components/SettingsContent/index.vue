<template>
  <div class="settings-container">
    <!-- 左侧导航 -->
    <div class="settings-sidebar">
      <div
        v-for="(item, index) in menuItems"
        :key="index"
        :class="['settings-menu-item', { active: activeTab === item.id }]"
        @click="switchTab(item.id)"
      >
        <component
          :is="item.icon"
          class="mr-2"
          theme="outline"
          size="18"
          :strokeWidth="3"
        />
        <span class="text-sm">{{ item.label }}</span>
      </div>
    </div>

    <!-- 右侧内容区 -->
    <div class="settings-content">
      <component 
        v-for="tab in loadedTabs" 
        :key="tab"
        :is="componentMap[tab]" 
        v-show="activeTab === tab"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { Data, EnterTheKeyboard, SettingTwo, Translate } from '@icon-park/vue-next';
import General from './components/General/index.vue';
import Shortcut from './components/Shortcut/index.vue';
import Manger from './components/Manger/index.vue';
import Translation from './components/Translation/index.vue';

defineOptions({
  name: 'SettingsContent'
});

const { t } = useI18n();

const menuItems = computed(() => [
  { id: 'general', label: t('settings.general'), icon: SettingTwo },
  { id: 'shortcut', label: t('shortcut.title'), icon: EnterTheKeyboard },
  { id: 'data', label: t('dataManager.title'), icon: Data },
  { id: 'translation', label: t('translation.title'), icon: Translate }
]);

const activeTab = ref('general');
const loadedTabs = ref<string[]>(['general']); // 已加载的 tab

// 组件映射
const componentMap: Record<string, any> = {
  general: General,
  shortcut: Shortcut,
  data: Manger,
  translation: Translation
};

// 切换 tab
const switchTab = (tabId: string) => {
  activeTab.value = tabId;
  // 如果该 tab 未加载过，添加到已加载列表
  if (!loadedTabs.value.includes(tabId)) {
    loadedTabs.value.push(tabId);
  }
};
</script>

<style scoped lang="scss">
.settings-container {
  @apply flex h-full w-full border border-panel rounded-md overflow-hidden;
}

.settings-sidebar {
  @apply w-44 border-r border-panel py-4 overflow-y-auto bg-panel px-2;
}

.settings-menu-item {
  @apply flex items-center py-1.5 px-2 my-1.5 last:mb-0 text-panel rounded-md hover:bg-hover dark:hover:bg-hover dark:text-panel cursor-pointer transition-colors;

  &.active {
    @apply bg-active text-active hover:bg-active dark:bg-active dark:hover:bg-active;
  }
}

.settings-content {
  @apply bg-panel flex-1 overflow-hidden p-4;
}
</style>
