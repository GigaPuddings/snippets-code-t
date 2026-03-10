<template>
  <Transition name="fade">
    <div v-if="isLoading" class="loading-indicator">
      <div class="loading-content">
        <div class="loading-spinner"></div>
        <span>{{ message }}</span>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { logger } from '@/utils/logger';

const isLoading = ref(false);
const message = ref('正在加载...');

const handleRefreshStart = (event: Event) => {
  const customEvent = event as CustomEvent;
  logger.info('[LoadingIndicator] 🔔 收到 refresh-start 事件:', customEvent.detail);
  isLoading.value = true;
  message.value = customEvent.detail?.message || '正在同步数据...';
  logger.info('[LoadingIndicator] ✅ 加载指示器已显示:', message.value);
};

const handleRefreshEnd = () => {
  logger.info('[LoadingIndicator] 🔔 收到 refresh-end 事件');
  isLoading.value = false;
  logger.info('[LoadingIndicator] ✅ 加载指示器已隐藏');
};

onMounted(() => {
  logger.info('[LoadingIndicator] 🎬 组件已挂载，开始监听事件');
  window.addEventListener('refresh-start', handleRefreshStart);
  window.addEventListener('refresh-end', handleRefreshEnd);
  logger.info('[LoadingIndicator] ✅ 事件监听器已设置');
});

onUnmounted(() => {
  logger.info('[LoadingIndicator] 🛑 组件卸载，清理事件监听器');
  window.removeEventListener('refresh-start', handleRefreshStart);
  window.removeEventListener('refresh-end', handleRefreshEnd);
});
</script>

<style scoped lang="scss">
.loading-indicator {
  position: fixed;
  top: 16px;
  right: 16px;
  z-index: 9999;
  background: var(--bg-panel);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  padding: 12px 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.loading-content {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: var(--text-primary);
}

.loading-spinner {
  width: 20px;
  height: 20px;
  border: 2px solid var(--border-color);
  border-top-color: var(--primary-color);
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
