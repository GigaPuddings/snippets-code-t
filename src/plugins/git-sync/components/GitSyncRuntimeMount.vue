<template>
  <GitSyncRuntimePortal
    ref="portalRef"
    :runtime-ready="runtime.ready.value"
    :state="runtime.state"
    :controller="runtime.controller"
  />
</template>

<script setup lang="ts">
import GitSyncRuntimePortal from './GitSyncRuntimePortal.vue';
import type { GitSyncRuntimeFacade } from '@/plugins/git-sync/useGitSyncRuntimeFacade';

const props = defineProps<{
  runtime: GitSyncRuntimeFacade;
}>();

const { portalRef } = props.runtime;

onUnmounted(() => {
  void props.runtime.cleanup();
});
</script>
