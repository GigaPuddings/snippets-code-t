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
              v-else-if="syncState === 'synced' || syncState === 'idle' || syncState === 'disabled'"
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
              <template v-else-if="syncState === 'disabled'">
                {{ $t('settings.gitSync.status.checking') }}
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

      <!-- 同步选项（Git 必要配置在个人中心填写，此处仅保留开关与同步操作） -->
      <template v-if="gitSettings.enabled">
        <section v-if="gitStatus?.available_branches?.length" class="summarize-section">
          <div class="summarize-label">
            <div class="summarize-label-title">同步分支</div>
            <div class="summarize-label-desc">
              主分支固定为 main，检测到其他分支时可在这里切换
            </div>
          </div>
          <div class="summarize-input-wrapper">
            <el-select
              :model-value="gitStatus.branch || 'main'"
              class="summarize-input !w-40"
              :disabled="isSaving || isPulling || isPushing"
              @change="handleBranchChange"
            >
              <el-option
                v-for="branch in gitStatus.available_branches"
                :key="branch"
                :label="branch === 'main' ? `${branch}（主分支）` : branch"
                :value="branch"
              />
            </el-select>
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

    <SelectConfirmDialog
      v-model="branchSelectVisible"
      title="选择同步分支"
      :message="branchSelectMessage"
      :options="branchSelectOptions"
      :default-value="selectedBranch"
      confirm-text="切换并同步"
      cancel-text="取消"
      :loading="isPulling"
      @confirm="handleBranchSelectConfirm"
      @cancel="branchSelectVisible = false"
    />

    <ConfirmChoiceDialog
      v-model="branchOverwriteVisible"
      title="切换分支前需要处理未跟踪文件"
      :message="branchOverwriteMessage"
      primary-text="使用目标分支文件"
      secondary-text="取消"
      type="warning"
      @primary="handleBranchOverwriteConfirm"
      @secondary="branchOverwriteVisible = false"
      @close="branchOverwriteVisible = false"
    />
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { Loading, CheckOne, Attention, CloseSmall } from '@icon-park/vue-next';
import { CustomButton, CustomSwitch, SelectConfirmDialog } from '@/components/UI';
import ConfirmChoiceDialog from '@/components/UI/ConfirmChoiceDialog.vue';
import { getGitSettings, updateGitSettings } from '@/api/appConfig';
import { useGitStatus } from '@/plugins/git-sync/useGitStatus';
import { gitPull, gitPush, removeUntrackedFile, startAutoSync, stopAutoSync, switchGitBranch } from '@/plugins/git-sync/api';
import type { BranchSelection, PullResult } from '@/plugins/git-sync/api';
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
    case 'disabled':
      return t('settings.gitSync.status.ready') || '就绪';
    default:
      return t('settings.gitSync.status.ready') || '就绪';
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
const pullConfirmVisible = ref(false);
const pullConfirmOptions = ref({
  title: '',
  message: '',
  primaryText: '',
  secondaryText: '',
  type: 'info' as const
});
let pullConfirmResolve: ((v: 'primary' | 'secondary' | 'close') => void) | null = null;
const branchSelectVisible = ref(false);
const branchSelection = ref<BranchSelection | null>(null);
const selectedBranch = ref('main');
const branchOverwriteVisible = ref(false);
const pendingBranchSwitch = ref('');
const pendingUntrackedFiles = ref<string[]>([]);

const branchSelectOptions = computed(() => {
  const branches = branchSelection.value?.available_branches?.length
    ? branchSelection.value.available_branches
    : ['main'];
  return branches.map((branch) => ({
    label: branch === 'main' ? `${branch}（主分支）` : branch,
    value: branch
  }));
});

const branchSelectMessage = computed(() => {
  if (!branchSelection.value) return '请选择要同步的分支';
  return `${branchSelection.value.reason}\n当前分支：${branchSelection.value.current_branch || '未知'}；建议选择：${branchSelection.value.recommended_branch}`;
});

const branchOverwriteMessage = computed(() => {
  const files = pendingUntrackedFiles.value.map((file) => `- ${file}`).join('\n');
  return `目标分支会覆盖以下未跟踪文件。选择“使用目标分支文件”会先删除这些本地未跟踪文件，再切换到 ${pendingBranchSwitch.value || '目标'} 分支。\n\n${files}`;
});

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

