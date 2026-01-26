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
        <svg class="menu-icon" viewBox="0 0 24 24" width="16" height="16">
          <path fill="currentColor" d="M10.59,13.41C11,13.8 11,14.44 10.59,14.83C10.2,15.22 9.56,15.22 9.17,14.83C7.22,12.88 7.22,9.71 9.17,7.76V7.76L12.71,4.22C14.66,2.27 17.83,2.27 19.78,4.22C21.73,6.17 21.73,9.34 19.78,11.29L18.29,12.78C18.3,11.96 18.17,11.14 17.89,10.36L18.36,9.88C19.54,8.71 19.54,6.81 18.36,5.64C17.19,4.46 15.29,4.46 14.12,5.64L10.59,9.17C9.41,10.34 9.41,12.24 10.59,13.41M13.41,9.17C13.8,8.78 14.44,8.78 14.83,9.17C16.78,11.12 16.78,14.29 14.83,16.24V16.24L11.29,19.78C9.34,21.73 6.17,21.73 4.22,19.78C2.27,17.83 2.27,14.66 4.22,12.71L5.71,11.22C5.7,12.04 5.83,12.86 6.11,13.65L5.64,14.12C4.46,15.29 4.46,17.19 5.64,18.36C6.81,19.54 8.71,19.54 9.88,18.36L13.41,14.83C14.59,13.66 14.59,11.76 13.41,10.59C13,10.2 13,9.56 13.41,9.17Z" />
        </svg>
        <span>{{ $t('contextMenu.addLink') }}</span>
        <span class="menu-shortcut">[[]]</span>
      </div>

      <!-- 新增外部链接 -->
      <div class="menu-item" @click="handleAddExternalLink">
        <svg class="menu-icon" viewBox="0 0 24 24" width="16" height="16">
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
        @mouseleave="hideSubmenu"
      >
        <svg class="menu-icon" viewBox="0 0 24 24" width="16" height="16">
          <path fill="currentColor" d="M9.6,14L12,7.7L14.4,14M11,5L5.5,19H7.7L8.8,16H15.2L16.3,19H18.5L13,5H11Z" />
        </svg>
        <span>{{ $t('contextMenu.textFormat') }}</span>
        <svg class="menu-arrow" viewBox="0 0 24 24" width="16" height="16">
          <path fill="currentColor" d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
        </svg>
      </div>

      <!-- 段落设置子菜单 -->
      <div
        class="menu-item has-submenu"
        @mouseenter="showSubmenu('paragraphSettings')"
        @mouseleave="hideSubmenu"
      >
        <svg class="menu-icon" viewBox="0 0 24 24" width="16" height="16">
          <path fill="currentColor" d="M13,4A4,4 0 0,1 17,8A4,4 0 0,1 13,12H11V18H9V4H13M13,10A2,2 0 0,0 15,8A2,2 0 0,0 13,6H11V10H13Z" />
        </svg>
        <span>{{ $t('contextMenu.paragraphSettings') }}</span>
        <svg class="menu-arrow" viewBox="0 0 24 24" width="16" height="16">
          <path fill="currentColor" d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
        </svg>
      </div>

      <!-- 插入子菜单 -->
      <div
        class="menu-item has-submenu"
        @mouseenter="showSubmenu('insert')"
        @mouseleave="hideSubmenu"
      >
        <svg class="menu-icon" viewBox="0 0 24 24" width="16" height="16">
          <path fill="currentColor" d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
        </svg>
        <span>{{ $t('contextMenu.insert') }}</span>
        <svg class="menu-arrow" viewBox="0 0 24 24" width="16" height="16">
          <path fill="currentColor" d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
        </svg>
      </div>

      <div class="menu-divider"></div>

      <!-- 剪贴板操作 -->
      <div class="menu-item disabled">
        <svg class="menu-icon" viewBox="0 0 24 24" width="16" height="16">
          <path fill="currentColor" d="M19,3L13,9L15,11L22,4V3M12,12.5A0.5,0.5 0 0,1 11.5,12A0.5,0.5 0 0,1 12,11.5A0.5,0.5 0 0,1 12.5,12A0.5,0.5 0 0,1 12,12.5M6,20A2,2 0 0,1 4,18C4,16.89 4.9,16 6,16A2,2 0 0,1 8,18C8,19.11 7.1,20 6,20M6,8A2,2 0 0,1 4,6C4,4.89 4.9,4 6,4A2,2 0 0,1 8,6C8,7.11 7.1,8 6,8M9.64,7.64C9.87,7.14 10,6.59 10,6A4,4 0 0,0 6,2A4,4 0 0,0 2,6A4,4 0 0,0 6,10C6.59,10 7.14,9.87 7.64,9.64L10,12L7.64,14.36C7.14,14.13 6.59,14 6,14A4,4 0 0,0 2,18A4,4 0 0,0 6,22A4,4 0 0,0 10,18C10,17.41 9.87,16.86 9.64,16.36L12,14L19,21H22V20L9.64,7.64Z" />
        </svg>
        <span>{{ $t('contextMenu.cut') }}</span>
      </div>

      <div class="menu-item disabled">
        <svg class="menu-icon" viewBox="0 0 24 24" width="16" height="16">
          <path fill="currentColor" d="M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z" />
        </svg>
        <span>{{ $t('contextMenu.copy') }}</span>
      </div>

      <div class="menu-item" @click="handlePaste">
        <svg class="menu-icon" viewBox="0 0 24 24" width="16" height="16">
          <path fill="currentColor" d="M19,20H5V4H7V7H17V4H19M12,2A1,1 0 0,1 13,3A1,1 0 0,1 12,4A1,1 0 0,1 11,3A1,1 0 0,1 12,2M19,2H14.82C14.4,0.84 13.3,0 12,0C10.7,0 9.6,0.84 9.18,2H5A2,2 0 0,0 3,4V20A2,2 0 0,0 5,22H19A2,2 0 0,0 21,20V4A2,2 0 0,0 19,2Z" />
        </svg>
        <span>{{ $t('contextMenu.paste') }}</span>
      </div>

      <div class="menu-item" @click="handlePasteAsPlainText">
        <svg class="menu-icon" viewBox="0 0 24 24" width="16" height="16">
          <path fill="currentColor" d="M19,20H5V4H7V7H17V4H19M12,2A1,1 0 0,1 13,3A1,1 0 0,1 12,4A1,1 0 0,1 11,3A1,1 0 0,1 12,2M19,2H14.82C14.4,0.84 13.3,0 12,0C10.7,0 9.6,0.84 9.18,2H5A2,2 0 0,0 3,4V20A2,2 0 0,0 5,22H19A2,2 0 0,0 21,20V4A2,2 0 0,0 19,2Z" />
        </svg>
        <span>{{ $t('contextMenu.pasteAsPlainText') }}</span>
      </div>

      <div class="menu-item" @click="handleSelectAll">
        <svg class="menu-icon" viewBox="0 0 24 24" width="16" height="16">
          <path fill="currentColor" d="M9,9H15V15H9M7,17H17V7H7M15,5H17V3H15M15,21H17V19H15M19,17H21V15H19M19,9H21V7H19M19,21A2,2 0 0,0 21,19H19M19,13H21V11H19M11,21H13V19H11M9,3H7V5H9M3,17H5V15H3M5,21V19H3A2,2 0 0,0 5,21M19,3V5H21A2,2 0 0,0 19,3M13,3H11V5H13M3,9H5V7H3M7,21H9V19H7M3,13H5V11H3M3,5H5V3A2,2 0 0,0 3,5Z" />
        </svg>
        <span>{{ $t('contextMenu.selectAll') }}</span>
      </div>

      <!-- 子菜单 -->
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
    </div>

    <!-- 外部链接对话框 -->
    <div
      v-if="showLinkDialog"
      class="link-dialog-overlay"
      @click="closeLinkDialog"
    >
      <div
        class="link-dialog"
        :class="{ 'dark-theme': dark }"
        @click.stop
      >
        <div class="link-dialog-header">
          <span class="link-dialog-title">{{ $t('contextMenu.enterUrl') }}</span>
        </div>
        <div class="link-dialog-body">
          <input
            v-model="linkUrl"
            type="text"
            class="link-dialog-input"
            :placeholder="$t('contextMenu.urlPlaceholder')"
            autofocus
            @keydown="handleLinkDialogKeydown"
          />
        </div>
        <div class="link-dialog-footer">
          <button class="link-dialog-button cancel" @click="closeLinkDialog">
            {{ $t('contextMenu.cancel') }}
          </button>
          <button class="link-dialog-button confirm" @click="confirmLink">
            {{ $t('contextMenu.confirm') }}
          </button>
        </div>
      </div>
    </div>
  </teleport>
