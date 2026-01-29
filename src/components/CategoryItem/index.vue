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
import { useRouter } from 'vue-router';
import { ElMessage } from 'element-plus';
import { ConfirmDialog } from '@/components/UI';

const { t } = useI18n();
const props = defineProps<{
  category: CategoryType;
}>();
const store = useConfigurationStore();
const inputRef = ref<HTMLInputElement | null>(null);
const router = useRouter();
const showDeleteDialog = ref(false);

defineOptions({
  name: 'CategoryItem'
});

const menu = computed(() => [
  { label: t('common.edit'), icon: EditTwo, type: 'edit' },
  { label: t('common.delete'), icon: DeleteFour, type: 'delete' }
]);

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
