<template>
  <div class="dark-mode-container select-none rounded-lg" :class="{ dark: isDark }">
    <!-- 标题栏 -->
    <div class="title-bar fixed top-0 left-0 right-0 z-10 flex items-center justify-between px-4 py-3" data-tauri-drag-region>
      <div class="flex items-center gap-3">
        <div class="title-icon-wrap">
          <Moon class="text-xl" theme="filled" />
        </div>
        <h1 class="m-0 text-lg font-medium tracking-tight">{{ $t('darkMode.title') }}</h1>
      </div>
      <button type="button" @click="closeWindow" class="close-btn" aria-label="Close">
        <Close :size="18" />
      </button>
    </div>

    <!-- 主要内容 -->
    <div class="content mx-auto max-w-2xl px-5 pt-20 pb-8">
      <!-- 主题模式选择（四选一） -->
      <div class="section">
        <h2 class="section-title">{{ $t('darkMode.themeMode') }}</h2>
        <div class="mode-selector grid grid-cols-2 gap-3">
          <label class="mode-option block cursor-pointer h-full">
            <input type="radio" value="System" v-model="config.theme_mode" @change="handleThemeModeChange" class="sr-only" />
            <div class="mode-content mode-system">
              <span class="mode-icon-wrap"><Computer class="mode-icon" theme="filled" :size="22" /></span>
              <div class="mode-body">
                <span class="mode-title">{{ $t('darkMode.systemMode') }}</span>
                <span class="mode-desc">{{ $t('darkMode.systemModeDesc') }}</span>
              </div>
            </div>
          </label>
          <label class="mode-option block cursor-pointer h-full">
            <input type="radio" value="Light" v-model="config.theme_mode" @change="handleThemeModeChange" class="sr-only" />
            <div class="mode-content mode-light">
              <span class="mode-icon-wrap"><SunOne class="mode-icon" theme="filled" :size="22" /></span>
              <div class="mode-body">
                <span class="mode-title">{{ $t('darkMode.lightMode') }}</span>
                <span class="mode-desc">{{ $t('darkMode.lightModeDesc') }}</span>
              </div>
            </div>
          </label>
          <label class="mode-option block cursor-pointer h-full">
            <input type="radio" value="Dark" v-model="config.theme_mode" @change="handleThemeModeChange" class="sr-only" />
            <div class="mode-content mode-dark">
              <span class="mode-icon-wrap"><Moon class="mode-icon" theme="filled" :size="22" /></span>
              <div class="mode-body">
                <span class="mode-title">{{ $t('darkMode.darkMode') }}</span>
                <span class="mode-desc">{{ $t('darkMode.darkModeDesc') }}</span>
              </div>
            </div>
          </label>
          <label class="mode-option block cursor-pointer h-full">
            <input type="radio" value="Schedule" v-model="config.theme_mode" @change="handleThemeModeChange" class="sr-only" />
            <div class="mode-content mode-schedule">
              <span class="mode-icon-wrap"><Time class="mode-icon" theme="filled" :size="22" /></span>
              <div class="mode-body">
                <span class="mode-title">{{ $t('darkMode.scheduleMode') }}</span>
                <span class="mode-desc">{{ $t('darkMode.scheduleModeDesc') }}</span>
              </div>
            </div>
          </label>
        </div>
      </div>

      <!-- 当前状态卡片（始终显示） -->
      <div class="section">
        <div class="status-card">
          <div class="status-row">
            <span class="status-label">{{ $t('darkMode.currentTheme') }}</span>
            <span class="status-badge" :class="currentTheme ? 'badge-dark' : 'badge-light'">
              {{ currentTheme ? $t('darkMode.darkTheme') : $t('darkMode.lightTheme') }}
            </span>
          </div>
          <div v-if="config.theme_mode === 'Schedule'" class="status-row">
            <span class="status-label">{{ $t('darkMode.schedulerStatus') }}</span>
            <span class="status-badge" :class="schedulerRunning ? 'badge-success' : 'badge-danger'">
              {{ schedulerRunning ? $t('darkMode.running') : $t('darkMode.stopped') }}
            </span>
          </div>
          <p v-if="config.theme_mode !== 'Schedule'" class="status-hint">
            {{ config.theme_mode === 'System' ? $t('darkMode.systemModeDesc') : 
               config.theme_mode === 'Light' ? $t('darkMode.lightModeDesc') : $t('darkMode.darkModeDesc') }}
          </p>
          <button type="button" @click="toggleThemeManually" class="btn-primary">
            {{ $t('darkMode.manualToggle') }}
          </button>
        </div>
      </div>
      
      <!-- 定时切换详细设置（仅在Schedule模式下显示） -->
      <template v-if="config.theme_mode === 'Schedule'">
        <!-- 定时类型选择 -->
        <div class="section">
          <h2 class="section-title">{{ $t('darkMode.scheduleType') }}</h2>
          <div class="mode-selector grid grid-cols-2 gap-3">
            <label class="mode-option block cursor-pointer h-full">
              <input type="radio" value="SunBased" v-model="config.schedule_type" @change="handleScheduleTypeChange" class="sr-only" />
              <div class="schedule-type-card">
                <span class="schedule-type-title"><Sunrise :size="18" /> {{ $t('darkMode.sunBased') }}</span>
                <span class="schedule-type-desc">{{ $t('darkMode.sunBasedDesc') }}</span>
              </div>
            </label>
            <label class="mode-option block cursor-pointer h-full">
              <input type="radio" value="Custom" v-model="config.schedule_type" @change="handleScheduleTypeChange" class="sr-only" />
              <div class="schedule-type-card">
                <span class="schedule-type-title"><Time :size="18" /> {{ $t('darkMode.customSchedule') }}</span>
                <span class="schedule-type-desc">{{ $t('darkMode.customScheduleDesc') }}</span>
              </div>
            </label>
          </div>
        </div>

        <!-- 位置信息（日出日落模式） -->
        <div class="section" v-if="config.schedule_type === 'SunBased'">
          <h2 class="section-title section-title-with-icon">
            <Local theme="filled" :size="18" />
            {{ $t('darkMode.locationInfo') }}
          </h2>
          <div class="inset-card location-card">
            <div v-if="locationLoading" class="loading-hint">
              {{ $t('darkMode.gettingLocation') }}
            </div>
            <div v-else-if="locationInfo" class="location-info">
              <div class="info-row"><span class="info-label">{{ $t('darkMode.location') }}</span><span class="info-value">{{ locationInfo.city }}, {{ locationInfo.region }}, {{ locationInfo.country }}</span></div>
              <div class="info-row"><span class="info-label">{{ $t('darkMode.timezone') }}</span><span class="info-value">{{ locationInfo.timezone }}</span></div>
              <div class="info-row"><span class="info-label">{{ $t('darkMode.coordinates') }}</span><span class="info-value">{{ locationInfo.latitude.toFixed(4) }}, {{ locationInfo.longitude.toFixed(4) }}</span></div>
            </div>
            <button type="button" @click="refreshLocation" class="btn-secondary btn-with-icon mt-3" :disabled="locationLoading">
              <Refresh v-if="!locationLoading" :size="16" />
              <Refresh v-else class="animate-spin" :size="16" />
              {{ locationLoading ? $t('darkMode.refreshing') : $t('darkMode.refreshLocation') }}
            </button>
          </div>
        </div>

        <!-- 日出日落时间 -->
        <div class="section" v-if="config.schedule_type === 'SunBased' && sunTimes">
          <h2 class="section-title">{{ $t('darkMode.sunTimes') }}</h2>
          <div class="inset-card sun-times-card">
            <div class="sun-row">
              <Sunrise class="sun-icon" theme="filled" :size="20" />
              <div class="sun-info">
                <span class="sun-label">{{ $t('darkMode.sunrise') }}</span>
                <span class="sun-value">{{ sunTimes.sunrise }}</span>
              </div>
            </div>
            <div class="sun-row">
              <Sunset class="sun-icon" theme="filled" :size="20" />
              <div class="sun-info">
                <span class="sun-label">{{ $t('darkMode.sunset') }}</span>
                <span class="sun-value">{{ sunTimes.sunset }}</span>
              </div>
            </div>
            <div class="sun-divider" />
            <div class="sun-row sun-period">
              <span class="sun-label">{{ $t('darkMode.currentPeriod') }}</span>
              <span class="sun-value" :class="sunTimes.is_day ? 'period-day' : 'period-night'">
                {{ sunTimes.is_day ? $t('darkMode.daytime') : $t('darkMode.nighttime') }}
              </span>
            </div>
          </div>
        </div>

        <!-- 自定义时间 -->
        <div class="section" v-if="config.schedule_type === 'Custom'">
          <h2 class="section-title">{{ $t('darkMode.customTime') }}</h2>
          <div class="inset-card time-settings">
            <label class="time-row">
              <span class="time-label-text"><SunOne theme="filled" :size="18" /> {{ $t('darkMode.lightModeStart') }}</span>
              <input type="time" v-model="config.custom_light_time" @blur="handleTimeBlur" class="time-input" />
            </label>
            <label class="time-row">
              <span class="time-label-text"><Moon theme="filled" :size="18" /> {{ $t('darkMode.darkModeStart') }}</span>
              <input type="time" v-model="config.custom_dark_time" @blur="handleTimeBlur" class="time-input" />
            </label>
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
import { Moon, Close, Sunrise, Sunset, SunOne, Computer, Time, Local, Refresh } from '@icon-park/vue-next';

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
// 视觉变量
$radius-sm: 8px;
$radius-md: 12px;
$radius-lg: 14px;
$accent: #6366f1;
$accent-dark: #818cf8;
$light-bg: #fafafa;
$light-card: #ffffff;
$light-border: #e5e7eb;
$light-muted: #64748b;
$dark-bg: #18181b;
$dark-card: #27272a;
$dark-border: #3f3f46;
$dark-muted: #a1a1aa;

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

