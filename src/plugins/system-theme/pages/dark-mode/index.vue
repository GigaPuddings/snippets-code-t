<template>
  <div
    class="dark-mode-container select-none rounded-lg"
    :class="{ dark: isDark }"
  >
    <!-- 标题栏 -->
    <div
      class="title-bar fixed top-0 left-0 right-0 z-10 flex items-center justify-between px-3 py-2"
      data-tauri-drag-region
    >
      <div class="flex items-center gap-2">
        <div class="title-icon-wrap">
          <Moon class="text-lg" theme="filled" />
        </div>
        <h1 class="m-0 text-base font-medium tracking-tight">
          {{ $t('darkMode.title') }}
        </h1>
      </div>
      <button
        type="button"
        @mousedown.stop
        @click="closeWindow"
        class="close-btn"
        aria-label="Close"
      >
        <Close :size="18" />
      </button>
    </div>

    <!-- 主要内容 -->
    <div class="content mx-auto max-w-xl px-4 pt-14 pb-4">
      <!-- 主题模式选择（四选一） -->
      <div class="section">
        <h2 class="section-title">{{ $t('darkMode.themeMode') }}</h2>
        <div class="mode-selector grid grid-cols-2 gap-2.5">
          <label class="mode-option block cursor-pointer h-full">
            <input
              type="radio"
              value="System"
              v-model="config.theme_mode"
              @change="handleThemeModeChange"
              class="sr-only"
            />
            <div class="mode-content mode-system">
              <span class="mode-icon-wrap">
                <Computer class="mode-icon" theme="filled" :size="22" />
              </span>
              <div class="mode-body">
                <span class="mode-title">{{ $t('darkMode.systemMode') }}</span>
                <span class="mode-desc">
                  {{ $t('darkMode.systemModeDesc') }}
                </span>
              </div>
            </div>
          </label>
          <label class="mode-option block cursor-pointer h-full">
            <input
              type="radio"
              value="Light"
              v-model="config.theme_mode"
              @change="handleThemeModeChange"
              class="sr-only"
            />
            <div class="mode-content mode-light">
              <span class="mode-icon-wrap">
                <SunOne class="mode-icon" theme="filled" :size="22" />
              </span>
              <div class="mode-body">
                <span class="mode-title">{{ $t('darkMode.lightMode') }}</span>
                <span class="mode-desc">
                  {{ $t('darkMode.lightModeDesc') }}
                </span>
              </div>
            </div>
          </label>
          <label class="mode-option block cursor-pointer h-full">
            <input
              type="radio"
              value="Dark"
              v-model="config.theme_mode"
              @change="handleThemeModeChange"
              class="sr-only"
            />
            <div class="mode-content mode-dark">
              <span class="mode-icon-wrap">
                <Moon class="mode-icon" theme="filled" :size="22" />
              </span>
              <div class="mode-body">
                <span class="mode-title">{{ $t('darkMode.darkMode') }}</span>
                <span class="mode-desc">{{ $t('darkMode.darkModeDesc') }}</span>
              </div>
            </div>
          </label>
          <label class="mode-option block cursor-pointer h-full">
            <input
              type="radio"
              value="Schedule"
              v-model="config.theme_mode"
              @change="handleThemeModeChange"
              class="sr-only"
            />
            <div class="mode-content mode-schedule">
              <span class="mode-icon-wrap">
                <Time class="mode-icon" theme="filled" :size="22" />
              </span>
              <div class="mode-body">
                <span class="mode-title">
                  {{ $t('darkMode.scheduleMode') }}
                </span>
                <span class="mode-desc">
                  {{ $t('darkMode.scheduleModeDesc') }}
                </span>
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
            <span
              class="status-badge"
              :class="currentTheme ? 'badge-dark' : 'badge-light'"
            >
              {{
                currentTheme
                  ? $t('darkMode.darkTheme')
                  : $t('darkMode.lightTheme')
              }}
            </span>
          </div>
          <div v-if="config.theme_mode === 'Schedule'" class="status-row">
            <span class="status-label">
              {{ $t('darkMode.schedulerStatus') }}
            </span>
            <span
              class="status-badge"
              :class="schedulerRunning ? 'badge-success' : 'badge-danger'"
            >
              {{
                schedulerRunning
                  ? $t('darkMode.running')
                  : $t('darkMode.stopped')
              }}
            </span>
          </div>
          <p v-if="config.theme_mode !== 'Schedule'" class="status-hint">
            {{
              config.theme_mode === 'System'
                ? $t('darkMode.systemModeDesc')
                : config.theme_mode === 'Light'
                  ? $t('darkMode.lightModeDesc')
                  : $t('darkMode.darkModeDesc')
            }}
          </p>
          <button
            type="button"
            @click="toggleThemeManually"
            class="btn-primary"
          >
            {{ $t('darkMode.manualToggle') }}
          </button>
        </div>
      </div>

      <!-- 定时切换详细设置（仅在Schedule模式下显示） -->
      <template v-if="config.theme_mode === 'Schedule'">
        <!-- 定时类型选择 -->
        <div class="section">
          <h2 class="section-title">{{ $t('darkMode.scheduleType') }}</h2>
          <div class="mode-selector grid grid-cols-2 gap-2.5">
            <label class="mode-option block cursor-pointer h-full">
              <input
                type="radio"
                value="SunBased"
                v-model="config.schedule_type"
                @change="handleScheduleTypeChange"
                class="sr-only"
              />
              <div class="schedule-type-card">
                <span class="schedule-type-title">
                  <Sunrise :size="18" />
                  {{ $t('darkMode.sunBased') }}
                </span>
                <span class="schedule-type-desc">
                  {{ $t('darkMode.sunBasedDesc') }}
                </span>
              </div>
            </label>
            <label class="mode-option block cursor-pointer h-full">
              <input
                type="radio"
                value="Custom"
                v-model="config.schedule_type"
                @change="handleScheduleTypeChange"
                class="sr-only"
              />
              <div class="schedule-type-card">
                <span class="schedule-type-title">
                  <Time :size="18" />
                  {{ $t('darkMode.customSchedule') }}
                </span>
                <span class="schedule-type-desc">
                  {{ $t('darkMode.customScheduleDesc') }}
                </span>
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
              <div class="info-row">
                <span class="info-label">{{ $t('darkMode.location') }}</span>
                <span class="info-value">
                  {{ locationInfo.city }}, {{ locationInfo.region }},
                  {{ locationInfo.country }}
                </span>
              </div>
              <div class="info-row">
                <span class="info-label">{{ $t('darkMode.timezone') }}</span>
                <span class="info-value">{{ locationInfo.timezone }}</span>
              </div>
              <div class="info-row">
                <span class="info-label">{{ $t('darkMode.coordinates') }}</span>
                <span class="info-value">
                  {{ locationInfo.latitude.toFixed(4) }},
                  {{ locationInfo.longitude.toFixed(4) }}
                </span>
              </div>
            </div>
            <button
              type="button"
              @click="refreshLocation"
              class="btn-secondary btn-with-icon mt-3"
              :disabled="locationLoading"
            >
              <Refresh v-if="!locationLoading" :size="16" />
              <Refresh v-else class="animate-spin" :size="16" />
              {{
                locationLoading
                  ? $t('darkMode.refreshing')
                  : $t('darkMode.refreshLocation')
              }}
            </button>
          </div>
        </div>

        <!-- 日出日落时间 -->
        <div
          class="section"
          v-if="config.schedule_type === 'SunBased' && sunTimes"
        >
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
              <span
                class="sun-value"
                :class="sunTimes.is_day ? 'period-day' : 'period-night'"
              >
                {{
                  sunTimes.is_day
                    ? $t('darkMode.daytime')
                    : $t('darkMode.nighttime')
                }}
              </span>
            </div>
          </div>
        </div>

        <!-- 计算调试信息 -->
        <div class="section" v-if="config.schedule_type === 'SunBased'">
          <h2 class="section-title">计算依据</h2>
          <div class="inset-card location-card">
            <div class="info-row">
              <span class="info-label">来源</span>
              <span class="info-value">{{ sunCalcSourceLabel }}</span>
            </div>
            <div
              class="info-row"
              v-if="
                sunCalcDebug?.latitude !== undefined &&
                sunCalcDebug?.longitude !== undefined
              "
            >
              <span class="info-label">计算坐标</span>
              <span class="info-value">
                {{ Number(sunCalcDebug?.latitude).toFixed(4) }},
                {{ Number(sunCalcDebug?.longitude).toFixed(4) }}
              </span>
            </div>
            <div
              class="info-row"
              v-if="sunCalcDebug?.timezoneOffset !== undefined"
            >
              <span class="info-label">时区偏移(分钟)</span>
              <span class="info-value">{{ sunCalcDebug?.timezoneOffset }}</span>
            </div>
            <div class="info-row" v-if="sunCalcDebug?.sunset">
              <span class="info-label">用于切换的日落时间</span>
              <span class="info-value">{{ sunCalcDebug?.sunset }}</span>
            </div>
            <div class="info-row" v-if="sunCalcDebug?.error">
              <span class="info-label">错误</span>
              <span class="info-value">{{ sunCalcDebug?.error }}</span>
            </div>
          </div>
        </div>

        <!-- 自定义时间 -->
        <div class="section" v-if="config.schedule_type === 'Custom'">
          <h2 class="section-title">{{ $t('darkMode.customTime') }}</h2>
          <div class="inset-card time-settings">
            <label class="time-row">
              <span class="time-label-text">
                <SunOne theme="filled" :size="18" />
                {{ $t('darkMode.lightModeStart') }}
              </span>
              <input
                type="time"
                v-model="config.custom_light_time"
                @change="handleTimeChange"
                class="time-input"
              />
            </label>
            <label class="time-row">
              <span class="time-label-text">
                <Moon theme="filled" :size="18" />
                {{ $t('darkMode.darkModeStart') }}
              </span>
              <input
                type="time"
                v-model="config.custom_dark_time"
                @change="handleTimeChange"
                class="time-input"
              />
            </label>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { invoke } from '@tauri-apps/api/core';
