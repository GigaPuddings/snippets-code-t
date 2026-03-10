/**
 * File Sorting Utilities
 * 文件排序工具
 */

import type { MarkdownFile } from '@/types/models';
import { compareTimestamps } from './time-format';

/**
 * 排序字段类型
 */
export type SortField = 'title' | 'created' | 'modified' | 'type';

/**
 * 排序方向
 */
export type SortDirection = 'asc' | 'desc';

/**
 * 排序配置
 */
export interface SortConfig {
  /** 排序字段 */
  field: SortField;
  /** 排序方向 */
  direction: SortDirection;
}

/**
 * 按标题排序
 */
function sortByTitle(a: MarkdownFile, b: MarkdownFile, direction: SortDirection): number {
  const comparison = a.title.localeCompare(b.title, 'zh-CN');
  return direction === 'asc' ? comparison : -comparison;
}

/**
 * 按创建时间排序
 */
function sortByCreated(a: MarkdownFile, b: MarkdownFile, direction: SortDirection): number {
  const comparison = compareTimestamps(a.created, b.created);
  return direction === 'asc' ? comparison : -comparison;
}

/**
 * 按修改时间排序
 */
function sortByModified(a: MarkdownFile, b: MarkdownFile, direction: SortDirection): number {
  const comparison = compareTimestamps(a.modified, b.modified);
  return direction === 'asc' ? comparison : -comparison;
}

/**
 * 按类型排序
 */
function sortByType(a: MarkdownFile, b: MarkdownFile, direction: SortDirection): number {
  const comparison = a.type.localeCompare(b.type);
  return direction === 'asc' ? comparison : -comparison;
}

/**
 * 对文件列表进行排序
 * @param files 文件列表
 * @param config 排序配置
 * @returns 排序后的文件列表
 */
export function sortFiles(files: MarkdownFile[], config: SortConfig): MarkdownFile[] {
  const sorted = [...files];

  sorted.sort((a, b) => {
    switch (config.field) {
      case 'title':
        return sortByTitle(a, b, config.direction);
      case 'created':
        return sortByCreated(a, b, config.direction);
      case 'modified':
        return sortByModified(a, b, config.direction);
      case 'type':
        return sortByType(a, b, config.direction);
      default:
        return 0;
    }
  });

  return sorted;
}

/**
 * 创建排序比较函数
 * @param config 排序配置
 * @returns 比较函数
 */
export function createSortComparator(config: SortConfig) {
  return (a: MarkdownFile, b: MarkdownFile): number => {
    switch (config.field) {
      case 'title':
        return sortByTitle(a, b, config.direction);
      case 'created':
        return sortByCreated(a, b, config.direction);
      case 'modified':
        return sortByModified(a, b, config.direction);
      case 'type':
        return sortByType(a, b, config.direction);
      default:
        return 0;
    }
  };
}
