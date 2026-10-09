<template>
  <teleport to="body">
    <div
      v-if="visible"
      ref="menuRef"
      class="context-menu"
      :class="{ 'dark-theme': dark }"
      :style="menuStyle"
      @contextmenu.prevent
    >
      <div
        v-if="isCodeBlockActive && !isSourceMode"
        class="menu-item"
        @click="formatCodeBlock"
      >
        <span>{{ $t('codeEditor.formatCode') }}</span>
      </div>

      <div v-if="isCodeBlockActive && !isSourceMode" class="menu-divider"></div>

      <!-- 新增链接（内部链接） -->
      <div class="menu-item" @click="handleAddLink">
        <UiLink class="menu-icon" />
        <span>{{ $t('contextMenu.addLink') }}</span>
        <span class="menu-shortcut">[[]]</span>
      </div>

      <!-- 新增外部链接 -->
      <div class="menu-item" @click="handleAddExternalLink">
        <UiExternalLink class="menu-icon" />
        <span>{{ $t('contextMenu.addExternalLink') }}</span>
        <span class="menu-shortcut">[]()</span>
      </div>

      <div class="menu-divider"></div>

      <!-- 文本格式子菜单 -->
      <div
        class="menu-item has-submenu"
        :class="{ disabled: isMarkdownSyntaxDisabled }"
        @mouseenter="showSubmenu('textFormat', $event)"
        @mouseleave="handleMenuMouseLeave"
      >
        <UiType class="menu-icon" />
        <span>{{ $t('contextMenu.textFormat') }}</span>
        <UiChevronRight class="menu-arrow" />
      </div>

      <!-- 段落设置子菜单 -->
      <div
        class="menu-item has-submenu"
        :class="{ disabled: isMarkdownSyntaxDisabled }"
        @mouseenter="showSubmenu('paragraphSettings', $event)"
        @mouseleave="handleMenuMouseLeave"
      >
        <UiPilcrow class="menu-icon" />
        <span>{{ $t('contextMenu.paragraphSettings') }}</span>
        <UiChevronRight class="menu-arrow" />
      </div>

      <!-- 插入子菜单 -->
      <div
        class="menu-item has-submenu"
        :class="{ disabled: isMarkdownSyntaxDisabled }"
        @mouseenter="showSubmenu('insert', $event)"
        @mouseleave="handleMenuMouseLeave"
      >
        <UiPlus class="menu-icon" />
        <span>{{ $t('contextMenu.insert') }}</span>
        <UiChevronRight class="menu-arrow" />
      </div>

      <div class="menu-divider"></div>

      <!-- 剪贴板操作 -->
      <div class="menu-item disabled">
        <UiScissors class="menu-icon" />
        <span>{{ $t('contextMenu.cut') }}</span>
      </div>

      <div class="menu-item disabled">
        <UiCopy class="menu-icon" />
        <span>{{ $t('contextMenu.copy') }}</span>
      </div>

      <div class="menu-item" @click="handlePaste">
        <UiClipboardPaste class="menu-icon" />
        <span>{{ $t('contextMenu.paste') }}</span>
      </div>

      <div class="menu-item" @click="handlePasteAsPlainText">
        <UiClipboardType class="menu-icon" />
        <span>{{ $t('contextMenu.pasteAsPlainText') }}</span>
      </div>

      <div class="menu-item" @click="handleSelectAll">
        <UiSquareDashed class="menu-icon" />
        <span>{{ $t('contextMenu.selectAll') }}</span>
      </div>

      <!-- 子菜单 -->
      <teleport to="body">
        <div
          v-if="activeSubmenu"
          ref="submenuRef"
          class="context-menu submenu"
          :class="{ 'dark-theme': dark }"
          :style="submenuStyle"
          @mouseenter="keepSubmenuOpen"
          @mouseleave="hideSubmenu"
        >
          <template v-if="activeSubmenu === 'textFormat'">
            <div
              class="menu-item"
              :class="[
                { active: editor?.isActive('bold') },
                markdownDisabledClass
              ]"
              @click="toggleBold"
            >
              <span>{{ $t('contextMenu.bold') }}</span>
              <span class="menu-shortcut">**</span>
            </div>
            <div
              class="menu-item"
              :class="[
                { active: editor?.isActive('italic') },
                markdownDisabledClass
              ]"
              @click="toggleItalic"
            >
              <span>{{ $t('contextMenu.italic') }}</span>
              <span class="menu-shortcut">*</span>
            </div>
            <div
              class="menu-item"
              :class="[
                { active: editor?.isActive('strike') },
                markdownDisabledClass
              ]"
              @click="toggleStrike"
            >
              <span>{{ $t('contextMenu.strikethrough') }}</span>
              <span class="menu-shortcut">~~</span>
            </div>
            <div
              class="menu-item"
              :class="[
                { active: editor?.isActive('code') },
                markdownDisabledClass
              ]"
              @click="toggleCode"
            >
              <span>{{ $t('contextMenu.code') }}</span>
              <span class="menu-shortcut">`</span>
            </div>
            <div class="menu-divider"></div>
            <div
              class="menu-item"
              :class="markdownDisabledClass"
              @click="clearFormat"
            >
              <span>{{ $t('contextMenu.clearFormat') }}</span>
            </div>
          </template>

          <template v-else-if="activeSubmenu === 'paragraphSettings'">
            <div
              class="menu-item"
              :class="[
                { active: editor?.isActive('bulletList') },
                markdownDisabledClass
              ]"
              @click="toggleBulletList"
            >
              <span>{{ $t('contextMenu.bulletList') }}</span>
              <span class="menu-shortcut">-</span>
            </div>
            <div
              class="menu-item"
              :class="[
                { active: editor?.isActive('orderedList') },
                markdownDisabledClass
              ]"
              @click="toggleOrderedList"
            >
              <span>{{ $t('contextMenu.orderedList') }}</span>
              <span class="menu-shortcut">1.</span>
            </div>
            <div
              class="menu-item"
              :class="[
                { active: editor?.isActive('taskList') },
                markdownDisabledClass
              ]"
              @click="toggleTaskList"
            >
              <span>{{ $t('contextMenu.taskList') }}</span>
              <span class="menu-shortcut">- [ ]</span>
            </div>
            <div class="menu-divider"></div>
            <div
              class="menu-item"
              :class="[
                { active: editor?.isActive('heading', { level: 1 }) },
                markdownDisabledClass
              ]"
              @click="setHeading(1)"
            >
              <span>H₁ {{ $t('contextMenu.heading1') }}</span>
              <span class="menu-shortcut">#</span>
            </div>
            <div
              class="menu-item"
              :class="[
                { active: editor?.isActive('heading', { level: 2 }) },
                markdownDisabledClass
              ]"
              @click="setHeading(2)"
            >
              <span>H₂ {{ $t('contextMenu.heading2') }}</span>
              <span class="menu-shortcut">##</span>
            </div>
            <div
              class="menu-item"
              :class="[
                { active: editor?.isActive('heading', { level: 3 }) },
                markdownDisabledClass
              ]"
              @click="setHeading(3)"
            >
              <span>H₃ {{ $t('contextMenu.heading3') }}</span>
              <span class="menu-shortcut">###</span>
            </div>
            <div
              class="menu-item"
              :class="[
                { active: editor?.isActive('heading', { level: 4 }) },
                markdownDisabledClass
              ]"
              @click="setHeading(4)"
            >
              <span>H₄ {{ $t('contextMenu.heading4') }}</span>
              <span class="menu-shortcut">####</span>
            </div>
            <div
              class="menu-item"
              :class="[
                { active: editor?.isActive('heading', { level: 5 }) },
                markdownDisabledClass
              ]"
              @click="setHeading(5)"
            >
              <span>H₅ {{ $t('contextMenu.heading5') }}</span>
              <span class="menu-shortcut">#####</span>
            </div>
            <div
              class="menu-item"
              :class="[
                { active: editor?.isActive('heading', { level: 6 }) },
                markdownDisabledClass
              ]"
              @click="setHeading(6)"
            >
              <span>H₆ {{ $t('contextMenu.heading6') }}</span>
              <span class="menu-shortcut">######</span>
            </div>
            <div
              class="menu-item"
              :class="[
                { active: editor?.isActive('paragraph') },
                markdownDisabledClass
              ]"
              @click="setParagraph"
            >
              <span>≡ {{ $t('contextMenu.paragraph') }}</span>
              <UiCheck
                v-if="editor?.isActive('paragraph')"
                class="check-mark"
                width="16"
                height="16"
              />
            </div>
            <div class="menu-divider"></div>
            <div
              class="menu-item"
              :class="[
                { active: editor?.isActive('blockquote') },
                markdownDisabledClass
              ]"
              @click="toggleBlockquote"
            >
              <span>❝❞ {{ $t('contextMenu.blockquote') }}</span>
              <span class="menu-shortcut">></span>
            </div>
          </template>

          <template v-else-if="activeSubmenu === 'insert'">
            <div
              class="menu-item"
              :class="markdownDisabledClass"
              @click="requestInsertTable"
            >
              <span>⊞ {{ $t('contextMenu.table') }}</span>
            </div>
            <div class="menu-divider"></div>
            <div
              class="menu-item"
              :class="markdownDisabledClass"
              @click="insertCodeBlock"
            >
              <span>&lt;&gt; {{ $t('contextMenu.codeBlock') }}</span>
              <span class="menu-shortcut">```</span>
            </div>
            <div
              class="menu-item"
              :class="markdownDisabledClass"
              @click="insertHorizontalRule"
            >
              <span>— {{ $t('contextMenu.horizontalRule') }}</span>
              <span class="menu-shortcut">---</span>
            </div>
          </template>
        </div>
      </teleport>
    </div>
  </teleport>
