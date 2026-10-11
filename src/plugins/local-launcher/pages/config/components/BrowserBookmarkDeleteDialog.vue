<template>
  <CommonDialog
    v-model="visible"
    :title="$t('local.deleteBrowserBookmark')"
    width="620px"
    :show-close="!busy"
    :close-on-press-escape="!busy"
  >
    <p class="mb-2 text-ui font-medium">{{ bookmark?.title }}</p>
    <p class="mb-4 text-ui-caption leading-6 text-ui-muted">
      {{ $t('local.browserDeleteHint') }}
    </p>
    <el-checkbox-group
      v-model="selected"
      class="flex max-h-72 flex-col gap-2 overflow-y-auto"
    >
      <div
        v-for="source in bookmark?.sources || []"
        :key="bookmarkSourceKey(source)"
        class="rounded-ui bg-ui-card p-3"
      >
        <el-checkbox
          :value="bookmarkSourceKey(source)"
          :disabled="!isConnected(source) || busy"
        >
          {{ bookmarkSourceLabel(source) }}
        </el-checkbox>
        <p class="mt-1 break-all text-ui-caption text-ui-muted">
          {{ source.url }}
        </p>
        <p
          class="mt-1 truncate text-ui-caption text-ui-muted"
          :title="source.storage_path"
        >
          {{ source.storage_path }}
        </p>
        <p
          v-if="!isConnected(source)"
          class="mt-1 text-ui-caption text-ui-muted"
        >
          {{ $t('local.sourceNotConnected') }}
        </p>
      </div>
    </el-checkbox-group>
    <CustomButton class="mt-3" :disabled="busy" @click="configure">
      {{ $t('local.browserConnection') }}
    </CustomButton>
    <template #footer>
      <div class="flex justify-end gap-2">
        <CustomButton :disabled="busy" @click="visible = false">
          {{ $t('common.cancel') }}
        </CustomButton>
        <CustomButton
          type="danger"
          :disabled="!selected.length"
          :loading="busy"
          @click="submit"
        >
          {{ $t('local.confirmBrowserDelete') }}
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
  type BridgeStatus
} from '../../../types';

const props = defineProps<{
  modelValue: boolean;
  bookmark: LauncherEntry | null;
}>();
const emit = defineEmits<{
  'update:modelValue': [value: boolean];
  changed: [];
  configure: [];
}>();
const { t } = useI18n();
const visible = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value)
});
const selected = ref<string[]>([]);
const busy = ref(false);
const bridge = ref<BridgeStatus>({ clients: [], bindings: {} });
const isConnected = (source: BookmarkSource): boolean =>
  Boolean(
    source.node_id &&
      source.url &&
      bridge.value.clients.some(
        (client) =>
          client.id === bridge.value.bindings[source.profile_key] &&
          client.browser === source.browser
      )
  );
const configure = (): void => {
  visible.value = false;
  emit('configure');
};
watch(
  () => props.modelValue,
  async (value) => {
    if (!value) return;
    selected.value = [];
    bridge.value = { clients: [], bindings: {} };
    try {
      bridge.value = await invoke<BridgeStatus>('get_launcher_browser_bridge');
    } catch (error) {
      modal.error(String(error));
    }
  }
);
const submit = async (): Promise<void> => {
  if (busy.value || !props.bookmark) return;
  const sources = (props.bookmark.sources || [])
    .filter(
      (source) =>
        selected.value.includes(bookmarkSourceKey(source)) &&
        isConnected(source)
    )
    .map(({ profile_key, node_id }) => ({ profile_key, node_id }));
  if (!sources.length) return;
  busy.value = true;
  try {
    const result = await invoke<{
      deleted: Array<Pick<BookmarkSource, 'profile_key' | 'node_id'>>;
      errors: string[];
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
    if (result.errors.length) modal.warning(result.errors.join('\n'));
    else visible.value = false;
  } catch (error) {
    modal.error(String(error));
  } finally {
    busy.value = false;
  }
};
</script>
