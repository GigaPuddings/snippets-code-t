<template>
  <div class="settings-panel">
    <!-- 固定标题 -->
    <div class="panel-header">
      <h3 class="panel-title">{{ $t('settings.gitSync.title') }}</h3>
    </div>

    <!-- 可滚动内容 -->
    <main class="panel-content">
      <!-- 当前同步状态：同面板内左右分栏 -->
      <div
        v-if="gitSettings.enabled"
        class="sync-status-panel"
        :class="`sync-status-panel--${syncState}`"
      >
        <!-- 左侧：状态摘要 -->
        <div class="sync-status-panel__left">
          <div class="sync-status-icon">
            <loading
              v-if="syncState === 'syncing'"
              class="git-sync-icon"
              theme="outline"
              size="24"
              :strokeWidth="3"
            />
            <check-one
              v-else-if="syncState === 'synced' || syncState === 'idle'"
              theme="outline"
              size="24"
              :strokeWidth="3"
            />
            <attention
              v-else-if="syncState === 'has_changes'"
              theme="outline"
              size="24"
              :strokeWidth="3"
            />
            <close-small
              v-else-if="syncState === 'error'"
              theme="outline"
              size="24"
              :strokeWidth="3"
            />
          </div>
          <div class="sync-status-info">
            <div class="sync-status-label">
              {{ getSyncStatusLabel(syncState) }}
            </div>
            <div class="sync-status-detail">
              <template v-if="syncState === 'syncing'">
                {{ $t('settings.gitSync.status.syncing') }}
              </template>
              <template v-else-if="syncState === 'has_changes'">
                <span class="pending-count">{{ pendingFilesCount }} {{ $t('settings.gitSync.status.pendingFiles') }}</span>
              </template>
              <template v-else-if="syncState === 'synced' || syncState === 'idle'">
                {{ formattedLastSyncTime ? `${$t('settings.gitSync.status.lastSync')}: ${formattedLastSyncTime}` : $t('settings.gitSync.status.waitingSync') }}
              </template>
              <template v-else-if="syncState === 'error'">
                {{ $t('settings.gitSync.status.error') }}
              </template>
            </div>
          </div>
        </div>

        <!-- 右侧：待同步文件列表（仅在有变更时显示） -->
        <template v-if="syncState === 'has_changes' && pendingFilesCount > 0">
          <div class="sync-status-panel__divider" />
          <div class="sync-status-panel__right">
            <div class="sync-pending-files-header">
              {{ $t('settings.gitSync.status.pendingFilesTitle') }} ({{ pendingFilesCount }})
            </div>
            <div class="sync-pending-files-list">
              <div
                v-for="file in pendingFilesList"
                :key="file"
                class="sync-pending-file-item"
              >
                <span class="file-name">{{ file }}</span>
              </div>
            </div>
          </div>
        </template>
      </div>

      <!-- 第一部分：Git 配置 -->
      <div class="settings-section-title">
        {{ $t('settings.gitSync.status.section.config') }}
      </div>

      <!-- 启用 Git 同步 -->
      <section class="summarize-section">
        <div class="summarize-label">
          <div class="summarize-label-title">{{ $t('settings.gitSync.enabled') }}</div>
          <div class="summarize-label-desc">{{ $t('settings.gitSync.enabledDesc') }}</div>
        </div>
        <div class="summarize-input-wrapper">
          <CustomSwitch 
            v-model="gitSettings.enabled" 
            :active-text="$t('common.on')" 
            :inactive-text="$t('common.off')"
            :disabled="isSaving"
            @change="handleEnabledChange" 
          />
        </div>
      </section>

      <!-- Git 配置（仅在启用时显示） -->
      <template v-if="gitSettings.enabled">
        <!-- 自动检测按钮 -->
        <section class="summarize-section">
          <div class="summarize-label">
            <div class="summarize-label-title">{{ $t('settings.gitSync.autoDetect') }}</div>
            <div class="summarize-label-desc">{{ $t('settings.gitSync.autoDetectDesc') }}</div>
          </div>
          <div class="summarize-input-wrapper">
            <CustomButton 
              size="small" 
              :loading="isDetecting"
              @click="handleDetectConfig"
            >
              {{ $t('settings.gitSync.detectButton') }}
            </CustomButton>
          </div>
        </section>

        <!-- Git 用户名 -->
        <section class="summarize-section transparent-input">
          <div class="summarize-label">
            <div class="summarize-label-title">{{ $t('settings.gitSync.userName') }}</div>
            <div class="summarize-label-desc">{{ $t('settings.gitSync.userNameDesc') }}</div>
          </div>
          <div class="summarize-input-wrapper">
            <el-input 
              v-model="gitSettings.user_name" 
              :placeholder="$t('settings.gitSync.userNamePlaceholder')"
              :disabled="isSaving"
              class="summarize-input"
            />
          </div>
        </section>

        <!-- Git 邮箱 -->
        <section class="summarize-section transparent-input">
          <div class="summarize-label">
            <div class="summarize-label-title">{{ $t('settings.gitSync.userEmail') }}</div>
            <div class="summarize-label-desc">{{ $t('settings.gitSync.userEmailDesc') }}</div>
          </div>
          <div class="summarize-input-wrapper">
            <el-input 
              v-model="gitSettings.user_email" 
              :placeholder="$t('settings.gitSync.userEmailPlaceholder')"
              :disabled="isSaving"
              class="summarize-input"
            />
          </div>
        </section>

        <!-- GitHub Token -->
        <section class="summarize-section transparent-input">
          <div class="summarize-label">
            <div class="summarize-label-title">{{ $t('settings.gitSync.token') }}</div>
            <div class="summarize-label-desc">{{ $t('settings.gitSync.tokenDesc') }}</div>
          </div>
          <div class="summarize-input-wrapper">
            <el-input 
              v-model="gitSettings.token" 
              type="password"
              show-password
              :placeholder="$t('settings.gitSync.tokenPlaceholder')"
              :disabled="isSaving"
              class="summarize-input !w-96"
            />
          </div>
        </section>

        <!-- 远程仓库 URL -->
        <section class="summarize-section transparent-input">
          <div class="summarize-label">
            <div class="summarize-label-title">{{ $t('settings.gitSync.remoteUrl') }}</div>
            <div class="summarize-label-desc">{{ $t('settings.gitSync.remoteUrlDesc') }}</div>
          </div>
          <div class="summarize-input-wrapper">
            <el-input 
              v-model="gitSettings.remote_url" 
              :placeholder="$t('settings.gitSync.remoteUrlPlaceholder')"
              :disabled="isSaving"
              class="summarize-input !w-96"
            />
          </div>
        </section>

        <!-- 保存 Git 配置按钮 -->
        <section class="summarize-section">
          <div class="summarize-label">
            <div class="summarize-label-title">{{ $t('settings.gitSync.saveConfig') }}</div>
            <div class="summarize-label-desc">{{ $t('settings.gitSync.saveConfigDesc') }}</div>
          </div>
          <div class="summarize-input-wrapper">
            <CustomButton 
              type="primary" 
              size="small" 
              :loading="isSaving"
              @click="saveGitConfig"
            >
              {{ $t('common.save') }}
            </CustomButton>
          </div>
        </section>

        <!-- 启动时自动拉取 -->
        <section class="summarize-section">
          <div class="summarize-label">
            <div class="summarize-label-title">{{ $t('settings.gitSync.pullOnStart') }}</div>
            <div class="summarize-label-desc">{{ $t('settings.gitSync.pullOnStartDesc') }}</div>
          </div>
          <div class="summarize-input-wrapper">
            <CustomSwitch 
              v-model="gitSettings.pull_on_start" 
              :active-text="$t('common.on')" 
              :inactive-text="$t('common.off')"
              :disabled="isSaving"
              @change="handlePullOnStartChange" 
            />
          </div>
        </section>

        <!-- 自动同步 -->
        <section class="summarize-section">
          <div class="summarize-label">
            <div class="summarize-label-title">{{ $t('settings.gitSync.autoSync') }}</div>
            <div class="summarize-label-desc">{{ $t('settings.gitSync.autoSyncDesc') }}</div>
          </div>
          <div class="summarize-input-wrapper">
            <CustomSwitch 
              v-model="gitSettings.auto_sync" 
              :active-text="$t('common.on')" 
              :inactive-text="$t('common.off')"
              :disabled="isSaving"
              @change="handleAutoSyncChange" 
            />
          </div>
        </section>

        <!-- 自动同步延迟（仅在启用自动同步时显示） -->
        <section v-if="gitSettings.auto_sync" class="summarize-section transparent-input">
          <div class="summarize-label">
            <div class="summarize-label-title">{{ $t('settings.gitSync.autoSyncDelay') }}</div>
            <div class="summarize-label-desc">{{ $t('settings.gitSync.autoSyncDelayDesc') }}</div>
          </div>
          <div class="summarize-input-wrapper">
            <el-input-number 
              v-model="gitSettings.auto_sync_delay" 
              :min="1" 
              :max="60"
              :disabled="isSaving"
              @change="handleAutoSyncDelayChange"
              class="!w-32"
            />
            <span class="ml-2 text-sm text-panel">{{ $t('settings.gitSync.minutes') }}</span>
          </div>
        </section>

        <!-- 第二部分：同步操作 -->
        <div class="settings-section-title">
          {{ $t('settings.gitSync.status.section.sync') || '同步操作' }}
        </div>

        <!-- 手动同步按钮 -->
        <section class="summarize-section">
          <div class="summarize-label">
            <div class="summarize-label-title">{{ $t('settings.gitSync.manualSync') }}</div>
            <div class="summarize-label-desc">{{ $t('settings.gitSync.manualSyncDesc') }}</div>
          </div>
          <div class="summarize-input-wrapper flex gap-2">
            <CustomButton 
              type="primary" 
              size="small" 
              :loading="isPulling"
              @click="handlePull"
            >
              {{ $t('settings.gitSync.pull') }}
            </CustomButton>
            <CustomButton 
              type="primary" 
              size="small" 
              :loading="isPushing"
              @click="handlePush"
            >
              {{ $t('settings.gitSync.push') }}
            </CustomButton>
          </div>
        </section>
      </template>
    </main>
    
    <!-- 配置选择对话框 -->
    <GitConfigDialog
      v-model="showConfigDialog"
      :system-config="detectedConfig"
      @confirm="handleConfigSelected"
    />
    
    <!-- 保存配置确认对话框 -->
    <GitSaveConfigDialog
      v-model="showSaveConfigDialog"
      :config="gitSettings"
      :loading="isSaving"
      @confirm="handleSaveConfigConfirm"
      @cancel="handleSaveConfigCancel"
    />

    <!-- 自定义确认框 -->
    <ConfirmChoiceDialog
      v-model="pullConfirmVisible"
      :title="pullConfirmOptions.title"
      :message="pullConfirmOptions.message"
      :primary-text="pullConfirmOptions.primaryText"
      :secondary-text="pullConfirmOptions.secondaryText"
      :type="pullConfirmOptions.type"
      @primary="handlePullConfirmResult('primary')"
      @secondary="handlePullConfirmResult('secondary')"
      @close="handlePullConfirmResult('close')"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { Loading, CheckOne, Attention, CloseSmall } from '@icon-park/vue-next';
