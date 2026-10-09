import appIcon from '~icons/lucide/app-window';
import bookmarkIcon from '~icons/lucide/bookmark';
import searchIcon from '~icons/lucide/search';
import noteIcon from '~icons/lucide/notebook';
import codeIcon from '~icons/lucide/file-code';
import type { Component } from 'vue';
import type { ContentType } from '@/types/models';

export interface SearchResultIconState {
  src: string;
  component?: Component;
  fallbackText: string;
}

export function getSearchResultIcon(
  item: ContentType | null | undefined
): SearchResultIconState {
  if (!item) {
    return {
      src: '',
      fallbackText: '∎'
    };
  }

  const realIcon = item.icon?.trim();
  if (realIcon) {
    return {
      src: realIcon,
      fallbackText: ''
    };
  }

  if (item.summarize === 'app') {
    return {
      src: '',
      component: appIcon,
      fallbackText: 'A'
    };
  }

  if (item.summarize === 'bookmark') {
    return {
      src: '',
      component: bookmarkIcon,
      fallbackText: 'B'
    };
  }

  if (item.summarize === 'search') {
    return {
      src: '',
      component: searchIcon,
      fallbackText: 'S'
    };
  }

  if (item.type === 'note') {
    return {
      src: '',
      component: noteIcon,
      fallbackText: 'N'
    };
  }

  return {
    src: '',
    component: codeIcon,
    fallbackText: '{}'
  };
}
