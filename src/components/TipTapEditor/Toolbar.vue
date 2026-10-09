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
          <UiBold width="18" height="18" />
        </button>
      </el-tooltip>

      <el-tooltip :content="$t('toolbar.italic')" placement="bottom">
        <button
          class="toolbar-btn"
          :class="{ 'is-active': editor?.isActive('italic') }"
          @click="editor?.chain().focus().toggleItalic().run()"
          :disabled="!editor"
        >
          <UiItalic width="18" height="18" />
        </button>
      </el-tooltip>

      <el-tooltip :content="$t('toolbar.strikethrough')" placement="bottom">
        <button
          class="toolbar-btn"
          :class="{ 'is-active': editor?.isActive('strike') }"
          @click="editor?.chain().focus().toggleStrike().run()"
          :disabled="!editor"
        >
          <UiStrikethrough width="18" height="18" />
        </button>
      </el-tooltip>

      <el-tooltip :content="$t('toolbar.code')" placement="bottom">
        <button
          class="toolbar-btn"
          :class="{ 'is-active': editor?.isActive('code') }"
          @click="editor?.chain().focus().toggleCode().run()"
          :disabled="!editor"
        >
          <UiBraces width="18" height="18" />
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
          @click="toggleBulletList"
          :disabled="!editor"
        >
          <UiList width="18" height="18" />
        </button>
      </el-tooltip>

      <el-tooltip :content="$t('toolbar.orderedList')" placement="bottom">
        <button
          class="toolbar-btn"
          :class="{ 'is-active': editor?.isActive('orderedList') }"
          @click="toggleOrderedList"
          :disabled="!editor"
        >
          <UiListOrdered width="18" height="18" />
        </button>
      </el-tooltip>

      <el-tooltip :content="$t('toolbar.taskList')" placement="bottom">
        <button
          class="toolbar-btn"
          :class="{ 'is-active': editor?.isActive('taskList') }"
          @click="toggleTaskList"
          :disabled="!editor"
        >
          <UiListChecks width="18" height="18" />
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
          <UiQuote width="18" height="18" />
        </button>
      </el-tooltip>

      <el-tooltip :content="$t('toolbar.codeBlock')" placement="bottom">
        <button
          class="toolbar-btn"
          :class="{ 'is-active': editor?.isActive('codeBlock') }"
          @click="toggleCodeBlockWithHighlight"
          :disabled="!editor"
        >
          <UiCode width="18" height="18" />
        </button>
      </el-tooltip>

      <el-tooltip :content="$t('toolbar.link')" placement="bottom">
        <button
          class="toolbar-btn"
          :class="{ 'is-active': editor?.isActive('link') }"
          @click="toggleLink"
          :disabled="!editor"
        >
          <UiLink width="18" height="18" />
        </button>
      </el-tooltip>

      <el-tooltip :content="$t('toolbar.table')" placement="bottom">
        <button
          class="toolbar-btn"
          :class="{ 'is-active': editor?.isActive('table') }"
          @click="insertTable"
          :disabled="!editor"
        >
          <UiTable2 width="18" height="18" />
        </button>
      </el-tooltip>

      <el-tooltip :content="$t('toolbar.horizontalRule')" placement="bottom">
        <button
          class="toolbar-btn"
          @click="editor?.chain().focus().setHorizontalRule().run()"
          :disabled="!editor"
        >
          <UiMinus width="18" height="18" />
        </button>
      </el-tooltip>
    </div>
  </div>
</template>

<script setup lang="ts">
import UiMinus from '~icons/lucide/minus';
import UiTable2 from '~icons/lucide/table-2';
import UiLink from '~icons/lucide/link';
import UiCode from '~icons/lucide/code';
import UiQuote from '~icons/lucide/quote';
import UiListChecks from '~icons/lucide/list-checks';
import UiListOrdered from '~icons/lucide/list-ordered';
import UiList from '~icons/lucide/list';
import UiBraces from '~icons/lucide/braces';
import UiStrikethrough from '~icons/lucide/strikethrough';
import UiItalic from '~icons/lucide/italic';
import UiBold from '~icons/lucide/bold';
import type { Editor } from '@tiptap/vue-3';
import {
  toggleCodeBlockForSelection,
  toggleListForSelection
} from './utils/markdownCommands';

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
    props.editor.chain().focus().setLink({ href: url }).run();
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

const toggleBulletList = () => {
  if (!props.editor) return;
  toggleListForSelection(props.editor, 'bulletList');
};

const toggleOrderedList = () => {
  if (!props.editor) return;
  toggleListForSelection(props.editor, 'orderedList');
};

const toggleTaskList = () => {
  if (!props.editor) return;
  toggleListForSelection(props.editor, 'taskList');
};

// Toggle code block with highlight support
const toggleCodeBlockWithHighlight = () => {
  if (!props.editor) return;
  toggleCodeBlockForSelection(props.editor);
};
</script>

<style lang="scss" scoped>
.editor-toolbar {
  @apply flex items-center gap-1 px-2 py-1.5 bg-content border-b border-panel flex-wrap;

  transition:
    background-color 0.3s ease,
    border-color 0.3s ease;

  &.dark-theme {
    @apply bg-[#1a1a1a] border-[#727377];

    .toolbar-btn {
      @apply text-[#CECFD0];

      transition:
        background-color 0.3s ease,
        color 0.3s ease;

      &:hover:not(:disabled) {
        @apply bg-[#282d32];
      }

      &.is-active {
        color: var(--el-color-primary);
        background-color: var(--categories-bg-tab-active);
      }

      &:disabled {
        @apply text-[#727377] cursor-not-allowed opacity-50;
      }
    }

    .toolbar-select {
      @apply bg-[#1a1a1a] text-[#CECFD0] border-[#727377];

      transition:
        background-color 0.3s ease,
        color 0.3s ease,
        border-color 0.3s ease;

      &:hover:not(:disabled) {
        @apply bg-[#282d32];
      }

      &:focus {
        @apply ring-opacity-50;

        --tw-ring-color: var(--el-color-primary);
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

  animation: fadeIn 0.3s ease-out;
}

.toolbar-btn {
  @apply flex items-center justify-center w-8 h-8 rounded transition-all duration-200 cursor-pointer border-none bg-transparent text-panel;

  &:hover:not(:disabled) {
    @apply bg-panel-hover-bg transform scale-105;
  }

  &.is-active {
    color: var(--el-color-primary);
    background-color: var(--categories-bg-tab-active);
  }

  &:active:not(:disabled) {
    @apply transform scale-95;
  }

  &:disabled {
    @apply text-panel-text-secondary cursor-not-allowed opacity-50;
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
  @apply h-8 px-2 rounded border border-panel bg-panel text-sm cursor-pointer;

  transition:
    background-color 0.3s ease,
    border-color 0.3s ease,
    color 0.3s ease;

  &:hover:not(:disabled) {
    @apply bg-content;
  }

  &:focus {
    @apply outline-none ring-2 ring-opacity-50;

    --tw-ring-color: var(--el-color-primary);
  }

  &:disabled {
    @apply text-panel-text-secondary cursor-not-allowed opacity-50;
  }

  option {
    @apply bg-panel text-panel;
  }
}

.toolbar-divider {
  @apply w-px h-6 bg-panel mx-1;

  transition: background-color 0.3s ease;
}

// Responsive layout - collapse on narrow screens
@media (width <= 768px) {
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
</style>
