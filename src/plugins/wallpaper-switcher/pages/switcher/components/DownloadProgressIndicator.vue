<script setup lang="ts">
import { computed, useId } from 'vue';
import { useI18n } from 'vue-i18n';
import type { DownloadProgress } from '../../../composables/useWallhaven';

const props = withDefaults(
  defineProps<{
    progress: DownloadProgress;
    variant?: 'card' | 'preview';
  }>(),
  { variant: 'card' }
);

const { t } = useI18n();
const gradientId = `wallpaper-progress-${useId().replaceAll(':', '')}`;
const circumference = 2 * Math.PI * 22;
const percent = computed<number | null>(() => {
  if (props.progress.phase === 'complete') return 100;
  if (!props.progress.total || props.progress.total <= 0) return null;
  return Math.min(
    100,
    Math.max(
      0,
      Math.round((props.progress.downloaded / props.progress.total) * 100)
    )
  );
});

const formatBytes = (value: number): string => {
  if (value < 1024) return `${value} B`;
  if (value < 1024 * 1024) return `${(value / 1024).toFixed(1)} KB`;
  return `${(value / 1024 / 1024).toFixed(1)} MB`;
};

const statusLabel = computed(() => {
  if (props.progress.phase === 'preparing')
    return t('wallpaperSwitcher.preparingDownload');
  if (props.progress.phase === 'complete')
    return t('wallpaperSwitcher.downloadReady');
  if (percent.value !== null) return `${percent.value}%`;
  return t('wallpaperSwitcher.downloading');
});

const sizeLabel = computed(() => {
  if (props.progress.total && props.progress.total > 0) {
    return `${formatBytes(props.progress.downloaded)} / ${formatBytes(props.progress.total)}`;
  }
  if (props.progress.downloaded > 0) {
    return t('wallpaperSwitcher.downloadedSize', {
      size: formatBytes(props.progress.downloaded)
    });
  }
  return t('wallpaperSwitcher.waitingForSize');
});

const dashOffset = computed(() =>
  percent.value === null
    ? circumference * 0.76
    : circumference * (1 - percent.value / 100)
);
</script>

<template>
  <div class="download-progress-overlay" :class="`is-${variant}`">
    <div class="download-progress-panel">
      <div
        class="download-progress-visual"
        :class="{ 'is-indeterminate': percent === null }"
      >
        <svg viewBox="0 0 52 52" aria-hidden="true">
          <defs>
            <linearGradient :id="gradientId" x1="0" y1="0" x2="1" y2="1">
              <stop
                offset="0"
                stop-color="var(--wallpaper-progress-start, #93c5fd)"
              />
              <stop
                offset="0.52"
                stop-color="var(--wallpaper-primary, #818cf8)"
              />
              <stop
                offset="1"
                stop-color="var(--wallpaper-progress-end, #c084fc)"
              />
            </linearGradient>
          </defs>
          <circle class="download-progress-track" cx="26" cy="26" r="22" />
          <circle
            class="download-progress-value"
            cx="26"
            cy="26"
            r="22"
            :stroke="`url(#${gradientId})`"
            :stroke-dasharray="circumference"
            :stroke-dashoffset="dashOffset"
          />
        </svg>
        <span class="download-progress-pulse"></span>
      </div>
      <div class="download-progress-copy">
        <strong>{{ statusLabel }}</strong>
        <span>{{ sizeLabel }}</span>
      </div>
    </div>
  </div>
</template>
