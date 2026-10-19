<template>
  <teleport to="body">
    <div
      v-if="visible"
      ref="menuRef"
      class="context-menu"
      :class="{ 'dark-theme': dark }"
      :style="menuStyle"
      role="menu"
      @contextmenu.prevent
    >
      <template v-if="image">
        <button
          type="button"
          role="menuitem"
          class="menu-item has-submenu w-full text-left"
          aria-haspopup="menu"
          :aria-expanded="activeSubmenu === 'imageScale'"
          @click="showSubmenu('imageScale', $event)"
          @mouseenter="showSubmenu('imageScale', $event)"
          @mouseleave="handleMenuMouseLeave"
        >
          <UiImage class="menu-icon" />
          <span>{{ $t('settings.attachment.imageScale') }}</span>
          <span class="menu-shortcut">{{ image.scale }}%</span>
          <UiChevronRight class="menu-arrow" />
        </button>
        <button
          type="button"
          role="menuitemcheckbox"
          class="menu-item w-full text-left"
          :aria-checked="image.allImages"
          :title="$t('settings.attachment.applyToAllImages')"
          @click="emit('image-scope-change', !image.allImages)"
        >
          <UiImages class="menu-icon" />
          <span>{{ $t('settings.attachment.allImagesShort') }}</span>
          <UiCheck v-if="image.allImages" class="check-mark" />
        </button>
        <div class="menu-divider"></div>
        <button
          type="button"
          role="menuitem"
          class="menu-item w-full text-left"
          @click="imageAction('location')"
        >
          <UiFolderOpen class="menu-icon" />
          <span>{{ $t('settings.attachment.openImageLocation') }}</span>
        </button>
        <button
          type="button"
          role="menuitem"
          class="menu-item w-full text-left"
          @click="imageAction('delete')"
        >
          <UiTrash class="menu-icon" />
          <span>{{ $t('settings.attachment.deleteImage') }}</span>
        </button>
      </template>
      <template v-else>
        <div
          v-if="isCodeBlockActive && !isSourceMode"
          class="menu-item"
          @click="formatCodeBlock"
        >
          <span>{{ $t('codeEditor.formatCode') }}</span>
        </div>

        <div
          v-if="isCodeBlockActive && !isSourceMode"
          class="menu-divider"
        ></div>

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
      </template>

      <!-- 子菜单 -->
      <teleport to="body">
        <div
          v-if="activeSubmenu"
          ref="submenuRef"
          class="context-menu submenu"
          :class="{ 'dark-theme': dark }"
          :style="submenuStyle"
          role="menu"
          @mouseenter="keepSubmenuOpen"
          @mouseleave="hideSubmenu"
        >
          <template v-if="activeSubmenu === 'imageScale' && image">
            <button
              v-for="scale in imageScales"
              :key="scale"
              type="button"
              role="menuitemradio"
              class="menu-item w-full text-left"
              :class="{ active: image.scale === scale }"
              :aria-checked="image.scale === scale"
              @click="selectImageScale(scale)"
            >
              <span>{{ scale }}%</span>
              <UiCheck v-if="image.scale === scale" class="check-mark" />
            </button>
            <div class="menu-divider"></div>
            <button
              type="button"
              role="menuitem"
              class="menu-item w-full text-left"
              @click="imageAction('custom')"
            >
              <span>{{ $t('settings.attachment.customImageScale') }}</span>
            </button>
          </template>
          <template v-else-if="activeSubmenu === 'textFormat'">
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
import UiImage from '~icons/lucide/image';
import UiImages from '~icons/lucide/images';
import UiFolderOpen from '~icons/lucide/folder-open';
import UiTrash from '~icons/lucide/trash-2';
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
import { useI18n } from 'vue-i18n';
import type { EditorMenuCommands } from './editorMenu';

interface Props {
  commands: EditorMenuCommands;
  isActive?: (name: string, attrs?: Record<string, unknown>) => boolean;
  dark?: boolean;
  viewMode?: 'reading' | 'preview' | 'source';
  image?: { scale: number; allImages: boolean };
}

defineOptions({
  name: 'EditorContextMenu'
});

const props = withDefaults(defineProps<Props>(), {
  isActive: () => false,
  dark: false,
  viewMode: 'preview'
});

const emit = defineEmits<{
  'request-insert-table': [];
  'image-scale': [scale: number];
  'image-scope-change': [allImages: boolean];
  'image-action': [action: 'custom' | 'location' | 'delete'];
}>();

const { t: $t } = useI18n();

const visible = ref(false);
const menuRef = ref<HTMLElement | null>(null);
const submenuRef = ref<HTMLElement | null>(null);
const activeSubmenu = ref<string | null>(null);
const menuPosition = ref({ x: 0, y: 0 });
const submenuPosition = ref({ x: 0, y: 0 });
let submenuTimer: ReturnType<typeof setTimeout> | null = null;
const imageScales = [25, 50, 75, 100, 125, 150, 200];

function selectImageScale(scale: number) {
  hide();
  emit('image-scale', scale);
}
function imageAction(action: 'custom' | 'location' | 'delete') {
  hide();
  emit('image-action', action);
}

// 是否在源码模式
const isSourceMode = computed(() => props.viewMode === 'source');
const isCodeBlockActive = ref(false);
const isMarkdownSyntaxDisabled = computed(
  () =>
    props.viewMode === 'reading' ||
    (isCodeBlockActive.value && !isSourceMode.value)
);
const editor = {
  isActive: (name: string, attrs?: Record<string, unknown>) =>
    props.isActive(name, attrs)
};
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
  hide();

  isCodeBlockActive.value = props.isActive('codeBlock');

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
const showSubmenu = (submenu: string, event: Event) => {
  if (submenuTimer) {
    clearTimeout(submenuTimer);
    submenuTimer = null;
  }

  activeSubmenu.value = submenu;
  const triggerRect = (
    event.currentTarget as HTMLElement | null
  )?.getBoundingClientRect();

  nextTick(() => {
    if (!menuRef.value || !submenuRef.value) return;

    const menuRect = menuRef.value.getBoundingClientRect();
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
} = Object.fromEntries(
  Object.keys(props.commands).map((key) => [
    key,
    (...args: unknown[]) => {
      hide();
      const command = props.commands[key as keyof EditorMenuCommands] as (
        ...values: unknown[]
      ) => void;
      return command(...args);
    }
  ])
) as unknown as EditorMenuCommands;

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
    @apply ml-auto px-1.5 py-px text-[10px] flex-none rounded font-medium;

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
