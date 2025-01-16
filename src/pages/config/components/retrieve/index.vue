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
                  :src="engineIcon(engine)"
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

const store = useConfigurationStore();
const { searchEngines, defaultSearchEngines } = storeToRefs(store);

// 创建一个响应式的图标映射
const engineIconMap = reactive(new Map<string, string>());

// 获取图标的函数
const engineIcon = (engine: SearchEngineConfig) => {
  // 如果已经有图标，直接返回
  if (engine.icon) {
    return engine.icon;
  }

  // 如果有 URL 且已经缓存，返回缓存的图标
  if (engine.url) {
    if (engineIconMap.has(engine.url)) {
      return engineIconMap.get(engine.url)!;
    }

    try {
      const url = new URL(engine.url);
      const hostname = url.hostname;
      const icon = `https://${hostname}/favicon.ico`;
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
const initializeIcons = () => {
  searchEngines.value.forEach((engine) => {
    if (engine.url && !engine.icon) {
      engineIcon(engine);
    }
  });
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
onMounted(() => {
  initializeIcons();
});

function useComputed<T extends object, R>(
  fn: (arg: T) => R,
  keyFn: (arg: T) => string
) {
  const cache = new Map<string, ComputedRef<R>>();

  return (arg: T) => {
    const key = keyFn(arg);
    if (!cache.has(key)) {
      cache.set(
        key,
        computed(() => fn(arg))
      );
    }
    return cache.get(key)!.value;
  };
}

const handleAdd = () => {
  const newEngine: SearchEngineConfig = {
    id: uuid(),
    keyword: '',
    name: '',
    icon: '',
    url: '',
    enabled: false
  };
  store.updateSearchEngines([...searchEngines.value, newEngine]);
};

const handleDelete = (index: number) => {
  store.updateSearchEngines(
    searchEngines.value.filter((_, idx) => idx !== index)
  );
};

// 只允许一个引擎为默认
const handleSwitch = (index: number) => {
  const updatedEngines = searchEngines.value.map((engine, idx) => ({
    ...engine,
    enabled: idx === index ? engine.enabled : false
  }));
  store.updateSearchEngines(updatedEngines);
};

// 选中的引擎，赋值给当前引擎
const handleSelect = (index: number, name: string) => {
  const engine = defaultSearchEngines.value.find(
    (engine) => engine.name === name
  );

  if (engine) {
    const updatedEngines = [...searchEngines.value];
    updatedEngines[index] = { ...engine };
    store.updateSearchEngines(updatedEngines);
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

    // 创建所有可能的图标源
    const iconSources = [
      `https://${hostname}/favicon.ico`,
      `https://www.google.com/s2/favicons?domain=${hostname}&sz=32`, // 将 Google 的源提前，因为兼容性最好
      `https://api.iowen.cn/favicon/${hostname}.png`,
      `https://favicon.cccyun.cc/${hostname}`,
      `https://icon.horse/icon/${hostname}`,
      `https://www.splitbee.io/favicon/${hostname}`
    ];

    // 找到当前图标在数组中的索引
    const currentIndex = iconSources.indexOf(engine.icon);

    // 如果是第一次加载失败（currentIndex === -1）或者还有下一个源可以尝试
    if (currentIndex === -1) {
      // 第一次失败，直接使用 Google 的图标服务
      engine.icon = iconSources[1]; // Google favicon service
    } else if (currentIndex < iconSources.length - 1) {
      // 尝试下一个图标源
      engine.icon = iconSources[currentIndex + 1];
    } else {
      // 所有源都尝试过了，设置为空
      engine.icon = '';
    }
  } catch {
    engine.icon = '';
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
              @apply w-6 h-6 object-contain;
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