import { CustomButton, CustomSwitch } from '@/components/UI';
import GitConfigDialog from '@/components/GitConfigDialog/index.vue';
import GitSaveConfigDialog from '@/components/GitSaveConfigDialog/index.vue';
import ConfirmChoiceDialog from '@/components/UI/ConfirmChoiceDialog.vue';
import { getGitSettings, updateGitSettings } from '@/api/appConfig';
import { useGitStatus } from '@/hooks/useGitStatus';
import { 
  configureGit, 
  gitPull, 
  gitPush, 
  getSystemGitConfig, 
  startAutoSync,
  stopAutoSync,
  resumeAutoSync,
  type SystemGitConfig 
} from '@/api/git';
import type { GitSettings } from '@/types/models';
import modal from '@/utils/modal';
import { analyzeGitError, getErrorTypeIcon } from '@/utils/git-error';
import { logger } from '@/utils/logger';

defineOptions({
  name: 'GitSync'
});

const { t } = useI18n();

// Git 同步状态（与标题栏指示器共用同一数据源，时间会一致）
const {
  syncState,
  pendingFilesCount,
  formattedLastSyncTime,
  gitStatus,
  refreshStatus,
  refreshSettings
} = useGitStatus();

// 待同步文件列表
const pendingFilesList = computed(() => {
  if (!gitStatus.value?.changed_files) return [];
  return gitStatus.value.changed_files;
});

