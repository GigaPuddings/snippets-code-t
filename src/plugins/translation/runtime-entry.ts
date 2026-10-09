import '@/styles/icons.scss';
import { defineAsyncComponent } from 'vue';
import Translate from '~icons/lucide/languages';
import type { PluginFrontendRuntimeContext } from '../runtime';

export const activate = (context: PluginFrontendRuntimeContext): void => {
  context.registerRoute({
    target: 'layout',
    path: '/translate',
    name: 'Translate',
    component: () => import('./pages/translate/index.vue')
  });
  context.registerSettingsTab({
    id: 'translation',
    labelKey: 'translation.title',
    icon: Translate,
    component: defineAsyncComponent(() => import('./settings/index.vue'))
  });
};
