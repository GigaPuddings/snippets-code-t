<template>
  <div class="scroll-edge-mask" aria-hidden="true"></div>
</template>

<style scoped lang="scss">
@use '@/styles/scroll-edge';

.scroll-edge-mask {
  @include scroll-edge.mask;
}
</style>
