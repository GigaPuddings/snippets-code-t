<template>
  <div class="user-center-container">
    <!-- 加载中状态 -->
    <div v-if="initialLoading" class="loading-container">
      <div class="loading-content">
        <div class="loading-spinner"></div>
        <p class="loading-text">{{ $t('github.loading') }}</p>
      </div>
    </div>

    <div v-else class="user-center-content">
      <!-- 标题 -->
      <h3 class="panel-title">{{ $t('github.title') }}</h3>
      <p class="panel-subtitle">{{ $t('github.subtitle') }}</p>

      <!-- 登录区域 -->
      <div v-if="!isLoggedIn" class="settings-section">
        <div class="section-header">
          <h4 class="section-title">{{ $t('github.connectGithub') }}</h4>
        </div>
        <el-form :model="loginForm" label-position="top" class="settings-form">
          <el-form-item :label="$t('github.token')">
            <el-input
              v-model="loginForm.token"
              type="password"
              :placeholder="$t('github.tokenPlaceholder')"
              show-password
              clearable
            />
          </el-form-item>
          
          <el-form-item :label="$t('github.repoName')">
            <el-input
              v-model="loginForm.repo"
              :placeholder="$t('github.repoPlaceholder')"
              clearable
            />
          </el-form-item>
          
          <div class="help-text">
            <Help theme="outline" size="16" :strokeWidth="3" />
            <span>{{ $t('github.howToGetToken') }}</span>
            <el-button
              link
              type="primary"
              @click="openTokenHelp"
            >
              {{ $t('github.viewTutorial') }}
            </el-button>
          </div>
          
          <CustomButton
            type="primary"
            :loading="logging"
            :disabled="!loginForm.token"
            @click="handleLogin"
          >
            {{ logging ? $t('github.connecting') : $t('github.connect') }}
          </CustomButton>
        </el-form>
      </div>

      <!-- 用户信息区域 -->
      <div v-else class="settings-section">
        <div class="section-header">
          <h4 class="section-title">{{ $t('github.accountInfo') }}</h4>
        </div>
        <div class="user-info">
          <img :src="userInfo.avatar_url" alt="avatar" class="user-avatar" />
          <div class="user-details">
            <div class="user-name">{{ userInfo.name || userInfo.login }}</div>
            <div class="user-login">@{{ userInfo.login }}</div>
          </div>
          <CustomButton type="danger" plain @click="handleLogout">
            {{ $t('github.logout') }}
          </CustomButton>
        </div>
      </div>

      <!-- 同步状态 -->
      <div v-if="isLoggedIn" class="settings-section">
        <div class="section-header">
          <h4 class="section-title">{{ $t('github.syncStatus') }}</h4>
        </div>
        <div class="sync-status">
          <div class="status-item">
            <span class="status-label">{{ $t('github.lastSyncTime') }}</span>
            <span class="status-value">
              {{ settings.last_sync_time || $t('github.neverSynced') }}
            </span>
          </div>
          
          <div class="status-item">
            <span class="status-label">{{ $t('github.repoAddress') }}</span>
            <span class="status-value">
              <el-link
                v-if="userInfo.login"
                :href="`https://github.com/${userInfo.login}/${settings.github_repo || 'snippets-code-backup'}`"
                target="_blank"
                type="primary"
              >
                {{ userInfo.login }}/{{ settings.github_repo || 'snippets-code-backup' }}
              </el-link>
            </span>
          </div>
        </div>
      </div>

      <!-- 同步操作 -->
      <div v-if="isLoggedIn" class="settings-section">
        <div class="section-header">
          <h4 class="section-title">{{ $t('github.dataSync') }}</h4>
        </div>
        <div class="sync-actions">
          <div class="sync-buttons">
            <CustomButton
              type="primary"
              :loading="syncing"
              :disabled="syncing || restoring"
              @click="handleSync"
            >
              <UploadIcon theme="outline" size="16" :strokeWidth="3" class="mr-1" />
              {{ syncing ? $t('github.uploading') : $t('github.uploadToGithub') }}
            </CustomButton>
            
            <CustomButton
              type="success"
              :loading="restoring"
              :disabled="syncing || restoring"
              @click="handleRestore"
            >
              <DownloadIcon theme="outline" size="16" :strokeWidth="3" class="mr-1" />
              {{ restoring ? $t('github.restoring') : $t('github.restoreFromGithub') }}
            </CustomButton>
          </div>
          
          <!-- 同步进度条 -->
          <div v-if="syncing" class="progress-container">
            <div class="progress-header">
              <span class="progress-label">{{ syncMessage || $t('github.uploadingData') }}</span>
              <span class="progress-percentage">{{ syncProgress }}%</span>
            </div>
            <el-progress 
              :percentage="syncProgress" 
              :stroke-width="12" 
              :show-text="false"
              color="#3b82f6"
              class="custom-progress"
            />
          </div>
          
          <!-- 恢复进度条 -->
          <div v-if="restoring" class="progress-container progress-container--restore">
            <div class="progress-header">
              <span class="progress-label">{{ restoreMessage || $t('github.restoringData') }}</span>
              <span class="progress-percentage progress-percentage--restore">{{ restoreProgress }}%</span>
            </div>
            <el-progress 
              :percentage="restoreProgress" 
              :stroke-width="12" 
              :show-text="false"
              color="#10b981"
              class="custom-progress"
            />
          </div>
          
          <div class="warning-text">
            <WarningIcon theme="filled" size="16" :strokeWidth="3" />
            <span>{{ $t('github.restoreWarning') }}</span>
          </div>
        </div>
      </div>

      <!-- 同步设置 -->
      <div v-if="isLoggedIn" class="settings-section">
        <div class="section-header">
          <h4 class="section-title">{{ $t('github.autoSync') }}</h4>
        </div>
        <div class="sync-settings">
          <div class="setting-item">
            <div class="setting-info">
              <span class="setting-label">{{ $t('github.autoSyncOnExit') }}</span>
              <span class="setting-desc">{{ $t('github.autoSyncOnExitDesc') }}</span>
            </div>
            <CustomSwitch
              v-model="settings.auto_sync_on_exit"
              @change="handleSettingChange"
            />
          </div>
          
          <div class="setting-item">
            <div class="setting-info">
              <span class="setting-label">{{ $t('github.autoRestoreOnStart') }}</span>
              <span class="setting-desc">{{ $t('github.autoRestoreOnStartDesc') }}</span>
            </div>
            <CustomSwitch
              v-model="settings.auto_restore_on_start"
              @change="handleSettingChange"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue';
