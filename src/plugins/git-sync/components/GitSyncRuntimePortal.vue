<template>
  <GitConflictDialog
    v-if="runtimeReady"
    v-model="conflictDialogVisibleModel"
    :conflict-files="conflictFiles"
    :untracked-files="untrackedFiles"
    @confirm="controller.handleConflictResolution"
    @cancel="controller.handleConflictCancel"
    @escape="controller.handleConflictEscape"
    ref="conflictDialogRef"
  />

  <GitManualMerge
    v-if="runtimeReady"
    v-model="manualMergeDialogVisibleModel"
    :conflict-files="mergeFileList"
    @complete="controller.handleManualMergeComplete"
    @cancel="controller.handleManualMergeCancel"
    @back="controller.handleManualMergeBack"
    @escape="controller.handleManualMergeEscape"
    ref="manualMergeRef"
  />

  <ConfirmChoiceDialog
    v-model="repoNotFoundDialogVisibleModel"
    :title="t('settings.gitSync.repoNotFoundTitle')"
    :message="repoNotFoundMessage"
    :primary-text="t('settings.gitSync.repoNotFoundReconfig')"
    :secondary-text="t('settings.gitSync.repoNotFoundIgnore')"
    type="warning"
    @primary="controller.handleRepoNotFoundReconfig"
    @secondary="controller.handleRepoNotFoundIgnore"
    @close="controller.handleRepoNotFoundIgnore"
  />

  <ConfirmChoiceDialog
    v-model="conflictConfirmVisibleModel"
    :title="conflictConfirmOptions.title"
    :message="conflictConfirmOptions.message"
    :primary-text="conflictConfirmOptions.primaryText"
    :secondary-text="conflictConfirmOptions.secondaryText"
    :type="conflictConfirmOptions.type"
    @primary="state.confirm.handleResult('primary')"
    @secondary="state.confirm.handleResult('secondary')"
    @close="state.confirm.handleResult('close')"
  />
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import ConfirmChoiceDialog from '@/components/UI/ConfirmChoiceDialog.vue';
import type { GitRuntimeController } from '@/plugins/git-sync/useGitRuntimeController';
import type { GitRuntimeState } from '@/plugins/git-sync/useGitRuntimeState';

const GitConflictDialog = defineAsyncComponent(() => import('./GitConflictDialog/index.vue'));
const GitManualMerge = defineAsyncComponent(() => import('./GitManualMerge/index.vue'));

interface LoadingDialogExpose {
  setLoading: (loading: boolean) => void;
}

const props = defineProps<{
  runtimeReady: boolean;
  state: GitRuntimeState;
  controller: GitRuntimeController;
}>();

const { t } = useI18n();

const conflictDialogRef = ref<LoadingDialogExpose | null>(null);
const manualMergeRef = ref<LoadingDialogExpose | null>(null);

const conflictFiles = computed(() => props.state.dialogs.conflictFiles.value);
const untrackedFiles = computed(() => props.state.dialogs.untrackedFiles.value);
const mergeFileList = computed(() => props.state.dialogs.mergeFileList.value);
const repoNotFoundMessage = computed(() => props.state.repoNotFound.message.value);
const conflictConfirmOptions = computed(() => props.state.confirm.options.value);

const conflictDialogVisibleModel = computed({
  get: () => props.state.dialogs.showConflictDialog.value,
  set: (value: boolean) => {
    props.state.dialogs.showConflictDialog.value = value;
  }
});

const manualMergeDialogVisibleModel = computed({
  get: () => props.state.dialogs.showManualMergeDialog.value,
  set: (value: boolean) => {
    props.state.dialogs.showManualMergeDialog.value = value;
  }
});

const repoNotFoundDialogVisibleModel = computed({
  get: () => props.state.repoNotFound.visible.value,
  set: (value: boolean) => {
    props.state.repoNotFound.visible.value = value;
  }
});

const conflictConfirmVisibleModel = computed({
  get: () => props.state.confirm.visible.value,
  set: (value: boolean) => {
    props.state.confirm.visible.value = value;
  }
});

defineExpose({
  setConflictDialogLoading: (loading: boolean) => {
    conflictDialogRef.value?.setLoading(loading);
  },
  setManualMergeLoading: (loading: boolean) => {
    manualMergeRef.value?.setLoading(loading);
  }
});
</script>
