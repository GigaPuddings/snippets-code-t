<template>
  <div class="category-header-list">
    <div class="ui-section-heading">
      {{ viewLabel || $t('category.folders') }}
    </div>
    <div class="category-header-action">
      <button
        v-if="viewLabel"
        type="button"
        class="ui-icon-button ui-icon-button--small"
        :title="$t('category.backToFolders')"
        :aria-label="$t('category.backToFolders')"
        @click="$emit('back')"
      >
        <ArrowLeft width="16" height="16" />
      </button>
      <template v-else>
        <button
          type="button"
          class="ui-icon-button ui-icon-button--small"
          :title="toggleLabel"
          :aria-label="toggleLabel"
          :disabled="!hasFolders"
          @click="$emit('toggle-folders')"
        >
          <component
            :is="hasExpanded ? FoldVertical : UnfoldVertical"
            width="16"
            height="16"
          />
        </button>
        <button
          type="button"
          class="ui-icon-button ui-icon-button--small"
          :title="
            sortOrder === 'asc'
              ? $t('category.descending')
              : $t('category.ascending')
          "
          :aria-label="
            sortOrder === 'asc'
              ? $t('category.descending')
              : $t('category.ascending')
          "
          @click="handleSort"
          :disabled="!hasFolders || savingOrder"
        >
          <component
            :is="sortOrder === 'asc' ? SortAmountDown : SortAmountUp"
            width="16"
            height="16"
          />
        </button>
        <button
          type="button"
          class="ui-icon-button ui-icon-button--small"
          :title="$t('category.newFolder')"
          :aria-label="$t('category.newFolder')"
          @click="handleAdd"
        >
          <Add width="16" height="16" />
        </button>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import SortAmountUp from '~icons/lucide/arrow-up-narrow-wide';
import SortAmountDown from '~icons/lucide/arrow-down-wide-narrow';
import Add from '~icons/lucide/plus';
import ArrowLeft from '~icons/lucide/arrow-left';
import FoldVertical from '~icons/lucide/fold-vertical';
import UnfoldVertical from '~icons/lucide/unfold-vertical';
import { useI18n } from 'vue-i18n';

/**
 * CategoryHeader 组件 Props
 */
interface CategoryHeaderProps {
  /** 排序方式：'asc' 升序 | 'desc' 降序 */
  sortOrder: 'asc' | 'desc';
  viewLabel?: string;
  hasExpanded: boolean;
  hasFolders: boolean;
  savingOrder: boolean;
}

/**
 * CategoryHeader 组件 Emits
 */
interface CategoryHeaderEmits {
  /** 点击排序按钮时触发 */
  (e: 'sort'): void;
  /** 点击添加分类按钮时触发 */
  (e: 'add'): void;
  (e: 'back'): void;
  (e: 'toggle-folders'): void;
}

defineOptions({
  name: 'CategoryHeader'
});

const props = defineProps<CategoryHeaderProps>();
const { t } = useI18n();
const toggleLabel = computed(() =>
  t(props.hasExpanded ? 'category.collapseFolders' : 'category.expandFolders')
);
const emit = defineEmits<CategoryHeaderEmits>();

const handleSort = () => {
  emit('sort');
};

const handleAdd = () => {
  emit('add');
};
</script>

<style scoped lang="scss">
.category-header-list {
  @apply flex h-8 shrink-0 justify-between items-center mt-1 px-5;

  .category-header-action {
    @apply flex items-center gap-1;
  }
}
</style>
