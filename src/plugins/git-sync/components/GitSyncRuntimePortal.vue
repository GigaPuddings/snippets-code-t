<template>
  <GitConflictDialog
    v-if="runtimeReady"
    v-model="conflictDialogVisibleModel"
    :conflict-files="conflictFiles"
    :untracked-files="untrackedFiles"
    @confirm="(strategy) => emit('conflict-confirm', strategy)"
    @cancel="emit('conflict-cancel')"
    @escape="emit('conflict-escape')"
    ref="conflictDialogRef"
  />

  <GitManualMerge
    v-if="runtimeReady"
    v-model="manualMergeDialogVisibleModel"
    :conflict-files="mergeFileList"
    @complete="(selections, editedContents) => emit('merge-complete', selections, editedContents)"
    @cancel="emit('merge-cancel')"
    @back="emit('merge-back')"
    @escape="emit('merge-escape')"
    ref="manualMergeRef"
  />

  <ConfirmChoiceDialog
    v-model="repoNotFoundDialogVisibleModel"
    :title="t('settings.gitSync.repoNotFoundTitle')"
    :message="repoNotFoundMessage"
    :primary-text="t('settings.gitSync.repoNotFoundReconfig')"
    :secondary-text="t('settings.gitSync.repoNotFoundIgnore')"
    type="warning"
    @primary="emit('repo-not-found-reconfig')"
    @secondary="emit('repo-not-found-ignore')"
    @close="emit('repo-not-found-ignore')"
  />

  <ConfirmChoiceDialog
    v-model="conflictConfirmVisibleModel"
    :title="conflictConfirmOptions.title"
    :message="conflictConfirmOptions.message"
    :primary-text="conflictConfirmOptions.primaryText"
    :secondary-text="conflictConfirmOptions.secondaryText"
    :type="conflictConfirmOptions.type"
    @primary="emit('conflict-confirm-result', 'primary')"
    @secondary="emit('conflict-confirm-result', 'secondary')"
    @close="emit('conflict-confirm-result', 'close')"
  />
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import ConfirmChoiceDialog from '@/components/UI/ConfirmChoiceDialog.vue';

const GitConflictDialog = defineAsyncComponent(() => import('./GitConflictDialog/index.vue'));
const GitManualMerge = defineAsyncComponent(() => import('./GitManualMerge/index.vue'));

interface LoadingDialogExpose {
  setLoading: (loading: boolean) => void;
}

interface ConfirmOptions {
  title: string;
  message: string;
  primaryText: string;
  secondaryText: string;
  type: 'info' | 'warning' | 'danger';
}

const props = defineProps<{
  runtimeReady: boolean;
  conflictDialogVisible: boolean;
  manualMergeDialogVisible: boolean;
  repoNotFoundDialogVisible: boolean;
  conflictConfirmVisible: boolean;
  conflictFiles: string[];
  untrackedFiles: string[];
  mergeFileList: string[];
  repoNotFoundMessage: string;
  conflictConfirmOptions: ConfirmOptions;
}>();

const emit = defineEmits<{
  (e: 'update:conflictDialogVisible', value: boolean): void;
  (e: 'update:manualMergeDialogVisible', value: boolean): void;
  (e: 'update:repoNotFoundDialogVisible', value: boolean): void;
  (e: 'update:conflictConfirmVisible', value: boolean): void;
  (e: 'conflict-confirm', strategy: string): void;
  (e: 'conflict-cancel'): void;
  (e: 'conflict-escape'): void;
  (e: 'merge-complete', selections: Record<number, 'remote' | 'local'>, editedContents: Record<number, string>): void;
  (e: 'merge-cancel'): void;
  (e: 'merge-back'): void;
  (e: 'merge-escape'): void;
  (e: 'repo-not-found-reconfig'): void;
  (e: 'repo-not-found-ignore'): void;
  (e: 'conflict-confirm-result', result: 'primary' | 'secondary' | 'close'): void;
}>();

const { t } = useI18n();

const conflictDialogRef = ref<LoadingDialogExpose | null>(null);
const manualMergeRef = ref<LoadingDialogExpose | null>(null);

const conflictDialogVisibleModel = computed({
  get: () => props.conflictDialogVisible,
  set: (value: boolean) => emit('update:conflictDialogVisible', value)
});

const manualMergeDialogVisibleModel = computed({
  get: () => props.manualMergeDialogVisible,
  set: (value: boolean) => emit('update:manualMergeDialogVisible', value)
});

const repoNotFoundDialogVisibleModel = computed({
  get: () => props.repoNotFoundDialogVisible,
  set: (value: boolean) => emit('update:repoNotFoundDialogVisible', value)
});

const conflictConfirmVisibleModel = computed({
  get: () => props.conflictConfirmVisible,
  set: (value: boolean) => emit('update:conflictConfirmVisible', value)
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
