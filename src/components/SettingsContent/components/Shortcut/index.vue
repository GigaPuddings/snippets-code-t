<template>
  <div class="settings-panel">
    <h3 class="panel-title">{{ $t('shortcut.title') }}</h3>
    <main class="summarize-container">
    <section class="summarize-section transparent-input">
      <div class="summarize-label">
        <div class="summarize-label-title">{{ $t('shortcut.searchHotkey') }}</div>
        <div class="summarize-label-desc">{{ $t('shortcut.searchHotkeyDesc') }}</div>
      </div>
      <div class="summarize-input-wrapper">
        <el-input
          class="summarize-input"
          required
          v-model="store.searchHotkey"
          @keydown="keyDown($event, setSelectionSearch)"
          @focus="() => handleFocusUnregister('search', store.searchHotkey)"
        >
          <template #suffix>
            <label class="label">
              <span
                v-for="(char, index) in labelText"
                :key="index"
                class="label-char"
                :style="{ '--index': index }"
              >
                {{ char }}
              </span>
            </label>
          </template>
          <template #append>
            <CustomButton
              v-if="store.searchHotkey"
              type="default"
              size="small"
              @click="() => registerHandler('search', store.searchHotkey)"
              class="button-shortcut"
            >
              {{ $t('shortcut.register') }}
            </CustomButton>
          </template>
        </el-input>
      </div>
    </section>

    <section class="summarize-section transparent-input">
      <div class="summarize-label">
        <div class="summarize-label-title">{{ $t('shortcut.configHotkey') }}</div>
        <div class="summarize-label-desc">{{ $t('shortcut.configHotkeyDesc') }}</div>
      </div>
      <div class="summarize-input-wrapper">
        <el-input
          class="summarize-input"
          v-model="store.configHotkey"
          required
          @keydown="keyDown($event, setSelectionConfig)"
          @focus="() => handleFocusUnregister('config', store.configHotkey)"
        >
          <template #suffix>
            <label class="label">
              <span
                v-for="(char, index) in labelText"
                :key="index"
                class="label-char"
                :style="{ '--index': index }"
              >
                {{ char }}
              </span>
            </label>
          </template>
          <template #append>
            <CustomButton
              v-if="store.configHotkey"
              type="default"
              size="small"
              @click="() => registerHandler('config', store.configHotkey)"
              class="button-shortcut"
            >
              {{ $t('shortcut.register') }}
            </CustomButton>
          </template>
        </el-input>
      </div>
    </section>

    <section class="summarize-section transparent-input">
      <div class="summarize-label">
        <div class="summarize-label-title">{{ $t('shortcut.translateHotkey') }}</div>
        <div class="summarize-label-desc">{{ $t('shortcut.translateHotkeyDesc') }}</div>
      </div>
      <div class="summarize-input-wrapper">
        <el-input
          class="summarize-input"
          v-model="store.translateHotkey"
          required
          @keydown="keyDown($event, setSelectionTranslate)"
          @focus="
            () => handleFocusUnregister('translate', store.translateHotkey)
          "
        >
          <template #suffix>
            <label class="label">
              <span
                v-for="(char, index) in labelText"
                :key="index"
                class="label-char"
                :style="{ '--index': index }"
              >
                {{ char }}
              </span>
            </label>
          </template>
          <template #append>
            <CustomButton
              v-if="store.translateHotkey"
              type="default"
              size="small"
              @click="() => registerHandler('translate', store.translateHotkey)"
              class="button-shortcut"
            >
              {{ $t('shortcut.register') }}
            </CustomButton>
          </template>
        </el-input>
      </div>
    </section>

    <section class="summarize-section transparent-input">
      <div class="summarize-label">
        <div class="summarize-label-title">{{ $t('shortcut.selectionTranslateHotkey') }}</div>
        <div class="summarize-label-desc">{{ $t('shortcut.selectionTranslateHotkeyDesc') }}</div>
      </div>
      <div class="summarize-input-wrapper">
        <el-input
          class="summarize-input"
          v-model="store.selectionTranslateHotkey"
          required
          @keydown="keyDown($event, setSelectionTranslateHotkey)"
          @focus="
            () =>
              handleFocusUnregister(
                'selectionTranslate',
                store.selectionTranslateHotkey
              )
          "
        >
          <template #suffix>
            <label class="label">
              <span
                v-for="(char, index) in labelText"
                :key="index"
                class="label-char"
                :style="{ '--index': index }"
              >
                {{ char }}
              </span>
            </label>
          </template>
          <template #append>
            <CustomButton
              v-if="store.selectionTranslateHotkey"
              type="default"
              size="small"
              @click="
                () =>
                  registerHandler(
                    'selectionTranslate',
                    store.selectionTranslateHotkey
                  )
              "
              class="button-shortcut"
            >
              {{ $t('shortcut.register') }}
            </CustomButton>
          </template>
        </el-input>
      </div>
    </section>

    <section class="summarize-section transparent-input">
      <div class="summarize-label">
        <div class="summarize-label-title">{{ $t('shortcut.screenshotHotkey') }}</div>
        <div class="summarize-label-desc">{{ $t('shortcut.screenshotHotkeyDesc') }}</div>
      </div>
      <div class="summarize-input-wrapper">
        <el-input
          class="summarize-input"
          v-model="store.screenshotHotkey"
          required
          @keydown="keyDown($event, setSelectionScreenshotHotkey)"
          @focus="
            () =>
              handleFocusUnregister(
                'screenshot',
                store.screenshotHotkey
              )
          "
        >
          <template #suffix>
            <label class="label">
              <span
                v-for="(char, index) in labelText"
                :key="index"
                class="label-char"
                :style="{ '--index': index }"
              >
                {{ char }}
              </span>
            </label>
          </template>
          <template #append>
            <CustomButton
              v-if="store.screenshotHotkey"
              type="default"
              size="small"
              @click="
                () =>
                  registerHandler(
                    'screenshot',
                    store.screenshotHotkey
                  )
              "
              class="button-shortcut"
            >
              {{ $t('shortcut.register') }}
            </CustomButton>
          </template>
        </el-input>
      </div>
    </section>

    <section class="summarize-section transparent-input">
      <div class="summarize-label">
        <div class="summarize-label-title">{{ $t('shortcut.darkModeHotkey') }}</div>
        <div class="summarize-label-desc">{{ $t('shortcut.darkModeHotkeyDesc') }}</div>
      </div>
      <div class="summarize-input-wrapper">
        <el-input
          class="summarize-input"
          v-model="store.darkModeHotkey"
          required
          @keydown="keyDown($event, setSelectionDarkModeHotkey)"
          @focus="
            () =>
              handleFocusUnregister(
                'darkMode',
                store.darkModeHotkey
              )
          "
        >
          <template #suffix>
            <label class="label">
              <span
                v-for="(char, index) in labelText"
                :key="index"
                class="label-char"
                :style="{ '--index': index }"
              >
                {{ char }}
              </span>
            </label>
          </template>
          <template #append>
            <CustomButton
              v-if="store.darkModeHotkey"
              type="default"
              size="small"
              @click="
                () =>
                  registerHandler(
                    'darkMode',
                    store.darkModeHotkey
                  )
              "
              class="button-shortcut"
            >
              {{ $t('shortcut.register') }}
            </CustomButton>
          </template>
        </el-input>
      </div>
    </section>
  </main>
  </div>
