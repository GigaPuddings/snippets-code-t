<template>
  <div class="scroll-edge-mask" aria-hidden="true"></div>
</template>

<style scoped lang="scss">
.scroll-edge-mask {
  @apply pointer-events-none absolute top-0 z-[2] h-4;

  inset-inline: 0 8px;
  background-color: color-mix(
    in srgb,
    var(--scroll-edge-surface) 84%,
    transparent
  );
  backdrop-filter: blur(4px);
  mask-image: linear-gradient(to bottom, #000, transparent);
}
</style>
