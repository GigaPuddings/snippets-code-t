<template>
  <GitSyncRuntimeMount
    :runtime="gitSyncRuntime"
    :should-init="configHostContext.shouldInit"
  />
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import modal from '@/utils/modal';
import { logger } from '@/utils/logger';
import type { ConfigHostContext } from '@/plugins/host-components';
import GitSyncRuntimeMount from './GitSyncRuntimeMount.vue';
import { useGitSyncRuntimeFacade } from '../useGitSyncRuntimeFacade';

defineOptions({
  name: 'GitSyncRuntimeHost'
});

const props = defineProps<{
  configHostContext: ConfigHostContext;
}>();

const { t } = useI18n();

const gitSyncRuntime = useGitSyncRuntimeFacade({
  t,
  modalMsg: modal.msg.bind(modal),
  routeToGitSettings: () => props.configHostContext.navigateTo('/config/category/settings?tab=gitSync'),
  isPluginEnabled: () => props.configHostContext.isPluginEnabled('git-sync'),
  logger
});
</script>
