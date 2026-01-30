<template>
  <main
    data-tauri-drag-region
    :class="[activeTabIndex !== 2 ? 'gradient titlebar' : 'titlebar']"
  >
    <div class="titlebar-title">
      <div class="flex items-center gap-2">
        <img src="@/assets/128x128.png" alt="" class="w-6 h-6" />
        <div class="text-lg -ml-1">{{ state.appName }}</div>
        <span class="text-sm text-stone-300 -ml-1 mt-1">{{ state.appVersion }}</span>
        <!-- 导航栏 -->
        <div class="nav-bar-wrapper">
          <SegmentedToggle
            v-model="activeTabIndex"
            :items="tabs"
            @change="handleTabChange"
          >
            <template #item="scope">
              <component
                :is="scope.item.icon"
                class="text-panel"
                theme="outline"
                size="18"
                :strokeWidth="3"
              />
            </template>
          </SegmentedToggle>
        </div>
      </div>
      <slot></slot>
    </div>
    <!-- 标题栏按钮 -->
    <div class="titlebar-list">
      <!-- 个人中心 -->
      <div
        class="titlebar-user"
        @click="goToUserCenter"
        :title="isLoggedIn ? `${userInfo?.login} - ${$t('titlebar.userCenter')}` : $t('titlebar.userCenter')"
        :aria-label="$t('titlebar.userCenter')"
      >
        <div v-if="isLoggedIn && userInfo" class="user-avatar-wrapper">
          <img 
            :src="userInfo.avatar_url" 
            :alt="userInfo.login"
            class="user-avatar"
            @error="handleAvatarError"
          />
        </div>
        <me
          v-else
          class="icon"
          theme="outline"
          size="18"
          :strokeWidth="3"
        />
      </div>

      <div class="titlebar-divider"></div>
      
      <div 
        class="titlebar-button titlebar-button--update" 
        @click="handleUpdateClick" 
        :title="$t('titlebar.checkUpdate')" 
        :aria-label="$t('titlebar.checkUpdate')"
      >
        <update-rotation
          class="icon"
          theme="outline"
          size="18"
          :strokeWidth="3"
        />
        <div v-if="hasUpdate" class="update-dot"></div>
      </div>
      
      <div
        class="titlebar-button"
        @click="handleTitlebar('isAlwaysOnTop')"
        :title="isAlwaysOnTop ? $t('titlebar.unpinWindow') : $t('titlebar.pinWindow')"
        :aria-label="$t('titlebar.pinWindow')"
      >
        <component
          :is="isAlwaysOnTop ? Pushpin : Pin"
          class="icon"
          :class="{ 'icon-active': isAlwaysOnTop }"
          size="18"
          :strokeWidth="3"
          theme="outline"
          strokeLinecap="butt"
        />
      </div>
      
      <div
        class="titlebar-button"
        @click="openSettingsDialog"
        :title="$t('titlebar.settings')"
        :aria-label="$t('titlebar.settings')"
      >
        <setting-two
          class="icon"
          theme="outline"
          size="18"
          :strokeWidth="3"
          strokeLinecap="butt"
        />
      </div>
      
      <div class="titlebar-divider titlebar-divider--thick"></div>
      
      <div
        class="titlebar-button titlebar-button--window"
        @click="handleTitlebar('minimize')"
        :title="$t('titlebar.minimize')"
        :aria-label="$t('titlebar.minimize')"
      >
        <minus
          class="icon !p-[2px]"
          theme="outline"
          size="20"
          :strokeWidth="3"
          strokeLinecap="butt"
        />
      </div>
      <div
        class="titlebar-button titlebar-button--window"
        @click="handleTitlebar('maximize')"
        :title="title"
        :aria-label="title"
      >
        <square-small
          class="icon"
          theme="outline"
          size="18"
          :strokeWidth="3"
          strokeLinecap="butt"
        />
      </div>
      <div
        class="titlebar-button titlebar-button--close"
        @click="handleTitlebar('close')"
        :title="$t('titlebar.close')"
        :aria-label="$t('titlebar.close')"
      >
        <close-small
          class="icon"
          theme="outline"
          size="18"
          :strokeWidth="3"
          strokeLinecap="butt"
        />
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import {
  Pushpin,
  Pin,
  Minus,
  SquareSmall,
  CloseSmall,
  UpdateRotation,
  BookOpen,
  SettingTwo,
  MessageSearch,
  Notepad,
  Application,
  Me
} from '@icon-park/vue-next';
import { appName, appVersion, getAppWindow, initEnv } from '@/utils/env';
import { invoke } from '@tauri-apps/api/core';
import { listen, UnlistenFn } from '@tauri-apps/api/event';
import { useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';
import SegmentedToggle from '@/components/SegmentedToggle/index.vue';
import { getUserSettingsCached, type UserSettings, type GitHubUser } from '@/api/github';

const { t } = useI18n();

defineOptions({
  name: 'Titlebar'
});

const router = useRouter();
const isMaximized = ref(false);
type WindowAction = 'isAlwaysOnTop' | 'minimize' | 'maximize' | 'close';

const isAlwaysOnTop = ref<boolean>(false);

const state = reactive({
  appName: '',
  appVersion: ''
});

const hasUpdate = ref(false);

// 用户信息
const userInfo = ref<GitHubUser | null>(null);
const isLoggedIn = ref(false);

// 加载用户信息
const loadUserInfo = async () => {
  try {
    const settings: UserSettings = await getUserSettingsCached();
    if (settings.github_token && settings.github_username) {
      isLoggedIn.value = true;
      // 从设置中获取用户名，构建头像URL（GitHub头像URL格式）
      userInfo.value = {
        login: settings.github_username,
        avatar_url: `https://github.com/${settings.github_username}.png`,
        name: null
      };
    } else {
      isLoggedIn.value = false;
      userInfo.value = null;
    }
  } catch (error) {
    console.error('加载用户信息失败:', error);
    isLoggedIn.value = false;
    userInfo.value = null;
  }
};

// 当前激活的tab索引
const activeTabIndex = ref(0);

interface TabItem {
  icon: any;
  path: string;
}

const tabs: TabItem[] = [
  // 片段
  {
    icon: BookOpen,
    path: '/config/category/contentList'
  },
  // 本地应用、浏览器书签
  {
    icon: Application,
    path: '/config/local'
  },
  // 引擎搜索
  {
    icon: MessageSearch,
    path: '/config/retrieve'
  },
  // 待办
  {
    icon: Notepad,
    path: '/config/todo'
  }
];

// 根据当前路由设置激活的tab
const setActiveTabFromRoute = () => {
  const currentPath = router.currentRoute.value.path;
  const index = tabs.findIndex((tab) => currentPath.startsWith(tab.path));
  if (index !== -1) {
    activeTabIndex.value = index;
  }
};

// 切换Tab并跳转路由
const handleTabChange = (index: number) => {
  if (tabs[index]) {
    router.push(tabs[index].path);
  }
};

const handleUpdateClick = async () => {
  if (hasUpdate.value) {
    await invoke('hotkey_update_command');
  } else {
    // 手动检查更新
    const hasNewUpdate = await invoke('check_update_manually');
    if (hasNewUpdate) {
      await invoke('hotkey_update_command');
    }
  }
};

// 最大化按钮标题
const title = computed(() => {
  return isMaximized.value ? t('titlebar.restore') : t('titlebar.maximize');
});

const appWindow = getAppWindow('config');

// 操作映射对象
const actionHandlers: Record<WindowAction, () => Promise<void>> = {
  isAlwaysOnTop: async () => {
    isAlwaysOnTop.value = !isAlwaysOnTop.value;
    await appWindow.setAlwaysOnTop(isAlwaysOnTop.value);
  },
  minimize: async () => appWindow.minimize(),
  maximize: async () => {
    const maximized = await appWindow.isMaximized();
    isMaximized.value = !maximized;
    maximized ? appWindow.unmaximize() : appWindow.maximize();
  },
  close: async () => appWindow.close()
};

const handleTitlebar = async (type: WindowAction) => {
  try {
    await actionHandlers[type]?.();
  } catch (error) {
    console.error('Window operation failed:', error);
  }
};

// 打开设置页面
const openSettingsDialog = () => {
  router.push('/config/category/settings');
};

// 跳转到个人中心
const goToUserCenter = () => {
  router.push('/config/category/contentList/user');
};

// 头像加载失败处理
const handleAvatarError = (e: Event) => {
  const img = e.target as HTMLImageElement;
  img.style.display = 'none';
  isLoggedIn.value = false;
};

let unListen: UnlistenFn;
let unListenUserLogin: UnlistenFn;

onMounted(async () => {
  await initEnv();
  state.appName = appName;
  state.appVersion = appVersion;

  // 加载用户信息
  await loadUserInfo();

  // 检查是否有更新
  hasUpdate.value = await invoke('get_update_status');

  // 监听更新状态变化
  unListen = await listen('update-available', (event: any) => {
    hasUpdate.value = event.payload;
  });

  // 监听用户登录/登出事件
  unListenUserLogin = await listen('user-login-status-changed', async () => {
    await loadUserInfo();
  });

  // 设置初始激活的tab
  setActiveTabFromRoute();
});

// 监听路由变化，同步更新activeTabIndex
watch(
  () => router.currentRoute.value.path,
  () => {
    setActiveTabFromRoute();
  },
  { immediate: true }
);

onUnmounted(() => {
  unListen();
  if (unListenUserLogin) {
    unListenUserLogin();
  }
});
</script>

<style lang="scss" scoped>
@mixin commonIcon {
  @apply cursor-pointer text-panel hover:bg-panel dark:hover:bg-panel hover:rounded;
}

.titlebar {
  @apply relative flex justify-between items-center rounded-t-md w-full h-10 leading-10 select-none pr-1;

  z-index: 50;
  background-color: rgba(var(--categories-panel-bg-rgb), 0.9);
  border-bottom: 1px solid rgba(var(--categories-border-color-rgb), 0.3);
  box-shadow: 0 1px 3px rgb(0 0 0 / 5%);
}

.gradient {
  &::after {
    position: absolute;
    right: 0;
    bottom: -8px;
    left: 0;
    height: 8px;
    pointer-events: none;
    content: '';
    background: linear-gradient(
      to bottom,
      rgba(var(--categories-panel-bg-rgb), 0.9),
      transparent
    );
  }
}

.titlebar-title {
  @apply text-slate-800 dark:text-panel pl-1 flex items-center;

  text-shadow: 0 1px 1px rgb(0 0 0 / 5%);
}

.titlebar-list {
  @apply flex h-full items-center;
  gap: 6px;
  padding-right: 4px;
}

.titlebar-button {
  @apply leading-4 relative flex items-center justify-center rounded-md overflow-hidden;
  min-width: 32px;
  min-height: 32px;
  border-radius: 4px;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: rgba(93, 109, 253, 0.08);
    
    .icon {
      color: #5d6dfd;
      background-color: transparent !important;
    }
  }
  
  &--update {
    &:hover .icon {
      @apply animate-spin;
      animation-duration: 1s;
      color: #5d6dfd;
      background-color: transparent !important;
    }
  }
  
  &--window {
    &:hover {
      background-color: rgba(93, 109, 253, 0.08);
      
      .icon {
        color: #5d6dfd;
        background-color: transparent !important;
      }
    }
  }
  
  &--close {
    &:hover {
      background-color: rgba(239, 68, 68, 0.1);
      
      .icon {
        color: #ef4444;
        background-color: transparent !important;
      }
    }
  }
  
  &:hover {
    .update-dot {
      @apply animate-none;
    }
  }
}

