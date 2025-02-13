<template>
  <ContextMenu :menu="menu" @select="handleContextMenu">
    <div
      class="link"
      :class="{ active: isActive }"
      @click.prevent="handleClick"
    >
      <main class="content-item-wrapper">
        <div class="content-item-title">{{ content.title }}</div>
        <div class="content-item-info">
          <div class="content-item-info-category">
            {{ content.category_name }}
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
  getFragmentList
} from '@/database/fragment';
import { useConfigurationStore } from '@/store';
import { EditTwo, DeleteFour, CategoryManagement } from '@icon-park/vue-next';
import { h } from 'vue';
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

const menu = [
  {
    label: '修改分类',
    type: 'edit',
    icon: CategoryManagement
  },
  {
    label: '重命名',
    type: 'rename',
    icon: EditTwo
  },
  {
    label: '删除',
    type: 'delete',
    icon: DeleteFour
  }
];

const categories = computed(() => store.categories);

const isActive = computed(() => {
  return route.params.id === content.value.id.toString();
});

const handleClick = () => {
  const oContentList = document.querySelector('.content-list');
  const scrollY = oContentList?.scrollTop || 0; // 确保获取当前滚动位置

  router.replace({
    path: `/config/category/contentList/${content.value.category_id}/content/${content.value.id}`,
    query: { scrollY: scrollY.toString() }, // 通过查询参数传递滚动位置
    replace: true
  });
};

const handleContextMenu = async (item: any) => {
  if (item.type === 'rename') {
    router.push(
      `/config/category/contentList/${content.value.category_id}/content/${content.value.id}`
    );
  } else if (item.type === 'delete') {
    await deleteFragment(Number(content.value.id));
    if (route.params.id) {
      router.push(`/config/category/contentList/${content.value.category_id}`);
    } else {
      const result = await getFragmentList(content.value.category_id);
      store.contents = result;
    }
  } else if (item.type === 'edit') {
    showCategorySelector();
  }
};

const showCategorySelector = async () => {
  try {
    const categoryOptions = categories.value.map((category) => ({
      label: category.name,
      value: category.id
    }));

    const categoryId = ref(content.value.category_id); // 使用 ref 来保持选中的值

    await ElMessageBox({
      title: '修改分类',
      showCancelButton: true,
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      message: () => {
        return h(
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
              h(ElOption, { label: '未分类', value: 0 }),
              ...categoryOptions.map((option: any) =>
                h(ElOption, { label: option.label, value: option.value })
              )
            ]
          }
        );
      }
    });

    if (categoryId.value !== content.value.category_id) {
      await handleCategoryChange(categoryId.value!);
    }
  } catch {
    console.log('取消');
  }
};

const handleCategoryChange = async (categoryId: number) => {
  try {
    let params = Object.assign(content.value, { category_id: categoryId });
    await editFragment(params);
    router.replace(`/config/category/contentList/${categoryId}`);
    // const result = await getFragmentList(content.value.category_id);
    // store.contents = result;
  } catch (error) {
    console.error('更新分类失败:', error);
  }
};
</script>

<style scoped lang="scss">
@mixin commonLink {
  @apply block py-1 truncate rounded-lg cursor-pointer transition-all hover:bg-active dark:hover:bg-active hover:border-panel border-b-transparent;
}

.link {
  @apply block py-1 truncate rounded-lg cursor-pointer transition-all hover:bg-active dark:hover:bg-active hover:border-panel border-b-transparent;
}

.active {
  @apply bg-active dark:bg-active dark:hover:bg-hover;
}

.content-item-wrapper {
  @apply relative text-xs px-3 py-[6px] rounded-md select-none after:h-[1px] after:border-panel after:absolute after:w-[calc(100%-4px)] after:-bottom-1 after:right-[0.1rem];

  .content-item-title {
    @apply truncate text-panel;
  }

  .content-item-info {
    @apply flex justify-between items-center pt-3 text-content;

    .content-item-info-category {
      @apply flex items-center gap-1 flex-1 truncate;
    }

    .content-item-info-time {
      @apply text-[10px] opacity-80;
    }
  }
}
</style>
