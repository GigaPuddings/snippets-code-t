<template>
  <transition name="helper-fade">
    <div v-if="visible" class="search-helper">
      <!-- Type filters -->
      <div class="helper-item" @click="$emit('insert', 'type:code')">
        <code>type:code</code>
        <span>{{ $t('contentItem.codeSnippet') }}</span>
      </div>
      <div class="helper-item" @click="$emit('insert', 'type:note')">
        <code>type:note</code>
        <span>{{ $t('contentItem.note') }}</span>
      </div>
      
      <!-- Tag filters -->
      <div class="helper-item" @click="$emit('insert', 'tag:')">
        <code>tag:{{ $t('tags.tag') }}</code>
        <span>{{ $t('searchSyntax.tagDesc') }}</span>
      </div>
      <div class="helper-item" @click="$emit('insert', 'tag:tag1 tag:tag2')">
        <code>tag:tag1 tag:tag2</code>
        <span>{{ $t('searchSyntax.multipleTags') }}</span>
      </div>
      
      <!-- Created date filters -->
      <div class="helper-item" @click="$emit('insert', 'created:today')">
        <code>created:today</code>
        <span>{{ $t('searchSyntax.createdTodayDesc') }}</span>
      </div>
      <div class="helper-item" @click="$emit('insert', 'created:week')">
        <code>created:week</code>
        <span>{{ $t('searchSyntax.createdWeekDesc') }}</span>
      </div>
      <div class="helper-item" @click="$emit('insert', 'created:month')">
        <code>created:month</code>
        <span>{{ $t('searchSyntax.createdMonthDesc') }}</span>
      </div>
      <div class="helper-item" @click="$emit('insert', 'created:2024-01-15')">
        <code>created:2024-01-15</code>
        <span>{{ $t('searchSyntax.specificDateDesc') }}</span>
      </div>
      <div class="helper-item" @click="$emit('insert', 'created:>2024-01-01')">
        <code>created:>2024-01-01</code>
        <span>{{ $t('searchSyntax.afterDateDesc') }}</span>
      </div>
      <div class="helper-item" @click="$emit('insert', 'created:<2024-12-31')">
        <code>created:<2024-12-31</code>
        <span>{{ $t('searchSyntax.beforeDateDesc') }}</span>
      </div>
      
      <!-- Updated date filters -->
      <div class="helper-item" @click="$emit('insert', 'updated:today')">
        <code>updated:today</code>
        <span>{{ $t('searchSyntax.updatedTodayDesc') }}</span>
      </div>
      <div class="helper-item" @click="$emit('insert', 'updated:week')">
        <code>updated:week</code>
        <span>{{ $t('searchSyntax.updatedWeekDesc') }}</span>
      </div>
      <div class="helper-item" @click="$emit('insert', 'updated:month')">
        <code>updated:month</code>
        <span>{{ $t('searchSyntax.updatedMonthDesc') }}</span>
      </div>
      <div class="helper-item" @click="$emit('insert', 'updated:>2024-01-01')">
        <code>updated:>2024-01-01</code>
        <span>{{ $t('searchSyntax.afterDateDesc') }}</span>
      </div>
      
      <!-- Combined search example -->
      <div class="helper-item" @click="$emit('insert', 'type:code tag:js created:week')">
        <code>type:code tag:js ...</code>
        <span>{{ $t('searchSyntax.combinedSearch') }}</span>
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';

const { t: $t } = useI18n();

interface Props {
  visible: boolean;
}

defineProps<Props>();

defineEmits<{
  (e: 'insert', syntax: string): void;
}>();
</script>

<style scoped lang="scss">
.helper-fade-enter-active,
.helper-fade-leave-active {
  transition: opacity 0.1s ease;
}

.helper-fade-enter-from,
.helper-fade-leave-to {
  opacity: 0;
}

.search-helper {
  @apply absolute left-0 right-0 mt-1 overflow-hidden z-50;
  background: #ffffff;
  border: 1px solid #e0e0e0;
  border-radius: 6px;
  padding: 2px;
  font-size: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  max-height: 400px;
  overflow-y: auto;
  
  // 自定义滚动条
  &::-webkit-scrollbar {
    width: 6px;
  }
  
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  
  &::-webkit-scrollbar-thumb {
    background: #d1d5db;
    border-radius: 3px;
    
    &:hover {
      background: #9ca3af;
    }
  }
}

.helper-item {
  @apply flex items-center cursor-pointer;
  padding: 5px 8px;
  line-height: 1.4;
  transition: background-color 0.12s ease;
  border-radius: 4px;
  
  &:hover {
    background: #f5f5f5;
  }
  
  code {
    @apply flex-shrink-0 font-mono;
    color: #4b5563;
    font-size: 11px;
    min-width: 150px;
    font-weight: 500;
  }
  
  span {
    color: #9ca3af;
    font-size: 11px;
    white-space: nowrap;
    margin-left: 8px;
  }
}

// 暗色模式
:global(.dark) {
  .search-helper {
    background: #1f2937;
    border-color: #374151;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);
    
    &::-webkit-scrollbar-thumb {
      background: #4b5563;
      
      &:hover {
        background: #6b7280;
      }
    }
  }
  
  .helper-item {
    &:hover {
      background: #374151;
    }
    
    code {
      color: #d1d5db;
    }
    
    span {
      color: #6b7280;
    }
  }
}
</style>
