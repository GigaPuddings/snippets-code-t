import { defineAsyncComponent } from 'vue';
import { SettingTwo } from '@icon-park/vue-next';
import type { PluginFrontendRuntimeContext } from '../runtime';
import { localAiProvider } from '@/ai';

export const activate = (context: PluginFrontendRuntimeContext): void => {
  context.registerAiProvider(localAiProvider);
  context.registerRoute({
    target: 'config',
    path: 'local-ai/chat',
    name: 'LocalAiChat',
    component: () => import('./pages/chat/index.vue')
  });
  context.registerSettingsTab({
    id: 'localAi',
    labelKey: 'localAi.title',
    icon: SettingTwo,
    component: defineAsyncComponent(() => import('./settings/index.vue'))
  });
};

export default activate;
