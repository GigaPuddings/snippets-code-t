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
        'chat-primary-soft': 'var(--chat-primary-soft)',
        // 主题切换窗口
        'dm-bg': 'var(--dm-bg)',
        'dm-card': 'var(--dm-card)',
        'dm-inset': 'var(--dm-inset)',
        'dm-status': 'var(--dm-status)',
        'dm-hover': 'var(--dm-hover)',
        'dm-accent': 'var(--dm-accent)',
        'dm-accent-soft': 'var(--dm-accent-soft)',
        'dm-slate': 'var(--dm-slate-bg)',
        'dm-amber': 'var(--dm-amber-bg)',
        'dm-indigo': 'var(--dm-indigo-bg)',
        'dm-indigo-title': 'var(--dm-indigo-title-bg)',
        'dm-teal': 'var(--dm-teal-bg)',
        'dm-emerald': 'var(--dm-emerald-bg)',
        'dm-red': 'var(--dm-red-bg)',
        'dm-btn': 'var(--dm-btn-bg)',
        'dm-btn-hover': 'var(--dm-btn-hover-bg)',
        'dm-soft': 'var(--dm-border-soft)'
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
        'chat-send-disabled': 'var(--chat-send-disabled-text)',
        // 主题切换窗口
        dm: 'var(--dm-text)',
        'dm-secondary': 'var(--dm-text-secondary)',
        'dm-value': 'var(--dm-text-value)',
        'dm-accent': 'var(--dm-accent)',
        'dm-accent-hover': 'var(--dm-accent-hover)',
        'dm-slate': 'var(--dm-slate-fg)',
        'dm-amber': 'var(--dm-amber-fg)',
        'dm-indigo': 'var(--dm-indigo-fg)',
        'dm-indigo-title': 'var(--dm-indigo-title-fg)',
        'dm-teal': 'var(--dm-teal-fg)',
        'dm-emerald': 'var(--dm-emerald-fg)',
        'dm-red': 'var(--dm-red-fg)',
        'dm-sun': 'var(--dm-sun)',
        'dm-period-day': 'var(--dm-period-day)',
        'dm-period-night': 'var(--dm-period-night)',
        'dm-close-hover': 'var(--dm-close-hover-fg)',
        'dm-btn': 'var(--dm-btn-fg)'
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
        'chat-primary-soft': 'var(--chat-primary-soft)',
        // 主题切换窗口
        dm: 'var(--dm-border)',
        'dm-soft': 'var(--dm-border-soft)',
        'dm-accent': 'var(--dm-accent)',
        'dm-hover': 'var(--dm-border-hover)'
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
        'chat-scroll': 'var(--chat-shadow-scroll)',
        // 主题切换窗口
        dm: 'var(--dm-shadow)',
        'dm-ring': '0 0 0 1px var(--dm-accent)',
        'dm-focus': '0 0 0 2px var(--dm-accent-ring)'
      }
    }
  },
  plugins: []
};
