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

        <section class="git-records-section">
          <div class="git-records-head">
            <div>
              <div class="summarize-label-title">Git 记录</div>
              <div class="summarize-label-desc">最近 10 条提交，可查看同步状态并恢复单个文件</div>
            </div>
            <CustomButton size="small" :loading="isLoadingRecords" @click="loadGitRecords">
              刷新
            </CustomButton>
          </div>

          <div v-if="gitRecords.length" class="git-records-list">
            <div v-for="record in gitRecords" :key="record.commit_hash" class="git-record-item">
              <div class="git-record-main">
                <span class="git-record-state" :class="{ synced: record.synced }">
                  {{ record.synced ? '已同步' : '待推送' }}
                </span>
                <span class="git-record-message" :title="record.message">{{ record.message }}</span>
                <span class="git-record-time">{{ record.time }}</span>
              </div>
              <div class="git-record-meta">
                <span>{{ record.short_hash }}</span>
                <span>{{ record.author }}</span>
              </div>
              <div v-if="record.files.length" class="git-record-files">
                <button
                  v-for="file in record.files.slice(0, 6)"
                  :key="`${record.commit_hash}-${file.file_path}`"
                  class="git-record-file"
                  type="button"
                  :title="`${file.status} ${file.file_path}`"
                  @click="requestRestoreGitRecordFile(record, file)"
                >
                  <span class="git-record-file-status">{{ file.status }}</span>
                  <span class="git-record-file-name">{{ file.file_name }}</span>
                </button>
                <span v-if="record.files.length > 6" class="git-record-more">
                  +{{ record.files.length - 6 }}
                </span>
              </div>
            </div>
          </div>
          <div v-else class="git-records-empty">
            {{ isLoadingRecords ? '正在加载记录...' : (gitRecordsLoaded ? '暂无 Git 记录' : '点击刷新查看最近 10 条提交') }}
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

    <ConfirmChoiceDialog
      v-model="restoreConfirmVisible"
      title="恢复文件"
      :message="restoreConfirmMessage"
      primary-text="确认恢复"
      secondary-text="取消"
      type="warning"
      @primary="handleRestoreConfirm"
      @secondary="restoreConfirmVisible = false"
      @close="restoreConfirmVisible = false"
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
import { gitPull, gitPush, getGitRecords, removeUntrackedFile, restoreGitRecordFile, startAutoSync, stopAutoSync, switchGitBranch } from '@/plugins/git-sync/api';
import type { BranchSelection, GitRecord, GitRecordFile, PullResult } from '@/plugins/git-sync/api';
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
const gitRecords = ref<GitRecord[]>([]);
const isLoadingRecords = ref(false);
const gitRecordsLoaded = ref(false);
const restoreConfirmVisible = ref(false);
const pendingRestore = ref<{ record: GitRecord; file: GitRecordFile } | null>(null);

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

