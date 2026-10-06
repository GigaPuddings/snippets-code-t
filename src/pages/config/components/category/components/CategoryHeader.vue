<template>
  <div class="category-header-list">
    <div class="ui-section-heading">
      {{ viewLabel || $t('category.folders') }}
    </div>
    <div class="category-header-action">
      <el-tooltip
        v-if="viewLabel"
        effect="light"
        :content="$t('category.backToFolders')"
        placement="bottom"
      >
        <button
          type="button"
          class="ui-icon-button ui-icon-button--small"
          :aria-label="$t('category.backToFolders')"
          @click="$emit('back')"
        >
          <ArrowLeft theme="outline" size="16" />
        </button>
      </el-tooltip>
      <template v-else>
        <el-tooltip
          effect="light"
          :content="$t('category.newFolder')"
          placement="bottom"
        >
          <button
            type="button"
            class="ui-icon-button ui-icon-button--small"
            :aria-label="$t('category.newFolder')"
            @click="handleAdd"
          >
            <Add theme="outline" size="16" />
          </button>
        </el-tooltip>
        <el-tooltip
          effect="light"
          :content="
            sortOrder === 'asc'
              ? $t('category.ascending')
              : $t('category.descending')
          "
          placement="bottom"
        >
          <button
            type="button"
            class="ui-icon-button ui-icon-button--small"
            :aria-label="
              sortOrder === 'asc'
                ? $t('category.ascending')
                : $t('category.descending')
            "
            @click="handleSort"
          >
            <component
              :is="sortOrder === 'asc' ? SortAmountUp : SortAmountDown"
              theme="outline"
              size="16"
            />
          </button>
        </el-tooltip>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  SortAmountUp,
  SortAmountDown,
  Add,
  ArrowLeft
} from '@icon-park/vue-next';

/**
 * CategoryHeader 组件 Props
 */
interface CategoryHeaderProps {
  /** 排序方式：'asc' 升序 | 'desc' 降序 */
  sortOrder: 'asc' | 'desc';
  viewLabel?: string;
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
}

defineOptions({
  name: 'CategoryHeader'
});

defineProps<CategoryHeaderProps>();
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
