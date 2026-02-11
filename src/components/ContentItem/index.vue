<template>
  <ContextMenu :menu="menu" @select="handleContextMenu">
    <div
      class="link"
      :class="{ active: isActive }"
      @click.prevent="handleClick"
    >
      <main class="content-item-wrapper">
        <div class="content-item-header">
          <div class="content-item-title">{{ content.title }}</div>
          <el-tooltip
            effect="dark"
            :content="fragmentTypeLabel"
            placement="top"
          >
            <div class="fragment-type-icon" :class="`type-${content.type || 'code'}`">
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
          <div v-if="content.tags && content.tags.length > 0" class="content-item-tags">
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
            {{ formatDate(content.updated_at || content.created_at || new Date()) }}
          </div>
        </div>
      </main>
    </div>
  </ContextMenu>
</template>

<script setup lang="ts">
import { formatDate } from '@/utils';
import { EditTwo, DeleteFour, CategoryManagement, Notebook, FileCodeOne, FolderOpen } from '@icon-park/vue-next';
import { computed, toRefs } from 'vue';
import type { Component } from 'vue';
import { useI18n } from 'vue-i18n';
import { useRoute, useRouter } from 'vue-router';
import { ErrorHandler, ErrorType } from '@/utils/error-handler';

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

defineOptions({
  name: 'ContentItem'
});

const menu = computed<MenuItem[]>(() => [
  {
    label: t('contentItem.changeCategory'),
    type: 'edit',
    icon: CategoryManagement
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
  return route.params.id === content.value.id.toString();
});

const fragmentTypeLabel = computed(() => {
  const type = content.value.type || 'code';
  return type === 'note' ? t('contentItem.note') : t('contentItem.codeSnippet');
});

// 显示最多2个标签(标签多时避免换行)
const displayTags = computed(() => {
  if (!content.value.tags) {
    return [];
  }
  
  // tags 现在是 string[] 类型
  const tagsArray = Array.isArray(content.value.tags) 
    ? content.value.tags 
    : [];
  
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
    
    // 判断当前是否在"所有片段"视图
    // 使用 route.params.cid 而不是 categoryId (路由参数名是 cid)
    const isAllSnippetsView = !route.params.cid;
    
    // 如果在"所有片段"视图,跳转到不带 categoryId 的路由
    const targetPath = isAllSnippetsView 
      ? `/config/category/contentList/content/${content.value.id}`
      : `/config/category/contentList/${content.value.category_id}/content/${content.value.id}`;

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
    if (item.type === 'rename') {
      // 重命名时，通过 query 参数传递标识
      router.push({
        path: `/config/category/contentList/${content.value.category_id}/content/${content.value.id}`,
        query: { rename: 'true' }
      });
    } else if (item.type === 'delete') {
      // 触发删除事件，让父组件处理
      emit('delete', content.value);
    } else if (item.type === 'edit') {
      // 触发更改分类事件，让父组件处理
      emit('changeCategory', content.value);
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
  @apply block py-1 truncate rounded-lg cursor-pointer transition-all hover:bg-hover dark:hover:bg-hover hover:border-panel border-b-transparent;
}

.link {
  @include commonLink();
}

.active {
  @apply bg-active dark:bg-active hover:bg-active dark:hover:bg-active;

  .content-item-title {
    @apply truncate;
    color: #fff !important;
  }

  .content-item-info, .content-item-category {
    color: #fff !important;
  }
  
  .content-item-info-time {
    color: rgba(255, 255, 255, 0.7) !important;
  }
  
  .fragment-type-icon {
    &.type-code {
      background-color: rgba(255, 255, 255, 0.2);
      color: #fff !important;
    }

    &.type-note {
      background-color: rgba(255, 255, 255, 0.2);
      color: #fff !important;
    }
  }
  
  .content-item-tags {
    .tag-item {
      background-color: rgba(255, 255, 255, 0.2);
      color: #fff !important;
      border: 1px solid rgba(255, 255, 255, 0.3);
      
      &:hover {
        background-color: rgba(255, 255, 255, 0.3);
        border-color: rgba(255, 255, 255, 0.5);
        color: #fff !important;
      }
    }
    
    .more-tags {
      color: rgba(255, 255, 255, 0.7) !important;
      opacity: 1;
    }
  }
}

.content-item-wrapper {
  @apply relative text-xs px-3 py-[6px] rounded-md select-none;

  .content-item-header {
    @apply flex items-center justify-between gap-2 mb-1.5;

    .content-item-title {
      @apply truncate text-panel flex-1 font-medium;
    }

    .fragment-type-icon {
      @apply flex-shrink-0 w-6 h-6 rounded flex items-center justify-center;
      transition: all 0.15s ease;

      &.type-code,
      &.type-note {
        background-color: rgba(0, 0, 0, 0.04);
        color: #666;
      }
      
      &:hover {
        transform: scale(1.05);
        background-color: rgba(0, 0, 0, 0.08);
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
      transition: all 0.15s ease;
      line-height: 1.2;
      max-width: 60px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      
      &:hover {
        background-color: rgba(0, 0, 0, 0.08);
        color: #4a9eff;
      }
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
  .fragment-type-icon {
    &.type-code,
    &.type-note {
      background-color: rgba(255, 255, 255, 0.06);
      color: #999;
    }
    
    &:hover {
      background-color: rgba(255, 255, 255, 0.1);
    }
  }
  
  .content-item-tags {
    .tag-item {
      background-color: rgba(255, 255, 255, 0.06);
      color: #999;
      
      &:hover {
        background-color: rgba(255, 255, 255, 0.1);
        color: #4a9eff;
      }
    }
  }
  
  .active {
    .content-item-tags {
      .tag-item {
        background-color: rgba(74, 158, 255, 0.2);
        color: #4a9eff;
        border-color: rgba(74, 158, 255, 0.4);
        
        &:hover {
          background-color: rgba(74, 158, 255, 0.3);
          border-color: rgba(74, 158, 255, 0.6);
        }
      }
    }
    
    .content-item-category {
      color: rgba(255, 255, 255, 0.7) !important;
    }
  }
}
</style>