import { getCurrentWindow } from '@tauri-apps/api/window';
import { listen } from '@tauri-apps/api/event';
import { useI18n } from 'vue-i18n';
import modal from '@/utils/modal';
import {
  Moon,
  Close,
  Sunrise,
  Sunset,
  SunOne,
  Computer,
  Time,
  Local,
  Refresh
} from '@icon-park/vue-next';

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
  manual_latitude?: number | null;
  manual_longitude?: number | null;
  manual_timezone_offset?: number | null;
  manual_location_name?: string | null;
  latitude: number | null;
  longitude: number | null;
  timezone_offset: number | null;
  location_name: string | null;
  location_updated_at?: number | null;
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

interface SunCalcDebug {
  source?: string;
  latitude?: number;
  longitude?: number;
  timezoneOffset?: number;
  sunrise?: string;
  sunset?: string;
  isDay?: boolean;
  error?: string;
}

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
const sunCalcDebug = ref<SunCalcDebug | null>(null);
const locationLoading = ref<boolean>(false);
const saving = ref<boolean>(false);
const syncingFromBackend = ref<boolean>(false);
const unlisten = ref<any>(null);

// 使用后端报告的当前系统主题状态，避免插件运行时依赖主应用 Pinia 上下文。
const isDark = computed(() => currentTheme.value);

