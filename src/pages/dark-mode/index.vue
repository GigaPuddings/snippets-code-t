<template>
  <div
    class="dark-mode-container select-none rounded-lg"
    :class="{ dark: isDark }"
  >
    <!-- 标题栏 -->
    <div
      class="title-bar fixed top-0 left-0 right-0 z-10 flex items-center justify-between p-2"
      data-tauri-drag-region
    >
      <div class="flex items-center gap-3">
        <div class="text-2xl">🌙</div>
        <h1 class="m-0 text-xl font-semibold">系统主题</h1>
      </div>
      <div
        @click="closeWindow"
        class="close-btn flex h-8 w-8 cursor-pointer items-center justify-center rounded-full text-xl transition-colors"
      >
        ×
      </div>
    </div>

    <!-- 主要内容 -->
    <div class="content mx-auto max-w-2xl px-5 pt-20 pb-5">
      <!-- 启用开关 -->
      <div class="section">
        <div class="section-header mb-2.5 flex items-center justify-between">
          <h2 class="m-0 text-lg font-semibold">总开关</h2>
          <CustomSwitch
            v-model="config.enabled"
            @change="handleEnabledChange"
            active-text="启用"
            inactive-text="禁用"
          />
        </div>
        <p class="m-0 text-sm opacity-80">启用后将根据设置自动切换Windows系统主题</p>
      </div>

      <!-- 当前状态 -->
      <div class="section" v-if="config.enabled">
        <div class="status-card rounded-lg p-4">
          <div class="status-item mb-3 flex justify-between">
            <span class="opacity-80">当前系统主题：</span>
            <span
              class="font-medium"
              :class="[currentTheme ? 'text-violet-400' : 'text-amber-400']"
            >
              {{ currentTheme ? '深色模式' : '浅色模式' }}
            </span>
          </div>
          <div class="status-item mb-4 flex justify-between">
            <span class="opacity-80">调度器状态：</span>
            <span
              class="font-medium"
              :class="[schedulerRunning ? 'text-emerald-400' : 'text-red-400']"
            >
              {{ schedulerRunning ? '运行中' : '已停止' }}
            </span>
          </div>
          <button
            @click="toggleThemeManually"
            class="manual-toggle-btn w-full rounded-md py-2 px-4 text-sm transition-all"
          >
            手动切换主题
          </button>
        </div>
      </div>

      <!-- 模式选择 -->
      <div class="section" v-if="config.enabled">
        <h2 class="m-0 mb-4 text-lg font-semibold">切换模式</h2>
        <div class="mode-selector grid grid-cols-2 gap-4">
          <label class="mode-option block cursor-pointer">
            <input
              type="radio"
              value="Auto"
              v-model="config.mode"
              @change="handleModeChange"
              class="hidden"
            />
            <div
              class="mode-content rounded-lg border-2  p-4 transition-all"
            >
              <div class="mode-title mb-2 font-semibold">🌅 自动模式</div>
              <div class="mode-desc text-xs opacity-80">根据日出日落时间自动切换</div>
            </div>
          </label>
          <label class="mode-option block cursor-pointer">
            <input
              type="radio"
              value="Manual"
              v-model="config.mode"
              @change="handleModeChange"
              class="hidden"
            />
            <div
              class="mode-content rounded-lg border-2  p-4 transition-all"
            >
              <div class="mode-title mb-2 font-semibold">⏰ 手动模式</div>
              <div class="mode-desc text-xs opacity-80">自定义切换时间</div>
            </div>
          </label>
        </div>
      </div>

      <!-- 位置信息 -->
      <div class="section" v-if="config.enabled && config.mode === 'Auto'">
        <h2 class="m-0 mb-4 text-lg font-semibold">位置信息</h2>
        <div class="location-card rounded-lg bg-white/5 p-4">
          <div v-if="locationLoading" class="loading text-center font-style: italic opacity-80">
            获取位置信息中...
          </div>
          <div v-else-if="locationInfo" class="location-info">
            <div class="location-item mb-3 flex justify-between">
              <span class="opacity-80">位置：</span>
              <span class="font-medium"
                >{{ locationInfo.city }}, {{ locationInfo.region }},
                {{ locationInfo.country }}</span
              >
            </div>
            <div class="location-item mb-3 flex justify-between">
              <span class="opacity-80">时区：</span>
              <span class="font-medium">{{ locationInfo.timezone }}</span>
            </div>
            <div class="location-item mb-3 flex justify-between">
              <span class="opacity-80">坐标：</span>
              <span class="font-medium"
                >{{ locationInfo.latitude.toFixed(4) }},
                {{ locationInfo.longitude.toFixed(4) }}</span
              >
            </div>
          </div>
            <button
              @click="refreshLocation"
              class="refresh-btn mt-2 w-full rounded-md py-2.5 px-5 text-sm transition-all disabled:cursor-not-allowed disabled:opacity-60"
              :disabled="locationLoading"
            >
            {{ locationLoading ? '获取中...' : '刷新位置' }}
          </button>
        </div>
      </div>

      <!-- 日出日落时间 -->
      <div class="section" v-if="config.enabled && config.mode === 'Auto' && sunTimes">
        <h2 class="m-0 mb-4 text-lg font-semibold">日出日落时间</h2>
        <div class="sun-times-card rounded-lg bg-white/5 p-4">
          <div class="sun-time-item mb-3 flex items-center justify-start gap-3">
            <div class="sun-icon text-2xl">🌅</div>
            <div class="sun-info flex-1">
              <div class="sun-label text-xs opacity-80">日出时间</div>
              <div class="sun-value text-lg font-semibold">{{ sunTimes.sunrise }}</div>
            </div>
          </div>
          <div class="sun-time-item mb-3 flex items-center justify-start gap-3">
            <div class="sun-icon text-2xl">🌇</div>
            <div class="sun-info flex-1">
              <div class="sun-label text-xs opacity-80">日落时间</div>
              <div class="sun-value text-lg font-semibold">{{ sunTimes.sunset }}</div>
            </div>
          </div>
          <div
            class="current-period mt-4 flex justify-between border-t border-white/10 pt-4"
          >
            <span class="opacity-80">当前时段：</span>
            <span
              class="font-medium"
              :class="[sunTimes.is_day ? 'text-amber-400' : 'text-violet-400']"
            >
              {{ sunTimes.is_day ? '白天（浅色模式）' : '夜晚（深色模式）' }}
            </span>
          </div>
        </div>
      </div>

      <!-- 自定义时间 -->
      <div class="section" v-if="config.enabled && config.mode === 'Manual'">
        <h2 class="m-0 mb-4 text-lg font-semibold">自定义时间</h2>
        <div class="time-settings rounded-lg bg-white/5 p-4">
          <div class="time-item mb-4">
            <label class="time-label flex items-center justify-between">
              <span class="label-text flex-1">🌅 浅色模式开始时间</span>
              <input
                type="time"
                v-model="config.custom_sunrise"
                @blur="handleTimeBlur"
                class="time-input w-32 rounded-md p-2"
              />
            </label>
          </div>
          <div class="time-item">
            <label class="time-label flex items-center justify-between">
              <span class="label-text flex-1">🌙 深色模式开始时间</span>
              <input
                type="time"
                v-model="config.custom_sunset"
                @blur="handleTimeBlur"
                class="time-input w-32 rounded-md p-2"
              />
            </label>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch, computed } from 'vue';