// 获取同步状态标签
const getSyncStatusLabel = (state: string) => {
  switch (state) {
    case 'syncing':
      return t('settings.gitSync.status.syncing') || '同步中';
    case 'synced':
      return t('settings.gitSync.status.synced') || '已同步';
    case 'has_changes':
      return t('settings.gitSync.status.hasChanges') || '有待同步';
    case 'error':
      return t('settings.gitSync.status.error') || '同步出错';
    case 'idle':
      return t('settings.gitSync.status.idle') || '空闲';
    default:
      return t('settings.gitSync.status.unknown') || '未知';
  }
};

const gitSettings = ref<GitSettings>({
  enabled: false,
  user_name: '',
  user_email: '',
  token: '',
  remote_url: '',
  pull_on_start: true,
  auto_sync: false,
  auto_sync_delay: 1
});

const isSaving = ref(false);
const isPulling = ref(false);
const isPushing = ref(false);
const isDetecting = ref(false);
const showConfigDialog = ref(false);
const showSaveConfigDialog = ref(false);
const isShowingPullConfirm = ref(false);
const pullConfirmVisible = ref(false);
const pullConfirmOptions = ref({
  title: '',
  message: '',
  primaryText: '',
  secondaryText: '',
  type: 'info' as const
});
let pullConfirmResolve: ((v: 'primary' | 'secondary' | 'close') => void) | null = null;

