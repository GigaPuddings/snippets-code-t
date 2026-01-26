<template>
  <div class="editor-status">
    <div class="editor-status-left">
      <!-- Obsidian 风格：71 个词 164 个字符 -->
      <div class="editor-status-item">
        <span class="editor-status-text">{{ wordCount }} {{ $t('noteEditor.words') }}</span>
      </div>
      <div class="editor-status-item">
        <span class="editor-status-text">{{ charCount }} {{ $t('noteEditor.chars') }}</span>
      </div>
    </div>
    
    <!-- 视图切换按钮 -->
    <div v-if="showViewToggle" class="editor-status-right">
      <el-dropdown trigger="click" @command="handleCommand">
        <span class="view-toggle-btn">
          <svg v-if="viewMode === 'reading'" class="view-icon" viewBox="0 0 24 24" width="16" height="16">
            <path fill="currentColor" d="M21,5C19.89,4.65 18.67,4.5 17.5,4.5C15.55,4.5 13.45,4.9 12,6C10.55,4.9 8.45,4.5 6.5,4.5C4.55,4.5 2.45,4.9 1,6V20.65C1,20.9 1.25,21.15 1.5,21.15C1.6,21.15 1.65,21.1 1.75,21.1C3.1,20.45 5.05,20 6.5,20C8.45,20 10.55,20.4 12,21.5C13.35,20.65 15.8,20 17.5,20C19.15,20 20.85,20.3 22.25,21.05C22.35,21.1 22.4,21.1 22.5,21.1C22.75,21.1 23,20.85 23,20.6V6C22.4,5.55 21.75,5.25 21,5M21,18.5C19.9,18.15 18.7,18 17.5,18C15.8,18 13.35,18.65 12,19.5V8C13.35,7.15 15.8,6.5 17.5,6.5C18.7,6.5 19.9,6.65 21,7V18.5Z" />
          </svg>
          <svg v-else-if="viewMode === 'source'" class="view-icon" viewBox="0 0 24 24" width="16" height="16">
            <path fill="currentColor" d="M14.6,16.6L19.2,12L14.6,7.4L16,6L22,12L16,18L14.6,16.6M9.4,16.6L4.8,12L9.4,7.4L8,6L2,12L8,18L9.4,16.6Z" />
          </svg>
          <svg v-else class="view-icon" viewBox="0 0 24 24" width="16" height="16">
            <path fill="currentColor" d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z" />
          </svg>
          <span class="view-text">
            {{ viewModeText }}
          </span>
          <svg class="dropdown-arrow" viewBox="0 0 24 24" width="12" height="12">
            <path fill="currentColor" d="M7,10L12,15L17,10H7Z" />
          </svg>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item command="reading" :class="{ 'is-active': viewMode === 'reading' }">
              <svg class="menu-icon" viewBox="0 0 24 24" width="16" height="16">
                <path fill="currentColor" d="M21,5C19.89,4.65 18.67,4.5 17.5,4.5C15.55,4.5 13.45,4.9 12,6C10.55,4.9 8.45,4.5 6.5,4.5C4.55,4.5 2.45,4.9 1,6V20.65C1,20.9 1.25,21.15 1.5,21.15C1.6,21.15 1.65,21.1 1.75,21.1C3.1,20.45 5.05,20 6.5,20C8.45,20 10.55,20.4 12,21.5C13.35,20.65 15.8,20 17.5,20C19.15,20 20.85,20.3 22.25,21.05C22.35,21.1 22.4,21.1 22.5,21.1C22.75,21.1 23,20.85 23,20.6V6C22.4,5.55 21.75,5.25 21,5M21,18.5C19.9,18.15 18.7,18 17.5,18C15.8,18 13.35,18.65 12,19.5V8C13.35,7.15 15.8,6.5 17.5,6.5C18.7,6.5 19.9,6.65 21,7V18.5Z" />
              </svg>
              <span class="menu-text">{{ $t('noteEditor.readingView') }}</span>
              <svg v-if="viewMode === 'reading'" class="check-icon" viewBox="0 0 24 24" width="16" height="16">
                <path fill="currentColor" d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" />
              </svg>
            </el-dropdown-item>
            <el-dropdown-item command="source" :class="{ 'is-active': viewMode === 'source' }">
              <svg class="menu-icon" viewBox="0 0 24 24" width="16" height="16">
                <path fill="currentColor" d="M14.6,16.6L19.2,12L14.6,7.4L16,6L22,12L16,18L14.6,16.6M9.4,16.6L4.8,12L9.4,7.4L8,6L2,12L8,18L9.4,16.6Z" />
              </svg>
              <span class="menu-text">{{ $t('noteEditor.sourceMode') }}</span>
              <svg v-if="viewMode === 'source'" class="check-icon" viewBox="0 0 24 24" width="16" height="16">
                <path fill="currentColor" d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" />
              </svg>
            </el-dropdown-item>
            <el-dropdown-item command="preview" :class="{ 'is-active': viewMode === 'preview' }">
              <svg class="menu-icon" viewBox="0 0 24 24" width="16" height="16">
                <path fill="currentColor" d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z" />
              </svg>
              <span class="menu-text">{{ $t('noteEditor.livePreview') }}</span>
              <svg v-if="viewMode === 'preview'" class="check-icon" viewBox="0 0 24 24" width="16" height="16">
                <path fill="currentColor" d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" />
              </svg>
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

interface Props {
  wordCount: number;
  charCount: number;
  viewMode: 'reading' | 'preview' | 'source';
  showViewToggle?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  showViewToggle: true
});

const emits = defineEmits<{
  'view-mode-change': [mode: 'reading' | 'preview' | 'source'];
}>();

const { t } = useI18n();

const viewModeText = computed(() => {
  switch (props.viewMode) {
    case 'reading':
      return t('noteEditor.readingView');
    case 'source':
      return t('noteEditor.sourceMode');
    case 'preview':
      return t('noteEditor.livePreview');
    default:
      return '';
  }
});

const handleCommand = (command: 'reading' | 'preview' | 'source') => {
  emits('view-mode-change', command);
};
</script>

<style lang="scss" scoped>
.editor-status {
  @apply h-6 px-2 bg-gray-50 border-t border-gray-200 flex items-center justify-between text-sm text-gray-700;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 10;
  transition: background-color 0.3s ease, border-color 0.3s ease, color 0.3s ease;

  span:last-child {
    @apply font-medium;
  }
}

.editor-status-left {
  @apply flex items-center gap-3;
}

.editor-status-item {
  @apply flex items-center;
}

.editor-status-text {
  @apply text-xs opacity-70;
  font-weight: 400;
}

.view-toggle-btn {
  @apply flex items-center gap-1 px-2 py-1 rounded cursor-pointer text-xs;
  transition: background-color 0.2s ease, color 0.2s ease;

  &:hover {
    @apply bg-gray-200;
  }

  .view-icon {
    @apply flex-shrink-0;
  }

  .view-text {
    @apply flex-shrink-0;
  }

  .dropdown-arrow {
    @apply flex-shrink-0 opacity-60;
  }
}

.el-dropdown-menu {
  .el-dropdown-menu__item {
    @apply flex items-center gap-1 relative;

    .menu-icon {
      @apply flex-shrink-0;
    }

    .menu-text {
      @apply m-1;
    }

    .check-icon {
      @apply flex-shrink-0 ml-auto;
      color: #5d6dfd;
    }

    &.is-active {
      @apply text-[#5d6dfd];
      font-weight: 500;
    }
  }
}
</style>
