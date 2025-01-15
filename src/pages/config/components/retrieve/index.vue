<template>
  <main>
    <div class="retrieve-container">
      <div class="search-config">
        <div class="config-title">
          <h1 class="title-text">浏览器搜索设置</h1>
          <Add
            class="add-btn"
            theme="outline"
            size="22"
            :strokeWidth="3"
            @click="handleAdd"
          />
        </div>

        <div class="search-list">
          <div
            v-for="(engine, index) in searchEngines"
            :key="engine.id"
            class="search-item"
          >
            <div class="item-left">
              <el-input
                v-model="engine.name"
                class="keyword-input"
                placeholder="搜索名称"
              />
              <Picture
                v-if="!engine.keyword"
                class="engine-icon"
                theme="outline"
                size="26"
                :strokeWidth="3"
                strokeLinejoin="miter"
                strokeLinecap="butt"
              />
              <img v-else class="engine-icon" :src="engine.icon" alt="" />
              <el-input
                v-model="engine.keyword"
                class="engine-input"
                placeholder="搜索关键字"
              />
            </div>

            <div class="item-center">
              <el-input
                v-model="engine.url"
                :placeholder="`https://example.com/search?q={query}`"
                class="url-input"
              />
            </div>

            <div class="item-right">
              <el-switch
                v-model="engine.enabled"
                class="enable-switch"
                inline-prompt
                active-text="默认"
                inactive-text="关闭"
                active-color="#4b94f8"
                inactive-color="#dddddd"
                @change="handleSwitch(index)"
              />
              <el-select
                class="engine-select"
                v-model="engine.name"
                placeholder="默认配置"
                clearable
                @change="handleSelect(index, engine.name)"
              >
                <el-option
                  v-for="item in defaultSearchEngines"
                  :key="item.id"
                  :label="item.name"
                  :value="item.name"
                />
              </el-select>
              <Reduce
                class="delete-icon"
                theme="outline"
                size="22"
                :strokeWidth="3"
                strokeLinejoin="miter"
                strokeLinecap="butt"
                @click="handleDelete(index)"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { Add, Reduce, Picture } from '@icon-park/vue-next';
import { useConfigurationStore } from '@/store';
import { uuid } from '@/utils';
import { storeToRefs } from 'pinia';

const store = useConfigurationStore();
const { searchEngines, defaultSearchEngines } = storeToRefs(store);

const handleAdd = () => {
  const newEngine: SearchEngineConfig = {
    id: uuid(),
    keyword: '',
    name: '',
    icon: '',
    url: '',
    enabled: false
  };
  searchEngines.value.push(newEngine);
};

const handleDelete = (index: number) => {
  searchEngines.value = searchEngines.value.filter((_, idx) => idx !== index);
};

// 只允许一个引擎为默认
const handleSwitch = (index: number) => {
  searchEngines.value.forEach((engine, idx) => {
    if (idx !== index) {
      engine.enabled = false;
    }
  });
};

// 选中的引擎，赋值给当前引擎
const handleSelect = (index: number, name: string) => {
  const engine = defaultSearchEngines.value.find(
    (engine) => engine.name === name
  );

  if (engine) {
    searchEngines.value[index].id = engine.id;
    searchEngines.value[index].icon = engine.icon;
    searchEngines.value[index].url = engine.url;
    searchEngines.value[index].keyword = engine.keyword;
    searchEngines.value[index].name = engine.name;
    searchEngines.value[index].enabled = engine.enabled;
  }
};
</script>

<style scoped lang="scss">
.retrieve-container {
  @apply w-[calc(100vw-4rem)] h-full overflow-hidden;

  :deep(.el-input__wrapper) {
    @apply border !bg-panel rounded-md;
  }

  .search-config {
    @apply bg-white rounded-lg p-4 mr-2;

    .config-title {
      @apply flex items-center justify-between mb-2 mr-4;

      .title-text {
        @apply text-lg font-medium;
      }

      .add-btn {
        @apply cursor-pointer;
      }
    }

    .search-list {
      .search-item {
        @apply flex items-center justify-between px-4 py-3 mb-4 last:mb-0 bg-content rounded-md;

        &.is-editing {
          @apply bg-gray-50;
        }

        .item-left {
          @apply flex items-center;

          .engine-icon {
            @apply w-6 h-6 mx-2 cursor-pointer;
          }

          .engine-name {
            @apply text-sm;
          }

          .keyword-input {
            @apply w-[90px] shrink-0;
          }

          .engine-input {
            @apply shrink-0 w-[140px];
          }
        }

        .item-center {
          @apply flex-1 mx-4;
        }

        .item-right {
          @apply flex items-center gap-4;

          .engine-select {
            @apply w-[140px] border rounded-md !bg-panel;
          }

          .delete-icon {
            @apply cursor-pointer;
          }
        }
      }
    }
  }
}
</style>