// 显示友好的错误消息
const showFriendlyError = (error: unknown) => {
  const errorInfo = analyzeGitError(error);
  const icon = getErrorTypeIcon(errorInfo.type);
  const errorMsg = String(error).replace(/^Error:\s*/, '');
  
  // 构建友好消息
  let friendlyMsg = `${icon} ${errorInfo.title}\n\n${errorInfo.message}`;
  if (errorMsg && !errorInfo.message.includes(errorMsg)) {
    friendlyMsg += `\n\n详情: ${errorMsg.slice(0, 100)}${errorMsg.length > 100 ? '...' : ''}`;
  }
  
  modal.msg(friendlyMsg, 'error', 'top-right');
  
  // 同时在控制台输出详细建议
  console.group(`🔧 Git 错误解决建议 - ${errorInfo.title}`);
  console.log(errorMsg);
  console.log('建议步骤:');
  errorInfo.suggestions.forEach((suggestion, index) => {
    console.log(`${index + 1}. ${suggestion}`);
  });
  console.groupEnd();
};

const showPullConfirm = () => {
  pullConfirmOptions.value = {
    title: t('settings.gitSync.pullNowTitle'),
    message: t('settings.gitSync.pullNowMessage'),
    primaryText: t('common.confirm'),
    secondaryText: t('common.cancel'),
    type: 'info'
  };
  pullConfirmVisible.value = true;
  return new Promise<'primary' | 'secondary' | 'close'>((resolve) => {
    pullConfirmResolve = resolve;
  });
};

const handlePullConfirmResult = (result: 'primary' | 'secondary' | 'close') => {
  pullConfirmVisible.value = false;
  if (pullConfirmResolve) {
    pullConfirmResolve(result);
    pullConfirmResolve = null;
  }
};
const detectedConfig = ref<SystemGitConfig>({
  global_user_name: null,
  global_user_email: null,
  local_user_name: null,
  local_user_email: null,
  remote_url: null
});

// 加载 Git 设置
const loadGitSettings = async () => {
  try {
    logger.info('[GitSync] 开始加载 Git 设置');
    const settings = await getGitSettings();
    gitSettings.value = settings;
    logger.info('[GitSync] Git 设置加载成功', settings);
  } catch (error) {
    logger.error('[GitSync] 加载 Git 设置失败', error);
    modal.msg(t('settings.gitSync.loadFailed'), 'error', 'top-right');
  }
};

// 手动检测系统 Git 配置
const handleDetectConfig = async () => {
  isDetecting.value = true;
  try {
    const systemConfig = await getSystemGitConfig();
    logger.info('[GitSync] 检测到的系统 Git 配置', systemConfig);
    
    // 检查是否有可用配置
    const hasLocal = !!(systemConfig.local_user_name && systemConfig.local_user_email);
    const hasGlobal = !!(systemConfig.global_user_name && systemConfig.global_user_email);
    
    if (!hasLocal && !hasGlobal) {
      modal.msg(t('settings.gitSync.noConfigDetected'), 'warning', 'bottom-right');
      return;
    }
    
    // 显示配置选择对话框
    detectedConfig.value = systemConfig;
    showConfigDialog.value = true;
  } catch (error) {
    logger.error('[GitSync] 检测系统 Git 配置失败', error);
    modal.msg(t('settings.gitSync.detectFailed'), 'error', 'top-right');
  } finally {
    isDetecting.value = false;
  }
};

