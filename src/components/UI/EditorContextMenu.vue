<template>
  <teleport to="body">
    <ContextMenuSurface
      v-if="visible"
      ref="menuRef"
      class="z-50"
      :style="menuStyle"
      @contextmenu.prevent
    >
      <template v-if="image">
        <ContextMenuItem @click="imageAction('copy')">
          <UiCopy />
          <span>{{ $t('contextMenu.copyImage') }}</span>
        </ContextMenuItem>
        <template v-if="!image.readOnly">
          <ContextMenuItem
            aria-haspopup="menu"
            :aria-expanded="activeSubmenu === 'imageScale'"
            @click="showSubmenu('imageScale', $event)"
            @mouseenter="showSubmenu('imageScale', $event)"
            @mouseleave="handleMenuMouseLeave"
          >
            <UiImage />
            <span>
              {{ $t('settings.attachment.imageScale') }}
            </span>
            <kbd class="context-menu-shortcut">{{ image.scale }}%</kbd>
            <UiChevronRight class="context-menu-arrow" />
          </ContextMenuItem>
          <ContextMenuItem
            role="menuitemcheckbox"
            :aria-checked="image.allImages"
            :title="$t('settings.attachment.applyToAllImages')"
            @click="emit('image-scope-change', !image.allImages)"
          >
            <UiImages />
            <span>
              {{ $t('settings.attachment.allImagesShort') }}
            </span>
            <UiCheck v-if="image.allImages" class="context-menu-check" />
          </ContextMenuItem>
          <div class="context-menu-divider" role="separator"></div>
          <ContextMenuItem @click="imageAction('location')">
            <UiFolderOpen />
            <span>
              {{ $t('settings.attachment.openImageLocation') }}
            </span>
          </ContextMenuItem>
          <ContextMenuItem danger @click="imageAction('delete')">
            <UiTrash />
            <span>
              {{ $t('settings.attachment.deleteImage') }}
            </span>
          </ContextMenuItem>
        </template>
      </template>
      <template v-else>
        <ContextMenuItem
          as="div"
          v-if="isCodeBlockActive && !isSourceMode"
          @click="formatCodeBlock"
        >
          <span>{{ $t('codeEditor.formatCode') }}</span>
        </ContextMenuItem>

        <div
          v-if="isCodeBlockActive && !isSourceMode"
          class="context-menu-divider"
          role="separator"
        ></div>

        <!-- 新增链接（内部链接） -->
        <ContextMenuItem as="div" @click="handleAddLink">
          <UiLink />
          <span>{{ $t('contextMenu.addLink') }}</span>
          <kbd class="context-menu-shortcut">[[]]</kbd>
        </ContextMenuItem>

        <!-- 新增外部链接 -->
        <ContextMenuItem as="div" @click="handleAddExternalLink">
          <UiExternalLink />
          <span>{{ $t('contextMenu.addExternalLink') }}</span>
          <kbd class="context-menu-shortcut">[]()</kbd>
        </ContextMenuItem>

        <div class="context-menu-divider" role="separator"></div>

        <!-- 文本格式子菜单 -->
        <ContextMenuItem
          as="div"
          :disabled="isMarkdownSyntaxDisabled"
          @mouseenter="showSubmenu('textFormat', $event)"
          @mouseleave="handleMenuMouseLeave"
        >
          <UiType />
          <span>{{ $t('contextMenu.textFormat') }}</span>
          <UiChevronRight class="context-menu-arrow" />
        </ContextMenuItem>

        <!-- 段落设置子菜单 -->
        <ContextMenuItem
          as="div"
          :disabled="isMarkdownSyntaxDisabled"
          @mouseenter="showSubmenu('paragraphSettings', $event)"
          @mouseleave="handleMenuMouseLeave"
        >
          <UiPilcrow />
          <span>
            {{ $t('contextMenu.paragraphSettings') }}
          </span>
          <UiChevronRight class="context-menu-arrow" />
        </ContextMenuItem>

        <!-- 插入子菜单 -->
        <ContextMenuItem
          as="div"
          :disabled="isMarkdownSyntaxDisabled"
          @mouseenter="showSubmenu('insert', $event)"
          @mouseleave="handleMenuMouseLeave"
        >
          <UiPlus />
          <span>{{ $t('contextMenu.insert') }}</span>
          <UiChevronRight class="context-menu-arrow" />
        </ContextMenuItem>

        <div class="context-menu-divider" role="separator"></div>

        <!-- 剪贴板操作 -->
        <ContextMenuItem as="div" disabled>
          <UiScissors />
          <span>{{ $t('contextMenu.cut') }}</span>
        </ContextMenuItem>

        <ContextMenuItem as="div" disabled>
          <UiCopy />
          <span>{{ $t('contextMenu.copy') }}</span>
        </ContextMenuItem>

        <ContextMenuItem as="div" @click="handlePaste">
          <UiClipboardPaste />
          <span>{{ $t('contextMenu.paste') }}</span>
        </ContextMenuItem>

        <ContextMenuItem as="div" @click="handlePasteAsPlainText">
          <UiClipboardType />
          <span>{{ $t('contextMenu.pasteAsPlainText') }}</span>
        </ContextMenuItem>

        <ContextMenuItem as="div" @click="handleSelectAll">
          <UiSquareDashed />
          <span>{{ $t('contextMenu.selectAll') }}</span>
        </ContextMenuItem>
      </template>

      <!-- 子菜单 -->
      <teleport to="body">
        <ContextMenuSurface
          v-if="activeSubmenu"
          ref="submenuRef"
          class="z-50"
          :style="submenuStyle"
          @mouseenter="keepSubmenuOpen"
          @mouseleave="hideSubmenu"
        >
          <template v-if="activeSubmenu === 'imageScale' && image">
            <ContextMenuItem
              v-for="scale in imageScales"
              :key="scale"
              role="menuitemradio"
              :active="image.scale === scale"
              :aria-checked="image.scale === scale"
              @click="selectImageScale(scale)"
            >
              <span>{{ scale }}%</span>
              <UiCheck
                v-if="image.scale === scale"
                class="context-menu-check"
              />
            </ContextMenuItem>
            <div class="context-menu-divider" role="separator"></div>
            <ContextMenuItem @click="imageAction('custom')">
              <span>
                {{ $t('settings.attachment.customImageScale') }}
              </span>
            </ContextMenuItem>
          </template>
          <template v-else-if="activeSubmenu === 'textFormat'">
            <ContextMenuItem
              as="div"
              :active="editor?.isActive('bold')"
              :disabled="isMarkdownSyntaxDisabled"
              @click="toggleBold"
            >
              <span>{{ $t('contextMenu.bold') }}</span>
              <kbd class="context-menu-shortcut">**</kbd>
            </ContextMenuItem>
            <ContextMenuItem
              as="div"
              :active="editor?.isActive('italic')"
              :disabled="isMarkdownSyntaxDisabled"
              @click="toggleItalic"
            >
              <span>{{ $t('contextMenu.italic') }}</span>
              <kbd class="context-menu-shortcut">*</kbd>
            </ContextMenuItem>
            <ContextMenuItem
              as="div"
              :active="editor?.isActive('strike')"
              :disabled="isMarkdownSyntaxDisabled"
              @click="toggleStrike"
            >
              <span>
                {{ $t('contextMenu.strikethrough') }}
              </span>
              <kbd class="context-menu-shortcut">~~</kbd>
            </ContextMenuItem>
            <ContextMenuItem
              as="div"
              :active="editor?.isActive('code')"
              :disabled="isMarkdownSyntaxDisabled"
              @click="toggleCode"
            >
              <span>{{ $t('contextMenu.code') }}</span>
              <kbd class="context-menu-shortcut">`</kbd>
            </ContextMenuItem>
            <div class="context-menu-divider" role="separator"></div>
            <ContextMenuItem
              as="div"
              :disabled="isMarkdownSyntaxDisabled"
              @click="clearFormat"
            >
              <span>{{ $t('contextMenu.clearFormat') }}</span>
            </ContextMenuItem>
          </template>

          <template v-else-if="activeSubmenu === 'paragraphSettings'">
            <ContextMenuItem
              as="div"
              :active="editor?.isActive('bulletList')"
              :disabled="isMarkdownSyntaxDisabled"
              @click="toggleBulletList"
            >
              <span>{{ $t('contextMenu.bulletList') }}</span>
              <kbd class="context-menu-shortcut">-</kbd>
            </ContextMenuItem>
            <ContextMenuItem
              as="div"
              :active="editor?.isActive('orderedList')"
              :disabled="isMarkdownSyntaxDisabled"
              @click="toggleOrderedList"
            >
              <span>{{ $t('contextMenu.orderedList') }}</span>
              <kbd class="context-menu-shortcut">1.</kbd>
            </ContextMenuItem>
            <ContextMenuItem
              as="div"
              :active="editor?.isActive('taskList')"
              :disabled="isMarkdownSyntaxDisabled"
              @click="toggleTaskList"
            >
              <span>{{ $t('contextMenu.taskList') }}</span>
              <kbd class="context-menu-shortcut">- [ ]</kbd>
            </ContextMenuItem>
            <div class="context-menu-divider" role="separator"></div>
            <ContextMenuItem
              as="div"
              :active="editor?.isActive('heading', { level: 1 })"
              :disabled="isMarkdownSyntaxDisabled"
              @click="setHeading(1)"
            >
              <span>H₁ {{ $t('contextMenu.heading1') }}</span>
              <kbd class="context-menu-shortcut">#</kbd>
            </ContextMenuItem>
            <ContextMenuItem
              as="div"
              :active="editor?.isActive('heading', { level: 2 })"
              :disabled="isMarkdownSyntaxDisabled"
              @click="setHeading(2)"
            >
              <span>H₂ {{ $t('contextMenu.heading2') }}</span>
              <kbd class="context-menu-shortcut">##</kbd>
            </ContextMenuItem>
            <ContextMenuItem
              as="div"
              :active="editor?.isActive('heading', { level: 3 })"
              :disabled="isMarkdownSyntaxDisabled"
              @click="setHeading(3)"
            >
              <span>H₃ {{ $t('contextMenu.heading3') }}</span>
              <kbd class="context-menu-shortcut">###</kbd>
            </ContextMenuItem>
            <ContextMenuItem
              as="div"
              :active="editor?.isActive('heading', { level: 4 })"
              :disabled="isMarkdownSyntaxDisabled"
              @click="setHeading(4)"
            >
              <span>H₄ {{ $t('contextMenu.heading4') }}</span>
              <kbd class="context-menu-shortcut">####</kbd>
            </ContextMenuItem>
            <ContextMenuItem
              as="div"
              :active="editor?.isActive('heading', { level: 5 })"
              :disabled="isMarkdownSyntaxDisabled"
              @click="setHeading(5)"
            >
              <span>H₅ {{ $t('contextMenu.heading5') }}</span>
              <kbd class="context-menu-shortcut">#####</kbd>
            </ContextMenuItem>
            <ContextMenuItem
              as="div"
              :active="editor?.isActive('heading', { level: 6 })"
              :disabled="isMarkdownSyntaxDisabled"
              @click="setHeading(6)"
            >
              <span>H₆ {{ $t('contextMenu.heading6') }}</span>
              <kbd class="context-menu-shortcut">######</kbd>
            </ContextMenuItem>
            <ContextMenuItem
              as="div"
              :active="editor?.isActive('paragraph')"
              :disabled="isMarkdownSyntaxDisabled"
              @click="setParagraph"
            >
              <span>≡ {{ $t('contextMenu.paragraph') }}</span>
              <UiCheck
                v-if="editor?.isActive('paragraph')"
                class="context-menu-check"
                width="16"
                height="16"
              />
            </ContextMenuItem>
            <div class="context-menu-divider" role="separator"></div>
            <ContextMenuItem
              as="div"
              :active="editor?.isActive('blockquote')"
              :disabled="isMarkdownSyntaxDisabled"
              @click="toggleBlockquote"
            >
              <span>❝❞ {{ $t('contextMenu.blockquote') }}</span>
              <kbd class="context-menu-shortcut">></kbd>
            </ContextMenuItem>
          </template>

          <template v-else-if="activeSubmenu === 'insert'">
            <ContextMenuItem
              as="div"
              :disabled="isMarkdownSyntaxDisabled"
              @click="requestInsertTable"
            >
              <span>⊞ {{ $t('contextMenu.table') }}</span>
            </ContextMenuItem>
            <div class="context-menu-divider" role="separator"></div>
            <ContextMenuItem
              as="div"
              :disabled="isMarkdownSyntaxDisabled"
              @click="insertCodeBlock"
            >
              <span>&lt;&gt; {{ $t('contextMenu.codeBlock') }}</span>
              <kbd class="context-menu-shortcut">```</kbd>
            </ContextMenuItem>
            <ContextMenuItem
              as="div"
              :disabled="isMarkdownSyntaxDisabled"
              @click="insertHorizontalRule"
            >
              <span>— {{ $t('contextMenu.horizontalRule') }}</span>
              <kbd class="context-menu-shortcut">---</kbd>
            </ContextMenuItem>
          </template>
        </ContextMenuSurface>
      </teleport>
    </ContextMenuSurface>
  </teleport>
