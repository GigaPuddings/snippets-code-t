<template>
  <div class="user-center-container">
    <!-- 固定标题 -->
    <div class="user-center-header">
      <h3 class="panel-title">{{ $t('userCenter.title') }}</h3>
      <p class="panel-subtitle">{{ $t('userCenter.subtitle') }}</p>
    </div>
    
    <!-- 可滚动内容 -->
    <div class="user-center-content">

      <!-- 用户信息卡片 -->
      <div class="info-card">
        <div class="info-item">
          <span class="info-label">{{ $t('userCenter.appVersion') }}</span>
          <span class="info-value">{{ appVersion }}</span>
        </div>
        
        <div class="info-item">
          <span class="info-label">{{ $t('userCenter.workspaceRoot') }}</span>
          <span class="info-value">{{ workspaceRoot || $t('userCenter.notSet') }}</span>
        </div>
        
        <div class="info-item">
          <span class="info-label">{{ $t('userCenter.gitSyncStatus') }}</span>
          <span class="info-value">
            <span v-if="gitConfigured" class="status-badge status-badge--success">
              {{ $t('userCenter.configured') }}
            </span>
            <span v-else class="status-badge status-badge--warning">
              {{ $t('userCenter.notConfigured') }}
            </span>
          </span>
        </div>
        
        <!-- 显示 Git 账户信息（如果已配置） -->
        <template v-if="gitConfigured && gitAccountInfo">
          <div class="info-item">
            <span class="info-label">{{ $t('userCenter.gitAccount') }}</span>
            <span class="info-value">{{ gitAccountInfo.user_name }}</span>
          </div>
          
          <div class="info-item">
            <span class="info-label">{{ $t('userCenter.gitEmail') }}</span>
            <span class="info-value">{{ gitAccountInfo.user_email }}</span>
          </div>
          
          <div v-if="gitAccountInfo.remote_url" class="info-item">
            <span class="info-label">{{ $t('userCenter.gitRemote') }}</span>
            <span class="info-value text-xs">{{ gitAccountInfo.remote_url }}</span>
          </div>
        </template>
      </div>

      <!-- Git 同步提示 -->
      <div class="tip-card">
        <div class="tip-icon">
          <Github theme="outline" size="24" :strokeWidth="3" />
        </div>
        <div class="tip-content">
          <h4 class="tip-title">{{ $t('userCenter.gitSyncTitle') }}</h4>
          <p class="tip-desc">{{ gitConfigured ? $t('userCenter.gitSyncConfigured') : $t('userCenter.gitSyncDesc') }}</p>
          <CustomButton 
            type="primary" 
          size="small"
            @click="goToGitSync"
          >
            {{ gitConfigured ? $t('userCenter.manageSettings') : $t('userCenter.goToSettings') }}
          </CustomButton>
        </div>
      </div>

      <!-- 快捷操作 -->
      <div class="actions-section">
        <h4 class="section-title">{{ $t('userCenter.quickActions') }}</h4>
        <div class="action-buttons">
          <CustomButton 
            @click="openDataDir"
          >
            <FolderOpen theme="outline" size="16" :strokeWidth="3" class="mr-1" />
            {{ $t('userCenter.openDataDir') }}
          </CustomButton>
          
          <CustomButton 
            @click="goToSettings"
          >
            <SettingTwo theme="outline" size="16" :strokeWidth="3" class="mr-1" />
            {{ $t('userCenter.openSettings') }}
          </CustomButton>
        </div>
      </div>

      <!-- 关于信息 -->
      <div class="about-section">
        <h4 class="section-title">{{ $t('userCenter.about') }}</h4>
        <div class="about-content">
          <p class="about-text">{{ $t('userCenter.appDescription') }}</p>
          <div class="about-links">
            <el-link type="primary" @click="openGitHub">
              {{ $t('userCenter.viewOnGitHub') }}
            </el-link>
            <span class="link-separator">•</span>
            <el-link type="primary" @click="checkUpdate">
              {{ $t('userCenter.checkUpdate') }}
            </el-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useI18n } from 'vue-i18n';
import { useRouter } from 'vue-router';
import { CustomButton } from '@/components/UI';
import { Github, FolderOpen, SettingTwo } from '@icon-park/vue-next';
import { open as openUrl } from '@tauri-apps/plugin-shell';
import { invoke } from '@tauri-apps/api/core';
import { getVersion } from '@tauri-apps/api/app';
import { getGitSettings } from '@/api/appConfig';
import modal from '@/utils/modal';

defineOptions({
  name: 'UserCenter'
});

const { t } = useI18n();
const router = useRouter();

const appVersion = ref('');
const workspaceRoot = ref('');
const gitConfigured = ref(false);
const gitAccountInfo = ref<{ user_name: string; user_email: string; remote_url?: string } | null>(null);

