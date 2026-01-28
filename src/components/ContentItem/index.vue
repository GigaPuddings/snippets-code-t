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
</template>

<script setup lang="ts">
import { formatDate } from '@/utils';
import {
  deleteFragment,
  editFragment,
  getFragmentList,
  getUncategorizedId
} from '@/api/fragment';
import { useConfigurationStore } from '@/store';
import { EditTwo, DeleteFour, CategoryManagement, Notebook, FileCodeOne } from '@icon-park/vue-next';
import { h, computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { CustomButton } from '../UI';

const { t } = useI18n();
const route = useRoute();
const store = useConfigurationStore();

const props = defineProps<{
  content: ContentType;
}>();
const { content } = toRefs(props);
const router = useRouter();

defineOptions({
  name: 'ContentItem'
});

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
    try {
      await ElMessageBox.confirm(
        t('contentItem.deleteConfirm', { name: content.value.title }),
        t('common.warning'),
        {
          confirmButtonText: t('common.confirm'),
          cancelButtonText: t('common.cancel'),
          type: 'warning'
        }
      );
      
      await deleteFragment(Number(content.value.id));
      ElMessage.success(t('contentItem.deleteSuccess'));
      if (route.params.id) {
        // 如果当前在详情页，跳转回列表页
        const cid = route.params.cid;
        const targetPath = cid 
          ? `/config/category/contentList/${cid}`
          : '/config/category/contentList';
        router.push(targetPath);
      } else {
        // 如果在列表页，刷新列表
        const cid = route.params.cid as string | undefined;
        let categoryId: number | undefined;
        
        if (!cid) {
          // 没有 cid，查询所有片段
          categoryId = undefined;
        } else if (cid === '0') {
          // cid 为 "0"，查询未分类片段
          const uncategorizedId = await getUncategorizedId();
          categoryId = uncategorizedId ?? undefined;
        } else {
          // 普通分类 ID
          categoryId = Number(cid);
        }
        
        const result = await getFragmentList(categoryId);
        store.contents = result;
      }
    } catch (error) {
      // 用户取消
    }
  } else if (item.type === 'edit') {
    showCategorySelector();
  }
};

const showCategorySelector = async () => {
  try {
    // 获取"未分类"的实际 ID
    const uncategorizedId = await getUncategorizedId();
    
    const categoryOptions = categories.value.map((category) => ({
      label: category.name,
      value: category.id
    }));

    // 如果当前片段的 category_id 等于"未分类"的实际 ID，则显示为 0
    const currentCategoryId = content.value.category_id === uncategorizedId ? 0 : content.value.category_id;
    const categoryId = ref(currentCategoryId); // 使用 ref 来保持选中的值
    
    // 取消ElMessageBox自带的确定按钮、取消按钮, 自定义确定按钮、取消按钮
    await ElMessageBox({
      title: t('contentItem.changeCategory'),
      showCancelButton: false,
      showConfirmButton: false,
      closeOnClickModal: false,
      closeOnPressEscape: false,
      customClass: 'category-edit',
      message: () => {
        return h('div', [
          h(
            ElSelect,
            {
              modelValue: categoryId.value,
              'onUpdate:modelValue': (newValue: number) => {
                categoryId.value = newValue;
              },
              class: 'category-management'
            },
            {
              default: () => [
                h(ElOption, { label: t('contentItem.uncategorized'), value: 0 }),
                ...categoryOptions.map((option: any) =>
                  h(ElOption, { label: option.label, value: option.value })
                )
              ]
            }
          ),
          h('div', { class: 'message-footer' }, [
            h(
              CustomButton,
              {
                type: 'default',
                size: '',
                onClick: () => {
                  ElMessageBox.close();
                }
              },
              { default: () => t('common.cancel') }
            ),
            h(
              CustomButton,
              {
                type: 'primary',
                size: '',
                onClick: async () => {
                  // 将前端的 0 转换回实际的"未分类" ID
                  const actualCategoryId = categoryId.value === 0 ? uncategorizedId : categoryId.value;
                  
                  if (actualCategoryId !== content.value.category_id) {
                    await handleCategoryChange(actualCategoryId!, uncategorizedId);
                  }
                  ElMessageBox.close();
                }
              },
              { default: () => t('common.confirm') }
            )
          ])
        ]);
      }
    });
  } catch {
    // User cancelled
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
