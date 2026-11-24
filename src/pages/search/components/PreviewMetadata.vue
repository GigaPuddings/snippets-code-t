<template>
  <div class="flex gap-14">
    <div
      v-for="entry in entries"
      :key="entry.label"
      class="col-span-1 flex min-w-0 items-center gap-2 rounded-xl"
      :title="entry.value"
    >
      <span
        class="shrink-0 whitespace-nowrap text-[11px] leading-4 text-search-secondary"
      >
        {{ entry.label }}
      </span>
      <span class="min-w-0 flex-1 truncate text-sm leading-5 text-search">
        {{ entry.value }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  entries: ReadonlyArray<{ label: string; value: string }>;
}>();
</script>
