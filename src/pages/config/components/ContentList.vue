<template>
  <div class="content-list-container">
    <Splitter
      default-size="25%"
      min-size="25%"
      max-size="40%"
    >
      <template #first>
        <div class="left-panel">
          <div class="content-search">
            <el-input
              v-model="searchText" 
              placeholder="搜索..."
              @change="handleSearch"
            >
              <template #prefix>
                <Search class="mr-1 text-[#282d32]" theme="outline" size="15" :strokeWidth="2" />
              </template>
            </el-input>
            <el-tooltip effect="dark" content="新建片段" placement="bottom" :show-arrow="false">
              <Plus class="content-search-add" theme="outline" size="18" :strokeWidth="2" @click="handleAddContent" />
            </el-tooltip>
          </div>
          <div class="content-list">
            <div class="content">
              <ContentItem 
                v-for="item in store.contents" 
                :key="item.id" 
                :content="item"
                v-memo="[item.id, item.title, store.contents]"
              />
            </div>
          </div>
        </div>
      </template>
      <template #second>
        <div class="right-panel">
          <Titlebar />
          <router-view />
        </div>
      </template>
    </Splitter>
  </div>
</template>

<script setup lang="ts">
import { Search, Plus } from '@icon-park/vue-next'
import { getFragmentList, addFragment } from '@/database/fragment'
import { useRoute, useRouter } from 'vue-router'
import { useConfigurationStore } from '@/store'
import { dayjs } from 'element-plus'
const route = useRoute()
const router = useRouter()
const store = useConfigurationStore()
const searchText = ref('')

defineOptions({
  name: 'ContentList'
})


// 查询片段列表
const queryFragments = async (cid?: string) => {
  const result = await getFragmentList(cid ? Number(cid) : undefined, searchText.value)
  console.log('result', result)
  store.contents = result as ContentType[]
}

// // 监听路由参数变化，只在 cid 变化时获取列表
watch(() => route.fullPath, (newPath, _oldPath) => {
  // 从路径中提取 cid
  const newCid = route.params.cid as string
  // 只有当路径中包含 contentList 时才触发（说明是点击分类导航）
  if (newPath.includes('/contentList') && !newPath.includes('/content/') && newCid !== '0') {
    console.log('分类切换，重新获取列表:', newCid)
    queryFragments(newCid ? newCid : undefined)
  }
}, { immediate: true })

const handleSearch = () => {
  const cid = route.params.cid as string
  queryFragments(cid)
}

const handleAddContent = async () => {
  const cid = route.params.cid as string
  const id = await addFragment(cid ? Number(cid) : 0)
  const category = store.categories.find(item => item.id === Number(cid))
  store.contents.unshift({ id: id, title: '未命名片段', content: '', category_id: Number(cid), category_name: category?.name, created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'), type: 'text' })
  // 重定向
  router.push(`/config/category/contentList/${cid ? cid : 0}/content/${id}`)
}

// 监听 store 中的内容变化，用于更新列表
watch(() => store.contents, () => {}, { deep: true })
</script>

<style scoped lang="scss">
.content-list-container {
  @apply bg-white dark:bg-[#282d32] h-screen text-xs text-slate-700;
}

.left-panel {
  @apply h-screen dark:border-r-[#000] overflow-hidden;
  .content-search {
    @apply border-b dark:border-b-[#43444e] dark:bg-[#282d32] flex justify-between items-center h-[40px];
    .content-search-add {
      @apply cursor-pointer rounded-md p-1 mr-2 text-[#282d32] dark:text-[#adb0b8] hover:bg-slate-200 dark:hover:bg-gray-800;
    } 
  }
  .content-list {
    @apply h-[calc(100vh-56px)] overflow-y-auto px-2 mx-1 my-2;
    .content {
      @apply flex flex-col gap-2 py-2;
    }
  }
}
</style>
