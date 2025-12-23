<template>
  <div class="dark-mode-container select-none rounded-lg" :class="{ dark: isDark }">
    <!-- 标题栏 -->
    <div class="title-bar fixed top-0 left-0 right-0 z-10 flex items-center justify-between p-2" data-tauri-drag-region>
      <div class="flex items-center gap-3">
        <div class="text-2xl">🌙</div>
        <h1 class="m-0 text-xl font-semibold">{{ $t('darkMode.title') }}</h1>
      </div>
      <div @click="closeWindow"
        class="close-btn flex h-8 w-8 cursor-pointer items-center justify-center rounded-full text-xl transition-colors">
        ×
      </div>
    </div>

    <!-- 主要内容 -->
    <div class="content mx-auto max-w-2xl px-5 pt-20 pb-5">
      <!-- 主题模式选择（四选一） -->
      <div class="section">
        <h2 class="m-0 mb-4 text-lg font-semibold">{{ $t('darkMode.themeMode') }}</h2>
        <div class="mode-selector grid grid-cols-4 gap-3">
          <label class="mode-option block cursor-pointer h-full">
            <input type="radio" value="System" v-model="config.theme_mode" @change="handleThemeModeChange" class="hidden" />
            <div class="mode-content rounded-lg border-2 p-4 transition-all h-full flex flex-col items-center">
              <div class="mode-icon text-3xl mb-2">💻</div>
              <div class="mode-title font-semibold text-center">{{ $t('darkMode.systemMode') }}</div>
              <div class="mode-desc text-xs opacity-70 text-center mt-1">{{ $t('darkMode.systemModeDesc') }}</div>
            </div>
          </label>
          <label class="mode-option block cursor-pointer h-full">
            <input type="radio" value="Light" v-model="config.theme_mode" @change="handleThemeModeChange" class="hidden" />
            <div class="mode-content rounded-lg border-2 p-4 transition-all h-full flex flex-col items-center">
              <div class="mode-icon text-3xl mb-2">☀️</div>
              <div class="mode-title font-semibold text-center">{{ $t('darkMode.lightMode') }}</div>
              <div class="mode-desc text-xs opacity-70 text-center mt-1">{{ $t('darkMode.lightModeDesc') }}</div>
            </div>
          </label>
          <label class="mode-option block cursor-pointer h-full">
            <input type="radio" value="Dark" v-model="config.theme_mode" @change="handleThemeModeChange" class="hidden" />
            <div class="mode-content rounded-lg border-2 p-4 transition-all h-full flex flex-col items-center">
              <div class="mode-icon text-3xl mb-2">🌙</div>
              <div class="mode-title font-semibold text-center">{{ $t('darkMode.darkMode') }}</div>
              <div class="mode-desc text-xs opacity-70 text-center mt-1">{{ $t('darkMode.darkModeDesc') }}</div>
            </div>
          </label>
          <label class="mode-option block cursor-pointer h-full">
            <input type="radio" value="Schedule" v-model="config.theme_mode" @change="handleThemeModeChange" class="hidden" />
            <div class="mode-content rounded-lg border-2 p-4 transition-all h-full flex flex-col items-center">
              <div class="mode-icon text-3xl mb-2">🔄</div>
              <div class="mode-title font-semibold text-center">{{ $t('darkMode.scheduleMode') }}</div>
              <div class="mode-desc text-xs opacity-70 text-center mt-1">{{ $t('darkMode.scheduleModeDesc') }}</div>
            </div>
          </label>
        </div>
      </div>

      <!-- 当前状态卡片（始终显示） -->
      <div class="section">
        <div class="status-card rounded-lg p-4">
          <div class="status-item mb-3 flex justify-between">
            <span class="opacity-80">{{ $t('darkMode.currentTheme') }}</span>
            <span class="font-medium" :class="[currentTheme ? 'text-violet-400' : 'text-amber-400']">
              {{ currentTheme ? $t('darkMode.darkTheme') : $t('darkMode.lightTheme') }}
            </span>
          </div>
          <!-- 仅在定时模式下显示调度器状态 -->
          <div v-if="config.theme_mode === 'Schedule'" class="status-item mb-4 flex justify-between">
            <span class="opacity-80">{{ $t('darkMode.schedulerStatus') }}</span>
            <span class="font-medium" :class="[schedulerRunning ? 'text-emerald-400' : 'text-red-400']">
              {{ schedulerRunning ? $t('darkMode.running') : $t('darkMode.stopped') }}
            </span>
          </div>
          <!-- 非定时模式下的说明文字 -->
          <p v-if="config.theme_mode !== 'Schedule'" class="text-sm opacity-60 mb-4">
            {{ config.theme_mode === 'System' ? $t('darkMode.systemModeDesc') : 
               config.theme_mode === 'Light' ? $t('darkMode.lightModeDesc') : $t('darkMode.darkModeDesc') }}
          </p>
          <button @click="toggleThemeManually"
            class="manual-toggle-btn w-full rounded-md py-2 px-4 text-sm transition-all">
            {{ $t('darkMode.manualToggle') }}
          </button>
        </div>
      </div>
      
      <!-- 定时切换详细设置（仅在Schedule模式下显示） -->
      <template v-if="config.theme_mode === 'Schedule'">
        <!-- 定时类型选择 -->
        <div class="section">
          <h2 class="m-0 mb-4 text-lg font-semibold">{{ $t('darkMode.scheduleType') }}</h2>
          <div class="mode-selector grid grid-cols-2 gap-4">
            <label class="mode-option block cursor-pointer h-full">
              <input type="radio" value="SunBased" v-model="config.schedule_type" @change="handleScheduleTypeChange" class="hidden" />
              <div class="mode-content rounded-lg border-2 p-4 transition-all h-full flex flex-col">
                <div class="mode-title mb-2 font-semibold">🌅 {{ $t('darkMode.sunBased') }}</div>
                <div class="mode-desc text-xs opacity-80 flex-1">{{ $t('darkMode.sunBasedDesc') }}</div>
              </div>
            </label>
            <label class="mode-option block cursor-pointer h-full">
              <input type="radio" value="Custom" v-model="config.schedule_type" @change="handleScheduleTypeChange" class="hidden" />
              <div class="mode-content rounded-lg border-2 p-4 transition-all h-full flex flex-col">
                <div class="mode-title mb-2 font-semibold">⏰ {{ $t('darkMode.customSchedule') }}</div>
                <div class="mode-desc text-xs opacity-80 flex-1">{{ $t('darkMode.customScheduleDesc') }}</div>
              </div>
            </label>
          </div>
        </div>

        <!-- 位置信息（日出日落模式） -->
        <div class="section" v-if="config.schedule_type === 'SunBased'">
          <h2 class="m-0 mb-4 text-lg font-semibold">{{ $t('darkMode.locationInfo') }}</h2>
          <div class="location-card rounded-lg bg-white/5 p-4">
            <div v-if="locationLoading" class="loading text-center font-style: italic opacity-80">
              {{ $t('darkMode.gettingLocation') }}
            </div>
            <div v-else-if="locationInfo" class="location-info">
              <div class="location-item mb-3 flex justify-between">
                <span class="opacity-80">{{ $t('darkMode.location') }}</span>
                <span class="font-medium">{{ locationInfo.city }}, {{ locationInfo.region }},
                  {{ locationInfo.country }}</span>
              </div>
              <div class="location-item mb-3 flex justify-between">
                <span class="opacity-80">{{ $t('darkMode.timezone') }}</span>
                <span class="font-medium">{{ locationInfo.timezone }}</span>
              </div>
              <div class="location-item mb-3 flex justify-between">
                <span class="opacity-80">{{ $t('darkMode.coordinates') }}</span>
                <span class="font-medium">{{ locationInfo.latitude.toFixed(4) }},
                  {{ locationInfo.longitude.toFixed(4) }}</span>
              </div>
            </div>
            <button @click="refreshLocation"
              class="refresh-btn mt-2 w-full rounded-md py-2.5 px-5 text-sm transition-all disabled:cursor-not-allowed disabled:opacity-60"
              :disabled="locationLoading">
              {{ locationLoading ? $t('darkMode.refreshing') : $t('darkMode.refreshLocation') }}
            </button>
          </div>
        </div>

        <!-- 日出日落时间 -->
        <div class="section" v-if="config.schedule_type === 'SunBased' && sunTimes">
          <h2 class="m-0 mb-4 text-lg font-semibold">{{ $t('darkMode.sunTimes') }}</h2>
          <div class="sun-times-card rounded-lg bg-white/5 p-4">
            <div class="sun-time-item mb-3 flex items-center justify-start gap-3">
              <div class="sun-icon text-2xl">🌅</div>
              <div class="sun-info flex-1">
                <div class="sun-label text-xs opacity-80">{{ $t('darkMode.sunrise') }}</div>
                <div class="sun-value text-lg font-semibold">{{ sunTimes.sunrise }}</div>
              </div>
            </div>
            <div class="sun-time-item mb-3 flex items-center justify-start gap-3">
              <div class="sun-icon text-2xl">🌇</div>
              <div class="sun-info flex-1">
                <div class="sun-label text-xs opacity-80">{{ $t('darkMode.sunset') }}</div>
                <div class="sun-value text-lg font-semibold">{{ sunTimes.sunset }}</div>
              </div>
            </div>
            <div class="current-period mt-4 flex justify-between border-t border-white/10 pt-4">
              <span class="opacity-80">{{ $t('darkMode.currentPeriod') }}</span>
              <span class="font-medium" :class="[sunTimes.is_day ? 'text-amber-400' : 'text-violet-400']">
                {{ sunTimes.is_day ? $t('darkMode.daytime') : $t('darkMode.nighttime') }}
              </span>
            </div>
          </div>
        </div>

        <!-- 自定义时间 -->
        <div class="section" v-if="config.schedule_type === 'Custom'">
          <h2 class="m-0 mb-4 text-lg font-semibold">{{ $t('darkMode.customTime') }}</h2>
          <div class="time-settings rounded-lg bg-white/5 p-4">
            <div class="time-item mb-4">
              <label class="time-label flex items-center justify-between">
                <span class="label-text flex-1">🌅 {{ $t('darkMode.lightModeStart') }}</span>
                <input type="time" v-model="config.custom_light_time" @blur="handleTimeBlur"
                  class="time-input w-32 rounded-md p-2" />
              </label>
            </div>
            <div class="time-item">
              <label class="time-label flex items-center justify-between">
                <span class="label-text flex-1">🌙 {{ $t('darkMode.darkModeStart') }}</span>
                <input type="time" v-model="config.custom_dark_time" @blur="handleTimeBlur"
                  class="time-input w-32 rounded-md p-2" />
              </label>
            </div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch, computed, nextTick } from 'vue';
