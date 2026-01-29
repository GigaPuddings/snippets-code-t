<template>
  <div class="editor-toolbar" :class="{ 'dark-theme': dark }">
    <!-- Text formatting buttons -->
    <div class="toolbar-group">
      <el-tooltip :content="$t('toolbar.bold')" placement="bottom">
        <button
          class="toolbar-btn"
          :class="{ 'is-active': editor?.isActive('bold') }"
          @click="editor?.chain().focus().toggleBold().run()"
          :disabled="!editor"
        >
          <svg viewBox="0 0 24 24" width="18" height="18">
            <path fill="currentColor" d="M13.5,15.5H10V12.5H13.5A1.5,1.5 0 0,1 15,14A1.5,1.5 0 0,1 13.5,15.5M10,6.5H13A1.5,1.5 0 0,1 14.5,8A1.5,1.5 0 0,1 13,9.5H10M15.6,10.79C16.57,10.11 17.25,9 17.25,8C17.25,5.74 15.5,4 13.25,4H7V18H14.04C16.14,18 17.75,16.3 17.75,14.21C17.75,12.69 16.89,11.39 15.6,10.79Z" />
          </svg>
        </button>
      </el-tooltip>

      <el-tooltip :content="$t('toolbar.italic')" placement="bottom">
        <button
          class="toolbar-btn"
          :class="{ 'is-active': editor?.isActive('italic') }"
          @click="editor?.chain().focus().toggleItalic().run()"
          :disabled="!editor"
        >
          <svg viewBox="0 0 24 24" width="18" height="18">
            <path fill="currentColor" d="M10,4V7H12.21L8.79,15H6V18H14V15H11.79L15.21,7H18V4H10Z" />
          </svg>
        </button>
      </el-tooltip>

      <el-tooltip :content="$t('toolbar.strikethrough')" placement="bottom">
        <button
          class="toolbar-btn"
          :class="{ 'is-active': editor?.isActive('strike') }"
          @click="editor?.chain().focus().toggleStrike().run()"
          :disabled="!editor"
        >
          <svg viewBox="0 0 24 24" width="18" height="18">
            <path fill="currentColor" d="M23,12V14H18.61C19.61,16.14 19.56,22 12.38,22C4.05,22.05 4.37,15.5 4.37,15.5L8.34,15.55C8.37,18.92 11.5,18.92 12.12,18.88C12.76,18.83 15.15,18.84 15.34,16.5C15.42,15.41 14.32,14.58 13.12,14H1V12H23M19.41,7.89L15.43,7.86C15.43,7.86 15.6,5.09 12.15,5.08C8.7,5.06 9,7.28 9,7.56C9.04,7.84 9.34,9.22 12,9.88H5.71C5.71,9.88 2.22,3.15 10.74,2C19.45,0.8 19.43,7.91 19.41,7.89Z" />
          </svg>
        </button>
      </el-tooltip>

      <el-tooltip :content="$t('toolbar.code')" placement="bottom">
        <button
          class="toolbar-btn"
          :class="{ 'is-active': editor?.isActive('code') }"
          @click="editor?.chain().focus().toggleCode().run()"
          :disabled="!editor"
        >
          <svg viewBox="0 0 24 24" width="18" height="18">
            <path fill="currentColor" d="M8,3A2,2 0 0,0 6,5V9A2,2 0 0,1 4,11H3V13H4A2,2 0 0,1 6,15V19A2,2 0 0,0 8,21H10V19H8V14A2,2 0 0,0 6,12A2,2 0 0,0 8,10V5H10V3M16,3A2,2 0 0,1 18,5V9A2,2 0 0,0 20,11H21V13H20A2,2 0 0,0 18,15V19A2,2 0 0,1 16,21H14V19H16V14A2,2 0 0,1 18,12A2,2 0 0,1 16,10V5H14V3H16Z" />
          </svg>
        </button>
      </el-tooltip>
    </div>

    <div class="toolbar-divider"></div>

    <!-- Heading level selector -->
    <div class="toolbar-group">
      <el-tooltip :content="$t('toolbar.heading')" placement="bottom">
        <select
          class="toolbar-select"
          :value="currentHeading"
          @change="setHeading($event)"
          :disabled="!editor"
        >
          <option value="paragraph">{{ $t('toolbar.paragraph') }}</option>
          <option value="1">{{ $t('toolbar.heading1') }}</option>
          <option value="2">{{ $t('toolbar.heading2') }}</option>
          <option value="3">{{ $t('toolbar.heading3') }}</option>
          <option value="4">{{ $t('toolbar.heading4') }}</option>
          <option value="5">{{ $t('toolbar.heading5') }}</option>
          <option value="6">{{ $t('toolbar.heading6') }}</option>
        </select>
      </el-tooltip>
    </div>

    <div class="toolbar-divider"></div>

    <!-- List buttons -->
    <div class="toolbar-group">
      <el-tooltip :content="$t('toolbar.bulletList')" placement="bottom">
        <button
          class="toolbar-btn"
          :class="{ 'is-active': editor?.isActive('bulletList') }"
          @click="editor?.chain().focus().toggleBulletList().run()"
          :disabled="!editor"
        >
          <svg viewBox="0 0 24 24" width="18" height="18">
            <path fill="currentColor" d="M7,5H21V7H7V5M7,13V11H21V13H7M4,4.5A1.5,1.5 0 0,1 5.5,6A1.5,1.5 0 0,1 4,7.5A1.5,1.5 0 0,1 2.5,6A1.5,1.5 0 0,1 4,4.5M4,10.5A1.5,1.5 0 0,1 5.5,12A1.5,1.5 0 0,1 4,13.5A1.5,1.5 0 0,1 2.5,12A1.5,1.5 0 0,1 4,10.5M7,19V17H21V19H7M4,16.5A1.5,1.5 0 0,1 5.5,18A1.5,1.5 0 0,1 4,19.5A1.5,1.5 0 0,1 2.5,18A1.5,1.5 0 0,1 4,16.5Z" />
          </svg>
        </button>
      </el-tooltip>

      <el-tooltip :content="$t('toolbar.orderedList')" placement="bottom">
        <button
          class="toolbar-btn"
          :class="{ 'is-active': editor?.isActive('orderedList') }"
          @click="editor?.chain().focus().toggleOrderedList().run()"
          :disabled="!editor"
        >
          <svg viewBox="0 0 24 24" width="18" height="18">
            <path fill="currentColor" d="M7,13V11H21V13H7M7,19V17H21V19H7M7,7V5H21V7H7M3,8V5H2V4H4V8H3M2,17V16H5V20H2V19H4V18.5H3V17.5H4V17H2M4.25,10A0.75,0.75 0 0,1 5,10.75C5,10.95 4.92,11.14 4.79,11.27L3.12,13H5V14H2V13.08L4,11H2V10H4.25Z" />
          </svg>
        </button>
      </el-tooltip>

      <el-tooltip :content="$t('toolbar.taskList')" placement="bottom">
        <button
          class="toolbar-btn"
          :class="{ 'is-active': editor?.isActive('taskList') }"
          @click="editor?.chain().focus().toggleTaskList().run()"
          :disabled="!editor"
        >
          <svg viewBox="0 0 24 24" width="18" height="18">
            <path fill="currentColor" d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" />
          </svg>
        </button>
      </el-tooltip>
    </div>

    <div class="toolbar-divider"></div>

    <!-- Other format buttons -->
    <div class="toolbar-group">
      <el-tooltip :content="$t('toolbar.blockquote')" placement="bottom">
        <button
          class="toolbar-btn"
          :class="{ 'is-active': editor?.isActive('blockquote') }"
          @click="editor?.chain().focus().toggleBlockquote().run()"
          :disabled="!editor"
        >
          <svg viewBox="0 0 24 24" width="18" height="18">
            <path fill="currentColor" d="M14,17H17L19,13V7H13V13H16M6,17H9L11,13V7H5V13H8L6,17Z" />
          </svg>
        </button>
      </el-tooltip>

      <el-tooltip :content="$t('toolbar.codeBlock')" placement="bottom">
        <button
          class="toolbar-btn"
          :class="{ 'is-active': editor?.isActive('codeBlock') }"
          @click="editor?.chain().focus().toggleCodeBlock().run()"
          :disabled="!editor"
        >
          <svg viewBox="0 0 24 24" width="18" height="18">
            <path fill="currentColor" d="M14.6,16.6L19.2,12L14.6,7.4L16,6L22,12L16,18L14.6,16.6M9.4,16.6L4.8,12L9.4,7.4L8,6L2,12L8,18L9.4,16.6Z" />
          </svg>
        </button>
      </el-tooltip>

      <el-tooltip :content="$t('toolbar.link')" placement="bottom">
        <button
          class="toolbar-btn"
          :class="{ 'is-active': editor?.isActive('link') }"
          @click="toggleLink"
          :disabled="!editor"
        >
          <svg viewBox="0 0 24 24" width="18" height="18">
            <path fill="currentColor" d="M3.9,12C3.9,10.29 5.29,8.9 7,8.9H11V7H7A5,5 0 0,0 2,12A5,5 0 0,0 7,17H11V15.1H7C5.29,15.1 3.9,13.71 3.9,12M8,13H16V11H8V13M17,7H13V8.9H17C18.71,8.9 20.1,10.29 20.1,12C20.1,13.71 18.71,15.1 17,15.1H13V17H17A5,5 0 0,0 22,12A5,5 0 0,0 17,7Z" />
          </svg>
        </button>
      </el-tooltip>

      <el-tooltip :content="$t('toolbar.table')" placement="bottom">
        <button
          class="toolbar-btn"
          :class="{ 'is-active': editor?.isActive('table') }"
          @click="insertTable"
          :disabled="!editor"
        >
          <svg viewBox="0 0 24 24" width="18" height="18">
            <path fill="currentColor" d="M5,4H19A2,2 0 0,1 21,6V18A2,2 0 0,1 19,20H5A2,2 0 0,1 3,18V6A2,2 0 0,1 5,4M5,8V12H11V8H5M13,8V12H19V8H13M5,14V18H11V14H5M13,14V18H19V14H13Z" />
          </svg>
        </button>
      </el-tooltip>

      <el-tooltip :content="$t('toolbar.horizontalRule')" placement="bottom">
        <button
          class="toolbar-btn"
          @click="editor?.chain().focus().setHorizontalRule().run()"
          :disabled="!editor"
        >
          <svg viewBox="0 0 24 24" width="18" height="18">
            <path fill="currentColor" d="M19,13H5V11H19V13Z" />
          </svg>
        </button>
      </el-tooltip>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Editor } from '@tiptap/vue-3';

