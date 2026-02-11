/**
 * 数据验证工具函数
 * 提供各种数据类型的验证功能
 */

import type { Fragment, Category, SearchEngine, App, Bookmark } from '@/types/database';

/**
 * 检查值是否为对象
 * @param value - 要检查的值
 * @returns 是否为对象
 */
function isObject(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

/**
 * 验证片段数据
 * @param data - 要验证的数据
 * @returns 是否为有效的片段数据
 */
export function validateFragment(data: unknown): data is Fragment {
  if (!isObject(data)) return false;

  const fragment = data as Partial<Fragment>;

  // 必填字段验证
  if (typeof fragment.id !== 'number') return false;
  if (typeof fragment.title !== 'string' || fragment.title.trim() === '') return false;
  if (typeof fragment.content !== 'string') return false;
  if (fragment.type !== 'code' && fragment.type !== 'note') return false;
  if (!['plain', 'markdown', 'html'].includes(fragment.format || '')) return false;
  if (typeof fragment.category_id !== 'number') return false;

  // 可选字段验证
  if (fragment.tags !== undefined && typeof fragment.tags !== 'string') return false;
  if (fragment.metadata !== undefined && typeof fragment.metadata !== 'string') return false;
  if (fragment.created_at !== undefined && typeof fragment.created_at !== 'string') return false;
  if (fragment.updated_at !== undefined && typeof fragment.updated_at !== 'string') return false;

  return true;
}

/**
 * 验证分类数据
 * @param data - 要验证的数据
 * @returns 是否为有效的分类数据
 */
export function validateCategory(data: unknown): data is Category {
  if (!isObject(data)) return false;

  const category = data as Partial<Category>;

  // 必填字段验证
  if (typeof category.id !== 'number') return false;
  if (typeof category.name !== 'string' || category.name.trim() === '') return false;
  if (typeof category.is_system !== 'boolean') return false;
  if (typeof category.created_at !== 'string') return false;

  // 可选字段验证
  if (category.parent_id !== undefined && typeof category.parent_id !== 'number') return false;
  if (category.order !== undefined && typeof category.order !== 'number') return false;

  return true;
}

/**
 * 验证搜索引擎数据
 * @param data - 要验证的数据
 * @returns 是否为有效的搜索引擎数据
 */
export function validateSearchEngine(data: unknown): data is SearchEngine {
  if (!isObject(data)) return false;

  const engine = data as Partial<SearchEngine>;

  // 必填字段验证
  if (typeof engine.id !== 'number') return false;
  if (typeof engine.name !== 'string' || engine.name.trim() === '') return false;
  if (typeof engine.keyword !== 'string' || engine.keyword.trim() === '') return false;
  if (typeof engine.url !== 'string' || engine.url.trim() === '') return false;
  if (typeof engine.enabled !== 'boolean') return false;

  // URL 格式验证
  try {
    new URL(engine.url);
  } catch {
    return false;
  }

  // 可选字段验证
  if (engine.icon !== undefined && typeof engine.icon !== 'string') return false;
  if (engine.order !== undefined && typeof engine.order !== 'number') return false;

  return true;
}

/**
 * 验证应用数据
 * @param data - 要验证的数据
 * @returns 是否为有效的应用数据
 */
export function validateApp(data: unknown): data is App {
  if (!isObject(data)) return false;

  const app = data as Partial<App>;

  // 必填字段验证
  if (typeof app.id !== 'number') return false;
  if (typeof app.title !== 'string' || app.title.trim() === '') return false;
  if (typeof app.content !== 'string' || app.content.trim() === '') return false;
  if (typeof app.usage_count !== 'number' || app.usage_count < 0) return false;

  // 可选字段验证
  if (app.icon !== undefined && typeof app.icon !== 'string') return false;
  if (app.created_at !== undefined && typeof app.created_at !== 'string') return false;

  return true;
}

/**
 * 验证书签数据
 * @param data - 要验证的数据
 * @returns 是否为有效的书签数据
 */
export function validateBookmark(data: unknown): data is Bookmark {
  if (!isObject(data)) return false;

  const bookmark = data as Partial<Bookmark>;

  // 必填字段验证
  if (typeof bookmark.id !== 'number') return false;
  if (typeof bookmark.title !== 'string' || bookmark.title.trim() === '') return false;
  if (typeof bookmark.content !== 'string' || bookmark.content.trim() === '') return false;
  if (typeof bookmark.usage_count !== 'number' || bookmark.usage_count < 0) return false;

  // URL 格式验证
  try {
    new URL(bookmark.content);
  } catch {
    return false;
  }

  // 可选字段验证
  if (bookmark.icon !== undefined && typeof bookmark.icon !== 'string') return false;
  if (bookmark.created_at !== undefined && typeof bookmark.created_at !== 'string') return false;

  return true;
}

/**
 * 验证邮箱格式
 * @param email - 邮箱地址
 * @returns 是否为有效的邮箱格式
 */
export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * 验证 URL 格式
 * @param url - URL 地址
 * @returns 是否为有效的 URL 格式
 */
export function validateUrl(url: string): boolean {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

/**
 * 验证字符串长度
 * @param str - 要验证的字符串
 * @param min - 最小长度
 * @param max - 最大长度
 * @returns 是否在有效长度范围内
 */
export function validateLength(str: string, min: number, max: number): boolean {
  const length = str.trim().length;
  return length >= min && length <= max;
}

/**
 * 验证数字范围
 * @param num - 要验证的数字
 * @param min - 最小值
 * @param max - 最大值
 * @returns 是否在有效范围内
 */
export function validateRange(num: number, min: number, max: number): boolean {
  return num >= min && num <= max;
}

/**
 * 验证必填字段
 * @param value - 要验证的值
 * @returns 是否为非空值
 */
export function validateRequired(value: unknown): boolean {
  if (value === null || value === undefined) return false;
  if (typeof value === 'string') return value.trim() !== '';
  if (Array.isArray(value)) return value.length > 0;
  return true;
}
