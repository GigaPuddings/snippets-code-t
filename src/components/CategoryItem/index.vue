<template>
  <main class="category-item">
    <div class="category-item-title">
      <el-input
        v-if="isEdit"
        class="category-item-input"
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
  </main>
</template>

<script setup lang="ts">
import { FolderClose, EditTwo, DeleteFour } from '@icon-park/vue-next';
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
  { label: '编辑', icon: EditTwo, type: 'edit' },
  { label: '删除', icon: DeleteFour, type: 'delete' }
];

// // 判断是否是编辑状态
const isEdit = computed(() => store.editCategoryId == props.category.id);

// 监听是否处于编辑状态并选中文本
watchEffect(() => {
  if (isEdit.value) {
    nextTick(() => {
      inputRef.value?.focus();
    });
  }
});
const handleEditCategory = async () => {
  // 保存编辑的分类
  store.editCategoryId = '';
  props.category.name =
    props.category.name
      .toLowerCase()
      .replace(/( |^)[a-z]/g, (L) => L.toUpperCase()) || '未命名';
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
  @apply rounded-md text-sm block my-1 last:mb-0 px-3 py-[6px] truncate cursor-pointer hover:bg-hover dark:hover:bg-hover dark:text-panel;
}

.link {
  @include commonLink();

  /* 禁止选中 */
  user-select: none;
}

.active {
  @include commonLink();

  @apply bg-active text-active hover:bg-active dark:bg-active dark:hover:bg-active;
}

.category-item-input {
  @apply bg-panel border rounded-md h-[32px];
}
</style>
