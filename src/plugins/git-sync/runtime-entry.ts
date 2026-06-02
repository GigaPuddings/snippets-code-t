import { defineAsyncComponent } from 'vue';
import { Github } from '@icon-park/vue-next';
import type { PluginFrontendRuntimeContext } from '../runtime';

export const activate = (context: PluginFrontendRuntimeContext): void => {
  context.registerSettingsTab({
    id: 'gitSync',
    labelKey: 'settings.gitSync.menu',
    icon: Github,
    component: defineAsyncComponent(() => import('./settings/index.vue'))
  });
  context.registerTitlebarAction({
    id: 'git-sync-status',
    component: defineAsyncComponent(() => import('./components/TitlebarGitStatus.vue'))
  });
  context.registerHostComponent({
    id: 'git-sync-runtime',
    target: 'config',
    component: defineAsyncComponent(() => import('./components/GitSyncRuntimeHost.vue'))
  });
};

