<template>
  <ContextMenu :menu="menu" @select="handleContextMenu">
    <div
      class="link"
      :class="{ active: isActive, 'is-dragging': isDragging }"
      draggable="true"
      @click.prevent="handleClick"
      @dragstart="handleDragStart"
      @dragend="handleDragEnd"
    >
      <main class="content-item-wrapper">
        <div class="content-item-header">
          <div class="content-item-title">{{ content.title }}</div>
          <el-tooltip
            effect="light"
            :content="fragmentTypeLabel"
            placement="top"
          >
            <div
              class="fragment-type-icon"
              :class="`type-${content.type || 'code'}`"
            >
              <notebook
                v-if="content.type === 'note'"
                theme="outline"
                size="14"
                :strokeWidth="3"
              />
              <file-code-one
                v-else
                theme="outline"
                size="14"
                :strokeWidth="3"
              />
            </div>
          </el-tooltip>
        </div>
        <div class="content-item-info">
          <div
            v-if="content.tags && content.tags.length > 0"
            class="content-item-tags"
          >
            <span
              v-for="(tag, index) in displayTags"
              :key="index"
              class="tag-item"
              @click.stop="handleTagClick(tag)"
            >
              {{ tag }}
            </span>
            <span v-if="content.tags.length > 2" class="more-tags">
              +{{ content.tags.length - 2 }}
            </span>
          </div>
          <div v-else-if="content.category_name" class="content-item-category">
            <folder-open theme="outline" size="12" :strokeWidth="3" />
            <span class="category-name">{{ content.category_name }}</span>
          </div>
          <div class="content-item-info-time">
            {{
              formatDate(content.updated_at || content.created_at || new Date())
            }}
          </div>
        </div>
      </main>
    </div>
  </ContextMenu>
</template>

<script setup lang="ts">
import { formatDate } from '@/utils';
import {
  EditTwo,
  DeleteFour,
  CategoryManagement,
  Notebook,
  FileCodeOne,
  FolderOpen,
  FileConversion
} from '@icon-park/vue-next';
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

const createDragPreview = (): HTMLElement => {
  const preview = document.createElement('div');
  preview.className = 'fragment-drag-preview';

  const icon = document.createElement('span');
  icon.className = 'fragment-drag-preview__icon';
  icon.setAttribute('aria-hidden', 'true');
  icon.innerHTML =
    '<svg viewBox="0 0 24 24"><path d="M3.75 6.75h5l1.5 1.75h10v8.75a2 2 0 0 1-2 2H5.75a2 2 0 0 1-2-2V6.75Z"/><path d="M3.75 9h16.5"/></svg>';

  const copy = document.createElement('span');
  copy.className = 'fragment-drag-preview__copy';
  const title = document.createElement('strong');
  title.textContent = content.value.title;
  const hint = document.createElement('small');
  hint.textContent = t('contentItem.dragHint');
  copy.append(title, hint);

  const action = document.createElement('span');
  action.className = 'fragment-drag-preview__action';
  action.textContent = t('contentItem.move');
  preview.append(icon, copy, action);
  document.body.appendChild(preview);
  return preview;
};

