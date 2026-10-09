<template>
  <main class="category-item">
    <div class="category-item-title mb-ui-row-gap">
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
          class="link ui-menu-item justify-between px-3 truncate"
          role="button"
          tabindex="0"
          :aria-expanded="expanded"
          :class="{
            active: isActive,
            'is-drop-target': isDropTarget,
            'is-invalid-drop-target': isInvalidDropTarget
          }"
          @click="handleClick"
          @keydown.enter.prevent="handleClick"
          @keydown.space.prevent="handleClick"
          @dragenter.prevent="handleDragEnter"
          @dragover.prevent="handleDragOver"
          @dragleave="handleDragLeave"
          @drop.prevent="handleDrop"
        >
          <div class="category-label">
            <Right
              class="category-chevron"
              width="10"
              height="10"
              :class="{ 'rotate-90 !opacity-100': expanded }"
            />
            <span class="category-folder-icon">
              <component
                :is="expanded ? FolderOpen : FolderClose"
                width="16"
                height="16"
              />
            </span>
            <div class="truncate">{{ category.name }}</div>
          </div>
          <span v-if="isDropTarget" class="drop-action">
            <span class="drop-action-dot"></span>
            {{ $t('contentItem.dropToMove') }}
          </span>
          <span v-else-if="isInvalidDropTarget" class="drop-action is-muted">
            {{ $t('contentItem.currentCategory') }}
          </span>
        </div>
      </ContextMenu>
    </div>

    <div
      v-if="expanded"
      class="ml-5 pl-1"
      role="group"
      :aria-label="category.name"
    >
      <div v-if="loadingContents" class="px-2 py-1 text-xs text-content">
        {{ t('common.loading') }}
      </div>
      <ContentItem
        v-for="content in folderContents"
        :key="String(content.id)"
        :content="content"
        :category-id="category.id"
        @delete="dispatchContentAction('delete', content)"
        @toggle-favorite="dispatchContentAction('toggle-favorite', content)"
        @change-category="dispatchContentAction('change-category', content)"
        @convert-type="
          (_, targetType) =>
            dispatchContentAction('convert-type', content, targetType)
        "
      />
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
import FolderClose from '~icons/lucide/folder';
import FolderOpen from '~icons/lucide/folder-open';
import Right from '~icons/lucide/chevron-right';
import Notebook from '~icons/lucide/notebook';
import FileCodeOne from '~icons/lucide/file-code';
import EditTwo from '~icons/lucide/square-pen';
import DeleteFour from '~icons/lucide/trash-2';
import ContentItem from '@/components/ContentItem/index.vue';
import { useConfigurationStore } from '@/store';
import { useI18n } from 'vue-i18n';
import {
  editCategory,
  deleteCategory,
  getCategories,
  getFragmentList
} from '@/api/fragment';
import { useRouter, useRoute } from 'vue-router';
import modal from '@/utils/modal';
import { ConfirmDialog } from '@/components/UI';
import {
  FRAGMENT_DRAG_MIME,
  getActiveFragmentDrag,
  hasFragmentDragType,
  parseFragmentDragPayload
} from '@/utils/fragmentDragDrop';

const { t } = useI18n();
const props = defineProps<{
  category: CategoryType;
  revealActiveContent?: boolean;
}>();
const store = useConfigurationStore();
const inputRef = ref<any>(null);
const router = useRouter();
const route = useRoute();
const showDeleteDialog = ref(false);
const editingName = ref(''); // 编辑时的临时名称
const originalName = ref(''); // 原始名称
const dragDepth = ref(0);
const isDropTarget = ref(false);
const isInvalidDropTarget = ref(false);
const expanded = ref(false);
const loadingContents = ref(false);
const folderContents = ref<ContentType[]>([]);

const loadFolderContents = async () => {
  loadingContents.value = true;
  try {
    folderContents.value = await getFragmentList(props.category.id);
  } finally {
    loadingContents.value = false;
  }
};

const dispatchContentAction = (
  action: string,
  content: ContentType,
  targetType?: 'code' | 'note'
) =>
  window.dispatchEvent(
    new CustomEvent('sidebar-content-action', {
      detail: { action, content, targetType }
    })
  );

const refreshFolderContents = () => {
  if (expanded.value) void loadFolderContents();
};
onMounted(() => window.addEventListener('refresh-data', refreshFolderContents));
onUnmounted(() =>
  window.removeEventListener('refresh-data', refreshFolderContents)
);

