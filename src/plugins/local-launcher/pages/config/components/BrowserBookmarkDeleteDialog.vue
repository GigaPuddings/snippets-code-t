<template>
  <CommonDialog
    v-model="visible"
    :title="$t('local.removeTitle')"
    width="620px"
    :show-close="!busy"
    :close-on-press-escape="!busy"
  >
    <p class="mb-3 text-ui font-medium">{{ bookmark?.title }}</p>
    <el-radio-group
      v-model="mode"
      class="mb-3 flex flex-wrap gap-2"
      :disabled="busy"
    >
      <el-radio value="browser">
        {{ $t('local.deleteBrowserBookmark') }}
      </el-radio>
      <el-radio value="hide">{{ $t('local.hide') }}</el-radio>
    </el-radio-group>
    <template v-if="mode === 'browser'">
      <p class="mb-2 text-ui-caption leading-6 text-ui-muted">
        {{ $t('local.browserDeleteHint') }}
      </p>
      <p class="mb-3 text-ui-caption leading-6 text-ui-muted">
        {{ $t('local.browserDeleteSyncHint') }}
      </p>
      <el-checkbox-group
        v-model="selected"
        class="flex max-h-[45vh] flex-col gap-2 overflow-y-auto"
      >
        <div
          v-for="source in bookmark?.sources || []"
          :key="bookmarkSourceKey(source)"
          class="rounded-ui bg-ui-card p-3"
        >
          <el-checkbox
            :value="bookmarkSourceKey(source)"
            :disabled="busy || !statusFor(source)?.available"
          >
            {{ bookmarkSourceLabel(source) }}
          </el-checkbox>
          <p
            class="mt-1 truncate text-ui-caption text-ui-muted"
            :title="source.url"
          >
            {{ source.url }}
          </p>
          <p
            class="mt-1 truncate text-ui-caption text-ui-muted"
            :title="source.storage_path"
          >
            {{ source.storage_path }}
          </p>
          <p
            v-if="statusFor(source)?.reason"
            class="mt-1 text-ui-caption text-ui-muted"
          >
            {{ statusFor(source)?.reason }}
          </p>
        </div>
      </el-checkbox-group>
      <div class="mt-3 flex items-center justify-between gap-3">
        <p class="text-ui-caption text-ui-muted">
          {{ error || $t('local.bookmarkBackupHint') }}
        </p>
        <CustomButton
          size="small"
          :loading="checking"
          :disabled="busy"
          @click="refreshStatus"
        >
          {{ $t('local.recheckBrowser') }}
        </CustomButton>
      </div>
    </template>
    <p v-else class="text-ui-caption leading-6 text-ui-muted">
      {{ $t('local.hiddenHint') }}
    </p>
    <template #footer>
      <div class="flex justify-end gap-2">
        <CustomButton :disabled="busy" @click="visible = false">
          {{ $t('common.cancel') }}
        </CustomButton>
        <CustomButton
          :type="mode === 'browser' ? 'danger' : 'default'"
          :disabled="mode === 'browser' && !ready.length"
          :loading="busy"
          @click="submit"
        >
          {{
            mode === 'browser'
              ? $t('local.confirmBrowserDelete')
              : $t('local.hide')
          }}
        </CustomButton>
      </div>
    </template>
  </CommonDialog>
</template>

<script setup lang="ts">
import { invoke } from '@tauri-apps/api/core';
import { useI18n } from 'vue-i18n';
import { CommonDialog, CustomButton } from '@/components/UI';
import modal from '@/utils/modal';
import {
  bookmarkSourceKey,
  bookmarkSourceLabel,
  type LauncherEntry,
  type BookmarkSource,
  type BookmarkDeleteStatus
} from '../../../types';

const props = defineProps<{
  modelValue: boolean;
  bookmark: LauncherEntry | null;
}>();
const emit = defineEmits<{
  'update:modelValue': [value: boolean];
  changed: [];
}>();
const { t } = useI18n();
const visible = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value)
});
const mode = ref<'hide' | 'browser'>('browser');
const selected = ref<string[]>([]);
const busy = ref(false);
const checking = ref(false);
const error = ref('');
const status = ref<BookmarkDeleteStatus[]>([]);
const statusFor = (source: BookmarkSource): BookmarkDeleteStatus | undefined =>
  status.value.find(
    (item) => bookmarkSourceKey(item) === bookmarkSourceKey(source)
  );
const ready = computed(() =>
  (props.bookmark?.sources || []).filter(
    (source) =>
      selected.value.includes(bookmarkSourceKey(source)) &&
      statusFor(source)?.available
  )
);
const refreshStatus = async (): Promise<void> => {
  if (
    checking.value ||
    busy.value ||
    !props.bookmark ||
    mode.value !== 'browser'
  )
    return;
  const id = props.bookmark.id;
  checking.value = true;
  try {
    const result = await invoke<BookmarkDeleteStatus[]>(
      'get_browser_bookmark_delete_status',
      { id }
    );
    if (props.bookmark?.id === id) {
      status.value = result;
      error.value = '';
    }
  } catch (failure) {
    status.value = [];
    error.value = String(failure);
  } finally {
    checking.value = false;
  }
};
let timer: ReturnType<typeof setInterval> | undefined;
let generation = 0;
watch(
  () => props.modelValue,
  async (value) => {
    const revision = ++generation;
    clearInterval(timer);
    timer = undefined;
    if (!value) return;
    mode.value = 'browser';
    status.value = [];
    // One source needs no extra selection. Multiple sources require an explicit choice.
    selected.value =
      props.bookmark?.sources?.length === 1
        ? [bookmarkSourceKey(props.bookmark.sources[0])]
        : [];
    await refreshStatus();
    if (props.modelValue && revision === generation)
      timer = setInterval(refreshStatus, 2000);
  }
);
onUnmounted(() => {
  generation++;
  clearInterval(timer);
});

const submit = async (): Promise<void> => {
  if (
    busy.value ||
    !props.bookmark ||
    (mode.value === 'browser' && !ready.value.length)
  )
    return;
  const sources = ready.value.map(({ profile_key, node_id }) => ({
    profile_key,
    node_id
  }));
  busy.value = true;
  try {
    if (mode.value === 'hide') {
      await invoke('delete_bookmark', { id: props.bookmark.id });
      modal.success(t('local.hiddenSuccess'));
      emit('changed');
      visible.value = false;
      return;
    }
    const result = await invoke<{
      deleted: Array<Pick<BookmarkSource, 'profile_key' | 'node_id'>>;
      errors: string[];
      backups: string[];
    }>('delete_browser_bookmark_sources', { id: props.bookmark.id, sources });
    if (result.deleted.length) {
      modal.success(
        t('local.browserDeleteSuccess', { count: result.deleted.length })
      );
      emit('changed');
    }
    selected.value = selected.value.filter(
      (key) =>
        !result.deleted.some((source) => bookmarkSourceKey(source) === key)
    );
    if (result.errors.length) {
      error.value = result.errors.join('\n');
      modal.warning(error.value);
    } else visible.value = false;
  } catch (failure) {
    error.value = String(failure);
    modal.error(error.value);
  } finally {
    busy.value = false;
  }
};
</script>