</template>

<script setup lang="ts">
import UiCheck from '~icons/lucide/check';
import UiSquareDashed from '~icons/lucide/square-dashed';
import UiClipboardType from '~icons/lucide/clipboard-type';
import UiClipboardPaste from '~icons/lucide/clipboard-paste';
import UiCopy from '~icons/lucide/copy';
import UiScissors from '~icons/lucide/scissors';
import UiChevronRight from '~icons/lucide/chevron-right';
import UiPlus from '~icons/lucide/plus';
import UiPilcrow from '~icons/lucide/pilcrow';
import UiType from '~icons/lucide/type';
import UiExternalLink from '~icons/lucide/external-link';
import UiLink from '~icons/lucide/link';
import type { Editor } from '@tiptap/vue-3';
import { useI18n } from 'vue-i18n';
import modal from '@/utils/modal';
import { useContextMenuCommands } from './composables/useContextMenuCommands';
import type { SourceEditorExpose } from './types';

interface Props {
  editor: Editor | null;
  dark?: boolean;
  viewMode?: 'reading' | 'preview' | 'source';
  sourceEditorRef?: SourceEditorExpose | null; // 源码编辑器的引用
}

defineOptions({
  name: 'TipTapContextMenu'
});

const props = withDefaults(defineProps<Props>(), {
  editor: null,
  dark: false,
  viewMode: 'preview',
  sourceEditorRef: null
});

