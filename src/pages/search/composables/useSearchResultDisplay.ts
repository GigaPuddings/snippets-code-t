import FileText from '~icons/lucide/file-text';
import Folder from '~icons/lucide/folder';
import { escapeHtml, highlightText } from '@/utils/text';
import type { ComposerTranslation } from 'vue-i18n';
import type { Component } from 'vue';

const TEXT_FILE_EXTENSIONS = new Set([
  'txt',
  'log',
  'md',
  'markdown',
  'csv',
  'ini',
  'env',
  'toml'
]);
export const getRawSearchResultId = (item: ContentType): string => {
  const rawId = (item.metadata as Record<string, unknown> | null)?.raw_id;
  return String(rawId ?? item.id);
};

export function getBookmarkResultContent(
  item: ContentType,
  t: ComposerTranslation
): string {
  const rawSources = (item.metadata as Record<string, unknown> | null)?.sources;
  const sources =
    item.summarize === 'bookmark' && Array.isArray(rawSources)
      ? rawSources.filter(
          (source): source is Record<string, unknown> =>
            Boolean(source) && typeof source === 'object'
        )
      : [];
  const source = sources[0];
  const folders =
    source && Array.isArray(source.folder_path)
      ? source.folder_path
          .filter((value): value is string => typeof value === 'string')
          .join(' / ')
      : '';
  const origin = source
    ? [source.browser, source.profile, folders]
        .filter(
          (value): value is string =>
            typeof value === 'string' && Boolean(value)
        )
        .join(' · ')
    : '';
  const label =
    sources.length > 1
      ? `${origin} · ${t('local.sourceCount', { count: sources.length })}`
      : origin;
  return label ? `${label} · ${item.content}` : item.content;
}

export function useSearchResultDisplay(
  searchQuery: () => string | undefined,
  t: ComposerTranslation
) {
  const getDefaultTitle = (item: ContentType): string =>
    item.title || item.content.split('/')[2] || item.content;

  const isSingleWordText = (text: string): boolean =>
    !/[\s\-_/|.,:;()[\]{}]/.test(text.trim());

  const isNonHighlightResult = (item: ContentType): boolean => {
    return getRawSearchResultId(item) === 'url-open';
  };

  const isHistoryLikeResult = (item: ContentType): boolean => {
    return typeof item.id === 'string' && item.id.startsWith('history-');
  };

  const shouldHighlightTitle = (item: ContentType, title: string): boolean => {
    if (!searchQuery()?.trim() || !title.trim()) return false;
    if (isNonHighlightResult(item) || isHistoryLikeResult(item)) return false;
    if (item.summarize === 'app' || item.summarize === 'search') return true;
    if (item.summarize === 'bookmark' || item.type === 'note') return true;
    return !isSingleWordText(title);
  };

  const shouldHighlightContent = (
    item: ContentType,
    content: string
  ): boolean => {
    if (!searchQuery()?.trim() || !content.trim()) return false;
    if (isNonHighlightResult(item) || isHistoryLikeResult(item)) return false;
    if (item.type === 'note' || item.summarize === 'bookmark') return true;
    return !isSingleWordText(content) || content.trim().length > 12;
  };

  const getDisplayTitle = (item: ContentType): string => {
    const title = getDefaultTitle(item);
    return shouldHighlightTitle(item, title)
      ? highlightText(title, searchQuery())
      : escapeHtml(title);
  };

  const getDisplayContentHighlighted = (item: ContentType): string => {
    if (item.summarize === 'conversation') {
      const date = item.updated_at
        ? new Date(item.updated_at).toLocaleString()
        : '';
      return escapeHtml(
        [t('searchResult.conversations'), date].filter(Boolean).join(' · ')
      );
    }
    if (item.searchAction) return escapeHtml(item.content);
    if (getRawSearchResultId(item) === 'url-open') {
      return `<span class="url-display">${escapeHtml(item.content)}</span>`;
    }

    const content = getBookmarkResultContent(item, t);
    return shouldHighlightContent(item, content)
      ? highlightText(content, searchQuery())
      : escapeHtml(content);
  };

  const getTypeLabel = (item: ContentType): string => {
    if (item.summarize === 'navigation') return t('searchResult.functions');
    if (item.summarize === 'settings') return t('searchResult.settings');
    if (item.summarize === 'conversation')
      return t('searchResult.conversations');
    if (item.summarize === 'app') return t('searchResult.apps');
    if (item.summarize === 'bookmark') return t('searchResult.bookmarks');
    if (item.summarize === 'file') return t('searchResult.files');
    if (item.summarize === 'tool') return t('searchResult.tools');
    if (item.summarize === 'search') return t('searchResult.search');
    if (item.type === 'note') return t('searchResult.notes');
    if (item.type === 'code') return t('searchResult.code');
    return t('searchResult.all');
  };

  const getFileExtension = (item: ContentType): string => {
    const filePath = (item.metadata as Record<string, unknown> | null)
      ?.file_path;
    const rawPath = [filePath, item.content, item.title].find(
      (value) => typeof value === 'string' && value.trim()
    ) as string | undefined;
    if (!rawPath) return '';

    const cleanPath = rawPath.split(/[?#]/)[0];
    const fileName =
      cleanPath.split(/[\\/]/).filter(Boolean).pop() ?? cleanPath;
    const ext = fileName.includes('.') ? fileName.split('.').pop() : '';
    return ext?.toLowerCase() ?? '';
  };

  const getFileIconComponent = (item: ContentType): Component => {
    const ext = getFileExtension(item);
    if (ext === 'pdf') return FileText;
    if (TEXT_FILE_EXTENSIONS.has(ext)) return FileText;
    return Folder;
  };

  return {
    getDisplayTitle,
    getDisplayContentHighlighted,
    getTypeLabel,
    getFileIconComponent
  };
}
