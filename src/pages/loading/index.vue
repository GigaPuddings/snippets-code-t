<template>
  <div class="loading-container">
    <div class="loading-content">
      <div class="logo-container">
        <img src="../../assets/128x128.png" alt="Logo" class="app-logo" />
      </div>
      <h1 class="app-title">Snippets Code</h1>
      <p class="loading-text">
        应用程序正在加载中
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
  @apply flex justify-center items-center h-screen w-full rounded-2xl;

  overflow: hidden;
  background: linear-gradient(
    135deg,
    rgb(23 23 37 / 95%) 0%,
    rgb(33 33 55 / 95%) 100%
  );
  backdrop-filter: blur(10px);
  box-shadow: 0 8px 32px rgb(0 0 0 / 15%);
}

.loading-content {
  @apply flex flex-col items-center justify-center -mt-4 text-center max-w-xs;
}

.logo-container {
  @apply mb-3 relative;

  &::after {
    content: '';

    @apply absolute w-full h-full top-0 left-0 rounded-full -z-10;

    background: radial-gradient(
      circle,
      rgb(59 130 246 / 15%) 0%,
      rgb(59 130 246 / 0%) 70%
    );
  }
}

.app-logo {
  @apply w-[70px] h-[70px] object-contain;

  filter: drop-shadow(0 4px 8px rgb(0 0 0 / 20%));
  animation: pulse 2s ease-in-out infinite;
}

.app-title {
  @apply text-2xl font-semibold mb-5 tracking-wide;

  text-shadow: 0 2px 10px rgb(255 255 255 / 10%);
  background: linear-gradient(to right, #fff, #e2e8f0);
  background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
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
  @apply text-sm text-gray-300/80 mt-6 font-normal tracking-wide relative pb-1;

  animation: fadeIn 1.5s ease-in-out;

  &::after {
    content: '';
    background: linear-gradient(
      to right,
      rgb(59 130 246 / 0%),
      rgb(59 130 246 / 60%),
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
  @apply w-full mt-6 h-1 bg-gray-700/30 rounded-full overflow-hidden;
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