interface Props {
  editor: Editor | null;
  dark?: boolean;
}

defineOptions({
  name: 'TipTapToolbar'
});

const props = withDefaults(defineProps<Props>(), {
  editor: null,
  dark: false
});

// Compute current heading level
const currentHeading = computed(() => {
  if (!props.editor) return 'paragraph';
  
  for (let level = 1; level <= 6; level++) {
    if (props.editor.isActive('heading', { level })) {
      return String(level);
    }
  }
  
  return 'paragraph';
});

// Set heading level
const setHeading = (event: Event) => {
  const target = event.target as HTMLSelectElement;
  const value = target.value;
  
  if (!props.editor) return;
  
  if (value === 'paragraph') {
    props.editor.chain().focus().setParagraph().run();
  } else {
    const level = parseInt(value, 10) as 1 | 2 | 3 | 4 | 5 | 6;
    props.editor.chain().focus().setHeading({ level }).run();
  }
};

// Toggle link
const toggleLink = () => {
  if (!props.editor) return;
  
  // If already a link, remove it
  if (props.editor.isActive('link')) {
    props.editor.chain().focus().unsetLink().run();
    return;
  }
  
  // Otherwise, prompt for URL
  const url = window.prompt('Enter URL:');
  
  if (url) {
    props.editor
      .chain()
      .focus()
      .setLink({ href: url })
      .run();
  }
};