import { ElMessage, ElMessageBox } from 'element-plus';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
import { CustomButton, CustomSwitch } from '@/components/UI';
import {
  Help,
  Info as WarningIcon,
  Upload as UploadIcon,
  Download as DownloadIcon
} from '@icon-park/vue-next';
import { open as openUrl } from '@tauri-apps/plugin-shell';
import {
  getUserSettingsCached,
  getGitHubUserCached,
  saveUserSettings,
  verifyGitHubToken,
  syncToGitHub,
  restoreFromGitHub,
  type UserSettings,
  type GitHubUser
} from '@/api/github';
import { listen, emit } from '@tauri-apps/api/event';

defineOptions({
  name: 'UserCenter'
});

// 登录表单
const loginForm = reactive({
  token: '',
  repo: ''
});

// 状态
const initialLoading = ref(true);
const isLoggedIn = ref(false);
const logging = ref(false);
const syncing = ref(false);
const restoring = ref(false);
const syncProgress = ref(0);
const restoreProgress = ref(0);
const syncMessage = ref('');
const restoreMessage = ref('');

// 用户信息
const userInfo = ref<GitHubUser>({
  login: '',
  avatar_url: '',
  name: null
});

// 用户设置
const settings = ref<UserSettings>({
  github_token: null,
  github_username: null,
  github_repo: null,
  last_sync_time: null,
  auto_sync_on_exit: false,
  auto_restore_on_start: false
});

// 加载用户设置
const loadSettings = async () => {
  try {
    settings.value = await getUserSettingsCached();
    
    // 如果已有 Token，自动验证
    if (settings.value.github_token) {
      try {
        userInfo.value = await getGitHubUserCached(settings.value.github_token);
        isLoggedIn.value = true;
      } catch (error) {
        // Token 失效，清除设置
        console.error('Token 验证失败:', error);
        isLoggedIn.value = false;
      }
    }
  } catch (error) {
    console.error('加载设置失败:', error);
  } finally {
    initialLoading.value = false;
  }
};

