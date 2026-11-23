<template>
  <ContextMenu :menu="menu" @select="handleContextMenu">
    <div
      class="link ui-menu-item block mt-0 mb-ui-row-gap select-none"
      :class="{ active: isActive, 'is-dragging': isDragging }"
      role="link"
      tabindex="0"
      :aria-label="content.title"
      :aria-current="isActive ? 'page' : undefined"
      :draggable="!renameEditor"
      @click.prevent="handleClick"
      @dblclick.prevent="startRename"
      @keydown.f2.prevent="startRename"
      @keydown.enter.prevent="handleClick"
      @keydown.space.prevent="handleClick"
      @dragstart="handleDragStart"
      @dragend="handleDragEnd"
    >
      <main class="compact-content-item">
        <component
          :is="content.type === 'note' ? Notebook : FileCodeOne"
          width="16"
          height="16"
          class="shrink-0"
          :title="fragmentTypeLabel"
        />
        <input
          v-if="renameEditor"
          ref="renameInput"
          class="h-6 min-w-0 flex-1 select-text rounded border border-active bg-panel px-1 text-panel outline-none"
          :aria-label="t('contentItem.rename')"
          @click.stop
          @dblclick.stop
          @contextmenu.stop
          @keydown.stop="handleRenameKey"
          @blur="finishRename(true)"
        />
        <span v-else class="min-w-0 flex-1 truncate" :title="content.title">
          {{ content.title }}
        </span>
      </main>
    </div>
  </ContextMenu>
</template>

<script setup lang="ts">
import EditTwo from '~icons/lucide/square-pen';
import DeleteFour from '~icons/lucide/trash-2';
import CategoryManagement from '~icons/lucide/folder-input';
import Notebook from '~icons/lucide/notebook';
import FileCodeOne from '~icons/lucide/file-code';
import FolderOpen from '~icons/lucide/folder-open';
import FileConversion from '~icons/lucide/replace';
import type { Component } from 'vue';
import { contentEditorKey } from './contentEditor';
import { useI18n } from 'vue-i18n';
import { useRoute, useRouter } from 'vue-router';
import { ErrorHandler, ErrorType } from '@/utils/error-handler';
import { getWorkspaceRoot } from '@/api/markdown';
import modal from '@/utils/modal';
import {
  resolveWorkspaceFilePath,
  revealFileInFolder
} from '@/utils/file-system';
import {
  getConfigContentPath,
  navigateConfigRoute
} from '@/utils/config-navigation';
import {
  FRAGMENT_DRAG_MIME,
  serializeFragmentDragPayload,
  setActiveFragmentDrag
} from '@/utils/fragmentDragDrop';

/**
 * 组件 Props 接口
 */
interface ContentItemProps {
  /** 内容项数据 */
  content: ContentType;
  categoryId?: string | number;
  sourceTag?: string;
}

/**
 * 组件 Emits 接口
 */
interface ContentItemEmits {
  /** 删除内容项 */
  (e: 'delete', content: ContentType): void;
  /** 更改分类 */
  (e: 'changeCategory', content: ContentType): void;
  /** 转换内容类型 */
  (e: 'convertType', content: ContentType, targetType: 'code' | 'note'): void;
  (e: 'removeTag', content: ContentType): void;
}

/**
 * 右键菜单项接口
 */
interface MenuItem {
  label: string;
  type: string;
  icon: Component;
}

const { t } = useI18n();
const route = useRoute();
const router = useRouter();

const props = defineProps<ContentItemProps>();
const { content } = toRefs(props);

const emit = defineEmits<ContentItemEmits>();
const isDragging = ref(false);

defineOptions({
  name: 'ContentItem'
});

const menu = computed<MenuItem[]>(() => {
  const showInExplorer = {
    label: t('contentItem.showInExplorer'),
    type: 'showInExplorer',
    icon: FolderOpen
  };
  if (props.sourceTag) {
    return [
      showInExplorer,
      { label: t('tags.remove'), type: 'delete', icon: DeleteFour }
    ];
  }
  return [
    showInExplorer,
    {
      label: t('contentItem.changeCategory'),
      type: 'edit',
      icon: CategoryManagement
    },
    {
      label:
        content.value.type === 'note'
          ? t('category.convertToCode')
          : t('category.convertToNote'),
      type: 'convertType',
      icon: FileConversion
    },
    {
      label: t('contentItem.rename'),
      type: 'rename',
      icon: EditTwo
    },
    {
      label: t('contentItem.delete'),
      type: 'delete',
      icon: DeleteFour
    }
  ];
});