// Insert table
const insertTable = () => {
  if (!props.editor) return;
  
  props.editor
    .chain()
    .focus()
    .insertTable({ rows: 3, cols: 3, withHeaderRow: true })
    .run();
};
</script>

<style lang="scss" scoped>
.editor-toolbar {
  @apply flex items-center gap-1 px-2 py-1.5 bg-gray-50 border-b border-gray-200 flex-wrap;
  transition: background-color 0.3s ease, border-color 0.3s ease;

  &.dark-theme {
    @apply bg-[#1a1a1a] border-[#727377];

    .toolbar-btn {
      @apply text-[#CECFD0];
      transition: background-color 0.3s ease, color 0.3s ease;

      &:hover:not(:disabled) {
        @apply bg-[#282d32];
      }

      &.is-active {
        background-color: var(--categories-bg-tab-active);
        color: var(--el-color-primary);
      }

      &:disabled {
        @apply text-[#727377] cursor-not-allowed opacity-50;
      }
    }

    .toolbar-select {
      @apply bg-[#1a1a1a] text-[#CECFD0] border-[#727377];
      transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease;

      &:hover:not(:disabled) {
        @apply bg-[#282d32];
      }

      &:focus {
        @apply ring-opacity-50;
        ring-color: var(--el-color-primary);
      }

      &:disabled {
        @apply text-[#727377] cursor-not-allowed opacity-50;
      }

      option {
        @apply bg-[#1a1a1a] text-[#CECFD0];
      }
    }

    .toolbar-divider {
      @apply bg-[#727377];
      transition: background-color 0.3s ease;
    }
  }
}

.toolbar-group {
  @apply flex items-center gap-0.5;
}

.toolbar-btn {
  @apply flex items-center justify-center w-8 h-8 rounded transition-all duration-200 cursor-pointer border-none bg-transparent text-gray-700;

  &:hover:not(:disabled) {
    @apply bg-gray-200 transform scale-105;
  }

  &.is-active {
    background-color: var(--categories-bg-tab-active);
    color: var(--el-color-primary);
  }

  &:active:not(:disabled) {
    @apply transform scale-95;
  }

  &:disabled {
    @apply text-gray-400 cursor-not-allowed opacity-50;
  }

  svg {
    @apply pointer-events-none;
    transition: transform 0.2s ease;
  }

  &:hover:not(:disabled) svg {
    @apply transform scale-110;
  }
}

.toolbar-select {
  @apply h-8 px-2 rounded border border-gray-300 bg-white text-sm cursor-pointer;
  transition: background-color 0.3s ease, border-color 0.3s ease, color 0.3s ease;

  &:hover:not(:disabled) {
    @apply bg-gray-100;
  }

  &:focus {
    @apply outline-none ring-2 ring-opacity-50;
    ring-color: var(--el-color-primary);
  }

  &:disabled {
    @apply text-gray-400 cursor-not-allowed opacity-50;
  }

  option {
    @apply bg-white text-gray-900;
  }
}

.toolbar-divider {
  @apply w-px h-6 bg-gray-300 mx-1;
  transition: background-color 0.3s ease;
}

// Responsive layout - collapse on narrow screens
@media (max-width: 768px) {
  .editor-toolbar {
    @apply gap-0.5 px-1 py-1;
  }

  .toolbar-btn {
    @apply w-7 h-7;
  }

  .toolbar-select {
    @apply text-xs px-1;
  }

  .toolbar-divider {
    @apply mx-0.5;
  }
}

// Smooth animations for toolbar items
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-5px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.toolbar-group {
  animation: fadeIn 0.3s ease-out;
}
</style>
