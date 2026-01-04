<template>
  <div class="settings-panel">
    <h3 class="panel-title">{{ $t('settings.general') }}</h3>
    <main class="summarize-container">
    <section class="summarize-section">
      <div class="summarize-label">
        <div class="summarize-label-title">{{ $t('settings.theme') }}</div>
        <div class="summarize-label-desc">{{ $t('settings.themeDesc') }}</div>
      </div>
      <div class="summarize-input-wrapper">
        <el-select class="summarize-input !w-32" v-model="store.theme" @change="changeTheme">
          <el-option v-for="item in dictTheme" :key="item.value" :label="item.label" :value="item.value">
            <div class="flex items-center gap-2">
              <component :is="item.icon" />
              <div :class="{ 'text-primary': item.value === store.theme }">
                {{ item.label }}
              </div>
            </div>
          </el-option>
        </el-select>
      </div>
    </section>

    <section class="summarize-section">
      <div class="summarize-label">
        <div class="summarize-label-title">{{ $t('settings.language') }}</div>
        <div class="summarize-label-desc">{{ $t('settings.languageDesc') }}</div>
      </div>
      <div class="summarize-input-wrapper">
        <el-select class="summarize-input !w-32" v-model="store.language" @change="changeLanguage">
          <el-option v-for="item in dictLanguage" :key="item.value" :label="item.label" :value="item.value">
            <div class="flex items-center gap-2">
              <span>{{ item.flag }}</span>
              <div :class="{ 'text-primary': item.value === store.language }">
                {{ item.label }}
              </div>
            </div>
          </el-option>
        </el-select>
      </div>
    </section>

    <section class="summarize-section">
      <div class="summarize-label">
        <div class="summarize-label-title">{{ $t('settings.autoStart') }}</div>
        <div class="summarize-label-desc">{{ $t('settings.autoStartDesc') }}</div>
      </div>
      <div class="summarize-input-wrapper">
        <CustomSwitch v-model="store.autoStart" :active-text="$t('common.on')" :inactive-text="$t('common.off')" @change="handleAutoStartChange" />
      </div>
    </section>

    <section class="summarize-section">
      <div class="summarize-label">
        <div class="summarize-label-title">{{ $t('settings.resetSoftware') }}</div>
        <div class="summarize-label-desc">{{ $t('settings.resetSoftwareDesc') }}</div>
      </div>
      <div class="summarize-input-wrapper">
        <CustomButton type="primary" size="small" @click="resetSoftware" :loading="resetSoftwareLoading">
          {{ $t('settings.resetSoftware') }}
        </CustomButton>
      </div>
    </section>

    <section class="summarize-section">
      <div class="summarize-label">
        <div class="summarize-label-title">{{ $t('settings.autoUpdateCheck') }}</div>
        <div class="summarize-label-desc">{{ $t('settings.autoUpdateCheckDesc') }}</div>
      </div>
      <div class="summarize-input-wrapper">
        <CustomSwitch v-model="store.autoUpdateCheck" :active-text="$t('common.on')" :inactive-text="$t('common.off')"
          @change="toggleAutoUpdateCheck" />
      </div>
    </section>

    <section class="summarize-section">
      <div class="summarize-label">
        <div class="summarize-label-title">{{ $t('settings.autoHideOnBlur') }}</div>
        <div class="summarize-label-desc">{{ $t('settings.autoHideOnBlurDesc') }}</div>
      </div>
      <div class="summarize-input-wrapper">
        <CustomSwitch v-model="store.autoHideOnBlur" :active-text="$t('common.on')" :inactive-text="$t('common.off')"
          @change="toggleAutoHideOnBlur" />
      </div>
    </section>

    <section class="summarize-section">
      <div class="summarize-label">
        <div class="summarize-label-title">{{ $t('settings.exitApp') }}</div>
        <div class="summarize-label-desc">{{ $t('settings.exitAppDesc') }}</div>
      </div>
      <div class="summarize-input-wrapper">
        <CustomButton type="primary" size="small" :loading="exitApplicationLoading" @click="exitApplication">
          {{ $t('settings.exitApp') }}
        </CustomButton>
      </div>
    </section>
  </main>
  </div>
</template>

<script setup lang="ts">
import { SunOne, Moon, Computer } from '@icon-park/vue-next';
import { useI18n } from 'vue-i18n';
import { enable, isEnabled, disable } from '@tauri-apps/plugin-autostart';
import { useConfigurationStore } from '@/store';
import { initTheme } from '@/utils/theme';
import { invoke } from '@tauri-apps/api/core';
import { emit } from '@tauri-apps/api/event';
import { CustomButton, CustomSwitch } from '@/components/UI';
import { setLocale, type LocaleType } from '@/i18n';
import modal from '@/utils/modal';

defineOptions({
  name: 'General'
});

const { t } = useI18n();
const store = useConfigurationStore();

const resetSoftwareLoading = ref(false);
const exitApplicationLoading = ref(false);

const dictTheme = computed(() => [
  { value: 'light', label: t('settings.themeLight'), icon: SunOne },
  { value: 'dark', label: t('settings.themeDark'), icon: Moon },
  { value: 'auto', label: t('settings.themeAuto'), icon: Computer }
]);

const dictLanguage = [
  { value: 'zh-CN' as LocaleType, label: '简体中文', flag: '🇨🇳' },
  { value: 'en-US' as LocaleType, label: 'English', flag: '🇺🇸' }
];

const changeTheme = (value: 'light' | 'dark' | 'auto') => {
  store.updateTheme(value);
  initTheme();
};

