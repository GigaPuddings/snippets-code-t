import type { ContentType } from '@/types';

export interface SearchHistoryMeta {
  usage_count: number;
  last_used_at: string;
}

export interface SearchMatchOptions {
  deepSearch: boolean;
}

interface RankedSearchItem {
  item: ContentType;
  score: number;
  sourceIndex: number;
  history?: SearchHistoryMeta;
}

const SOURCE_TIE_BREAKER: Record<string, number> = {
  app: 4,
  file: 3,
  bookmark: 2,
  markdown: 1,
  'default-search': 0,
  search: 0
};

export const normalizeSearchValue = (value: unknown): string =>
  String(value ?? '')
    .trim()
    .toLowerCase();

export const getSearchTokens = (query: string): string[] => {
  const normalizedQuery = normalizeSearchValue(query);
  if (!normalizedQuery) return [];

  const tokens = normalizedQuery
    .split(/[\s/\\._\-:]+/)
    .map((token) => token.trim())
    .filter(Boolean);

  return Array.from(new Set([normalizedQuery, ...tokens]));
};

export const isOrderedCharacterMatch = (
  value: string,
  query: string
): boolean => {
  if (query.length < 2) return false;

  let queryIndex = 0;
  for (const char of value) {
    if (char === query[queryIndex]) {
      queryIndex += 1;
      if (queryIndex === query.length) return true;
    }
  }

  return false;
};

const getFileNameParts = (item: ContentType): string[] => {
  const source = getSource(item);
  const paths = [
    item.file_path,
    ['app', 'file'].includes(source) ? item.content : undefined
  ]
    .filter(Boolean)
    .map(String);

  return paths.flatMap((path) => {
    const fileName = path.split(/[\\/]/).pop() ?? '';
    const stem = fileName.replace(/\.[^.]+$/, '');
    return [fileName, stem].filter(Boolean);
  });
};

const getSearchableText = (item: ContentType): string =>
  [
    item.title,
    item.content,
    item.file_path,
    item.category_name,
    ...(item.tags ?? [])
  ]
    .filter(Boolean)
    .join(' ');

const getSource = (item: ContentType): string => {
  const source = item.metadata?.source;
  return typeof source === 'string' ? source : (item.summarize ?? 'text');
};

const getLiteralSearchableText = (item: ContentType): string => {
  if (getSource(item) === 'app') {
    return [item.title, ...getFileNameParts(item)].filter(Boolean).join(' ');
  }

  return getSearchableText(item);
};

const getTitleSearchableText = (item: ContentType): string =>
  String(item.title ?? '');

const getScopedSearchableText = (
  item: ContentType,
  options: SearchMatchOptions
): string =>
  options.deepSearch
    ? getLiteralSearchableText(item)
    : getTitleSearchableText(item);

const getRawId = (item: ContentType): string =>
  String(item.metadata?.raw_id ?? item.id);

const getBackendScore = (item: ContentType): number =>
  typeof item.score === 'number' && Number.isFinite(item.score)
    ? item.score
    : 0;

const searchTextMatchesQuery = (text: string, query: string): boolean => {
  if (!text || !query) return false;
  if (text.includes(query)) return true;

  const tokens = getSearchTokens(query).filter((token) => token !== query);
  if (tokens.length > 0 && tokens.some((token) => text.includes(token))) {
    return true;
  }

  return isOrderedCharacterMatch(text, query);
};

