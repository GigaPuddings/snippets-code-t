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
  /** 总分 = 搜索相关性 + 使用频率分 */
  score: number;
  /** 使用频率分（次数 × 时效因子），无记录为 0 */
  historyScore: number;
  /** 标题是否与查询完全匹配（精确匹配通道，防止历史淹没精确匹配） */
  exactTitleMatch: boolean;
  sourceIndex: number;
  history?: SearchHistoryMeta;
}

/**
 * 使用频率加分的次数上限，避免历史总次数无限放大压制搜索相关性
 */
const HISTORY_USAGE_SCORE_CAP = 20;

/**
 * 每次使用贡献的基础分
 */
const HISTORY_USAGE_SCORE_PER_USE = 1200;

const DAY_IN_MS = 24 * 60 * 60 * 1000;

const parseHistoryTime = (value: string): number => {
  const time = Date.parse(value);
  return Number.isFinite(time) ? time : 0;
};

/**
 * 频率分的时效因子（frecency 中的 recency 维度）。
 *
 * 使用频率分如果只统计历史总次数，"很久以前用过很多次、但近期不再使用"的
 * 条目会永久霸榜，而"最近才开始高频使用"的条目因为累计次数少反而排不上来。
 * 按时效分段衰减后，近期使用权重最高，远古高频记录逐步让位：
 *
 * - 24 小时内使用：全额
 * - 7 天内使用：85%
 * - 30 天内使用：60%
 * - 90 天内使用：35%
 * - 更早：15%
 *
 * @param lastUsedAt - 最后使用时间（RFC3339/ISO 字符串）
 * @param now - 当前时间戳（可注入便于测试）
 */
export const getHistoryRecencyFactor = (
  lastUsedAt: string,
  now: number = Date.now()
): number => {
  const lastUsedTime = parseHistoryTime(lastUsedAt);
  if (!lastUsedTime) return 0.5;
  if (now <= lastUsedTime) return 1;

  const age = now - lastUsedTime;
  if (age <= DAY_IN_MS) return 1;
  if (age <= 7 * DAY_IN_MS) return 0.85;
  if (age <= 30 * DAY_IN_MS) return 0.6;
  if (age <= 90 * DAY_IN_MS) return 0.35;
  return 0.15;
};

/**
 * 计算条目的使用频率加分：次数（封顶）× 单次分 × 时效因子
 */
export const calculateHistoryScore = (
  history: SearchHistoryMeta,
  now: number = Date.now()
): number =>
  Math.round(
    Math.min(history.usage_count, HISTORY_USAGE_SCORE_CAP) *
      HISTORY_USAGE_SCORE_PER_USE *
      getHistoryRecencyFactor(history.last_used_at, now)
  );

