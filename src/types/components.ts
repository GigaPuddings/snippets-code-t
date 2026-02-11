/**
 * 组件 Props 类型定义
 */

import type { ContentType } from './models';

/**
 * 搜索结果组件 Props
 */
export interface SearchResultProps {
  /** 搜索结果列表 */
  results: ContentType[];
  /** 搜索查询词 */
  searchQuery: string;
  /** 清除搜索回调 */
  onClearSearch: () => void;
}

/**
 * 内容项组件 Props
 */
export interface ContentItemProps {
  /** 内容项数据 */
  item: ContentType;
  /** 高亮关键词 */
  highlight?: string;
}

/**
 * 搜索输入框组件 Props
 */
export interface SearchInputProps {
  /** 输入值（v-model） */
  modelValue: string;
  /** 是否自动聚焦 */
  autofocus?: boolean;
  /** 占位符文本 */
  placeholder?: string;
}

/**
 * 搜索输入框组件 Emits
 */
export interface SearchInputEmits {
  /** 更新输入值 */
  (e: 'update:modelValue', value: string): void;
  /** 按下回车键 */
  (e: 'enter'): void;
  /** 按下向下箭头 */
  (e: 'arrowDown'): void;
  /** 按下向左箭头 */
  (e: 'arrowLeft'): void;
  /** 按下向右箭头 */
  (e: 'arrowRight'): void;
  /** 按下 Tab 键 */
  (e: 'tab', shiftKey: boolean): void;
}

/**
 * 标签输入组件 Props
 */
export interface TagInputProps {
  /** 标签列表（v-model） */
  modelValue: string[];
  /** 占位符文本 */
  placeholder?: string;
  /** 是否禁用 */
  disabled?: boolean;
}

/**
 * 标签输入组件 Emits
 */
export interface TagInputEmits {
  /** 更新标签列表 */
  (e: 'update:modelValue', value: string[]): void;
}

/**
 * 过滤面板组件 Props
 */
export interface FilterPanelProps {
  /** 当前选中的类型 */
  selectedType?: 'all' | 'code' | 'note';
  /** 当前选中的标签 */
  selectedTags?: string[];
  /** 可用的标签列表 */
  availableTags?: string[];
}

/**
 * 过滤面板组件 Emits
 */
export interface FilterPanelEmits {
  /** 类型变更 */
  (e: 'typeChange', type: 'all' | 'code' | 'note'): void;
  /** 标签变更 */
  (e: 'tagsChange', tags: string[]): void;
}

/**
 * 分类树组件 Props
 */
export interface CategoryTreeProps {
  /** 分类列表 */
  categories: Array<{
    id: number;
    name: string;
    is_system: boolean;
  }>;
  /** 当前选中的分类 ID */
  selectedId?: number;
}

/**
 * 分类树组件 Emits
 */
export interface CategoryTreeEmits {
  /** 选择分类 */
  (e: 'select', categoryId: number): void;
  /** 添加分类 */
  (e: 'add'): void;
  /** 编辑分类 */
  (e: 'edit', categoryId: number): void;
  /** 删除分类 */
  (e: 'delete', categoryId: number): void;
}
