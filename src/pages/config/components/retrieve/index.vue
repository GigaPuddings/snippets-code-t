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
                placeholder="名称"
              />
              <div class="icon-wrapper">
                <Picture
                  v-if="!engine.icon"
                  class="engine-icon"
                  theme="outline"
                  size="26"
                  :strokeWidth="3"
                  strokeLinejoin="miter"
                  strokeLinecap="butt"
                />
                <img
                  v-else
                  class="engine-icon"
                  :src="engine.icon || ''"
                  :alt="engine.name"
                  @error="handleIconError(engine)"
                />
              </div>
              <el-input
                v-model="engine.keyword"
                class="engine-input"
                placeholder="快捷字词"
              />
            </div>

            <div class="item-center">
              <el-input
                v-model="engine.url"
                placeholder="网址格式（用“%s”代替搜索字词）"
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
import { invoke } from '@tauri-apps/api/core';

const store = useConfigurationStore();
const { searchEngines, defaultSearchEngines } = storeToRefs(store);

// 创建一个响应式的图标映射
const engineIconMap = reactive(new Map<string, string>());

// 获取图标的函数
const engineIcon = async (engine: SearchEngineConfig) => {
  if (engine.icon) {
    return engine.icon;
  }

  if (engine.url) {
    if (engineIconMap.has(engine.url)) {
      return engineIconMap.get(engine.url)!;
    }

    try {
      const url = new URL(engine.url);
      const hostname = url.hostname;
      const icon: string = await invoke('fetch_favicon', { url: hostname });
      engineIconMap.set(engine.url, icon);
      engine.icon = icon;
      return icon;
    } catch {
      return '';
    }
  }
  return '';
};

// 初始化所有搜索引擎的图标
const initializeIcons = async () => {
  for (const engine of searchEngines.value) {
    if (engine.url && !engine.icon) {
      await engineIcon(engine);
    }
  }
};

// 监听单个搜索引擎的 URL 变化
const watchEngineUrl = (engine: SearchEngineConfig) => {
  watch(
    () => engine.url,
    (newUrl) => {
      if (newUrl) {
        engine.icon = ''; // 清除旧图标
        engineIconMap.delete(newUrl); // 清除旧缓存
        engineIcon(engine); // 重新获取图标
      } else {
        engine.icon = '';
      }
    }
  );
};

// 监听搜索引擎数组的变化
watch(
  () => searchEngines.value,
  (engines) => {
    engines.forEach((engine) => {
      watchEngineUrl(engine);
    });
  },
  { deep: true, immediate: true }
);

// 组件挂载时初始化图标
onMounted(async () => {
  await initializeIcons();
});

// function useComputed<T extends object, R>(
//   fn: (arg: T) => R,
//   keyFn: (arg: T) => string
// ) {
//   const cache = new Map<string, ComputedRef<R>>();

//   return (arg: T) => {
//     const key = keyFn(arg);
//     if (!cache.has(key)) {
//       cache.set(
//         key,
//         computed(() => fn(arg))
//       );
//     }
//     return cache.get(key)!.value;
//   };
// }

const handleAdd = async () => {
  const newEngine: SearchEngineConfig = {
    id: uuid(),
    keyword: '',
    name: '',
    icon: '',
    url: '',
    enabled: false
  };
  await store.updateSearchEngines([...searchEngines.value, newEngine]);
};

const handleDelete = async (index: number) => {
  await store.updateSearchEngines(
    searchEngines.value.filter((_, idx) => idx !== index)
  );
};

// 只允许一个引擎为默认
const handleSwitch = async (index: number) => {
  const updatedEngines = searchEngines.value.map((engine, idx) => ({
    ...engine,
    enabled: idx === index ? engine.enabled : false
  }));
  await store.updateSearchEngines(updatedEngines);
};

// 选中的引擎，赋值给当前引擎
const handleSelect = async (index: number, name: string) => {
  const engine = defaultSearchEngines.value.find(
    (engine) => engine.name === name
  );

  if (engine) {
    const updatedEngines = [...searchEngines.value];
    updatedEngines[index] = { ...engine };
    await store.updateSearchEngines(updatedEngines);
  }
};

// 修改图标加载失败的处理逻辑
const handleIconError = async (engine: SearchEngineConfig) => {
  if (!engine.url) {
    engine.icon = '';
    return;
  }

  try {
    const url = new URL(engine.url);
    const hostname = url.hostname;
    const icon: string = await invoke('fetch_favicon', { url: hostname });
    engine.icon = icon;
  } catch {
    engine.icon =
      'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTEyIDJDNi40OCAyIDIgNi40OCAyIDEyczQuNDggMTAgMTAgMTAgMTAtNC40OCAxMC0xMFMxNy41MiAyIDEyIDJ6bTAgMThjLTQuNDEgMC04LTMuNTktOC04czMuNTktOCA4LTggOCAzLjU5IDggOC0zLjU5IDgtOCA4eiIvPjwvc3ZnPg==';
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
    @apply bg-panel rounded-lg p-4 mr-2;

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
      @apply max-h-[calc(100vh-7.4rem)] overflow-y-auto;

      .search-item {
        @apply flex items-center justify-between px-4 py-3 mb-4 last:mb-0 bg-content rounded-md;

        &.is-editing {
          @apply bg-gray-50;
        }

        .item-left {
          @apply flex items-center;

          .icon-wrapper {
            @apply flex items-center justify-center w-8 h-8 mx-2;

            .engine-icon {
              @apply w-6 h-6 object-contain rounded-md;
            }
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
