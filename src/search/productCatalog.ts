import type { ContentType } from '@/types';
import type { RegisteredPlugin } from '@/plugins/protocol';
import { configNavigationTabs } from '@/plugins/navigation';
import { getVisibleSettingsMenuItems } from '@/plugins/settings';

const aliases: Record<string, string[]> = {
  workbench: [
    '工作台',
    '开发者工作台',
    'dashboard',
    'workbench',
    'gongzuotai',
    'gzt'
  ],
  workspace: ['工作区', '笔记', '片段', 'workspace', 'gongzuoqu', 'gzq'],
  launcher: ['启动器', '应用', '书签', 'launcher', 'qidongqi', 'qdq'],
  webSearch: ['网络搜索', '搜索引擎', 'web search', 'engine', 'wangluosousuo'],
  todo: ['待办', '代办', '提醒', 'todo', 'reminder', 'daiban', 'db'],
  aiChat: ['AI对话', 'AI聊天', '新对话', 'chat', 'new chat', 'ai liaotian'],
  general: ['通用设置', '常规', 'general', 'tongyongshezhi', 'tysz'],
  ai: ['AI能力', '模型', 'provider', 'AI settings'],
  plugins: ['插件管理', '插件市场', 'plugins', 'chajianguanli', 'cjgl'],
  shortcut: [
    '快捷键设置',
    '热键',
    'shortcuts',
    'hotkeys',
    'kuaijiejian',
    'kjj'
  ],
  data: ['数据与存储', '数据管理', '缓存', 'data', 'storage', 'shuju', 'sjcc'],
  developer: ['开发者模式', '调试', 'developer', 'debug'],
  localAi: ['本地AI', '本地模型', 'local AI', 'local model'],
  user: [
    '个人中心',
    '账户',
    '账号',
    'profile',
    'account',
    'gerenzhongxin',
    'grzx'
  ]
};

export const buildProductSearchCatalog = (
  t: (key: string) => string,
  plugins: RegisteredPlugin[],
  isEnabled: (pluginId: string) => boolean
): ContentType[] => {
  const pages: ContentType[] = configNavigationTabs
    .filter((tab) => !tab.pluginId || isEnabled(tab.pluginId))
    .map((tab) => ({
      id: `page:${tab.id}`,
      title: t(
        tab.id === 'workbench' ? 'search.developerWorkbench' : tab.labelKey
      ),
      content: t(
        tab.id === 'aiChat'
          ? 'search.newChatDescription'
          : 'search.functionLocation'
      ),
      summarize: 'navigation',
      searchAction:
        tab.id === 'aiChat'
          ? { kind: 'new-chat' }
          : { kind: 'page', routeName: tab.routeName },
      metadata: {
        source: 'navigation',
        navigation_id: tab.id,
        search_aliases: [...(aliases[tab.id] ?? []), tab.id],
        ...(tab.pluginId ? { plugin_id: tab.pluginId } : {})
      }
    }));
  const settings: ContentType[] = getVisibleSettingsMenuItems(
    plugins,
    isEnabled
  ).map((tab) => ({
    id: `setting:${tab.id}`,
    title:
      t(tab.labelKey) === tab.labelKey
        ? (tab.label ?? t(tab.labelKey))
        : t(tab.labelKey),
    content: t('search.settingsLocation'),
    summarize: 'settings',
    searchAction: { kind: 'settings', tabId: tab.id },
    metadata: {
      source: 'settings',
      navigation_id: tab.id,
      search_aliases: [
        ...(aliases[tab.id] ?? []),
        tab.id,
        ...(tab.pluginId
          ? [
              tab.pluginId,
              plugins.find((plugin) => plugin.id === tab.pluginId)?.manifest
                .name.fallback ?? ''
            ]
          : [])
      ],
      ...(tab.pluginId ? { plugin_id: tab.pluginId } : {})
    }
  }));
  settings.push({
    id: 'page:user',
    title: t('titlebar.userCenter'),
    content: t('search.accountLocation'),
    summarize: 'settings',
    searchAction: { kind: 'page', routeName: 'User' },
    metadata: {
      source: 'settings',
      navigation_id: 'user',
      search_aliases: aliases.user
    }
  });
  return [...pages, ...settings];
};
