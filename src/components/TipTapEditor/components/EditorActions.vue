<template>
  <div class="editor-actions">
    <!-- 大纲按钮 - 使用 Lucide 风格图标 -->
    <button 
      class="action-btn"
      @click="handleOutlineClick"
      :title="$t('noteEditor.outline')"
    >
      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <line x1="8" y1="6" x2="21" y2="6"></line>
        <line x1="8" y1="12" x2="21" y2="12"></line>
        <line x1="8" y1="18" x2="21" y2="18"></line>
        <line x1="3" y1="6" x2="3.01" y2="6"></line>
        <line x1="3" y1="12" x2="3.01" y2="12"></line>
        <line x1="3" y1="18" x2="3.01" y2="18"></line>
      </svg>
    </button>
    
    <!-- 阅读模式切换按钮 -->
    <button 
      v-if="viewMode !== 'reading'" 
      class="action-btn"
      @click="handleReadingModeClick"
      :title="$t('noteEditor.toggleReading')"
    >
      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
      </svg>
    </button>
    
    <button 
      v-else 
      class="action-btn"
      @click="handleEditingModeClick"
      :title="$t('noteEditor.toggleEditing')"
    >
      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
      </svg>
    </button>
  </div>
</template>

<script setup lang="ts">
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

<style lang="scss" scoped>
.editor-actions {
  @apply absolute top-3 right-3 flex gap-0.5 z-10;
}

.action-btn {
  @apply w-8 h-8 flex items-center justify-center bg-transparent border-0 rounded cursor-pointer;
  transition: background-color 0.15s ease, color 0.15s ease;
  color: #999;
  
  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
    color: #666;
  }
  
  &:active {
    background-color: rgba(0, 0, 0, 0.08);
  }
  
  svg {
    flex-shrink: 0;
    stroke-width: 1.5;
  }
}

.dark-theme .action-btn {
  color: #8a8a8a;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.08);
    color: #b3b3b3;
  }
  
  &:active {
    background-color: rgba(255, 255, 255, 0.12);
  }
}
</style>
