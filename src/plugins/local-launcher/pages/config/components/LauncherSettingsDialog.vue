<template>
  <CommonDialog
    v-model="visible"
    :title="$t('local.launcherSettings')"
    width="680px"
  >
    <el-tabs v-model="tab">
      <el-tab-pane :label="$t('local.discovery')" name="discovery">
        <div class="space-y-4">
          <el-checkbox v-model="settings.show_auxiliary">
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
          />
          <div class="flex justify-end gap-2">
            <CustomButton :loading="busy" @click="rescan">
              {{ $t('local.rescan') }}
            </CustomButton>
            <CustomButton :loading="busy" @click="save">
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
            <CustomButton :loading="busy" @click="restore(item)">
              {{ $t('local.restore') }}
            </CustomButton>
          </div>
          <el-empty
            v-if="!exclusions.length"
            :description="$t('local.noHiddenItems')"
          />
        </div>
      </el-tab-pane>
      <el-tab-pane :label="$t('local.browserConnection')" name="browser">
        <p class="mb-3 text-ui-caption leading-6 text-ui-muted">
          {{ $t('local.bridgeHint') }}
        </p>
        <div class="mb-3 flex flex-wrap gap-2">
          <CustomButton :loading="busy" @click="registerBridge">
            {{ $t('local.prepareBridge') }}
          </CustomButton>
          <CustomButton :loading="busy" @click="refreshBridge">
            {{ $t('local.refreshConnections') }}
          </CustomButton>
          <CustomButton :loading="busy" @click="unregisterBridge">
            {{ $t('local.removeBridge') }}
          </CustomButton>
        </div>
        <p
          v-if="exportPath"
          class="mb-3 break-all text-ui-caption text-ui-muted"
        >
          {{ $t('local.extensionExported', { path: exportPath }) }}
        </p>
        <p
          v-if="!bridge.clients.length"
          class="mb-3 text-ui-caption text-ui-muted"
        >
          {{ $t('local.noBrowserConnection') }}
        </p>
        <div class="max-h-72 space-y-2 overflow-y-auto">
          <div
            v-for="profile in profiles"
            :key="profile.profile_key"
            class="rounded-ui bg-ui-card p-3"
          >
            <p class="text-ui font-medium">
              {{ profile.browser }} · {{ profile.profile }}
            </p>
            <p
              class="mb-2 truncate text-ui-caption text-ui-muted"
              :title="profile.storage_path"
            >
              {{ profile.storage_path }}
            </p>
            <el-select
              :model-value="bridge.bindings[profile.profile_key] || ''"
              clearable
              class="w-full"
              :placeholder="$t('local.selectConnection')"
              @change="bind(profile.profile_key, String($event || ''))"
            >
              <el-option
                v-for="client in bridge.clients.filter(
                  (client) => client.browser === profile.browser
                )"
                :key="client.id"
                :label="`${client.label} · ${client.id.slice(0, 8)}`"
                :value="client.id"
              />
            </el-select>
          </div>
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
import {
  bookmarkProfiles,
  type LauncherEntry,
  type LauncherSettings,
  type LauncherExclusion,
  type BridgeStatus
} from '../../../types';

const props = defineProps<{
  modelValue: boolean;
  bookmarks: LauncherEntry[];
  initialTab?: string;
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
const tab = ref('discovery');
const settings = ref<LauncherSettings>({
  show_auxiliary: false,
  scan_roots: []
});
const roots = ref('');
const exclusions = ref<LauncherExclusion[]>([]);
const bridge = ref<BridgeStatus>({ clients: [], bindings: {} });
const exportPath = ref('');
const busy = ref(false);
const profiles = computed(() => bookmarkProfiles(props.bookmarks));

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
const refreshBridge = (): Promise<void> =>
  run(async () => {
    bridge.value = await invoke<BridgeStatus>('get_launcher_browser_bridge');
  });
const save = (): Promise<void> =>
  run(async () => {
    settings.value.scan_roots = [
      ...new Set(
        roots.value
          .split('\n')
          .map((root) => root.trim())
          .filter(Boolean)
      )
    ];
    await invoke('set_launcher_settings', { settings: settings.value });
    emit('changed');
    modal.success(t('local.settingsSaved'));
  });
const rescan = (): Promise<void> =>
  run(async () => {
    await invoke('refresh_launcher_index');
    modal.success(t('local.rescanStarted'));
  });
const restore = (item: LauncherExclusion): Promise<void> =>
  run(async () => {
    await invoke('restore_launcher_entry', {
      kind: item.kind,
      target: item.target
    });
    exclusions.value = await invoke<LauncherExclusion[]>(
      'get_launcher_exclusions'
    );
    emit('changed');
  });
const registerBridge = (): Promise<void> =>
  run(async () => {
    exportPath.value = await invoke<string>('register_launcher_browser_bridge');
  });
const unregisterBridge = (): Promise<void> =>
  run(async () => {
    await invoke('unregister_launcher_browser_bridge');
    bridge.value = { clients: [], bindings: {} };
  });
const bind = (profileKey: string, clientId: string): Promise<void> =>
  run(async () => {
    await invoke('bind_launcher_browser_profile', { profileKey, clientId });
    bridge.value = await invoke<BridgeStatus>('get_launcher_browser_bridge');
  });
watch(
  () => props.modelValue,
  async (value) => {
    if (!value) return;
    tab.value = props.initialTab || 'discovery';
    await run(async () => {
      [settings.value, exclusions.value, bridge.value] = await Promise.all([
        invoke<LauncherSettings>('get_launcher_settings'),
        invoke<LauncherExclusion[]>('get_launcher_exclusions'),
        invoke<BridgeStatus>('get_launcher_browser_bridge')
      ]);
      roots.value = settings.value.scan_roots.join('\n');
    });
  }
);
</script>
