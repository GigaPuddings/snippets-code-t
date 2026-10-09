<template>
  <nav
    class="flex h-full w-[var(--workspace-rail-width)] shrink-0 flex-col items-center bg-[var(--workspace-nav-rail)] pb-[18px] pt-2 text-[var(--workspace-nav-text)]"
    :aria-label="t('nav.quickActions')"
  >
    <router-link
      to="/config/workbench"
      class="mb-3 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg"
      :aria-label="t('nav.workbench')"
    >
      <img src="@/assets/128x128.png" alt="" class="h-6 w-6" />
    </router-link>

    <div
      class="flex min-h-0 w-full flex-1 flex-col items-center overflow-y-auto"
    >
      <router-link
        v-for="tab in visibleTabs"
        :key="tab.id"
        :to="tab.path"
        class="ui-icon-button mb-2 h-9 w-9 rounded-ui-lg"
        :class="{
          'bg-[var(--workspace-rail-selected)] text-[var(--workspace-nav-heading)]':
            isActive(tab.path)
        }"
        :title="t(tab.labelKey)"
        :aria-label="t(tab.labelKey)"
        :aria-current="isActive(tab.path) ? 'page' : undefined"
      >
        <component :is="tab.icon" width="20" height="20" />
      </router-link>
    </div>

    <div class="mt-auto flex flex-col items-center gap-2">
      <el-dropdown
        ref="accountDropdown"
        trigger="click"
        placement="right-end"
        popper-class="account-menu-popper"
        @command="handleAccountCommand"
      >
        <button
          type="button"
          class="relative flex h-7 w-7 items-center justify-center rounded-full bg-[var(--workspace-nav-avatar)] text-ui-caption font-medium text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
          :title="t('titlebar.more')"
          :aria-label="t('titlebar.more')"
        >
          <img
            v-if="profile?.avatar_data_url && !avatarFailed"
            :src="profile.avatar_data_url"
            alt=""
            class="h-full w-full rounded-full object-cover"
            @error="avatarFailed = true"
          />
          <span v-else>{{ initials }}</span>
          <span
            v-if="hasUpdate"
            class="absolute -right-0.5 -top-0.5 flex h-2.5 w-2.5"
            :title="t('titlebar.updateAvailable')"
            aria-hidden="true"
          >
            <span
              class="absolute inline-flex h-full w-full animate-ping rounded-full bg-workbench-warning opacity-60 motion-reduce:animate-none"
            ></span>
            <span
              class="relative inline-flex h-2.5 w-2.5 rounded-full border-2 border-[var(--workspace-nav-rail)] bg-workbench-warning"
            ></span>
          </span>
        </button>
        <template #dropdown>
          <div v-if="profile" class="max-w-64 px-4 py-3 text-ui">
            <strong
              class="block truncate font-medium text-[var(--workspace-nav-heading)]"
            >
              {{ profile.name || profile.login }}
            </strong>
            <span class="text-ui-caption text-[var(--workspace-nav-muted)]">
              @{{ profile.login }}
            </span>
          </div>
          <el-dropdown-menu>
            <el-dropdown-item command="userCenter">
              <Me width="18" height="18" />
              <span>{{ t('titlebar.userCenter') }}</span>
            </el-dropdown-item>
            <el-dropdown-item command="search">
              <Search width="18" height="18" />
              <span>{{ t('titlebar.quickSearch') }}</span>
            </el-dropdown-item>
            <el-dropdown-item command="settings">
              <SettingTwo width="18" height="18" />
              <span>{{ t('titlebar.settings') }}</span>
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </nav>
</template>

<script setup lang="ts">
import Me from '~icons/lucide/circle-user-round';
import Search from '~icons/lucide/search';
import SettingTwo from '~icons/lucide/settings';
import { invoke } from '@tauri-apps/api/core';
import { listen, type UnlistenFn } from '@tauri-apps/api/event';
import { useI18n } from 'vue-i18n';
import { useRoute, useRouter } from 'vue-router';
import { usePluginStore } from '@/store';
import { useConfigQuickSearch } from '@/composables/useConfigQuickSearch';
import { useUpdateAvailability } from '@/composables/useUpdateAvailability';
import {
  configNavigationTabs,
  isConfigNavigationPathActive
} from '@/plugins/navigation';

defineOptions({ name: 'GlobalNavigationRail' });

const { t } = useI18n();
const route = useRoute();
const router = useRouter();
const accountDropdown = ref<{ handleClose: () => void } | null>(null);
watch(
  () => route.fullPath,
  () => accountDropdown.value?.handleClose()
);
const { open: openQuickSearch } = useConfigQuickSearch();
const { hasUpdate } = useUpdateAvailability();
const pluginStore = usePluginStore();
const visibleTabs = computed(() =>
  configNavigationTabs.filter(
    (tab) => !tab.pluginId || pluginStore.isEnabled(tab.pluginId)
  )
);
const isActive = (path: string) =>
  isConfigNavigationPathActive(route.path, path);
interface AccountProfile {
  login: string;
  name: string | null;
  avatar_data_url: string;
}
const profile = ref<AccountProfile | null>(null);
const avatarFailed = ref(false);
const initials = computed(() =>
  (profile.value?.login.slice(0, 2) || 'SC').toUpperCase()
);
let lastProfileCheck = 0;
let profileRequest: Promise<void> | null = null;
let profileGeneration = 0;
let disposed = false;
const unlisteners: UnlistenFn[] = [];

const refreshProfile = (): Promise<void> => {
  if (!pluginStore.isEnabled('git-sync') || disposed) {
    profile.value = null;
    return Promise.resolve();
  }
  if (profileRequest) return profileRequest;
  if (Date.now() - lastProfileCheck < 60000) return Promise.resolve();
  const generation = profileGeneration;
  lastProfileCheck = Date.now();
  profileRequest = invoke<AccountProfile | null>(
    'get_github_account_profile_command'
  )
    .then((value) => {
      if (
        !disposed &&
        generation === profileGeneration &&
        pluginStore.isEnabled('git-sync')
      ) {
        profile.value = value;
        avatarFailed.value = false;
      }
    })
    .catch(() => {
      if (generation === profileGeneration) profile.value = null;
    })
    .finally(() => {
      profileRequest = null;
      if (!disposed && generation !== profileGeneration) {
        lastProfileCheck = 0;
        void refreshProfile();
      }
    });
  return profileRequest;
};
const resetProfile = () => {
  profileGeneration++;
  profile.value = null;
  lastProfileCheck = 0;
  void refreshProfile();
};
watch(
  () => pluginStore.isEnabled('git-sync'),
  (enabled) => {
    if (enabled) resetProfile();
    else {
      profileGeneration++;
      profile.value = null;
    }
  }
);

const handleAccountCommand = async (command: string) => {
  if (command === 'search') openQuickSearch();
  else if (command === 'settings')
    await router.push('/config/category/settings');
  else if (command === 'userCenter')
    await router.push('/config/category/contentList/user');
};

onMounted(async () => {
  window.addEventListener('focus', refreshProfile);
  for (const event of [
    'git-settings-changed',
    'git-workspace-changed',
    'git-sync-complete'
  ]) {
    const stop = await listen(event, resetProfile);
    if (disposed) stop();
    else unlisteners.push(stop);
  }
  void refreshProfile();
});
onUnmounted(() => {
  disposed = true;
  window.removeEventListener('focus', refreshProfile);
  unlisteners.forEach((stop) => stop());
});
</script>
