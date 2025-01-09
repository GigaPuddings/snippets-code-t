/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundColor: {
        panel: 'var(--categories-panel-bg)',
        content: 'var(--categories-content-bg)',
        active: 'var(--categories-bg-active)',
        hover: 'var(--categories-panel-bg-hover)',
        search: 'var(--search-bg)',
        'search-input': 'var(--search-input-bg)',
        'search-hover': 'var(--search-result-hover)',
        'tab-active': 'var(--categories-bg-tab-active)'
      },
      textColor: {
        panel: 'var(--categories-text-color)',
        content: 'var(--categories-info-text-color)',
        active: 'var(--categories-text-color-active)',
        primary: '#4b94f8',
        search: 'var(--search-text)',
        'search-secondary': 'var(--search-placeholder)'
      },
      borderColor: {
        panel: 'var(--categories-border-color)',
        search: 'var(--search-border)'
      }
    }
  },
  plugins: []
};