const SOURCE_TIE_BREAKER: Record<string, number> = {
  'quick-tools': 6,
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

const normalizeHistoryKeyValue = (value: unknown): string =>
  normalizeSearchValue(value).replace(/\\/g, '/').replace(/\/+$/, '');

const createHistoryKey = (
  source: string,
  kind: string,
  value: unknown
): string | null => {
  const normalized = normalizeHistoryKeyValue(value);
  return normalized ? `${source}:${kind}:${normalized}` : null;
};

const getPrimaryPathValue = (item: ContentType): unknown =>
  item.metadata?.launch_path ??
  item.metadata?.display_path ??
  item.metadata?.file_path ??
  item.file_path ??
  item.content;

const pushUniqueKey = (keys: string[], key: unknown): void => {
  const value = typeof key === 'string' ? key.trim() : String(key ?? '').trim();
  if (value && !keys.includes(value)) {
    keys.push(value);
  }
};

export const getSearchHistoryKeys = (item: ContentType): string[] => {
  const source = getSource(item);
  const keys: string[] = [];

  pushUniqueKey(keys, getRawId(item));
  pushUniqueKey(keys, item.id);

  if (source === 'app') {
    pushUniqueKey(
      keys,
      createHistoryKey(source, 'path', getPrimaryPathValue(item))
    );
    return keys;
  }

  if (source === 'bookmark') {
    pushUniqueKey(keys, createHistoryKey(source, 'url', item.content));
    return keys;
  }

  if (source === 'file') {
    pushUniqueKey(
      keys,
      createHistoryKey(source, 'path', getPrimaryPathValue(item))
    );
    return keys;
  }

  if (source === 'markdown' || item.type === 'code' || item.type === 'note') {
    pushUniqueKey(keys, createHistoryKey('markdown', 'path', item.file_path));
  }

  return keys;
};

export const getPrimarySearchHistoryKey = (item: ContentType): string => {
  const source = getSource(item);
  const keys = getSearchHistoryKeys(item);
  const hasStableHistoryKey =
    source === 'app' ||
    source === 'bookmark' ||
    source === 'file' ||
    source === 'markdown' ||
    item.type === 'code' ||
    item.type === 'note';

  return hasStableHistoryKey
    ? (keys[keys.length - 1] ?? getRawId(item))
    : (keys[0] ?? getRawId(item));
};

/**
 * 查找条目的使用历史。
 *
 * 历史记录的 key 经历过格式演进（早期写入 raw_id，后续改为
 * `app:path:*` / `bookmark:url:*` 等稳定 key），同一条目在数据库中
 * 可能同时存在多条历史记录。此前按 key 顺序"第一个命中即返回"会让
 * 旧记录遮蔽新记录，新累积的使用次数永远读不到，高频使用的条目
 * 拿不到应有的频率加分。
 *
 * 现在合并所有命中的记录：usage_count 求和（同一条目的全部使用
 * 记录）、last_used_at 取最近一次。
 */
const getSearchHistory = (
  item: ContentType,
  historyMap: Map<string, SearchHistoryMeta>
): SearchHistoryMeta | undefined => {
  let matched = false;
  let usageCount = 0;
  let lastUsedTime = 0;

  for (const key of getSearchHistoryKeys(item)) {
    const history = historyMap.get(key);
    if (!history) continue;

    matched = true;
    usageCount += history.usage_count;

    const historyTime = parseHistoryTime(history.last_used_at);
    if (historyTime > lastUsedTime) {
      lastUsedTime = historyTime;
    }
  }

  if (!matched) return undefined;

  return {
    usage_count: usageCount,
    last_used_at: lastUsedTime ? new Date(lastUsedTime).toISOString() : ''
  };
};

const getBackendScore = (item: ContentType): number =>
  typeof item.score === 'number' && Number.isFinite(item.score)
    ? item.score
    : 0;

const isBackendMatchedResult = (
  item: ContentType,
  options: SearchMatchOptions
): boolean => {
  const backendScore = getBackendScore(item);
  if (backendScore <= 0) return false;

  const source = getSource(item);
  // 应用的检索由后端限定为标题、全拼和连续首字母匹配；前端无法从
  // SearchResult 重新推导中文拼音，因此必须保留这类已验证的结果。
  // 后端不再把安装路径作为 app 的匹配字段，故不会让路径误命中绕过
  // 当前浅层检索范围。
  if (source === 'app') {
    return true;
  }
  if (source === 'markdown') {
    return options.deepSearch ? backendScore >= 0.5 : backendScore >= 4;
  }

  return true;
};

const normalizeDedupeValue = (value: unknown): string =>
  normalizeSearchValue(value).replace(/\\/g, '/').replace(/\/+$/, '');

const getDedupeKey = (item: ContentType): string => {
  const source = getSource(item);
  const contentKey = normalizeDedupeValue(
    item.metadata?.display_path ??
      item.metadata?.launch_path ??
      item.file_path ??
      item.content
  );
  const titleKey = normalizeDedupeValue(item.title);

  if (source === 'bookmark') {
    return `${source}:${contentKey || titleKey}`;
  }

  if (source === 'app' || source === 'file') {
    return `${source}:${contentKey || titleKey}`;
  }

  return `${source}:${getRawId(item)}`;
};

const dedupeRankedItems = (items: RankedSearchItem[]): RankedSearchItem[] => {
  const seen = new Set<string>();
  const uniqueItems: RankedSearchItem[] = [];

  for (const item of items) {
    const key = getDedupeKey(item.item);
    if (seen.has(key)) continue;

    seen.add(key);
    uniqueItems.push(item);
  }

  return uniqueItems;
};

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

  if (source === 'quick-tools' || item.summarize === 'tool') score += 12000;

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

  if (getSource(item) === 'quick-tools' || item.summarize === 'tool') {
    return true;
  }

  const searchableText = normalizeSearchValue(
    getScopedSearchableText(item, options)
  );
  if (searchTextMatchesQuery(searchableText, normalizedQuery)) return true;

  return isBackendMatchedResult(item, options);
};

export const rankSearchResults = (
  items: ContentType[],
  query: string,
  historyMap: Map<string, SearchHistoryMeta>,
  options: SearchMatchOptions
): ContentType[] => {
  const normalizedQuery = normalizeSearchValue(query);

  return dedupeRankedItems(
    items
      .filter((item) => isRelevantSearchResult(item, query, options))
      .map<RankedSearchItem>((item, index) => {
        const history = getSearchHistory(item, historyMap);
        const historyScore = history ? calculateHistoryScore(history) : 0;
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
          historyScore,
          exactTitleMatch:
            Boolean(normalizedQuery) &&
            normalizeSearchValue(item.title) === normalizedQuery,
          sourceIndex: index,
          history
        };
      })
      .sort((a, b) => {
        // 1. 标题完全匹配优先：历史记录不应淹没精确匹配
        if (a.exactTitleMatch !== b.exactTitleMatch) {
          return a.exactTitleMatch ? -1 : 1;
        }

        // 2. 有使用记录的条目整体排在无记录之前。
        //    能进入列表的条目都已通过相关性过滤，因此"我用过的"应当
        //    始终先于"我没用过的"（启动器心智），一次使用即可生效。
        const aHasHistory = a.history ? 1 : 0;
        const bHasHistory = b.history ? 1 : 0;
        if (bHasHistory !== aHasHistory) return bHasHistory - aHasHistory;

        // 3. 都有记录时，频率分（次数 × 时效）高者优先，
        //    访问次数最多的条目排最前
        if (b.historyScore !== a.historyScore) {
          return b.historyScore - a.historyScore;
        }

        // 4. 总分（相关性 + 频率分）降序
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
  ).map(({ item }) => item);
};
