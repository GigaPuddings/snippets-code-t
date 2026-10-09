import Application from '~icons/lucide/app-window';
import Library from '~icons/lucide/library';
import MessageSearch from '~icons/lucide/globe';
import Notepad from '~icons/lucide/list-todo';
import MessageCircleMore from '~icons/lucide/message-circle-more';
import Workbench from '~icons/lucide/layout-dashboard';
import type { Component } from 'vue';
import type { PluginId } from './types';

export interface ConfigNavigationTab {
  id: string;
  labelKey: string;
  icon: Component;
  path: string;
  pluginId?: PluginId;
}

export const isConfigNavigationPathActive = (
  currentPath: string,
  tabPath: string
): boolean => currentPath === tabPath || currentPath.startsWith(`${tabPath}/`);

export const configNavigationTabs: ConfigNavigationTab[] = [
  {
    id: 'workbench',
    labelKey: 'nav.workbench',
    icon: Workbench,
    path: '/config/workbench'
  },
  {
    id: 'workspace',
    labelKey: 'nav.workspace',
    icon: Library,
    path: '/config/category/contentList'
  },
  {
    id: 'launcher',
    labelKey: 'nav.launcher',
    icon: Application,
    path: '/config/local',
    pluginId: 'local-launcher'
  },
  {
    id: 'webSearch',
    labelKey: 'nav.webSearch',
    icon: MessageSearch,
    path: '/config/retrieve',
    pluginId: 'search-engines'
  },
  {
    id: 'todo',
    labelKey: 'nav.todo',
    icon: Notepad,
    path: '/config/todo',
    pluginId: 'todo'
  },
  {
    id: 'aiChat',
    labelKey: 'nav.aiChat',
    icon: MessageCircleMore,
    path: '/config/local-ai/chat',
    pluginId: 'local-ai'
  }
];

export const getConfigTabLabelKey = (
  currentPath: string
): string | undefined => {
  if (isConfigNavigationPathActive(currentPath, '/config/category/settings'))
    return 'titlebar.settings';
  if (
    isConfigNavigationPathActive(
      currentPath,
      '/config/category/contentList/user'
    )
  )
    return 'titlebar.userCenter';
  return configNavigationTabs.find((tab) =>
    isConfigNavigationPathActive(currentPath, tab.path)
  )?.labelKey;
};
