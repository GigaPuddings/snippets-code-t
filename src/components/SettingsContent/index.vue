<template>
  <div class="settings-container">
    <!-- 左侧导航 -->
    <div class="settings-sidebar">
      <div
        v-for="(item, index) in menuItems"
        :key="index"
        :class="['settings-menu-item', { active: activeTab === item.id }]"
        @click="activeTab = item.id"
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
      <!-- 通用设置 -->
      <div v-show="activeTab === 'general'" class="settings-panel">
        <h3 class="panel-title">{{ $t('settings.general') }}</h3>
        <General />
      </div>

      <!-- 快捷键设置 -->
      <div v-show="activeTab === 'shortcut'" class="settings-panel">
        <h3 class="panel-title">{{ $t('shortcut.title') }}</h3>
        <Shortcut />
      </div>

      <!-- 数据管理 -->
      <div v-show="activeTab === 'data'" class="settings-panel">
        <h3 class="panel-title">{{ $t('dataManager.title') }}</h3>
        <Manger />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useI18n } from 'vue-i18n';
import Shortcut from './components/Shortcut/index.vue';
import Manger from './components/Manger/index.vue';
import General from './components/General/index.vue';
import { Data, EnterTheKeyboard, SettingTwo } from '@icon-park/vue-next';

defineOptions({
  name: 'SettingsContent'
});

const { t } = useI18n();

const menuItems = computed(() => [
  { id: 'general', label: t('settings.general'), icon: SettingTwo },
  { id: 'shortcut', label: t('shortcut.title'), icon: EnterTheKeyboard },
  { id: 'data', label: t('dataManager.title'), icon: Data }
]);

const activeTab = ref('general');
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

.settings-panel {
  @apply flex flex-col;
}

.panel-title {
  @apply text-base font-bold mb-4 pb-2 border-b border-panel;
}
</style>
