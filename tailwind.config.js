/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundColor: {
        // 基础面板
        panel: 'var(--categories-panel-bg)',
        content: 'var(--categories-content-bg)',
        active: 'var(--categories-bg-active)',
        'active-hover': 'var(--el-button-hover-bg-color)',
        hover: 'var(--categories-panel-bg-hover)',
        'panel-hover-bg': 'var(--panel-hover-bg)',
        // 搜索
        search: 'var(--search-bg-color)',
        'search-input': 'var(--search-input-bg)',
        'search-hover': 'var(--search-result-hover)',
        'tab-active': 'var(--categories-bg-tab-active)',
        // 编辑器
        editor: 'var(--editor-bg)',
        'editor-hover': 'var(--editor-hover-bg)',
        // 状态栏
        statusbar: 'var(--statusbar-bg)',
        'ocr-shell': 'var(--ocr-shell-bg)',
        'ocr-panel': 'var(--ocr-panel-bg)',
        'ocr-panel-hover': 'var(--ocr-panel-hover-bg)',
        // AI 聊天
        'chat-bg': 'var(--chat-bg)',
        'chat-panel': 'var(--chat-panel)',
        'chat-surface': 'var(--chat-surface)',
        'chat-hover': 'var(--chat-hover)',
        'chat-hover-alt': 'var(--chat-hover-alt)',
        'chat-user-bubble': 'var(--chat-user-bubble-bg)',
        'chat-code': 'var(--chat-code-bg)',
        'chat-code-block': 'var(--chat-code-block-bg)',
        'chat-inset': 'var(--chat-inset-bg)',
        'chat-avatar': 'var(--chat-avatar-bg)',
        'chat-attachment': 'var(--chat-attachment-bg)',
        'chat-input': 'var(--chat-input-bg)',
        'chat-pill': 'var(--chat-pill-bg)',
        'chat-overlay': 'var(--chat-overlay-bg)',
        'chat-overlay-strong': 'var(--chat-overlay-bg-strong)',
        'chat-overlay-soft': 'var(--chat-overlay-bg-soft)',
        'chat-error': 'var(--chat-error-bg)',
        'chat-success': 'var(--chat-success-bg)',
        'chat-warning': 'var(--chat-warning-bg)',
        'chat-send': 'var(--chat-send-bg)',
        'chat-send-hover': 'var(--chat-send-hover)',
        'chat-send-disabled': 'var(--chat-send-disabled-bg)',
        'chat-primary-soft': 'var(--chat-primary-soft)'
      },
      textColor: {
        // 基础面板
        panel: 'var(--categories-text-color)',
        content: 'var(--categories-info-text-color)',
        active: 'var(--categories-text-color-active)',
        primary: 'var(--el-color-primary)',
        // 搜索
        search: 'var(--search-text-color)',
        'search-info': 'var(--search-info-text-color)',
        'search-secondary': 'var(--search-placeholder)',
        // 编辑器
        editor: 'var(--editor-text)',
        'editor-secondary': 'var(--editor-text-secondary)',
        // 状态栏
        statusbar: 'var(--statusbar-text)',
        // 弹出层/面板
        'panel-text': 'var(--panel-text)',
        'panel-text-secondary': 'var(--panel-text-secondary)',
        ocr: 'var(--ocr-text)',
        'ocr-secondary': 'var(--ocr-text-secondary)',
        'ocr-muted': 'var(--ocr-text-muted)',
        // AI 聊天
        chat: 'var(--chat-text)',
        'chat-strong': 'var(--chat-text-strong)',
        'chat-body': 'var(--chat-text-body)',
        'chat-secondary': 'var(--chat-text-secondary)',
        'chat-tertiary': 'var(--chat-text-tertiary)',
        'chat-disabled': 'var(--chat-text-disabled)',
        'chat-muted': 'var(--chat-muted)',
        'chat-error': 'var(--chat-error-text)',
        'chat-success': 'var(--chat-success-text)',
        'chat-warning': 'var(--chat-warning-text)',
        'chat-send': 'var(--chat-send-text)',
        'chat-send-disabled': 'var(--chat-send-disabled-text)'
      },
      borderColor: {
        // 基础面板
        panel: 'var(--categories-border-color)',
        search: 'var(--search-border-color)',
        active: 'var(--el-color-primary)',
        // 编辑器
        editor: 'var(--editor-border)',
        // 状态栏
        statusbar: 'var(--statusbar-border)',
        // 弹出层/面板
        'panel-border': 'var(--panel-border)',
        ocr: 'var(--ocr-border)',
        // AI 聊天
        chat: 'var(--chat-border)',
        'chat-hover': 'var(--chat-hover)',
        'chat-user-bubble': 'var(--chat-user-bubble-border)',
        'chat-code': 'var(--chat-code-border)',
        'chat-input': 'var(--chat-input-border)',
        'chat-error': 'var(--chat-error-border)',
        'chat-success': 'var(--chat-success-border)',
        'chat-warning': 'var(--chat-warning-border)',
        'chat-primary-soft': 'var(--chat-primary-soft)'
      },
      colors: {
        // 主色调
        primary: {
          DEFAULT: 'var(--el-color-primary)',
          light: 'var(--el-color-primary-light-3)',
          dark: 'var(--el-color-primary-dark-2)'
        }
      },
      boxShadow: {
        ocr: 'var(--ocr-shadow)',
        'ocr-panel': 'var(--ocr-panel-shadow)',
        'chat-sm': 'var(--chat-shadow-sm)',
        'chat-md': 'var(--chat-shadow-md)',
        'chat-lg': 'var(--chat-shadow-lg)',
        'chat-focus': 'var(--chat-shadow-focus)',
        'chat-overlay': 'var(--chat-shadow-overlay)',
        'chat-scroll': 'var(--chat-shadow-scroll)'
      }
    }
  },
  plugins: []
};
