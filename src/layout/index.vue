<template>
  <!-- <Titlebar v-if="route.name !== 'Search'" /> -->
  <AppMain />
</template>

<script setup lang="ts">
import { useConfigurationStore } from "@/store";
import { uuid } from "@/utils";
import { invoke } from "@tauri-apps/api/core";

const store = useConfigurationStore()
// const route = useRoute()

onMounted(async () => {
  // 获取已安装应用并存储到store
  const apps = await invoke('get_installed_apps') as AppInfo[]
  console.log('本地应用', apps);
  store.apps = apps.map((app: AppInfo) => ({
    id: uuid(),
    title: app.app_name,
    content: app.app_path,
    type: 'app'
  }))
})
</script>

<style scoped>

</style>
