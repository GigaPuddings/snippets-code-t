<template>
  <AppMain />
</template>

<script setup lang="ts">
import { useConfigurationStore } from '@/store';

const store = useConfigurationStore();

onMounted(async () => {
  await store.initialize();
});
</script>

<style scoped></style>