</template>

<script setup lang="ts">
import ContextMenuSurface from './ContextMenuSurface.vue';
import ContextMenuItem from './ContextMenuItem.vue';
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
  viewMode?: 'reading' | 'preview' | 'source';
  image?: { scale: number; allImages: boolean; readOnly?: boolean };
}

defineOptions({
  name: 'EditorContextMenu'
});

const props = withDefaults(defineProps<Props>(), {
  isActive: () => false,
  viewMode: 'preview'
});

const emit = defineEmits<{
  'request-insert-table': [];
  'image-scale': [scale: number];
  'image-scope-change': [allImages: boolean];
  'image-action': [action: 'copy' | 'custom' | 'location' | 'delete'];
}>();

const { t: $t } = useI18n();

const visible = ref(false);
const menuRef = ref<InstanceType<typeof ContextMenuSurface> | null>(null);
const submenuRef = ref<InstanceType<typeof ContextMenuSurface> | null>(null);
const activeSubmenu = ref<string | null>(null);
const menuPosition = ref({ x: 0, y: 0 });
const submenuPosition = ref({ x: 0, y: 0 });
let submenuTimer: ReturnType<typeof setTimeout> | null = null;
const imageScales = [35, 40, 45, 50, 100, 125];

function selectImageScale(scale: number) {
  hide();
  emit('image-scale', scale);
}
function imageAction(action: 'copy' | 'custom' | 'location' | 'delete') {
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
    const menu = menuRef.value?.element;
    if (!menu) return;

    const menuRect = menu.getBoundingClientRect();
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
    const menu = menuRef.value?.element;
    const submenu = submenuRef.value?.element;
    if (!menu || !submenu) return;

    const menuRect = menu.getBoundingClientRect();
    const submenuRect = submenu.getBoundingClientRect();
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
  if (relatedTarget && submenuRef.value?.element?.contains(relatedTarget)) {
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
  const menu = menuRef.value?.element;
  if (visible.value && menu && !menu.contains(event.target as Node)) {
    if (submenuRef.value?.element?.contains(event.target as Node)) {
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
