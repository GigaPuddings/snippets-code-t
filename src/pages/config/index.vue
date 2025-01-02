<template>
  <router-view />
</template>
<script setup lang="ts">
import { useConfigurationStore } from '@/store'
import { getCategories } from '@/database/category'
import { getFragmentList } from '@/database/fragment'
const store = useConfigurationStore()

// 获取分类
const queryCategories = async () => {
  const res = await getCategories(store.categorySort)
  store.categories = res
  console.log('初始化分类', res)
}

// 获取片段列表
const queryFragments = async () => {
  const result = await getFragmentList()
  store.contents = result
  console.log('初始化片段列表', result)
}

onMounted(async () => {
  if (store.categories.length === 0 && store.contents.length === 0) {
    // 获取分类
    queryCategories()
    // 获取片段列表
    queryFragments()
  }
  console.log('Config mounted')
})

</script>