import { useConfigurationStore } from '@/store';
import { invoke } from '@tauri-apps/api/core';
import { getCurrentWindow } from '@tauri-apps/api/window';
import { listen } from '@tauri-apps/api/event';
import { CustomSwitch } from '@/components/UI';
import modal from '@/utils/modal';

// 定义类型
interface DarkModeConfig {
  enabled: boolean;
  mode: 'Auto' | 'Manual';
  custom_sunrise: string | null;
  custom_sunset: string | null;
  latitude: number | null;
  longitude: number | null;
  timezone_offset: number | null;
  location_name: string | null;
}

interface LocationInfo {
  latitude: number;
  longitude: number;
  city: string;
  region: string;
  country: string;
  timezone: string;
  timezone_offset: number;
}

interface SunTimes {
  sunrise: string;
  sunset: string;
  is_day: boolean;
}

const store = useConfigurationStore();

const isDark = computed(() => {
  if (store.theme === 'auto') {
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  }
  return store.theme === 'dark';
});

// 响应式数据
const config = ref<DarkModeConfig>({
  enabled: false,
  mode: 'Auto',
  custom_sunrise: '06:00',
  custom_sunset: '18:00',
  latitude: null,
  longitude: null,
  timezone_offset: null,
  location_name: null
});

const currentTheme = ref<boolean>(false);
const schedulerRunning = ref<boolean>(false);
const locationInfo = ref<LocationInfo | null>(null);
const sunTimes = ref<SunTimes | null>(null);
const locationLoading = ref<boolean>(false);
const saving = ref<boolean>(false);
const unlisten = ref<any>(null);

