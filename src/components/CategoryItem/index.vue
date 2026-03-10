<template>
  <main class="category-item">
    <div class="category-item-title">
      <el-input
        v-if="isEdit"
        class="category-item-input"
        ref="inputRef"
        :model-value="editingName"
        @update:model-value="editingName = $event"
        autoFocus
        @keyup.enter="handleEditCategory"
        @keyup.esc="handleCancelEdit"
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
import modal from '@/utils/modal';
import { ConfirmDialog } from '@/components/UI';

const { t } = useI18n();
const props = defineProps<{
  category: CategoryType;
}>();
const store = useConfigurationStore();
const inputRef = ref<any>(null);
const router = useRouter();
const route = useRoute();
const showDeleteDialog = ref(false);
const editingName = ref(''); // 编辑时的临时名称
const originalName = ref(''); // 原始名称

defineOptions({
  name: 'CategoryItem'
});

const menu = computed(() => [
  { label: t('common.edit'), icon: EditTwo, type: 'edit' },
  { label: t('common.delete'), icon: DeleteFour, type: 'delete' }
]);

// 判断是否是编辑状态
const isEdit = computed(() => {
  const categoryIdStr = String(props.category.id);
  const isEditing = store.editCategoryId === categoryIdStr;
  return isEditing;
});

// 判断是否是当前激活的分类
const isActive = computed(() => {
  const active = route.params.cid === props.category.id.toString();
  return active;
});

// 处理点击事件
const handleClick = () => {
  // 如果已经在当前分类，不做任何操作
  if (isActive.value) {
    return;
  }
  
  const targetPath = `/config/category/contentList/${props.category.id}`;
  
  // 使用 replace 导航，只刷新 contentList 和 content 子路由
  router.replace({
    path: targetPath,
    replace: true
  });
};

// 监听是否处于编辑状态并选中文本
watch(isEdit, (newIsEdit) => {
  
  if (newIsEdit) {
    // 进入编辑状态时，保存原始名称并初始化编辑名称
    originalName.value = props.category.name;
    editingName.value = props.category.name;
    
    // 等待 DOM 更新后聚焦并全选
    nextTick(() => {
      if (inputRef.value) {
        const input = inputRef.value;
        input.focus();
        
        // 全选文本
        if (input.$el && input.$el.querySelector) {
          const nativeInput = input.$el.querySelector('input');
          if (nativeInput) {
            nativeInput.select();
          }
        }
      }
    });
  }
}, { immediate: true }); // 添加 immediate: true

// 处理取消编辑
const handleCancelEdit = () => {
  
  // 清空编辑状态
  store.editCategoryId = '';
  
  // 如果是新建分类（ID 为负数），删除临时分类
  const categoryIdNum = Number(props.category.id);
  if (categoryIdNum < 0) {
    const tempIndex = store.categories.findIndex(c => c.id === props.category.id);
    if (tempIndex !== -1) {
      store.categories.splice(tempIndex, 1);
    }
    // 返回到分类列表
    router.replace('/config/category/contentList');
  }
};

const handleEditCategory = async () => {
  
  // 格式化新名称
  const newName = editingName.value
    .toLowerCase()
    .replace(/( |^)[a-z]/g, (L) => L.toUpperCase()) || '未命名';
  
  // 清空编辑状态
  store.editCategoryId = '';
  
  // 检查是否是新建分类（ID 为负数）
  const categoryIdNum = Number(props.category.id);
  const isNewCategory = categoryIdNum < 0;
  
  if (isNewCategory) {
    // 新建分类：调用后端创建文件夹
    
    try {
      const { addCategory } = await import('@/api/fragment');
      const realCategoryId = await addCategory(newName);
      
      // 从列表中删除临时分类
      const tempIndex = store.categories.findIndex(c => c.id === props.category.id);
      if (tempIndex !== -1) {
        store.categories.splice(tempIndex, 1);
      }
      
      // 重新获取分类列表
      store.categories = await getCategories(store.categorySort);
      
      // 导航到新分类
      await nextTick();
      router.replace(`/config/category/contentList/${realCategoryId}`);
    } catch (error) {
      console.error('[CategoryItem] 创建分类失败', error);
      // 失败时删除临时分类
      const tempIndex = store.categories.findIndex(c => c.id === props.category.id);
      if (tempIndex !== -1) {
        store.categories.splice(tempIndex, 1);
      }
      // 返回到分类列表
      router.replace('/config/category/contentList');
    }
    return;
  }
  
  // 编辑现有分类：检查名称是否变化
  if (originalName.value === newName) {
    return;
  }
  
  try {
    // 先调用后端 API
    await editCategory(props.category.id, newName);
    
    // 更新本地名称
    props.category.name = newName;
    
    // 重新获取分类列表以更新缓存
    store.categories = await getCategories(store.categorySort);
    
    // 检查当前显示的内容列表中是否有属于该分类的内容
    const hasContentsInCategory = store.contents.some(
      content => content.category_id === props.category.id
    );
    
    // 如果当前在该分类下，或者内容列表中有该分类的内容，重新加载内容列表
    if (route.params.cid === props.category.id.toString() || hasContentsInCategory) {
      const { getFragmentList } = await import('@/api/fragment');
      
      // 根据当前路由决定加载哪些内容
      const categoryId = route.params.cid ? Number(route.params.cid) : undefined;
      const result = await getFragmentList(categoryId, '');
      store.contents = result as ContentType[];
      
      // 如果当前在 content 页面，需要更新路由中的文件路径
      if (route.params.id) {
        const currentId = decodeURIComponent(route.params.id as string);
        
        // 检查文件路径中是否包含旧分类名称
        // 文件路径格式：D:\Program Files\snippets-code\旧分类名\文件名.md
        const oldCategoryPath = `\\${originalName.value}\\`;
        const newCategoryPath = `\\${newName}\\`;
        
        // 如果当前文件属于被重命名的分类
        if (currentId.includes(oldCategoryPath)) {
          const newId = currentId.replace(oldCategoryPath, newCategoryPath);
          
          await nextTick();
          await router.replace({
            path: `/config/category/contentList/${props.category.id}/content/${encodeURIComponent(newId)}`
          });
        }
      }
    }
  } catch (error) {
    console.error('[CategoryItem] 编辑分类失败', error);
    // 失败时不修改名称
  }
};

// 菜单的点击事件
const handleContextMenu = async (item: any) => {
  
  if (item.type === 'edit') {
    const categoryIdStr = String(props.category.id);
    store.editCategoryId = categoryIdStr;
  } else if (item.type === 'delete') {
    showDeleteDialog.value = true;
  }
};

const confirmDelete = async () => {
  try {
    await deleteCategory(props.category.id);
    modal.success(t('category.deleteSuccess'));
    store.categories = await getCategories(store.categorySort);
    router.replace(`/config/category/contentList`);
    showDeleteDialog.value = false;
  } catch (error) {
    console.error('Delete category failed:', error);
    modal.error(t('category.deleteFailed'));
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
