import { FilePdfOne, FileText, Folder } from '@icon-park/vue-next';
import { escapeHtml, highlightText } from '@/utils/text';
import type { ComposerTranslation } from 'vue-i18n';
import type { Component } from 'vue';

const FILE_ICON_TEXT_MAP: Record<string, string> = {
  pdf: 'PDF',
  txt: 'TXT',
  log: 'TXT',
  md: 'MD',
  markdown: 'MD',
  csv: 'CSV',
  ini: 'INI',
  env: 'ENV',
  toml: 'TOML',
  json: 'JSON',
  yml: 'YML',
  yaml: 'YAML',
  xml: 'XML',
  html: 'HTML',
  htm: 'HTML',
  js: 'JS',
  ts: 'TS',
  tsx: 'TSX',
  jsx: 'JSX',
  vue: 'VUE',
  css: 'CSS',
  scss: 'SCSS',
  less: 'LESS',
  py: 'PY',
  rs: 'RS',
  go: 'GO',
  java: 'JAVA',
  c: 'C',
  cc: 'C++',
  cpp: 'C++',
  h: 'H',
  hpp: 'H',
  sql: 'SQL',
  sh: 'SH',
  bash: 'SH',
  png: 'IMG',
  jpg: 'IMG',
  jpeg: 'IMG',
  gif: 'IMG',
  webp: 'IMG',
  bmp: 'IMG',
  svg: 'SVG'
};

const TEXT_FILE_EXTENSIONS = new Set(['txt', 'log', 'md', 'markdown', 'csv', 'ini', 'env', 'toml']);
const STRUCTURED_FILE_EXTENSIONS = new Set(['json', 'yml', 'yaml', 'xml']);
const WEB_FILE_EXTENSIONS = new Set(['html', 'htm']);
const CODE_FILE_EXTENSIONS = new Set(['js', 'ts', 'tsx', 'jsx', 'vue', 'css', 'scss', 'less', 'py', 'rs', 'go', 'java', 'c', 'cc', 'cpp', 'h', 'hpp', 'sql', 'sh', 'bash']);
const MEDIA_FILE_EXTENSIONS = new Set(['png', 'jpg', 'jpeg', 'gif', 'webp', 'bmp', 'svg']);

export const getRawSearchResultId = (item: ContentType): string => {
  const rawId = (item.metadata as Record<string, unknown> | null)?.raw_id;
  return String(rawId ?? item.id);
};

export function useSearchResultDisplay(searchQuery: () => string | undefined, t: ComposerTranslation) {
  const getDefaultTitle = (item: ContentType): string => item.title || item.content.split('/')[2] || item.content;

  const isSingleWordText = (text: string): boolean => !/[\s\-_/|.,:;()[\]{}]/.test(text.trim());

  const isNonHighlightResult = (item: ContentType): boolean => {
    return getRawSearchResultId(item) === 'url-open' || item.summarize === 'app' || item.summarize === 'search';
  };

  const isHistoryLikeResult = (item: ContentType): boolean => {
    return typeof item.id === 'string' && item.id.startsWith('history-');
  };

  const shouldHighlightTitle = (item: ContentType, title: string): boolean => {
    if (!searchQuery()?.trim() || !title.trim()) return false;
    if (isNonHighlightResult(item) || isHistoryLikeResult(item)) return false;
    if (item.summarize === 'bookmark' || item.type === 'note') return true;
    return !isSingleWordText(title);
  };

  const shouldHighlightContent = (item: ContentType, content: string): boolean => {
    if (!searchQuery()?.trim() || !content.trim()) return false;
    if (isNonHighlightResult(item) || isHistoryLikeResult(item)) return false;
    if (item.type === 'note' || item.summarize === 'bookmark') return true;
    return !isSingleWordText(content) || content.trim().length > 12;
  };

  const getDisplayTitle = (item: ContentType): string => {
    const title = getDefaultTitle(item);
    return shouldHighlightTitle(item, title) ? highlightText(title, searchQuery()) : escapeHtml(title);
  };

  const getDisplayContentHighlighted = (item: ContentType): string => {
    if (getRawSearchResultId(item) === 'url-open') {
      return `<span class="url-display">${escapeHtml(item.content)}</span>`;
    }

    return shouldHighlightContent(item, item.content) ? highlightText(item.content, searchQuery()) : escapeHtml(item.content);
  };

  const getTypeLabel = (item: ContentType): string => {
    if (item.summarize === 'app') return t('searchResult.apps');
    if (item.summarize === 'bookmark') return t('searchResult.bookmarks');
    if (item.summarize === 'file') return t('searchResult.files');
    if (item.summarize === 'search') return t('searchResult.search');
    if (item.type === 'note') return t('searchResult.notes');
    if (item.type === 'code') return t('searchResult.code');
    return t('searchResult.all');
  };

  const getFileExtension = (item: ContentType): string => {
    const filePath = (item.metadata as Record<string, unknown> | null)?.file_path;
    const rawPath = [filePath, item.content, item.title].find((value) => typeof value === 'string' && value.trim()) as string | undefined;
    if (!rawPath) return '';

    const cleanPath = rawPath.split(/[?#]/)[0];
    const fileName = cleanPath.split(/[\\/]/).filter(Boolean).pop() ?? cleanPath;
    const ext = fileName.includes('.') ? fileName.split('.').pop() : '';
    return ext?.toLowerCase() ?? '';
  };

  const getFileIconText = (item: ContentType): string => FILE_ICON_TEXT_MAP[getFileExtension(item)] ?? '📁';

  const getFileIconComponent = (item: ContentType): Component => {
    const ext = getFileExtension(item);
    if (ext === 'pdf') return FilePdfOne;
    if (TEXT_FILE_EXTENSIONS.has(ext)) return FileText;
    return Folder;
  };

  const getFileIconClass = (item: ContentType): string => {
    const ext = getFileExtension(item);
    const classes = ['file-icon-default'];

    if (ext === 'pdf') classes.push('file-icon-pdf');
    else if (TEXT_FILE_EXTENSIONS.has(ext)) classes.push('file-icon-text');
    else if (STRUCTURED_FILE_EXTENSIONS.has(ext)) classes.push('file-icon-structured');
    else if (WEB_FILE_EXTENSIONS.has(ext)) classes.push('file-icon-web');
    else if (CODE_FILE_EXTENSIONS.has(ext)) classes.push('file-icon-code');
    else if (MEDIA_FILE_EXTENSIONS.has(ext)) classes.push('file-icon-media');

    return classes.join(' ');
  };

  return {
    getDisplayTitle,
    getDisplayContentHighlighted,
    getTypeLabel,
    getFileIconComponent,
    getFileIconText,
    getFileIconClass
  };
}