const emit = defineEmits<{
  'request-insert-table': [];
}>();

const { t: $t } = useI18n();

const visible = ref(false);
const menuRef = ref<HTMLElement | null>(null);
const submenuRef = ref<HTMLElement | null>(null);
const activeSubmenu = ref<string | null>(null);
const menuPosition = ref({ x: 0, y: 0 });
const submenuPosition = ref({ x: 0, y: 0 });
let submenuTimer: ReturnType<typeof setTimeout> | null = null;

// 是否在源码模式
const isSourceMode = computed(() => props.viewMode === 'source');
const isCodeBlockActive = ref(false);
const isMarkdownSyntaxDisabled = computed(
  () => isCodeBlockActive.value && !isSourceMode.value
);
const markdownDisabledClass = computed(() => ({
  disabled: isMarkdownSyntaxDisabled.value
}));

// 菜单样式
const menuStyle = computed(() => ({
  left: `${menuPosition.value.x}px`,
  top: `${menuPosition.value.y}px`
}));

// 子菜单样式
const submenuStyle = computed(() => ({
  left: `${submenuPosition.value.x}px`,
  top: `${submenuPosition.value.y}px`
}));

// 显示菜单
const show = (event: MouseEvent) => {
  event.preventDefault();
  event.stopPropagation();

  if (!isSourceMode.value) {
    const target = event.target as HTMLElement | null;
    const editorView = props.editor?.view;
    const isCodeBlockTarget = target?.closest('.code-block-wrapper, pre, code');
    const position = editorView?.posAtCoords({
      left: event.clientX,
      top: event.clientY
    });

    if (isCodeBlockTarget && position) {
      props.editor?.commands.setTextSelection(position.pos);
    }
  }

  // Editor 实例本身不是 Vue 响应式对象，每次打开菜单时重新读取当前选区状态。
  isCodeBlockActive.value = props.editor?.isActive('codeBlock') ?? false;

  const x = event.clientX;
  const y = event.clientY;

  // 设置初始位置
  menuPosition.value = { x, y };
  visible.value = true;

  // 下一帧调整位置以防止超出屏幕
  nextTick(() => {
    if (!menuRef.value) return;

    const menuRect = menuRef.value.getBoundingClientRect();
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const padding = 10; // 边距

    let adjustedX = x;
    let adjustedY = y;

    // 调整 X 位置 - 如果右侧空间不足，向左调整
    if (x + menuRect.width > windowWidth - padding) {
      // 尝试向左对齐
      adjustedX = windowWidth - menuRect.width - padding;

      // 如果还是超出左边界，就贴左边
      if (adjustedX < padding) {
        adjustedX = padding;
      }
    }

    // 调整 Y 位置 - 如果下方空间不足，向上调整
    if (y + menuRect.height > windowHeight - padding) {
      // 尝试向上对齐
      adjustedY = windowHeight - menuRect.height - padding;

      // 如果还是超出上边界，就贴上边
      if (adjustedY < padding) {
        adjustedY = padding;
      }
    }

    // 确保不超出左上边界
    adjustedX = Math.max(padding, adjustedX);
    adjustedY = Math.max(padding, adjustedY);

    menuPosition.value = { x: adjustedX, y: adjustedY };
  });
};