// const showPullConfirm = () => {
//   pullConfirmOptions.value = {
//     title: t('settings.gitSync.pullNowTitle'),
//     message: t('settings.gitSync.pullNowMessage'),
//     primaryText: t('common.confirm'),
//     secondaryText: t('common.cancel'),
//     type: 'info'
//   };
//   pullConfirmVisible.value = true;
//   return new Promise<'primary' | 'secondary' | 'close'>((resolve) => {
//     pullConfirmResolve = resolve;
//   });
// };

const handlePullConfirmResult = (result: 'primary' | 'secondary' | 'close') => {
  pullConfirmVisible.value = false;
  if (pullConfirmResolve) {
    pullConfirmResolve(result);
    pullConfirmResolve = null;
  }
};

const requestBranchSelection = (selection: BranchSelection) => {
  branchSelection.value = selection;
  selectedBranch.value = selection.recommended_branch || 'main';
  branchSelectVisible.value = true;
};

const extractUntrackedFilesFromError = (error: unknown): string[] => {
  const message = String(error);
  const marker = 'would be overwritten by checkout:';
  const markerIndex = message.indexOf(marker);
  if (markerIndex < 0) return [];

  const tail = message.slice(markerIndex + marker.length);
  const endIndex = tail.search(/Please move|Aborting|Error:/);
  const fileBlock = endIndex >= 0 ? tail.slice(0, endIndex) : tail;

  return fileBlock
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter((line) => line && !line.startsWith('Please ') && !line.startsWith('Aborting'));
};

const switchBranchWithPrompt = async (branch: string) => {
  try {
    await switchGitBranch(branch);
    await refreshStatus();
    modal.msg(`已切换到 ${branch} 分支`, 'success', 'bottom-right');
    return true;
  } catch (error) {
    const untrackedFiles = extractUntrackedFilesFromError(error);
    if (untrackedFiles.length > 0) {
      pendingBranchSwitch.value = branch;
      pendingUntrackedFiles.value = untrackedFiles;
      branchSelectVisible.value = false;
      branchOverwriteVisible.value = true;
      return false;
    }

    throw error;
  }
};

const handleBranchChange = async (branch: string) => {
  isSaving.value = true;
  try {
    await switchBranchWithPrompt(branch);
  } catch (error) {
    logger.error('[GitSync] 切换分支失败', error);
    showFriendlyError(error);
  } finally {
    isSaving.value = false;
  }
};

const handleBranchOverwriteConfirm = async () => {
  const branch = pendingBranchSwitch.value;
  const files = [...pendingUntrackedFiles.value];
  if (!branch || files.length === 0) {
    branchOverwriteVisible.value = false;
    return;
  }

  isSaving.value = true;
  try {
    for (const file of files) {
      await removeUntrackedFile(file);
    }
    branchOverwriteVisible.value = false;
    pendingUntrackedFiles.value = [];
    pendingBranchSwitch.value = '';
    await switchGitBranch(branch);
    await refreshStatus();
    modal.msg(`已切换到 ${branch} 分支`, 'success', 'bottom-right');
  } catch (error) {
    logger.error('[GitSync] 处理未跟踪文件后切换分支失败', error);
    showFriendlyError(error);
  } finally {
    isSaving.value = false;
  }
};

const processPullResult = (result: PullResult) => {
  if (result.branch_selection) {
    requestBranchSelection(result.branch_selection);
    return;
  }

  if (result.success) {
    if (result.has_conflicts) {
      logger.info('[GitSync] Pull 检测到冲突，由全局对话框处理');
    } else if (result.files_updated === 0) {
      modal.msg(t('settings.gitSync.alreadyUpToDate'), 'success', 'bottom-right');
    } else {
      modal.msg(t('settings.gitSync.pullSuccess', { count: result.files_updated }), 'success', 'bottom-right');
    }
  } else {
    modal.msg(t('settings.gitSync.pullFailed'), 'error', 'top-right');
  }
};
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
    processPullResult(result);
  } catch (error) {
    logger.error('[GitSync] 手动 Pull 失败', error);
    showFriendlyError(error);
  } finally {
    isPulling.value = false;
  }
};

const handleBranchSelectConfirm = async (value: string | number) => {
  const branch = String(value || 'main');
  isPulling.value = true;
  try {
    const switched = await switchBranchWithPrompt(branch);
    if (!switched) return;
    branchSelectVisible.value = false;
    const result = await gitPull();
    processPullResult(result);
  } catch (error) {
    logger.error('[GitSync] 切换分支后 Pull 失败', error);
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
  await loadGitSettings();
  // 与标题栏共用同一状态：进入页面时刷新，保证「最后同步」时间与指示器一致
  await refreshSettings();
  await refreshStatus();
});
</script>
