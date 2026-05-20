/**
 * 筛选引擎
 * 应用筛选条件到片段列表
 */

import { getDateRange } from './searchParser';

function normalizeFilterValue(value: unknown): string {
  return String(value ?? '').trim().toLowerCase();
}

function getMetadataValue(fragment: ContentType, keys: string[]): string {
  const metadata = fragment.metadata ?? {};

  for (const key of keys) {
    const value = metadata[key];
    if (typeof value === 'string' && value.trim()) {
      return value;
    }
  }

  return '';
}

function metadataOrTagsMatch(
  fragment: ContentType,
  value: string | undefined,
  metadataKeys: string[],
  fallbackValues: Array<unknown> = []
): boolean {
  if (!value) return true;

  const expected = normalizeFilterValue(value);
  const candidates = [
    getMetadataValue(fragment, metadataKeys),
    ...fallbackValues,
    ...(fragment.tags ?? [])
  ].map(normalizeFilterValue);

  return candidates.some(candidate => candidate === expected);
}

/**
 * 应用筛选条件到片段列表
 */
export function applyFilter(
  fragments: ContentType[],
  filter: SearchFilter
): ContentType[] {
  if (!filter || Object.keys(filter).length === 0) {
    return fragments;
  }
  
  let result = fragments.filter(fragment => matchesFilter(fragment, filter));
  
  // 应用排序
  if (filter.sortBy) {
    result = applySorting(result, filter.sortBy, filter.sortOrder || 'desc');
  }
  
  return result;
}

/**
 * 检查单个片段是否匹配筛选条件
 */
export function matchesFilter(
  fragment: ContentType,
  filter: SearchFilter
): boolean {
  // 文本匹配
  if (filter.text) {
    const searchText = filter.text.toLowerCase();
    const title = (fragment.title || '').toLowerCase();
    const content = (fragment.content || '').toLowerCase();
    
    if (!title.includes(searchText) && !content.includes(searchText)) {
      return false;
    }
  }
  
  // 类型匹配
  if (filter.type && filter.type !== 'all') {
    const fragmentType = fragment.type || 'code';
    if (fragmentType !== filter.type) {
      return false;
    }
  }
  
  // 标签匹配（OR 逻辑）
  if (filter.tags && filter.tags.length > 0) {
    const fragmentTags = fragment.tags || [];
    const hasMatchingTag = filter.tags.some(tag => 
      fragmentTags.includes(tag)
    );
    if (!hasMatchingTag) {
      return false;
    }
  }

  // 语言匹配：优先使用 metadata.language，同时允许用标签兜底。
  if (!metadataOrTagsMatch(
    fragment,
    filter.language,
    ['language', 'lang'],
    [(fragment as ContentType & { language?: string }).language]
  )) {
    return false;
  }

  // 框架匹配：支持 frontmatter/metadata，也允许使用标签或分类名承载框架信息。
  if (!metadataOrTagsMatch(
    fragment,
    filter.framework,
    ['framework', 'frameworkName'],
    [fragment.category_name]
  )) {
    return false;
  }

  // 语义类型匹配：支持 kind/snippetKind，也允许用标签、分类或基础 type 兜底。
  if (!metadataOrTagsMatch(
    fragment,
    filter.kind,
    ['kind', 'snippetKind'],
    [fragment.type, fragment.category_name]
  )) {
    return false;
  }
  
  // 创建日期匹配
  if (filter.createdPreset || filter.createdAfter || filter.createdBefore) {
    if (!fragment.created_at) {
      return false;
    }
    
    const createdDate = new Date(fragment.created_at);
    
    if (filter.createdPreset) {
      const range = getDateRange(filter.createdPreset);
      if (createdDate < range.start || createdDate > range.end) {
        return false;
      }
    } else {
      if (filter.createdAfter && createdDate < filter.createdAfter) {
        return false;
      }
      if (filter.createdBefore && createdDate > filter.createdBefore) {
        return false;
      }
    }
  }
  
  // 更新日期匹配
  if (filter.updatedPreset || filter.updatedAfter || filter.updatedBefore) {
    // 如果没有 updated_at 字段，使用 created_at
    const updatedAt = fragment.updated_at || fragment.created_at;
    if (!updatedAt) {
      return false;
    }
    
    const updatedDate = new Date(updatedAt);
    
    if (filter.updatedPreset) {
      const range = getDateRange(filter.updatedPreset);
      if (updatedDate < range.start || updatedDate > range.end) {
        return false;
      }
    } else {
      if (filter.updatedAfter && updatedDate < filter.updatedAfter) {
        return false;
      }
      if (filter.updatedBefore && updatedDate > filter.updatedBefore) {
        return false;
      }
    }
  }
  
  return true;
}

/**
 * 应用排序规则
 */
export function applySorting(
  fragments: ContentType[],
  sortBy: 'created' | 'updated' | 'title',
  sortOrder: 'asc' | 'desc'
): ContentType[] {
  const sorted = [...fragments];
  
  sorted.sort((a, b) => {
    let compareResult = 0;
    
    switch (sortBy) {
      case 'created':
        const aCreated = new Date(a.created_at || 0).getTime();
        const bCreated = new Date(b.created_at || 0).getTime();
        compareResult = aCreated - bCreated;
        break;
      
      case 'updated':
        const aUpdated = new Date(a.updated_at || a.created_at || 0).getTime();
        const bUpdated = new Date(b.updated_at || b.created_at || 0).getTime();
        compareResult = aUpdated - bUpdated;
        break;
      
      case 'title':
        const aTitle = (a.title || '').toLowerCase();
        const bTitle = (b.title || '').toLowerCase();
        compareResult = aTitle.localeCompare(bTitle);
        break;
    }
    
    return sortOrder === 'asc' ? compareResult : -compareResult;
  });
  
  return sorted;
}
