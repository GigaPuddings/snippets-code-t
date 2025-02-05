<template>
  <main class="content-list-container">
    <Splitter default-size="25%" min-size="25%" max-size="40%">
      <template #first>
        <div class="left-panel">
          <div class="content-search">
            <el-input
              v-model="searchText"
              placeholder="搜索..."
              @input="handleSearch"
            >
              <template #prefix>
                <Search
                  class="mr-1 text-[#282d32]"
                  theme="outline"
                  size="15"
                  :strokeWidth="2"
                />
              </template>
            </el-input>
            <el-tooltip effect="dark" content="新建片段" placement="bottom">
              <Plus
                class="content-search-add"
                theme="outline"
                size="18"
                :strokeWidth="2"
                @click="handleAddContent"
              />
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
          <router-view />
        </div>
      </template>
    </Splitter>
  </main>
</template>

<script setup lang="ts">
import { Search, Plus } from '@icon-park/vue-next';
import { getFragmentList, addFragment } from '@/database/fragment';
import { useRoute, useRouter } from 'vue-router';
import { useConfigurationStore } from '@/store';
import { debounce } from '@/utils';
const route = useRoute();
const router = useRouter();
const store = useConfigurationStore();
const searchText = ref('');

defineOptions({
  name: 'ContentList'
});

// 查询片段列表
const queryFragments = async (cid?: string) => {
  const result = await getFragmentList(
    cid ? Number(cid) : undefined,
    searchText.value
  );
  store.contents = result as ContentType[];
};

// // 监听路由参数变化，只在 cid 变化时获取列表
watch(
  () => route.fullPath,
  (newPath, _oldPath) => {
    // 从路径中提取 cid
    const newCid = route.params.cid as string;
    // 只有当路径中包含 contentList 时才触发（说明是点击分类导航）
    if (
      newPath.includes('/contentList') &&
      !newPath.includes('/content/') &&
      store.apps.length !== 0
    ) {
      queryFragments(newCid ? newCid : undefined);
    }
  },
  { immediate: true }
);

const handleSearch = debounce(() => {
  const cid = route.params.cid as string;
  queryFragments(cid);
}, 500);

const handleAddContent = async () => {
  const cid = route.params.cid as string;
  const id = await addFragment(cid ? Number(cid) : 0);

  // 搜索框清空
  searchText.value = '';
  // 内容列表页获取新id更新
  store.contents = await getFragmentList(cid ? Number(cid) : undefined, '');
  // 内容列表页获取新id更新
  router.replace(`/config/category/contentList/${cid ? cid : 0}/content/${id}`);
};

// 监听 store 中的内容变化，用于更新列表
watch(
  () => store.contents,
  () => {},
  { deep: true }
);
</script>

<style scoped lang="scss">
.content-list-container {
  @apply h-full text-xs;
}

.left-panel {
  @apply h-full bg-panel dark:bg-panel rounded-md ml-2 px-2 overflow-hidden;

  .content-search {
    @apply border-b border-panel flex justify-between items-center h-[40px];

    .content-search-add {
      @apply cursor-pointer rounded-md p-1 mr-2 text-panel dark:text-panel hover:bg-active dark:hover:bg-hover;
    }
  }

  .content-list {
    @apply h-[calc(100vh-106px)] overflow-y-auto;

    .content {
      @apply flex flex-col gap-2 p-2;
    }
  }
}

.right-panel {
  @apply h-full bg-panel dark:bg-panel rounded-md ml-2 overflow-hidden;
}
</style>