// 方法
const loadConfig = async () => {
  try {
    const result = await invoke<DarkModeConfig>('get_dark_mode_config');
    config.value = result;

    if (config.value.enabled) {
      await loadStatus();
    }
  } catch (error) {
    console.error('加载配置失败:', error);
    modal.msg('加载配置失败', 'error');
  }
};

const loadStatus = async () => {
  try {
    const result = await invoke<any>('get_dark_mode_status_command');
    currentTheme.value = result.currentIsDark;
    schedulerRunning.value = result.schedulerRunning;
    
    // 确保store中的主题状态与当前系统主题状态同步
    if (currentTheme.value !== undefined) {
      store.updateTheme(currentTheme.value ? 'dark' : 'light');
    }
  } catch (error) {
    console.error('加载状态失败:', error);
  }
};

const refreshLocation = async () => {
  locationLoading.value = true;
  try {
    const location = await invoke<LocationInfo>('get_location_info');
    locationInfo.value = location;

    // 更新配置中的位置信息
    config.value.latitude = location.latitude;
    config.value.longitude = location.longitude;
    config.value.timezone_offset = location.timezone_offset;
    config.value.location_name = `${location.city}, ${location.region}`;

    // 计算日出日落时间
    if (config.value.mode === 'Auto') {
      await calculateSunTimes();
    }

    // 自动保存配置
    await saveConfig();
    // modal.msg('位置信息已更新', 'success');
  } catch (error) {
    console.error('获取位置失败:', error);
    modal.msg('获取位置信息失败', 'error');
  } finally {
    locationLoading.value = false;
  }
};

const calculateSunTimes = async () => {
  if (!config.value.latitude || !config.value.longitude) return;

  try {
    const times = await invoke<SunTimes>('calculate_sun_times_command', {
      latitude: config.value.latitude,
      longitude: config.value.longitude,
      timezoneOffset: config.value.timezone_offset || 0
    });
    sunTimes.value = times;
  } catch (error) {
    console.error('计算日出日落时间失败:', error);
  }
};

const handleEnabledChange = async (enabled: boolean) => {
  config.value.enabled = enabled;
  // 实时保存配置
  await saveConfig();
  
  if (enabled && config.value.mode === 'Auto' && !locationInfo.value) {
    await refreshLocation();
  }
};

const handleModeChange = async () => {
  if (config.value.mode === 'Auto' && !locationInfo.value) {
    await refreshLocation();
  }
  await handleConfigChange();
};

const handleConfigChange = async () => {
  await saveConfig();
};

const handleTimeBlur = async () => {
  // 只在手动模式下，用户设置完时间输入框失焦时保存配置
  if (config.value.mode === 'Manual') {
    await saveConfig();
  }
};

const saveConfig = async () => {
  saving.value = true;
  try {
    await invoke('save_dark_mode_config_command', { config: config.value });
    await loadStatus();
    // modal.msg('配置已保存', 'success');
  } catch (error) {
    console.error('保存配置失败:', error);
    modal.msg('保存配置失败', 'error');
  } finally {
    saving.value = false;
  }
};

const toggleThemeManually = async () => {
  try {
    const newState = await invoke<boolean>('toggle_system_theme');
    currentTheme.value = newState;
    store.updateTheme(newState ? 'dark' : 'light');

    const statusText = newState ? '深色' : '浅色';
    let message = `已手动切换到${statusText}模式`;
    if (config.value.enabled) {
      message += '。自动切换将在下一次计划任务时恢复'
    }
    modal.msg(message, 'success');

  } catch (error) {
    console.error('切换主题失败:', error);
    modal.msg('切换主题失败', 'error');
  }
};


const closeWindow = () => {
  getCurrentWindow().close();
};

// 监听主题变化事件
onMounted(async () => {
  await loadConfig();

  // 如果启用了自动模式，自动刷新位置信息
  if (config.value.enabled && config.value.mode === 'Auto') {
    await refreshLocation();
  }

  // 监听主题变化
    unlisten.value = await listen('dark-mode-changed', (event: any) => {
      currentTheme.value = event.payload.isDark;
      // 使用store的updateTheme方法来确保主题正确应用
      store.updateTheme(event.payload.isDark ? 'dark' : 'light');
      // modal.msg(`系统主题已自动切换到${event.payload.isDark ? '深色' : '浅色'}模式`, 'info');
    });
});

// 监听配置变化
watch(() => config.value.mode, async (newMode) => {
  if (newMode === 'Auto' && config.value.latitude && config.value.longitude) {
    await calculateSunTimes();
  }
});

// 页面卸载时取消监听
onUnmounted(() => {
  unlisten.value && unlisten.value();
});
</script>

