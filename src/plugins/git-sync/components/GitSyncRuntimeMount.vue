<template>
  <GitSyncRuntimePortal
    ref="portalRef"
    :runtime-ready="runtime.ready.value"
    :state="runtime.state"
    :controller="runtime.controller"
  />
</template>

<script setup lang="ts">
import { getCurrentWindow } from '@tauri-apps/api/window';
import GitSyncRuntimePortal from './GitSyncRuntimePortal.vue';
import type { GitSyncRuntimeFacade } from '@/plugins/git-sync/useGitSyncRuntimeFacade';
import { useGitSyncRuntimeMount } from '@/plugins/git-sync/useGitSyncRuntimeMount';

const props = defineProps<{
  runtime: GitSyncRuntimeFacade;
  shouldInit: boolean | null;
}>();

const { portalRef } = props.runtime;
useGitSyncRuntimeMount({
  runtime: props.runtime,
  shouldInit: computed(() => props.shouldInit),
  getAutoSyncWindow: getCurrentWindow
});
</script>