const isActive = computed(() => {
  const routeId = route.params.id as string | undefined;
  if (!routeId) return false;
  const currentId = String(content.value.id);
  const normalizedRouteId = routeId.replace(/\\/g, '/');
  const normalizedContentId = currentId.replace(/\\/g, '/');
  return normalizedRouteId === normalizedContentId;
});

const fragmentTypeLabel = computed(() => {
  const type = content.value.type || 'code';
  return type === 'note' ? t('contentItem.note') : t('contentItem.codeSnippet');
});

const activeEditor = inject(contentEditorKey, null);
const editingId = ref<ContentType['id'] | null>(null);
const renameInput = ref<HTMLInputElement | null>(null);
const renameEditor = computed(() => {
  const editor = activeEditor?.value;
  return isActive.value &&
    editingId.value === content.value.id &&
    editor &&
    getConfigContentPath(editor.id) === getConfigContentPath(content.value.id)
    ? editor
    : null;
});

watch(
  renameInput,
  (input) => {
    if (!input || !renameEditor.value) return;
    input.value = renameEditor.value.title;
    input.focus();
    input.select();
  },
  { flush: 'post' }
);

watch([() => content.value.id, isActive], () => {
  editingId.value = null;
});

async function startRename(): Promise<void> {
  const id = content.value.id;
  // Keep the originating row mounted, including Recent and quick-access lists.
  await openContent();
  if (isActive.value && content.value.id === id) editingId.value = id;
}

function finishRename(commit: boolean): void {
  const editor = renameEditor.value;
  const title = renameInput.value?.value.trim();
  editingId.value = null;
  if (commit && title && editor && title !== editor.title) editor.rename(title);
}

function handleRenameKey(event: KeyboardEvent): void {
  if (event.isComposing || (event.key !== 'Enter' && event.key !== 'Escape'))
    return;
  event.preventDefault();
  const row = renameInput.value?.closest<HTMLElement>('[role="link"]');
  finishRename(event.key === 'Enter');
  row?.focus();
}

const createDragPreview = (source: HTMLElement): HTMLElement => {
  const preview = document.createElement('div');
  preview.className = 'fragment-drag-preview';

  const icon = document.createElement('span');
  icon.className = 'fragment-drag-preview__icon';
  icon.setAttribute('aria-hidden', 'true');
  // Reuse the rendered type icon so drag images share the list's local SVG.
  // Raw virtual imports are treated as assets by Vite's development server.
  const typeIcon = source.querySelector('.compact-content-item > svg');
  if (typeIcon) icon.appendChild(typeIcon.cloneNode(true));

  const title = document.createElement('strong');
  title.className = 'fragment-drag-preview__title';
  title.textContent = content.value.title;
  preview.append(icon, title);
  document.body.appendChild(preview);
  return preview;
};

/**
 * 处理点击事件
 */
const handleClick = (): Promise<void> => openContent(props.categoryId);

const openContent = async (categoryId?: string | number): Promise<void> => {
  try {
    // 如果已经在当前内容，不做任何操作
    if (isActive.value) {
      return;
    }

    // 获取当前的 cid（保持当前分类上下文）
    const currentCid = categoryId ?? route.params.cid;

    // 构建路由路径，始终保持当前的 cid
    const targetPath = getConfigContentPath(content.value.id, currentCid);

    await navigateConfigRoute(
      router,
      {
        path: targetPath,
        query:
          categoryId === undefined && route.query.view === 'tags'
            ? { view: 'tags' }
            : {},
        replace: true
      },
      true
    );
  } catch (error) {
    ErrorHandler.handle(error, {
      type: ErrorType.UNKNOWN_ERROR,
      operation: 'ContentItem.handleClick',
      details: { contentId: content.value.id },
      timestamp: new Date()
    });
  }
};

