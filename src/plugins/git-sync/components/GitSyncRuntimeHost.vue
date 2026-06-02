<template>
  <GitSyncRuntimeMount
    :runtime="gitSyncRuntime"
    :should-init="configHostContext.shouldInit"
  />
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';
import modal from '@/utils/modal';
import { logger } from '@/utils/logger';
import { usePluginStore } from '@/store';
import GitSyncRuntimeMount from './GitSyncRuntimeMount.vue';
import { useGitSyncRuntimeFacade } from '../useGitSyncRuntimeFacade';

defineOptions({
  name: 'GitSyncRuntimeHost'
});

defineProps<{
  configHostContext: {
    shouldInit: boolean | null;
  };
}>();

const { t } = useI18n();
const router = useRouter();
const pluginStore = usePluginStore();

const gitSyncRuntime = useGitSyncRuntimeFacade({
  t,
  modalMsg: modal.msg.bind(modal),
  routeToGitSettings: () => router.push('/config/category/settings?tab=gitSync'),
  isPluginEnabled: () => pluginStore.isEnabled('git-sync'),
  logger
});
</script>