</template>

<script setup lang="ts">
import type { Editor } from '@tiptap/vue-3';
import { useI18n } from 'vue-i18n';

interface Props {
  editor: Editor | null;
  dark?: boolean;
}

defineOptions({
  name: 'TipTapContextMenu'
});

const props = withDefaults(defineProps<Props>(), {
  editor: null,
  dark: false
});

const { t: $t } = useI18n();

const visible = ref(false);
const menuRef = ref<HTMLElement | null>(null);
const submenuRef = ref<HTMLElement | null>(null);
const activeSubmenu = ref<string | null>(null);
const menuPosition = ref({ x: 0, y: 0 });
const submenuPosition = ref({ x: 0, y: 0 });
let submenuTimer: ReturnType<typeof setTimeout> | null = null;

// 外部链接对话框
const showLinkDialog = ref(false);
const linkUrl = ref('');

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
    
    // 调整 X 位置
    if (x + menuRect.width > windowWidth) {
      menuPosition.value.x = windowWidth - menuRect.width - 10;
    }
    
    // 调整 Y 位置
    if (y + menuRect.height > windowHeight) {
      menuPosition.value.y = windowHeight - menuRect.height - 10;
    }
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
    
    // 子菜单默认显示在右侧
    let x = menuRect.right + 5;
    let y = menuRect.top;
    
    // 如果右侧空间不足，显示在左侧
    if (x + submenuRect.width > windowWidth) {
      x = menuRect.left - submenuRect.width - 5;
    }
    
    // 调整 Y 位置
    if (y + submenuRect.height > windowHeight) {
      y = windowHeight - submenuRect.height - 10;
    }
    
    submenuPosition.value = { x, y };
  });
};