.titlebar-divider {
  @apply h-5 mx-1;
  width: 1px;
  background: rgba(0, 0, 0, 0.15);
  flex-shrink: 0;
  box-shadow: 1px 0 0 rgba(255, 255, 255, 0.1);
  
  &--thick {
    width: 1px;
    background: rgba(0, 0, 0, 0.2);
    box-shadow: 1px 0 0 rgba(255, 255, 255, 0.15);
  }
}

// 暗色模式下的分隔线
.dark .titlebar-divider {
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 1px 0 0 rgba(255, 255, 255, 0.05);
  
  &--thick {
    background: rgba(255, 255, 255, 0.15);
    box-shadow: 1px 0 0 rgba(255, 255, 255, 0.08);
  }
}

// 用户头像相关
.titlebar-user {
  @apply cursor-pointer relative flex items-center justify-center;
  min-width: 32px;
  height: 32px;
  border-radius: 4px;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: rgba(93, 109, 253, 0.08);
    
    .user-avatar-wrapper {
      @apply ring-2;
      ring-color: #5d6dfd;
      transform: scale(1.08);
    }
    
    .icon {
      color: #5d6dfd;
      background-color: transparent !important;
    }
  }
}

.user-avatar-wrapper {
  @apply rounded-full overflow-hidden ring-1 ring-gray-300 dark:ring-gray-600;
  width: 26px;
  height: 26px;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  flex-shrink: 0;
}

