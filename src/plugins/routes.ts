import type { RouteRecordRaw } from 'vue-router';
import { isBundledOfficialPluginsMode } from './official-mode';

export const configPluginRoutes: RouteRecordRaw[] = isBundledOfficialPluginsMode
  ? [
      {
        path: 'local',
        name: 'Local',
        component: () => import('./local-launcher/pages/config/index.vue'),
        meta: { pluginId: 'local-launcher' }
      },
      {
        path: 'retrieve',
        name: 'Retrieve',
        component: () => import('./search-engines/pages/config/index.vue'),
        meta: { pluginId: 'search-engines' }
      },
      {
        path: 'todo',
        name: 'Todo',
        component: () => import('./todo/pages/config/index.vue'),
        meta: { pluginId: 'todo' }
      }
    ]
  : [];

export const layoutPluginRoutes: RouteRecordRaw[] = isBundledOfficialPluginsMode
  ? [
      {
        path: '/translate',
        name: 'Translate',
        component: () => import('./translation/pages/translate/index.vue'),
        meta: { pluginId: 'translation' }
      },
      {
        path: '/dark-mode',
        name: 'DarkMode',
        component: () => import('./system-theme/pages/dark-mode/index.vue'),
        meta: { pluginId: 'system-theme' }
      }
    ]
  : [];

export const windowPluginRoutes: RouteRecordRaw[] = isBundledOfficialPluginsMode
  ? [
      {
        path: '/screenshot',
        name: 'Screenshot',
        component: () => import('./screenshot/pages/screenshot/index.vue'),
        meta: { pluginId: 'screenshot' }
      },
      {
        path: '/pin',
        name: 'Pin',
        component: () => import('./screenshot/pages/pin/index.vue'),
        meta: { pluginId: 'screenshot' }
      },
      {
        path: '/screen-recorder',
        name: 'ScreenRecorder',
        component: () => import('./screen-recorder/pages/recorder/index.vue'),
        meta: { pluginId: 'screen-recorder' }
      }
    ]
  : [];