const changeLanguage = async (value: LocaleType) => {
  store.language = value;
  setLocale(value);
  
  // 广播语言变更事件到所有窗口
  await emit('language-changed', { language: value });
  
  // 同步语言设置到后端（更新托盘菜单）
  try {
    await invoke('set_language', { language: value });
  } catch (error) {
    console.error('Failed to sync language to backend:', error);
  }
  modal.msg(t('settings.languageChanged'));
};

const watchAutoStart = async () => {
  try {
    const enabled = await isEnabled();
    store.autoStart = enabled;
  } catch (error) {
    console.error('获取自启动状态失败:', error);
  }
};

const handleAutoStartChange = async (value: boolean) => {
  try {
    if (value) {
      await enable();
      modal.msg(t('settings.autoStartEnabled'));
    } else {
      await disable();
      modal.msg(t('settings.autoStartDisabled'));
    }
    // 同步保存到数据库，便于 GitHub 同步
    await invoke('set_auto_start_setting', { value });
  } catch (error) {
    console.error('Failed to set autostart:', error);
    store.autoStart = !value;
  }
};

// 重置软件
const resetSoftware = async () => {
  resetSoftwareLoading.value = true;

  const resetOptions = computed(() => [
    { value: 'all', label: t('settings.resetAll') },
    { value: 'apps', label: t('settings.resetApps') },
    { value: 'bookmarks', label: t('settings.resetBookmarks') }
  ]);

  const selectedResetType = ref('all');

  await ElMessageBox({
    title: t('settings.resetSoftwareTitle'),
    showCancelButton: false,
    showConfirmButton: false,
    closeOnClickModal: false,
    closeOnPressEscape: false,
    message: () => {
      return h('div', [
        h('div', t('settings.resetSelectContent')),
        h('div', { class: 'mt-4 mb-4' }, [
          h(
            ElSelect,
            {
              modelValue: selectedResetType.value,
              'onUpdate:modelValue': (val) => {
                selectedResetType.value = val;
              },
              class: 'w-full border border-panel rounded-md shadow-sm'
            },
            () =>
              resetOptions.value.map((option) =>
                h(ElOption, {
                  key: option.value,
                  label: option.label,
                  value: option.value
                })
              )
          )
        ]),
        h('div', { class: 'message-footer' }, [
          h(
            CustomButton,
            {
              type: 'default',
              size: '',
              onClick: () => {
                ElMessageBox.close();
                resetSoftwareLoading.value = false;
              }
            },
            { default: () => t('common.cancel') }
          ),
          h(
            CustomButton,
            {
              type: 'primary',
              size: '',
              onClick: async () => {
                ElMessageBox.close();
                try {
                  await invoke('reset_software', {
                    resetType: selectedResetType.value
                  });
                  let successMsg = '';
                  if (selectedResetType.value === 'apps') {
                    successMsg = t('settings.resetAppsSuccess');
                  } else if (selectedResetType.value === 'bookmarks') {
                    successMsg = t('settings.resetBookmarksSuccess');
                  } else {
                    successMsg = t('settings.resetAllSuccess');
                  }
                  modal.msg(successMsg);
                } catch (error) {
                  console.log('Reset failed:', error);
                  modal.msg(`${t('settings.resetFailed')}: ${error}`, 'error');
                } finally {
                  resetSoftwareLoading.value = false;
                }
              }
            },
            { default: () => t('common.confirm') }
          )
        ])
      ]);
    }
  }).catch(() => {
    resetSoftwareLoading.value = false;
  });
};

// 切换自动检查更新
const toggleAutoUpdateCheck = async (value: boolean) => {
  try {
    await invoke('set_auto_update_check', { enabled: value });
    modal.msg(value ? t('settings.autoUpdateEnabled') : t('settings.autoUpdateDisabled'));
  } catch (error) {
    modal.msg(`${t('settings.settingFailed')}: ${error}`, 'error');
    store.autoUpdateCheck = !value;
  }
};

// 切换自动失焦隐藏
const toggleAutoHideOnBlur = async (value: boolean) => {
  try {
    await invoke('set_auto_hide_on_blur', { enabled: value });
    modal.msg(value ? t('settings.autoHideEnabled') : t('settings.autoHideDisabled'));
  } catch (error) {
    modal.msg(`${t('settings.settingFailed')}: ${error}`, 'error');
    store.autoHideOnBlur = !value;
  }
};

// 退出应用
const exitApplication = async () => {
  exitApplicationLoading.value = true;
  await ElMessageBox({
    title: t('common.tip'),
    showCancelButton: false,
    showConfirmButton: false,
    closeOnClickModal: false,
    closeOnPressEscape: false,
    message: () => {
      return h('div', [
        h('div', t('settings.exitAppConfirm')),
        h('div', { class: 'message-footer' }, [
          h(
            CustomButton,
            {
              type: 'default',
              size: '',
              onClick: () => {
                ElMessageBox.close();
                exitApplicationLoading.value = false;
              }
            },
            { default: () => t('common.cancel') }
          ),
          h(
            CustomButton,
            {
              type: 'primary',
              size: '',
              onClick: async () => {
                ElMessageBox.close();
                try {
                  await invoke('exit_application');
                  modal.msg(t('settings.exitAppSuccess'));
                } catch (error) {
                  console.log('Exit failed:', error);
                } finally {
                  exitApplicationLoading.value = false;
                }
              }
            },
            { default: () => t('common.confirm') }
          )
        ])
      ]);
    }
  }).catch(() => {
    exitApplicationLoading.value = false;
  });
};

onMounted(async () => {
  watchAutoStart();
});
</script>

<style scoped lang="scss">
.settings-panel {
  @apply flex flex-col;
}

.panel-title {
  @apply text-base font-bold mb-4 pb-2 border-b border-panel;
}

.text-primary {
  color: var(--el-color-primary);
}

.message-footer {
  @apply flex justify-end gap-2 mt-4;
}
</style>
