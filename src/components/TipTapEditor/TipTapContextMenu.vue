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
      <!-- 新增链接（内部链接） -->
      <div class="menu-item" @click="handleAddLink">
        <svg class="menu-icon" viewBox="0 0 24 24">
          <path fill="currentColor" d="M10.59,13.41C11,13.8 11,14.44 10.59,14.83C10.2,15.22 9.56,15.22 9.17,14.83C7.22,12.88 7.22,9.71 9.17,7.76V7.76L12.71,4.22C14.66,2.27 17.83,2.27 19.78,4.22C21.73,6.17 21.73,9.34 19.78,11.29L18.29,12.78C18.3,11.96 18.17,11.14 17.89,10.36L18.36,9.88C19.54,8.71 19.54,6.81 18.36,5.64C17.19,4.46 15.29,4.46 14.12,5.64L10.59,9.17C9.41,10.34 9.41,12.24 10.59,13.41M13.41,9.17C13.8,8.78 14.44,8.78 14.83,9.17C16.78,11.12 16.78,14.29 14.83,16.24V16.24L11.29,19.78C9.34,21.73 6.17,21.73 4.22,19.78C2.27,17.83 2.27,14.66 4.22,12.71L5.71,11.22C5.7,12.04 5.83,12.86 6.11,13.65L5.64,14.12C4.46,15.29 4.46,17.19 5.64,18.36C6.81,19.54 8.71,19.54 9.88,18.36L13.41,14.83C14.59,13.66 14.59,11.76 13.41,10.59C13,10.2 13,9.56 13.41,9.17Z" />
        </svg>
        <span>{{ $t('contextMenu.addLink') }}</span>
        <span class="menu-shortcut">[[]]</span>
      </div>

      <!-- 新增外部链接 -->
      <div class="menu-item" @click="handleAddExternalLink">
        <svg class="menu-icon" viewBox="0 0 24 24">
          <path fill="currentColor" d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z" />
        </svg>
        <span>{{ $t('contextMenu.addExternalLink') }}</span>
        <span class="menu-shortcut">[]()</span>
      </div>

      <div class="menu-divider"></div>

      <!-- 文本格式子菜单 -->
      <div
        class="menu-item has-submenu"
        @mouseenter="showSubmenu('textFormat')"
        @mouseleave="handleMenuMouseLeave"
      >
        <svg class="menu-icon" viewBox="0 0 24 24">
          <path fill="currentColor" d="M9.6,14L12,7.7L14.4,14M11,5L5.5,19H7.7L8.8,16H15.2L16.3,19H18.5L13,5H11Z" />
        </svg>
        <span>{{ $t('contextMenu.textFormat') }}</span>
        <svg class="menu-arrow" viewBox="0 0 24 24">
          <path fill="currentColor" d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
        </svg>
      </div>

      <!-- 段落设置子菜单 -->
      <div
        class="menu-item has-submenu"
        @mouseenter="showSubmenu('paragraphSettings')"
        @mouseleave="handleMenuMouseLeave"
      >
        <svg class="menu-icon" viewBox="0 0 24 24">
          <path fill="currentColor" d="M13,4A4,4 0 0,1 17,8A4,4 0 0,1 13,12H11V18H9V4H13M13,10A2,2 0 0,0 15,8A2,2 0 0,0 13,6H11V10H13Z" />
        </svg>
        <span>{{ $t('contextMenu.paragraphSettings') }}</span>
        <svg class="menu-arrow" viewBox="0 0 24 24">
          <path fill="currentColor" d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
        </svg>
      </div>

      <!-- 插入子菜单 -->
      <div
        class="menu-item has-submenu"
        @mouseenter="showSubmenu('insert')"
        @mouseleave="handleMenuMouseLeave"
      >
        <svg class="menu-icon" viewBox="0 0 24 24">
          <path fill="currentColor" d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
        </svg>
        <span>{{ $t('contextMenu.insert') }}</span>
        <svg class="menu-arrow" viewBox="0 0 24 24">
          <path fill="currentColor" d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
        </svg>
      </div>

      <div class="menu-divider"></div>

      <!-- 剪贴板操作 -->
      <div class="menu-item disabled">
        <svg class="menu-icon" viewBox="0 0 24 24">
          <path fill="currentColor" d="M19,3L13,9L15,11L22,4V3M12,12.5A0.5,0.5 0 0,1 11.5,12A0.5,0.5 0 0,1 12,11.5A0.5,0.5 0 0,1 12.5,12A0.5,0.5 0 0,1 12,12.5M6,20A2,2 0 0,1 4,18C4,16.89 4.9,16 6,16A2,2 0 0,1 8,18C8,19.11 7.1,20 6,20M6,8A2,2 0 0,1 4,6C4,4.89 4.9,4 6,4A2,2 0 0,1 8,6C8,7.11 7.1,8 6,8M9.64,7.64C9.87,7.14 10,6.59 10,6A4,4 0 0,0 6,2A4,4 0 0,0 2,6A4,4 0 0,0 6,10C6.59,10 7.14,9.87 7.64,9.64L10,12L7.64,14.36C7.14,14.13 6.59,14 6,14A4,4 0 0,0 2,18A4,4 0 0,0 6,22A4,4 0 0,0 10,18C10,17.41 9.87,16.86 9.64,16.36L12,14L19,21H22V20L9.64,7.64Z" />
        </svg>
        <span>{{ $t('contextMenu.cut') }}</span>
      </div>

      <div class="menu-item disabled">
        <svg class="menu-icon" viewBox="0 0 24 24">
          <path fill="currentColor" d="M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z" />
        </svg>
        <span>{{ $t('contextMenu.copy') }}</span>
      </div>

      <div class="menu-item" @click="handlePaste">
        <svg class="menu-icon" viewBox="0 0 24 24">
          <path fill="currentColor" d="M19,20H5V4H7V7H17V4H19M12,2A1,1 0 0,1 13,3A1,1 0 0,1 12,4A1,1 0 0,1 11,3A1,1 0 0,1 12,2M19,2H14.82C14.4,0.84 13.3,0 12,0C10.7,0 9.6,0.84 9.18,2H5A2,2 0 0,0 3,4V20A2,2 0 0,0 5,22H19A2,2 0 0,0 21,20V4A2,2 0 0,0 19,2Z" />
        </svg>
        <span>{{ $t('contextMenu.paste') }}</span>
      </div>

      <div class="menu-item" @click="handlePasteAsPlainText">
        <svg class="menu-icon" viewBox="0 0 24 24">
          <path fill="currentColor" d="M19,20H5V4H7V7H17V4H19M12,2A1,1 0 0,1 13,3A1,1 0 0,1 12,4A1,1 0 0,1 11,3A1,1 0 0,1 12,2M19,2H14.82C14.4,0.84 13.3,0 12,0C10.7,0 9.6,0.84 9.18,2H5A2,2 0 0,0 3,4V20A2,2 0 0,0 5,22H19A2,2 0 0,0 21,20V4A2,2 0 0,0 19,2Z" />
        </svg>
        <span>{{ $t('contextMenu.pasteAsPlainText') }}</span>
      </div>

      <div class="menu-item" @click="handleSelectAll">
        <svg class="menu-icon" viewBox="0 0 24 24">
          <path fill="currentColor" d="M9,9H15V15H9M7,17H17V7H7M15,5H17V3H15M15,21H17V19H15M19,17H21V15H19M19,9H21V7H19M19,21A2,2 0 0,0 21,19H19M19,13H21V11H19M11,21H13V19H11M9,3H7V5H9M3,17H5V15H3M5,21V19H3A2,2 0 0,0 5,21M19,3V5H21A2,2 0 0,0 19,3M13,3H11V5H13M3,9H5V7H3M7,21H9V19H7M3,13H5V11H3M3,5H5V3A2,2 0 0,0 3,5Z" />
        </svg>
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
          <div class="menu-item" :class="{ active: editor?.isActive('bold') }" @click="toggleBold">
            <span>{{ $t('contextMenu.bold') }}</span>
            <span class="menu-shortcut">**</span>
          </div>
          <div class="menu-item" :class="{ active: editor?.isActive('italic') }" @click="toggleItalic">
            <span>{{ $t('contextMenu.italic') }}</span>
            <span class="menu-shortcut">*</span>
          </div>
          <div class="menu-item" :class="{ active: editor?.isActive('strike') }" @click="toggleStrike">
            <span>{{ $t('contextMenu.strikethrough') }}</span>
            <span class="menu-shortcut">~~</span>
          </div>
          <div class="menu-item" :class="{ active: editor?.isActive('code') }" @click="toggleCode">
            <span>{{ $t('contextMenu.code') }}</span>
            <span class="menu-shortcut">`</span>
          </div>
          <div class="menu-divider"></div>
          <div class="menu-item" @click="clearFormat">
            <span>{{ $t('contextMenu.clearFormat') }}</span>
          </div>
        </template>

        <template v-else-if="activeSubmenu === 'paragraphSettings'">
          <div class="menu-item" :class="{ active: editor?.isActive('bulletList') }" @click="toggleBulletList">
            <span>{{ $t('contextMenu.bulletList') }}</span>
            <span class="menu-shortcut">-</span>
          </div>
          <div class="menu-item" :class="{ active: editor?.isActive('orderedList') }" @click="toggleOrderedList">
            <span>{{ $t('contextMenu.orderedList') }}</span>
            <span class="menu-shortcut">1.</span>
          </div>
          <div class="menu-item" :class="{ active: editor?.isActive('taskList') }" @click="toggleTaskList">
            <span>{{ $t('contextMenu.taskList') }}</span>
            <span class="menu-shortcut">- [ ]</span>
          </div>
          <div class="menu-divider"></div>
          <div class="menu-item" :class="{ active: editor?.isActive('heading', { level: 1 }) }" @click="setHeading(1)">
            <span>H₁ {{ $t('contextMenu.heading1') }}</span>
            <span class="menu-shortcut">#</span>
          </div>
          <div class="menu-item" :class="{ active: editor?.isActive('heading', { level: 2 }) }" @click="setHeading(2)">
            <span>H₂ {{ $t('contextMenu.heading2') }}</span>
            <span class="menu-shortcut">##</span>
          </div>
          <div class="menu-item" :class="{ active: editor?.isActive('heading', { level: 3 }) }" @click="setHeading(3)">
            <span>H₃ {{ $t('contextMenu.heading3') }}</span>
            <span class="menu-shortcut">###</span>
          </div>
          <div class="menu-item" :class="{ active: editor?.isActive('heading', { level: 4 }) }" @click="setHeading(4)">
            <span>H₄ {{ $t('contextMenu.heading4') }}</span>
            <span class="menu-shortcut">####</span>
          </div>
          <div class="menu-item" :class="{ active: editor?.isActive('heading', { level: 5 }) }" @click="setHeading(5)">
            <span>H₅ {{ $t('contextMenu.heading5') }}</span>
            <span class="menu-shortcut">#####</span>
          </div>
          <div class="menu-item" :class="{ active: editor?.isActive('heading', { level: 6 }) }" @click="setHeading(6)">
            <span>H₆ {{ $t('contextMenu.heading6') }}</span>
            <span class="menu-shortcut">######</span>
          </div>
          <div class="menu-item" :class="{ active: editor?.isActive('paragraph') }" @click="setParagraph">
            <span>≡ {{ $t('contextMenu.paragraph') }}</span>
            <svg v-if="editor?.isActive('paragraph')" class="check-mark" viewBox="0 0 24 24" width="16" height="16">
              <path fill="currentColor" d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" />
            </svg>
          </div>
          <div class="menu-divider"></div>
          <div class="menu-item" :class="{ active: editor?.isActive('blockquote') }" @click="toggleBlockquote">
            <span>❝❞ {{ $t('contextMenu.blockquote') }}</span>
            <span class="menu-shortcut">></span>
          </div>
        </template>

        <template v-else-if="activeSubmenu === 'insert'">
          <div class="menu-item" @click="insertTable">
            <span>⊞ {{ $t('contextMenu.table') }}</span>
          </div>
          <div class="menu-divider"></div>
          <div class="menu-item" @click="insertCodeBlock">
            <span>&lt;&gt; {{ $t('contextMenu.codeBlock') }}</span>
            <span class="menu-shortcut">```</span>
          </div>
          <div class="menu-item" @click="insertHorizontalRule">
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
import type { Editor } from '@tiptap/vue-3';
import { useI18n } from 'vue-i18n';

