<template>
  <div class="settings-panel">
    <div class="panel-header">
      <h3 class="panel-title">{{ $t('shortcut.title') }}</h3>
    </div>

    <main class="panel-content">
      <section
        v-for="hotkey in visibleHotkeySettings"
        :key="hotkey.name"
        class="summarize-section transparent-input"
      >
        <div class="summarize-label">
          <div class="summarize-label-title">{{ $t(hotkey.labelKey) }}</div>
          <div class="summarize-label-desc">{{ $t(hotkey.descriptionKey) }}</div>
        </div>
        <div class="summarize-input-wrapper">
          <el-input
            class="summarize-input"
            required
            :model-value="getHotkeyValue(store, hotkey.name)"
            @update:model-value="(value) => setHotkeyValue(store, hotkey.name, String(value))"
            @keydown="keyDown($event, (value) => setHotkeyValue(store, hotkey.name, value))"
            @focus="() => handleFocusUnregister(hotkey.name, getHotkeyValue(store, hotkey.name))"
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
                v-if="getHotkeyValue(store, hotkey.name)"
                type="default"
                size="small"
                class="button-shortcut"
                @click="() => registerHandler(hotkey.name, getHotkeyValue(store, hotkey.name))"
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
import { unregister } from '@tauri-apps/plugin-global-shortcut';
import { useI18n } from 'vue-i18n';
import { CustomButton } from '@/components/UI';
import {
  getHotkeyValue,
  hotkeySettingDefinitions,
  setHotkeyValue,
  type HotkeyName
} from '@/plugins/hotkeys';
import { useConfigurationStore, usePluginStore } from '@/store';
import { osType } from '@/utils/env';
import modal from '@/utils/modal';

const { t } = useI18n();
const store = useConfigurationStore();
const pluginStore = usePluginStore();

defineOptions({
  name: 'Shortcut'
});

const labelText = computed(() => t('shortcut.pressToSet').split(''));

const isHotkeyVisible = (hotkey: (typeof hotkeySettingDefinitions)[number]) => {
  if (!hotkey.pluginId) return true;
  return pluginStore.plugins.some((plugin) => plugin.id === hotkey.pluginId)
    && pluginStore.isEnabled(hotkey.pluginId);
};

const visibleHotkeySettings = computed(() => (
  hotkeySettingDefinitions.filter((hotkey) => isHotkeyVisible(hotkey))
));

onMounted(() => {
  void pluginStore.initialize();
});

const keyMap: Record<string, string> = {
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

function keyDown(e: Event | KeyboardEvent, setKey: (value: string) => void) {
  const event = e as KeyboardEvent;
  event.preventDefault();

  if (event.key === 'Backspace' || event.keyCode === 8) {
    setKey('');
    return;
  }

  const parts: string[] = [];

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
  if (shortcut) {
    setKey(shortcut);
  }
}

function hasMainKey(shortcut: string): boolean {
  const modifiers = ['Ctrl', 'Control', 'Shift', 'Alt', 'Option', 'Command', 'Super', 'Meta'];
  const parts = shortcut.split('+').map((part) => part.trim());
  return parts.some((part) => !modifiers.includes(part));
}

function registerHandler(name: HotkeyName, key: string) {
  if (key.trim() === '') {
    return;
  }

  if (!hasMainKey(key)) {
    modal.msg(t('shortcut.needMainKey'), 'warning');
    return;
  }

  invoke('register_shortcut_by_frontend', {
    name,
    shortcut: key
  })
    .then(() => {
      modal.msg(`${t('shortcut.registerSuccess')}: ${key}`);
    })
    .catch((e: any) => {
      modal.msg(`${t('shortcut.registerFailed')}: ${e}`, 'error');
    });
}

function handleFocusUnregister(name: HotkeyName, key: string) {
  if (key.trim() === '') {
    return;
  }
  unregister(key);
  setHotkeyValue(store, name, '');
  invoke('register_shortcut_by_frontend', { name, shortcut: '' });
}
</script>