// 隐藏菜单
const hide = () => {
  visible.value = false;
  activeSubmenu.value = null;
  if (submenuTimer) {
    clearTimeout(submenuTimer);
    submenuTimer = null;
  }
};

// 显示子菜单
const showSubmenu = (submenu: string, event: MouseEvent) => {
  if (submenuTimer) {
    clearTimeout(submenuTimer);
    submenuTimer = null;
  }

  activeSubmenu.value = submenu;

  nextTick(() => {
    if (!menuRef.value || !submenuRef.value) return;

    const menuRect = menuRef.value.getBoundingClientRect();
    const triggerRect = (
      event.currentTarget as HTMLElement | null
    )?.getBoundingClientRect();
    const submenuRect = submenuRef.value.getBoundingClientRect();
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const padding = 10;
    const gap = 0; // 主菜单和子菜单之间不留缝隙，避免鼠标移动时丢失 hover

    let x = 0;
    let y = triggerRect ? triggerRect.top : menuRect.top;

    // 默认尝试在右侧显示
    const rightX = menuRect.right + gap;
    const leftX = menuRect.left - submenuRect.width - gap;

    // 判断右侧是否有足够空间
    if (rightX + submenuRect.width <= windowWidth - padding) {
      // 右侧有空间
      x = rightX;
    } else if (leftX >= padding) {
      // 右侧没空间，但左侧有空间
      x = leftX;
    } else {
      // 两侧都没空间，选择空间较大的一侧
      const rightSpace = windowWidth - rightX;
      const leftSpace = menuRect.left;

      if (rightSpace > leftSpace) {
        // 右侧空间更大，贴右边
        x = windowWidth - submenuRect.width - padding;
      } else {
        // 左侧空间更大，贴左边
        x = padding;
      }
    }

    // 调整 Y 位置，确保不超出底部
    if (y + submenuRect.height > windowHeight - padding) {
      y = windowHeight - submenuRect.height - padding;
    }

    // 确保不超出顶部
    if (y < padding) {
      y = padding;
    }

    submenuPosition.value = { x, y };
  });
};

// 隐藏子菜单（延迟）
const hideSubmenu = () => {
  submenuTimer = setTimeout(() => {
    activeSubmenu.value = null;
  }, 150);
};

const handleMenuMouseLeave = (event: MouseEvent) => {
  const relatedTarget = event.relatedTarget as Node | null;
  if (
    submenuRef.value &&
    relatedTarget &&
    submenuRef.value.contains(relatedTarget)
  ) {
    return;
  }
  hideSubmenu();
};

// 保持子菜单打开
const keepSubmenuOpen = () => {
  if (submenuTimer) {
    clearTimeout(submenuTimer);
    submenuTimer = null;
  }
};

const {
  toggleBold,
  toggleItalic,
  toggleStrike,
  toggleCode,
  clearFormat,
  toggleBulletList,
  toggleOrderedList,
  toggleTaskList,
  setHeading,
  setParagraph,
  toggleBlockquote,
  insertCodeBlock,
  formatCodeBlock,
  insertHorizontalRule,
  handleAddLink,
  handleAddExternalLink,
  handlePaste,
  handlePasteAsPlainText,
  handleSelectAll
} = useContextMenuCommands({
  getEditor: () => props.editor,
  getSourceEditor: () => props.sourceEditorRef,
  getViewMode: () => props.viewMode,
  isMarkdownSyntaxDisabled: () => isMarkdownSyntaxDisabled.value,
  hide,
  translate: $t,
  notify: modal.msg
});

