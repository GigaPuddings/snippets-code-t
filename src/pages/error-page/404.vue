<template>
  <div className="flex flex-col bg-panel items-center justify-center h-full">
    <h1 className="text-4xl font-bold">404</h1>
    <p className="text-lg text-panel-text-secondary">{{ $t('errorPage.notFound') }}</p>
    <router-link to="/config/category/contentList" className="text-blue-500 hover:text-blue-600">{{ $t('errorPage.backHome') }}</router-link>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>

</style>