.dark-mode-container {
  height: 100vh;
  height: 100dvh;
  overflow-y: auto;
  overflow-x: hidden;
  background: $light-bg;
  color: #1e293b;
  transition: background 0.25s ease, color 0.25s ease;
}

.dark-mode-container.dark {
  background: $dark-bg;
  color: #fafafa;
}

/* 标题栏 */
.title-bar {
  background: $light-card;
  border-bottom: 1px solid $light-border;
  border-radius: $radius-lg $radius-lg 0 0;
}

.dark-mode-container.dark .title-bar {
  background: $dark-card;
  border-bottom-color: $dark-border;
}

.title-icon-wrap {
  width: 36px;
  height: 36px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #e0e7ff;
  color: #4f46e5;
}

.dark-mode-container.dark .title-icon-wrap {
  background: #4338ca;
  color: #c7d2fe;
}

.close-btn {
  width: 32px;
  height: 32px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: $light-muted;
  transition: background 0.2s, color 0.2s;
}

.dark-mode-container:not(.dark) .close-btn:hover {
  background: #f1f5f9;
  color: #475569;
}

.dark-mode-container.dark .close-btn {
  color: $dark-muted;
}

.dark-mode-container.dark .close-btn:hover {
  background: #3f3f46;
  color: #fafafa;
}