</template>

<script setup lang="ts">
import { invoke } from '@tauri-apps/api/core';
import { useI18n } from 'vue-i18n';
import { unregister } from '@tauri-apps/plugin-global-shortcut';
import { osType } from '@/utils/env';
import { useConfigurationStore } from '@/store';
import { CustomButton } from '@/components/UI';
import modal from '@/utils/modal';

const { t } = useI18n();
const store = useConfigurationStore();

defineOptions({
  name: 'Shortcut'
});

const labelText = computed(() => t('shortcut.pressToSet').split(''));

// 快捷键映射
const keyMap: any = {
  Backquote: '`',
  Backslash: '\\',
  BracketLeft: '[',
  BracketRight: ']',
  Comma: ',',
  Equal: '=',
  Minus: '-',
  Period: '.',
  Quote: "'",
  Semicolon: ';',
  Slash: '/',
  Backspace: 'Backspace',
  CapsLock: 'CapsLock',
  ContextMenu: 'ContextMenu',
  Space: 'Space',
  Tab: 'Tab',
  Delete: 'Delete',
  End: 'End',
  Home: 'Home',
  PageDown: 'PageDown',
  PageUp: 'PageUp',
  Escape: 'Escape',
  PrintScreen: 'PrintScreen',
  ScrollLock: 'ScrollLock',
  Pause: 'Pause',
  Insert: 'Insert'
};