const requestInsertTable = () => {
  if (isMarkdownSyntaxDisabled.value) return;
  hide();
  emit('request-insert-table');
};

// 键盘事件
const handleKeydown = (event: KeyboardEvent) => {
  if (event.key === 'Escape') {
    hide();
  }
};

// 点击外部关闭菜单
const handleClickOutside = (event: MouseEvent) => {
  if (
    visible.value &&
    menuRef.value &&
    !menuRef.value.contains(event.target as Node)
  ) {
    if (submenuRef.value && submenuRef.value.contains(event.target as Node)) {
      return;
    }
    hide();
  }
};

// 生命周期
onMounted(() => {
  document.addEventListener('click', handleClickOutside);
  document.addEventListener('keydown', handleKeydown);
});

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside);
  document.removeEventListener('keydown', handleKeydown);
  if (submenuTimer) {
    clearTimeout(submenuTimer);
  }
});

// 暴露方法
defineExpose({
  show,
  hide
});
</script>

<style lang="scss" scoped>
.context-menu {
  @apply fixed z-[9999] min-w-[200px] max-w-[280px] border rounded-lg p-1 select-none;

  background-color: var(--panel-bg);
  border-color: var(--panel-border);
  box-shadow:
    0 6px 16px rgb(0 0 0 / 12%),
    0 2px 6px rgb(0 0 0 / 8%);
  transition:
    background-color 0.2s ease,
    border-color 0.2s ease;
  animation: fadeIn 0.15s cubic-bezier(0.16, 1, 0.3, 1);

  &.dark-theme {
    background-color: var(--panel-bg);
    border-color: var(--panel-border);
    box-shadow:
      0 6px 16px rgb(0 0 0 / 50%),
      0 2px 6px rgb(0 0 0 / 30%);

    .menu-item {
      color: var(--panel-text);

      &:hover:not(.disabled) {
        color: var(--panel-text);
        background: rgb(93 109 253 / 12%);
      }

      &.active {
        color: var(--el-color-primary);
        background: rgb(93 109 253 / 8%);
      }

      &.disabled {
        color: var(--panel-text-secondary);
        opacity: 0.5;
      }
    }

    .menu-divider {
      background-color: var(--panel-border);
    }

    .menu-arrow {
      color: var(--panel-text-secondary);
    }

    .menu-icon {
      color: var(--panel-text-secondary);
    }
  }

  &.submenu {
    animation: slideIn 0.12s cubic-bezier(0.16, 1, 0.3, 1);
  }
}

.menu-item {
  @apply flex items-center min-h-[32px] px-2.5 py-[5px] text-[13px] cursor-pointer relative rounded-[5px] gap-2;

  color: var(--panel-text);
  transition: all 0.15s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover:not(.disabled) {
    color: var(--panel-text);
    background: rgb(93 109 253 / 8%);
  }

  &.active {
    font-weight: 500;
    color: var(--el-color-primary);
    background: rgb(93 109 253 / 5%);
  }

  &.disabled {
    color: var(--panel-text-secondary);
    cursor: not-allowed;
    opacity: 0.5;

    &:hover {
      @apply bg-transparent;

      transform: none;
    }
  }

  &.has-submenu {
    @apply pr-1.5;
  }

  .menu-icon {
    @apply w-4 h-4 flex-shrink-0;

    color: var(--panel-text-secondary);
    transition: color 0.15s ease;
  }

  .menu-arrow {
    @apply ml-auto w-4 h-4 text-panel-text-secondary flex-shrink-0;

    transition: color 0.15s ease;
  }

  .check-mark {
    @apply ml-auto w-4 h-4 flex-shrink-0;

    color: var(--el-color-primary);
  }

  .menu-shortcut {
    @apply ml-auto px-1.5 py-px text-[10px] flex-shrink-0 rounded font-medium;

    font-family: 'SF Mono', Monaco, Consolas, monospace;
    color: var(--panel-text-secondary);
    letter-spacing: 0.3px;
    background: rgb(0 0 0 / 4%);
  }

  span {
    @apply flex-1 whitespace-nowrap overflow-hidden text-ellipsis;
  }
}

.menu-divider {
  @apply h-px bg-panel mx-1.5 my-1;

  transition: background-color 0.2s ease;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: scale(0.95) translateY(-4px);
  }

  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateX(-6px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@media (width <= 768px) {
  .context-menu {
    @apply min-w-[180px];

    max-width: calc(100vw - 24px);
  }

  .menu-item {
    @apply min-h-[36px] px-2.5 py-1.5 text-sm;
  }
}
</style>