import { useConfigurationStore } from '@/store';
import { invoke } from '@tauri-apps/api/core';
import { getCurrentWindow } from '@tauri-apps/api/window';
import { listen } from '@tauri-apps/api/event';
import { useI18n } from 'vue-i18n';
import modal from '@/utils/modal';

const { t } = useI18n();
import { logger } from '@/utils/logger';

// 定义类型
type ThemeMode = 'System' | 'Light' | 'Dark' | 'Schedule';
type ScheduleType = 'SunBased' | 'Custom';

interface DarkModeConfig {
  theme_mode: ThemeMode;
  schedule_type: ScheduleType;
  custom_light_time: string | null;
  custom_dark_time: string | null;
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
    // 在 auto 模式下，使用后端报告的当前系统主题状态
    // currentTheme 会在 loadStatus 和 dark-mode-changed 事件中更新
    return currentTheme.value;
  }
  return store.theme === 'dark';
});

// 响应式数据
const config = ref<DarkModeConfig>({
  theme_mode: 'Light',
  schedule_type: 'SunBased',
  custom_light_time: '06:00',
  custom_dark_time: '18:00',
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

    // 始终加载当前系统主题状态，用于 isDark 计算属性（auto 模式下）
    await loadStatus();
  } catch (error) {
    logger.error('[主题] 加载配置失败', error);
    modal.msg(t('darkMode.loadConfigFailed'), 'error');
  }
};

