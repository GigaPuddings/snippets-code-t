<template>
  <div class="config">
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </router-view>
    
    <!-- 全局冲突对话框 -->
    <GitConflictDialog
      v-model="showConflictDialog"
      :conflict-files="conflictFiles"
      :untracked-files="untrackedFiles"
      @confirm="handleConflictResolution"
      @cancel="handleConflictCancel"
      @escape="handleConflictEscape"
      ref="conflictDialogRef"
    />
    
    <!-- 手动合并对话框：同时包含冲突文件与未跟踪文件，以便都能展示远程/本地对比 -->
    <GitManualMerge
      v-model="showManualMergeDialog"
      :conflict-files="mergeFileList"
      @complete="handleManualMergeComplete"
      @cancel="handleManualMergeCancel"
      @back="handleManualMergeBack"
      @escape="handleManualMergeEscape"
      ref="manualMergeRef"
    />

    <!-- 仓库不存在对话框 -->
    <ConfirmChoiceDialog
      v-model="showRepoNotFoundDialog"
      :title="t('settings.gitSync.repoNotFoundTitle')"
      :message="t('settings.gitSync.repoNotFoundMessage', { url: repoNotFoundInfo.remote_url, operation: repoNotFoundInfo.operation })"
      :primary-text="t('settings.gitSync.repoNotFoundReconfig')"
      :secondary-text="t('settings.gitSync.repoNotFoundIgnore')"
      type="warning"
      @primary="handleRepoNotFoundReconfig"
      @secondary="handleRepoNotFoundIgnore"
      @close="handleRepoNotFoundIgnore"
    />

    <!-- 自定义确认框 -->
    <ConfirmChoiceDialog
      v-model="confirmDialogVisible"
      :title="confirmDialogOptions.title"
      :message="confirmDialogOptions.message"
      :primary-text="confirmDialogOptions.primaryText"
      :secondary-text="confirmDialogOptions.secondaryText"
      :type="confirmDialogOptions.type"
      @primary="handleConfirmResult('primary')"
      @secondary="handleConfirmResult('secondary')"
      @close="handleConfirmResult('close')"
    />
  </div>
</template>