// 显示最多2个标签(标签多时避免换行)
const displayTags = computed(() => {
  if (!content.value.tags) {
    return [];
  }

  // tags 现在是 string[] 类型
  const tagsArray = Array.isArray(content.value.tags) ? content.value.tags : [];

  return tagsArray.slice(0, 2);
});

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
    const currentCid = route.params.cid;

    // 构建路由路径，始终保持当前的 cid
    const targetPath = currentCid
      ? `/config/category/contentList/${currentCid}/content/${encodeURIComponent(content.value.id as string)}`
      : `/config/category/contentList/content/${encodeURIComponent(content.value.id as string)}`;

    router.replace({
      path: targetPath,
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
  if (!event.dataTransfer) return;

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

  const dragPreview = createDragPreview();
  event.dataTransfer.setDragImage(dragPreview, 28, 28);
  requestAnimationFrame(() => dragPreview.remove());
};

const handleDragEnd = (): void => {
  isDragging.value = false;
  setActiveFragmentDrag(null);
  document.documentElement.classList.remove('fragment-drag-active');
};

/**
 * 处理标签点击事件
 * @param tag - 标签名称
 */
const handleTagClick = (tag: string): void => {
  try {
    // 保持在当前视图下进行标签筛选
    // 如果在"所有片段"视图，不传 cid
    // 如果在特定分类视图，保持当前 cid
    const currentCid = route.params.cid;
    const targetPath = currentCid
      ? `/config/category/contentList/${currentCid}`
      : '/config/category/contentList';

    router.push({
      path: targetPath,
      query: { tag }
    });
  } catch (error) {
    ErrorHandler.handle(error, {
      type: ErrorType.UNKNOWN_ERROR,
      operation: 'ContentItem.handleTagClick',
      details: { tag },
      timestamp: new Date()
    });
  }
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
      const currentCid = route.params.cid;

      // 构建正确的路由路径，始终保持当前的 cid
      const targetPath = currentCid
        ? `/config/category/contentList/${currentCid}/content/${encodeURIComponent(content.value.id as string)}`
        : `/config/category/contentList/content/${encodeURIComponent(content.value.id as string)}`;

      router.push({
        path: targetPath,
        query: { rename: 'true' }
      });
    } else if (item.type === 'delete') {
      // 触发删除事件，让父组件处理
      emit('delete', content.value);
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
@mixin commonLink {
  @apply block rounded-lg cursor-pointer transition-colors duration-200 ease-out border-b-transparent;
  position: relative;
  border: 1px solid transparent;
}

.link {
  @include commonLink();

  &.is-dragging {
    z-index: 1;
    border-color: color-mix(in srgb, var(--search-result-accent) 52%, transparent);
    background: color-mix(in srgb, var(--search-result-active) 72%, var(--categories-panel-bg));
    box-shadow: inset 0 0 0 1px color-mix(in srgb, var(--search-result-accent) 16%, transparent);
    opacity: 0.68;
    transform: scale(0.985);

    &::after {
      position: absolute;
      inset: 4px;
      pointer-events: none;
      content: '';
      border: 1px dashed color-mix(in srgb, var(--search-result-accent) 58%, transparent);
      border-radius: 6px;
    }
  }
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
  width: 292px;
  min-height: 62px;
  padding: 10px 11px;
  align-items: center;
  gap: 10px;
  color: var(--panel-text);
  background: color-mix(in srgb, var(--panel-bg) 94%, transparent);
  border: 1px solid color-mix(in srgb, var(--search-result-accent) 42%, var(--panel-border));
  border-radius: 12px;
  box-shadow: var(--fragment-drag-shadow);
  backdrop-filter: blur(18px);
  pointer-events: none;
}

:global(.fragment-drag-preview__icon) {
  display: grid;
  width: 38px;
  height: 38px;
  flex: 0 0 38px;
  color: var(--search-result-accent);
  background: color-mix(in srgb, var(--search-result-active) 82%, transparent);
  border: 1px solid color-mix(in srgb, var(--search-result-accent) 28%, transparent);
  border-radius: 10px;
  place-items: center;
}

:global(.fragment-drag-preview__icon svg) {
  width: 20px;
  height: 20px;
  fill: none;
  stroke: currentcolor;
  stroke-width: 1.7;
  stroke-linecap: round;
  stroke-linejoin: round;
}

:global(.fragment-drag-preview__copy) {
  display: flex;
  min-width: 0;
  flex: 1;
  flex-direction: column;
  gap: 3px;
}

:global(.fragment-drag-preview__copy strong) {
  overflow: hidden;
  color: var(--panel-text);
  font-size: 13px;
  font-weight: 600;
  line-height: 1.2;
  text-overflow: ellipsis;
  white-space: nowrap;
}

:global(.fragment-drag-preview__copy small) {
  overflow: hidden;
  color: var(--panel-text-secondary);
  font-size: 11px;
  line-height: 1.2;
  text-overflow: ellipsis;
  white-space: nowrap;
}

:global(.fragment-drag-preview__action) {
  padding: 4px 7px;
  flex: 0 0 auto;
  color: var(--search-result-accent);
  font-size: 10px;
  font-weight: 600;
  background: color-mix(in srgb, var(--search-result-active) 72%, transparent);
  border-radius: 999px;
}

.link:not(.active):hover {
  @apply bg-hover dark:bg-hover border-panel;

  .fragment-type-icon {
    transform: scale(1.05);
    background-color: rgba(0, 0, 0, 0.08);
  }

  .content-item-tags {
    .tag-item {
      background-color: rgba(0, 0, 0, 0.08);
      color: #4a9eff;
    }
  }
}

.active {
  background-color: var(--search-result-active);
  border-color: var(--search-result-active-border);

  &::before {
    position: absolute;
    top: 7px;
    bottom: 7px;
    left: 0;
    width: 3px;
    pointer-events: none;
    content: '';
    background: var(--search-result-accent);
    border-radius: 0 999px 999px 0;
  }

  .content-item-wrapper {
    .content-item-header {
      .content-item-title {
        @apply truncate;
        color: var(--categories-text-color);
        font-weight: 600;
      }

      .fragment-type-icon {
        &.type-code,
        &.type-note {
          color: var(--search-result-accent);
          background-color: var(--search-card-bg);
        }

        :deep(svg) {
          color: inherit;
        }
      }
    }

    .content-item-info,
    .content-item-category {
      color: var(--categories-info-text-color);
      transition: color 0.2s ease;
    }

    .content-item-info-time {
      color: var(--categories-info-text-color);
      transition: color 0.2s ease;
    }

    .content-item-tags {
      .tag-item {
        color: var(--search-result-accent);
        background-color: var(--search-card-bg);
        border: 1px solid var(--search-result-active-border);

        &:hover {
          color: var(--search-result-accent);
          background-color: var(--search-result-active);
          border-color: var(--search-result-active-border);
        }
      }

      .more-tags {
        color: var(--categories-info-text-color);
        opacity: 1;
      }
    }
  }
}

.content-item-wrapper {
  @apply relative text-xs px-2.5 py-1.5 rounded-md select-none;

  .content-item-header {
    @apply flex items-center justify-between gap-2 mb-3;

    .content-item-title {
      @apply truncate text-panel flex-1 font-medium;
      transition: none;
    }

    .fragment-type-icon {
      @apply flex-shrink-0 w-5 h-5 rounded flex items-center justify-center;
      transition:
        background-color 0.2s ease,
        color 0.2s ease,
        transform 0.15s ease;

      &.type-code,
      &.type-note {
        background-color: rgba(0, 0, 0, 0.04);
        color: #666;
      }
    }
  }

  .content-item-info {
    @apply flex items-center gap-2 text-content;

    .content-item-info-time {
      @apply text-[10px] opacity-60 flex-shrink-0 ml-auto;
    }
  }

  .content-item-tags {
    @apply flex gap-1 items-center flex-1 min-w-0 overflow-hidden;

    .tag-item {
      @apply inline-flex items-center px-1.5 py-0.5 rounded text-[10px] cursor-pointer flex-shrink-0;
      background-color: rgba(0, 0, 0, 0.04);
      color: #666;
      transition:
        background-color 0.2s ease,
        border-color 0.2s ease,
        color 0.2s ease;
      line-height: 1.2;
      max-width: 60px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .more-tags {
      @apply text-[10px] text-content opacity-50 flex-shrink-0;
    }
  }

  .content-item-category {
    @apply flex gap-1 items-center flex-1 min-w-0 overflow-hidden;
    @apply text-[10px] text-content opacity-60;

    .category-name {
      @apply truncate;
    }
  }
}

// 暗色模式
:global(.dark) {
  .link:not(.active):hover {
    .fragment-type-icon {
      background-color: rgba(255, 255, 255, 0.1);
    }

    .content-item-tags {
      .tag-item {
        background-color: rgba(255, 255, 255, 0.1);
        color: #4a9eff;
      }
    }
  }

  .fragment-type-icon {
    &.type-code,
    &.type-note {
      background-color: rgba(255, 255, 255, 0.06);
      color: #999;
    }
  }

  .content-item-tags {
    .tag-item {
      background-color: rgba(255, 255, 255, 0.06);
      color: #999;
    }
  }

  .active {
    .content-item-tags {
      .tag-item {
        color: var(--search-result-accent);
        background-color: var(--search-card-bg);
        border-color: var(--search-result-active-border);

        &:hover {
          background-color: var(--search-result-active);
          border-color: var(--search-result-active-border);
        }
      }
    }

    .content-item-category {
      color: var(--categories-info-text-color);
    }
  }
}
</style>
