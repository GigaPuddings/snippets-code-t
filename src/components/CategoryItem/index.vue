<template>
  <div class="category-item">
    <div class="category-item-title">
      <el-input
        v-if="isEdit"
        ref="inputRef"
        v-model="category.name"
        autoFocus
        @keyup.enter="handleEditCategory"
        @blur="handleEditCategory"
      />
      <ContextMenu v-else :menu="menu" @select="handleContextMenu">
        <router-link
          :to="`/config/category/contentList/${category.id}`"
          class="link"
          active-class="active"
        >
          <div class="flex items-center gap-1">
            <FolderClose theme="outline" size="16" :strokeWidth="2" />
            <div class="truncate ml-1">{{ category.name }}</div>
          </div>
        </router-link>
      </ContextMenu>
    </div>
  </div>
</template>

<script setup lang="ts">
import { FolderClose } from '@icon-park/vue-next';
import { useConfigurationStore } from '@/store';
import {
  editCategory,
  deleteCategory,
  getCategories
} from '@/database/category';
import { useRouter } from 'vue-router';
const props = defineProps<{
  category: CategoryType;
}>();
const store = useConfigurationStore();
const inputRef = ref<HTMLInputElement | null>(null);
const router = useRouter();

defineOptions({
  name: 'CategoryItem'
});

const menu = [
  { label: '编辑', type: 'edit' },
  { label: '删除', type: 'delete' }
];

// 判断是否是编辑状态
const isEdit = computed(() => store.editCategoryId == props.category.id);

// 监听是否处于编辑状态并选中文本
watch(isEdit, (newValue, _oldValue) => {
  if (newValue) {
    nextTick(() => {
      inputRef.value?.focus();
    });
  }
});

const handleEditCategory = async () => {
  console.log('保存编辑的分类', props.category);
  // 保存编辑的分类
  store.editCategoryId = '';
  await editCategory(props.category.id, props.category.name);
  // 重新获取分类
  router.replace(`/config/category/contentList/${props.category.id}`);
};

// 菜单的点击事件
const handleContextMenu = async (item: any) => {
  if (item.type === 'edit') {
    store.editCategoryId = props.category.id as string;
  } else if (item.type === 'delete') {
    await deleteCategory(props.category.id);
    store.categories = await getCategories(store.categorySort);
    router.replace(`/config/category/contentList`);
  }
};
</script>

<style scoped lang="scss">
@mixin commonLink {
  @apply rounded-md text-sm block my-1 px-3 py-1 truncate cursor-pointer hover:bg-gray-200 dark:hover:bg-[--mantine-color-default-hover] dark:text-[--mantine-color-gray-light-color];
}

.link {
  @include commonLink();
  /* 禁止选中 */
  -webkit-user-select: none;
}

.active {
  @include commonLink();
  @apply bg-[#4b94f8] text-white hover:bg-[#4b94f8] dark:bg-[#5977cb] dark:hover:bg-[#5977cb] hover:text-white;
}

.input {
  @apply bg-slate-50 dark:bg-[--mantine-color-dark-outline] dark:text-[--mantine-color-gray-light-color] w-full border outline-none rounded-md px-3 py-1;
  height: 28px;
}
</style>