const loadStatus = async () => {
  try {
    const result = await invoke<any>('get_dark_mode_status_command');
    currentTheme.value = result.currentIsDark;
    schedulerRunning.value = result.schedulerRunning;
  } catch (error) {
    logger.error('[主题] 加载状态失败', error);
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
    if (config.value.schedule_type === 'SunBased') {
      await calculateSunTimes();
    }

    // 自动保存配置
    await saveConfig();
  } catch (error) {
    logger.error('[主题] 获取位置失败', error);
    modal.msg(t('darkMode.getLocationFailed'), 'error');
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
    logger.error('[主题] 计算日出日落时间失败', error);
  }
};

// 主题模式切换处理
const handleThemeModeChange = async () => {
  await saveConfig();
  
  // 如果切换到定时模式，且选择了日出日落，则获取位置
  if (config.value.theme_mode === 'Schedule' && config.value.schedule_type === 'SunBased' && !locationInfo.value) {
    await refreshLocation();
  }
};

// 定时类型切换处理
const handleScheduleTypeChange = async () => {
  if (config.value.schedule_type === 'SunBased' && !locationInfo.value) {
    await refreshLocation();
  }
  await saveConfig();
};

const handleTimeBlur = async () => {
  // 只在自定义时间模式下，用户设置完时间输入框失焦时保存配置
  if (config.value.schedule_type === 'Custom') {
    await saveConfig();
  }
};