interface Props {
  editor: Editor | null;
  dark?: boolean;
  viewMode?: 'reading' | 'preview' | 'source';
  sourceEditorRef?: any; // 源码编辑器的引用
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
const showSubmenu = (submenu: string) => {
  if (submenuTimer) {
    clearTimeout(submenuTimer);
  }
  
  activeSubmenu.value = submenu;
  
  nextTick(() => {
    if (!menuRef.value || !submenuRef.value) return;
    
    const menuRect = menuRef.value.getBoundingClientRect();
    const submenuRect = submenuRef.value.getBoundingClientRect();
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const padding = 10;
    const gap = 8; // 主菜单和子菜单之间的间距
    
    let x = 0;
    let y = menuRect.top;
    
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
  if (submenuRef.value && relatedTarget && submenuRef.value.contains(relatedTarget)) {
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

// 文本格式操作
const toggleBold = () => {
  if (isSourceMode.value && props.sourceEditorRef) {
    props.sourceEditorRef.wrapSelection('**', '**');
  } else {
    props.editor?.chain().focus().toggleBold().run();
  }
  hide();
};

const toggleItalic = () => {
  if (isSourceMode.value && props.sourceEditorRef) {
    props.sourceEditorRef.wrapSelection('*', '*');
  } else {
    props.editor?.chain().focus().toggleItalic().run();
  }
  hide();
};

const toggleStrike = () => {
  if (isSourceMode.value && props.sourceEditorRef) {
    props.sourceEditorRef.wrapSelection('~~', '~~');
  } else {
    props.editor?.chain().focus().toggleStrike().run();
  }
  hide();
};

const toggleCode = () => {
  if (isSourceMode.value && props.sourceEditorRef) {
    props.sourceEditorRef.wrapSelection('`', '`');
  } else {
    props.editor?.chain().focus().toggleCode().run();
  }
  hide();
};

const clearFormat = () => {
  if (!isSourceMode.value && props.editor) {
    props.editor.chain().focus().clearNodes().unsetAllMarks().run();
  }
  hide();
};

// 段落格式操作
const toggleBulletList = () => {
  if (isSourceMode.value && props.sourceEditorRef) {
    props.sourceEditorRef.insertLinePrefix('- ');
  } else {
    props.editor?.chain().focus().toggleBulletList().run();
  }
  hide();
};

const toggleOrderedList = () => {
  if (isSourceMode.value && props.sourceEditorRef) {
    props.sourceEditorRef.insertLinePrefix('1. ');
  } else {
    props.editor?.chain().focus().toggleOrderedList().run();
  }
  hide();
};

const toggleTaskList = () => {
  if (isSourceMode.value && props.sourceEditorRef) {
    props.sourceEditorRef.insertLinePrefix('- [ ] ');
  } else {
    props.editor?.chain().focus().toggleTaskList().run();
  }
  hide();
};

const setHeading = (level: 1 | 2 | 3 | 4 | 5 | 6) => {
  if (isSourceMode.value && props.sourceEditorRef) {
    const prefix = '#'.repeat(level) + ' ';
    props.sourceEditorRef.insertLinePrefix(prefix);
  } else {
    props.editor?.chain().focus().setHeading({ level }).run();
  }
  hide();
};

const setParagraph = () => {
  if (!isSourceMode.value && props.editor) {
    props.editor.chain().focus().setParagraph().run();
  }
  hide();
};

const toggleBlockquote = () => {
  if (isSourceMode.value && props.sourceEditorRef) {
    props.sourceEditorRef.insertLinePrefix('> ');
  } else {
    props.editor?.chain().focus().toggleBlockquote().run();
  }
  hide();
};

// 插入操作
const insertTable = () => {
  if (isSourceMode.value && props.sourceEditorRef) {
    const tableMarkdown = `| Header 1 | Header 2 | Header 3 |\n| -------- | -------- | -------- |\n| Cell 1   | Cell 2   | Cell 3   |\n| Cell 4   | Cell 5   | Cell 6   |\n`;
    props.sourceEditorRef.insertText(tableMarkdown);
  } else {
    props.editor?.chain().focus().insertTable({ rows: 3, cols: 3, withHeaderRow: true }).run();
  }
  hide();
};

const insertCodeBlock = () => {
  if (isSourceMode.value && props.sourceEditorRef) {
    props.sourceEditorRef.insertText('```\n\n```');
    const textarea = props.sourceEditorRef.getTextarea();
    if (textarea) {
      const pos = textarea.selectionStart;
      textarea.setSelectionRange(pos - 4, pos - 4);
      textarea.focus();
    }
  } else {
    props.editor?.chain().focus().toggleCodeBlock().run();
  }
  hide();
};

const insertHorizontalRule = () => {
  if (isSourceMode.value && props.sourceEditorRef) {
    props.sourceEditorRef.insertText('\n---\n');
  } else {
    props.editor?.chain().focus().setHorizontalRule().run();
  }
  hide();
};

// 链接操作
const handleAddLink = () => {
  if (isSourceMode.value && props.sourceEditorRef) {
    // 源码模式：插入 [[]] 格式
    props.sourceEditorRef.insertText('[[]]');
    // 将光标移动到 [[ 和 ]] 之间
    const textarea = props.sourceEditorRef.getTextarea();
    if (textarea) {
      const pos = textarea.selectionStart;
      textarea.setSelectionRange(pos - 2, pos - 2);
      textarea.focus();
    }
  } else if (props.editor) {
    // 预览/阅读模式：使用 TipTap 命令
    const { from, to } = props.editor.state.selection;
    const selectedText = props.editor.state.doc.textBetween(from, to, ' ');
    
    if (selectedText && selectedText.trim()) {
      const url = window.prompt($t('contextMenu.enterUrl'), '');
      if (url && url.trim()) {
        props.editor.chain().focus().setLink({ href: url.trim() }).run();
      }
    } else {
      props.editor.chain().focus().insertContent('[[]]').setTextSelection(from + 2).run();
    }
  }
  hide();
};

const handleAddExternalLink = () => {
  if (isSourceMode.value && props.sourceEditorRef) {
    // 源码模式：插入 []() 格式
    const textarea = props.sourceEditorRef.getTextarea();
    if (textarea) {
      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;
      const selectedText = textarea.value.substring(start, end);
      
      if (selectedText) {
        // 有选中文本，包裹为链接
        props.sourceEditorRef.insertText(`[${selectedText}]()`);
        // 光标移动到 () 中间
        textarea.setSelectionRange(start + selectedText.length + 3, start + selectedText.length + 3);
      } else {
        // 无选中文本，插入空链接
        props.sourceEditorRef.insertText('[]()');
        // 光标移动到 [] 中间
        textarea.setSelectionRange(start + 1, start + 1);
      }
      textarea.focus();
    }
  } else if (props.editor) {
    // 预览/阅读模式：使用 TipTap 命令
    const { from, to } = props.editor.state.selection;
    const selectedText = props.editor.state.doc.textBetween(from, to, ' ');
    
    if (selectedText && selectedText.trim()) {
      props.editor.chain().focus()
        .insertContent(`[${selectedText}]()`)
        .setTextSelection(from + selectedText.length + 3)
        .run();
    } else {
      props.editor.chain().focus()
        .insertContent('[]()')
        .setTextSelection(from + 1)
        .run();
    }
  }
  hide();
};

// 剪贴板操作
const handlePaste = () => {
  if (isSourceMode.value && props.sourceEditorRef) {
    // 源码模式：先聚焦编辑器，然后使用粘贴命令
    props.sourceEditorRef.focus();
    document.execCommand('paste');
  } else {
    // 预览模式：聚焦编辑器，然后使用粘贴命令
    props.editor?.chain().focus().run();
    document.execCommand('paste');
  }
  hide();
};

const handlePasteAsPlainText = () => {
  if (isSourceMode.value && props.sourceEditorRef) {
    // 源码模式：先聚焦编辑器，然后插入纯文本
    props.sourceEditorRef.focus();
    navigator.clipboard.readText().then(text => {
      props.sourceEditorRef?.insertText(text);
    });
  } else {
    // 预览模式：聚焦编辑器，然后插入纯文本
    props.editor?.chain().focus().run();
    navigator.clipboard.readText().then(text => {
      props.editor?.chain().focus().insertContent(text).run();
    });
  }
  hide();
};

const handleSelectAll = () => {
  if (isSourceMode.value && props.sourceEditorRef) {
    props.sourceEditorRef.selectAll();
  } else {
    props.editor?.chain().focus().selectAll().run();
  }
  hide();
};

// 键盘事件
const handleKeydown = (event: KeyboardEvent) => {
  if (event.key === 'Escape') {
    hide();
  }
};

// 点击外部关闭菜单
const handleClickOutside = (event: MouseEvent) => {
  if (visible.value && menuRef.value && !menuRef.value.contains(event.target as Node)) {
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
  @apply fixed z-[9999] min-w-[200px] max-w-[280px] bg-white border border-gray-200 rounded-lg p-1 select-none;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.12), 0 2px 6px rgba(0, 0, 0, 0.08);
  transition: background-color 0.2s ease, border-color 0.2s ease;
  animation: fadeIn 0.15s cubic-bezier(0.16, 1, 0.3, 1);

  &.dark-theme {
    @apply bg-[#2a2a2a] border-[#3a3a3a];
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.5), 0 2px 6px rgba(0, 0, 0, 0.3);

    .menu-item {
      @apply text-gray-200;

      &:hover:not(.disabled) {
        @apply text-white;
        background: rgba(93, 109, 253, 0.12);
      }

      &.active {
        @apply text-[#7c8aff];
        background: rgba(93, 109, 253, 0.08);
      }

      &.disabled {
        @apply text-gray-500;
      }
    }

    .menu-divider {
      @apply bg-[#3a3a3a];
    }

    .menu-arrow {
      @apply text-gray-400;
    }

    .menu-icon {
      @apply text-gray-400;
    }
  }

  &.submenu {
    animation: slideIn 0.12s cubic-bezier(0.16, 1, 0.3, 1);
  }
}

.menu-item {
  @apply flex items-center min-h-[32px] px-2.5 py-[5px] text-gray-700 text-[13px] cursor-pointer relative rounded-[5px] gap-2;
  transition: all 0.15s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover:not(.disabled) {
    @apply text-gray-800;
    background: rgba(93, 109, 253, 0.08);
  }

  &.active {
    @apply text-[#5d6dfd] font-medium;
    background: rgba(93, 109, 253, 0.05);
  }

  &.disabled {
    @apply text-gray-400 cursor-not-allowed opacity-50;
    
    &:hover {
      @apply bg-transparent;
      transform: none;
    }
  }

  &.has-submenu {
    @apply pr-1.5;
  }

  .menu-icon {
    @apply w-4 h-4 flex-shrink-0 text-gray-500;
    transition: color 0.15s ease;
  }

  .menu-arrow {
    @apply ml-auto w-4 h-4 text-gray-400 flex-shrink-0;
    transition: color 0.15s ease;
  }

  .check-mark {
    @apply ml-auto w-4 h-4 text-[#5d6dfd] flex-shrink-0;
  }

  .menu-shortcut {
    @apply ml-auto px-1.5 py-px text-gray-400 text-[10px] flex-shrink-0 rounded font-medium;
    font-family: 'SF Mono', 'Monaco', 'Consolas', monospace;
    background: rgba(0, 0, 0, 0.04);
    letter-spacing: 0.3px;
  }

  span {
    @apply flex-1 whitespace-nowrap overflow-hidden text-ellipsis;
  }
}

.menu-divider {
  @apply h-px bg-gray-200 mx-1.5 my-1;
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

@media (max-width: 768px) {
  .context-menu {
    @apply min-w-[180px];
    max-width: calc(100vw - 24px);
  }
  
  .menu-item {
    @apply min-h-[36px] px-2.5 py-1.5 text-sm;
  }
}
</style>
