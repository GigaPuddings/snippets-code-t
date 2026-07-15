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
    <div class="content mx-auto max-w-[640px] px-4 pt-[58px] pb-5">
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
      <div class="section section-status">
        <div class="status-card">
          <div class="status-main">
            <div class="status-current">
              <span
                class="status-orb"
                :class="currentTheme ? 'status-orb-dark' : 'status-orb-light'"
              >
                <Moon v-if="currentTheme" theme="filled" :size="18" />
                <SunOne v-else theme="filled" :size="18" />
              </span>
              <div class="status-copy">
                <span class="status-label">
                  {{ $t('darkMode.currentTheme') }}
                </span>
                <span class="status-value">
                  {{
                    currentTheme
                      ? $t('darkMode.darkTheme')
                      : $t('darkMode.lightTheme')
                  }}
                </span>
              </div>
            </div>
            <button
              type="button"
              @click="toggleThemeManually"
              class="btn-primary status-action"
            >
              {{ $t('darkMode.manualToggle') }}
            </button>
          </div>
          <div class="status-meta">
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
          </div>
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
            <div class="sun-divider"></div>
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
  --dm-bg: color-mix(in srgb, var(--panel-bg) 88%, var(--panel-hover-bg));
  --dm-card: var(--dialog-bg);
  --dm-inset: color-mix(in srgb, var(--panel-hover-bg) 74%, var(--panel-bg));
  --dm-status: color-mix(in srgb, var(--panel-bg) 80%, var(--panel-hover-bg));
  --dm-hover: var(--panel-hover-bg);
  --dm-text: var(--panel-text);
  --dm-text-secondary: var(--panel-text-secondary);
  --dm-text-value: var(--dialog-text);
  --dm-border: color-mix(in srgb, var(--panel-border) 92%, transparent);
  --dm-border-soft: color-mix(in srgb, var(--panel-border) 72%, transparent);
  --dm-border-hover: color-mix(
    in srgb,
    var(--el-color-primary) 42%,
    var(--panel-border)
  );
  --dm-accent: var(--el-color-primary);
  --dm-accent-hover: var(--el-color-primary-dark-2);
  --dm-accent-soft: color-mix(
    in srgb,
    var(--el-color-primary) 10%,
    transparent
  );
  --dm-accent-ring: color-mix(
    in srgb,
    var(--el-color-primary) 24%,
    transparent
  );
  --dm-shadow: 0 12px 28px rgb(39 76 119 / 8%), 0 2px 8px rgb(26 43 63 / 5%);
  --dm-close-hover-fg: var(--panel-text);
  --dm-slate-bg: color-mix(in srgb, var(--panel-hover-bg) 78%, var(--panel-bg));
  --dm-slate-fg: var(--panel-text-secondary);
  --dm-amber-bg: color-mix(
    in srgb,
    var(--el-color-warning) 16%,
    var(--panel-bg)
  );
  --dm-amber-fg: var(--el-color-warning);
  --dm-indigo-bg: color-mix(
    in srgb,
    var(--el-color-primary) 14%,
    var(--panel-bg)
  );
  --dm-indigo-fg: var(--el-color-primary-dark-2);
  --dm-indigo-title-bg: color-mix(
    in srgb,
    var(--el-color-primary) 16%,
    var(--panel-bg)
  );
  --dm-indigo-title-fg: var(--el-color-primary);
  --dm-teal-bg: color-mix(
    in srgb,
    var(--el-color-success) 16%,
    var(--panel-bg)
  );
  --dm-teal-fg: var(--el-color-success);
  --dm-emerald-bg: color-mix(
    in srgb,
    var(--el-color-success) 16%,
    var(--panel-bg)
  );
  --dm-emerald-fg: var(--el-color-success);
  --dm-red-bg: color-mix(in srgb, var(--el-color-danger) 14%, var(--panel-bg));
  --dm-red-fg: var(--el-color-danger);
  --dm-sun: var(--el-color-warning);
  --dm-period-day: var(--el-color-warning);
  --dm-period-night: var(--el-color-primary);
  --dm-btn-bg: var(--el-color-primary);
  --dm-btn-hover-bg: var(--el-color-primary-dark-2);
  --dm-btn-fg: var(--categories-text-color-active);

  @apply h-dvh overflow-y-auto overflow-x-hidden bg-dm-bg text-dm;

  transition:
    background 0.25s ease,
    color 0.25s ease;
}