.user-avatar {
  @apply w-full h-full object-cover;
  display: block;
}

.icon {
  @include commonIcon;

  @apply p-1.5;
  font-size: 18px;
  min-width: 32px;
  min-height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;

  color: rgba(var(--categories-text-color-rgb), 0.85);
  transition: all 0.2s ease;

  &:hover {
    color: #5d6dfd;
    background-color: rgba(93, 109, 253, 0.08);
  }
  
  &.icon-active {
    color: #5d6dfd;
    background-color: rgba(93, 109, 253, 0.1);
    
    &:hover {
      background-color: rgba(93, 109, 253, 0.15);
    }
  }
}

.update-dot {
  @apply absolute top-0.5 right-0.5 w-[6px] h-[6px] rounded-full;
  background-color: #5d6dfd;
  animation: pulse-dot 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

@keyframes pulse-dot {
  0%, 100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.5;
    transform: scale(1.2);
  }
}

.nav-bar-wrapper {
  @apply ml-4 flex items-center;
}

@keyframes pulse {
  0% {
    box-shadow: 0 0 0 0 rgba(93, 109, 253, 0.7);
    transform: scale(0.95);
  }

  70% {
    box-shadow: 0 0 0 6px rgba(93, 109, 253, 0);
    transform: scale(1);
  }

  100% {
    box-shadow: 0 0 0 0 rgba(93, 109, 253, 0);
    transform: scale(0.95);
  }
}
</style>
