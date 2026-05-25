<template>
  <div class="export-progress">
    <div class="spinner"></div>
    <div>{{ $t('screenRecorder.exporting') }}</div>
  </div>
</template>

<style scoped lang="scss">
.export-progress {
  position: fixed;
  left: 50%;
  top: 50%;
  z-index: 12;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 18px;
  color: #1e2a3a;
  background: rgba(255, 255, 255, 0.96);
  border: 1px solid rgba(210, 217, 226, 0.9);
  border-radius: 7px;
  box-shadow: 0 14px 30px rgba(20, 35, 61, 0.18);
  transform: translate(-50%, -50%);
}

.spinner {
  width: 18px;
  height: 18px;
  border: 2px solid #d5e2f6;
  border-top-color: #2f82ff;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
