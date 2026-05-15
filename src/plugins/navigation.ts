import {
  Application,
  BookOpen,
  MessageSearch,
  Notepad
} from '@icon-park/vue-next';
import type { PluginId } from './types';

export interface ConfigNavigationTab {
  icon: any;
  path: string;
  pluginId?: PluginId;
}

export const configNavigationTabs: ConfigNavigationTab[] = [
  {
    icon: BookOpen,
    path: '/config/category/contentList'
  },
  {
    icon: Application,
    path: '/config/local',
    pluginId: 'local-launcher'
  },
  {
    icon: MessageSearch,
    path: '/config/retrieve',
    pluginId: 'search-engines'
  },
  {
    icon: Notepad,
    path: '/config/todo',
    pluginId: 'todo'
  }
];
