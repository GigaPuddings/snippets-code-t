<template>
  <div class="export-progress">
    <div class="spinner"></div>
    <div>{{ $t('screenRecorder.exporting') }}</div>
  </div>
</template>

<style scoped lang="scss">
.export-progress {
  @apply fixed left-1/2 top-1/2 z-[12] flex items-center gap-3 py-3.5 px-[18px] rounded-md shadow-recorder-overlay -translate-x-1/2 -translate-y-1/2;
  background: var(--recorder-overlay-bg);
  border: 1px solid var(--recorder-overlay-border);
  color: var(--recorder-text);
}

.spinner {
  @apply w-[18px] h-[18px] rounded-full;
  border: 2px solid color-mix(in srgb, var(--recorder-blue) 24%, transparent);
  border-top-color: var(--recorder-blue);
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
