<template>
  <svg
    viewBox="0 0 84 32"
    class="h-7 w-20 max-w-[42%] shrink text-primary"
    role="img"
    :aria-label="label"
  >
    <title>{{ label }}</title>
    <defs>
      <linearGradient
        :id="gradientId"
        x2="0"
        y2="1"
        gradientUnits="objectBoundingBox"
      >
        <stop stop-color="currentColor" stop-opacity=".22" />
        <stop offset="1" stop-color="currentColor" stop-opacity="0" />
      </linearGradient>
    </defs>
    <path :d="`${line} V32 H1 Z`" :fill="`url(#${gradientId})`" />
    <path
      :d="line"
      fill="none"
      stroke="currentColor"
      stroke-width="1.6"
      stroke-linecap="round"
    />
  </svg>
</template>

<script setup lang="ts">
import { computed, useId } from 'vue';
import { useI18n } from 'vue-i18n';

const props = defineProps<{ counts: number[] }>();
const { t } = useI18n();
const gradientId = useId();
const label = computed(() =>
  t('workbenchHome.creationTrend', { counts: props.counts.join(' · ') })
);
const line = computed(() => {
  const peak = Math.max(1, ...props.counts);
  const step = 82 / (props.counts.length - 1);
  const heights = props.counts.map((count) => 28 - (count / peak) * 24);
  let path = `M1 ${heights[0]}`;
  for (let i = 1; i < heights.length; i++) {
    const x = 1 + i * step;
    const mid = x - step / 2;
    path += ` C${mid} ${heights[i - 1]},${mid} ${heights[i]},${x} ${heights[i]}`;
  }
  return path;
});
</script>
