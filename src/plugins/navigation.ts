import {
  Application,
  BookOpen,
  MessageSearch,
  Notepad,
  Robot,
  Workbench
} from '@icon-park/vue-next';
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
    icon: BookOpen,
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
    icon: Robot,
    path: '/config/local-ai/chat',
    pluginId: 'local-ai'
  }
];
