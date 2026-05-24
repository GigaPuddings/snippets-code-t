<template>
  <div class="loading-container">
    <div class="loading-content">
      <div class="logo-container">
        <img src="../../assets/128x128.png" alt="Logo" class="app-logo" />
      </div>
      <h1 class="app-title">Snippets Code</h1>
      <p class="loading-text">
        {{ $t('loading.title') }}
        <span class="dots">...</span>
      </p>
      <div class="loading-progress">
        <div class="progress-bar"></div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.loading-container {
  @apply flex justify-center items-center h-screen w-full rounded-xl bg-panel;

  overflow: hidden;
  border: 1px solid rgb(148 163 184 / 18%);
  box-shadow: 0 18px 48px rgb(15 23 42 / 12%);
}

.loading-content {
  @apply flex flex-col items-center justify-center text-center max-w-xs;
  width: 248px;
}

.logo-container {
  @apply mb-3 relative rounded-2xl p-3;
  background: rgb(59 130 246 / 8%);
  border: 1px solid rgb(59 130 246 / 12%);

  &::after {
    content: '';

    @apply absolute w-full h-full top-0 left-0 rounded-2xl -z-10;

    background: rgb(59 130 246 / 8%);
  }
}

.app-logo {
  @apply w-14 h-14 object-contain;

  filter: drop-shadow(0 8px 16px rgb(15 23 42 / 14%));
  animation: pulse 2.2s ease-in-out infinite;
}

.app-title {
  @apply text-xl font-semibold mb-2;

  color: #0f172a;
  letter-spacing: 0;
}

@keyframes pulse {
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.08);
  }

  100% {
    transform: scale(1);
  }
}

.loading-text {
  @apply text-xs text-panel-text-secondary mt-1 font-normal relative pb-1;

  animation: fadeIn 1.5s ease-in-out;

  &::after {
    content: '';
    background: linear-gradient(
      to right,
      rgb(59 130 246 / 0%),
      rgb(59 130 246 / 50%),
      rgb(59 130 246 / 0%)
    );
    transform: translateX(-50%);

    @apply absolute bottom-0 left-1/2 w-8 h-[2px] rounded-sm;
  }

  .dots {
    @apply inline-block;

    animation: dotAnimation 1.5s infinite;
  }
}

.loading-progress {
  @apply w-full mt-5 h-1 rounded-full overflow-hidden;
  background: rgb(59 130 246 / 10%);
}

.progress-bar {
  @apply h-full w-1/3 rounded-full;

  background: linear-gradient(
    90deg,
    rgb(59 130 246 / 30%),
    rgb(59 130 246 / 80%)
  );
  animation: progressAnimation 2s ease-in-out infinite;
}

@keyframes progressAnimation {
  0% {
    transform: translateX(-100%);
  }

  100% {
    transform: translateX(300%);
  }
}

@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: translateY(10px);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes dotAnimation {
  0% {
    opacity: 0.2;
  }

  20% {
    opacity: 1;
  }

  40% {
    opacity: 0.2;
  }

  60% {
    opacity: 0.2;
  }

  80% {
    opacity: 0.2;
  }

  100% {
    opacity: 0.2;
  }
}
</style>