const restoreConfirmMessage = computed(() => {
  const target = pendingRestore.value;
  if (!target) return '';
  return `确认将文件恢复到这条记录之前的版本？\n\n- 文件：${target.file.file_path}\n- 记录：${target.record.short_hash} ${target.record.message}\n\n当前文件内容会被覆盖，恢复后会出现在待同步列表中。`;
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

const loadGitRecords = async () => {
  isLoadingRecords.value = true;
  try {
    gitRecords.value = await getGitRecords(10);
    gitRecordsLoaded.value = true;
  } catch (error) {
    logger.error('[GitSync] 加载 Git 记录失败', error);
    showFriendlyError(error);
  } finally {
    isLoadingRecords.value = false;
  }
};

const requestRestoreGitRecordFile = (record: GitRecord, file: GitRecordFile) => {
  pendingRestore.value = { record, file };
  restoreConfirmVisible.value = true;
};

const handleRestoreConfirm = async () => {
  const target = pendingRestore.value;
  if (!target) return;

  try {
    await restoreGitRecordFile(target.record.commit_hash, target.file.file_path);
    modal.msg('文件已恢复，请检查待同步记录后再推送', 'success', 'bottom-right');
    pendingRestore.value = null;
    await refreshStatus();
  } catch (error) {
    logger.error('[GitSync] 恢复 Git 文件失败', error);
    showFriendlyError(error);
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

<style scoped lang="scss">
.settings-panel {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  min-width: 0;
  color: var(--categories-text-color);
}

.panel-header {
  flex-shrink: 0;
  padding: 4px 0 12px;
}

.panel-title {
  margin: 0;
  font-size: 18px;
  font-weight: 700;
  line-height: 1.35;
  color: var(--categories-text-color);
}

.panel-content {
  flex: 1;
  min-height: 0;
  padding-right: 8px;
  overflow-y: auto;
}

.settings-section-title {
  margin: 18px 0 8px;
  font-size: 15px;
  font-weight: 700;
  line-height: 1.35;
  color: var(--categories-text-color);
}

.summarize-section {
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: 16px;
  align-items: center;
  min-height: 72px;
  padding: 12px 0;
  border-bottom: 1px solid var(--categories-border-color);
}

.summarize-label {
  min-width: 0;
}

.summarize-label-title {
  font-size: 15px;
  font-weight: 500;
  line-height: 1.35;
  color: var(--categories-text-color);
}

.summarize-label-desc {
  margin-top: 4px;
  font-size: 13px;
  line-height: 1.4;
  color: var(--categories-info-text-color);
}

.summarize-input-wrapper {
  display: inline-flex;
  align-items: center;
  justify-content: flex-end;
  min-width: 120px;
  max-width: 360px;
  gap: 8px;
  color: var(--categories-text-color);
}

.summarize-input-wrapper :deep(.el-input-number) {
  width: 128px;
}

.summarize-input-wrapper :deep(.el-input-number__decrease),
.summarize-input-wrapper :deep(.el-input-number__increase) {
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.summarize-input-wrapper :deep(.custom-switch) {
  flex-shrink: 0;
}

.summarize-input-wrapper :deep(.custom-button),
.summarize-input-wrapper :deep(button) {
  flex-shrink: 0;
}

.sync-status-panel {
  display: flex;
  align-items: stretch;
  gap: 14px;
  min-height: 78px;
  padding: 14px;
  margin-bottom: 14px;
  border: 1px solid var(--categories-border-color);
  border-radius: 8px;
  background: var(--categories-content-bg);
}

.sync-status-panel__left {
  display: flex;
  align-items: center;
  min-width: 0;
  gap: 12px;
}

.sync-status-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  flex-shrink: 0;
  border-radius: 999px;
  color: var(--el-color-primary);
  background: rgba(var(--el-color-primary-rgb), 0.1);
}

.sync-status-info {
  min-width: 0;
}

.sync-status-label {
  font-size: 15px;
  font-weight: 700;
  color: var(--categories-text-color);
}

.sync-status-detail {
  margin-top: 3px;
  font-size: 13px;
  color: var(--categories-info-text-color);
}

.sync-status-panel__divider {
  width: 1px;
  background: var(--categories-border-color);
}

.sync-status-panel__right {
  flex: 1;
  min-width: 0;
}

.sync-pending-files-header {
  margin-bottom: 6px;
  font-size: 12px;
  font-weight: 700;
  color: var(--categories-text-color);
}

.sync-pending-files-list {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.sync-pending-file-item {
  max-width: 180px;
  padding: 3px 8px;
  border: 1px solid var(--categories-border-color);
  border-radius: 6px;
  font-size: 12px;
  color: var(--categories-text-color);
  background: var(--categories-panel-bg);
}

.file-name {
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.git-records-section {
  @apply my-3 rounded border border-panel p-3;
  background: var(--categories-content-bg);
}

.git-records-head,
.git-record-main,
.git-record-meta,
.git-record-files {
  @apply flex items-center;
}

.git-records-head {
  @apply justify-between gap-3 mb-3;
}

.git-records-list {
  @apply flex flex-col gap-2;
}

.git-record-item {
  @apply rounded border border-panel px-3 py-2;
  background: var(--categories-panel-bg);
}

.git-record-main {
  @apply gap-2 min-w-0;
}

.git-record-state {
  @apply shrink-0 rounded px-2 py-0.5 text-[11px];
  color: #b45309;
  background: rgba(245, 158, 11, 0.14);

  &.synced {
    color: #047857;
    background: rgba(16, 185, 129, 0.14);
  }
}

.git-record-message {
  @apply min-w-0 flex-1 truncate text-sm text-panel;
}

.git-record-time,
.git-record-meta {
  @apply text-xs;
  color: var(--categories-info-text-color);
}

.git-record-meta {
  @apply gap-3 mt-1;
}

.git-record-files {
  @apply flex-wrap gap-1 mt-2;
}

.git-record-file {
  @apply inline-flex max-w-[180px] items-center gap-1 rounded border border-panel px-2 py-1 text-xs cursor-pointer;
  background: transparent;
  color: var(--categories-text-color);

  &:hover {
    background: var(--categories-panel-bg-hover);
  }
}

.git-record-file-status {
  @apply font-medium;
  color: var(--el-color-primary);
}

.git-record-file-name {
  @apply truncate;
}

.git-record-more,
.git-records-empty {
  @apply text-xs;
  color: var(--categories-info-text-color);
}

@media (max-width: 720px) {
  .summarize-section {
    grid-template-columns: 1fr;
    gap: 10px;
    align-items: start;
  }

  .summarize-input-wrapper {
    justify-content: flex-start;
    max-width: 100%;
  }
}
</style>