const sunCalcSourceLabel = computed(() => {
  const source = sunCalcDebug.value?.source || '';
  if (source.startsWith('manual:'))
    return `手动位置（${source.replace('manual:', '')}）`;
  if (source.startsWith('ip:'))
    return `自动定位（${source.replace('ip:', '')}）`;
  return source || '-';
});

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
    sunCalcDebug.value = result.sunCalcDebug ?? null;
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
    await loadStatus();
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
  if (syncingFromBackend.value) {
    return;
  }

  await saveConfig();

  // 如果切换到定时模式，且选择了日出日落，则获取位置
  if (
    config.value.theme_mode === 'Schedule' &&
    config.value.schedule_type === 'SunBased' &&
    !locationInfo.value
  ) {
    await refreshLocation();
  }
};

// 定时类型切换处理
const handleScheduleTypeChange = async () => {
  if (syncingFromBackend.value) {
    return;
  }

  if (config.value.schedule_type === 'SunBased' && !locationInfo.value) {
    await refreshLocation();
  }
  await saveConfig();
};

const handleTimeChange = async () => {
  if (syncingFromBackend.value) {
    return;
  }

  // 只在自定义时间模式下，时间变更后立即保存并触发后端重算
  if (config.value.schedule_type === 'Custom') {
    await saveConfig();
  }
};