<style lang="scss" scoped>
.dark-mode-container {
  @apply h-screen overflow-y-auto text-white;
  background: var(--bg-gradient-start);
  transition: background 0.5s ease;
}

.dark-mode-container:not(.dark) {
  --bg-gradient-start: #f5f5f5;
  --bg-gradient-end: #e8e8e8;
  background: linear-gradient(135deg, var(--bg-gradient-start) 0%, var(--bg-gradient-end) 100%);
  color: #333;
}

.dark-mode-container.dark {
  --bg-gradient-start: #1a1a1a;
  --bg-gradient-end: #2d2d2d;
  background: linear-gradient(135deg, var(--bg-gradient-start) 0%, var(--bg-gradient-end) 100%);
  color: white;
}

.title-bar {
  @apply rounded-t-lg;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
}

.dark-mode-container:not(.dark) .title-bar {
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

.dark-mode-container.dark .title-bar {
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.section {
  @apply mb-5 rounded-xl p-5;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
}

.dark-mode-container:not(.dark) .section {
  background: rgba(255, 255, 255, 0.3);
  border: 1px solid rgba(0, 0, 0, 0.1);
}

.dark-mode-container.dark .section {
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.dark-mode-container:not(.dark) .mode-option input:checked + .mode-content {
  border-color: #409eff;
  background: rgba(64, 158, 255, 0.2);
  color: #333;
}

.dark-mode-container.dark .mode-option input:checked + .mode-content {
  border-color: rgba(255, 255, 255, 0.4);
  background: rgba(255, 255, 255, 0.2);
  color: white;
}

.time-input:focus {
  outline: none;
}

.dark-mode-container:not(.dark) .time-input:focus {
  border-color: #409eff;
}

.dark-mode-container.dark .time-input:focus {
  border-color: rgba(255, 255, 255, 0.4);
}

/* 关闭按钮样式 */
.dark-mode-container:not(.dark) .close-btn {
  background: rgba(0, 0, 0, 0.1);
  color: #333;
}

.dark-mode-container:not(.dark) .close-btn:hover {
  background: rgba(0, 0, 0, 0.2);
}

.dark-mode-container.dark .close-btn {
  background: rgba(255, 255, 255, 0.1);
  color: white;
}

.dark-mode-container.dark .close-btn:hover {
  background: rgba(255, 255, 255, 0.2);
}

/* 卡片样式 */
.dark-mode-container:not(.dark) .status-card,
.dark-mode-container:not(.dark) .location-card,
.dark-mode-container:not(.dark) .sun-times-card,
.dark-mode-container:not(.dark) .time-settings {
  background: rgba(0, 0, 0, 0.05);
}

.dark-mode-container.dark .status-card,
.dark-mode-container.dark .location-card,
.dark-mode-container.dark .sun-times-card,
.dark-mode-container.dark .time-settings {
  background: rgba(255, 255, 255, 0.05);
}

/* 按钮样式 */
.dark-mode-container:not(.dark) .manual-toggle-btn,
.dark-mode-container:not(.dark) .refresh-btn {
  border: 1px solid rgba(0, 0, 0, 0.2);
  background: rgba(0, 0, 0, 0.1);
  color: #333;
}

.dark-mode-container:not(.dark) .manual-toggle-btn:hover,
.dark-mode-container:not(.dark) .refresh-btn:hover {
  background: rgba(0, 0, 0, 0.2);
}

.dark-mode-container.dark .manual-toggle-btn,
.dark-mode-container.dark .refresh-btn {
  border: 1px solid rgba(255, 255, 255, 0.2);
  background: rgba(255, 255, 255, 0.1);
  color: white;
}

.dark-mode-container.dark .manual-toggle-btn:hover,
.dark-mode-container.dark .refresh-btn:hover {
  background: rgba(255, 255, 255, 0.2);
}

/* 模式选择器样式 */
.dark-mode-container:not(.dark) .mode-content {
  border: 2px solid rgba(0, 0, 0, 0.1);
  background: rgba(0, 0, 0, 0.05);
  color: #333;
}

.dark-mode-container.dark .mode-content {
  border: 2px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.05);
  color: white;
}

/* 输入框样式 */
.dark-mode-container:not(.dark) .time-input {
  border: 1px solid rgba(0, 0, 0, 0.2);
  background: rgba(0, 0, 0, 0.1);
  color: #333;
}

.dark-mode-container.dark .time-input {
  border: 1px solid rgba(255, 255, 255, 0.2);
  background: rgba(255, 255, 255, 0.1);
  color: white;
}
</style>
