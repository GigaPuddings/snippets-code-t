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
      <el-tab-pane
        :label="$t('local.browserConnection')"
        name="browser"
        class="max-h-[65vh] overflow-y-auto pr-1"
      >
        <div class="mb-4 space-y-3 rounded-ui bg-ui-card p-3">
          <p class="text-ui-caption leading-6 text-ui-muted">
            {{ $t('local.bridgeHint') }}
          </p>
          <div>
            <p class="mb-2 text-ui font-medium">
              {{ $t('local.bridgeStepPrepare') }}
            </p>
            <p v-if="!prepared" class="mb-2 text-ui-caption text-ui-muted">
              {{ $t('local.bridgeNotPrepared') }}
            </p>
            <div class="flex flex-wrap gap-2">
              <CustomButton :loading="busy" @click="registerBridge">
                {{ $t('local.prepareBridge') }}
              </CustomButton>
              <CustomButton
                v-if="prepared"
                :loading="busy"
                @click="openExtensionFolder"
              >
                {{ $t('local.openExtensionFolder') }}
              </CustomButton>
              <CustomButton
                v-if="prepared"
                :loading="busy"
                @click="unregisterBridge"
              >
                {{ $t('local.removeBridge') }}
              </CustomButton>
            </div>
            <p
              v-if="prepared && exportPath"
              class="mt-2 select-text break-all text-ui-caption text-ui-muted"
            >
              {{ $t('local.extensionExported', { path: exportPath }) }}
            </p>
          </div>
          <div v-if="prepared">
            <p class="mb-1 text-ui font-medium">
              {{ $t('local.bridgeStepInstall') }}
            </p>
            <p class="select-text text-ui-caption leading-6 text-ui-muted">
              {{ $t('local.bridgeInstallChromium') }}
            </p>
            <p class="select-text text-ui-caption leading-6 text-ui-muted">
              {{ $t('local.bridgeInstallFirefox') }}
            </p>
            <p class="text-ui-caption leading-6 text-ui-muted">
              {{ $t('local.bridgeConnectExtension') }}
            </p>
          </div>
        </div>
        <div class="mb-2 flex items-center justify-between gap-3">
          <p class="text-ui font-medium">{{ $t('local.bridgeStepBind') }}</p>
          <CustomButton size="small" :loading="busy" @click="refreshBridge">
            {{ $t('local.refreshConnections') }}
          </CustomButton>
        </div>
        <p v-if="connectionError" class="mb-2 text-ui-caption text-ui-muted">
          {{ connectionError }}
        </p>
        <p
          v-else-if="prepared && !bridge.clients.length"
          class="mb-3 text-ui-caption text-ui-muted"
        >
          {{ $t('local.noBrowserConnection') }}
        </p>
        <div class="space-y-2">
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
              v-if="clientsFor(profile.browser).length"
              :model-value="bridge.bindings[profile.profile_key] || ''"
              clearable
              class="w-full"
              :placeholder="$t('local.selectConnection')"
              @change="bind(profile.profile_key, String($event || ''))"
            >
              <el-option
                v-for="client in clientsFor(profile.browser)"
                :key="client.id"
                :label="`${client.label} · ${client.id.slice(0, 8)}`"
                :value="client.id"
              />
            </el-select>
            <p v-else class="text-ui-caption leading-6 text-ui-muted">
              {{
                !supportsBrowserBridge(profile.browser, bridge)
                  ? $t('local.bridgeUnsupported', { browser: profile.browser })
                  : !prepared
                    ? $t('local.bridgeNotPrepared')
                    : $t('local.bridgeWaiting', { browser: profile.browser })
              }}
            </p>
          </div>
        </div>
      </el-tab-pane>
    </el-tabs>
  </CommonDialog>
</template>

<script setup lang="ts">
import { invoke } from '@tauri-apps/api/core';
import { revealItemInDir } from '@tauri-apps/plugin-opener';
import { useI18n } from 'vue-i18n';
import { CommonDialog, CustomButton } from '@/components/UI';
import modal from '@/utils/modal';
import {
  bookmarkProfiles,
  browserBridgeClients,
  supportsBrowserBridge,
  type LauncherEntry,
  type LauncherSettings,
  type LauncherExclusion,
  type BridgeClient,
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
const connectionError = ref('');
let refreshing = false;
let connectionTimer: ReturnType<typeof setInterval> | undefined;
const profiles = computed(() => bookmarkProfiles(props.bookmarks));
const prepared = computed(
  () => bridge.value.prepared ?? Boolean(exportPath.value)
);
const clientsFor = (browser: string): BridgeClient[] =>
  browserBridgeClients(browser, bridge.value);

const readBridge = async (): Promise<void> => {
  bridge.value = await invoke<BridgeStatus>('get_launcher_browser_bridge');
  if (bridge.value.extension_dir) exportPath.value = bridge.value.extension_dir;
  connectionError.value = '';
};

watch(
  () => props.modelValue && tab.value === 'browser',
  (active) => {
    clearInterval(connectionTimer);
    connectionTimer = undefined;
    if (!active) return;
    connectionTimer = setInterval(async () => {
      if (busy.value || refreshing) return;
      refreshing = true;
      try {
        await readBridge();
      } catch (error) {
        connectionError.value = String(error);
        bridge.value.clients = [];
      } finally {
        refreshing = false;
      }
    }, 2000);
  }
);
onUnmounted(() => clearInterval(connectionTimer));

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
const refreshBridge = (): Promise<void> => run(readBridge);
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
    await readBridge();
    modal.success(t('local.bridgePrepared'));
  });
const openExtensionFolder = (): Promise<void> =>
  run(async () => {
    if (prepared.value && exportPath.value)
      await revealItemInDir(`${exportPath.value}/chromium`);
  });
const unregisterBridge = (): Promise<void> =>
  run(async () => {
    await invoke('unregister_launcher_browser_bridge');
    bridge.value = { clients: [], bindings: {} };
    exportPath.value = '';
  });
const bind = (profileKey: string, clientId: string): Promise<void> =>
  run(async () => {
    await invoke('bind_launcher_browser_profile', { profileKey, clientId });
    await readBridge();
  });
watch(
  () => props.modelValue,
  async (value) => {
    if (!value) return;
    tab.value = props.initialTab || 'discovery';
    await run(async () => {
      [settings.value, exclusions.value] = await Promise.all([
        invoke<LauncherSettings>('get_launcher_settings'),
        invoke<LauncherExclusion[]>('get_launcher_exclusions'),
        readBridge()
      ]);
      roots.value = settings.value.scan_roots.join('\n');
    });
  }
);
</script>