// 隐藏子菜单（延迟）
const hideSubmenu = () => {
  submenuTimer = setTimeout(() => {
    activeSubmenu.value = null;
  }, 200);
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
  props.editor?.chain().focus().toggleBold().run();
  hide();
};

const toggleItalic = () => {
  props.editor?.chain().focus().toggleItalic().run();
  hide();
};

const toggleStrike = () => {
  props.editor?.chain().focus().toggleStrike().run();
  hide();
};

const toggleCode = () => {
  props.editor?.chain().focus().toggleCode().run();
  hide();
};

const clearFormat = () => {
  props.editor?.chain().focus().clearNodes().unsetAllMarks().run();
  hide();
};

// 段落格式操作
const toggleBulletList = () => {
  props.editor?.chain().focus().toggleBulletList().run();
  hide();
};

const toggleOrderedList = () => {
  props.editor?.chain().focus().toggleOrderedList().run();
  hide();
};

const toggleTaskList = () => {
  props.editor?.chain().focus().toggleTaskList().run();
  hide();
};

const setHeading = (level: 1 | 2 | 3 | 4 | 5 | 6) => {
  props.editor?.chain().focus().setHeading({ level }).run();
  hide();
};

const setParagraph = () => {
  props.editor?.chain().focus().setParagraph().run();
  hide();
};

const toggleBlockquote = () => {
  props.editor?.chain().focus().toggleBlockquote().run();
  hide();
};