<script setup lang="ts">
import { getCurrentWindow } from '@tauri-apps/api/window';
import { listen } from '@tauri-apps/api/event';
import { useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';
import { startAutoSync, stopAutoSync, getAutoSyncStatus, pauseAutoSync, resumeAutoSync, forcePush, forcePull, resolveConflictsBatch, ConflictStrategy } from '@/api/git';
import { getGitSettings } from '@/api/appConfig';
import { readMarkdownFile } from '@/api/markdown';
import { logger } from '@/utils/logger';
import { setupGitEventListeners, cleanupGitEventListeners, initCleanupCache, initGitSync, checkShouldInitialize, ensureWorkspaceGitignore, type GitEventListeners } from '@/utils/app-init';
import GitConflictDialog from '@/components/GitConflictDialog/index.vue';
import GitManualMerge from '@/components/GitManualMerge/index.vue';
import ConfirmChoiceDialog from '@/components/UI/ConfirmChoiceDialog.vue';
import modal from '@/utils/modal';

type ConfirmResult = 'primary' | 'secondary' | 'close';

const { t } = useI18n();

defineOptions({
  name: 'Config'
});

const router = useRouter();

// 监听导航到设置页面的事件
let unlisten: (() => void) | null = null;
let unlistenFragment: (() => void) | null = null;
let unlistenCheckNav: (() => void) | null = null;
let unlistenShow: (() => void) | null = null;
let unlistenHide: (() => void) | null = null;
let unlistenOpenFromSystem: (() => void) | null = null;
let unlistenConflict: (() => void) | null = null;
let unlistenRepoNotFound: (() => void) | null = null;

// Git 事件监听器
let gitListeners: GitEventListeners | null = null;

// 冲突对话框状态
const showConflictDialog = ref(false);
const showManualMergeDialog = ref(false);
// 仓库不存在对话框状态
const showRepoNotFoundDialog = ref(false);
const repoNotFoundInfo = ref<{ remote_url: string; operation: string }>({ remote_url: '', operation: '' });
const conflictFiles = ref<string[]>([]);
const untrackedFiles = ref<string[]>([]); // 未跟踪文件（会被远程覆盖）
/** 手动合并时使用的文件列表：冲突文件 + 未跟踪文件，保证“仅未跟踪”时也有数据 */
const mergeFileList = computed(() => [...conflictFiles.value, ...untrackedFiles.value]);
const conflictDialogRef = ref<InstanceType<typeof GitConflictDialog> | null>(null);
const manualMergeRef = ref<InstanceType<typeof GitManualMerge> | null>(null);

/** 防止冲突事件重复处理的标志 */
let hasConflictBeenHandled = false;

// 自定义确认框
const confirmDialogVisible = ref(false);
const confirmDialogOptions = ref({
  title: '',
  message: '',
  primaryText: '',
  secondaryText: '',
  type: 'info' as 'info' | 'warning' | 'danger'
});
let confirmResolve: ((v: ConfirmResult) => void) | null = null;

const showConfirm = (opts: typeof confirmDialogOptions.value) => {
  confirmDialogOptions.value = { ...confirmDialogOptions.value, ...opts };
  confirmDialogVisible.value = true;
  return new Promise<ConfirmResult>((resolve) => {
    confirmResolve = resolve;
  });
};

const handleConfirmResult = (result: ConfirmResult) => {
  confirmDialogVisible.value = false;
  if (confirmResolve) {
    confirmResolve(result);
    confirmResolve = null;
  }
};

// 解码文件路径（处理后端返回的转义字符）
function decodeConflictFilePath(path: string): string {
  try {
    // 移除首尾的引号
    let decoded = path.replace(/^"|"$/g, '');
    
    // 检查是否包含八进制转义序列
    if (!decoded.includes('\\')) {
      return decoded;
    }
    
    // 将字符串转换为字节数组
    const bytes: number[] = [];
    let i = 0;
    
    while (i < decoded.length) {
      if (decoded[i] === '\\' && i + 1 < decoded.length) {
        // 检查是否是八进制转义序列 \ddd
        if (i + 3 < decoded.length && /[0-7]{3}/.test(decoded.substring(i + 1, i + 4))) {
          const oct = decoded.substring(i + 1, i + 4);
          bytes.push(parseInt(oct, 8));
          i += 4;
        } else {
          // 其他转义字符（如 \n, \t, \\）
          const nextChar = decoded[i + 1];
          switch (nextChar) {
            case 'n':
              bytes.push(10); // \n
              break;
            case 't':
              bytes.push(9); // \t
              break;
            case 'r':
              bytes.push(13); // \r
              break;
            case '\\':
              bytes.push(92); // \\
              break;
            case '"':
              bytes.push(34); // \"
              break;
            default:
              // 未知转义，保留原字符
              bytes.push(decoded.charCodeAt(i + 1));
          }
          i += 2;
        }
      } else {
        // 普通 ASCII 字符
        bytes.push(decoded.charCodeAt(i));
        i++;
      }
    }
    
    // 使用 TextDecoder 解码 UTF-8 字节序列
    const uint8Array = new Uint8Array(bytes);
    const textDecoder = new TextDecoder('utf-8');
    const result = textDecoder.decode(uint8Array);
    
    logger.info('[Config] 文件路径解码:', {
      原始: path,
      移除引号: decoded,
      字节数组: bytes,
      解码结果: result
    });
    
    return result;
  } catch (error) {
    logger.error(`[Config] 解码文件路径失败: ${error} 原始路径: ${path}`);
    // 如果解码失败，返回移除引号后的原始路径
    return path.replace(/^"|"$/g, '').replace(/\\/g, '');
  }
}

// 将冲突状态保存到 sessionStorage，以便页面重载后恢复
const saveConflictState = () => {
  if (conflictFiles.value.length > 0) {
    sessionStorage.setItem('git-conflict-state', JSON.stringify({
      conflictFiles: conflictFiles.value,
      timestamp: Date.now()
    }));
  }
};

// 恢复冲突状态
const restoreConflictState = () => {
  const savedState = sessionStorage.getItem('git-conflict-state');
  if (savedState) {
    try {
      const { conflictFiles: files, timestamp } = JSON.parse(savedState);
      // 只恢复 10 秒内的状态
      if (Date.now() - timestamp < 10000) {
        conflictFiles.value = files;
        showConflictDialog.value = true;
        logger.info('[Config] 恢复冲突状态，显示对话框');
      } else {
        // 过期的状态，清除
        sessionStorage.removeItem('git-conflict-state');
      }
    } catch (error) {
      logger.error('[Config] 恢复冲突状态失败:', error);
      sessionStorage.removeItem('git-conflict-state');
    }
  }
};

// 处理冲突解决策略选择
const handleConflictResolution = async (strategy: string) => {
  if (!conflictDialogRef.value) return;
  
  // 重置冲突处理标志，允许后续冲突事件再次触发
  hasConflictBeenHandled = false;
  
  conflictDialogRef.value.setLoading(true);
  
  try {
    // 检查是否有未跟踪文件
    const hasUntrackedFiles = untrackedFiles.value.length > 0;
    
    if (strategy === 'force-push') {
      const confirmResult = await showConfirm({
        title: t('settings.gitSync.confirmForcePush'),
        message: t('settings.gitSync.confirmForcePushMessage'),
        primaryText: t('common.confirm'),
        secondaryText: t('common.cancel'),
        type: 'warning'
      });
      if (confirmResult !== 'primary') throw 'cancel';
      
      // 执行强制推送
      await forcePush();
      modal.msg(t('settings.gitSync.forcePushSuccess'), 'success', 'bottom-right');
      showConflictDialog.value = false;
      
      // 清除冲突状态
      sessionStorage.removeItem('git-conflict-state');
      conflictFiles.value = [];
      untrackedFiles.value = [];
      
      // 刷新数据（merge 状态下工作目录可能被 git 修改过）
      window.dispatchEvent(new CustomEvent('refresh-data', { 
        detail: { source: 'force-push' } 
      }));
      
      // 恢复自动同步
      try {
        await resumeAutoSync();
        logger.info('[Config] 冲突已解决，已恢复自动同步');
      } catch (error) {
        logger.error('[Config] 恢复自动同步失败:', error);
      }
      
    } else if (strategy === 'force-pull') {
      const confirmResult = await showConfirm({
        title: t('settings.gitSync.confirmForcePull'),
        message: t('settings.gitSync.confirmForcePullMessage'),
        primaryText: t('common.confirm'),
        secondaryText: t('common.cancel'),
        type: 'warning'
      });
      if (confirmResult !== 'primary') throw 'cancel';
      
      // 如果有未跟踪文件，先删除它们
      if (hasUntrackedFiles) {
        const { invoke } = await import('@tauri-apps/api/core');
        for (const file of untrackedFiles.value) {
          try {
            await invoke('remove_untracked_file', { filePath: file });
            logger.info('[Config] 已删除未跟踪文件:', file);
          } catch (error) {
            logger.warn(`[Config] 删除未跟踪文件失败: ${file} ${error}`);
          }
        }
      }
      
      // 执行强制拉取
      await forcePull();
      modal.msg(t('settings.gitSync.forcePullSuccess'), 'success', 'bottom-right');
      showConflictDialog.value = false;
      
      // 清除冲突状态
      sessionStorage.removeItem('git-conflict-state');
      conflictFiles.value = [];
      untrackedFiles.value = [];
      
      // 刷新数据
      window.dispatchEvent(new CustomEvent('refresh-data', { 
        detail: { source: 'force-pull' } 
      }));
      
      // 恢复自动同步
      try {
        await resumeAutoSync();
        logger.info('[Config] 冲突已解决，已恢复自动同步');
      } catch (error) {
        logger.error('[Config] 恢复自动同步失败:', error);
      }
      
    } else if (strategy === 'manual-merge') {
      // 显示手动合并对话框（不跳转）
      showConflictDialog.value = false;
      showManualMergeDialog.value = true;
    }
  } catch (error) {
    if (error !== 'cancel') {
      logger.error('[Config] 冲突处理失败:', error);
      const errorMsg = String(error).replace(/^Error:\s*/, '');
      modal.msg(`${t('settings.gitSync.conflictResolutionFailed')}: ${errorMsg}`, 'error', 'top-right');
    }
  } finally {
    if (conflictDialogRef.value) {
      conflictDialogRef.value.setLoading(false);
    }
  }
};

// 按 ESC 关闭冲突弹框：仅关闭，不弹出「取消冲突处理」二次确认
const handleConflictEscape = () => {
  showConflictDialog.value = false;
  hasConflictBeenHandled = false;
};

// 取消冲突处理（点击取消按钮时弹出二次确认）
const handleConflictCancel = async () => {
  const result = await showConfirm({
    title: t('settings.gitSync.cancelConflictTitle'),
    message: t('settings.gitSync.cancelConflictMessage'),
    primaryText: t('settings.gitSync.handleLater'),
    secondaryText: t('settings.gitSync.resumeSync'),
    type: 'warning'
  });

  showConflictDialog.value = false;
  // 重置冲突处理标志，允许后续冲突事件再次触发
  hasConflictBeenHandled = false;

  if (result === 'secondary') {
    sessionStorage.removeItem('git-conflict-state');
    conflictFiles.value = [];
    try {
      await resumeAutoSync();
      modal.msg(t('settings.gitSync.autoSyncResumed'), 'info', 'bottom-right');
      logger.info('[Config] 用户选择恢复自动同步');
    } catch (error) {
      logger.error('[Config] 恢复自动同步失败:', error);
    }
  } else {
    logger.info('[Config] 用户选择稍后处理冲突');
  }
};

// 处理仓库不存在 - 重新配置
const handleRepoNotFoundReconfig = async () => {
  showRepoNotFoundDialog.value = false;
  logger.info('[Config] 用户选择重新配置仓库');

  // 导航到 Git 同步设置页面
  router.push('/config/category/settings?tab=gitSync');
};

// 处理仓库不存在 - 忽略
const handleRepoNotFoundIgnore = async () => {
  showRepoNotFoundDialog.value = false;
  repoNotFoundInfo.value = { remote_url: '', operation: '' };
  logger.info('[Config] 用户选择忽略仓库不存在错误');

  // 不恢复自动同步，让用户手动处理
  modal.msg(t('settings.gitSync.repoNotFoundIgnored'), 'info', 'bottom-right');
};

// 完成手动合并
const handleManualMergeComplete = async (selections: Record<number, 'remote' | 'local'>, editedContents: Record<number, string>) => {
  if (!manualMergeRef.value) return;
  
  // 重置冲突处理标志，允许后续冲突事件再次触发
  hasConflictBeenHandled = false;
  
  manualMergeRef.value.setLoading(true);
  
  try {
    // 如果有编辑过的本地内容，先保存到文件（使用与手动合并一致的列表）
    const files = mergeFileList.value;
    for (const [indexStr, content] of Object.entries(editedContents)) {
      const index = parseInt(indexStr);
      if (selections[index] === 'local' && content) {
        const filePath = files[index];
        logger.info('[Config] 保存编辑后的本地内容:', filePath);
        
        // 使用 invoke 直接调用后端命令写入文件
        const { invoke } = await import('@tauri-apps/api/core');
        await invoke('write_conflict_file', {
          filePath: filePath,
          content: content
        });
        
        logger.info('[Config] 已保存编辑后的内容到:', filePath);
      }
    }
    
    // 构建解决方案列表（与手动合并使用的文件顺序一致）
    const resolutions = files.map((file, index) => [
      file,
      selections[index] === 'remote' ? ConflictStrategy.KeepRemote : ConflictStrategy.KeepLocal
    ] as [string, ConflictStrategy]);
    
    // 批量解决冲突（后端会自动恢复自动同步）
    const result = await resolveConflictsBatch(resolutions);
    
    logger.info(`[Config] 手动合并成功，已解决 ${result.resolved_count} 个冲突`);
    
    modal.msg(t('settings.gitSync.mergeSuccess'), 'success', 'bottom-right');
    showManualMergeDialog.value = false;
    
    // 清除冲突状态
    sessionStorage.removeItem('git-conflict-state');
    conflictFiles.value = [];
    untrackedFiles.value = [];
    
    // 刷新数据
    window.dispatchEvent(new CustomEvent('refresh-data', { 
      detail: { source: 'manual-merge' } 
    }));
    
    // 恢复自动同步（后端已自动恢复，这里只是记录日志）
    logger.info('[Config] 手动合并完成，自动同步已由后端恢复');
  } catch (error) {
    logger.error('[Config] 手动合并失败:', error);
    const errorMsg = String(error).replace(/^Error:\s*/, '');
    modal.msg(`${t('settings.gitSync.mergeFailed')}: ${errorMsg}`, 'error', 'top-right');
  } finally {
    if (manualMergeRef.value) {
      manualMergeRef.value.setLoading(false);
    }
  }
};

// 取消手动合并
const handleManualMergeCancel = async () => {
  // 询问用户是否稍后处理
  const result = await showConfirm({
    title: t('settings.gitSync.cancelConflictTitle'),
    message: t('settings.gitSync.cancelConflictMessage'),
    primaryText: t('settings.gitSync.handleLater'),
    secondaryText: t('settings.gitSync.resumeSync'),
    type: 'warning'
  });

  showManualMergeDialog.value = false;
  // 重置冲突处理标志，允许后续冲突事件再次触发
  hasConflictBeenHandled = false;

  if (result === 'secondary') {
    sessionStorage.removeItem('git-conflict-state');
    conflictFiles.value = [];
    untrackedFiles.value = [];
    try {
      await resumeAutoSync();
      modal.msg(t('settings.gitSync.autoSyncResumed'), 'info', 'bottom-right');
      logger.info('[Config] 用户从手动合并中选择恢复自动同步');
    } catch (error) {
      logger.error('[Config] 恢复自动同步失败:', error);
    }
  } else {
    logger.info('[Config] 用户选择稍后处理手动合并');
  }
};

// 返回到冲突对话框
const handleManualMergeBack = () => {
  showManualMergeDialog.value = false;
  showConflictDialog.value = true;
  logger.info('[Config] 用户从手动合并返回到冲突对话框');
};

// 按 ESC 关闭手动合并弹框：仅关闭，不弹出「取消冲突处理」二次确认
const handleManualMergeEscape = () => {
  showManualMergeDialog.value = false;
  hasConflictBeenHandled = false;
};

// 检查是否有待处理的导航
const normalizePendingFragmentId = (id: unknown) => String(id ?? '').replace(/^markdown:/i, '');

const checkPendingNavigation = () => {
  const pendingNav = localStorage.getItem('pendingNavigation');

  if (pendingNav) {
    try {
      const { fragmentId, categoryId, timestamp } = JSON.parse(pendingNav);

      // 检查时间戳，只处理 5 秒内的导航请求
      if (Date.now() - timestamp < 5000) {
        // 清除标记
        localStorage.removeItem('pendingNavigation');
        // 导航到对应的片段 - 修正路由路径（需要对文件路径进行编码）
        const targetPath = `/config/category/contentList/${categoryId}/content/${encodeURIComponent(normalizePendingFragmentId(fragmentId))}`;
        router.push(targetPath);
      } else {
        // 过期的导航请求，清除
        localStorage.removeItem('pendingNavigation');
      }
    } catch (err) {
      console.error('Failed to parse pending navigation:', err);
      localStorage.removeItem('pendingNavigation');
    }
  }
};

const checkPendingSnippetOpen = () => {
  const pendingSnippet = localStorage.getItem('pendingSnippetOpen');

  if (pendingSnippet) {
    try {
      const { fragmentId, content, categoryId, timestamp } = JSON.parse(pendingSnippet);

      if (Date.now() - timestamp < 5000) {
        localStorage.removeItem('pendingSnippetOpen');
        const targetPath = `/config/category/contentList/${categoryId}/content/${encodeURIComponent(normalizePendingFragmentId(fragmentId))}`;
        router.push({
          path: targetPath,
          query: content ? { preview: '1' } : undefined
        });
      } else {
        localStorage.removeItem('pendingSnippetOpen');
      }
    } catch (err) {
      console.error('Failed to parse pending snippet open:', err);
      localStorage.removeItem('pendingSnippetOpen');
    }
  }
};

// 启动自动同步（如果启用）
const startAutoSyncIfEnabled = async () => {
  try {
    const gitSettings = await getGitSettings();
    
    if (gitSettings.enabled && gitSettings.auto_sync) {
      // 检查是否已经在运行
      const isRunning = await getAutoSyncStatus();
      
      if (!isRunning) {
        await startAutoSync();
        logger.info('[Config] 窗口显示，已启动自动同步');
      } else {
        logger.info('[Config] 窗口显示，自动同步已在运行');
      }
    }
  } catch (error) {
    logger.error('[Config] 启动自动同步失败:', error);
  }
};

// 停止自动同步
const stopAutoSyncOnHide = async () => {
  try {
    const isRunning = await getAutoSyncStatus();
    
    if (isRunning) {
      await stopAutoSync();
      logger.info('[Config] 窗口隐藏，已停止自动同步');
    }
  } catch (error) {
    logger.error('[Config] 停止自动同步失败:', error);
  }
};

// 通知后端前端已准备完成
onMounted(async () => {
  const initStart = performance.now();
  logger.info('[Config] ========== Config 页面初始化开始 ==========', {
    ts: Date.now()
  });

  nextTick(() => {
    logger.info('[Config] emit config_ready after first render', {
      initCostMs: Math.round(performance.now() - initStart),
      ts: Date.now()
    });
    getCurrentWindow().emit('config_ready');
    checkPendingNavigation();
    checkPendingSnippetOpen();
  });
  
  // 1. 设置 Git 事件监听器
  gitListeners = await setupGitEventListeners(t);
  logger.info('[Config] ✅ Git 事件监听器已设置');

  // 2. 优先设置冲突事件监听器（在 Git 同步之前），确保能收到启动时的冲突事件
  try {
    unlistenConflict = await listen<{ conflict_files: string[]; untracked_files?: string[] }>('git-conflict-detected', async (event) => {
      // 防止重复处理：已经显示过冲突对话框就不再处理
      if (hasConflictBeenHandled && showConflictDialog.value) {
        logger.info('[Config] 冲突事件已处理，跳过重复事件');
        return;
      }
      
      logger.info('[Config] 收到冲突事件:', event.payload);
      
      // 标记已处理，防止后续事件重复弹框
      hasConflictBeenHandled = true;
      
      // 解码文件路径
      conflictFiles.value = event.payload.conflict_files.map(decodeConflictFilePath);
      // 处理未跟踪文件
      untrackedFiles.value = (event.payload.untracked_files || []).map(decodeConflictFilePath);
      logger.info('[Config] 解码后的冲突文件:', conflictFiles.value);
      logger.info('[Config] 解码后的未跟踪文件:', untrackedFiles.value);
      
      // 保存冲突状态到 sessionStorage
      saveConflictState();
      
      // 暂停自动同步
      try {
        await pauseAutoSync();
        logger.info('[Config] 已暂停自动同步，等待冲突解决');
      } catch (error) {
        logger.error('[Config] 暂停自动同步失败:', error);
      }
      
      // 直接显示冲突对话框
      logger.info('[Config] 即将显示冲突对话框, showConflictDialog:', showConflictDialog.value);
      showConflictDialog.value = true;
      logger.info('[Config] 显示冲突对话框后, showConflictDialog:', showConflictDialog.value);
      logger.info('[Config] 显示冲突对话框');
    });
    logger.info('[Config] ✅ Git 冲突事件监听器已设置（优先）');
  } catch (error) {
    logger.error('[Config] 设置冲突事件监听器失败:', error);
  }

  // 设置仓库不存在事件监听器
  try {
    unlistenRepoNotFound = await listen<{ remote_url: string; operation: string }>('git-repo-not-found', async (event) => {
      logger.info('[Config] 收到仓库不存在事件:', event.payload);

      // 保存仓库不存在信息
      repoNotFoundInfo.value = {
        remote_url: event.payload.remote_url,
        operation: event.payload.operation
      };

      // 暂停自动同步
      try {
        await pauseAutoSync();
        logger.info('[Config] 已暂停自动同步，等待仓库重新配置');
      } catch (error) {
        logger.error('[Config] 暂停自动同步失败:', error);
      }

      // 显示仓库不存在对话框
      showRepoNotFoundDialog.value = true;
    });
    logger.info('[Config] ✅ Git 仓库不存在事件监听器已设置');
  } catch (error) {
    logger.error('[Config] 设置仓库不存在事件监听器失败:', error);
  }

  // 3. 确保工作区存在 .gitignore（有工作区且无此文件时自动创建，不依赖 shouldInit）
  await ensureWorkspaceGitignore();

  // 4. 检查是否应该执行初始化（防抖机制）
  const shouldInit = await checkShouldInitialize();
  if (shouldInit) {
    // 5. 清理缓存
    await initCleanupCache();
    // 6. Git 同步初始化
    const shouldRefresh = await initGitSync(t);
    if (shouldRefresh) {
      // 触发数据刷新
      setTimeout(() => {
        window.dispatchEvent(new CustomEvent('refresh-data', { 
          detail: { source: 'startup-pull' } 
        }));
      }, 500);
    }
  }
  
  const initCostMs = Math.round(performance.now() - initStart);
  logger.info('[Config] ========== Config 页面初始化完成 ==========', {
    initCostMs,
    ts: Date.now()
  });
  

  // 监听导航到设置页面的事件
  const currentWindow = getCurrentWindow();
  
  unlisten = await currentWindow.listen('navigate-to-settings', () => {
    // 导航到设置页面
    router.push('/config/category/settings');
  });
  
  // 监听导航到片段详情的事件
  unlistenFragment = await currentWindow.listen('navigate-to-fragment', (event: any) => {
    const { fragmentId, categoryId } = event.payload;
    // 导航到对应的分类和片段 - 修正路由路径（需要对文件路径进行编码）
    router.push(`/config/category/contentList/${categoryId}/content/${encodeURIComponent(fragmentId)}`);
  });

  // 监听「从系统打开 Markdown 文件」事件（双击/文件关联打开）
  // 后端会在 config_ready 后派发，避免窗口尚未就绪
  unlistenOpenFromSystem = await currentWindow.listen('open-markdown-from-system', async (event: any) => {
    const filePath = event.payload?.file_path as string | undefined;
    if (!filePath) return;
    try {
      const file = await readMarkdownFile(filePath);
      const fragmentId = file.filePath || filePath;
      router.push(`/config/category/contentList/${file.categoryId}/content/${encodeURIComponent(fragmentId)}`);
    } catch (e: any) {
      modal.msg(`${t('common.failed') || 'Failed'}: ${e?.message || e}`, 'error', 'bottom-right');
    }
  });
  
  // 监听窗口显示事件，每次显示时检查待处理的导航
  await currentWindow.onFocusChanged(({ payload: focused }) => {
    if (focused) {
      checkPendingNavigation();
    }
  });
  
  // 监听自定义的导航检查事件（从预览窗口或搜索窗口触发）
  unlistenCheckNav = await currentWindow.listen('check-pending-navigation', () => {
    checkPendingNavigation();
    checkPendingSnippetOpen();
  });
  
  // 监听窗口显示事件（启动自动同步）
  unlistenShow = await currentWindow.listen('tauri://show', async () => {
    logger.info('[Config] 窗口显示事件触发');
    await startAutoSyncIfEnabled();
  });
  
  // 监听窗口隐藏事件（停止自动同步）
  unlistenHide = await currentWindow.listen('tauri://hide', async () => {
    logger.info('[Config] 窗口隐藏事件触发');
    await stopAutoSyncOnHide();
  });
  
  // 窗口首次加载时，如果窗口可见，启动自动同步
  const isVisible = await currentWindow.isVisible();
  if (isVisible) {
    await startAutoSyncIfEnabled();
  }
  
  // 恢复冲突状态（如果页面重载）
  restoreConflictState();
});

// 清理事件监听器
onUnmounted(async () => {
  logger.info('[Config] 🧹 开始清理 Config 页面资源...');
  
  // 清理 Git 事件监听器
  if (gitListeners) {
    cleanupGitEventListeners(gitListeners);
    logger.info('[Config] ✅ Git 事件监听器已清理');
  }
  
  // 清理其他事件监听器
  if (unlisten) {
    unlisten();
  }
  if (unlistenFragment) {
    unlistenFragment();
  }
  if (unlistenCheckNav) {
    unlistenCheckNav();
  }
  if (unlistenShow) {
    unlistenShow();
  }
  if (unlistenHide) {
    unlistenHide();
  }
  if (unlistenOpenFromSystem) {
    unlistenOpenFromSystem();
  }
  if (unlistenConflict) {
    unlistenConflict();
  }
  if (unlistenRepoNotFound) {
    unlistenRepoNotFound();
  }

  // 窗口卸载时停止自动同步
  await stopAutoSyncOnHide();

  logger.info('[Config] ✅ Config 页面资源清理完成');
});
</script>

<style scoped lang="scss">
.config {
  @apply relative z-50 bg-content h-full flex justify-start;
}
</style>