// 登录
const handleLogin = async () => {
  if (!loginForm.token) {
    ElMessage.warning(t('github.pleaseInputToken'));
    return;
  }
  
  logging.value = true;
  try {
    // 验证 Token
    const user = await verifyGitHubToken(loginForm.token);
    userInfo.value = user;
    
    // 保存设置
    settings.value = {
      github_token: loginForm.token,
      github_username: user.login,
      github_repo: loginForm.repo || 'snippets-code-backup',
      last_sync_time: null,
      auto_sync_on_exit: false,
      auto_restore_on_start: false
    };
    
    await saveUserSettings(settings.value);
    
    isLoggedIn.value = true;
    
    // 发送用户登录事件，通知标题栏更新
    await emit('user-login-status-changed', { loggedIn: true });
    
    ElMessage.success(t('github.connectSuccess'));
    
    // 清空表单
    loginForm.token = '';
    loginForm.repo = '';
  } catch (error: any) {
    ElMessage.error(error || t('github.connectFailed'));
  } finally {
    logging.value = false;
  }
};

// 登出
const handleLogout = async () => {
  try {
    await ElMessageBox.confirm(
      t('github.logoutConfirm'),
      t('github.logoutTitle'),
      {
        confirmButtonText: t('common.confirm'),
        cancelButtonText: t('common.cancel'),
        type: 'warning'
      }
    );
    
    // 清除设置
    settings.value = {
      github_token: null,
      github_username: null,
      github_repo: null,
      last_sync_time: null,
      auto_sync_on_exit: false,
      auto_restore_on_start: false
    };
    
    await saveUserSettings(settings.value);
    
    isLoggedIn.value = false;
    userInfo.value = {
      login: '',
      avatar_url: '',
      name: null
    };
    
    // 发送用户登出事件，通知标题栏更新
    await emit('user-login-status-changed', { loggedIn: false });
    
    ElMessage.success(t('github.logoutSuccess'));
  } catch {
    // 用户取消
  }
};

// 同步到 GitHub
const handleSync = async () => {
  syncing.value = true;
  syncProgress.value = 0;
  
  // 监听后端进度事件
  const unlisten = await listen('sync-progress', (event: any) => {
    const { progress, message } = event.payload;
    syncProgress.value = progress;
    syncMessage.value = message;
    console.log(`同步进度: ${progress}% - ${message}`);
  });
  
  try {
    const syncTime = await syncToGitHub();
    settings.value.last_sync_time = syncTime;
    await saveUserSettings(settings.value);
    ElMessage.success(t('github.syncSuccess'));
  } catch (error: any) {
    ElMessage.error(error || t('github.syncFailed'));
  } finally {
    unlisten();
    setTimeout(() => {
      syncing.value = false;
      syncProgress.value = 0;
      syncMessage.value = '';
    }, 500);
  }
};

// 从 GitHub 恢复
const handleRestore = async () => {
  try {
    await ElMessageBox.confirm(
      t('github.restoreConfirm'),
      t('github.restoreTitle'),
      {
        confirmButtonText: t('common.confirm'),
        cancelButtonText: t('common.cancel'),
        type: 'warning',
        dangerouslyUseHTMLString: true
      }
    );
    
    restoring.value = true;
    restoreProgress.value = 0;
    
    // 监听后端进度事件
    const unlisten = await listen('restore-progress', (event: any) => {
      const { progress, message } = event.payload;
      restoreProgress.value = progress;
      restoreMessage.value = message;
      console.log(`恢复进度: ${progress}% - ${message}`);
    });
    
    try {
      await restoreFromGitHub();
      // 注意：恢复成功后应用会自动重启
      ElMessage.success(t('github.restoreSuccess'));
    } catch (error: any) {
      ElMessage.error(error || t('github.restoreFailed'));
      unlisten();
      restoring.value = false;
      restoreProgress.value = 0;
      restoreMessage.value = '';
    }
    // 注意：不在 finally 中重置，因为应用会重启
  } catch {
    // 用户取消
  }
};