// 处理配置选择
const handleConfigSelected = (selection: { type: 'local' | 'global' | 'manual'; data?: SystemGitConfig }) => {
  if (selection.type === 'manual') {
    // 用户选择手动配置，不填充
    return;
  }
  
  const config = selection.data;
  if (!config) return;
  
  if (selection.type === 'local') {
    // 使用本地配置
    if (config.local_user_name) {
      gitSettings.value.user_name = config.local_user_name;
    }
    if (config.local_user_email) {
      gitSettings.value.user_email = config.local_user_email;
    }
    if (config.remote_url) {
      gitSettings.value.remote_url = config.remote_url;
    }
    modal.msg(t('settings.gitSync.localConfigApplied'), 'success', 'bottom-right');
  } else if (selection.type === 'global') {
    // 使用全局配置
    if (config.global_user_name) {
      gitSettings.value.user_name = config.global_user_name;
    }
    if (config.global_user_email) {
      gitSettings.value.user_email = config.global_user_email;
    }
    modal.msg(t('settings.gitSync.globalConfigApplied'), 'success', 'bottom-right');
  }
};

// 保存设置到后端
const saveSettings = async () => {
  try {
    await updateGitSettings(gitSettings.value);
  } catch (error) {
    logger.error('[GitSync] 保存 Git 设置失败', error);
    throw error;
  }
};

// 启用/禁用 Git 同步
const handleEnabledChange = async (value: boolean) => {
  isSaving.value = true;
  try {
    await saveSettings();
    modal.msg(value ? t('settings.gitSync.enabledSuccess') : t('settings.gitSync.disabledSuccess'), 'success', 'bottom-right');
  } catch (error) {
    modal.msg(t('settings.gitSync.saveFailed'), 'error', 'top-right');
    gitSettings.value.enabled = !value;
  } finally {
    isSaving.value = false;
  }
};

// 验证 URL 格式
const validateUrl = (url: string): boolean => {
  // 支持 HTTPS 格式
  try {
    const urlObj = new URL(url);
    if (urlObj.protocol === 'https:' || urlObj.protocol === 'http:') {
      return true;
    }
  } catch {
    // 不是标准 URL 格式，继续检查 SSH 格式
  }
  
  // 支持 SSH 格式：git@github.com:user/repo.git
  const sshPattern = /^git@[\w.-]+:[\w/-]+\.git$/;
  return sshPattern.test(url);
};

// 验证邮箱格式
const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// 保存 Git 配置
const saveGitConfig = async () => {
  // 验证必填字段
  if (!gitSettings.value.user_name || !gitSettings.value.user_email || 
      !gitSettings.value.token || !gitSettings.value.remote_url) {
    modal.msg(t('settings.gitSync.fillAllFields'), 'warning', 'bottom-right');
    return;
  }
  
  // 验证邮箱格式
  if (!validateEmail(gitSettings.value.user_email)) {
    modal.msg(t('settings.gitSync.invalidEmail'), 'warning', 'bottom-right');
    return;
  }
  
  // 验证 URL 格式
  if (!validateUrl(gitSettings.value.remote_url)) {
    modal.msg(t('settings.gitSync.invalidUrl'), 'warning', 'bottom-right');
    return;
  }

  // 显示确认对话框
  showSaveConfigDialog.value = true;
};

// 确认保存配置
const handleSaveConfigConfirm = async () => {
  isSaving.value = true;
  try {
    // 1. 先配置 Git（含 Token 校验），成功后再保存，避免无效 Token 被持久化
    await configureGit({
      user_name: gitSettings.value.user_name,
      user_email: gitSettings.value.user_email,
      remote_url: gitSettings.value.remote_url,
      token: gitSettings.value.token
    });

    // 2. 配置成功后保存到配置文件
    await saveSettings();

    // 3. 重新加载配置以确保状态同步
    await loadGitSettings();

    // 4. 如果自动同步已启用，确保启动自动同步管理器
    if (gitSettings.value.auto_sync) {
      await startAutoSync();
      // 尝试恢复自动同步（如果之前被暂停）
      try {
        await resumeAutoSync();
        logger.info('[GitSync] 自动同步已恢复');
      } catch (e) {
        // 如果恢复失败（可能之前没有暂停），静默忽略
        logger.debug('[GitSync] 恢复自动同步失败', e);
      }
    }
    
    // 5. 显示成功消息
    modal.msg(t('settings.gitSync.configSuccess'), 'success', 'bottom-right');
    showSaveConfigDialog.value = false;
    
    // 6. 询问是否立即拉取（防止重复显示）
    if (!isShowingPullConfirm.value) {
      isShowingPullConfirm.value = true;
      try {
        const result = await showPullConfirm();
        if (result === 'primary') {
          await handlePull();
        }
      } finally {
        isShowingPullConfirm.value = false;
      }
    }
  } catch (error) {
    logger.error('[GitSync] 配置 Git 失败', error);
    modal.msg(`${t('settings.gitSync.configFailed')}: ${error}`, 'error', 'top-right');
  } finally {
    isSaving.value = false;
  }
};

