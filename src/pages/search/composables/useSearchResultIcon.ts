import appIcon from '@/assets/svg/app.svg';
import bookmarkIcon from '@/assets/svg/bookmark.svg';
import searchIcon from '@/assets/svg/search.svg';
import noteIcon from '@/assets/svg/note.svg';
import codeIcon from '@/assets/svg/code.svg';
import type { ContentType } from '@/types/models';

export interface SearchResultIconState {
  src: string;
  fallbackText: string;
  isDefaultTypeIcon: boolean;
  typeClass: string;
}

export function getSearchResultIcon(item: ContentType | null | undefined): SearchResultIconState {
  if (!item) {
    return {
      src: '',
      fallbackText: '∎',
      isDefaultTypeIcon: false,
      typeClass: ''
    };
  }

  const realIcon = item.icon?.trim();
  if (realIcon) {
    return {
      src: realIcon,
      fallbackText: '',
      isDefaultTypeIcon: false,
      typeClass: ''
    };
  }

  if (item.summarize === 'app') {
    return {
      src: appIcon,
      fallbackText: 'A',
      isDefaultTypeIcon: true,
      typeClass: 'app'
    };
  }

  if (item.summarize === 'bookmark') {
    return {
      src: bookmarkIcon,
      fallbackText: 'B',
      isDefaultTypeIcon: true,
      typeClass: 'bookmark'
    };
  }

  if (item.summarize === 'search') {
    return {
      src: searchIcon,
      fallbackText: 'S',
      isDefaultTypeIcon: true,
      typeClass: 'search'
    };
  }

  if (item.type === 'note') {
    return {
      src: noteIcon,
      fallbackText: 'N',
      isDefaultTypeIcon: true,
      typeClass: 'note'
    };
  }

  return {
    src: codeIcon,
    fallbackText: '{}',
    isDefaultTypeIcon: true,
    typeClass: 'code'
  };
}
