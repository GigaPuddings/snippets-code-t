<template>
  <div class="content-search-wrapper">
    <div class="content-search">
      <el-input
        v-model="localSearchText"
        :placeholder="$t('category.searchPlaceholder')"
        @focus="handleFocus"
        @blur="handleBlur"
      >
        <template #prefix>
          <Search
            class="mr-1 text-panel"
            theme="outline"
            size="15"
            :strokeWidth="2"
          />
        </template>
      </el-input>
      
      <el-tooltip effect="dark" :content="$t('search.filterPanel')" placement="bottom">
        <div class="filter-button-wrapper" @click="$emit('toggle-filter')">
          <Filter
            class="content-search-filter"
            :class="{ 'filter-active': showFilterPanel || hasActiveFilters }"
            theme="outline"
            size="18"
            :strokeWidth="2"
          />
          <span v-if="activeFilterCount > 0" class="filter-badge">{{ activeFilterCount }}</span>
        </div>
      </el-tooltip>
      
      <el-tooltip effect="dark" :content="$t('category.newSnippet')" placement="bottom">
        <Plus
          class="content-search-add"
          theme="outline"
          size="18"
          :strokeWidth="2"
          @click="$emit('add-content')"
        />
      </el-tooltip>
    </div>
    
    <!-- Search Syntax Helper -->
    <SearchSyntaxHelper
      :visible="showSyntaxHelper"
      @insert="handleSyntaxInsert"
    />
  </div>
</template>

<script setup lang="ts">
import { Search, Plus, Filter } from '@icon-park/vue-next';
import SearchSyntaxHelper from '@/components/SearchSyntaxHelper/index.vue';
import { ref, watch } from 'vue';

/**
 * 组件 Props 接口
 */
interface ContentSearchBarProps {
  /** 搜索文本 */
  searchText: string;
  /** 显示筛选面板 */
  showFilterPanel: boolean;
  /** 是否有激活的筛选条件 */
  hasActiveFilters: boolean;
  /** 激活的筛选条件数量 */
  activeFilterCount: number;
}

/**
 * 组件 Emits 接口
 */
interface ContentSearchBarEmits {
  /** 更新搜索文本 */
  (e: 'update:searchText', value: string): void;
  /** 切换筛选面板 */
  (e: 'toggle-filter'): void;
  /** 添加内容 */
  (e: 'add-content'): void;
}

const props = defineProps<ContentSearchBarProps>();
const emit = defineEmits<ContentSearchBarEmits>();

const showSyntaxHelper = ref<boolean>(false);
const localSearchText = ref<string>(props.searchText);

// 同步 props 到本地状态
watch(() => props.searchText, (newValue) => {
  localSearchText.value = newValue;
});

// 同步本地状态到 props
watch(localSearchText, (newValue) => {
  emit('update:searchText', newValue);
});

/**
 * 处理搜索框聚焦
 */
function handleFocus(): void {
  showSyntaxHelper.value = true;
}

/**
 * 处理搜索框失焦
 */
function handleBlur(): void {
  setTimeout(() => {
    showSyntaxHelper.value = false;
  }, 200);
}

/**
 * 处理语法插入
 * @param syntax - 要插入的语法字符串
 */
function handleSyntaxInsert(syntax: string): void {
  if (localSearchText.value && !localSearchText.value.endsWith(' ')) {
    localSearchText.value += ' ';
  }
  localSearchText.value += syntax;
  showSyntaxHelper.value = false;
}
</script>

<style scoped lang="scss">
.content-search-wrapper {
  @apply relative;
}

.content-search {
  @apply border-b border-panel flex justify-between items-center h-[40px] gap-2;

  .filter-button-wrapper {
    @apply relative cursor-pointer;
    
    .content-search-filter {
      @apply rounded-md p-1 text-panel hover:text-white dark:text-panel hover:bg-active dark:hover:bg-hover transition-colors;

      &.filter-active {
        @apply text-blue-500 dark:text-blue-400;
      }
    }
    
    .filter-badge {
      @apply absolute -top-1 -right-1;
      @apply bg-blue-500 text-white;
      @apply text-xs font-medium;
      @apply rounded-full;
      @apply flex items-center justify-center;
      min-width: 16px;
      height: 16px;
      padding: 0 4px;
      font-size: 10px;
      line-height: 1;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
    }
  }

  .content-search-add {
    @apply cursor-pointer rounded-md p-1 mr-2 text-panel hover:text-white dark:text-panel hover:bg-active dark:hover:bg-hover;
  }
}
</style>