// 插入操作
const insertTable = () => {
  props.editor?.chain().focus().insertTable({ rows: 3, cols: 3, withHeaderRow: true }).run();
  hide();
};

const insertCodeBlock = () => {
  props.editor?.chain().focus().toggleCodeBlock().run();
  hide();
};

const insertHorizontalRule = () => {
  props.editor?.chain().focus().setHorizontalRule().run();
  hide();
};

// 链接操作
const handleAddLink = () => {
  // 获取选中的文本
  const { from, to } = props.editor?.state.selection || { from: 0, to: 0 };
  const selectedText = props.editor?.state.doc.textBetween(from, to, ' ');
  
  if (selectedText && selectedText.trim()) {
    // 如果有选中文本，提示输入链接地址
    const url = window.prompt($t('contextMenu.enterUrl'), '');
    if (url && url.trim()) {
      props.editor?.chain().focus().setLink({ href: url.trim() }).run();
    }
  } else {
    // 如果没有选中文本，插入内部链接格式 [[]]
    props.editor?.chain().focus().insertContent('[[]]').setTextSelection(from + 2).run();
  }
  hide();
};

const handleAddExternalLink = () => {
  // 显示外部链接对话框
  showLinkDialog.value = true;
  hide();
};

// 剪贴板操作
const handlePaste = () => {
  document.execCommand('paste');
  hide();
};

const handlePasteAsPlainText = () => {
  navigator.clipboard.readText().then(text => {
    props.editor?.chain().focus().insertContent(text).run();
  });
  hide();
};

const handleSelectAll = () => {
  props.editor?.chain().focus().selectAll().run();
  hide();
};

// 点击外部关闭菜单
const handleClickOutside = (event: MouseEvent) => {
  if (menuRef.value && !menuRef.value.contains(event.target as Node)) {
    hide();
  }
};

