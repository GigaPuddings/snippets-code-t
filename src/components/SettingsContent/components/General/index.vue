<template>
  <main class="summarize-container">
    <section class="summarize-section">
      <div class="summarize-label">
        <div class="summarize-label-title">基础颜色</div>
        <div class="summarize-label-desc">设置snippets code的基本颜色</div>
      </div>
      <div class="summarize-input-wrapper">
        <el-select
          class="summarize-input"
          v-model="store.theme"
          placeholder="请选择主题"
          @change="changeTheme"
        >
          <el-option
            v-for="item in dictTheme"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
            <div class="flex items-center gap-2">
              <component
                :is="item.icon"
                :theme="item.value === store.theme ? 'filled' : 'outline'"
                :fill="item.value === store.theme ? '#4b94f8' : '#666'"
              />
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
        <div class="summarize-label-title">开机自动启动</div>
        <div class="summarize-label-desc">设置开机自动启动</div>
      </div>
      <div class="summarize-input-wrapper">
        <CustomSwitch
          v-model="store.autoStart"
          active-text="开启"
          inactive-text="关闭"
          @change="handleAutoStartChange"
        />
      </div>
    </section>

    <section class="summarize-section">
      <div class="summarize-label">
        <div class="summarize-label-title">重置软件</div>
        <div class="summarize-label-desc">
          重置软件将会清除本地应用列表、书签数据、缓存图标等信息，需要重新索引。
        </div>
      </div>
      <div class="summarize-input-wrapper">
        <CustomButton
          type="primary"
          size="small"
          @click="resetSoftware"
          :loading="resetSoftwareLoading"
        >
          重置软件
        </CustomButton>
      </div>
    </section>

    <section class="summarize-section">
      <div class="summarize-label">
        <div class="summarize-label-title">自动检查更新</div>
        <div class="summarize-label-desc">设置应用启动是否自动检查更新</div>
      </div>
      <div class="summarize-input-wrapper">
        <CustomSwitch
          v-model="autoUpdateCheck"
          active-text="开启"
          inactive-text="关闭"
          @change="toggleAutoUpdateCheck"
        />
      </div>
    </section>

    <section class="summarize-section">
      <div class="summarize-label">
        <div class="summarize-label-title">退出应用</div>
        <div class="summarize-label-desc">是否退出应用</div>
      </div>
      <div class="summarize-input-wrapper">
        <CustomButton type="primary" size="small" @click="exitApplication">
          退出应用
        </CustomButton>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { SunOne, Moon, Computer } from '@icon-park/vue-next';
import { enable, isEnabled, disable } from '@tauri-apps/plugin-autostart';
import { useConfigurationStore } from '@/store';
import { initTheme } from '@/utils/theme';
import { invoke } from '@tauri-apps/api/core';
import CustomButton from '@/components/UI/CustomButton.vue';
import CustomSwitch from '@/components/UI/CustomSwitch.vue';

defineOptions({
  name: 'General'
});

const store = useConfigurationStore();

const resetSoftwareLoading = ref(false);
const autoUpdateCheck = ref(true);

const dictTheme = [
  { value: 'light', label: '浅色', icon: SunOne },
  { value: 'dark', label: '深色', icon: Moon },
  { value: 'auto', label: '自动', icon: Computer }
];

const changeTheme = (value: 'light' | 'dark' | 'auto') => {
  store.theme = value;
  initTheme();
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
      ElMessage.success('自启动已开启');
    } else {
      await disable();
      ElMessage.success('自启动已关闭');
    }
  } catch (error) {
    console.error('设置自启动状态失败:', error);
    // 恢复原值
    store.autoStart = !value;
  }
};

// 重置软件
const resetSoftware = async () => {
  try {
    await ElMessageBox.confirm(
      '重置软件将会清除本地应用列表、书签数据、缓存图标等信息，需要重新索引，是否继续？',
      '警告',
      {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }
    );

    resetSoftwareLoading.value = true;
    await invoke('reset_software');
    ElMessage.success('重置软件成功');
  } catch (error: any) {
    if (error !== 'cancel') {
      ElMessage.error(`重置失败: ${error}`);
    }
  } finally {
    resetSoftwareLoading.value = false;
  }
};

// 切换自动检查更新
const toggleAutoUpdateCheck = async (value: boolean) => {
  try {
    await invoke('set_auto_update_check', { enabled: value });
    ElMessage.success(`已${value ? '开启' : '关闭'}自动检查更新`);
  } catch (error) {
    ElMessage.error(`设置失败: ${error}`);
    // 恢复原值
    autoUpdateCheck.value = !value;
  }
};

// 退出应用
const exitApplication = async () => {
  try {
    await ElMessageBox.confirm('确定要退出应用吗？', '提示', {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning'
    });

    await invoke('exit_application');
  } catch (error) {
    if (error !== 'cancel') {
      ElMessage.error(`退出失败: ${error}`);
    }
  }
};

// 获取自动检查更新设置
const fetchAutoUpdateCheck = async () => {
  try {
    autoUpdateCheck.value = await invoke('get_auto_update_check');
  } catch (error) {
    console.error('获取自动检查更新设置失败:', error);
  }
};

onMounted(async () => {
  watchAutoStart();
  await fetchAutoUpdateCheck();
});
</script>

<style scoped lang="scss">
.text-primary {
  color: #4b94f8;
}
</style>
