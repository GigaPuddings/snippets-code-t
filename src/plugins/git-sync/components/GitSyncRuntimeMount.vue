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

const props = defineProps<{
  runtime: GitSyncRuntimeFacade;
  shouldInit: boolean | null;
}>();

const { portalRef } = props.runtime;
let didSetup = false;

watch(
  () => props.shouldInit,
  async (shouldInit) => {
    if (shouldInit === null || didSetup) return;
    didSetup = true;
    await props.runtime.setupAndRestore({
      shouldInit,
      autoSyncWindow: getCurrentWindow()
    });
  },
  { immediate: true }
);

onUnmounted(() => {
  void props.runtime.cleanup();
});
</script>
