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
          <div class="content-item-info-time">
            {{ formatDate(content.created_at) }}
          </div>
        </div>
      </main>
    </div>
  </ContextMenu>
  
  <!-- 更改分类对话框 -->
  <SelectConfirmDialog
    v-model="showCategoryDialog"
    v-model:selected="selectedCategoryId"
    :title="$t('contentItem.changeCategory')"
    :options="categoryOptions"
    :confirm-text="$t('common.confirm')"
    :cancel-text="$t('common.cancel')"
    @confirm="confirmCategoryChange"
  />
</template>

<script setup lang="ts">
import { formatDate } from '@/utils';
import {
  editFragment,
  getUncategorizedId
} from '@/api/fragment';
import { useConfigurationStore } from '@/store';
import { EditTwo, DeleteFour, CategoryManagement, Notebook, FileCodeOne } from '@icon-park/vue-next';
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { SelectConfirmDialog } from '../UI';

const { t } = useI18n();
const route = useRoute();
const store = useConfigurationStore();

const props = defineProps<{
  content: ContentType;
}>();
const { content } = toRefs(props);
const router = useRouter();

const emit = defineEmits<{
  (e: 'delete', content: ContentType): void;
}>();

defineOptions({
  name: 'ContentItem'
});

// 对话框状态
const showCategoryDialog = ref(false);
const selectedCategoryId = ref<number>(0);
const uncategorizedId = ref<number | null>(null);

const menu = computed(() => [
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

const categories = computed(() => store.categories);

// 分类选项（包括"未分类"）
const categoryOptions = computed(() => {
  return [
    { label: t('contentItem.uncategorized'), value: 0 },
    ...categories.value.map((category) => ({
      label: category.name,
      value: category.id as number
    }))
  ];
});

const isActive = computed(() => {
  return route.params.id === content.value.id.toString();
});

const fragmentTypeLabel = computed(() => {
  const type = content.value.type || 'code';
  return type === 'note' ? t('contentItem.note') : t('contentItem.codeSnippet');
});

// 显示最多2个标签(标签多时避免换行)
const displayTags = computed(() => {
  if (!content.value.tags || !Array.isArray(content.value.tags)) {
    return [];
  }
  return content.value.tags.slice(0, 2);
});

const handleClick = () => {
  const oContentScroller = document.querySelector('.content-scroller .vue-recycle-scroller__item-view') || document.querySelector('.content-list');
  const scrollY = oContentScroller?.scrollTop || 0; // 确保获取当前滚动位置

  // 判断当前是否在"所有片段"视图
  // 使用 route.params.cid 而不是 categoryId (路由参数名是 cid)
  const isAllSnippetsView = !route.params.cid;
  
  // 如果在"所有片段"视图,跳转到不带 categoryId 的路由
  const targetPath = isAllSnippetsView 
    ? `/config/category/contentList/content/${content.value.id}`
    : `/config/category/contentList/${content.value.category_id}/content/${content.value.id}`;

  router.replace({
    path: targetPath,
    query: { scrollY: scrollY.toString() }, // 通过查询参数传递滚动位置
    replace: true
  });
};

const handleTagClick = (tag: string) => {
  // 触发标签筛选
  router.push({
    path: `/config/category/contentList/${content.value.category_id}`,
    query: { tag }
  });
};

const handleContextMenu = async (item: any) => {
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
    showCategorySelector();
  }
};

const showCategorySelector = async () => {
  try {
    // 获取"未分类"的实际 ID
    uncategorizedId.value = await getUncategorizedId();
    
    // 如果当前片段的 category_id 等于"未分类"的实际 ID，则显示为 0
    selectedCategoryId.value = content.value.category_id === uncategorizedId.value ? 0 : content.value.category_id as number;
    
    // 显示对话框
    showCategoryDialog.value = true;
  } catch (error) {
    console.error('Failed to get uncategorized ID:', error);
  }
};

const confirmCategoryChange = async () => {
  try {
    // 将前端的 0 转换回实际的"未分类" ID
    const actualCategoryId = selectedCategoryId.value === 0 ? uncategorizedId.value : selectedCategoryId.value;
    
    if (actualCategoryId !== content.value.category_id) {
      await handleCategoryChange(actualCategoryId!, uncategorizedId.value);
    }
    
    showCategoryDialog.value = false;
  } catch (error) {
    console.error('Failed to change category:', error);
  }
};

const handleCategoryChange = async (categoryId: string | number, uncategorizedId: number | null) => {
  try {
    let params = Object.assign(content.value, { category_id: categoryId });
    await editFragment(params);
    
    // 如果修改为未分类，跳转到未分类视图（使用前端标识 0）
    // 否则跳转到对应的分类 ID
    const targetCid = categoryId === uncategorizedId ? '0' : categoryId;
    router.replace(`/config/category/contentList/${targetCid}`);
  } catch (error) {
    console.error('Update category failed:', error);
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

  .content-item-info {
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
    @apply flex justify-between items-center gap-2 text-content;

    .content-item-info-time {
      @apply text-[10px] opacity-60 flex-shrink-0;
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
  }
}
</style>
