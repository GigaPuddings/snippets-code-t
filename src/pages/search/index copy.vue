<script setup lang="ts">
import { reactive } from "vue";
import { invoke } from "@tauri-apps/api/core";
import { unregister } from '@tauri-apps/plugin-global-shortcut';
import { osType } from "../../utils/env";

interface HotkeyState {
  searchHotkey: string;
  configHotkey: string;
}

const state = reactive<HotkeyState>({
  searchHotkey: window.localStorage.getItem('search') || '',
  configHotkey: window.localStorage.getItem('config') || '',
})

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
function keyDown(e: KeyboardEvent, setKey: (arg0: string) => void) {
  e.preventDefault();

  if (e.key === 'Backspace' || e.keyCode === 8) {
    setKey('');
    return;
  }

  let parts = [];

  if (e.ctrlKey) parts.push('Ctrl');
  if (e.shiftKey) parts.push('Shift');
  if (e.altKey) parts.push('Alt');
  if (e.metaKey) parts.push(osType === 'Darwin' ? 'Command' : 'Super');

  let mainKey = '';
  if (e.code.startsWith('Key')) {
    mainKey = e.code.slice(3);
  } else if (e.code.startsWith('Digit')) {
    mainKey = e.code.slice(5);
  } else if (e.code.startsWith('Numpad')) {
    mainKey = 'Num' + e.code.slice(6);
  } else if (e.code.startsWith('Arrow')) {
    mainKey = e.code.slice(5);
  } else if (e.code.startsWith('Intl')) {
    mainKey = e.code.slice(4);
  } else if (/F\d+/.test(e.code)) {
    mainKey = e.code;
  } else if (keyMap[e.code]) {
    mainKey = keyMap[e.code];
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
  state.searchHotkey = value;
  console.log('value', value);
}

function setSelectionConfig(value: string) {
  state.configHotkey = value;
  console.log('value', value);
}

// 快捷键取消
function handleFocusUnregister(name: string, key: string) {
  if (key.trim() === '') {
    console.log('快捷键为空');
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
  }
  window.localStorage.setItem(name, '')
  invoke('register_shortcut_by_frontend', { name: name, shortcut: '' })
}

</script>

<template>
  <main class="container">
    <h1>Welcome to Tauri + Vue</h1>
    <section>
      <input v-model="state.searchHotkey" placeholder="Press shortcut keys"
        @keydown="(e) => keyDown(e, setSelectionSearch)"
        @focus="() => handleFocusUnregister('search', state.searchHotkey)">
      <button @click="() => registerHandler('search', state.searchHotkey)">注册快捷键search</button>
    </section>
    <section>
      <input v-model="state.configHotkey" placeholder="Press shortcut keys"
        @keydown="(e) => keyDown(e, setSelectionConfig)"
        @focus="() => handleFocusUnregister('config', state.configHotkey)">
      <button @click="() => registerHandler('config', state.configHotkey)">注册快捷键config</button>
    </section>
  </main>
</template>