// 设置变更
const handleSettingChange = async () => {
  try {
    await saveUserSettings(settings.value);
    ElMessage.success(t('github.settingSaved'));
  } catch (error: any) {
    ElMessage.error(t('github.settingFailed'));
  }
};

// 打开 Token 帮助
const openTokenHelp = () => {
  openUrl('https://github.com/settings/tokens/new?description=snippets-code-backup&scopes=repo');
};

// 初始化
onMounted(() => {
  loadSettings();
});
</script>

<style scoped lang="scss">
.user-center-container {
  @apply w-full h-full overflow-y-auto p-6 bg-white dark:bg-neutral-900;
}

.user-center-content {
  @apply max-w-3xl space-y-6;
}

.panel-title {
  @apply text-base font-bold mb-2 pb-2 border-b border-gray-200 dark:border-neutral-700;
}

.panel-subtitle {
  @apply text-sm text-gray-600 dark:text-gray-400 mb-6;
}

.settings-section {
  @apply mb-6;
}

.section-header {
  @apply mb-3;
}

.section-title {
  @apply text-sm font-semibold text-gray-900 dark:text-white;
}

.settings-form {
  @apply space-y-4;
}

.help-text {
  @apply flex items-center gap-2 text-xs text-gray-600 dark:text-gray-400 mb-4;
}

.user-info {
  @apply flex items-center gap-4 p-4 bg-gray-50 dark:bg-neutral-800 rounded-md;
}

.user-avatar {
  @apply w-12 h-12 rounded-full;
}

.user-details {
  @apply flex-1;
}

.user-name {
  @apply text-sm font-semibold text-gray-900 dark:text-white;
}

.user-login {
  @apply text-xs text-gray-600 dark:text-gray-400;
}

.sync-status {
  @apply space-y-3;
}

.status-item {
  @apply flex items-center py-2 border-b border-gray-200 dark:border-neutral-700 last:border-0;
}

.status-label {
  @apply text-sm text-gray-600 dark:text-gray-400 min-w-[120px];
}

.status-value {
  @apply text-sm text-gray-900 dark:text-white;
}

.sync-actions {
  @apply space-y-3;
}

.sync-buttons {
  @apply flex gap-3;
}

.warning-text {
  @apply flex items-center gap-2 text-xs text-orange-600 bg-orange-50 dark:bg-orange-900/20 p-3 rounded-md;
}

.sync-settings {
  @apply space-y-3;
}

.setting-item {
  @apply flex items-center justify-between py-3 border-b border-gray-200 dark:border-neutral-700 last:border-0;
}

.setting-info {
  @apply flex-1;
}

.setting-label {
  @apply block text-sm font-medium text-gray-900 dark:text-white mb-1;
}

.setting-desc {
  @apply block text-xs text-gray-600 dark:text-gray-400;
}

.loading-container {
  @apply w-full h-full flex items-center justify-center min-h-[400px];
}

.loading-content {
  @apply flex flex-col items-center gap-4;
}

.loading-spinner {
  @apply w-12 h-12 border-4 border-gray-200 border-t-blue-500 rounded-full animate-spin;
}

.loading-text {
  @apply text-sm text-gray-600 dark:text-gray-400;
}

.progress-container {
  @apply mt-4 p-4 bg-blue-50 dark:bg-blue-900/10 rounded-lg border border-blue-200 dark:border-blue-800;
  
  &--restore {
    @apply bg-green-50 dark:bg-green-900/10 border-green-200 dark:border-green-800;
  }
}

.progress-header {
  @apply flex items-center justify-between mb-3;
}

.progress-label {
  @apply text-sm font-medium text-gray-700 dark:text-gray-300;
}

.progress-percentage {
  @apply text-lg font-bold text-blue-600 dark:text-blue-400 tabular-nums;
  
  &--restore {
    @apply text-green-600 dark:text-green-400;
  }
}

.custom-progress {
  :deep(.el-progress-bar__outer) {
    @apply bg-gray-200 dark:bg-neutral-700 rounded-full;
  }
  
  :deep(.el-progress-bar__inner) {
    @apply rounded-full transition-all duration-300 ease-out shadow-sm;
  }
}
</style>
