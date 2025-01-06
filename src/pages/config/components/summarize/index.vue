<template>
  <main class="summarize-container">
    <section class="summarize-section">
      <div class="summarize-label">工具条唤醒快捷键：</div>
      <div class="summarize-input-wrapper">
        <el-input class="summarize-input" v-model="store.searchHotkey" placeholder="Press shortcut keys"
          @keydown="keyDown($event, setSelectionSearch)"
          @focus="() => handleFocusUnregister('search', store.searchHotkey)">
        </el-input>
        <el-button class="summarize-button" @click="() => registerHandler('search', store.searchHotkey)">注册</el-button>
      </div>
    </section>

    <section class="summarize-section">
      <div class="summarize-label">主窗口唤醒快捷键：</div>
      <div class="summarize-input-wrapper">
        <el-input class="summarize-input" v-model="store.configHotkey" placeholder="Press shortcut keys"
          @keydown="keyDown($event, setSelectionConfig)"
          @focus="() => handleFocusUnregister('config', store.configHotkey)">
        </el-input>
        <el-button class="summarize-button" @click="() => registerHandler('config', store.configHotkey)">注册</el-button>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { invoke } from "@tauri-apps/api/core";
import { unregister } from '@tauri-apps/plugin-global-shortcut';
import { osType } from "@/utils/env";
import { useConfigurationStore } from '@/store';

const store = useConfigurationStore();

defineOptions({
  name: 'Summarize',
  keepAlive: true
});

// 快捷键映射
const keyMap: any = {
  Backquote: '`',
  Backslash: '\\',
  BracketLeft: '[',
  BracketRight: ']',
  Comma: ',',
  Equal: '=',
  Minus: '-',
  Plus: 'PLUS',
  Period: '.',
  Quote: "'",
  Semicolon: ';',
  Slash: '/',
  Backspace: 'Backspace',
  CapsLock: 'Capslock',
  ContextMenu: 'Contextmenu',
  Space: 'Space',
  Tab: 'Tab',
  Convert: 'Convert',
  Delete: 'Delete',
  End: 'End',
  Help: 'Help',
  Home: 'Home',
  PageDown: 'Pagedown',
  PageUp: 'Pageup',
  Escape: 'Esc',
  PrintScreen: 'Printscreen',
  ScrollLock: 'Scrolllock',
  Pause: 'Pause',
  Insert: 'Insert',
  Suspend: 'Suspend',
}

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
  if (shortcut) {
    setKey(shortcut);
  }
}

// 注册快捷键
function registerHandler(name: string, key: string) {
  if (key.trim() === '') {
    console.log('无效的快捷键');
    return;
  }
  console.log('注册快捷键:', name, '_____', key);
  
  invoke('register_shortcut_by_frontend', {
    name: name,
    shortcut: key,
  }).then(
    () => {
      console.log('快捷键注册成功:', key);
      window.localStorage.setItem(name, key);
    },
    (e: any) => {
      console.error('快捷键注册失败:', e);
      window.localStorage.setItem(name, '')
    }
  );
}

// 设置快捷键
function setSelectionSearch(value: string) {
  store.searchHotkey = value;
  console.log('setSelectionSearch', value);
}

function setSelectionConfig(value: string) {
  store.configHotkey = value;
  console.log('setSelectionConfig', value);
}

// 快捷键取消
function handleFocusUnregister(name: string, key: string) {
  if (key.trim() === '') {
    console.log('快捷键为空');
    return;
  }
  console.log('快捷键取消:', name, '_____', key);
  
  switch (name) {
    case 'search':
      unregister(key);
      setSelectionSearch('');
      break;
    case 'config':
      unregister(key);
      setSelectionConfig('');
      break;
  }
  window.localStorage.setItem(name, '')
  invoke('register_shortcut_by_frontend', { name: name, shortcut: '' })
}
</script>

<style scoped lang="scss">
.summarize-container {
  @apply w-full grid grid-cols-2 grid-rows-[repeat(3,120px)] gap-4 mr-2;
}

.summarize-section {
  @apply h-[120px] bg-[#faf7f5] dark:bg-[#22282c] p-6 rounded-md overflow-hidden;
}

.summarize-label {
  @apply text-sm font-bold;
}

.summarize-input-wrapper {
  @apply w-full flex items-center justify-between gap-4 mt-4;
}

.summarize-input {
  @apply w-full bg-[#e6e1de] rounded-md;
}

.summarize-button {
  width: 100px;
}
</style>