const saveConfig = async () => {
  if (syncingFromBackend.value) {
    return;
  }

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
    const themeText = newState
      ? t('darkMode.darkTheme')
      : t('darkMode.lightTheme');
    let message = t('darkMode.switchedTo', { theme: themeText });
    if (config.value.theme_mode === 'Schedule') {
      message += t('darkMode.autoRestoreNote');
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
  if (
    config.value.theme_mode === 'Schedule' &&
    config.value.schedule_type === 'SunBased'
  ) {
    await refreshLocation();
  }

  // 监听后端主题变化（自动模式/手动模式触发）
  unlisten.value = await listen('dark-mode-changed', async (event: any) => {
    logger.debug(
      `[主题][窗口:dark_mode] 收到主题变更：${JSON.stringify(event.payload)}`
    );
    currentTheme.value = event.payload.isDark;

    // 托盘/后端切换后，主动刷新后端配置，确保窗口单选状态与托盘一致
    syncingFromBackend.value = true;
    try {
      await loadConfig();
      logger.debug(
        `[主题][窗口:dark_mode] 已从后端刷新配置：theme_mode=${config.value.theme_mode}, schedule_type=${config.value.schedule_type}`
      );
    } finally {
      syncingFromBackend.value = false;
    }
  });

  // 通知后端前端已准备完成
  nextTick(() => {
    setTimeout(() => {
      getCurrentWindow().emit('dark_mode_ready');
    }, 100); // 给一点时间让DOM完全渲染
  });
});

// 监听定时类型变化
watch(
  () => config.value.schedule_type,
  async (newType) => {
    if (
      newType === 'SunBased' &&
      config.value.latitude &&
      config.value.longitude
    ) {
      await calculateSunTimes();
    }
  }
);

// 页面卸载时取消监听
onUnmounted(() => {
  unlisten.value && unlisten.value();
});
</script>

<style lang="scss" scoped>
// ==================== 主题变量 ====================
.dark-mode-container {
  // 浅色（默认）
  --dm-bg: #fafafa;
  --dm-card: #ffffff;
  --dm-inset: #f1f5f9;
  --dm-status: #f8fafc;
  --dm-hover: #f1f5f9;
  --dm-text: #1e293b;
  --dm-text-secondary: #64748b;
  --dm-text-value: #334155;
  --dm-border: #e5e7eb;
  --dm-border-soft: #e2e8f0;
  --dm-border-hover: #cbd5e1;
  --dm-accent: #6366f1;
  --dm-accent-hover: #4f46e5;
  --dm-accent-soft: rgba(99, 102, 241, 0.08);
  --dm-accent-ring: rgba(99, 102, 241, 0.2);
  --dm-shadow: 0 1px 2px rgba(0, 0, 0, 0.04);
  --dm-close-hover-fg: #475569;

  --dm-slate-bg: #f1f5f9;
  --dm-slate-fg: #64748b;
  --dm-amber-bg: #fef3c7;
  --dm-amber-fg: #b45309;
  --dm-indigo-bg: #e0e7ff;
  --dm-indigo-fg: #4f46e5;
  --dm-indigo-title-bg: #e0e7ff;
  --dm-indigo-title-fg: #4f46e5;
  --dm-teal-bg: #ccfbf1;
  --dm-teal-fg: #0d9488;
  --dm-emerald-bg: #d1fae5;
  --dm-emerald-fg: #047857;
  --dm-red-bg: #fee2e2;
  --dm-red-fg: #b91c1c;

  --dm-sun: #f59e0b;
  --dm-period-day: #d97706;
  --dm-period-night: #7c3aed;
  --dm-btn-bg: #6366f1;
  --dm-btn-hover-bg: #4f46e5;
  --dm-btn-fg: #ffffff;

  @apply h-dvh overflow-y-auto overflow-x-hidden bg-dm-bg text-dm;
  transition:
    background 0.25s ease,
    color 0.25s ease;
}

