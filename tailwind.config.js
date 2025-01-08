/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundColor: {
        primary: 'var(--bg-base1)',
        secondary: 'var(--bg-base2)',
        active: 'var(--bg-active1)',
        highlight: 'var(--bg-active2)'
      },
      textColor: {
        primary: 'var(--text-color1)',
        secondary: 'var(--text-color2)',
        hover: 'var(--text-color-hover)',
        active: 'var(--text-color-active)'
      }
    }
  },
  plugins: []
};
