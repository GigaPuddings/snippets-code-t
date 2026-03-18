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
        statusbar: 'var(--statusbar-bg)'
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
        'panel-text-secondary': 'var(--panel-text-secondary)'
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
        'panel-border': 'var(--panel-border)'
      },
      colors: {
        // 主色调
        primary: {
          DEFAULT: 'var(--el-color-primary)',
          light: 'var(--el-color-primary-light-3)',
          dark: 'var(--el-color-primary-dark-2)'
        }
      }
    }
  },
  plugins: []
};