.dark-mode-container.dark {
  --dm-bg: #18181b;
  --dm-card: #27272a;
  --dm-inset: #1f1f23;
  --dm-status: #1f1f23;
  --dm-hover: #3f3f46;
  --dm-text: #fafafa;
  --dm-text-secondary: #a1a1aa;
  --dm-text-value: #e4e4e7;
  --dm-border: #3f3f46;
  --dm-border-soft: #3f3f46;
  --dm-border-hover: #52525b;
  --dm-accent: #818cf8;
  --dm-accent-hover: #4f46e5;
  --dm-accent-soft: rgba(129, 140, 248, 0.12);
  --dm-accent-ring: rgba(129, 140, 248, 0.25);
  --dm-shadow: none;
  --dm-close-hover-fg: #fafafa;

  --dm-slate-bg: #27272a;
  --dm-slate-fg: #a1a1aa;
  --dm-amber-bg: #422006;
  --dm-amber-fg: #fbbf24;
  --dm-indigo-bg: #312e81;
  --dm-indigo-fg: #a5b4fc;
  --dm-indigo-title-bg: #4338ca;
  --dm-indigo-title-fg: #c7d2fe;
  --dm-teal-bg: #134e4a;
  --dm-teal-fg: #5eead4;
  --dm-emerald-bg: #064e3b;
  --dm-emerald-fg: #6ee7b7;
  --dm-red-bg: #7f1d1d;
  --dm-red-fg: #fca5a5;

  --dm-sun: #fbbf24;
  --dm-period-day: #fbbf24;
  --dm-period-night: #a78bfa;
  --dm-btn-bg: #6366f1;
  --dm-btn-hover-bg: #4f46e5;
  --dm-btn-fg: #ffffff;
}

// ==================== 标题栏 ====================
.title-bar {
  @apply bg-dm-card border-b border-dm rounded-t-[10px];
}

.title-icon-wrap {
  @apply w-[30px] h-[30px] rounded-lg flex items-center justify-center bg-dm-indigo-title text-dm-indigo-title;
}

.close-btn {
  @apply w-7 h-7 rounded-md flex items-center justify-center text-dm-secondary transition-colors duration-200;
}

.close-btn:hover {
  @apply bg-dm-hover text-dm-close-hover;
}

// ==================== 区块 ====================
.section {
  @apply mb-3 p-3.5 rounded-[10px] bg-dm-card border border-dm shadow-dm;
}

.section-title {
  @apply m-0 mb-2.5 text-xs font-semibold tracking-[0.02em] text-dm-secondary uppercase;
}

.section-title-with-icon {
  @apply flex items-center gap-2 normal-case tracking-normal;
}

// ==================== 模式卡片 ====================
.mode-content {
  @apply flex items-center gap-2.5 py-2.5 px-3 rounded-lg border border-dm bg-dm-bg;
  transition:
    border-color 0.2s,
    background 0.2s,
    box-shadow 0.2s;
}

.mode-option:hover .mode-content {
  @apply border-dm-hover;
}

.mode-icon-wrap {
  @apply w-[34px] h-[34px] rounded-lg flex items-center justify-center shrink-0;
}

.mode-system .mode-icon-wrap {
  @apply bg-dm-slate text-dm-slate;
}
.mode-light .mode-icon-wrap {
  @apply bg-dm-amber text-dm-amber;
}
.mode-dark .mode-icon-wrap {
  @apply bg-dm-indigo text-dm-indigo;
}
.mode-schedule .mode-icon-wrap {
  @apply bg-dm-teal text-dm-teal;
}

.mode-body {
  @apply flex flex-col gap-0.5 min-w-0;
}

.mode-title {
  @apply text-[13px] font-semibold text-dm;
}

.mode-desc {
  @apply text-[11px] text-dm-secondary;
}

// 选中态
.mode-option input:checked + .mode-content {
  @apply border-dm-accent bg-dm-accent-soft shadow-dm-ring;
}

// ==================== 定时方式小卡片 ====================
.schedule-type-card {
  @apply py-[11px] px-3 rounded-lg border border-dm bg-dm-bg flex flex-col gap-1.5;
  transition:
    border-color 0.2s,
    background 0.2s,
    box-shadow 0.2s;
}