// 加载应用信息
const loadAppInfo = async () => {
  try {
    appVersion.value = await getVersion();
    
    // 获取工作区根目录
    try {
      const root = await invoke<string | null>('get_workspace_root_path');
      
      if (root) {
        workspaceRoot.value = root;
      }
    } catch (error) {
      console.error('[UserCenter] 获取工作区根目录失败:', error);
    }
    
    // 检查 Git 配置状态
    try {
      const gitSettings = await getGitSettings();
      
      // 判断是否已配置（启用且有必要的配置信息）
      gitConfigured.value = gitSettings.enabled && 
                           !!gitSettings.user_name && 
                           !!gitSettings.user_email && 
                           !!gitSettings.remote_url;
      
      // 保存账户信息用于显示
      if (gitConfigured.value) {
        gitAccountInfo.value = {
          user_name: gitSettings.user_name,
          user_email: gitSettings.user_email,
          remote_url: gitSettings.remote_url
        };
      }
    } catch (error) {
      console.error('[UserCenter] 获取 Git 配置失败:', error);
      gitConfigured.value = false;
    }
  } catch (error) {
    console.error('[UserCenter] 加载应用信息失败:', error);
  }
};

// 跳转到 Git 同步设置
const goToGitSync = () => {
  try {
    // 跳转到设置页面，并通过 query 参数指定打开 gitSync tab
    router.push({ path: '/config/category/settings', query: { tab: 'gitSync' } });
  } catch (error) {
    console.error('[UserCenter] 路由跳转失败:', error);
    modal.error('跳转失败: ' + error);
  }
};

// 打开数据目录
const openDataDir = async () => {
  try {
    if (workspaceRoot.value) {
      await invoke('open_folder', { folderPath: workspaceRoot.value });
    } else {
      modal.warning(t('userCenter.workspaceNotSet'));
    }
  } catch (error) {
    console.error('[UserCenter] 打开数据目录失败:', error);
    modal.error(t('userCenter.openDirFailed') + ': ' + error);
  }
};

// 跳转到设置（通用设置）
const goToSettings = () => {
  try {
    // 跳转到设置页面，默认打开 general tab
    router.push({ path: '/config/category/settings', query: { tab: 'general' } });
  } catch (error) {
    console.error('[UserCenter] 路由跳转失败:', error);
    modal.error('跳转失败: ' + error);
  }
};

// 打开 GitHub
const openGitHub = () => {
  openUrl('https://github.com/GigaPuddings/snippets-code');
};

// 检查更新
const checkUpdate = async () => {
  try {
    await invoke('check_update', { showNotification: true });
  } catch (error) {
    console.error('检查更新失败:', error);
  }
};

onMounted(() => {
  loadAppInfo();
});
</script>

<style scoped lang="scss">
.user-center-container {
  @apply w-full h-full flex flex-col bg-white dark:bg-neutral-900;
}

.user-center-header {
  @apply flex-shrink-0 px-6 pt-6 pb-4 border-b border-gray-200 dark:border-neutral-700;
}

.user-center-content {
  @apply flex-1 overflow-y-auto px-6 py-6 space-y-6;
}

.panel-title {
  @apply text-base font-bold mb-2;
}

.panel-subtitle {
  @apply text-sm text-gray-600 dark:text-gray-400;
}

.info-card {
  @apply bg-gray-50 dark:bg-neutral-800 rounded-lg p-4 space-y-3;
}

.info-item {
  @apply flex items-center justify-between py-2 border-b border-gray-200 dark:border-neutral-700 last:border-0;
}

.info-label {
  @apply text-sm text-gray-600 dark:text-gray-400;
}

.info-value {
  @apply text-sm text-gray-900 dark:text-white font-mono;
}

.status-badge {
  @apply inline-flex items-center px-2 py-1 rounded text-xs font-medium;
  
  &--success {
    @apply bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400;
  }
  
  &--warning {
    @apply bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400;
  }
}

.tip-card {
  @apply flex gap-4 p-4 bg-blue-50 dark:bg-blue-900/10 border border-blue-200 dark:border-blue-800 rounded-lg;
}

.tip-icon {
  @apply flex-shrink-0 w-12 h-12 flex items-center justify-center bg-blue-100 dark:bg-blue-900/20 rounded-lg text-blue-600 dark:text-blue-400;
}

.tip-content {
  @apply flex-1;
}

.tip-title {
  @apply text-sm font-semibold text-gray-900 dark:text-white mb-1;
}

.tip-desc {
  @apply text-sm text-gray-600 dark:text-gray-400 mb-3;
}

.actions-section,
.about-section {
  @apply space-y-3;
}

.section-title {
  @apply text-sm font-semibold text-gray-900 dark:text-white mb-3;
}

.action-buttons {
  @apply flex gap-3;
}

.about-content {
  @apply space-y-3;
}

.about-text {
  @apply text-sm text-gray-600 dark:text-gray-400;
}

.about-links {
  @apply flex items-center gap-2 text-sm;
}

.link-separator {
  @apply text-gray-400 dark:text-gray-600;
}
</style>
