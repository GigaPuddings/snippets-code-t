<template>
  <Transition name="editor-loader">
    <div v-if="show" class="editor-loading" role="status" aria-live="polite">
      <div class="snippet-loader" aria-hidden="true">
        <span class="snippet-loader__gutter">
          <i></i>
          <i></i>
          <i></i>
        </span>
        <span class="snippet-loader__activity">
          <i class="snippet-loader__line snippet-loader__line--one"></i>
          <i class="snippet-loader__line snippet-loader__line--two"></i>
          <i class="snippet-loader__line snippet-loader__line--three"></i>
          <i class="snippet-loader__cursor"></i>
        </span>
      </div>

      <div class="editor-loading__copy">
        <span>{{ $t('category.loadingEditor') }}</span>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
defineProps<{ show: boolean }>();
</script>

<style scoped lang="scss">
.editor-loading {
  @apply absolute inset-0 z-20 flex flex-col items-center justify-center;

  color: var(--panel-text);
  background: var(--editor-surface-bg);
}

.snippet-loader {
  @apply flex items-center;

  gap: 9px;
  width: 92px;
  height: 27px;
}

.snippet-loader__gutter {
  @apply flex h-[23px] w-[10px] shrink-0 flex-col items-start justify-between border-r;

  border-color: color-mix(in srgb, var(--panel-border) 72%, transparent);

  i {
    width: 3px;
    height: 2px;
    background: color-mix(
      in srgb,
      var(--panel-text-secondary) 42%,
      transparent
    );
    border-radius: 999px;
    animation: snippet-gutter 1.6s ease-in-out infinite;
  }

  i:nth-child(2) {
    animation-delay: 0.12s;
  }

  i:nth-child(3) {
    animation-delay: 0.24s;
  }
}

.snippet-loader__activity {
  @apply relative block;

  width: 72px;
  height: 25px;
}

.snippet-loader__line {
  @apply absolute left-0 block overflow-hidden rounded-full;

  height: 2px;
  background: color-mix(in srgb, var(--panel-border) 72%, transparent);

  &::after {
    @apply absolute inset-0 rounded-full;

    content: '';
    background: linear-gradient(
      90deg,
      color-mix(in srgb, var(--el-color-primary) 48%, transparent),
      var(--el-color-primary-light-3)
    );
    transform: scaleX(0);
    transform-origin: left center;
    animation: snippet-line 1.6s cubic-bezier(0.4, 0, 0.2, 1) infinite;
  }
}

.snippet-loader__line--one {
  top: 2px;
  width: 47px;
}

.snippet-loader__line--two {
  top: 11px;
  width: 66px;

  &::after {
    animation-delay: 0.12s;
  }
}

.snippet-loader__line--three {
  top: 20px;
  width: 36px;

  &::after {
    animation-delay: 0.24s;
  }
}

.snippet-loader__cursor {
  position: absolute;
  top: 7px;
  right: 0;
  width: 1.5px;
  height: 11px;
  background: var(--el-color-primary);
  border-radius: 999px;
  box-shadow: 0 0 5px
    color-mix(in srgb, var(--el-color-primary) 36%, transparent);
  animation: snippet-cursor 1.1s steps(1, end) infinite;
}

.editor-loading__copy {
  @apply mt-3 text-xs font-normal;

  color: var(--panel-text-secondary);
  letter-spacing: 0.015em;
  opacity: 0.78;
}

.editor-loader-enter-active,
.editor-loader-leave-active {
  transition: opacity 0.2s ease;
}

.editor-loader-enter-from,
.editor-loader-leave-to {
  opacity: 0;
}

@keyframes snippet-gutter {
  0%,
  100% {
    opacity: 0.35;
  }

  38%,
  64% {
    background: var(--el-color-primary-light-3);
    opacity: 1;
  }
}

@keyframes snippet-line {
  0% {
    opacity: 0;
    transform: scaleX(0);
  }

  38%,
  68% {
    opacity: 0.8;
    transform: scaleX(1);
  }

  100% {
    opacity: 0;
    transform: scaleX(1);
  }
}

@keyframes snippet-cursor {
  0%,
  46% {
    opacity: 1;
  }

  47%,
  100% {
    opacity: 0.2;
  }
}

@media (prefers-reduced-motion: reduce) {
  .snippet-loader__gutter i,
  .snippet-loader__line::after,
  .snippet-loader__cursor {
    animation: none;
  }

  .snippet-loader__gutter i {
    opacity: 0.55;
  }

  .snippet-loader__line::after {
    opacity: 0.62;
    transform: scaleX(0.72);
  }

  .snippet-loader__cursor {
    opacity: 0.55;
  }

  .editor-loader-enter-active,
  .editor-loader-leave-active {
    transition-duration: 0.01ms;
  }
}
</style>