.mode-option input:checked + .schedule-type-card {
  @apply border-dm-accent bg-dm-accent-soft shadow-dm-ring;
}

.schedule-type-title {
  @apply text-[13px] font-semibold flex items-center gap-2 text-dm;
}

.schedule-type-desc {
  @apply text-[11px] text-dm-secondary;
}

// ==================== 状态卡片 ====================
.status-card {
  @apply p-3 rounded-lg bg-dm-status border border-dm-soft;
}

.status-row {
  @apply flex justify-between items-center mb-[9px];
}

.status-row:last-of-type {
  @apply mb-0;
}

.status-label {
  @apply text-xs text-dm-secondary;
}

.status-badge {
  @apply text-[11px] font-semibold py-[3px] px-2 rounded-[20px];
}

.badge-light {
  @apply bg-dm-amber text-dm-amber;
}
.badge-dark {
  @apply bg-dm-indigo text-dm-indigo;
}
.badge-success {
  @apply bg-dm-emerald text-dm-emerald;
}
.badge-danger {
  @apply bg-dm-red text-dm-red;
}

.status-hint {
  @apply text-xs text-dm-secondary mt-[9px] mb-2.5 leading-[1.45];
}

// ==================== 按钮 ====================
.btn-primary {
  @apply w-full mt-2.5 py-2 px-3 text-xs font-semibold rounded-lg border-0 bg-dm-btn text-dm-btn cursor-pointer;
  transition:
    background 0.2s,
    opacity 0.2s,
    transform 0.02s;
}

.btn-primary:hover {
  @apply bg-dm-btn-hover;
}

.btn-primary:active {
  @apply scale-[0.99];
}

.btn-secondary {
  @apply w-full py-2 px-3 text-xs font-medium rounded-lg border border-dm bg-dm-card text-dm-value cursor-pointer transition-colors duration-200;
}

.btn-secondary:hover:not(:disabled) {
  @apply bg-dm-hover;
}

.btn-secondary:disabled {
  @apply opacity-60 cursor-not-allowed;
}

.btn-with-icon {
  @apply flex items-center justify-center gap-2;
}

// ==================== 内嵌卡片 ====================
.inset-card {
  @apply p-3 rounded-lg bg-dm-inset border border-dm-soft;
}

.loading-hint {
  @apply text-center text-xs text-dm-secondary italic;
}

.info-row {
  @apply flex justify-between items-center mb-2 text-xs;
}

.info-row:last-of-type {
  @apply mb-0;
}

.info-label {
  @apply text-dm-secondary;
}

.info-value {
  @apply font-medium text-dm-value;
}

// ==================== 日出日落 ====================
.sun-row {
  @apply flex items-center gap-2.5 mb-2.5;
}

.sun-row:last-child {
  @apply mb-0;
}

.sun-icon {
  @apply shrink-0 text-dm-sun;
}

.sun-info {
  @apply flex flex-col gap-0.5;
}

.sun-label {
  @apply text-[11px] text-dm-secondary;
}

.sun-value {
  @apply text-sm font-semibold text-dm;
}

/* SCSS 下 @apply 不支持 ! 前缀，此处用原生 CSS + 已注册变量 */
.period-day {
  color: var(--dm-period-day) !important;
}
.period-night {
  color: var(--dm-period-night) !important;
}

.sun-divider {
  @apply h-px bg-dm-soft my-2.5;
}

.sun-period {
  @apply flex justify-between items-center;
}

// ==================== 时间输入 ====================
.time-row {
  @apply flex items-center justify-between mb-2.5 text-xs cursor-pointer;
}

.time-row:last-child {
  @apply mb-0;
}

.time-label-text {
  @apply flex items-center gap-2 text-dm-value;
}

.time-input {
  @apply w-[92px] py-1.5 px-2 rounded-lg border border-dm bg-dm-card text-xs text-dm;
}

.time-input:focus {
  @apply outline-none border-dm-accent shadow-dm-focus;
}

// ==================== 动画 ====================
@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.animate-spin {
  animation: spin 0.8s linear infinite;
}
</style>