/* 区块 */
.section {
  margin-bottom: 20px;
  padding: 20px;
  border-radius: $radius-lg;
  background: $light-card;
  border: 1px solid $light-border;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04);
}

.dark-mode-container.dark .section {
  background: $dark-card;
  border-color: $dark-border;
  box-shadow: none;
}

.section-title {
  margin: 0 0 14px 0;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.02em;
  color: $light-muted;
  text-transform: uppercase;
}

.section-title-with-icon {
  display: flex;
  align-items: center;
  gap: 8px;
  text-transform: none;
  letter-spacing: 0;
}

.dark-mode-container.dark .section-title {
  color: $dark-muted;
}

/* 模式卡片 */
.mode-content {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 14px 16px;
  border-radius: $radius-md;
  border: 1px solid $light-border;
  background: $light-bg;
  transition: border-color 0.2s, background 0.2s, box-shadow 0.2s;
}

.dark-mode-container.dark .mode-content {
  border-color: $dark-border;
  background: #1f1f23;
}

.mode-option:hover .mode-content {
  border-color: #cbd5e1;
}

.dark-mode-container.dark .mode-option:hover .mode-content {
  border-color: #52525b;
}

.mode-icon-wrap {
  width: 40px;
  height: 40px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.mode-system .mode-icon-wrap { background: #f1f5f9; color: #64748b; }
.mode-light .mode-icon-wrap { background: #fef3c7; color: #b45309; }
.mode-dark .mode-icon-wrap { background: #e0e7ff; color: #4f46e5; }
.mode-schedule .mode-icon-wrap { background: #ccfbf1; color: #0d9488; }

.dark-mode-container.dark .mode-system .mode-icon-wrap { background: #27272a; color: #a1a1aa; }
.dark-mode-container.dark .mode-light .mode-icon-wrap { background: #422006; color: #fbbf24; }
.dark-mode-container.dark .mode-dark .mode-icon-wrap { background: #312e81; color: #a5b4fc; }
.dark-mode-container.dark .mode-schedule .mode-icon-wrap { background: #134e4a; color: #5eead4; }

.mode-body {
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
}

.mode-title {
  font-size: 14px;
  font-weight: 600;
  color: #1e293b;
}

.dark-mode-container.dark .mode-title {
  color: #fafafa;
}

.mode-desc {
  font-size: 12px;
  color: $light-muted;
}

.dark-mode-container.dark .mode-desc {
  color: $dark-muted;
}

/* 选中态 */
.mode-option input:checked + .mode-content {
  border-color: $accent;
  background: rgba(99, 102, 241, 0.08);
  box-shadow: 0 0 0 1px $accent;
}

.dark-mode-container.dark .mode-option input:checked + .mode-content {
  border-color: $accent-dark;
  background: rgba(129, 140, 248, 0.12);
  box-shadow: 0 0 0 1px $accent-dark;
}

/* 定时方式小卡片 */
.schedule-type-card {
  padding: 14px 16px;
  border-radius: $radius-md;
  border: 1px solid $light-border;
  background: $light-bg;
  display: flex;
  flex-direction: column;
  gap: 6px;
  transition: border-color 0.2s, background 0.2s, box-shadow 0.2s;
}

.dark-mode-container.dark .schedule-type-card {
  border-color: $dark-border;
  background: #1f1f23;
}

.mode-option input:checked + .schedule-type-card {
  border-color: $accent;
  background: rgba(99, 102, 241, 0.08);
  box-shadow: 0 0 0 1px $accent;
}

.dark-mode-container.dark .mode-option input:checked + .schedule-type-card {
  border-color: $accent-dark;
  background: rgba(129, 140, 248, 0.12);
  box-shadow: 0 0 0 1px $accent-dark;
}

.schedule-type-title {
  font-size: 14px;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 8px;
  color: #1e293b;
}

.dark-mode-container.dark .schedule-type-title {
  color: #fafafa;
}

.schedule-type-desc {
  font-size: 12px;
  color: $light-muted;
}

.dark-mode-container.dark .schedule-type-desc {
  color: $dark-muted;
}

/* 状态卡片 */
.status-card {
  padding: 16px;
  border-radius: $radius-md;
  background: #f8fafc;
  border: 1px solid #e2e8f0;
}

.dark-mode-container.dark .status-card {
  background: #1f1f23;
  border-color: $dark-border;
}

.status-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
}

.status-row:last-of-type {
  margin-bottom: 0;
}

.status-label {
  font-size: 13px;
  color: $light-muted;
}

.dark-mode-container.dark .status-label {
  color: $dark-muted;
}

.status-badge {
  font-size: 12px;
  font-weight: 600;
  padding: 4px 10px;
  border-radius: 20px;
}

.badge-light {
  background: #fef3c7;
  color: #b45309;
}

.badge-dark {
  background: #e0e7ff;
  color: #4f46e5;
}

.badge-success {
  background: #d1fae5;
  color: #047857;
}

.badge-danger {
  background: #fee2e2;
  color: #b91c1c;
}

.dark-mode-container.dark .badge-light {
  background: #422006;
  color: #fbbf24;
}

.dark-mode-container.dark .badge-dark {
  background: #312e81;
  color: #a5b4fc;
}

.dark-mode-container.dark .badge-success {
  background: #064e3b;
  color: #6ee7b7;
}

.dark-mode-container.dark .badge-danger {
  background: #7f1d1d;
  color: #fca5a5;
}

.status-hint {
  font-size: 13px;
  color: $light-muted;
  margin: 12px 0 14px 0;
  line-height: 1.45;
}

.dark-mode-container.dark .status-hint {
  color: $dark-muted;
}

/* 按钮 */
.btn-primary {
  width: 100%;
  margin-top: 14px;
  padding: 10px 16px;
  font-size: 13px;
  font-weight: 600;
  border-radius: $radius-sm;
  border: none;
  background: #6366f1;
  color: #fff;
  cursor: pointer;
  transition: background 0.2s, opacity 0.2s, transform 0.02s;
}

.btn-primary:hover {
  background: #4f46e5;
}

.btn-primary:active {
  transform: scale(0.99);
}

.dark-mode-container.dark .btn-primary {
  background: #6366f1;
}

.dark-mode-container.dark .btn-primary:hover {
  background: #4f46e5;
}

.btn-secondary {
  width: 100%;
  padding: 10px 16px;
  font-size: 13px;
  font-weight: 500;
  border-radius: $radius-sm;
  border: 1px solid $light-border;
  background: $light-card;
  color: #334155;
  cursor: pointer;
  transition: background 0.2s, border-color 0.2s;
}

.btn-secondary:hover:not(:disabled) {
  background: #f1f5f9;
}

.btn-secondary:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.btn-with-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

.dark-mode-container.dark .btn-secondary {
  border-color: $dark-border;
  background: $dark-card;
  color: #e4e4e7;
}

.dark-mode-container.dark .btn-secondary:hover:not(:disabled) {
  background: #3f3f46;
}

/* 内嵌卡片 */
.inset-card {
  padding: 16px;
  border-radius: $radius-md;
  background: #f1f5f9;
  border: 1px solid #e2e8f0;
}

.dark-mode-container.dark .inset-card {
  background: #1f1f23;
  border-color: $dark-border;
}

.loading-hint {
  text-align: center;
  font-size: 13px;
  color: $light-muted;
  font-style: italic;
}

.dark-mode-container.dark .loading-hint {
  color: $dark-muted;
}

.info-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  font-size: 13px;
}

.info-label {
  color: $light-muted;
}

.dark-mode-container.dark .info-label {
  color: $dark-muted;
}

.info-value {
  font-weight: 500;
  color: #334155;
}

.dark-mode-container.dark .info-value {
  color: #e4e4e7;
}

/* 日出日落 */
.sun-row {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;
}

.sun-row:last-child {
  margin-bottom: 0;
}

.sun-icon {
  flex-shrink: 0;
  color: #f59e0b;
}

.dark-mode-container.dark .sun-icon {
  color: #fbbf24;
}

.sun-info {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.sun-label {
  font-size: 12px;
  color: $light-muted;
}

.sun-value {
  font-size: 15px;
  font-weight: 600;
  color: #1e293b;
}

.dark-mode-container.dark .sun-value {
  color: #fafafa;
}

.period-day { color: #d97706 !important; }
.period-night { color: #7c3aed !important; }

.dark-mode-container.dark .period-day { color: #fbbf24 !important; }
.dark-mode-container.dark .period-night { color: #a78bfa !important; }

.sun-divider {
  height: 1px;
  background: #e2e8f0;
  margin: 14px 0;
}

.dark-mode-container.dark .sun-divider {
  background: $dark-border;
}

.sun-period {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* 时间输入 */
.time-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 14px;
  font-size: 13px;
  cursor: pointer;
}

.time-row:last-child {
  margin-bottom: 0;
}

.time-label-text {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #334155;
}

.dark-mode-container.dark .time-label-text {
  color: #e4e4e7;
}

.time-input {
  width: 100px;
  padding: 8px 10px;
  border-radius: $radius-sm;
  border: 1px solid $light-border;
  background: $light-card;
  font-size: 13px;
  color: #1e293b;
}

.time-input:focus {
  outline: none;
  border-color: $accent;
  box-shadow: 0 0 0 2px rgba(99, 102, 241, 0.2);
}

.dark-mode-container.dark .time-input {
  border-color: $dark-border;
  background: $dark-bg;
  color: #fafafa;
}

.dark-mode-container.dark .time-input:focus {
  border-color: $accent-dark;
  box-shadow: 0 0 0 2px rgba(129, 140, 248, 0.25);
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.animate-spin {
  animation: spin 0.8s linear infinite;
}
</style>
