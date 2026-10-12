<template>
  <CommonDialog
    v-model="visible"
    :title="$t('local.launcherSettings')"
    width="680px"
  >
    <el-tabs v-model="tab">
      <el-tab-pane :label="$t('local.discovery')" name="discovery">
        <div class="space-y-4">
          <el-checkbox
            v-model="settings.show_auxiliary"
            :disabled="busy || scanning"
          >
            {{ $t('local.showAuxiliary') }}
          </el-checkbox>
          <p class="text-ui-caption text-ui-muted">
            {{ $t('local.auxiliaryHint') }}
          </p>
          <label for="launcher-scan-roots" class="block text-ui font-medium">
            {{ $t('local.scanRoots') }}
          </label>
          <el-input
            id="launcher-scan-roots"
            v-model="roots"
            type="textarea"
            :rows="3"
            :placeholder="$t('local.scanRootsHint')"
            :disabled="busy || scanning"
          />
          <p class="text-ui-caption text-ui-muted">
            {{ $t('local.rescanSaveHint') }}
          </p>
          <div class="flex justify-end gap-2">
            <CustomButton :loading="busy || scanning" @click="rescan">
              {{ $t(scanning ? 'local.rescanRunning' : 'local.rescan') }}
            </CustomButton>
            <CustomButton :loading="busy" :disabled="scanning" @click="save">
              {{ $t('common.save') }}
            </CustomButton>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane :label="$t('local.hiddenItems')" name="hidden">
        <p class="mb-3 text-ui-caption text-ui-muted">
          {{ $t('local.hiddenHint') }}
        </p>
        <div class="max-h-80 space-y-1 overflow-y-auto">
          <div
            v-for="item in exclusions"
            :key="`${item.kind}:${item.target}`"
            class="flex items-center gap-3 rounded-ui bg-ui-card p-3"
          >
            <div class="min-w-0 flex-1">
              <p class="truncate text-ui font-medium">{{ item.title }}</p>
              <p
                class="truncate text-ui-caption text-ui-muted"
                :title="item.target"
              >
                {{ item.target }}
              </p>
            </div>
            <CustomButton
              :loading="busy"
              :disabled="scanning"
              @click="restore(item)"
            >
              {{ $t('local.restore') }}
            </CustomButton>
          </div>
          <el-empty
            v-if="!exclusions.length"
            :description="$t('local.noHiddenItems')"
          />
        </div>
      </el-tab-pane>
    </el-tabs>
  </CommonDialog>
</template>

<script setup lang="ts">
import { invoke } from '@tauri-apps/api/core';
import { useI18n } from 'vue-i18n';
import { CommonDialog, CustomButton } from '@/components/UI';
import modal from '@/utils/modal';
import { launcherSettingsFromInput } from '@/utils/launcher-index';
import { type LauncherSettings, type LauncherExclusion } from '../../../types';

const props = defineProps<{
  modelValue: boolean;
  initialTab?: string;
  scanning?: boolean;
}>();
const emit = defineEmits<{
  'update:modelValue': [value: boolean];
  changed: [];
  'scan-started': [];
  'scan-rejected': [];
}>();
const { t } = useI18n();
const visible = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value)
});
const tab = ref('discovery');
const settings = ref<LauncherSettings>({
  show_auxiliary: false,
  scan_roots: []
});
const roots = ref('');
const exclusions = ref<LauncherExclusion[]>([]);
const busy = ref(false);

const run = async (action: () => Promise<void>): Promise<void> => {
  if (busy.value) return;
  busy.value = true;
  try {
    await action();
  } catch (error) {
    modal.error(String(error));
  } finally {
    busy.value = false;
  }
};
const save = (): Promise<void> =>
  runScan(async () => {
    settings.value = launcherSettingsFromInput(
      settings.value.show_auxiliary,
      roots.value
    );
    await invoke('set_launcher_settings', { settings: settings.value });
    emit('changed');
    modal.success(t('local.settingsSaved'));
  });
const rescan = (): Promise<void> =>
  runScan(async () => {
    const currentSettings = launcherSettingsFromInput(
      settings.value.show_auxiliary,
      roots.value
    );
    await invoke('refresh_launcher_index', { settings: currentSettings });
    settings.value = currentSettings;
  });
const runScan = (action: () => Promise<void>): Promise<void> => {
  if (props.scanning) return Promise.resolve();
  return run(async () => {
    emit('scan-started');
    try {
      await action();
    } catch (error) {
      emit('scan-rejected');
      throw error;
    }
  });
};
const restore = (item: LauncherExclusion): Promise<void> =>
  runScan(async () => {
    await invoke('restore_launcher_entry', {
      kind: item.kind,
      target: item.target
    });
    exclusions.value = await invoke<LauncherExclusion[]>(
      'get_launcher_exclusions'
    );
    emit('changed');
  });
watch(
  () => props.modelValue,
  async (value) => {
    if (!value) return;
    tab.value = props.initialTab || 'discovery';
    await run(async () => {
      [settings.value, exclusions.value] = await Promise.all([
        invoke<LauncherSettings>('get_launcher_settings'),
        invoke<LauncherExclusion[]>('get_launcher_exclusions')
      ]);
      roots.value = settings.value.scan_roots.join('\n');
    });
  }
);
</script>