// 键盘事件
const handleKeydown = (event: KeyboardEvent) => {
  if (event.key === 'Escape') {
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

// 外部链接对话框操作
const confirmLink = () => {
  if (linkUrl.value.trim()) {
    const url = linkUrl.value.trim();
    const { from, to } = props.editor?.state.selection || { from: 0, to: 0 };
    const selectedText = props.editor?.state.doc.textBetween(from, to, ' ');
    
    if (selectedText && selectedText.trim()) {
      // 如果有选中文本，将其转换为链接
      props.editor?.chain().focus().setLink({ href: url }).run();
    } else {
      // 如果没有选中文本，插入带链接的文本
      // 从 URL 中提取域名作为显示文本
      let displayText = url;
      try {
        const urlObj = new URL(url);
        displayText = urlObj.hostname;
      } catch (e) {
        // 如果不是有效的 URL，使用原始文本
        displayText = url;
      }
      
      // 插入链接
      props.editor?.chain().focus()
        .insertContent(`<a href="${url}" target="_blank" rel="noopener noreferrer">${displayText}</a>`)
        .run();
    }
  }
  closeLinkDialog();
};

const closeLinkDialog = () => {
  showLinkDialog.value = false;
  linkUrl.value = '';
};

const handleLinkDialogKeydown = (event: KeyboardEvent) => {
  if (event.key === 'Enter') {
    event.preventDefault();
    confirmLink();
  } else if (event.key === 'Escape') {
    event.preventDefault();
    closeLinkDialog();
  }
};

// 暴露方法
defineExpose({
  show,
  hide
});
</script>

<style lang="scss" scoped>
.context-menu {
  position: fixed;
  z-index: 9999;
  min-width: 220px;
  background: #ffffff;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  padding: 4px 0;
  user-select: none;
  transition: background-color 0.3s ease, border-color 0.3s ease;

  &.dark-theme {
    background: #2a2a2a;
    border-color: #404040;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);

    .menu-item {
      color: #dcddde;

      &:hover:not(.disabled) {
        background: #3a3a3a;
      }

      &.active {
        color: #5d6dfd;
      }

      &.disabled {
        color: #6c6c6c;
      }
    }

    .menu-divider {
      background: #404040;
    }

    .menu-arrow {
      color: #8e8e8e;
    }
  }

  &.submenu {
    margin-left: 5px;
  }
}

.menu-item {
  display: flex;
  align-items: center;
  height: 32px;
  padding: 0 12px;
  color: #2e2e2e;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.2s ease, color 0.2s ease;
  position: relative;

  &:hover:not(.disabled) {
    background: #f5f5f5;
  }

  &.active {
    color: #5d6dfd;
    font-weight: 500;
  }

  &.disabled {
    color: #b0b0b0;
    cursor: not-allowed;
    opacity: 0.6;
  }

  &.has-submenu {
    justify-content: space-between;
  }

  .menu-icon {
    margin-right: 8px;
    flex-shrink: 0;
  }

  .menu-arrow {
    margin-left: auto;
    color: #8e8e8e;
    flex-shrink: 0;
  }

  .check-mark {
    margin-left: auto;
    color: #5d6dfd;
    flex-shrink: 0;
  }

  .menu-shortcut {
    margin-left: auto;
    padding-left: 16px;
    color: #8e8e8e;
    font-size: 12px;
    font-family: monospace;
    flex-shrink: 0;
    opacity: 0.7;
  }

  span {
    flex: 1;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}

.menu-divider {
  height: 1px;
  background: #e0e0e0;
  margin: 4px 0;
  transition: background-color 0.3s ease;
}

// 动画
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.context-menu {
  animation: fadeIn 0.15s ease-out;
}

// 外部链接对话框样式
.link-dialog-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10000;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  animation: fadeIn 0.15s ease-out;
}

.link-dialog {
  background: #ffffff;
  border-radius: 8px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
  width: 480px;
  max-width: 90vw;
  overflow: hidden;
  animation: slideUp 0.2s ease-out;

  &.dark-theme {
    background: #2a2a2a;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.5);

    .link-dialog-title {
      color: #dcddde;
    }

    .link-dialog-input {
      background: #1a1a1a;
      border-color: #404040;
      color: #dcddde;

      &:focus {
        border-color: #5d6dfd;
      }

      &::placeholder {
        color: #6c6c6c;
      }
    }

    .link-dialog-button {
      &.cancel {
        background: #3a3a3a;
        color: #dcddde;

        &:hover {
          background: #4a4a4a;
        }
      }

      &.confirm {
        background: #5d6dfd;
        color: #ffffff;

        &:hover {
          background: #4a5ce8;
        }
      }
    }
  }
}

.link-dialog-header {
  padding: 16px 20px;
  border-bottom: 1px solid #e0e0e0;

  .dark-theme & {
    border-bottom-color: #404040;
  }
}

.link-dialog-title {
  font-size: 16px;
  font-weight: 600;
  color: #2e2e2e;
  transition: color 0.3s ease;
}

.link-dialog-body {
  padding: 20px;
}

.link-dialog-input {
  width: 100%;
  height: 40px;
  padding: 0 12px;
  border: 1px solid #e0e0e0;
  border-radius: 6px;
  font-size: 14px;
  color: #2e2e2e;
  background: #ffffff;
  outline: none;
  transition: border-color 0.2s ease, background-color 0.3s ease, color 0.3s ease;

  &:focus {
    border-color: #5d6dfd;
  }

  &::placeholder {
    color: #b0b0b0;
  }
}

.link-dialog-footer {
  padding: 12px 20px;
  border-top: 1px solid #e0e0e0;
  display: flex;
  justify-content: flex-end;
  gap: 12px;

  .dark-theme & {
    border-top-color: #404040;
  }
}

.link-dialog-button {
  height: 36px;
  padding: 0 20px;
  border: none;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s ease, color 0.2s ease;

  &.cancel {
    background: #f5f5f5;
    color: #2e2e2e;

    &:hover {
      background: #e0e0e0;
    }
  }

  &.confirm {
    background: #5d6dfd;
    color: #ffffff;

    &:hover {
      background: #4a5ce8;
    }
  }
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
