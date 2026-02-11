/**
 * 类型守卫工具函数
 * 用于运行时类型检查和验证
 */

import type { Fragment, Category, SearchEngine, App, Bookmark } from '@/types/database';
import type { ContentType, ApiResponse } from '@/types';

/**
 * 检查值是否为对象
 * @param value - 要检查的值
 * @returns 是否为对象
 */
function isObject(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

/**
 * 检查值是否为片段类型
 * @param value - 要检查的值
 * @returns 是否为片段类型
 */
export function isFragment(value: unknown): value is Fragment {
  if (!isObject(value)) return false;

  const fragment = value as Partial<Fragment>;

  return (
    typeof fragment.id === 'number' &&
    typeof fragment.title === 'string' &&
    typeof fragment.content === 'string' &&
    (fragment.type === 'code' || fragment.type === 'note') &&
    (fragment.format === 'plain' ||
      fragment.format === 'markdown' ||
      fragment.format === 'html') &&
    typeof fragment.category_id === 'number'
  );
}

/**
 * 检查值是否为分类类型
 * @param value - 要检查的值
 * @returns 是否为分类类型
 */
export function isCategory(value: unknown): value is Category {
  if (!isObject(value)) return false;

  const category = value as Partial<Category>;

  return (
    typeof category.id === 'number' &&
    typeof category.name === 'string'
  );
}

/**
 * 检查值是否为 API 响应类型
 * @param value - 要检查的值
 * @returns 是否为 API 响应类型
 */
export function isApiResponse<T>(value: unknown): value is ApiResponse<T> {
  if (!isObject(value)) return false;

  const response = value as Partial<ApiResponse<T>>;

  return typeof response.success === 'boolean';
}

/**
 * 检查值是否为内容类型
 * @param value - 要检查的值
 * @returns 是否为内容类型
 */
export function isContentType(value: unknown): value is ContentType {
  if (!isObject(value)) return false;

  const content = value as Partial<ContentType>;

  return (
    (typeof content.id === 'number' || typeof content.id === 'string') &&
    typeof content.title === 'string' &&
    typeof content.content === 'string'
  );
}

/**
 * 检查值是否为搜索引擎类型
 * @param value - 要检查的值
 * @returns 是否为搜索引擎类型
 */
export function isSearchEngine(value: unknown): value is SearchEngine {
  if (!isObject(value)) return false;

  const engine = value as Partial<SearchEngine>;

  return (
    typeof engine.id === 'number' &&
    typeof engine.name === 'string' &&
    typeof engine.keyword === 'string' &&
    typeof engine.url === 'string' &&
    typeof engine.enabled === 'boolean'
  );
}

/**
 * 检查值是否为应用类型
 * @param value - 要检查的值
 * @returns 是否为应用类型
 */
export function isApp(value: unknown): value is App {
  if (!isObject(value)) return false;

  const app = value as Partial<App>;

  return (
    typeof app.id === 'number' &&
    typeof app.title === 'string' &&
    typeof app.content === 'string' &&
    typeof app.usage_count === 'number'
  );
}

/**
 * 检查值是否为书签类型
 * @param value - 要检查的值
 * @returns 是否为书签类型
 */
export function isBookmark(value: unknown): value is Bookmark {
  if (!isObject(value)) return false;

  const bookmark = value as Partial<Bookmark>;

  return (
    typeof bookmark.id === 'number' &&
    typeof bookmark.title === 'string' &&
    typeof bookmark.content === 'string' &&
    typeof bookmark.usage_count === 'number'
  );
}

/**
 * 检查值是否为字符串数组
 * @param value - 要检查的值
 * @returns 是否为字符串数组
 */
export function isStringArray(value: unknown): value is string[] {
  return Array.isArray(value) && value.every((item) => typeof item === 'string');
}

/**
 * 检查值是否为数字数组
 * @param value - 要检查的值
 * @returns 是否为数字数组
 */
export function isNumberArray(value: unknown): value is number[] {
  return Array.isArray(value) && value.every((item) => typeof item === 'number');
}
