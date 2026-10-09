<template>
  <div class="absolute right-3 top-3 z-10 flex gap-0.5">
    <!-- 大纲按钮 - 使用 Lucide 风格图标 -->
    <button
      type="button"
      class="ui-icon-button"
      @click="handleOutlineClick"
      :title="$t('noteEditor.outline')"
      :aria-label="$t('noteEditor.outline')"
    >
      <UiListTree width="18" height="18" />
    </button>

    <!-- 阅读模式切换按钮 -->
    <button
      v-if="viewMode !== 'reading'"
      type="button"
      class="ui-icon-button"
      @click="handleReadingModeClick"
      :title="$t('noteEditor.toggleReading')"
      :aria-label="$t('noteEditor.toggleReading')"
    >
      <UiBookOpen width="18" height="18" />
    </button>

    <button
      v-else
      type="button"
      class="ui-icon-button"
      @click="handleEditingModeClick"
      :title="$t('noteEditor.toggleEditing')"
      :aria-label="$t('noteEditor.toggleEditing')"
    >
      <UiSquarePen width="18" height="18" />
    </button>
  </div>
</template>

<script setup lang="ts">
import UiSquarePen from '~icons/lucide/square-pen';
import UiBookOpen from '~icons/lucide/book-open';
import UiListTree from '~icons/lucide/list-tree';
interface Props {
  viewMode: 'reading' | 'preview' | 'source';
}

defineProps<Props>();

const emits = defineEmits<{
  'outline-click': [];
  'reading-mode-click': [];
  'editing-mode-click': [];
}>();

const handleOutlineClick = () => {
  emits('outline-click');
};

const handleReadingModeClick = () => {
  emits('reading-mode-click');
};

const handleEditingModeClick = () => {
  emits('editing-mode-click');
};
</script>