// 快捷键监听
function keyDown(e: Event | KeyboardEvent, setKey: (arg0: string) => void) {
  const event = e as KeyboardEvent;
  event.preventDefault();

  if (event.key === 'Backspace' || event.keyCode === 8) {
    setKey('');
    return;
  }

  let parts = [];

  if (event.ctrlKey) parts.push('Ctrl');
  if (event.shiftKey) parts.push('Shift');
  if (event.altKey) parts.push('Alt');
  if (event.metaKey) parts.push(osType === 'Darwin' ? 'Command' : 'Super');

  let mainKey = '';
  if (event.code.startsWith('Key')) {
    mainKey = event.code.slice(3);
  } else if (event.code.startsWith('Digit')) {
    mainKey = event.code.slice(5);
  } else if (event.code.startsWith('Numpad')) {
    mainKey = 'Num' + event.code.slice(6);
  } else if (event.code.startsWith('Arrow')) {
    mainKey = event.code.slice(5);
  } else if (event.code.startsWith('Intl')) {
    mainKey = event.code.slice(4);
  } else if (/F\d+/.test(event.code)) {
    mainKey = event.code;
  } else if (keyMap[event.code]) {
    mainKey = keyMap[event.code];
  }

  if (mainKey) {
    parts.push(mainKey);
  }

  const shortcut = parts.join('+');
  // 显示当前按键状态（包括只有修饰键的情况）
  if (shortcut) {
    setKey(shortcut);
  }
}

// 检查快捷键是否包含主键
function hasMainKey(shortcut: string): boolean {
  const modifiers = ['Ctrl', 'Control', 'Shift', 'Alt', 'Option', 'Command', 'Super', 'Meta'];
  const parts = shortcut.split('+').map(p => p.trim());
  // 检查是否有非修饰键的部分
  return parts.some(part => !modifiers.includes(part));
}

// 注册快捷键
function registerHandler(name: string, key: string) {
  if (key.trim() === '') {
    return;
  }
  
  // 检查是否包含主键
  if (!hasMainKey(key)) {
    modal.msg(t('shortcut.needMainKey'), 'warning');
    return;
  }
  
  invoke('register_shortcut_by_frontend', {
    name: name,
    shortcut: key
  })
    .then(() => {
      modal.msg(`${t('shortcut.registerSuccess')}: ${key}`);
    })
    .catch((e: any) => {
      modal.msg(`${t('shortcut.registerFailed')}: ${e}`, 'error');
    });
}

// 设置快捷键
function setSelectionSearch(value: string) {
  store.searchHotkey = value;
}

function setSelectionConfig(value: string) {
  store.configHotkey = value;
}

function setSelectionTranslate(value: string) {
  store.translateHotkey = value;
}

function setSelectionTranslateHotkey(value: string) {
  store.selectionTranslateHotkey = value;
}

function setSelectionScreenshotHotkey(value: string) {
  store.screenshotHotkey = value;
}

function setSelectionDarkModeHotkey(value: string) {
  store.darkModeHotkey = value;
}

// 快捷键取消
function handleFocusUnregister(name: string, key: string) {
  if (key.trim() === '') {
    return;
  }
  switch (name) {
    case 'search':
      unregister(key);
      setSelectionSearch('');
      break;
    case 'config':
      unregister(key);
      setSelectionConfig('');
      break;
    case 'translate':
      unregister(key);
      setSelectionTranslate('');
      break;
    case 'selectionTranslate':
      unregister(key);
      setSelectionTranslateHotkey('');
      break;
    case 'screenshot':
      unregister(key);
      setSelectionScreenshotHotkey('');
      break;
    case 'darkMode':
      unregister(key);
      setSelectionDarkModeHotkey('');
      break;
  }
  invoke('register_shortcut_by_frontend', { name: name, shortcut: '' });
}
</script>

<style scoped lang="scss">
.settings-panel {
  @apply flex flex-col;
}

.panel-title {
  @apply text-base font-bold mb-4 pb-2 border-b border-panel;
}
</style>