// 取消保存配置
const handleSaveConfigCancel = () => {
  isSaving.value = false;
};

// 启动时自动拉取
const handlePullOnStartChange = async (value: boolean) => {
  isSaving.value = true;
  try {
    await saveSettings();
    modal.msg(value ? t('settings.gitSync.pullOnStartEnabled') : t('settings.gitSync.pullOnStartDisabled'), 'success', 'bottom-right');
  } catch (error) {
    modal.msg(t('settings.gitSync.saveFailed'), 'error', 'top-right');
    gitSettings.value.pull_on_start = !value;
  } finally {
    isSaving.value = false;
  }
};

// 自动同步
const handleAutoSyncChange = async (value: boolean) => {
  isSaving.value = true;
  try {
    await saveSettings();
    // 开启时启动自动同步管理器，关闭时停止
    if (value) {
      await startAutoSync();
    } else {
      await stopAutoSync();
    }
    modal.msg(value ? t('settings.gitSync.autoSyncEnabled') : t('settings.gitSync.autoSyncDisabled'), 'success', 'bottom-right');
  } catch (error) {
    modal.msg(t('settings.gitSync.saveFailed'), 'error', 'top-right');
    gitSettings.value.auto_sync = !value;
  } finally {
    isSaving.value = false;
  }
};

// 自动同步延迟
const handleAutoSyncDelayChange = async () => {
  isSaving.value = true;
  try {
    await saveSettings();
    // 延迟变更后重启自动同步管理器以应用新延迟
    if (gitSettings.value.auto_sync) {
      await stopAutoSync();
      await startAutoSync();
    }
    // 静默保存，不显示提示
  } catch (error) {
    modal.msg(t('settings.gitSync.saveFailed'), 'error', 'top-right');
  } finally {
    isSaving.value = false;
  }
};

// 手动拉取
const handlePull = async () => {
  logger.info('[GitSync] 手动 Pull 开始');
  isPulling.value = true;
  try {
    const result = await gitPull();
    if (result.success) {
      if (result.has_conflicts) {
        // 冲突已由 Config 页面的全局对话框处理，这里不需要再显示
        // 只记录日志
        logger.info('[GitSync] Pull 检测到冲突，由全局对话框处理');
      } else if (result.files_updated === 0) {
        // 无变更时显示"已是最新版本"
        modal.msg(t('settings.gitSync.alreadyUpToDate'), 'success', 'bottom-right');
      } else {
        // 有变更时显示更新的文件数
        modal.msg(t('settings.gitSync.pullSuccess', { count: result.files_updated }), 'success', 'bottom-right');
      }
    } else {
      modal.msg(t('settings.gitSync.pullFailed'), 'error', 'top-right');
    }
  } catch (error) {
    logger.error('[GitSync] 手动 Pull 失败', error);
    showFriendlyError(error);
  } finally {
    isPulling.value = false;
  }
};

// 手动推送
const handlePush = async () => {
  logger.info('[GitSync] 手动 Push 开始');
  isPushing.value = true;
  try {
    const result = await gitPush('Manual sync');
    if (result.success) {
      modal.msg(t('settings.gitSync.pushSuccess', { count: result.files_pushed }), 'success', 'bottom-right');
    } else {
      modal.msg(t('settings.gitSync.pushFailed'), 'error', 'top-right');
    }
  } catch (error) {
    logger.error('[GitSync] 手动 Push 失败', error);
    showFriendlyError(error);
  } finally {
    isPushing.value = false;
  }
};

onMounted(async () => {
  logger.info('[GitSync] 页面挂载，开始初始化 Git 状态');
  await loadGitSettings();
  // 与标题栏共用同一状态：进入页面时刷新，保证「最后同步」时间与指示器一致
  await refreshSettings();
  logger.info('[GitSync] refreshSettings 完成', {
    syncState: syncState.value,
  });
  await refreshStatus();
  logger.info('[GitSync] refreshStatus 完成', {
    syncState: syncState.value,
    pendingFilesCount: pendingFilesCount.value,
  });
});
</script>