const saveConfig = async () => {
  saving.value = true;
  try {
    await invoke('save_dark_mode_config_command', { config: config.value });
    await loadStatus();
  } catch (error) {
    logger.error('[主题] 保存配置失败', error);
    modal.msg(t('darkMode.saveConfigFailed'), 'error');
  } finally {
    saving.value = false;
  }
};

const toggleThemeManually = async () => {
  try {
    const newState = await invoke<boolean>('toggle_system_theme');
    currentTheme.value = newState;
    const themeText = newState ? t('darkMode.darkTheme') : t('darkMode.lightTheme');
    let message = t('darkMode.switchedTo', { theme: themeText });
    if (config.value.theme_mode === 'Schedule') {
      message += t('darkMode.autoRestoreNote')
    }
    modal.msg(message, 'success');
  } catch (error) {
    logger.error('[主题] 切换主题失败', error);
    modal.msg(t('darkMode.toggleFailed'), 'error');
  }
};


const closeWindow = () => {
  getCurrentWindow().close();
};

// 监听主题变化事件
onMounted(async () => {
  await loadConfig();

  // 如果是定时模式且使用日出日落，自动刷新位置信息
  if (config.value.theme_mode === 'Schedule' && config.value.schedule_type === 'SunBased') {
    await refreshLocation();
  }

  // 监听主题变化（自动模式/手动模式触发）
  unlisten.value = await listen('dark-mode-changed', (event: any) => {
    currentTheme.value = event.payload.isDark;
    // 同步其他窗口样式（仅 auto 模式下生效）
    store.syncSystemThemeStyle(event.payload.isDark);
  });

  // 通知后端前端已准备完成
  nextTick(() => {
    setTimeout(() => {
      getCurrentWindow().emit('dark_mode_ready');
    }, 100); // 给一点时间让DOM完全渲染
  });
});

// 监听定时类型变化
watch(() => config.value.schedule_type, async (newType) => {
  if (newType === 'SunBased' && config.value.latitude && config.value.longitude) {
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

.dark-mode-container:not(.dark) .mode-option input:checked+.mode-content {
  border-color: #409eff;
  background: rgba(64, 158, 255, 0.2);
  color: #333;
}

.dark-mode-container.dark .mode-option input:checked+.mode-content {
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