const emit = defineEmits<{
  (e: 'move-content', content: ContentType, categoryId: string | number): void;
  (e: 'select-category', category: CategoryType): void;
  (
    e: 'create-content',
    type: 'note' | 'code',
    categoryId: string | number
  ): void;
}>();

defineOptions({
  name: 'CategoryItem'
});

const invalidCategoryChars = /[\\/:*?"<>|]/;

const formatCategoryName = (value: string) =>
  value
    .trim()
    .toLowerCase()
    .replace(/( |^)[a-z]/g, (L) => L.toUpperCase());

const validateCategoryName = (value: string) => {
  const name = value.trim();

  if (!name) {
    return { valid: false, message: t('category.emptyName') };
  }

  if (invalidCategoryChars.test(name)) {
    return { valid: false, message: t('category.invalidNameChars') };
  }

  const currentId = String(props.category.id);
  if (
    store.categories.some(
      (c) =>
        String(c.id) !== currentId &&
        c.name.toLowerCase() === name.toLowerCase()
    )
  ) {
    return { valid: false, message: t('category.duplicateName') };
  }

  return { valid: true, message: '' };
};

const menu = computed(() => [
  { label: t('nav.newNote'), icon: Notebook, type: 'note' },
  { label: t('fragmentType.newSnippet'), icon: FileCodeOne, type: 'code' },
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
  const active =
    !route.query.view && String(route.params.cid) === String(props.category.id);
  return active;
});

// 处理点击事件
const handleClick = () => {
  expanded.value = isActive.value ? !expanded.value : true;
  emit('select-category', props.category);
  if (expanded.value) void loadFolderContents();
};

watch(
  [isActive, () => props.revealActiveContent],
  ([active, reveal]) => {
    if ((active || reveal) && !expanded.value) {
      expanded.value = true;
      void loadFolderContents();
    }
  },
  { immediate: true }
);

const isFragmentDrag = (event: DragEvent): boolean => {
  const dataTransfer = event.dataTransfer;
  return Boolean(dataTransfer && hasFragmentDragType(dataTransfer.types));
};

const handleDragEnter = (event: DragEvent): void => {
  if (!isFragmentDrag(event)) return;
  dragDepth.value += 1;
  const activeDrag = getActiveFragmentDrag();
  isInvalidDropTarget.value =
    activeDrag?.categoryId !== undefined &&
    String(activeDrag.categoryId) === String(props.category.id);
  isDropTarget.value = !isInvalidDropTarget.value;
};

const handleDragOver = (event: DragEvent): void => {
  if (!isFragmentDrag(event) || !event.dataTransfer) return;
  event.dataTransfer.dropEffect = isInvalidDropTarget.value ? 'none' : 'move';
  isDropTarget.value = !isInvalidDropTarget.value;
};

const handleDragLeave = (): void => {
  dragDepth.value = Math.max(0, dragDepth.value - 1);
  if (dragDepth.value === 0) {
    isDropTarget.value = false;
    isInvalidDropTarget.value = false;
  }
};

const handleDrop = (event: DragEvent): void => {
  dragDepth.value = 0;
  isDropTarget.value = false;
  isInvalidDropTarget.value = false;

  const rawPayload = event.dataTransfer?.getData(FRAGMENT_DRAG_MIME) || '';
  const payload = parseFragmentDragPayload(rawPayload);
  if (!payload || String(payload.categoryId) === String(props.category.id))
    return;

  emit(
    'move-content',
    {
      id: payload.id,
      title: payload.title,
      content: '',
      category_id: payload.categoryId
    },
    props.category.id
  );
};

// 监听是否处于编辑状态并选中文本
watch(
  isEdit,
  (newIsEdit) => {
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
  },
  { immediate: true }
); // 添加 immediate: true

// 处理取消编辑
const handleCancelEdit = () => {
  // 清空编辑状态
  store.editCategoryId = '';

  // 如果是新建分类（ID 为负数），删除临时分类
  const categoryIdNum = Number(props.category.id);
  if (categoryIdNum < 0) {
    const tempIndex = store.categories.findIndex(
      (c) => c.id === props.category.id
    );
    if (tempIndex !== -1) {
      store.categories.splice(tempIndex, 1);
    }
    // 返回到分类列表
    router.replace('/config/category/contentList');
  }
};

const handleEditCategory = async () => {
  // 格式化新名称
  const newName = formatCategoryName(editingName.value);
  const validation = validateCategoryName(newName);

  if (!validation.valid) {
    modal.error(validation.message);
    await nextTick();
    inputRef.value?.focus?.();
    return;
  }

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
      const tempIndex = store.categories.findIndex(
        (c) => c.id === props.category.id
      );
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
      const tempIndex = store.categories.findIndex(
        (c) => c.id === props.category.id
      );
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
    if (expanded.value) void loadFolderContents();

    // 检查当前显示的内容列表中是否有属于该分类的内容
    const hasContentsInCategory = store.contents.some(
      (content) => content.category_id === props.category.id
    );

    // 如果当前在该分类下，或者内容列表中有该分类的内容，重新加载内容列表
    if (
      route.params.cid === props.category.id.toString() ||
      hasContentsInCategory
    ) {
      const { getFragmentList } = await import('@/api/fragment');

      // 根据当前路由决定加载哪些内容
      const categoryId = route.params.cid
        ? Number(route.params.cid)
        : undefined;
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
  if (item.type === 'note' || item.type === 'code') {
    expanded.value = true;
    emit('create-content', item.type, props.category.id);
  } else if (item.type === 'edit') {
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
.link {
  transition:
    color 0.16s ease,
    background 0.16s ease,
    border-color 0.16s ease,
    box-shadow 0.16s ease,
    opacity 0.16s ease,
    transform 0.16s ease;

  &.is-drop-target {
    color: var(--categories-text-color);
    background: linear-gradient(
      90deg,
      color-mix(in srgb, var(--search-result-active) 94%, transparent),
      color-mix(
        in srgb,
        var(--search-result-active) 62%,
        var(--categories-panel-bg)
      )
    );

    /* 内描边始终绘制在滚动容器内，避免右边框被 overflow 裁切。 */
    border-color: transparent;
    box-shadow:
      inset 0 0 0 1px var(--search-result-accent),
      var(--fragment-drop-shadow);

    .category-folder-icon {
      color: var(--search-result-accent);
      background: color-mix(
        in srgb,
        var(--search-result-accent) 14%,
        transparent
      );
      transform: scale(1.08);
    }
  }

  &.is-invalid-drop-target {
    color: var(--categories-info-text-color);
    background: color-mix(
      in srgb,
      var(--categories-panel-bg-hover) 56%,
      transparent
    );
    border-color: color-mix(
      in srgb,
      var(--categories-border-color) 72%,
      transparent
    );
    opacity: 0.72;
  }
}

.category-label {
  @apply flex min-w-0 items-center gap-2;
}

.category-chevron {
  @apply absolute left-0.5 text-content opacity-0 transition-opacity;
}

.link:hover .category-chevron,
.link:focus-visible .category-chevron {
  @apply opacity-100;
}

.category-folder-icon {
  display: grid;
  flex: 0 0 16px;
  place-items: center;
  width: 16px;
  height: 20px;
  border-radius: 7px;
  transition:
    color 0.16s ease,
    background-color 0.16s ease,
    transform 0.16s ease;
}

.drop-action {
  display: inline-flex;
  flex: 0 0 auto;
  gap: 5px;
  align-items: center;
  padding: 3px 7px;
  font-size: 10px;
  font-weight: 600;
  line-height: 1;
  color: var(--search-result-accent);
  background: color-mix(in srgb, var(--search-card-bg) 82%, transparent);
  border: 1px solid
    color-mix(in srgb, var(--search-result-accent) 25%, transparent);
  border-radius: 999px;
  animation: drop-action-enter 0.16s ease-out;

  &.is-muted {
    color: var(--categories-info-text-color);
    border-color: var(--categories-border-color);
  }
}

.drop-action-dot {
  width: 5px;
  height: 5px;
  background: currentcolor;
  border-radius: 50%;
  box-shadow: 0 0 0 3px color-mix(in srgb, currentcolor 13%, transparent);
}

@keyframes drop-action-enter {
  from {
    opacity: 0;
    transform: translateX(5px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.active {
  svg {
    color: var(--search-result-accent);
  }
}

.category-item-input {
  @apply bg-panel border rounded-md h-[32px];
}
</style>