export const calculateSearchRelevance = (
  item: ContentType,
  query: string,
  options: SearchMatchOptions
): number => {
  const normalizedQuery = normalizeSearchValue(query);
  if (!normalizedQuery) return 0;

  const tokens = getSearchTokens(normalizedQuery);
  const title = normalizeSearchValue(item.title);
  const content = normalizeSearchValue(item.content);
  const filePath = normalizeSearchValue(item.file_path);
  const fileNames = getFileNameParts(item).map(normalizeSearchValue);
  const tags = (item.tags ?? []).map(normalizeSearchValue);
  const category = normalizeSearchValue(item.category_name);
  const source = getSource(item);
  const searchableText = normalizeSearchValue(
    getScopedSearchableText(item, options)
  );
  const backendScore = getBackendScore(item);

  let score = Math.min(backendScore, options.deepSearch ? 200 : 80);

  if (title === normalizedQuery) score += 10000;
  if (
    options.deepSearch &&
    fileNames.some((fileName) => fileName === normalizedQuery)
  )
    score += 9500;
  if (title.startsWith(normalizedQuery)) score += 8500;
  if (
    options.deepSearch &&
    fileNames.some((fileName) => fileName.startsWith(normalizedQuery))
  )
    score += 8000;
  if (title.includes(normalizedQuery)) score += 6500;
  if (
    options.deepSearch &&
    fileNames.some((fileName) => fileName.includes(normalizedQuery))
  )
    score += 6000;
  if (isOrderedCharacterMatch(title, normalizedQuery)) score += 2200;
  if (
    options.deepSearch &&
    fileNames.some((fileName) =>
      isOrderedCharacterMatch(fileName, normalizedQuery)
    )
  ) {
    score += 2000;
  }
  if (options.deepSearch && tags.some((tag) => tag === normalizedQuery))
    score += 4000;
  if (options.deepSearch && category === normalizedQuery) score += 3000;
  if (
    options.deepSearch &&
    source !== 'app' &&
    content.includes(normalizedQuery)
  )
    score += 1800;
  if (
    options.deepSearch &&
    source !== 'app' &&
    filePath.includes(normalizedQuery)
  )
    score += 1500;

  const meaningfulTokens = tokens.filter((token) => token !== normalizedQuery);
  if (meaningfulTokens.length > 0) {
    const titleTokenMatches = meaningfulTokens.filter((token) =>
      title.includes(token)
    ).length;
    const fileTokenMatches = meaningfulTokens.filter(
      (token) =>
        options.deepSearch &&
        fileNames.some((fileName) => fileName.includes(token))
    ).length;
    const textTokenMatches = meaningfulTokens.filter((token) =>
      searchableText.includes(token)
    ).length;

    score += titleTokenMatches * 700;
    score += fileTokenMatches * 650;
    score += textTokenMatches * 120;

    if (textTokenMatches === meaningfulTokens.length) {
      score += 500;
    }
  }

  return score;
};

export const isRelevantSearchResult = (
  item: ContentType,
  query: string,
  options: SearchMatchOptions
): boolean => {
  if (item.summarize === 'search') return true;

  const normalizedQuery = normalizeSearchValue(query);
  if (!normalizedQuery) return false;

  const searchableText = normalizeSearchValue(
    getScopedSearchableText(item, options)
  );
  if (searchTextMatchesQuery(searchableText, normalizedQuery)) return true;

  return options.deepSearch && getBackendScore(item) >= 40;
};

export const rankSearchResults = (
  items: ContentType[],
  query: string,
  historyMap: Map<string, SearchHistoryMeta>,
  options: SearchMatchOptions
): ContentType[] =>
  items
    .filter((item) => isRelevantSearchResult(item, query, options))
    .map<RankedSearchItem>((item, index) => {
      const history = historyMap.get(getRawId(item));
      const historyScore = history
        ? Math.min(history.usage_count, 20) * 1200
        : 0;
      const score =
        calculateSearchRelevance(item, query, options) + historyScore;

      return {
        item: {
          ...item,
          metadata: {
            ...(item.metadata ?? {}),
            search_score: score,
            history_usage_count: history?.usage_count ?? 0
          }
        },
        score,
        sourceIndex: index,
        history
      };
    })
    .sort((a, b) => {
      if (b.score !== a.score) return b.score - a.score;

      const aHistoryTime = a.history
        ? new Date(a.history.last_used_at).getTime()
        : 0;
      const bHistoryTime = b.history
        ? new Date(b.history.last_used_at).getTime()
        : 0;
      if (bHistoryTime !== aHistoryTime) return bHistoryTime - aHistoryTime;

      const sourceDelta =
        (SOURCE_TIE_BREAKER[getSource(b.item)] ?? 0) -
        (SOURCE_TIE_BREAKER[getSource(a.item)] ?? 0);
      if (sourceDelta !== 0) return sourceDelta;

      return a.sourceIndex - b.sourceIndex;
    })
    .map(({ item }) => item);
