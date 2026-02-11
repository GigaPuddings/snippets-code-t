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
        <div
          class="link"
          :class="{ active: isActive }"
          @click="handleClick"
        >
          <div class="flex items-center gap-1">
            <FolderClose theme="outline" size="16" :strokeWidth="2" />
            <div class="truncate ml-1">{{ category.name }}</div>
          </div>
        </div>
      </ContextMenu>
    </div>

    <!-- 删除确认对话框 -->
    <ConfirmDialog
      v-model="showDeleteDialog"
      :title="$t('common.warning')"
      :confirm-text="$t('common.confirm')"
      :cancel-text="$t('common.cancel')"
      type="danger"
      @confirm="confirmDelete"
    >
      <div>{{ $t('category.deleteConfirm', { name: category.name }) }}</div>
    </ConfirmDialog>
  </main>
</template>

<script setup lang="ts">
import { FolderClose, EditTwo, DeleteFour } from '@icon-park/vue-next';
import { useConfigurationStore } from '@/store';
import { useI18n } from 'vue-i18n';
import {
  editCategory,
  deleteCategory,
  getCategories
} from '@/api/fragment';
import { useRouter, useRoute } from 'vue-router';
import { ElMessage } from 'element-plus';
import { ConfirmDialog } from '@/components/UI';

const { t } = useI18n();
const props = defineProps<{
  category: CategoryType;
}>();
const store = useConfigurationStore();
const inputRef = ref<HTMLInputElement | null>(null);
const router = useRouter();
const route = useRoute();
const showDeleteDialog = ref(false);

defineOptions({
  name: 'CategoryItem'
});

const menu = computed(() => [
  { label: t('common.edit'), icon: EditTwo, type: 'edit' },
  { label: t('common.delete'), icon: DeleteFour, type: 'delete' }
]);

// 判断是否是编辑状态
const isEdit = computed(() => store.editCategoryId == props.category.id);

// 判断是否是当前激活的分类
const isActive = computed(() => {
  return route.params.cid === props.category.id.toString();
});

// 处理点击事件
const handleClick = () => {
  // 如果已经在当前分类，不做任何操作
  if (isActive.value) {
    return;
  }
  
  // 使用 replace 导航，只刷新 contentList 和 content 子路由
  router.replace({
    path: `/config/category/contentList/${props.category.id}`,
    replace: true
  });
};

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
    showDeleteDialog.value = true;
  }
};

const confirmDelete = async () => {
  try {
    await deleteCategory(props.category.id);
    ElMessage.success(t('category.deleteSuccess'));
    store.categories = await getCategories(store.categorySort);
    router.replace(`/config/category/contentList`);
    showDeleteDialog.value = false;
  } catch (error) {
    console.error('Delete category failed:', error);
    ElMessage.error(t('category.deleteFailed'));
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