.dark-mode-container.dark {
  --dm-bg: color-mix(in srgb, var(--panel-bg) 90%, #000);
  --dm-card: color-mix(in srgb, var(--dialog-bg) 94%, #000);
  --dm-inset: color-mix(in srgb, var(--panel-hover-bg) 70%, #000);
  --dm-status: color-mix(in srgb, var(--panel-hover-bg) 58%, var(--panel-bg));
  --dm-shadow: 0 14px 30px rgb(0 0 0 / 24%);
  --dm-btn-fg: var(--categories-text-color-active);
}

// ==================== 标题栏 ====================
.title-bar {
  @apply bg-dm-card border-b border-dm rounded-t-[10px];

  backdrop-filter: blur(14px);
}

.title-icon-wrap {
  @apply w-8 h-8 rounded-lg flex items-center justify-center bg-dm-indigo-title text-dm-indigo-title;
}

.close-btn {
  @apply w-8 h-8 rounded-lg flex items-center justify-center text-dm-secondary transition-colors duration-200;
}

.close-btn:hover {
  @apply bg-dm-hover text-dm-close-hover;
}

// ==================== 区块 ====================
.section {
  @apply mb-3 p-4 rounded-xl bg-dm-card border border-dm shadow-dm;
}

.section-title {
  @apply m-0 mb-3 text-xs font-semibold tracking-[0.04em] text-dm-secondary uppercase;
}

.section-title-with-icon {
  @apply flex items-center gap-2 normal-case tracking-normal;
}

// ==================== 模式卡片 ====================
.mode-content {
  @apply relative flex min-h-[88px] items-center gap-3 overflow-hidden rounded-xl border border-dm bg-dm-bg px-3 py-3;

  transition:
    border-color 0.2s,
    background 0.2s,
    box-shadow 0.2s,
    transform 0.2s;
}

.mode-content::after {
  position: absolute;
  top: 10px;
  right: 10px;
  width: 7px;
  height: 7px;
  content: '';
  background: transparent;
  border-radius: 999px;
}

.mode-option:hover .mode-content {
  @apply border-dm-hover;

  transform: translateY(-1px);
}

.mode-icon-wrap {
  @apply w-11 h-11 rounded-xl flex items-center justify-center shrink-0;
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
  @apply flex min-w-0 flex-col gap-1;
}

.mode-title {
  @apply text-[15px] font-semibold leading-5 text-dm;
}

.mode-desc {
  @apply text-xs leading-[1.4] text-dm-secondary;

  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}

// 选中态
.mode-option input:checked + .mode-content {
  @apply border-dm-accent bg-dm-accent-soft shadow-dm-ring;
}

.mode-option input:checked + .mode-content::after {
  background: var(--dm-accent);
  box-shadow: 0 0 0 4px var(--dm-accent-soft);
}

// ==================== 定时方式小卡片 ====================
.schedule-type-card {
  @apply relative flex min-h-[100px] flex-col gap-2 overflow-hidden rounded-xl border border-dm bg-dm-bg px-4 py-3;

  transition:
    border-color 0.2s,
    background 0.2s,
    box-shadow 0.2s,
    transform 0.2s;
}

.schedule-type-card::after {
  position: absolute;
  top: 10px;
  right: 10px;
  width: 7px;
  height: 7px;
  content: '';
  background: transparent;
  border-radius: 999px;
}

.mode-option:hover .schedule-type-card {
  @apply border-dm-hover;

  transform: translateY(-1px);
}

.mode-option input:checked + .schedule-type-card {
  @apply border-dm-accent bg-dm-accent-soft shadow-dm-ring;
}

.mode-option input:checked + .schedule-type-card::after {
  background: var(--dm-accent);
  box-shadow: 0 0 0 4px var(--dm-accent-soft);
}

.schedule-type-title {
  @apply flex items-center gap-2 pr-5 text-[15px] font-semibold leading-5 text-dm;
}

.schedule-type-desc {
  @apply text-xs leading-[1.45] text-dm-secondary;
}

// ==================== 状态卡片 ====================
.section-status {
  @apply p-0 overflow-hidden;
}

.status-card {
  @apply bg-dm-status;
}

.status-main {
  @apply flex items-center justify-between gap-3 p-4;
}

.status-current {
  @apply flex min-w-0 items-center gap-3;
}

.status-orb {
  @apply flex h-11 w-11 shrink-0 items-center justify-center rounded-xl;
}

.status-orb-light {
  @apply bg-dm-amber text-dm-amber;
}

.status-orb-dark {
  @apply bg-dm-indigo text-dm-indigo;
}

.status-copy {
  @apply flex min-w-0 flex-col gap-1;
}

.status-row {
  @apply flex items-center justify-between gap-3;
}

.status-meta {
  @apply border-t border-dm-soft px-4 py-3;
}

.status-label {
  @apply text-xs leading-4 text-dm-secondary;
}

.status-value {
  @apply truncate text-base font-semibold leading-5 text-dm;
}

.status-badge {
  @apply shrink-0 rounded-full px-2 py-[3px] text-[11px] font-semibold leading-4;
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
  @apply m-0 text-xs leading-[1.55] text-dm-secondary;
}

// ==================== 按钮 ====================
.btn-primary {
  @apply w-full cursor-pointer rounded-lg border-0 bg-dm-btn px-3 py-2 text-xs font-semibold text-dm-btn;

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

.status-action {
  @apply mt-0 h-9 w-auto shrink-0 px-4;
}

.btn-secondary {
  @apply w-full cursor-pointer rounded-lg border border-dm bg-dm-card px-3 py-2 text-xs font-medium text-dm-value transition-colors duration-200;
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
  @apply rounded-xl border border-dm-soft bg-dm-inset p-3;
}

.loading-hint {
  @apply text-center text-xs italic text-dm-secondary;
}

.info-row {
  @apply mb-2 flex items-start justify-between gap-4 text-xs;
}

.info-row:last-of-type {
  @apply mb-0;
}

.info-label {
  @apply shrink-0 text-dm-secondary;
}

.info-value {
  @apply min-w-0 text-right font-medium leading-[1.45] text-dm-value break-words;
}

// ==================== 日出日落 ====================
.sun-row {
  @apply mb-2.5 flex items-center gap-2.5;
}

.sun-row:last-child {
  @apply mb-0;
}

.sun-icon {
  @apply shrink-0 text-dm-sun;
}

.sun-info {
  @apply flex min-w-0 flex-col gap-0.5;
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
  @apply flex items-center justify-between;
}

// ==================== 时间输入 ====================
.time-row {
  @apply mb-2.5 flex cursor-pointer items-center justify-between gap-4 text-xs;
}

.time-row:last-child {
  @apply mb-0;
}

.time-label-text {
  @apply flex min-w-0 items-center gap-2 text-dm-value;
}

.time-input {
  @apply w-[104px] shrink-0 rounded-lg border border-dm bg-dm-card px-2 py-1.5 text-xs text-dm;
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
