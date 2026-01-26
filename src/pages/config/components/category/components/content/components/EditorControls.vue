<template>
  <div class="editor-controls">
    <!-- 大纲按钮 - Lucide 风格 -->
    <button 
      class="control-btn"
      @click="$emit('outline-click')"
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
      class="control-btn"
      @click="$emit('reading-mode-click')"
      :title="$t('noteEditor.toggleReading')"
    >
      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
      </svg>
    </button>
    
    <button 
      v-else 
      class="control-btn"
      @click="$emit('editing-mode-click')"
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

defineEmits<{
  'outline-click': [];
  'reading-mode-click': [];
  'editing-mode-click': [];
}>();
</script>

<style lang="scss" scoped>
.editor-controls {
  @apply flex items-center gap-1 ml-auto;
  flex-shrink: 0;
}

.control-btn {
  @apply w-8 h-8 flex items-center justify-center bg-white border border-gray-200 rounded cursor-pointer;
  transition: all 0.2s ease;
  color: var(--text-muted, #6b7280);
  
  &:hover {
    @apply bg-gray-50 border-gray-300;
    color: var(--text-normal, #374151);
  }
  
  &:active {
    transform: scale(0.95);
  }
  
  svg {
    flex-shrink: 0;
  }
}

:deep(.dark) {
  .control-btn {
    @apply bg-[#1a1a1a] border-[#2a2a2a];
    color: var(--text-muted, #9ca3af);
    
    &:hover {
      @apply bg-[#2a2a2a] border-[#3a3a3a];
      color: var(--text-normal, #d1d5db);
    }
  }
}
</style>