const handleDragStart = (event: DragEvent): void => {
  if (!event.dataTransfer || !(event.currentTarget instanceof HTMLElement)) {
    return;
  }

  const payload = {
    id: content.value.id,
    title: content.value.title,
    categoryId: content.value.category_id,
    sourceTag: props.sourceTag
  };
  isDragging.value = true;
  setActiveFragmentDrag(payload);
  document.documentElement.classList.add('fragment-drag-active');
  event.dataTransfer.effectAllowed = 'move';
  event.dataTransfer.setData(
    FRAGMENT_DRAG_MIME,
    serializeFragmentDragPayload(payload)
  );
  // WebView2 需要一个常规文本类型，才能稳定启动跨容器的 HTML5 拖拽会话。
  event.dataTransfer.setData('text/plain', String(content.value.title));

  const dragPreview = createDragPreview(event.currentTarget);
  // 将鼠标热点放在浮层左侧外部，避免浮层遮住当前分类目标。
  event.dataTransfer.setDragImage(dragPreview, -12, -8);
  requestAnimationFrame(() => dragPreview.remove());
};

const handleDragEnd = (): void => {
  if (!isDragging.value) return;
  isDragging.value = false;
  setActiveFragmentDrag(null);
  document.documentElement.classList.remove('fragment-drag-active');
};
onBeforeUnmount(handleDragEnd);

/**
 * 处理右键菜单选择
 * @param item - 菜单项
 */
const handleContextMenu = async (item: MenuItem): Promise<void> => {
  try {
    if (item.type === 'showInExplorer') {
      const rawPath = String(content.value.id);
      const workspaceRoot = await getWorkspaceRoot();
      const fullPath = resolveWorkspaceFilePath(rawPath, workspaceRoot);
      if (!fullPath) {
        modal.warning(t('workbenchHome.workspaceNotSet'));
        return;
      }
      if (props.sourceTag && rawPath === String(content.value.id)) {
        await openContent();
      }
      await revealFileInFolder(fullPath.replace(/\//g, '\\'));
    } else if (item.type === 'rename') {
      await startRename();
    } else if (item.type === 'delete') {
      if (props.sourceTag) emit('removeTag', content.value);
      else emit('delete', content.value);
    } else if (item.type === 'edit') {
      // 触发更改分类事件，让父组件处理
      emit('changeCategory', content.value);
    } else if (item.type === 'convertType') {
      const targetType = content.value.type === 'note' ? 'code' : 'note';
      emit('convertType', content.value, targetType);
    }
  } catch (error) {
    ErrorHandler.handle(error, {
      type: ErrorType.UNKNOWN_ERROR,
      operation: 'ContentItem.handleContextMenu',
      details: { menuType: item.type },
      timestamp: new Date()
    });
  }
};
</script>

<style scoped lang="scss">
.link {
  &.is-dragging {
    z-index: 1;
    background: color-mix(
      in srgb,
      var(--search-result-active) 42%,
      transparent
    );

    &::before {
      position: absolute;
      inset: 2px;
      z-index: 2;
      pointer-events: none;
      content: '';
      border: 2px dashed var(--el-color-primary);
      border-radius: 7px;
    }
  }
}

.compact-content-item {
  @apply flex h-ui-row min-w-0 items-center gap-2 px-2;
}

:global(.fragment-drag-active) {
  cursor: grabbing;
}

:global(.fragment-drag-active *) {
  cursor: grabbing !important;
}

:global(.fragment-drag-preview) {
  position: fixed;
  top: -1000px;
  left: -1000px;
  z-index: 99999;
  display: flex;
  gap: 7px;
  align-items: center;
  width: max-content;
  max-width: 220px;
  min-height: 36px;
  padding: 6px 10px 6px 7px;
  color: var(--panel-text);
  pointer-events: none;
  background: color-mix(in srgb, var(--panel-bg) 97%, transparent);
  backdrop-filter: blur(12px);
  border: 1px solid
    color-mix(in srgb, var(--el-color-primary) 26%, var(--panel-border));
  border-radius: 9px;
  box-shadow: var(--fragment-drag-shadow);
}

:global(.fragment-drag-preview__icon) {
  display: grid;
  flex: 0 0 24px;
  place-items: center;
  width: 24px;
  height: 24px;
  color: var(--el-color-primary);
  background: color-mix(in srgb, var(--search-result-active) 72%, transparent);
  border-radius: 7px;
}

:global(.fragment-drag-preview__icon svg) {
  width: 15px;
  height: 15px;
  fill: none;
  stroke: currentcolor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

:global(.fragment-drag-preview__title) {
  display: block;
  flex: 1;
  min-width: 0;
  overflow: hidden;
  font-size: 12px;
  font-weight: 600;
  line-height: 1.25;
  color: var(--panel-text);
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
