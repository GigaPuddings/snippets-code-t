<template>
  <ContextMenu :menu="menu" @select="handleContextMenu">
    <div
      class="link ui-menu-item block mt-0 mb-ui-row-gap"
      :class="{ active: isActive, 'is-dragging': isDragging }"
      role="link"
      tabindex="0"
      :aria-label="content.title"
      :aria-current="isActive ? 'page' : undefined"
      draggable="true"
      @click.prevent="handleClick"
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
        <span class="min-w-0 flex-1 truncate" :title="content.title">
          {{ content.title }}
        </span>
        <Star
          v-if="content.favorite"
          width="13"
          height="13"
          class="app-icon--filled shrink-0 text-[var(--workspace-nav-muted)]"
          :title="t('nav.favorited')"
          :aria-label="t('nav.favorited')"
        />
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
import Star from '~icons/lucide/star';
import type { Component } from 'vue';
import { useI18n } from 'vue-i18n';
import { useRoute, useRouter } from 'vue-router';
import { ErrorHandler, ErrorType } from '@/utils/error-handler';
import { invoke } from '@tauri-apps/api/core';
import { getWorkspaceRoot } from '@/api/markdown';
import modal from '@/utils/modal';
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
  (e: 'toggle-favorite', content: ContentType): void;
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

const menu = computed<MenuItem[]>(() => [
  {
    label: t(content.value.favorite ? 'nav.removeFavorite' : 'nav.addFavorite'),
    type: 'toggleFavorite',
    icon: Star
  },
  {
    label: t('contentItem.showInExplorer'),
    type: 'showInExplorer',
    icon: FolderOpen
  },
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
]);

const isActive = computed(() => {
  const routeId = route.params.id as string | undefined;
  if (!routeId) return false;
  const currentId = content.value.id as string;
  // route.params.id 为 encodeURIComponent 编码，需解码后比较；路径统一为 / 以便跨平台一致
  const normalizedRouteId = decodeURIComponent(routeId).replace(/\\/g, '/');
  const normalizedContentId = currentId.replace(/\\/g, '/');
  return normalizedRouteId === normalizedContentId;
});

const fragmentTypeLabel = computed(() => {
  const type = content.value.type || 'code';
  return type === 'note' ? t('contentItem.note') : t('contentItem.codeSnippet');
});

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
const handleClick = (): void => {
  try {
    // 如果已经在当前内容，不做任何操作
    if (isActive.value) {
      return;
    }

    // 获取当前的 cid（保持当前分类上下文）
    const currentCid = props.categoryId ?? route.params.cid;

    // 构建路由路径，始终保持当前的 cid
    const targetPath = currentCid
      ? `/config/category/contentList/${currentCid}/content/${encodeURIComponent(content.value.id as string)}`
      : `/config/category/contentList/content/${encodeURIComponent(content.value.id as string)}`;

    router.replace({
      path: targetPath,
      query:
        props.categoryId === undefined && route.query.view
          ? { view: route.query.view }
          : {},
      replace: true
    });
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
    categoryId: content.value.category_id
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
  isDragging.value = false;
  setActiveFragmentDrag(null);
  document.documentElement.classList.remove('fragment-drag-active');
};

/**
 * 处理右键菜单选择
 * @param item - 菜单项
 */
const handleContextMenu = async (item: MenuItem): Promise<void> => {
  try {
    if (item.type === 'showInExplorer') {
      // 在文件资源管理器中显示
      const workspaceRoot = await getWorkspaceRoot();
      if (!workspaceRoot) {
        modal.warning(t('settings.workspaceNotSet'));
        return;
      }
      const rawPath = content.value.id as string;
      // 判断是否为绝对路径
      const isAbsolute = /^[a-zA-Z]:[/\\]/.test(rawPath);
      // 拼接为绝对路径，统一用反斜杠（Windows 兼容）
      let fullPath = isAbsolute ? rawPath : `${workspaceRoot}\\${rawPath}`;
      // explorer /select 需要 Windows 风格的反斜杠路径
      await invoke('show_file_in_folder', { filePath: fullPath });
    } else if (item.type === 'rename') {
      // 重命名时，通过 query 参数传递标识
      // 获取当前的 cid（保持当前分类上下文）
      const currentCid = props.categoryId ?? route.params.cid;

      // 构建正确的路由路径，始终保持当前的 cid
      const targetPath = currentCid
        ? `/config/category/contentList/${currentCid}/content/${encodeURIComponent(content.value.id as string)}`
        : `/config/category/contentList/content/${encodeURIComponent(content.value.id as string)}`;

      router.push({
        path: targetPath,
        query: {
          ...(props.categoryId === undefined && route.query.view
            ? { view: route.query.view }
            : {}),
          rename: 'true'
        }
      });
    } else if (item.type === 'delete') {
      // 触发删除事件，让父组件处理
      emit('delete', content.value);
    } else if (item.type === 'toggleFavorite') {
      emit('toggle-favorite', content.value);
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
      border: 2px dashed var(--search-result-accent);
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
    color-mix(in srgb, var(--search-result-accent) 26%, var(--panel-border));
  border-radius: 9px;
  box-shadow: var(--fragment-drag-shadow);
}

:global(.fragment-drag-preview__icon) {
  display: grid;
  flex: 0 0 24px;
  place-items: center;
  width: 24px;
  height: 24px;
  color: var(--search-result-accent);
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
